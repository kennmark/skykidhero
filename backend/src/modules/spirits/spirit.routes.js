import { Router } from "express";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  getPublishedRegularSpirit,
  getPublishedRegularSpirits,
} from "./spirit.controller.js";

import {
  mapSpiritParamsSchema,
  spiritCodeParamsSchema,
} from "./spirit.validation.js";

const router = Router();

router.get(
  "/maps/:mapId/spirits",

  validate(
    mapSpiritParamsSchema,
    "params"
  ),

  getPublishedRegularSpirits
);

router.get(
  "/spirits/:code",

  validate(
    spiritCodeParamsSchema,
    "params"
  ),

  getPublishedRegularSpirit
);

export default router;