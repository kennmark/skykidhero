import { Router } from "express";

import {
  getAdminSeasonsController,
  getAdminSeasonController,
  createSeasonController,
  updateSeasonController,
  uploadSeasonMediaController,
  removeSeasonMediaController,
} from "./season.controller.js";

import {
  seasonIdParamSchema,
  createSeasonSchema,
  updateSeasonSchema,
  seasonMediaParamSchema
} from "./season.validation.js";

import {
  uploadSeasonImage,
} from "./season.media.middleware.js";

import { validate } from "../../middleware/validate.middleware.js";
import { authenticate } from "../../middleware/authenticate.middleware.js";
import { authorize } from "../../middleware/authorize.middleware.js";

const router = Router();

router.use(authenticate);
router.use(authorize("ADMIN"));

router.get(
  "/",
  getAdminSeasonsController,
);

router.post(
  "/",
  validate(createSeasonSchema),
  createSeasonController,
);

router.post(
  "/:id/:mediaType",
  validate(
    seasonMediaParamSchema,
    "params",
  ),
  uploadSeasonImage.single("image"),
  uploadSeasonMediaController,
);

router.delete(
  "/:id/:mediaType",
  validate(
    seasonMediaParamSchema,
    "params",
  ),
  removeSeasonMediaController,
);

router.get(
  "/:id",
  validate(seasonIdParamSchema, "params"),
  getAdminSeasonController,
);

router.put(
  "/:id",
  validate(seasonIdParamSchema, "params"),
  validate(updateSeasonSchema),
  updateSeasonController,
);

export default router;