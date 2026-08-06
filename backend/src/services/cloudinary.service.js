import cloudinary from "../config/cloudinary.js";
import env from "../config/env.js";

export function uploadNewsImageToCloudinary(
  fileBuffer
) {
  if (!fileBuffer) {
    throw new Error(
      "An image buffer is required."
    );
  }

  return new Promise(
    (resolve, reject) => {
      const uploadStream =
        cloudinary.uploader.upload_stream(
          {
            resource_type: "image",

            folder:
              env.CLOUDINARY_NEWS_FOLDER,

            use_filename: true,
            unique_filename: true,
            overwrite: false,
          },

          (error, result) => {
            if (error) {
              return reject(error);
            }

            if (!result?.secure_url) {
              return reject(
                new Error(
                  "Cloudinary did not return an image URL."
                )
              );
            }

            return resolve({
              publicId: result.public_id,
              url: result.secure_url,
              width: result.width,
              height: result.height,
              format: result.format,
              bytes: result.bytes,
            });
          }
        );

      uploadStream.end(fileBuffer);
    }
  );
}

export async function deleteNewsImageFromCloudinary(
  publicId
) {
  if (!publicId) {
    return null;
  }

  return cloudinary.uploader.destroy(
    publicId,
    {
      resource_type: "image",
      invalidate: true,
    }
  );
}