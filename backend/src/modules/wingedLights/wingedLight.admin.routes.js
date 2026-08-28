import { Router } from "express";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  archiveAdminWingedLightController,
  createAdminWingedLightController,
  getAdminWingedLightController,
  getAdminWingedLightsByMapController,
  getArchivedWingedLightsByMapController,
  removeWingedLightImageController,
  restoreAdminWingedLightController,
  updateAdminWingedLightController,
  uploadWingedLightImageController,
} from "./wingedLight.admin.controller.js";

import {
  createWingedLightSchema,
  updateWingedLightSchema,
  wingedLightIdParamsSchema,
  wingedLightMapParamsSchema,
} from "./wingedLight.validation.js";

import {
  authenticate,
} from "../../middleware/authenticate.middleware.js";

import {
  authorize,
} from "../../middleware/authorize.middleware.js";

import {
  uploadWingedLightImage,
} from "../../config/multer.js";

const router = Router();

router.use(authenticate);

router.use(
  authorize("ADMIN")
);

router.get(
  "/maps/:mapId/winged-lights",

  validate(
    wingedLightMapParamsSchema,
    "params"
  ),

  getAdminWingedLightsByMapController
);

router.get(
  "/maps/:mapId/winged-lights/archived",

  validate(
    wingedLightMapParamsSchema,
    "params"
  ),

  getArchivedWingedLightsByMapController
);

router.delete(
  "/winged-lights/:id",

  validate(
    wingedLightIdParamsSchema,
    "params"
  ),

  archiveAdminWingedLightController
);

router.post(
  "/winged-lights/:id/restore",

  validate(
    wingedLightIdParamsSchema,
    "params"
  ),

  restoreAdminWingedLightController
);

router.post(
  "/maps/:mapId/winged-lights",

  validate(
    wingedLightMapParamsSchema,
    "params"
  ),

  validate(
    createWingedLightSchema
  ),

  createAdminWingedLightController
);

router.get(
  "/winged-lights/:id",

  validate(
    wingedLightIdParamsSchema,
    "params"
  ),

  getAdminWingedLightController
);

router.put(
  "/winged-lights/:id",

  validate(
    wingedLightIdParamsSchema,
    "params"
  ),

  validate(
    updateWingedLightSchema
  ),

  updateAdminWingedLightController
);

router.post(
  "/winged-lights/:id/image",

  validate(
    wingedLightIdParamsSchema,
    "params"
  ),

  uploadWingedLightImage.single(
    "image"
  ),

  uploadWingedLightImageController
);

router.delete(
  "/winged-lights/:id/image",

  validate(
    wingedLightIdParamsSchema,
    "params"
  ),

  removeWingedLightImageController
);

export default router;