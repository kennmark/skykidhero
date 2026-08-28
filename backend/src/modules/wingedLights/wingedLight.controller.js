import {
  getPublishedWingedLightsByMap,
} from "./wingedLight.service.js";

export async function getPublishedWingedLightsByMapController(
  req,
  res,
  next
) {
  try {
    const { mapId } =
      req.validatedParams;

    const wingedLights =
      await getPublishedWingedLightsByMap(
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