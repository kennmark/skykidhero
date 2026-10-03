import {
  getPublishedSeasonsService,
  getPublishedSeasonBySlugService,
  getPublishedSeasonByNumberService,
  getAdminSeasonsService,
  getAdminSeasonService,
  createSeasonService,
  updateSeasonService,
  uploadSeasonMediaService,
  removeSeasonMediaService,
} from "./season.service.js";

import {
  success,
} from "../../shared/utils/response.js";

export async function getPublishedSeasonsController(
  req,
  res,
  next,
) {
  try {
    const seasons = await getPublishedSeasonsService();

    return success(
      res,
      seasons,
      "Seasons retrieved successfully.",
    );
  } catch (err) {
    next(err);
  }
}

export async function getPublishedSeasonBySlugController(
  req,
  res,
  next,
) {
  try {
    const season =
      await getPublishedSeasonBySlugService(
        req.validatedParams.slug,
      );

    return success(
      res,
      season,
      "Season retrieved successfully.",
    );
  } catch (err) {
    next(err);
  }
}

export async function getPublishedSeasonByNumberController(
  req,
  res,
  next,
) {
  try {
    const season =
      await getPublishedSeasonByNumberService(
        req.validatedParams.number,
      );

    return success(
      res,
      season,
      "Season retrieved successfully.",
    );
  } catch (err) {
    next(err);
  }
}

export async function getAdminSeasonsController(
  req,
  res,
  next,
) {
  try {
    const seasons = await getAdminSeasonsService();

    return success(
      res,
      seasons,
      "Admin Seasons retrieved successfully.",
    );
  } catch (err) {
    next(err);
  }
}

export async function getAdminSeasonController(
  req,
  res,
  next,
) {
  try {
    const season = await getAdminSeasonService(
      req.validatedParams.id,
    );

    return success(
      res,
      season,
      "Season retrieved successfully.",
    );
  } catch (err) {
    next(err);
  }
}

export async function createSeasonController(
  req,
  res,
  next,
) {
  try {
    const season = await createSeasonService(
      req.validated,
    );

    return success(
      res,
      season,
      "Season created successfully.",
      201,
    );
  } catch (err) {
    next(err);
  }
}

export async function updateSeasonController(
  req,
  res,
  next,
) {
  try {
    const season = await updateSeasonService(
      req.validatedParams.id,
      req.validated,
    );

    return success(
      res,
      season,
      "Season updated successfully.",
    );
  } catch (err) {
    next(err);
  }
}

export async function uploadSeasonMediaController(
  req,
  res,
  next,
) {
  try {
    const {
      id,
      mediaType,
    } = req.validatedParams;

    const season =
      await uploadSeasonMediaService(
        id,
        mediaType,
        req.file,
      );

    return success(
      res,
      season,
      "Season image uploaded successfully.",
    );
  } catch (err) {
    next(err);
  }
}

export async function removeSeasonMediaController(
  req,
  res,
  next,
) {
  try {
    const {
      id,
      mediaType,
    } = req.validatedParams;

    const season =
      await removeSeasonMediaService(
        id,
        mediaType,
      );

    return success(
      res,
      season,
      "Season image removed successfully.",
    );
  } catch (err) {
    next(err);
  }
}