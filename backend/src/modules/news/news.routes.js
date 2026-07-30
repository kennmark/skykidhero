import { Router } from "express";

import {
  getAllNewsController,
  getNewsBySlugController,
} from "./news.controller.js";

const router = Router();

router.get("/", getAllNewsController);

router.get("/:slug", getNewsBySlugController);

export default router;