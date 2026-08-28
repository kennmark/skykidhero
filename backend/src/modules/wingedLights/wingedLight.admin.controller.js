import {
  createAdminWingedLight,
  getAdminWingedLight,
  getAdminWingedLightsByMap,
  updateAdminWingedLight,
  replaceWingedLightImageService,
  removeWingedLightImageService,
  archiveAdminWingedLight,
  getArchivedWingedLightsByMap,
  restoreAdminWingedLight,
} from "./wingedLight.service.js";

import AppError from "../../shared/utils/AppError.js";

export async function getAdminWingedLightsByMapController(
  req,
  res,
  next
) {
  try {
    const { mapId } =
      req.validatedParams;

    const wingedLights =
      await getAdminWingedLightsByMap(
        mapId
      );

    return res.status(200).json({
      success: true,
      message:
        "Winged Lights retrieved successfully.",
      data: wingedLights,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAdminWingedLightController(
  req,
  res,
  next
) {
  try {
    const { id } =
      req.validatedParams;

    const wingedLight =
      await getAdminWingedLight(id);

    if (!wingedLight) {
      return res.status(404).json({
        success: false,
        message:
          "Winged Light not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message:
        "Winged Light retrieved successfully.",
      data: wingedLight,
    });
  } catch (error) {
    next(error);
  }
}

export async function createAdminWingedLightController(
  req,
  res,
  next
) {
  try {
    const { mapId } =
      req.validatedParams;

    const result =
      await createAdminWingedLight(
        mapId,
        req.validated
      );

    if (!result.success) {
      switch (result.reason) {
        case "MAP_NOT_FOUND":
          return res.status(404).json({
            success: false,
            message: "Map not found.",
          });

        case "CODE_EXISTS":
          return res.status(409).json({
            success: false,
            message:
              "Winged Light code already exists.",
          });

        case "DISPLAY_ORDER_EXISTS":
          return res.status(409).json({
            success: false,
            message:
              "Display order is already used by another Winged Light on this Map.",
          });

        default:
          return res.status(400).json({
            success: false,
            message:
              "Unable to create Winged Light.",
          });
      }
    }

    return res.status(201).json({
      success: true,
      message:
        "Winged Light created successfully.",
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateAdminWingedLightController(
  req,
  res,
  next
) {
  try {
    const { id } =
      req.validatedParams;

    const result =
      await updateAdminWingedLight(
        id,
        req.validated
      );

    if (!result.success) {
      switch (result.reason) {
        case "WINGED_LIGHT_NOT_FOUND":
          return res.status(404).json({
            success: false,
            message:
              "Winged Light not found.",
          });

        case "CODE_EXISTS":
          return res.status(409).json({
            success: false,
            message:
              "Winged Light code already exists.",
          });

        case "DISPLAY_ORDER_EXISTS":
          return res.status(409).json({
            success: false,
            message:
              "Display order is already used by another Winged Light on this Map.",
          });

        default:
          return res.status(400).json({
            success: false,
            message:
              "Unable to update Winged Light.",
          });
      }
    }

    return res.status(200).json({
      success: true,
      message:
        "Winged Light updated successfully.",
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
}

export async function uploadWingedLightImageController(
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

    const { id } =
      req.validatedParams;

    const wingedLight =
      await replaceWingedLightImageService(
        id,
        req.file
      );

    return res.status(200).json({
      success: true,
      message:
        "Winged Light image uploaded successfully.",
      data: wingedLight,
    });
  } catch (error) {
    next(error);
  }
}

export async function removeWingedLightImageController(
  req,
  res,
  next
) {
  try {
    const { id } =
      req.validatedParams;

    const wingedLight =
      await removeWingedLightImageService(
        id
      );

    return res.status(200).json({
      success: true,
      message:
        "Winged Light image removed successfully.",
      data: wingedLight,
    });
  } catch (error) {
    next(error);
  }
}

export async function getArchivedWingedLightsByMapController(
  req,
  res,
  next
) {
  try {
    const { mapId } =
      req.validatedParams;

    const result =
      await getArchivedWingedLightsByMap(
        mapId
      );

    if (!result.success) {
      if (
        result.reason ===
        "MAP_NOT_FOUND"
      ) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Map not found.",
            data: null,
          });
      }
    }

    return res
      .status(200)
      .json({
        success: true,
        message:
          "Archived Winged Lights retrieved successfully.",
        data: result.data,
      });
  } catch (error) {
    next(error);
  }
}

export async function archiveAdminWingedLightController(
  req,
  res,
  next
) {
  try {
    const { id } =
      req.validatedParams;

    const result =
      await archiveAdminWingedLight(
        id
      );

    if (!result.success) {
      if (
        result.reason ===
        "WINGED_LIGHT_NOT_FOUND"
      ) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Winged Light not found.",
            data: null,
          });
      }
    }

    return res
      .status(200)
      .json({
        success: true,
        message:
          "Winged Light archived successfully.",
        data: result.data,
      });
  } catch (error) {
    next(error);
  }
}

export async function restoreAdminWingedLightController(
  req,
  res,
  next
) {
  try {
    const { id } =
      req.validatedParams;

    const result =
      await restoreAdminWingedLight(
        id
      );

    if (!result.success) {
      if (
        result.reason ===
        "WINGED_LIGHT_NOT_FOUND"
      ) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Winged Light not found.",
            data: null,
          });
      }

      if (
        result.reason ===
        "WINGED_LIGHT_NOT_ARCHIVED"
      ) {
        return res
          .status(409)
          .json({
            success: false,
            message:
              "Winged Light is not archived.",
            data: null,
          });
      }

      if (
        result.reason ===
        "MAP_NOT_FOUND"
      ) {
        return res
          .status(409)
          .json({
            success: false,
            message:
              "The Winged Light cannot be restored because its Map is unavailable.",
            data: null,
          });
      }
    }

    return res
      .status(200)
      .json({
        success: true,
        message:
          "Winged Light restored successfully.",
        data: result.data,
      });
  } catch (error) {
    next(error);
  }
}