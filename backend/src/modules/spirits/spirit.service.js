import {
  createRegularSpirit,
  findAdminRegularSpiritsByMap,
  findAdminSpiritById,
  findMapForSpirit,
  findPublishedRegularSpiritByCode,
  findPublishedRegularSpiritsByMap,
  findSpiritByCode,
  updateRegularSpirit,
  syncRegularSpiritCollectibles,
  syncRegularSpiritTreeCosts,
  findSpiritCollectible,
  updateSpiritCollectibleImage,
} from "./spirit.repository.js";

import AppError
  from "../../shared/utils/AppError.js";

import {
  deleteImageFromCloudinary,
  uploadSpiritMediaToCloudinary,
  uploadSpiritCollectibleImageToCloudinary,
} from "../../services/cloudinary.service.js";

import {
  fileTypeFromBuffer,
} from "file-type";

const SPIRIT_MEDIA_CONFIG = {
  icon: {
    urlField:
      "iconImage",

    publicIdField:
      "iconImagePublicId",

    label:
      "Spirit icon",

    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ],
  },

  detail: {
    urlField:
      "detailImage",

    publicIdField:
      "detailImagePublicId",

    label:
      "Spirit detail image",

    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ],
  },
};

async function detectSpiritImageType(
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

function getSpiritMediaConfig(
  slot
) {
  const config =
    SPIRIT_MEDIA_CONFIG[slot];

  if (!config) {
    throw new AppError(
      "Invalid Spirit media slot.",
      400
    );
  }

  return config;
}

async function safelyDeleteSpiritCloudinaryImage(
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

function httpError(
  status,
  message
) {
  const error =
    new Error(message);

  error.status = status;

  return error;
}

export async function getPublishedRegularSpiritsService(
  mapId
) {
  const map =
    await findMapForSpirit(
      mapId
    );

  if (
    !map ||
    !map.published
  ) {
    throw httpError(
      404,
      "Map not found."
    );
  }

  return findPublishedRegularSpiritsByMap(
    mapId
  );
}

export async function getPublishedRegularSpiritService(
  code
) {
  const spirit =
    await findPublishedRegularSpiritByCode(
      code
    );

  if (!spirit) {
    throw httpError(
      404,
      "Spirit not found."
    );
  }

  return spirit;
}

export async function getAdminRegularSpiritsService(
  mapId
) {
  const map =
    await findMapForSpirit(
      mapId
    );

  if (!map) {
    throw httpError(
      404,
      "Map not found."
    );
  }

  return findAdminRegularSpiritsByMap(
    mapId
  );
}

export async function getAdminRegularSpiritService(
  id
) {
  const spirit =
    await findAdminSpiritById(
      id
    );

  if (!spirit) {
    throw httpError(
      404,
      "Regular Spirit not found."
    );
  }

  return spirit;
}

export async function createRegularSpiritService(
  mapId,
  data
) {
  const map =
    await findMapForSpirit(
      mapId
    );

  if (!map) {
    throw httpError(
      404,
      "Map not found."
    );
  }

  const existingSpirit =
    await findSpiritByCode(
      data.code
    );

  if (existingSpirit) {
    throw httpError(
      409,
      `Spirit code "${data.code}" already exists.`
    );
  }

  return createRegularSpirit(
    mapId,
    data
  );
}

export async function updateRegularSpiritService(
  id,
  data
) {
  const existing =
    await findAdminSpiritById(
      id
    );

  if (!existing) {
    throw httpError(
      404,
      "Regular Spirit not found."
    );
  }

  return updateRegularSpirit(
    id,
    data
  );
}

export async function replaceSpiritMediaService(
  spiritId,
  slot,
  file
) {
  const spirit =
    await findAdminSpiritById(
      spiritId
    );

  if (!spirit) {
    throw new AppError(
      "Regular Spirit not found.",
      404
    );
  }

  if (!file?.buffer) {
    throw new AppError(
      "Please select an image.",
      400
    );
  }

  const config =
    getSpiritMediaConfig(
      slot
    );

  const detectedType =
  await detectSpiritImageType(
    file
  );

if (
  !config.allowedMimeTypes.includes(
    detectedType.mime
  )
) {
  throw new AppError(
    `Invalid file type for the ${config.label}.`,
    400
  );
}

  const oldPublicId =
    spirit[
      config.publicIdField
    ];

  let uploadedImage =
    null;

  try {
    uploadedImage =
      await uploadSpiritMediaToCloudinary(
        file.buffer,
        {
          spiritCode:
            spirit.code,

          slot,
        }
      );

    const updatedSpirit =
      await updateRegularSpirit(
        spiritId,
        {
          [config.urlField]:
            uploadedImage.url,

          [config.publicIdField]:
            uploadedImage.publicId,
        }
      );

    /*
     * Only remove the old Cloudinary
     * image after Prisma succeeds.
     */
    if (
      oldPublicId &&
      oldPublicId !==
        uploadedImage.publicId
    ) {
      await safelyDeleteSpiritCloudinaryImage(
        oldPublicId
      );
    }

    return updatedSpirit;
  } catch (error) {
    /*
     * Upload succeeded but database
     * update failed. Remove the newly
     * uploaded orphan.
     */
    if (
      uploadedImage?.publicId
    ) {
      await safelyDeleteSpiritCloudinaryImage(
        uploadedImage.publicId
      );
    }

    throw error;
  }
}

export async function removeSpiritMediaService(
  spiritId,
  slot
) {
  const spirit =
    await findAdminSpiritById(
      spiritId
    );

  if (!spirit) {
    throw new AppError(
      "Regular Spirit not found.",
      404
    );
  }

  const config =
    getSpiritMediaConfig(
      slot
    );

  const oldPublicId =
    spirit[
      config.publicIdField
    ];

  const hasExistingMedia =
    Boolean(
      spirit[
        config.urlField
      ] ||
      oldPublicId
    );

  if (!hasExistingMedia) {
    return spirit;
  }

  /*
   * Clear PostgreSQL first.
   */
  const updatedSpirit =
    await updateRegularSpirit(
      spiritId,
      {
        [config.urlField]:
          null,

        [config.publicIdField]:
          null,
      }
    );

  /*
   * Then clean Cloudinary.
   */
  await safelyDeleteSpiritCloudinaryImage(
    oldPublicId
  );

  return updatedSpirit;
}

export async function updateRegularSpiritCollectiblesService(
  spiritId,
  collectibles
) {
  const spirit =
    await findAdminSpiritById(
      spiritId
    );

  if (!spirit) {
    throw new AppError(
      "Regular Spirit not found.",
      404
    );
  }

  const existingIds =
    new Set(
      spirit.collectibles.map(
        (item) => item.id
      )
    );

  /*
   * Make sure a client cannot submit
   * a Collectible belonging to another
   * Spirit.
   */
  for (
    const collectible
    of collectibles
  ) {
    if (
      collectible.id &&
      !existingIds.has(
        collectible.id
      )
    ) {
      throw new AppError(
        "One or more Collectibles do not belong to this Spirit.",
        400
      );
    }
  }

  const retainedIds =
    new Set(
      collectibles
        .map(
          (item) =>
            item.id
        )
        .filter(Boolean)
    );

  const removedPublicIds =
    spirit.collectibles
      .filter(
        (item) =>
          !retainedIds.has(
            item.id
          )
      )
      .map(
        (item) =>
          item.imagePublicId
      )
      .filter(Boolean);

  const updatedSpirit =
    await syncRegularSpiritCollectibles(
      spiritId,
      collectibles
    );

  /*
   * Database succeeded first.
   * Now clean media belonging to
   * deleted collectible rows.
   */
  for (
    const publicId
    of removedPublicIds
  ) {
    await safelyDeleteSpiritCloudinaryImage(
      publicId
    );
  }

  return updatedSpirit;
}

export async function updateRegularSpiritTreeCostsService(
  spiritId,
  treeCosts
) {
  const spirit =
    await findAdminSpiritById(
      spiritId
    );

  if (!spirit) {
    throw new AppError(
      "Regular Spirit not found.",
      404
    );
  }

  const existingIds =
    new Set(
      spirit.treeCosts.map(
        (item) => item.id
      )
    );

  for (
    const treeCost
    of treeCosts
  ) {
    if (
      treeCost.id &&
      !existingIds.has(
        treeCost.id
      )
    ) {
      throw new AppError(
        "One or more Tree Costs do not belong to this Spirit.",
        400
      );
    }
  }

  return syncRegularSpiritTreeCosts(
    spiritId,
    treeCosts
  );
}

export async function replaceSpiritCollectibleImageService(
  spiritId,
  collectibleId,
  file
) {
  const spirit =
    await findAdminSpiritById(
      spiritId
    );

  if (!spirit) {
    throw new AppError(
      "Regular Spirit not found.",
      404
    );
  }

  const collectible =
    await findSpiritCollectible(
      spiritId,
      collectibleId
    );

  if (!collectible) {
    throw new AppError(
      "Spirit Collectible not found.",
      404
    );
  }

  /*
   * Reuse the same real-file
   * validation we already use for
   * Spirit icon/detail uploads.
   */
  await detectSpiritImageType(
    file
  );

  const oldPublicId =
    collectible.imagePublicId;

  let uploadedImage =
    null;

  try {
    uploadedImage =
      await uploadSpiritCollectibleImageToCloudinary(
        file.buffer,
        {
          spiritCode:
            spirit.code,

          collectibleId:
            collectible.id,
        }
      );
      
      await updateSpiritCollectibleImage(
        collectible.id,
        {
          image:
            uploadedImage.url,

          imagePublicId:
            uploadedImage.publicId,
        }
      );
      } catch (error) {
    /*
     * If Cloudinary succeeded but
     * the DB update failed, remove
     * the newly-created orphan.
     */
    if (
      uploadedImage?.publicId
    ) {
      await safelyDeleteSpiritCloudinaryImage(
        uploadedImage.publicId
      );
    }

    throw error;
  }

  /*
   * DB is now safely pointing at
   * the new asset, so the previous
   * asset can be removed.
   */
  if (
    oldPublicId &&
    oldPublicId !==
      uploadedImage.publicId
  ) {
    await safelyDeleteSpiritCloudinaryImage(
      oldPublicId
    );
  }

  return findAdminSpiritById(
    spiritId
  );
}

export async function removeSpiritCollectibleImageService(
  spiritId,
  collectibleId
) {
  const spirit =
    await findAdminSpiritById(
      spiritId
    );

  if (!spirit) {
    throw new AppError(
      "Regular Spirit not found.",
      404
    );
  }

  const collectible =
    await findSpiritCollectible(
      spiritId,
      collectibleId
    );

  if (!collectible) {
    throw new AppError(
      "Spirit Collectible not found.",
      404
    );
  }

  const oldPublicId =
    collectible.imagePublicId;

  /*
   * Clear DB first.
   */
  await updateSpiritCollectibleImage(
    collectible.id,
    {
      image: null,
      imagePublicId:
        null,
    }
  );

  /*
   * Then clean Cloudinary.
   */
  if (oldPublicId) {
    await safelyDeleteSpiritCloudinaryImage(
      oldPublicId
    );
  }

  return findAdminSpiritById(
    spiritId
  );
}