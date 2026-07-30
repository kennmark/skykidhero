export function success(
  res,
  data,
  message = "Success.",
  status = 200,
  meta = null
) {
  const response = {
    success: true,
    message,
    data,
  };

  if (meta) {
    response.meta = meta;
  }

  return res.status(status).json(response);
}

export function error(
  res,
  message = "Something went wrong",
  status = 500,
  errors = null
) {
  const response = {
    success: false,
    message,
  }

  if (errors) {
    response.errors = errors
  }

  return res.status(status).json(response)
}