import {
  createRegularSpiritService,
  getAdminRegularSpiritsService,
  getAdminRegularSpiritService,
  getPublishedRegularSpiritsService,
  getPublishedRegularSpiritService,
  updateRegularSpiritService,
  removeSpiritMediaService,
  replaceSpiritMediaService,
  updateRegularSpiritCollectiblesService,
  updateRegularSpiritTreeCostsService,
  replaceSpiritCollectibleImageService,
  removeSpiritCollectibleImageService,
} from "./spirit.service.js";

import {
  createRegularSpiritSchema,
  mapSpiritParamsSchema,
  spiritCodeParamsSchema,
  spiritIdParamsSchema,
  updateRegularSpiritSchema,
} from "./spirit.validation.js";

import { success } from './../../shared/utils/response.js';
import AppError from "../../shared/utils/AppError.js";

export async function getPublishedRegularSpirits(
  req,
  res,
  next
) {
  try {
    const { mapId } =
      mapSpiritParamsSchema.parse(
        req.params
      );

    const spirits =
      await getPublishedRegularSpiritsService(
        mapId
      );

    return success(
      res,
      spirits,
      "Regular Spirits retrieved successfully."
    );
  } catch (error) {
    return next(error);
  }
}

export async function getPublishedRegularSpirit(
  req,
  res,
  next
) {
  try {
    const { code } =
      spiritCodeParamsSchema.parse(
        req.params
      );

    const spirit =
      await getPublishedRegularSpiritService(
        code
      );

    return success(
      res,
      spirit,
      "Regular Spirit retrieved successfully."
    );
  } catch (error) {
    return next(error);
  }
}

export async function getAdminRegularSpirits(
  req,
  res,
  next
) {
  try {
    const { mapId } =
      mapSpiritParamsSchema.parse(
        req.params
      );

    const spirits =
      await getAdminRegularSpiritsService(
        mapId
      );

    return success(
      res,
      spirits,
      "Regular Spirits retrieved successfully."
    );
  } catch (error) {
    return next(error);
  }
}

export async function getAdminRegularSpirit(
  req,
  res,
  next
) {
  try {
    const { id } =
      spiritIdParamsSchema.parse(
        req.params
      );

    const spirit =
      await getAdminRegularSpiritService(
        id
      );

    return success(
      res,
      spirit,
      "Regular Spirit retrieved successfully."
    );
  } catch (error) {
    return next(error);
  }
}

export async function createAdminRegularSpirit(
  req,
  res,
  next
) {
  try {
    const { mapId } =
      mapSpiritParamsSchema.parse(
        req.params
      );

    const data =
      createRegularSpiritSchema.parse(
        req.body
      );

    const spirit =
      await createRegularSpiritService(
        mapId,
        data
      );

    return success(
      res,
      spirit,
      "Regular Spirit created successfully."
    );
  } catch (error) {
    return next(error);
  }
}

export async function updateAdminRegularSpirit(
  req,
  res,
  next
) {
  try {
    const { id } =
      spiritIdParamsSchema.parse(
        req.params
      );

    const data =
      updateRegularSpiritSchema.parse(
        req.body
      );

    const spirit =
      await updateRegularSpiritService(
        id,
        data
      );

    return success(
      res,
      spirit,
      "Regular Spirit updated successfully."
    );
  } catch (error) {
    return next(error);
  }
}

export async function uploadSpiritMediaController(
  req,
  res,
  next
) {
  try {
    if (!req.file) {
      throw new AppError(
        "Please select an image.",
        400
      );
    }

    const {
      id,
      slot,
    } = req.validatedParams;

    const spirit =
      await replaceSpiritMediaService(
        id,
        slot,
        req.file
      );

    return success(
      res,
      spirit,
      "Spirit media uploaded successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function removeSpiritMediaController(
  req,
  res,
  next
) {
  try {
    const {
      id,
      slot,
    } = req.validatedParams;

    const spirit =
      await removeSpiritMediaService(
        id,
        slot
      );

    return success(
      res,
      spirit,
      "Spirit media removed successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function updateAdminSpiritCollectibles(
  req,
  res,
  next
) {
  try {
    const { id } =
      req.validatedParams;

    const spirit =
      await updateRegularSpiritCollectiblesService(
        id,
        req.validated.collectibles
      );

    return success(
      res,
      spirit,
      "Spirit Collectibles updated successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function updateAdminSpiritTreeCosts(
  req,
  res,
  next
) {
  try {
    const { id } =
      req.validatedParams;

    const spirit =
      await updateRegularSpiritTreeCostsService(
        id,
        req.validated.treeCosts
      );

    return success(
      res,
      spirit,
      "Spirit Tree Costs updated successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function replaceAdminSpiritCollectibleImage(
  req,
  res,
  next
) {
  try {
    const {
      id,
      collectibleId,
    } =
      req.validatedParams;

    const spirit =
      await replaceSpiritCollectibleImageService(
        id,
        collectibleId,
        req.file
      );

    return success(
      res,
      spirit,
      "Collectible image updated successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function removeAdminSpiritCollectibleImage(
  req,
  res,
  next
) {
  try {
    const {
      id,
      collectibleId,
    } =
      req.validatedParams;

    const spirit =
      await removeSpiritCollectibleImageService(
        id,
        collectibleId
      );

    return success(
      res,
      spirit,
      "Collectible image removed successfully."
    );
  } catch (error) {
    next(error);
  }
}