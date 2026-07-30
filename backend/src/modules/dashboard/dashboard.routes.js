import {
  Router,
} from "express";

import {
  authenticate,
} from "../../middleware/authenticate.middleware.js";

import {
  authorize,
} from "../../middleware/authorize.middleware.js";

import {
  getDashboardAnalyticsController,
} from "./dashboard.controller.js";

const router = Router();

router.use(authenticate);
router.use(authorize("ADMIN"));

router.get(
  "/",
  getDashboardAnalyticsController
);

export default router;