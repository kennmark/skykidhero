export default class AppError extends Error {
  constructor(
    message,
    status = 500,
    errors = null
  ) {
    super(message);

    this.name = "AppError";
    this.status = status;
    this.statusCode = status;
    this.errors = errors;
    this.isOperational = true;

    Error.captureStackTrace?.(
      this,
      this.constructor
    );
  }
}