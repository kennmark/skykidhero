const configuredOrigins = (
  process.env.CLIENT_ORIGINS || ""
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const developmentOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
];

const allowedOrigins = new Set([
  ...configuredOrigins,
  ...(process.env.NODE_ENV !== "production"
    ? developmentOrigins
    : []),
]);

export const corsOptions = {
  origin(origin, callback) {
    // Allow server-to-server tools and requests without an Origin header.
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.has(origin)) {
      return callback(null, true);
    }

    const corsError = new Error(
      `Origin ${origin} is not allowed by CORS.`
    );

    corsError.statusCode = 403;

    return callback(corsError);
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
};