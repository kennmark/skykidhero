import { Router } from "express";

import { validate } from "../../middleware/validate.middleware.js";
import {
  getPublishedSeasonalSpiritController,
  getPublishedSeasonalSpiritsController,
} from "./seasonalSpirit.controller.js";
import {
  seasonalSpiritCodeParamSchema,
  seasonalSpiritSeasonIdParamSchema,
} from "./seasonalSpirit.validation.js";

const router = Router();

router.get(
  "/seasons/:seasonId/spirits",
  validate(seasonalSpiritSeasonIdParamSchema, "params"),
  getPublishedSeasonalSpiritsController,
);

router.get(
  "/seasonal-spirits/:code",
  validate(seasonalSpiritCodeParamSchema, "params"),
  getPublishedSeasonalSpiritController,
);

export default router;
