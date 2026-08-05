import "dotenv/config";
import app from "./app.js";

const PORT = Number(process.env.PORT) || 5000;
const HOST = "0.0.0.0";

const server = app.listen(PORT, HOST, () => {
  console.log(
    `🚀 SkyKidHero API running on http://${HOST}:${PORT}`
  );
});

function shutdown(signal) {
  console.log(
    `${signal} received. Closing server...`
  );

  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
}

process.on("SIGINT", () =>
  shutdown("SIGINT")
);

process.on("SIGTERM", () =>
  shutdown("SIGTERM")
);