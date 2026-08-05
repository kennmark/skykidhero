import { z } from "zod";
import { optionalBoolean, optionalString, optionalUrl, requiredString } from './../../shared/validators/fields.js';

const nullableOptionalString = z.preprocess(
  (value) => {
    if (value === "") {
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

const nullableOptionalUrl = (
  field = "URL"
) =>
  z.preprocess(
    (value) => {
      if (value === "") {
        return null;
      }

      return value;
    },
    z
      .string()
      .trim()
      .url(
        `${field} must be a valid URL.`
      )
      .nullable()
      .optional()
  );
  
export const createNewsSchema = z.object({
  title: requiredString("Title", 5),
  summary: nullableOptionalString,
  body: requiredString("Body")
  .pipe(
    z.string().min(
      20,
      "Body must be at least 20 characters."
    )
  ),
  image: nullableOptionalString,
  imagePublicId: nullableOptionalString,
  externalUrl: nullableOptionalUrl(
        "External URL"
      ),
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