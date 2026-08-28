import {
  archiveWingedLight,
  createWingedLight,
  findAdminWingedLightById,
  findAdminWingedLightByIdIncludingDeleted,
  findAdminWingedLightsByMapId,
  findArchivedWingedLightsByMapId,
  findMapForWingedLight,
  findPublishedWingedLightByCode,
  findPublishedWingedLightsByMapId,
  findWingedLightByCode,
  findWingedLightByMapAndDisplayOrder,
  restoreWingedLight,
  updateWingedLight,
} from "./wingedLight.repository.js";

import AppError from "../../shared/utils/AppError.js";

import {
  deleteImageFromCloudinary,
  uploadWingedLightImageToCloudinary,
} from "../../services/cloudinary.service.js";

import { fileTypeFromBuffer, } from "file-type";

async function detectWingedLightImageType(
  file
) {
  if (!file?.buffer) {
    throw new AppError(
      "Please select an image.",
      400
    );
  }

  const detectedType =
    await fileTypeFromBuffer(
      file.buffer
    );

  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ];

  if (
    !detectedType ||
    !allowedMimeTypes.includes(
      detectedType.mime
    )
  ) {
    throw new AppError(
      "The uploaded file is not a valid JPEG, PNG, WebP, or GIF image.",
      400
    );
  }

  return detectedType;
}

async function safelyDeleteWingedLightCloudinaryImage(
  publicId
) {
  if (!publicId) {
    return;
  }

  try {
    const result =
      await deleteImageFromCloudinary(
        publicId
      );

    if (
      result &&
      ![
        "ok",
        "not found",
      ].includes(result.result)
    ) {
      console.warn(
        "Unexpected Cloudinary deletion result:",
        result.result
      );
    }
  } catch (error) {
    console.error(
      `Unable to delete Cloudinary image ${publicId}:`,
      error.message
    );
  }
}

export async function getPublishedWingedLightsByMap(
  mapId
) {
  return findPublishedWingedLightsByMapId(
    mapId
  );
}

export async function getPublishedWingedLight(
  code
) {
  return findPublishedWingedLightByCode(
    code
  );
}

export async function getAdminWingedLightsByMap(
  mapId
) {
  return findAdminWingedLightsByMapId(
    mapId
  );
}

export async function getAdminWingedLight(
  id
) {
  return findAdminWingedLightById(
    id
  );
}

export async function createAdminWingedLight(
  mapId,
  data
) {
  const map =
    await findMapForWingedLight(
      mapId
    );

  if (!map) {
    return {
      success: false,
      reason: "MAP_NOT_FOUND",
      data: null,
    };
  }

  const existingCode =
    await findWingedLightByCode(
      data.code
    );

  if (existingCode) {
    return {
      success: false,
      reason: "CODE_EXISTS",
      data: null,
    };
  }

  const existingOrder =
    await findWingedLightByMapAndDisplayOrder(
      mapId,
      data.displayOrder
    );

  if (existingOrder) {
    return {
      success: false,
      reason:
        "DISPLAY_ORDER_EXISTS",
      data: null,
    };
  }

  const wingedLight =
    await createWingedLight(
      mapId,
      data
    );

  return {
    success: true,
    reason: null,
    data: wingedLight,
  };
}

export async function updateAdminWingedLight(
  id,
  data
) {
  const existing =
    await findAdminWingedLightById(
      id
    );

  if (!existing) {
    return {
      success: false,
      reason:
        "WINGED_LIGHT_NOT_FOUND",
      data: null,
    };
  }

  if (
    data.code &&
    data.code !== existing.code
  ) {
    const codeOwner =
      await findWingedLightByCode(
        data.code
      );

    if (
      codeOwner &&
      codeOwner.id !== id
    ) {
      return {
        success: false,
        reason: "CODE_EXISTS",
        data: null,
      };
    }
  }

  if (
    data.displayOrder !==
      undefined &&
    data.displayOrder !==
      existing.displayOrder
  ) {
    const orderOwner =
      await findWingedLightByMapAndDisplayOrder(
        existing.mapId,
        data.displayOrder
      );

    if (
      orderOwner &&
      orderOwner.id !== id
    ) {
      return {
        success: false,
        reason:
          "DISPLAY_ORDER_EXISTS",
        data: null,
      };
    }
  }

  const wingedLight =
    await updateWingedLight(
      id,
      data
    );

  return {
    success: true,
    reason: null,
    data: wingedLight,
  };
}

export async function replaceWingedLightImageService(
  wingedLightId,
  file
) {
  const wingedLight =
    await findAdminWingedLightById(
      wingedLightId
    );

  if (!wingedLight) {
    throw new AppError(
      "Winged Light not found.",
      404
    );
  }

  if (!file?.buffer) {
    throw new AppError(
      "Please select an image.",
      400
    );
  }

  await detectWingedLightImageType(
    file
  );

  const oldPublicId =
    wingedLight.imagePublicId;

  let uploadedImage = null;

  try {
    uploadedImage =
      await uploadWingedLightImageToCloudinary(
        file.buffer,
        {
          wingedLightCode:
            wingedLight.code,
        }
      );

    const updatedWingedLight =
      await updateWingedLight(
        wingedLightId,
        {
          image:
            uploadedImage.url,

          imagePublicId:
            uploadedImage.publicId,
        }
      );

    /*
     * Database now points to the
     * new asset. Safe to remove old.
     */
    if (
      oldPublicId &&
      oldPublicId !==
        uploadedImage.publicId
    ) {
      await safelyDeleteWingedLightCloudinaryImage(
        oldPublicId
      );
    }

    return updatedWingedLight;
  } catch (error) {
    /*
     * Cloudinary succeeded but
     * Prisma failed. Remove orphan.
     */
    if (
      uploadedImage?.publicId
    ) {
      await safelyDeleteWingedLightCloudinaryImage(
        uploadedImage.publicId
      );
    }

    throw error;
  }
}

export async function removeWingedLightImageService(
  wingedLightId
) {
  const wingedLight =
    await findAdminWingedLightById(
      wingedLightId
    );

  if (!wingedLight) {
    throw new AppError(
      "Winged Light not found.",
      404
    );
  }

  const oldPublicId =
    wingedLight.imagePublicId;

  const hasExistingImage =
    Boolean(
      wingedLight.image ||
      oldPublicId
    );

  if (!hasExistingImage) {
    return wingedLight;
  }

  /*
   * Clear PostgreSQL first.
   */
  const updatedWingedLight =
    await updateWingedLight(
      wingedLightId,
      {
        image: null,
        imagePublicId: null,
      }
    );

  /*
   * Then clean Cloudinary.
   */
  await safelyDeleteWingedLightCloudinaryImage(
    oldPublicId
  );

  return updatedWingedLight;
}

export async function getArchivedWingedLightsByMap(
  mapId
) {
  const map =
    await findMapForWingedLight(
      mapId
    );

  if (!map) {
    return {
      success: false,
      reason: "MAP_NOT_FOUND",
      data: null,
    };
  }

  const wingedLights =
    await findArchivedWingedLightsByMapId(
      mapId
    );

  return {
    success: true,
    reason: null,
    data: wingedLights,
  };
}

export async function archiveAdminWingedLight(
  id
) {
  const existing =
    await findAdminWingedLightById(
      id
    );

  if (!existing) {
    return {
      success: false,
      reason:
        "WINGED_LIGHT_NOT_FOUND",
      data: null,
    };
  }

  const wingedLight =
    await archiveWingedLight(
      id
    );

  return {
    success: true,
    reason: null,
    data: wingedLight,
  };
}

export async function restoreAdminWingedLight(
  id
) {
  const existing =
    await findAdminWingedLightByIdIncludingDeleted(
      id
    );

  if (!existing) {
    return {
      success: false,
      reason:
        "WINGED_LIGHT_NOT_FOUND",
      data: null,
    };
  }

  if (!existing.deletedAt) {
    return {
      success: false,
      reason:
        "WINGED_LIGHT_NOT_ARCHIVED",
      data: null,
    };
  }

  const map =
    await findMapForWingedLight(
      existing.mapId
    );

  if (!map) {
    return {
      success: false,
      reason:
        "MAP_NOT_FOUND",
      data: null,
    };
  }

  const wingedLight =
    await restoreWingedLight(
      id
    );

  return {
    success: true,
    reason: null,
    data: wingedLight,
  };
}