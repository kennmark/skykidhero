import AppError from "../shared/utils/AppError"

export function adminOnly(req, res, next) {
  if (!req.user) {
    return next(
      new AppError(
        "Authentication required.",
        401
      )
    )
  }

  if (!req.user.role !== "ADMIN") {
    return next(
      new AppError(
        "Access denied.",
        401
      )
    )
  }

  next()
}