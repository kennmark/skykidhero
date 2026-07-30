import {Router} from "express"
import {loginController, meController} from "./auth.controller.js"
import { validate } from "../../middleware/validate.middleware.js"
import { loginSchema } from "./auth.validation.js"
import { authenticate } from "../../middleware/authenticate.middleware.js";
import { success } from "../../shared/utils/response.js";
import { authorize } from "../../middleware/authorize.middleware.js";

const router = Router()

router.post(
  "/login",
  validate(loginSchema),
  loginController
)

router.get(
  "/me",
  authenticate,
  meController,
)

router.get(
  "/admin",
  authenticate,
  authorize("ADMIN"),
  (req, res) => {
    return success(
      res,
      req.user,
      "Welcome Admin."
    );
  }
)

router.get(
  "/me",
  authenticate,
  meController,
)

export default router