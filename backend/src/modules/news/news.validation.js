import { z } from "zod";
import { optionalBoolean, optionalString, optionalUrl, requiredString } from './../../shared/validators/fields.js';

export const createNewsSchema = z.object({
  title: requiredString("Tite", 5),
  summary: optionalString(),
  body: requiredString("Body")
  .pipe(
    z.string().min(
      20,
      "Body must be at least 20 characters."
    )
  ),
  image: optionalString(),
  externalUrl: optionalUrl("External URL"),
  featured: optionalBoolean(),
  published: optionalBoolean(),
})

export const newsIdSchema = z.object({
  id: z.coerce
    .number()
    .int("News ID must be an integer.")
    .positive("News ID must be positive."),
});

export const updateNewsSchema =
createNewsSchema.partial()