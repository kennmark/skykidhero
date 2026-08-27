import { z } from "zod";

const positiveId = z.coerce
  .number()
  .int()
  .positive();

export const spiritIdParamsSchema =
  z.object({
    id: positiveId,
  });

export const spiritCodeParamsSchema =
  z.object({
    code: z
      .string()
      .trim()
      .min(1)
      .max(100),
  });

export const mapSpiritParamsSchema =
  z.object({
    mapId: positiveId,
  });

const spiritCategorySchema =
  z.enum([
    "EMOTE",
    "STANCE",
    "CALL",
    "SOUND_CALL",
    "FRIENDSHIP_ACTION",
    "ITEM",
    "NON_ENTITY",
    "SPIRIT",
  ]);

const spiritReliveTypeSchema =
  z.enum([
    "FOLLOW_MEMORY",
    "CARRY_MEMORY",
    "COLLECT_MEMORY",
    "QUEST_MEMORY",
    "TASK",
    "NONE",
  ]);

export const createRegularSpiritSchema =
  z.object({
    code: z
      .string()
      .trim()
      .min(1)
      .max(100),

    name: z
      .string()
      .trim()
      .min(1)
      .max(150),

    category:
      spiritCategorySchema,

    reliveType:
      spiritReliveTypeSchema,

    difficultyLevel: z
      .coerce
      .number()
      .int()
      .min(0)
      .max(100)
      .default(0),

    difficultyTypes: z
      .array(
        z.coerce
          .number()
          .int()
      )
      .default([]),

    guideVideoUrl: z
      .string()
      .trim()
      .url()
      .nullable()
      .optional(),

    directions: z
      .array(
        z
          .string()
          .trim()
          .min(1)
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
  });

export const updateRegularSpiritSchema =
  createRegularSpiritSchema
    .omit({
      code: true,
    })
    .partial();

export const spiritMediaParamsSchema =
  z.object({
    id: positiveId,

    slot: z.enum([
      "icon",
      "detail",
    ]),
  });

const spiritCollectibleCurrencySchema =
  z.enum([
    "CANDLES",
    "HEARTS",
    "SEASON_CANDLES",
    "FREE",
  ]);

const spiritCollectibleSchema =
  z.object({
    id: positiveId.optional(),

    label: z
      .string()
      .trim()
      .min(1)
      .max(100),

    currency:
      spiritCollectibleCurrencySchema,

    price: z
      .coerce
      .number()
      .int()
      .min(0),

    displayOrder: z
      .coerce
      .number()
      .int()
      .positive(),
  });

export const updateSpiritCollectiblesSchema =
  z
    .object({
      collectibles:
        z.array(
          spiritCollectibleSchema
        ),
    })
    .superRefine(
      (
        data,
        context
      ) => {
        const ids =
          data.collectibles
            .map(
              (item) =>
                item.id
            )
            .filter(
              (id) =>
                id !== undefined
            );

        if (
          new Set(ids).size !==
          ids.length
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode.custom,

            path: [
              "collectibles",
            ],

            message:
              "Collectible IDs must be unique.",
          });
        }

        const displayOrders =
          data.collectibles.map(
            (item) =>
              item.displayOrder
          );

        if (
          new Set(
            displayOrders
          ).size !==
          displayOrders.length
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode.custom,

            path: [
              "collectibles",
            ],

            message:
              "Collectible display orders must be unique.",
          });
        }
      }
    );

const spiritTreeCostSchema =
  z.object({
    id: positiveId.optional(),

    candles: z
      .coerce
      .number()
      .int()
      .min(0),

    hearts: z
      .coerce
      .number()
      .int()
      .min(0),

    ascendedCandles: z
      .coerce
      .number()
      .int()
      .min(0),

    displayOrder: z
      .coerce
      .number()
      .int()
      .positive(),
  });

export const updateSpiritTreeCostsSchema =
  z
    .object({
      treeCosts:
        z.array(
          spiritTreeCostSchema
        ),
    })
    .superRefine(
      (
        data,
        context
      ) => {
        const ids =
          data.treeCosts
            .map(
              (item) =>
                item.id
            )
            .filter(
              (id) =>
                id !== undefined
            );

        if (
          new Set(ids).size !==
          ids.length
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode.custom,

            path: [
              "treeCosts",
            ],

            message:
              "Tree Cost IDs must be unique.",
          });
        }

        const displayOrders =
          data.treeCosts.map(
            (item) =>
              item.displayOrder
          );

        if (
          new Set(
            displayOrders
          ).size !==
          displayOrders.length
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode.custom,

            path: [
              "treeCosts",
            ],

            message:
              "Tree Cost display orders must be unique.",
          });
        }
      }
    );

export const spiritCollectibleMediaParamsSchema =
  z.object({
    id: positiveId,

    collectibleId:
      positiveId,
  });