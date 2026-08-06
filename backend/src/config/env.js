import "dotenv/config";

function readValue(name) {
  return process.env[name]?.trim() || "";
}

function parsePort(value) {
  const port = Number.parseInt(value || "5000", 10);

  if (
    !Number.isInteger(port) ||
    port < 1 ||
    port > 65535
  ) {
    throw new Error(
      "PORT must be an integer between 1 and 65535."
    );
  }

  return port;
}

function parseOrigins(value) {
  return Object.freeze(
    value
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean)
  );
}

const nodeEnv =
  readValue("NODE_ENV") || "development";

const supportedEnvironments = [
  "development",
  "test",
  "production",
];

if (
  !supportedEnvironments.includes(nodeEnv)
) {
  throw new Error(
    `NODE_ENV must be one of: ${supportedEnvironments.join(", ")}.`
  );
}

const requiredVariables = [
  "DATABASE_URL",
  "JWT_SECRET",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

const missingVariables =
  requiredVariables.filter(
    (name) => !readValue(name)
  );

const clientOrigins = parseOrigins(
  readValue("CLIENT_ORIGINS")
);

if (
  nodeEnv === "production" &&
  clientOrigins.length === 0
) {
  missingVariables.push(
    "CLIENT_ORIGINS"
  );
}

if (missingVariables.length > 0) {
  throw new Error(
    [
      "Backend environment validation failed.",
      `Missing required variables: ${[
        ...new Set(missingVariables),
      ].join(", ")}`,
    ].join(" ")
  );
}

const env = Object.freeze({
  NODE_ENV: nodeEnv,

  IS_PRODUCTION:
    nodeEnv === "production",

  IS_DEVELOPMENT:
    nodeEnv === "development",

  PORT: parsePort(
    readValue("PORT")
  ),

  DATABASE_URL:
    readValue("DATABASE_URL"),

  /*
   * DIRECT_URL is required for Prisma
   * migration commands but not for every
   * running API request.
   */
  DIRECT_URL:
    readValue("DIRECT_URL") ||
    null,

  JWT_SECRET:
    readValue("JWT_SECRET"),

  JWT_EXPIRES_IN:
    readValue("JWT_EXPIRES_IN") ||
    "7d",

  CLIENT_ORIGINS:
    clientOrigins,

  CLOUDINARY_CLOUD_NAME:
    readValue(
      "CLOUDINARY_CLOUD_NAME"
    ),

  CLOUDINARY_API_KEY:
    readValue(
      "CLOUDINARY_API_KEY"
    ),

  CLOUDINARY_API_SECRET:
    readValue(
      "CLOUDINARY_API_SECRET"
    ),

  CLOUDINARY_NEWS_FOLDER:
    readValue(
      "CLOUDINARY_NEWS_FOLDER"
    ) || "skykidhero/news",
});

export default env;