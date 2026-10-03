import AppError
  from "../../shared/utils/AppError.js";

import {
  findPublishedSeasons,
  findPublishedSeasonBySlug,
  findPublishedSeasonByNumber,
  findSeasonById,
  findSeasonByCode,
  findSeasonBySlug,
  findSeasonByNumber,
  findAdminSeasons,
  createSeason,
  updateSeason,
} from "./season.repository.js";
import { fileTypeFromBuffer } from "file-type";
import {
  deleteImageFromCloudinary,
  uploadMapMediaToCloudinary,
} from "../../services/cloudinary.service.js";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

async function validateSeasonImageBuffer(file) {
  if (!file?.buffer) {
    throw new AppError(
      400,
      "Image file is required.",
    );
  }

  if (file.size > MAX_IMAGE_SIZE) {
    throw new AppError(
      400,
      "Image must not exceed 5 MB.",
    );
  }

  const detectedType =
    await fileTypeFromBuffer(file.buffer);

  if (
    !detectedType ||
    !ALLOWED_IMAGE_TYPES.has(
      detectedType.mime,
    )
  ) {
    throw new AppError(
      400,
      "Invalid image file type.",
    );
  }

  return detectedType;
}

export async function uploadSeasonMediaService(
  id,
  mediaType,
  file,
) {
  const season = await findSeasonById(id);

  if (!season) {
    throw new AppError(
      404,
      "Season not found.",
    );
  }

  await validateSeasonImageBuffer(file);

  if (
    mediaType !== "banner" &&
    mediaType !== "icon"
  ) {
    throw new AppError(
      400,
      "Invalid Season media type.",
    );
  }

  const folder =
    `skykidhero/seasons/${season.slug}/${mediaType}`;

  /*
   * IMPORTANT:
   *
   * Use the same existing Cloudinary upload helper
   * used by your Spirit/Winged Light media services.
   *
   * It should return:
   * {
   *   secure_url,
   *   public_id
   * }
   */

  const uploaded =
    await uploadMapMediaToCloudinary(
      file.buffer,
      folder,
    );

  const updateData =
    mediaType === "banner"
      ? {
          image: uploaded.secure_url,
          imagePublicId: uploaded.public_id,
        }
      : {
          iconImage: uploaded.secure_url,
          iconImagePublicId:
            uploaded.public_id,
        };

  const oldPublicId =
    mediaType === "banner"
      ? season.imagePublicId
      : season.iconImagePublicId;

  try {
    const updated =
      await updateSeason(
        id,
        updateData,
      );

    /*
     * Delete the previous asset only
     * after the DB has been updated.
     */
    if (oldPublicId) {
      await deleteImageFromCloudinary(
        oldPublicId,
      );
    }

    return updated;
  } catch (err) {
    /*
     * Prevent orphaned new assets when
     * the database update fails.
     */
    await deleteImageFromCloudinary(
      uploaded.public_id,
    );

    throw err;
  }
}

export async function removeSeasonMediaService(
  id,
  mediaType,
) {
  const season = await findSeasonById(id);

  if (!season) {
    throw new AppError(
      404,
      "Season not found.",
    );
  }

  if (
    mediaType !== "banner" &&
    mediaType !== "icon"
  ) {
    throw new AppError(
      400,
      "Invalid Season media type.",
    );
  }

  const publicId =
    mediaType === "banner"
      ? season.imagePublicId
      : season.iconImagePublicId;

  if (!publicId) {
    return season;
  }

  const updateData =
    mediaType === "banner"
      ? {
          image: null,
          imagePublicId: null,
        }
      : {
          iconImage: null,
          iconImagePublicId: null,
        };

  const updated =
    await updateSeason(
      id,
      updateData,
    );

  await deleteCloudinaryAsset(
    publicId,
  );

  return updated;
}

export async function getPublishedSeasonsService() {
  return findPublishedSeasons();
}

export async function getPublishedSeasonBySlugService(slug) {
  const season = await findPublishedSeasonBySlug(slug);

  if (!season) {
    throw new AppError(
      404,
      "Season not found."
    );
  }

  return season;
}

export async function getPublishedSeasonByNumberService(number) {
  const season = await findPublishedSeasonByNumber(number);

  if (!season) {
    throw new AppError(
      404,
      "Season not found."
    );
  }

  return season;
}

export async function getAdminSeasonsService() {
  return findAdminSeasons();
}

export async function getAdminSeasonService(id) {
  const season = await findSeasonById(id);

  if (!season) {
    throw new AppError(
      404,
      "Season not found."
    );
  }

  return season;
}

export async function createSeasonService(data) {
  const existingCode = await findSeasonByCode(data.code);

  if (existingCode) {
    throw new AppError(
      409,
      "A Season with this code already exists."
    );
  }

  const existingSlug = await findSeasonBySlug(data.slug);

  if (existingSlug) {
    throw new AppError(
      409,
      "A Season with this slug already exists."
    );
  }

  const existingNumber = await findSeasonByNumber(data.number);

  if (existingNumber) {
    throw new AppError(
      409,
      "A Season with this number already exists."
    );
  }

  return createSeason(data);
}

export async function updateSeasonService(id, data) {
  const existing = await findSeasonById(id);

  if (!existing) {
    throw new AppError(
      404,
      "Season not found."
    );
  }

  if (
    data.code !== undefined &&
    data.code !== existing.code
  ) {
    const duplicateCode = await findSeasonByCode(data.code);

    if (
      duplicateCode &&
      duplicateCode.id !== id
    ) {
      throw new AppError(
        409,
        "A Season with this code already exists."
      );
    }
  }

  if (
    data.slug !== undefined &&
    data.slug !== existing.slug
  ) {
    const duplicateSlug = await findSeasonBySlug(data.slug);

    if (
      duplicateSlug &&
      duplicateSlug.id !== id
    ) {
      throw new AppError(
        409,
        "A Season with this slug already exists."
      );
    }
  }

  if (
    data.number !== undefined &&
    data.number !== existing.number
  ) {
    const duplicateNumber =
      await findSeasonByNumber(data.number);

    if (
      duplicateNumber &&
      duplicateNumber.id !== id
    ) {
      throw new AppError(
        409,
        "A Season with this number already exists."
      );
    }
  }

  return updateSeason(id, data);
}