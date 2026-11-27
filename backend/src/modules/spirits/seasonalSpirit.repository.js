import prisma from "../../config/prisma.js";

import {
  SEASONAL_SPIRIT_LIST_PROJECTION,
  SEASONAL_SPIRIT_DETAIL_PROJECTION,
  SEASONAL_SPIRIT_ADMIN_LIST_PROJECTION,
  SEASONAL_SPIRIT_ADMIN_DETAIL_PROJECTION,
} from "./seasonalSpirit.projection.js";

/*
 * -------------------------------------------------------
 * Season
 * -------------------------------------------------------
 */

export async function findSeasonForSeasonalSpirit(
  seasonId,
) {
  return prisma.season.findFirst({
    where: {
      id: seasonId,
      deletedAt: null,
    },

    select: {
      id: true,
      number: true,
      year: true,
      code: true,
      name: true,
      slug: true,
      published: true,
      deletedAt: true,
    },
  });
}

/*
 * -------------------------------------------------------
 * Map
 * -------------------------------------------------------
 */

export async function findMapForSeasonalSpirit(
  mapId,
) {
  if (mapId === null || mapId === undefined) {
    return null;
  }

  return prisma.map.findFirst({
    where: {
      id: mapId,
      deletedAt: null,
    },

    select: {
      id: true,
      name: true,
      slug: true,
      published: true,
      deletedAt: true,
    },
  });
}

/*
 * -------------------------------------------------------
 * Code
 * -------------------------------------------------------
 *
 * Spirit.code is globally unique, regardless of
 * whether the Spirit is REGULAR or SEASONAL.
 */

export async function findSpiritByCode(code) {
  return prisma.spirit.findUnique({
    where: {
      code,
    },

    select: {
      id: true,
      code: true,
      type: true,
      seasonId: true,
      deletedAt: true,
    },
  });
}

/*
 * -------------------------------------------------------
 * Display order
 * -------------------------------------------------------
 *
 * Seasonal display order is scoped to the Season.
 *
 * We enforce this in the service because the current
 * Prisma schema does not have a Season-scoped unique
 * constraint for this value.
 */

export async function findSeasonalSpiritBySeasonAndDisplayOrder(
  seasonId,
  displayOrder,
) {
  return prisma.spirit.findFirst({
    where: {
      seasonId,
      type: "SEASONAL",
      displayOrder,
      deletedAt: null,
    },

    select: {
      id: true,
      code: true,
      seasonId: true,
      displayOrder: true,
      deletedAt: true,
    },
  });
}

/*
 * -------------------------------------------------------
 * Public
 * -------------------------------------------------------
 */

export async function findPublishedSeasonalSpiritsBySeason(
  seasonId,
) {
  return prisma.spirit.findMany({
    where: {
      seasonId,
      type: "SEASONAL",
      published: true,
      deletedAt: null,

      season: {
        deletedAt: null,
        published: true,
      },
    },

    select:
      SEASONAL_SPIRIT_LIST_PROJECTION,

    orderBy: {
      displayOrder: "asc",
    },
  });
}

export async function findPublishedSeasonalSpiritByCode(
  code,
) {
  return prisma.spirit.findFirst({
    where: {
      code,
      type: "SEASONAL",
      published: true,
      deletedAt: null,

      season: {
        deletedAt: null,
        published: true,
      },
    },

    select:
      SEASONAL_SPIRIT_DETAIL_PROJECTION,
  });
}

/*
 * -------------------------------------------------------
 * Admin
 * -------------------------------------------------------
 */

export async function findAdminSeasonalSpiritsBySeason(
  seasonId,
) {
  return prisma.spirit.findMany({
    where: {
      seasonId,
      type: "SEASONAL",
      deletedAt: null,
    },

    select:
      SEASONAL_SPIRIT_ADMIN_LIST_PROJECTION,

    orderBy: {
      displayOrder: "asc",
    },
  });
}

export async function findAdminSeasonalSpiritById(
  id,
) {
  return prisma.spirit.findFirst({
    where: {
      id,
      type: "SEASONAL",
      deletedAt: null,
    },

    select:
      SEASONAL_SPIRIT_ADMIN_DETAIL_PROJECTION,
  });
}

/*
 * -------------------------------------------------------
 * Create
 * -------------------------------------------------------
 */

export async function createSeasonalSpirit(
  seasonId,
  data,
) {
  return prisma.spirit.create({
    data: {
      code: data.code,

      mapId:
        data.mapId ??
        null,

      seasonId,

      type: "SEASONAL",

      name: data.name,

      category: data.category,

      reliveType:
        data.reliveType,

      difficultyLevel:
        data.difficultyLevel,

      difficultyTypes:
        data.difficultyTypes,

      guideVideoUrl:
        data.guideVideoUrl ??
        null,

      directions:
        data.directions,

      displayOrder:
        data.displayOrder,

      published:
        data.published,
    },

    select:
      SEASONAL_SPIRIT_ADMIN_DETAIL_PROJECTION,
  });
}

/*
 * -------------------------------------------------------
 * Update
 * -------------------------------------------------------
 */

export async function updateSeasonalSpirit(
  id,
  data,
) {
  const updateData = {};

  if (
    data.mapId !== undefined
  ) {
    updateData.mapId =
      data.mapId;
  }

  if (
    data.name !== undefined
  ) {
    updateData.name =
      data.name;
  }

  if (
    data.category !== undefined
  ) {
    updateData.category =
      data.category;
  }

  if (
    data.reliveType !== undefined
  ) {
    updateData.reliveType =
      data.reliveType;
  }

  if (
    data.difficultyLevel !==
    undefined
  ) {
    updateData.difficultyLevel =
      data.difficultyLevel;
  }

  if (
    data.difficultyTypes !==
    undefined
  ) {
    updateData.difficultyTypes =
      data.difficultyTypes;
  }

  if (
    data.guideVideoUrl !==
    undefined
  ) {
    updateData.guideVideoUrl =
      data.guideVideoUrl;
  }

  if (
    data.directions !==
    undefined
  ) {
    updateData.directions =
      data.directions;
  }

  if (
    data.displayOrder !==
    undefined
  ) {
    updateData.displayOrder =
      data.displayOrder;
  }

  if (
    data.published !==
    undefined
  ) {
    updateData.published =
      data.published;
  }

  if (data.iconImage !== undefined) {
    updateData.iconImage = data.iconImage;
  }

  if (data.iconImagePublicId !== undefined) {
    updateData.iconImagePublicId =
      data.iconImagePublicId;
  }

  if (data.detailImage !== undefined) {
    updateData.detailImage = data.detailImage;
  }

  if (data.detailImagePublicId !== undefined) {
    updateData.detailImagePublicId =
      data.detailImagePublicId;
  }

  return prisma.spirit.update({
    where: {
      id,
    },

    data: updateData,

    select:
      SEASONAL_SPIRIT_ADMIN_DETAIL_PROJECTION,
  });
}

/*
 * -------------------------------------------------------
 * Collectibles
 * -------------------------------------------------------
 */

export async function syncSeasonalSpiritCollectibles(
  spiritId,
  collectibles,
) {
  return prisma.$transaction(async (tx) => {
    const existing = await tx.spiritCollectible.findMany({
      where: { spiritId },
      select: { id: true },
    });

    // Move current rows out of the positive display-order range first.
    // This avoids @@unique([spiritId, displayOrder]) collisions when
    // entries are reordered in the same save operation.
    for (const item of existing) {
      await tx.spiritCollectible.update({
        where: { id: item.id },
        data: { displayOrder: -item.id },
      });
    }

    const retainedIds = collectibles
      .map((item) => item.id)
      .filter((id) => id !== undefined);

    if (retainedIds.length > 0) {
      await tx.spiritCollectible.deleteMany({
        where: {
          spiritId,
          id: { notIn: retainedIds },
        },
      });
    } else {
      await tx.spiritCollectible.deleteMany({ where: { spiritId } });
    }

    for (const collectible of collectibles) {
      const { id, ...data } = collectible;

      if (id !== undefined) {
        await tx.spiritCollectible.update({
          where: { id },
          data,
        });
      } else {
        await tx.spiritCollectible.create({
          data: { spiritId, ...data },
        });
      }
    }

    return tx.spirit.findFirst({
      where: {
        id: spiritId,
        type: "SEASONAL",
        deletedAt: null,
      },
      select: SEASONAL_SPIRIT_ADMIN_DETAIL_PROJECTION,
    });
  });
}

/*
 * -------------------------------------------------------
 * Tree costs
 * -------------------------------------------------------
 */

export async function syncSeasonalSpiritTreeCosts(
  spiritId,
  treeCosts,
) {
  return prisma.$transaction(async (tx) => {
    const existing = await tx.spiritTreeCost.findMany({
      where: { spiritId },
      select: { id: true },
    });

    // Prevent unique display-order collisions during reordering.
    for (const item of existing) {
      await tx.spiritTreeCost.update({
        where: { id: item.id },
        data: { displayOrder: -item.id },
      });
    }

    const retainedIds = treeCosts
      .map((item) => item.id)
      .filter((id) => id !== undefined);

    if (retainedIds.length > 0) {
      await tx.spiritTreeCost.deleteMany({
        where: {
          spiritId,
          id: { notIn: retainedIds },
        },
      });
    } else {
      await tx.spiritTreeCost.deleteMany({ where: { spiritId } });
    }

    for (const treeCost of treeCosts) {
      const { id, ...data } = treeCost;

      if (id !== undefined) {
        await tx.spiritTreeCost.update({
          where: { id },
          data,
        });
      } else {
        await tx.spiritTreeCost.create({
          data: { spiritId, ...data },
        });
      }
    }

    return tx.spirit.findFirst({
      where: {
        id: spiritId,
        type: "SEASONAL",
        deletedAt: null,
      },
      select: SEASONAL_SPIRIT_ADMIN_DETAIL_PROJECTION,
    });
  });
}

/*
 * -------------------------------------------------------
 * Collectible image lookup/update
 * -------------------------------------------------------
 */

export function findSeasonalSpiritCollectible(
  spiritId,
  collectibleId,
) {
  return prisma.spiritCollectible.findFirst({
    where: {
      id: collectibleId,
      spiritId,
      spirit: {
        type: "SEASONAL",
        deletedAt: null,
      },
    },
    select: {
      id: true,
      spiritId: true,
      label: true,
      image: true,
      imagePublicId: true,
    },
  });
}

export function updateSeasonalSpiritCollectibleImage(
  collectibleId,
  { image, imagePublicId },
) {
  return prisma.spiritCollectible.update({
    where: { id: collectibleId },
    data: { image, imagePublicId },
  });
}

export async function findSeasonByNumberForSeasonalSpirit(
  seasonNumber,
) {
  return prisma.season.findFirst({
    where: {
      number: seasonNumber,
      deletedAt: null,
    },
    select: {
      id: true,
      number: true,
      year: true,
      code: true,
      name: true,
      slug: true,
      published: true,
      deletedAt: true,
    },
  });
}

/**
 * Public list variant that includes the same safe nested data
 * returned by the existing public detail endpoint. This lets the
 * frontend load a Season's published spirits with one request.
 */
export async function findPublishedSeasonalSpiritsWithDetailsBySeason(
  seasonId,
) {
  return prisma.spirit.findMany({
    where: {
      seasonId,
      type: "SEASONAL",
      published: true,
      deletedAt: null,
      season: {
        deletedAt: null,
        published: true,
      },
    },
    select: SEASONAL_SPIRIT_DETAIL_PROJECTION,
    orderBy: {
      displayOrder: "asc",
    },
  });
}

export async function softDeleteSeasonalSpirit(id) {
  return prisma.spirit.updateMany({
    where: {
      id,
      type: "SEASONAL",
      deletedAt: null,
    },
    data: {
      published: false,
      deletedAt: new Date(),
    },
  });
}