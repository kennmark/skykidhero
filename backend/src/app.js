import express from "express";
import cors from "cors";

import routes from "./routes/index.js"
import notFound from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";
import uploadRoutes from "./modules/uploads/upload.routes.js";
import path from "path";
import { corsOptions } from "./config/cors.js";

const app = express()

app.use(cors())
app.use(express.json())

//Static Files
app.use("/uploads", express.static(path.resolve("uploads")))

//API Routes
app.use("/api/uploads", uploadRoutes)
app.use("/api", routes)

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "SkyKidHero API is healthy.",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

//404 Handler
app.use(notFound)

//Global Error Hander
app.use(errorHandler)



export default app;