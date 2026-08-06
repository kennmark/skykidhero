import env from "./env.js";

const developmentOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

const allowedOrigins = new Set([
  ...env.CLIENT_ORIGINS,

  ...(
    env.IS_PRODUCTION
      ? []
      : developmentOrigins
  ),
]);

export const corsOptions = {
  origin(origin, callback) {
    /*
     * Permit tools such as curl,
     * health checks, and server-to-server
     * requests without an Origin header.
     */
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.has(origin)) {
      return callback(null, true);
    }

    const error = new Error(
      `Origin ${origin} is not allowed by CORS.`
    );

    error.status = 403;

    return callback(error);
  },

  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],

  optionsSuccessStatus: 204,
};