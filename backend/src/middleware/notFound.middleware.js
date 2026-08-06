import AppError
  from "../shared/utils/AppError.js";

export default function notFound(
  req,
  res,
  next
) {
  return next(
    new AppError(
      "Endpoint not found.",
      404
    )
  );
}