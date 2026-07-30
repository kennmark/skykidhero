import { Router } from "express";

import { authenticate } from "../../middleware/authenticate.middleware.js";
import { authorize } from "../../middleware/authorize.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";

import {
  createNewsController,
  getAdminNewsController,
  getNewsByIdController,
  updateNewsController,
  deleteNewsController,
  restoreNewsController,
} from "./news.controller.js";

import {
  createNewsSchema,
  newsIdSchema,
  updateNewsSchema,
} from "./news.validation.js";

const router = Router();

router.use(authenticate);
router.use(authorize("ADMIN"));

router.get(
  "/",
  getAdminNewsController
);

router.post(
  "/",
  validate(createNewsSchema),
  createNewsController
);

router.get(
  "/:id",
  validate(newsIdSchema, "params"),
  getNewsByIdController
);

router.put(
  "/:id",
  validate(newsIdSchema, "params"),
  validate(updateNewsSchema),
  updateNewsController
);

router.delete(
  "/:id",
  validate(newsIdSchema, "params"),
  deleteNewsController
);

router.patch(
  "/:id/restore",
  validate(newsIdSchema, "params"),
  restoreNewsController
);

export default router;