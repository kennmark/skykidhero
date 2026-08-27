import multer from "multer";

const storage = multer.memoryStorage();

const allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

function fileFilter(
  req,
  file,
  callback
) {
  if (
    !allowedMimeTypes.includes(
      file.mimetype
    )
  ) {
    return callback(
      new Error(
        "Only JPEG, PNG, WebP, and GIF images are allowed."
      )
    );
  }

  return callback(null, true);
}

function createImageUploader({
  allowOctetStream = false,
} = {}) {
   return multer({
    storage,

    fileFilter(
      req,
      file,
      callback
    ) {
      const isAllowedImage =
        allowedMimeTypes.includes(
          file.mimetype
        );

      const isGenericBinary =
        allowOctetStream &&
        file.mimetype ===
          "application/octet-stream";

      if (
        !isAllowedImage &&
        !isGenericBinary
      ) {
        return callback(
          new Error(
            "Only JPEG, PNG, WebP, and GIF images are allowed."
          )
        );
      }

      return callback(
        null,
        true
      );
    },

    limits: {
      fileSize:
        5 * 1024 * 1024,

      files: 1,
    },
  });
}

export const uploadNewsImage =
  createImageUploader();

export const uploadMapMedia =
  createImageUploader();

export const uploadSpiritMedia =
  createImageUploader({
    allowOctetStream: true,
  });