import { Router } from "express";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  getAllMapsController,
  getMapByRouteController,
} from "./map.controller.js";

import {
  mapRouteSchema,
} from "./map.validation.js";

const router = Router();

router.get(
  "/",
  getAllMapsController
);

router.get(
  "/:id/:slug",
  validate(
    mapRouteSchema,
    "params"
  ),
  getMapByRouteController
);

export default router;