import { Router } from "express";

import { authenticate, } from "../../middleware/authenticate.middleware.js";

import { authorize, } from "../../middleware/authorize.middleware.js";

import { validate } from "../../middleware/validate.middleware.js";

import {
  createAdminRegularSpirit,
  getAdminRegularSpirit,
  getAdminRegularSpirits,
  updateAdminRegularSpirit,
  removeSpiritMediaController,
  uploadSpiritMediaController,
  updateAdminSpiritCollectibles,
  updateAdminSpiritTreeCosts,
  replaceAdminSpiritCollectibleImage,
  removeAdminSpiritCollectibleImage,
} from "./spirit.controller.js";

import {
  createRegularSpiritSchema,
  mapSpiritParamsSchema,
  spiritIdParamsSchema,
  updateRegularSpiritSchema,
  spiritMediaParamsSchema,
  updateSpiritCollectiblesSchema,
  updateSpiritTreeCostsSchema,
  spiritCollectibleMediaParamsSchema,
} from "./spirit.validation.js";

import { uploadSpiritMedia, } from "../../config/multer.js";

const router = Router();

router.use(authenticate);

router.use(
  authorize("ADMIN")
);

router.get(
  "/maps/:mapId/spirits",

  validate(
    mapSpiritParamsSchema,
    "params"
  ),

  getAdminRegularSpirits
);

router.post(
  "/maps/:mapId/spirits",

  validate(
    mapSpiritParamsSchema,
    "params"
  ),

  validate(
    createRegularSpiritSchema
  ),

  createAdminRegularSpirit
);

router.get(
  "/spirits/:id",

  validate(
    spiritIdParamsSchema,
    "params"
  ),

  getAdminRegularSpirit
);

router.put(
  "/spirits/:id",

  validate(
    spiritIdParamsSchema,
    "params"
  ),

  validate(
    updateRegularSpiritSchema
  ),

  updateAdminRegularSpirit
);

router.put(
  "/spirits/:id/collectibles",

  validate(
    spiritIdParamsSchema,
    "params"
  ),

  validate(
    updateSpiritCollectiblesSchema
  ),

  updateAdminSpiritCollectibles
);

router.put(
  "/spirits/:id/tree-costs",

  validate(
    spiritIdParamsSchema,
    "params"
  ),

  validate(
    updateSpiritTreeCostsSchema
  ),

  updateAdminSpiritTreeCosts
);

router.post(
  "/spirits/:id/media/:slot",

  validate(
    spiritMediaParamsSchema,
    "params"
  ),

  uploadSpiritMedia.single(
    "image"
  ),

  uploadSpiritMediaController
);

router.delete(
  "/spirits/:id/media/:slot",

  validate(
    spiritMediaParamsSchema,
    "params"
  ),

  removeSpiritMediaController
);

router.post(
  "/spirits/:id/collectibles/:collectibleId/image",

  validate(
    spiritCollectibleMediaParamsSchema,
    "params"
  ),

  uploadSpiritMedia.single(
    "image"
  ),

  replaceAdminSpiritCollectibleImage
);

router.delete(
  "/spirits/:id/collectibles/:collectibleId/image",

  validate(
    spiritCollectibleMediaParamsSchema,
    "params"
  ),

  removeAdminSpiritCollectibleImage
);

export default router;