import { Router } from "express";

import {
  authenticate,
} from "../../middleware/authenticate.middleware.js";

import {
  authorize,
} from "../../middleware/authorize.middleware.js";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  uploadMapMedia,
} from "../../config/multer.js";

import {
  getAdminMapByIdController,
  getAdminMapsController,
  removeMapMediaController,
  updateMapController,
  updateMapSectionController,
  uploadMapMediaController,
} from "./map.controller.js";

import {
  mapIdSchema,
  mapMediaParamsSchema,
  mapSectionParamsSchema,
  updateMapSchema,
  updateMapSectionSchema,
} from "./map.validation.js";

const router = Router();

router.use(authenticate);
router.use(authorize("ADMIN"));

router.get(
  "/",
  getAdminMapsController
);

router.get(
  "/:id",
  validate(
    mapIdSchema,
    "params"
  ),
  getAdminMapByIdController
);

router.put(
  "/:id",
  validate(
    mapIdSchema,
    "params"
  ),
  validate(updateMapSchema),
  updateMapController
);
router.post(
  "/:id/media/:slot",
  validate(
    mapMediaParamsSchema,
    "params"
  ),
  uploadMapMedia.single(
    "image"
  ),
  uploadMapMediaController
);

router.delete(
  "/:id/media/:slot",
  validate(
    mapMediaParamsSchema,
    "params"
  ),
  removeMapMediaController
);

router.put(
  "/:id/sections/:type",
  validate(
    mapSectionParamsSchema,
    "params"
  ),
  validate(
    updateMapSectionSchema
  ),
  updateMapSectionController
);

export default router;