import express from "express";
import cors from "cors";
import path from "path";

import routes from "./routes/index.js";
import uploadRoutes from "./modules/uploads/upload.routes.js";

import { corsOptions } from "./config/cors.js";

import notFound from "./middleware/notFound.middleware.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(
  "/uploads",
  express.static(path.resolve("uploads"))
);

app.get("/api/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "SkyKidHero API is healthy.",
    environment:
      process.env.NODE_ENV ||
      "development",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/uploads", uploadRoutes);
app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

export default app;