import { Router } from "express";

import {
  getPublishedWingedLightsByMapController,
} from "./wingedLight.controller.js";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  wingedLightMapParamsSchema,
} from "./wingedLight.validation.js";

const router = Router();

router.get(
  "/maps/:mapId/winged-lights",

  validate(
    wingedLightMapParamsSchema,
    "params"
  ),

  getPublishedWingedLightsByMapController
);

export default router;