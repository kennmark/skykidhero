import { z } from "zod";

const positiveId = z.coerce
  .number()
  .int()
  .positive();

const requiredText = (max = 255) =>
  z
    .string()
    .trim()
    .min(1)
    .max(max);

const optionalNullableText = (max = 255) =>
  z
    .union([
      z.string().trim().max(max),
      z.null(),
    ])
    .optional()
    .transform((value) => {
      if (
        value === undefined ||
        value === null
      ) {
        return value;
      }

      return value === ""
        ? null
        : value;
    });

export const wingedLightMapParamsSchema =
  z.object({
    mapId: positiveId,
  });

export const wingedLightIdParamsSchema =
  z.object({
    id: positiveId,
  });

const wingedLightFields = {
  code: requiredText(100),

  label: requiredText(255),

  groupKey:
    optionalNullableText(100),

  seasonGroupKey:
    optionalNullableText(100),

  directions: z
    .array(
      z
        .string()
        .trim()
        .min(1)
        .max(1000)
    )
    .default([]),

  displayOrder: z
    .coerce
    .number()
    .int()
    .positive(),

  published: z
    .boolean()
    .default(true),
};

export const createWingedLightSchema =
  z.object(
    wingedLightFields
  );

export const updateWingedLightSchema =
  z
    .object({
      code:
        wingedLightFields.code
          .optional(),

      label:
        wingedLightFields.label
          .optional(),

      groupKey:
        wingedLightFields
          .groupKey,

      seasonGroupKey:
        wingedLightFields
          .seasonGroupKey,

      directions: z
        .array(
          z
            .string()
            .trim()
            .min(1)
            .max(1000)
        )
        .optional(),

      displayOrder:
        wingedLightFields
          .displayOrder
          .optional(),

      published: z
        .boolean()
        .optional(),
    })
    .refine(
      (data) =>
        Object.keys(data).length >
        0,
      {
        message:
          "At least one field is required.",
      }
    );