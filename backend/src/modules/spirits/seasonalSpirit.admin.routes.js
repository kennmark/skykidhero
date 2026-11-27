import { Router } from "express";

import { authenticate } from "../../middleware/authenticate.middleware.js";
import { authorize } from "../../middleware/authorize.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";
import {
  createAdminSeasonalSpiritController,
  getAdminSeasonalSpiritController,
  getAdminSeasonalSpiritsController,
  updateAdminSeasonalSpiritController,
  uploadSeasonalSpiritMediaController,
  removeSeasonalSpiritMediaController,
  updateAdminSeasonalSpiritCollectiblesController,
  updateAdminSeasonalSpiritTreeCostsController,
  uploadSeasonalSpiritCollectibleImageController,
  removeSeasonalSpiritCollectibleImageController,
  deleteAdminSeasonalSpiritController,
} from "./seasonalSpirit.controller.js";
import {
  createSeasonalSpiritSchema,
  seasonalSpiritIdParamSchema,
  seasonalSpiritSeasonIdParamSchema,
  updateSeasonalSpiritSchema,
  seasonalSpiritMediaParamsSchema,
  updateSeasonalSpiritCollectiblesSchema,
  updateSeasonalSpiritTreeCostsSchema,
  seasonalSpiritCollectibleParamsSchema,
} from "./seasonalSpirit.validation.js";

import {
  uploadSpiritMedia,
} from "../../config/multer.js";

const router = Router();

router.use(authenticate);
router.use(authorize("ADMIN"));

router.get(
  "/seasons/:seasonId/spirits",
  validate(seasonalSpiritSeasonIdParamSchema, "params"),
  getAdminSeasonalSpiritsController,
);

router.post(
  "/seasons/:seasonId/spirits",
  validate(seasonalSpiritSeasonIdParamSchema, "params"),
  validate(createSeasonalSpiritSchema),
  createAdminSeasonalSpiritController,
);

router.get(
  "/seasonal-spirits/:id",
  validate(seasonalSpiritIdParamSchema, "params"),
  getAdminSeasonalSpiritController,
);

router.put(
  "/seasonal-spirits/:id",
  validate(seasonalSpiritIdParamSchema, "params"),
  validate(updateSeasonalSpiritSchema),
  updateAdminSeasonalSpiritController,
);

router.delete(
  "/seasonal-spirits/:id",
  validate(seasonalSpiritIdParamSchema, "params"),
  deleteAdminSeasonalSpiritController,
);

/*
 * Upload / Replace Seasonal Spirit Media
 */

router.post(
  "/seasonal-spirits/:id/media/:slot",

  validate(
    seasonalSpiritMediaParamsSchema,
    "params",
  ),

  uploadSpiritMedia.single("image"),

  uploadSeasonalSpiritMediaController,
);

/*
 * Remove Seasonal Spirit Media
 */

router.delete(
  "/seasonal-spirits/:id/media/:slot",

  validate(
    seasonalSpiritMediaParamsSchema,
    "params",
  ),

  removeSeasonalSpiritMediaController,
);

router.put(
  "/seasonal-spirits/:id/collectibles",
  validate(seasonalSpiritIdParamSchema, "params"),
  validate(updateSeasonalSpiritCollectiblesSchema),
  updateAdminSeasonalSpiritCollectiblesController,
);

router.put(
  "/seasonal-spirits/:id/tree-costs",
  validate(seasonalSpiritIdParamSchema, "params"),
  validate(updateSeasonalSpiritTreeCostsSchema),
  updateAdminSeasonalSpiritTreeCostsController,
);

router.post(
  "/seasonal-spirits/:id/collectibles/:collectibleId/image",
  validate(seasonalSpiritCollectibleParamsSchema, "params"),
  uploadSpiritMedia.single("image"),
  uploadSeasonalSpiritCollectibleImageController,
);

router.delete(
  "/seasonal-spirits/:id/collectibles/:collectibleId/image",
  validate(seasonalSpiritCollectibleParamsSchema, "params"),
  removeSeasonalSpiritCollectibleImageController,
);

export default router;
