import multer from "multer";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const storage = multer.memoryStorage();

export const uploadSeasonImage = multer({
  storage,

  limits: {
    fileSize: MAX_IMAGE_SIZE,
  },

  fileFilter: (_req, file, cb) => {
    const allowedTypes = new Set([
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ]);

    if (!allowedTypes.has(file.mimetype)) {
      return cb(
        new multer.MulterError("LIMIT_UNEXPECTED_FILE"),
        false,
      );
    }

    cb(null, true);
  },
});