import { Router } from "express";

import {
  getPublishedSeasonsController,
  getPublishedSeasonBySlugController,
  getPublishedSeasonByNumberController,
} from "./season.controller.js";

import {
  seasonSlugParamSchema,
  seasonNumberParamSchema,
} from "./season.validation.js";

import { validate } from "../../middleware/validate.middleware.js";

const router = Router();

router.get(
  "/",
  getPublishedSeasonsController,
);

router.get(
  "/number/:number",
  validate(seasonNumberParamSchema, "params"),
  getPublishedSeasonByNumberController,
);

router.get(
  "/:slug",
  validate(seasonSlugParamSchema, "params"),
  getPublishedSeasonBySlugController,
);

export default router;