import { z } from "zod";

const optionalDate = z
  .union([
    z.coerce.date(),
    z.null(),
    z.literal(""),
  ])
  .optional()
  .transform((value) => {
    if (value === "" || value === null || value === undefined) {
      return null;
    }

    return value;
  });

export const seasonIdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export const seasonSlugParamSchema = z.object({
  slug: z
    .string()
    .trim()
    .min(1, "Season slug is required.")
    .max(150),
});

export const seasonNumberParamSchema = z.object({
  number: z.coerce.number().int().positive(),
});

export const createSeasonSchema = z
  .object({
    number: z
      .coerce
      .number()
      .int()
      .positive(),

    year: z
      .coerce
      .number()
      .int()
      .min(2000)
      .max(2100),

    code: z
      .string()
      .trim()
      .min(1, "Season code is required.")
      .max(100)
      .regex(
        /^[a-z0-9-]+$/,
        "Season code may only contain lowercase letters, numbers, and hyphens."
      ),

    name: z
      .string()
      .trim()
      .min(1, "Season name is required.")
      .max(200),

    slug: z
      .string()
      .trim()
      .min(1, "Season slug is required.")
      .max(150)
      .regex(
        /^[a-z0-9-]+$/,
        "Season slug may only contain lowercase letters, numbers, and hyphens."
      ),

    intro: z
      .string()
      .trim()
      .max(5000)
      .nullable()
      .optional(),

    description: z
      .string()
      .trim()
      .max(20000)
      .nullable()
      .optional(),

    startDate: optionalDate,
    endDate: optionalDate,

    published: z
      .boolean()
      .optional()
      .default(true),
  })
  .superRefine((data, ctx) => {
    if (
      data.startDate &&
      data.endDate &&
      data.endDate < data.startDate
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["endDate"],
        message: "End date must be after or equal to the start date.",
      });
    }
  });

export const updateSeasonSchema = z
  .object({
    number: z
      .coerce
      .number()
      .int()
      .positive()
      .optional(),

    year: z
      .coerce
      .number()
      .int()
      .min(2000)
      .max(2100)
      .optional(),

    code: z
      .string()
      .trim()
      .min(1)
      .max(100)
      .regex(
        /^[a-z0-9-]+$/,
        "Season code may only contain lowercase letters, numbers, and hyphens."
      )
      .optional(),

    name: z
      .string()
      .trim()
      .min(1)
      .max(200)
      .optional(),

    slug: z
      .string()
      .trim()
      .min(1)
      .max(150)
      .regex(
        /^[a-z0-9-]+$/,
        "Season slug may only contain lowercase letters, numbers, and hyphens."
      )
      .optional(),

    intro: z
      .string()
      .trim()
      .max(5000)
      .nullable()
      .optional(),

    description: z
      .string()
      .trim()
      .max(20000)
      .nullable()
      .optional(),

    startDate: optionalDate,
    endDate: optionalDate,

    published: z
      .boolean()
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.startDate &&
      data.endDate &&
      data.endDate < data.startDate
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["endDate"],
        message: "End date must be after or equal to the start date.",
      });
    }
});

export const seasonMediaParamSchema = z.object({
  id: z.coerce.number().int().positive(),

  mediaType: z.enum([
    "banner",
    "icon",
  ]),
});