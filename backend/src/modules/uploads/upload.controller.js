import { success } from "../../shared/utils/response.js";
import { uploadNewsImageToCloudinary } from "../../services/cloudinary.service.js";

export async function uploadNewsImageController(
  req,
  res,
  next
) {
 try {
    if (!req.file) {
      const error = new Error(
        "Please select an image."
      );

      error.statusCode = 400;

      throw error;
    }

    const uploadedImage =
      await uploadNewsImageToCloudinary(
        req.file.buffer
      );

    return success(
      res,
      {
        // Preserves the existing response fields
        // expected by the Admin application.
        filename: uploadedImage.publicId,
        originalName:
          req.file.originalname,
        size: uploadedImage.bytes,
        mimeType: req.file.mimetype,
        url: uploadedImage.url,

        // Additional Cloudinary information.
        publicId: uploadedImage.publicId,
        width: uploadedImage.width,
        height: uploadedImage.height,
        format: uploadedImage.format,
      },
      "Image uploaded successfully.",
      201
    );
  } catch (error) {
    return next(error);
  }

}