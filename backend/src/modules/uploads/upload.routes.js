import { Router } from "express";

import { authenticate } from "../../middleware/authenticate.middleware.js";
import { authorize } from "../../middleware/authorize.middleware.js";

import { uploadNewsImage } from "../../config/multer.js";

import { uploadNewsImageController } from "./upload.controller.js";

const router = Router();

router.post(
  "/news",
  authenticate,
  authorize("ADMIN"),
  uploadNewsImage.single("image"),
  uploadNewsImageController
);

export default router;