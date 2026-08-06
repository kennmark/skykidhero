import multer from "multer";
import { Prisma } from "@prisma/client";

import env from "../config/env.js";

import AppError from "../shared/utils/AppError.js";

import {
  error as errorResponse,
} from "../shared/utils/response.js";

function normalizePrismaError(error) {
  if (
    error instanceof
    Prisma.PrismaClientKnownRequestError
  ) {
    switch (error.code) {
      case "P2000":
        return new AppError(
          "One of the provided values is too long.",
          400
        );

      case "P2002":
        return new AppError(
          "A record with the same unique value already exists.",
          409
        );

      case "P2003":
        return new AppError(
          "This record is still referenced by another record.",
          409
        );

      case "P2014":
        return new AppError(
          "The requested change would violate a required relationship.",
          409
        );

      case "P2025":
        return new AppError(
          "The requested record was not found.",
          404
        );

      default:
        return new AppError(
          "A database operation failed.",
          500
        );
    }
  }

  if (
    error instanceof
    Prisma.PrismaClientInitializationError
  ) {
    return new AppError(
      "The database service is temporarily unavailable.",
      503
    );
  }

  if (
    error instanceof
    Prisma.PrismaClientValidationError
  ) {
    return new AppError(
      "The database request was invalid.",
      500
    );
  }

  return null;
}

function normalizeMulterError(error) {
  if (
    !(error instanceof multer.MulterError)
  ) {
    return null;
  }

  switch (error.code) {
    case "LIMIT_FILE_SIZE":
      return new AppError(
        "Image must be 5 MB or smaller.",
        413
      );

    case "LIMIT_UNEXPECTED_FILE":
      return new AppError(
        "Unexpected image upload field.",
        400
      );

    case "LIMIT_FILE_COUNT":
      return new AppError(
        "Too many files were uploaded.",
        400
      );

    default:
      return new AppError(
        error.message ||
          "Unable to process the uploaded image.",
        400
      );
  }
}

function normalizeError(error) {
  if (error instanceof AppError) {
    return error;
  }

  const multerError =
    normalizeMulterError(error);

  if (multerError) {
    return multerError;
  }

  const prismaError =
    normalizePrismaError(error);

  if (prismaError) {
    return prismaError;
  }

  if (
    error.type ===
      "entity.parse.failed" ||
    (
      error instanceof SyntaxError &&
      error.status === 400 &&
      "body" in error
    )
  ) {
    return new AppError(
      "Invalid JSON request body.",
      400
    );
  }

  if (
    error.type ===
      "entity.too.large" ||
    error.status === 413
  ) {
    return new AppError(
      "Request body is too large.",
      413
    );
  }

  if (
    error.message ===
    "Only JPEG, PNG, WebP, and GIF images are allowed."
  ) {
    return new AppError(
      error.message,
      400
    );
  }

  if (
    error.name ===
    "TokenExpiredError"
  ) {
    return new AppError(
      "Token has expired.",
      401
    );
  }

  if (
    error.name ===
    "JsonWebTokenError"
  ) {
    return new AppError(
      "Invalid authentication token.",
      401
    );
  }

  /*
   * Includes errors produced by the
   * CORS origin callback.
   */
  if (
    Number.isInteger(error.status) &&
    error.status >= 400 &&
    error.status < 600
  ) {
    return new AppError(
      error.message ||
        "Request failed.",
      error.status
    );
  }

  return error;
}

function logError(error, req) {
  console.error({
    method: req.method,
    path: req.originalUrl,
    name: error.name,
    code: error.code,
    message: error.message,
    stack: error.stack,
  });
}

export default function errorHandler(
  error,
  req,
  res,
  next
) {
  if (res.headersSent) {
    return next(error);
  }

  const normalizedError =
    normalizeError(error);

  logError(
    normalizedError,
    req
  );

  const status =
    normalizedError.statusCode ||
    normalizedError.status ||
    500;

  const isSafeToExpose =
    !env.IS_PRODUCTION ||
    normalizedError.isOperational ||
    status < 500;

  const message = isSafeToExpose
    ? (
        normalizedError.message ||
        "Request failed."
      )
    : "Internal server error.";

  return errorResponse(
    res,
    message,
    status,
    normalizedError.errors || null
  );
}