import multer from "multer";
import path from "path";
import fs from "fs";

const NEWS_UPLOAD_PATH = "uploads/news";

// Ensure upload folder exists
fs.mkdirSync(NEWS_UPLOAD_PATH, { recursive: true });

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, NEWS_UPLOAD_PATH);
  },

  filename(req, file, cb) {
    const extension = path.extname(file.originalname);

    const filename =
      `${Date.now()}-${Math.round(Math.random() * 1e9)}${extension}`;

    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
  ];

  if (!allowed.includes(file.mimetype)) {
    return cb(new Error("Only image files are allowed."));
  }

  cb(null, true);
};

export const uploadNewsImage = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
});