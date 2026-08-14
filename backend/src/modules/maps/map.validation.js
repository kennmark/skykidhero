import { z } from "zod";

export const MAP_SECTION_TYPES = [
  "INFO",
  "REGULAR_SPIRITS",
  "SEASON_SPIRITS",
  "WINGED_LIGHTS",
  "MAP_SHRINES",
  "DYE_RATIO",
];

export const MAP_MEDIA_SLOTS = [
  "main",
  "gif",
  "constellation-icon",
  "constellation-image",
];

const positiveId = z.coerce
  .number()
  .int("Map ID must be an integer.")
  .positive("Map ID must be positive.");

const nullableText = z.preprocess(
  (value) => {
    if (
      typeof value === "string" &&
      value.trim() === ""
    ) {
      return null;
    }

    return value;
  },

  z
    .string()
    .trim()
    .nullable()
    .optional()
);

const nullableUrl = z.preprocess(
  (value) => {
    if (
      typeof value === "string" &&
      value.trim() === ""
    ) {
      return null;
    }

    return value;
  },

  z
    .string()
    .trim()
    .url("Image must be a valid URL.")
    .nullable()
    .optional()
);

function requireAtLeastOneField(schema) {
  return schema.refine(
    (data) =>
      Object.keys(data).length > 0,

    {
      message:
        "At least one field must be provided.",
    }
  );
}

export const mapIdSchema = z.object({
  id: positiveId,
});

export const mapRouteSchema = z.object({
  id: positiveId,

  slug: z
    .string()
    .trim()
    .min(1, "Map slug is required.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Map slug is invalid."
    ),
});

export const mapSectionParamsSchema =
  z.object({
    id: positiveId,

    type: z.enum(
      MAP_SECTION_TYPES
    ),
  });

export const updateMapSchema =
  requireAtLeastOneField(
    z
      .object({
        subtitle: nullableText,
        introduction: nullableText,
        caption: nullableText,
        imageAlt: nullableText,
        published:
          z.boolean().optional(),
      })
      .strict()
  );

export const updateMapSectionSchema =
  requireAtLeastOneField(
    z
      .object({
        heading: nullableText,
        description: nullableText,
        published:
          z.boolean().optional(),
      })
      .strict()
  );

export const mapMediaParamsSchema =
  z.object({
    id: positiveId,

    slot: z.enum(
      MAP_MEDIA_SLOTS
    ),
  });