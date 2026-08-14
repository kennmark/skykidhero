import AppError
  from "../../shared/utils/AppError.js";

import {
  deleteImageFromCloudinary,
  uploadMapMediaToCloudinary,
} from "../../services/cloudinary.service.js";

import {
  findAdminMapById,
  findAllAdminMaps,
  findAllPublishedMaps,
  findMapSection,
  findPublishedMapByRoute,
  updateMap,
  updateMapSection,
} from "./map.repository.js";

const MAP_MEDIA_CONFIG = {
  main: {
    urlField: "image",
    publicIdField:
      "imagePublicId",

    label: "main Map image",

    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ],
  },

  gif: {
    urlField: "mapGif",
    publicIdField:
      "mapGifPublicId",

    label: "Map animation",

    allowedMimeTypes: [
      "image/gif",
      "image/webp",
    ],
  },

  "constellation-icon": {
    urlField:
      "mapConstellationIcon",

    publicIdField:
      "mapConstellationIconPublicId",

    label:
      "Map constellation icon",

    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
    ],
  },

  "constellation-image": {
    urlField:
      "mapConstellationImage",

    publicIdField:
      "mapConstellationImagePublicId",

    label:
      "Map constellation image",

    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ],
  },
};

function getMapMediaConfig(slot) {
  const config =
    MAP_MEDIA_CONFIG[slot];

  if (!config) {
    throw new AppError(
      "Invalid Map media slot.",
      400
    );
  }

  return config;
}

async function safelyDeleteCloudinaryImage(
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

function hasOwn(object, property) {
  return Object.prototype.hasOwnProperty.call(
    object,
    property
  );
}

function normalizeNullableString(
  value
) {
  if (
    value === null ||
    value === undefined
  ) {
    return null;
  }

  if (typeof value !== "string") {
    return value;
  }

  return value.trim() || null;
}

export async function replaceMapMediaService(
  mapId,
  slot,
  file
) {
  const map =
    await findAdminMapById(
      mapId
    );

  if (!map) {
    throw new AppError(
      "Map not found.",
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
    getMapMediaConfig(slot);

  if (
    !config.allowedMimeTypes.includes(
      file.mimetype
    )
  ) {
    throw new AppError(
      slot === "gif"
        ? "The Map animation must be a GIF or WebP image."
        : `Invalid file type for the ${config.label}.`,
      400
    );
  }

  const oldPublicId =
    map[config.publicIdField];

  let uploadedImage = null;

  try {
    uploadedImage =
      await uploadMapMediaToCloudinary(
        file.buffer,
        {
          mapSlug: map.slug,
          slot,
        }
      );

    const updatedMap =
      await updateMap(
        mapId,
        {
          [config.urlField]:
            uploadedImage.url,

          [config.publicIdField]:
            uploadedImage.publicId,
        }
      );

    /*
     * Delete the previous asset only
     * after the database update succeeds.
     */
    if (
      oldPublicId &&
      oldPublicId !==
        uploadedImage.publicId
    ) {
      await safelyDeleteCloudinaryImage(
        oldPublicId
      );
    }

    return updatedMap;
  } catch (error) {
    /*
     * Cloudinary succeeded but database
     * update failed. Remove the newly
     * created orphan asset.
     */
    if (uploadedImage?.publicId) {
      await safelyDeleteCloudinaryImage(
        uploadedImage.publicId
      );
    }

    throw error;
  }
}

export async function removeMapMediaService(
  mapId,
  slot
) {
  const map =
    await findAdminMapById(
      mapId
    );

  if (!map) {
    throw new AppError(
      "Map not found.",
      404
    );
  }

  const config =
    getMapMediaConfig(slot);

  const oldPublicId =
    map[config.publicIdField];

  const hasExistingMedia =
    Boolean(
      map[config.urlField] ||
      oldPublicId
    );

  if (!hasExistingMedia) {
    return map;
  }

  /*
   * Clear the database before deleting
   * the Cloudinary asset.
   */
  const updatedMap =
    await updateMap(
      mapId,
      {
        [config.urlField]:
          null,

        [config.publicIdField]:
          null,
      }
    );

  await safelyDeleteCloudinaryImage(
    oldPublicId
  );

  return updatedMap;
}

export async function getAllMapsService() {
  return findAllPublishedMaps();
}

export async function getMapByRouteService(
  id,
  slug
) {
  const map =
    await findPublishedMapByRoute(
      id,
      slug
    );

  if (!map) {
    throw new AppError(
      "Map not found.",
      404
    );
  }

  return map;
}

export async function getAdminMapsService() {
  return findAllAdminMaps();
}

export async function getAdminMapByIdService(
  id
) {
  const map =
    await findAdminMapById(id);

  if (!map) {
    throw new AppError(
      "Map not found.",
      404
    );
  }

  return map;
}

export async function updateMapService(
  id,
  data
) {
  const map =
    await findAdminMapById(id);

  if (!map) {
    throw new AppError(
      "Map not found.",
      404
    );
  }

  const updateData = {};

  for (const field of [
    "subtitle",
    "introduction",
    "caption",
    "imageAlt",
  ]) {
    if (hasOwn(data, field)) {
      updateData[field] =
        normalizeNullableString(
          data[field]
        );
    }
  }

  if (hasOwn(data, "published")) {
    updateData.published =
      data.published;
  }

  const hasImage =
    hasOwn(data, "image");

  const hasImagePublicId =
    hasOwn(
      data,
      "imagePublicId"
    );

  if (
    !hasImage &&
    hasImagePublicId
  ) {
    throw new AppError(
      "imagePublicId must be updated together with image.",
      400
    );
  }

  if (hasImage) {
    const nextImage =
      normalizeNullableString(
        data.image
      );

    updateData.image =
      nextImage;

    if (!nextImage) {
      updateData.imagePublicId =
        null;
    } else if (
      hasImagePublicId
    ) {
      updateData.imagePublicId =
        normalizeNullableString(
          data.imagePublicId
        );
    } else if (
      nextImage !== map.image
    ) {
      updateData.imagePublicId =
        null;
    }
  }

  const oldPublicId =
    map.imagePublicId;

  const nextPublicId =
    hasOwn(
      updateData,
      "imagePublicId"
    )
      ? updateData.imagePublicId
      : oldPublicId;

  const shouldDeleteOldImage =
    Boolean(
      oldPublicId &&
      oldPublicId !== nextPublicId
    );

  const updatedMap =
    await updateMap(
      id,
      updateData
    );

  if (shouldDeleteOldImage) {
    try {
      const result =
        await deleteImageFromCloudinary(
          oldPublicId
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
        `Unable to delete old Map image ${oldPublicId}:`,
        error.message
      );
    }
  }

  return updatedMap;
}

export async function updateMapSectionService(
  mapId,
  type,
  data
) {
  const map =
    await findAdminMapById(mapId);

  if (!map) {
    throw new AppError(
      "Map not found.",
      404
    );
  }

  const section =
    await findMapSection(
      mapId,
      type
    );

  if (!section) {
    throw new AppError(
      "Map section not found.",
      404
    );
  }

  const updateData = {};

  if (hasOwn(data, "heading")) {
    updateData.heading =
      normalizeNullableString(
        data.heading
      );
  }

  if (
    hasOwn(data, "description")
  ) {
    updateData.description =
      normalizeNullableString(
        data.description
      );
  }

  if (hasOwn(data, "published")) {
    updateData.published =
      data.published;
  }

  return updateMapSection(
    mapId,
    type,
    updateData
  );
}