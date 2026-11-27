import AppError
  from "../../shared/utils/AppError.js";

import {
  findSeasonForSeasonalSpirit,
  findMapForSeasonalSpirit,
  findSpiritByCode,
  findSeasonalSpiritBySeasonAndDisplayOrder,
  findPublishedSeasonalSpiritsBySeason,
  findPublishedSeasonalSpiritByCode,
  findAdminSeasonalSpiritsBySeason,
  findAdminSeasonalSpiritById,
  createSeasonalSpirit,
  updateSeasonalSpirit,
  syncSeasonalSpiritCollectibles,
  syncSeasonalSpiritTreeCosts,
  findSeasonalSpiritCollectible,
  updateSeasonalSpiritCollectibleImage,
} from "./seasonalSpirit.repository.js";

import {
  deleteImageFromCloudinary,
  uploadSpiritMediaToCloudinary,
  uploadSpiritCollectibleImageToCloudinary,
} from "../../services/cloudinary.service.js";

import {
  fileTypeFromBuffer,
} from "file-type";

/*
 * -------------------------------------------------------
 * Public
 * -------------------------------------------------------
 */

export async function getPublishedSeasonalSpiritsService(
  seasonId,
) {
  const season =
    await findSeasonForSeasonalSpirit(
      seasonId,
    );

  if (
    !season ||
    !season.published
  ) {
    throw new AppError(
      "Season not found.",
      404,
    );
  }

  return findPublishedSeasonalSpiritsBySeason(
    seasonId,
  );
}

export async function getPublishedSeasonalSpiritService(
  code,
) {
  const spirit =
    await findPublishedSeasonalSpiritByCode(
      code,
    );

  if (!spirit) {
    throw new AppError(
      "Seasonal Spirit not found.",
      404,
    );
  }

  return spirit;
}

/*
 * -------------------------------------------------------
 * Admin read
 * -------------------------------------------------------
 */

export async function getAdminSeasonalSpiritsService(
  seasonId,
) {
  const season =
    await findSeasonForSeasonalSpirit(
      seasonId,
    );

  if (!season) {
    throw new AppError(
      "Season not found.",
      404,
    );
  }

  return findAdminSeasonalSpiritsBySeason(
    seasonId,
  );
}

export async function getAdminSeasonalSpiritService(
  id,
) {
  const spirit =
    await findAdminSeasonalSpiritById(
      id,
    );

  if (!spirit) {
    throw new AppError(
      "Seasonal Spirit not found.",
      404,
    );
  }

  return spirit;
}

/*
 * -------------------------------------------------------
 * Create
 * -------------------------------------------------------
 */

export async function createSeasonalSpiritService(
  seasonId,
  data,
) {
  const season =
    await findSeasonForSeasonalSpirit(
      seasonId,
    );

  if (!season) {
    throw new AppError(
      "Season not found.",
      404,
    );
  }

  const existingCode =
    await findSpiritByCode(
      data.code,
    );

  if (existingCode) {
    throw new AppError(
      `Spirit code "${data.code}" already exists.`,
      409,
    );
  }

  if (
    data.mapId !== null &&
    data.mapId !== undefined
  ) {
    const map =
      await findMapForSeasonalSpirit(
        data.mapId,
      );

    if (!map) {
      throw new AppError(
        "Map not found.",
        404,
      );
    }
  }

  const existingDisplayOrder =
    await findSeasonalSpiritBySeasonAndDisplayOrder(
      seasonId,
      data.displayOrder,
    );

  if (existingDisplayOrder) {
    throw new AppError(
      `Display order ${data.displayOrder} is already used by another Seasonal Spirit in this Season.`,
      409,
    );
  }

  return createSeasonalSpirit(
    seasonId,
    {
      ...data,

      /*
       * Seasonal Spirits always use
       * the SEASONAL enum value.
       * The client never controls this.
       */
    },
  );
}

/*
 * -------------------------------------------------------
 * Update
 * -------------------------------------------------------
 */

export async function updateSeasonalSpiritService(
  id,
  data,
) {
  const existing =
    await findAdminSeasonalSpiritById(
      id,
    );

  if (!existing) {
    throw new AppError(
      "Seasonal Spirit not found.",
      404,
    );
  }

  /*
   * A Seasonal Spirit must remain
   * attached to its Season.
   *
   * seasonId is therefore deliberately
   * not accepted from the update payload.
   */

  if (
    data.mapId !== null &&
    data.mapId !== undefined
  ) {
    const map =
      await findMapForSeasonalSpirit(
        data.mapId,
      );

    if (!map) {
      throw new AppError(
        "Map not found.",
        404,
      );
    }
  }

  if (
    data.displayOrder !==
    undefined &&
    data.displayOrder !==
      existing.displayOrder
  ) {
    const duplicate =
      await findSeasonalSpiritBySeasonAndDisplayOrder(
        existing.seasonId,
        data.displayOrder,
      );

    if (
      duplicate &&
      duplicate.id !== id
    ) {
      throw new AppError(
        `Display order ${data.displayOrder} is already used by another Seasonal Spirit in this Season.`,
        409,
      );
    }
  }

  return updateSeasonalSpirit(
    id,
    data,
  );
}

/*
 * -------------------------------------------------------
 * Seasonal Spirit Media
 * -------------------------------------------------------
 */

const SEASONAL_SPIRIT_MEDIA_CONFIG = {
  icon: {
    urlField: "iconImage",
    publicIdField: "iconImagePublicId",
    label: "Seasonal Spirit icon",
    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ],
  },

  detail: {
    urlField: "detailImage",
    publicIdField: "detailImagePublicId",
    label: "Seasonal Spirit detail image",
    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ],
  },
};

async function detectSeasonalSpiritImageType(file) {
  if (!file?.buffer) {
    throw new AppError(
      "Please select an image.",
      400,
    );
  }

  const detectedType = await fileTypeFromBuffer(
    file.buffer,
  );

  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ];

  if (
    !detectedType ||
    !allowedMimeTypes.includes(detectedType.mime)
  ) {
    throw new AppError(
      "The uploaded file is not a valid JPEG, PNG, WebP, or GIF image.",
      400,
    );
  }

  return detectedType;
}

function getSeasonalSpiritMediaConfig(slot) {
  const config =
    SEASONAL_SPIRIT_MEDIA_CONFIG[slot];

  if (!config) {
    throw new AppError(
      "Invalid Seasonal Spirit media slot.",
      400,
    );
  }

  return config;
}

async function safelyDeleteSeasonalSpiritCloudinaryImage(
  publicId,
) {
  if (!publicId) {
    return;
  }

  try {
    const result = await deleteImageFromCloudinary(
      publicId,
    );

    if (
      result &&
      !["ok", "not found"].includes(result.result)
    ) {
      console.warn(
        "Unexpected Cloudinary deletion result:",
        result.result,
      );
    }
  } catch (error) {
    console.error(
      `Unable to delete Cloudinary image ${publicId}:`,
      error.message,
    );
  }
}

/*
 * -------------------------------------------------------
 * Upload / Replace Media
 * -------------------------------------------------------
 */

export async function replaceSeasonalSpiritMediaService(
  spiritId,
  slot,
  file,
) {
  const spirit =
    await findAdminSeasonalSpiritById(spiritId);

  if (!spirit) {
    throw new AppError(
      "Seasonal Spirit not found.",
      404,
    );
  }

  if (!file?.buffer) {
    throw new AppError(
      "Please select an image.",
      400,
    );
  }

  const config =
    getSeasonalSpiritMediaConfig(slot);

  const detectedType =
    await detectSeasonalSpiritImageType(file);

  if (
    !config.allowedMimeTypes.includes(
      detectedType.mime,
    )
  ) {
    throw new AppError(
      `Invalid file type for the ${config.label}.`,
      400,
    );
  }

  const oldPublicId =
    spirit[config.publicIdField];

  let uploadedImage = null;

  try {
    uploadedImage =
      await uploadSpiritMediaToCloudinary(
        file.buffer,
        {
          spiritCode: spirit.code,
          slot,
        },
      );

    const updatedSpirit =
      await updateSeasonalSpirit(
        spiritId,
        {
          [config.urlField]: uploadedImage.url,
          [config.publicIdField]:
            uploadedImage.publicId,
        },
      );

    /*
     * Delete the old image only after
     * the database update succeeds.
     */
    if (
      oldPublicId &&
      oldPublicId !== uploadedImage.publicId
    ) {
      await safelyDeleteSeasonalSpiritCloudinaryImage(
        oldPublicId,
      );
    }

    return updatedSpirit;
  } catch (error) {
    /*
     * If the upload succeeded but the database
     * update failed, remove the newly uploaded
     * image to avoid an orphaned Cloudinary file.
     */
    if (uploadedImage?.publicId) {
      await safelyDeleteSeasonalSpiritCloudinaryImage(
        uploadedImage.publicId,
      );
    }

    throw error;
  }
}

/*
 * -------------------------------------------------------
 * Remove Media
 * -------------------------------------------------------
 */

export async function removeSeasonalSpiritMediaService(
  spiritId,
  slot,
) {
  const spirit =
    await findAdminSeasonalSpiritById(spiritId);

  if (!spirit) {
    throw new AppError(
      "Seasonal Spirit not found.",
      404,
    );
  }

  const config =
    getSeasonalSpiritMediaConfig(slot);

  const oldPublicId =
    spirit[config.publicIdField];

  const hasExistingMedia = Boolean(
    spirit[config.urlField] ||
    oldPublicId
  );

  if (!hasExistingMedia) {
    return spirit;
  }

  /*
   * Clear the database references first.
   */
  const updatedSpirit =
    await updateSeasonalSpirit(
      spiritId,
      {
        [config.urlField]: null,
        [config.publicIdField]: null,
      },
    );

  /*
   * Then remove the Cloudinary asset.
   */
  await safelyDeleteSeasonalSpiritCloudinaryImage(
    oldPublicId,
  );

  return updatedSpirit;
}

/*
 * -------------------------------------------------------
 * Collectibles
 * -------------------------------------------------------
 */

export async function updateSeasonalSpiritCollectiblesService(
  spiritId,
  collectibles,
) {
  const spirit = await findAdminSeasonalSpiritById(spiritId);

  if (!spirit) {
    throw new AppError("Seasonal Spirit not found.", 404);
  }

  const existingIds = new Set(
    spirit.collectibles.map((item) => item.id),
  );

  // Prevent a request from attaching another Spirit's collectible ID.
  for (const collectible of collectibles) {
    if (collectible.id !== undefined && !existingIds.has(collectible.id)) {
      throw new AppError(
        "One or more Collectibles do not belong to this Seasonal Spirit.",
        400,
      );
    }
  }

  const retainedIds = new Set(
    collectibles
      .map((item) => item.id)
      .filter((id) => id !== undefined),
  );

  const removedPublicIds = spirit.collectibles
    .filter((item) => !retainedIds.has(item.id))
    .map((item) => item.imagePublicId)
    .filter(Boolean);

  const updatedSpirit = await syncSeasonalSpiritCollectibles(
    spiritId,
    collectibles,
  );

  // Delete collectible images only after the database transaction succeeds.
  for (const publicId of removedPublicIds) {
    await safelyDeleteSeasonalSpiritCloudinaryImage(publicId);
  }

  return updatedSpirit;
}

/*
 * -------------------------------------------------------
 * Tree costs
 * -------------------------------------------------------
 */

export async function updateSeasonalSpiritTreeCostsService(
  spiritId,
  treeCosts,
) {
  const spirit = await findAdminSeasonalSpiritById(spiritId);

  if (!spirit) {
    throw new AppError("Seasonal Spirit not found.", 404);
  }

  const existingIds = new Set(
    spirit.treeCosts.map((item) => item.id),
  );

  for (const treeCost of treeCosts) {
    if (treeCost.id !== undefined && !existingIds.has(treeCost.id)) {
      throw new AppError(
        "One or more Tree Costs do not belong to this Seasonal Spirit.",
        400,
      );
    }
  }

  return syncSeasonalSpiritTreeCosts(spiritId, treeCosts);
}

/*
 * -------------------------------------------------------
 * Collectible image upload / replacement
 * -------------------------------------------------------
 */

export async function replaceSeasonalSpiritCollectibleImageService(
  spiritId,
  collectibleId,
  file,
) {
  const spirit = await findAdminSeasonalSpiritById(spiritId);

  if (!spirit) {
    throw new AppError("Seasonal Spirit not found.", 404);
  }

  const collectible = await findSeasonalSpiritCollectible(
    spiritId,
    collectibleId,
  );

  if (!collectible) {
    throw new AppError("Seasonal Spirit Collectible not found.", 404);
  }

  // Reuse the same byte-level image validation as the Spirit media endpoints.
  await detectSeasonalSpiritImageType(file);

  const oldPublicId = collectible.imagePublicId;
  let uploadedImage = null;

  try {
    uploadedImage = await uploadSpiritCollectibleImageToCloudinary(
      file.buffer,
      {
        spiritCode: spirit.code,
        collectibleId: collectible.id,
      },
    );

    await updateSeasonalSpiritCollectibleImage(collectible.id, {
      image: uploadedImage.url,
      imagePublicId: uploadedImage.publicId,
    });
  } catch (error) {
    // Avoid leaving a Cloudinary orphan if the database update fails.
    if (uploadedImage?.publicId) {
      await safelyDeleteSeasonalSpiritCloudinaryImage(
        uploadedImage.publicId,
      );
    }

    throw error;
  }

  // The DB now points to the new asset; it is safe to remove the old one.
  if (oldPublicId && oldPublicId !== uploadedImage.publicId) {
    await safelyDeleteSeasonalSpiritCloudinaryImage(oldPublicId);
  }

  return findAdminSeasonalSpiritById(spiritId);
}

/*
 * -------------------------------------------------------
 * Collectible image removal
 * -------------------------------------------------------
 */

export async function removeSeasonalSpiritCollectibleImageService(
  spiritId,
  collectibleId,
) {
  const spirit = await findAdminSeasonalSpiritById(spiritId);

  if (!spirit) {
    throw new AppError("Seasonal Spirit not found.", 404);
  }

  const collectible = await findSeasonalSpiritCollectible(
    spiritId,
    collectibleId,
  );

  if (!collectible) {
    throw new AppError("Seasonal Spirit Collectible not found.", 404);
  }

  const oldPublicId = collectible.imagePublicId;

  await updateSeasonalSpiritCollectibleImage(collectible.id, {
    image: null,
    imagePublicId: null,
  });

  await safelyDeleteSeasonalSpiritCloudinaryImage(oldPublicId);

  return findAdminSeasonalSpiritById(spiritId);
}
