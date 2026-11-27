import { Router } from "express";

import { validate } from "../../middleware/validate.middleware.js";
import {
  getPublishedSeasonalSpiritController,
  getPublishedSeasonalSpiritsController,
  getPublishedSeasonalSpiritsBySeasonNumberController
} from "./seasonalSpirit.controller.js";
import {
  seasonalSpiritCodeParamSchema,
  seasonalSpiritSeasonIdParamSchema,
  seasonalSpiritSeasonNumberParamSchema
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

router.get(
  "/seasons/by-number/:seasonNumber/spirits",
  validate(
    seasonalSpiritSeasonNumberParamSchema,
    "params",
  ),
  getPublishedSeasonalSpiritsBySeasonNumberController,
);

export default router;
