import {
  createSeasonalSpiritService,
  getAdminSeasonalSpiritsService,
  getAdminSeasonalSpiritService,
  getPublishedSeasonalSpiritsService,
  getPublishedSeasonalSpiritService,
  updateSeasonalSpiritService,
  updateSeasonalSpiritCollectiblesService,
  updateSeasonalSpiritTreeCostsService,
  replaceSeasonalSpiritCollectibleImageService,
  removeSeasonalSpiritCollectibleImageService,
  getPublishedSeasonalSpiritsBySeasonNumberService,
  deleteSeasonalSpiritService,
} from "./seasonalSpirit.service.js";

import {
  createSeasonalSpiritSchema,
  seasonalSpiritCodeParamSchema,
  seasonalSpiritIdParamSchema,
  seasonalSpiritSeasonIdParamSchema,
  updateSeasonalSpiritSchema,
} from "./seasonalSpirit.validation.js";

import {
  replaceSeasonalSpiritMediaService,
  removeSeasonalSpiritMediaService,
} from "./seasonalSpirit.service.js";

import AppError from "../../shared/utils/AppError.js";

import { success } from "../../shared/utils/response.js";

export async function getPublishedSeasonalSpiritsController(req, res, next) {
  try {
    const { seasonId } = req.validatedParams;
    const spirits = await getPublishedSeasonalSpiritsService(seasonId);

    return success(res, spirits, "Seasonal Spirits retrieved successfully.");
  } catch (error) {
    return next(error);
  }
}

export async function getPublishedSeasonalSpiritController(req, res, next) {
  try {
    const { code } = req.validatedParams;
    const spirit = await getPublishedSeasonalSpiritService(code);

    return success(res, spirit, "Seasonal Spirit retrieved successfully.");
  } catch (error) {
    return next(error);
  }
}

export async function getAdminSeasonalSpiritsController(req, res, next) {
  try {
    const { seasonId } = req.validatedParams;
    const spirits = await getAdminSeasonalSpiritsService(seasonId);

    return success(res, spirits, "Seasonal Spirits retrieved successfully.");
  } catch (error) {
    return next(error);
  }
}

export async function getAdminSeasonalSpiritController(req, res, next) {
  try {
    const { id } = req.validatedParams;
    const spirit = await getAdminSeasonalSpiritService(id);

    return success(res, spirit, "Seasonal Spirit retrieved successfully.");
  } catch (error) {
    return next(error);
  }
}

export async function createAdminSeasonalSpiritController(req, res, next) {
  try {
    const { seasonId } = req.validatedParams;
    const spirit = await createSeasonalSpiritService(seasonId, req.validated);

    return success(res, spirit, "Seasonal Spirit created successfully.", 201);
  } catch (error) {
    return next(error);
  }
}

export async function updateAdminSeasonalSpiritController(req, res, next) {
  try {
    const { id } = req.validatedParams;
    const spirit = await updateSeasonalSpiritService(id, req.validated);

    return success(res, spirit, "Seasonal Spirit updated successfully.");
  } catch (error) {
    return next(error);
  }
}

export async function uploadSeasonalSpiritMediaController(
  req,
  res,
  next,
) {
  try {
    if (!req.file) {
      throw new AppError(
        "Please select an image.",
        400,
      );
    }

    const {
      id,
      slot,
    } = req.validatedParams;

    const spirit =
      await replaceSeasonalSpiritMediaService(
        id,
        slot,
        req.file,
      );

    return success(
      res,
      spirit,
      "Seasonal Spirit media uploaded successfully.",
    );
  } catch (error) {
    return next(error);
  }
}

export async function removeSeasonalSpiritMediaController(
  req,
  res,
  next,
) {
  try {
    const {
      id,
      slot,
    } = req.validatedParams;

    const spirit =
      await removeSeasonalSpiritMediaService(
        id,
        slot,
      );

    return success(
      res,
      spirit,
      "Seasonal Spirit media removed successfully.",
    );
  } catch (error) {
    return next(error);
  }
}

export async function updateAdminSeasonalSpiritCollectiblesController(req, res, next) {
  try {
    const { id } = req.validatedParams;
    const { collectibles } = req.validated;
    const spirit = await updateSeasonalSpiritCollectiblesService(id, collectibles);

    return success(res, spirit, "Seasonal Spirit collectibles updated successfully.");
  } catch (error) {
    return next(error);
  }
}

export async function updateAdminSeasonalSpiritTreeCostsController(req, res, next) {
  try {
    const { id } = req.validatedParams;
    const { treeCosts } = req.validated;
    const spirit = await updateSeasonalSpiritTreeCostsService(id, treeCosts);

    return success(res, spirit, "Seasonal Spirit tree costs updated successfully.");
  } catch (error) {
    return next(error);
  }
}

export async function uploadSeasonalSpiritCollectibleImageController(req, res, next) {
  try {
    if (!req.file) {
      throw new AppError("Please select an image.", 400);
    }

    const { id, collectibleId } = req.validatedParams;
    const spirit = await replaceSeasonalSpiritCollectibleImageService(
      id,
      collectibleId,
      req.file,
    );

    return success(res, spirit, "Seasonal Spirit collectible image uploaded successfully.");
  } catch (error) {
    return next(error);
  }
}

export async function removeSeasonalSpiritCollectibleImageController(req, res, next) {
  try {
    const { id, collectibleId } = req.validatedParams;
    const spirit = await removeSeasonalSpiritCollectibleImageService(id, collectibleId);

    return success(res, spirit, "Seasonal Spirit collectible image removed successfully.");
  } catch (error) {
    return next(error);
  }
}

export async function getPublishedSeasonalSpiritsBySeasonNumberController(
  req,
  res,
  next,
) {
  try {
    const { seasonNumber } = req.validatedParams;
    const spirits =
      await getPublishedSeasonalSpiritsBySeasonNumberService(
        seasonNumber,
      );

    return success(
      res,
      spirits,
      "Seasonal Spirits retrieved successfully.",
    );
  } catch (error) {
    return next(error);
  }
}

export async function deleteAdminSeasonalSpiritController(req, res, next) {
  try {
    const { id } = req.validatedParams;
    const spirit = await deleteSeasonalSpiritService(id);

    return success(
      res,
      spirit,
      "Seasonal Spirit deleted successfully.",
    );
  } catch (error) {
    return next(error);
  }
}