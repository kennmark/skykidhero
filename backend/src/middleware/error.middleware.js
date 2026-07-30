import multer from "multer";

export default function errorHandler(err, req, res, next) {

    console.error(err);

    if (err instanceof multer.MulterError) {
        return res.status(400).json({
        success: false,
        message: err.message,
        });
    }

    if (err.message === "Only image files are allowed.") {
        return res.status(400).json({
            success: false,
            message: err.message,
        }); 
    }

    return res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    })
}