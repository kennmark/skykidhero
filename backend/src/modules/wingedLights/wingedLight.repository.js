import prisma
  from "../../config/prisma.js";

import {
  WINGED_LIGHT_LIST_PROJECTION,
  WINGED_LIGHT_DETAIL_PROJECTION,
  WINGED_LIGHT_ADMIN_LIST_PROJECTION,
  WINGED_LIGHT_ADMIN_DETAIL_PROJECTION,
} from "./wingedLight.projection.js";

export function findPublishedWingedLightsByMapId(
  mapId
) {
  return prisma.wingedLight.findMany({
    where: {
      mapId,
      published: true,
      deletedAt: null,
    },

    orderBy: {
      displayOrder: "asc",
    },

    select:
      WINGED_LIGHT_LIST_PROJECTION,
  });
}

export function findPublishedWingedLightByCode(
  code
) {
  return prisma.wingedLight.findFirst({
    where: {
      code,
      published: true,
      deletedAt: null,
    },

    select:
      WINGED_LIGHT_DETAIL_PROJECTION,
  });
}

export function findAdminWingedLightsByMapId(
  mapId
) {
  return prisma.wingedLight.findMany({
    where: {
      mapId,
      deletedAt: null,
    },

    orderBy: {
      displayOrder: "asc",
    },

    select:
      WINGED_LIGHT_ADMIN_LIST_PROJECTION,
  });
}

export function findAdminWingedLightById(
  id
) {
  return prisma.wingedLight.findFirst({
    where: {
      id,
      deletedAt: null,
    },

    select:
      WINGED_LIGHT_ADMIN_DETAIL_PROJECTION,
  });
}

export function findWingedLightByCode(
  code
) {
  return prisma.wingedLight.findUnique({
    where: {
      code,
    },

    select: {
      id: true,
      code: true,
      mapId: true,
      deletedAt: true,
    },
  });
}

export function findMapForWingedLight(
  mapId
) {
  return prisma.map.findFirst({
    where: {
      id: mapId,
      deletedAt: null,
    },

    select: {
      id: true,
      name: true,
      slug: true,
    },
  });
}

export function createWingedLight(
  mapId,
  data
) {
  return prisma.wingedLight.create({
    data: {
      mapId,

      code: data.code,
      label: data.label,

      groupKey:
        data.groupKey ?? null,

      seasonGroupKey:
        data.seasonGroupKey ??
        null,

      directions:
        data.directions ?? [],

      displayOrder:
        data.displayOrder,

      published:
        data.published ?? true,
    },

    select:
      WINGED_LIGHT_ADMIN_DETAIL_PROJECTION,
  });
}

export function updateWingedLight(
  id,
  data
) {
  return prisma.wingedLight.update({
    where: {
      id,
    },

    data,

    select:
      WINGED_LIGHT_ADMIN_DETAIL_PROJECTION,
  });
}

export function findWingedLightByMapAndDisplayOrder(
  mapId,
  displayOrder
) {
  return prisma.wingedLight.findFirst({
    where: {
      mapId,
      displayOrder,
    },

    select: {
      id: true,
      mapId: true,
      displayOrder: true,
      deletedAt: true,
    },
  });
}

export function findArchivedWingedLightsByMapId(
  mapId
) {
  return prisma.wingedLight.findMany({
    where: {
      mapId,

      deletedAt: {
        not: null,
      },
    },

    orderBy: {
      displayOrder: "asc",
    },

    select:
      WINGED_LIGHT_ADMIN_LIST_PROJECTION,
  });
}

export function findAdminWingedLightByIdIncludingDeleted(
  id
) {
  return prisma.wingedLight.findUnique({
    where: {
      id,
    },

    select:
      WINGED_LIGHT_ADMIN_DETAIL_PROJECTION,
  });
}

export function archiveWingedLight(
  id
) {
  return prisma.wingedLight.update({
    where: {
      id,
    },

    data: {
      deletedAt:
        new Date(),
    },

    select:
      WINGED_LIGHT_ADMIN_DETAIL_PROJECTION,
  });
}

export function restoreWingedLight(
  id
) {
  return prisma.wingedLight.update({
    where: {
      id,
    },

    data: {
      deletedAt: null,
    },

    select:
      WINGED_LIGHT_ADMIN_DETAIL_PROJECTION,
  });
}