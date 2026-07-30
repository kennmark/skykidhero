import jwt from "jsonwebtoken";

import AppError from "../shared/utils/AppError.js";
import { findById } from "../modules/auth/auth.repository.js";

export async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new AppError("Authentication required.", 401);
    }

    if (!authHeader.startsWith("Bearer ")) {
      throw new AppError("Invalid authentication token.", 401);
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await findById(decoded.id);

    if (!user) {
      throw new AppError(
        "User no longer exists.",
        401
      );
    }

    req.user = user;

    next();

  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return next(
        new AppError("Token has expired.", 401)
      )
    }

    if (err.name === "JsonWebTokenError") {
      return next(
        new AppError("Invalid authentication token.", 401)
      )
    }

    next (err)
  }
}