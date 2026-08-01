import { z } from "zod";

export const newsSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters."),

  summary: z
    .string()
    .trim()
    .optional(),

  body: z
    .string()
    .trim()
    .min(20, "Body must be at least 20 characters."),

  image: z
    .string()
    .trim()
    .optional(),

  imagePublicId: z
    .string()
    .trim()
    .optional()
    .nullable(),
  
  externalUrl: z
    .union([
      z.literal(""),
      z.string().url("External URL must be a valid URL."),
    ])
    .optional(),

  featured: z.boolean(),

  published: z.boolean(),
});