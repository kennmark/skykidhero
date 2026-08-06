import env from "./config/env.js";
import app from "./app.js";

const HOST = "0.0.0.0";

const server = app.listen(
  env.PORT,
  HOST,
  () => {
    console.log(
      `🚀 SkyKidHero API running on http://${HOST}:${env.PORT}`
    );

    console.log(
      `Environment: ${env.NODE_ENV}`
    );
  }
);

let shuttingDown = false;

function shutdown(signal) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;

  console.log(
    `${signal} received. Closing server...`
  );

  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });

  setTimeout(() => {
    console.error(
      "Server shutdown timed out."
    );

    process.exit(1);
  }, 10000).unref();
}

process.on(
  "SIGINT",
  () => shutdown("SIGINT")
);

process.on(
  "SIGTERM",
  () => shutdown("SIGTERM")
);