import {
  success,
} from "../../shared/utils/response.js";

import {
  getAdminMapByIdService,
  getAdminMapsService,
  getAllMapsService,
  getMapByRouteService,
  removeMapMediaService,
  replaceMapMediaService,
  updateMapSectionService,
  updateMapService,
} from "./map.service.js";

import AppError from "../../shared/utils/AppError.js";

export async function getAllMapsController(
  req,
  res,
  next
) {
  try {
    const maps =
      await getAllMapsService();

    return success(
      res,
      maps,
      "Maps retrieved successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function getMapByRouteController(
  req,
  res,
  next
) {
  try {
    const {
      id,
      slug,
    } = req.validatedParams;

    const map =
      await getMapByRouteService(
        id,
        slug
      );

    return success(
      res,
      map,
      "Map retrieved successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function getAdminMapsController(
  req,
  res,
  next
) {
  try {
    const maps =
      await getAdminMapsService();

    return success(
      res,
      maps,
      "Admin Maps retrieved successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function getAdminMapByIdController(
  req,
  res,
  next
) {
  try {
    const { id } =
      req.validatedParams;

    const map =
      await getAdminMapByIdService(
        id
      );

    return success(
      res,
      map,
      "Admin Map retrieved successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function updateMapController(
  req,
  res,
  next
) {
  try {
    const { id } =
      req.validatedParams;

    const map =
      await updateMapService(
        id,
        req.validated
      );

    return success(
      res,
      map,
      "Map updated successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function updateMapSectionController(
  req,
  res,
  next
) {
  try {
    const {
      id,
      type,
    } = req.validatedParams;

    const section =
      await updateMapSectionService(
        id,
        type,
        req.validated
      );

    return success(
      res,
      section,
      "Map section updated successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function uploadMapMediaController(
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

    const map =
      await replaceMapMediaService(
        id,
        slot,
        req.file
      );

    return success(
      res,
      map,
      "Map media uploaded successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function removeMapMediaController(
  req,
  res,
  next
) {
  try {
    const {
      id,
      slot,
    } = req.validatedParams;

    const map =
      await removeMapMediaService(
        id,
        slot
      );

    return success(
      res,
      map,
      "Map media removed successfully."
    );
  } catch (error) {
    next(error);
  }
}