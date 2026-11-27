import { z } from "zod";

const CATEGORY_OPTIONS = [
  "EMOTE",
  "STANCE",
  "CALL",
  "SOUND_CALL",
  "FRIENDSHIP_ACTION",
  "ITEM",
  "NON_ENTITY",
  "SPIRIT",
];

const RELIVE_TYPE_OPTIONS = [
  "FOLLOW_MEMORY",
  "CARRY_MEMORY",
  "COLLECT_MEMORY",
  "QUEST_MEMORY",
  "TASK",
  "NONE",
];

const COLLECTIBLE_CURRENCY_OPTIONS = [
  "CANDLES",
  "HEARTS",
  "SEASON_CANDLES",
  "FREE",
];


export const seasonalSpiritIdParamSchema =
  z.object({
    id: z.coerce
      .number()
      .int()
      .positive(),
  });

export const seasonalSpiritSeasonIdParamSchema =
  z.object({
    seasonId: z.coerce
      .number()
      .int()
      .positive(),
  });

export const seasonalSpiritCodeParamSchema =
  z.object({
    code: z
      .string()
      .trim()
      .min(1)
      .max(100),
  });

const optionalMapId =
  z.union([
    z.coerce
      .number()
      .int()
      .positive(),
    z.null(),
    z.literal(""),
  ])
  .optional()
  .transform((value) => {
    if (value === undefined) {
      return undefined;
    }

    if (value === "" || value === null) {
      return null;
    }

    return value;
  });

export const createSeasonalSpiritSchema =
  z.object({
    code: z
      .string()
      .trim()
      .min(1, "Spirit code is required.")
      .max(100)
      .regex(
        /^[a-z0-9-]+$/,
        "Spirit code may only contain lowercase letters, numbers, and hyphens."
      ),

    mapId: optionalMapId,

    name: z
      .string()
      .trim()
      .min(1, "Spirit name is required.")
      .max(200),

    category: z.enum(
      CATEGORY_OPTIONS,
    ),

    reliveType: z.enum(
      RELIVE_TYPE_OPTIONS,
    ),

    difficultyLevel: z
      .coerce
      .number()
      .int()
      .min(0)
      .max(100),

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
      .optional()
      .or(z.literal("")),

    directions: z
      .array(
        z.string().trim().min(1)
      )
      .default([]),

    displayOrder: z
      .coerce
      .number()
      .int()
      .positive(),

    published: z
      .boolean()
      .optional()
      .default(true),
  });

export const updateSeasonalSpiritSchema =
  z.object({
    mapId: optionalMapId,

    name: z
      .string()
      .trim()
      .min(1)
      .max(200)
      .optional(),

    category: z
      .enum(CATEGORY_OPTIONS)
      .optional(),

    reliveType: z
      .enum(RELIVE_TYPE_OPTIONS)
      .optional(),

    difficultyLevel: z
      .coerce
      .number()
      .int()
      .min(0)
      .max(100)
      .optional(),

    difficultyTypes: z
      .array(
        z.coerce
          .number()
          .int()
      )
      .optional(),

    guideVideoUrl: z
      .string()
      .trim()
      .url()
      .nullable()
      .optional()
      .or(z.literal("")),

    directions: z
      .array(
        z.string().trim().min(1)
      )
      .optional(),

    displayOrder: z
      .coerce
      .number()
      .int()
      .positive()
      .optional(),

    published: z
      .boolean()
      .optional(),
  });

  export const seasonalSpiritMediaParamsSchema =
  seasonalSpiritIdParamSchema.extend({
    slot: z.enum([
      "icon",
      "detail",
    ]),
  });

  const seasonalSpiritCollectibleSchema = z.object({
    id: z.coerce.number().int().positive().optional(),
    label: z.string().trim().min(1).max(200),
    currency: z.enum(COLLECTIBLE_CURRENCY_OPTIONS),
    price: z.coerce.number().int().min(0).default(0),
    displayOrder: z.coerce.number().int().positive(),
  });
  
  export const updateSeasonalSpiritCollectiblesSchema = z.object({
    collectibles: z.array(seasonalSpiritCollectibleSchema).max(100),
  });
  
  const seasonalSpiritTreeCostSchema = z.object({
    id: z.coerce.number().int().positive().optional(),
    candles: z.coerce.number().int().min(0).default(0),
    hearts: z.coerce.number().int().min(0).default(0),
    ascendedCandles: z.coerce.number().int().min(0).default(0),
    displayOrder: z.coerce.number().int().positive(),
  });
  
  export const updateSeasonalSpiritTreeCostsSchema = z.object({
    treeCosts: z.array(seasonalSpiritTreeCostSchema).max(100),
  });
  
  export const seasonalSpiritCollectibleParamsSchema =
    seasonalSpiritIdParamSchema.extend({
      collectibleId: z.coerce.number().int().positive(),
    });
  