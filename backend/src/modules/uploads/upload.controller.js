import { success } from "../../shared/utils/response.js";

export function uploadNewsImageController(
  req,
  res
) {
  return success(
    res,
    {
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      mimeType: req.file.mimetype,
      url: `/uploads/news/${req.file.filename}`,
    },
    "Image uploaded successfully.",
    201
  );
}