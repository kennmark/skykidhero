import cloudinary from "../config/cloudinary.js";
import env from "../config/env.js";

function uploadImageToCloudinary(
  fileBuffer,
  folder
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
            folder,

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
              publicId:
                result.public_id,

              url:
                result.secure_url,

              width:
                result.width,

              height:
                result.height,

              format:
                result.format,

              bytes:
                result.bytes,
            });
          }
        );

      uploadStream.end(
        fileBuffer
      );
    }
  );
}

function normalizeFolderPart(
  value
) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(
      /[^a-z0-9-]+/g,
      "-"
    )
    .replace(
      /^-+|-+$/g,
      ""
    );
}

export function uploadNewsImageToCloudinary(
  fileBuffer
) {
  return uploadImageToCloudinary(
    fileBuffer,
    env.CLOUDINARY_NEWS_FOLDER
  );
}

export function uploadMapMediaToCloudinary(
  fileBuffer,
  {
    mapSlug,
    slot,
  }
) {
  const safeSlug =
    normalizeFolderPart(
      mapSlug
    );

  const safeSlot =
    normalizeFolderPart(
      slot
    );

  const folder = [
    env.CLOUDINARY_MAPS_FOLDER,
    safeSlug,
    safeSlot,
  ].join("/");

  return uploadImageToCloudinary(
    fileBuffer,
    folder
  );
}

export async function deleteImageFromCloudinary(
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

/*
 * Preserve compatibility with
 * existing News module imports.
 */
export const deleteNewsImageFromCloudinary =
  deleteImageFromCloudinary;