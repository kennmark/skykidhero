import prisma
  from "../../config/prisma.js";

import {
  MAP_ADMIN_DETAIL_PROJECTION,
  MAP_ADMIN_LIST_PROJECTION,
  MAP_DETAIL_PROJECTION,
  MAP_LIST_PROJECTION,
} from "./map.projection.js";

function normalizeMapWingedLightCount(
  map
) {
  if (!map) {
    return map;
  }

  return {
    ...map,

    wingedLightCount:
      map._count?.wingedLights ?? 0,

    _count: undefined,
  };
}

export async function findAllPublishedMaps(
  select = MAP_LIST_PROJECTION
) {
    const maps =
    await prisma.map.findMany({
      where: {
        published: true,
        deletedAt: null,
      },

      orderBy: {
        displayOrder: "asc",
      },

      select,
    });

  return maps.map(
    normalizeMapWingedLightCount
  );
}

export async function findPublishedMapByRoute(
  id,
  slug,
  select = MAP_DETAIL_PROJECTION
) {
  const map =
    await prisma.map.findFirst({
      where: {
        id,
        slug,
        published: true,
        deletedAt: null,
      },

      select,
    });

  return normalizeMapWingedLightCount(
    map
  );
}

export async function findAllAdminMaps(
  select = MAP_ADMIN_LIST_PROJECTION
  ) {
  const maps =
    await prisma.map.findMany({
      where: {
        deletedAt: null,
      },

      orderBy: {
        displayOrder: "asc",
      },

      select,
    });

  return maps.map(
    normalizeMapWingedLightCount
  );
}

export async function findAdminMapById(
  id,
  select = MAP_ADMIN_DETAIL_PROJECTION
) {
  const map =
    await prisma.map.findUnique({
      where: {
        id,
      },

      select,
    });

  return normalizeMapWingedLightCount(
    map
  );
}

export async function findMapSection(
  mapId,
  type
) {
  return prisma.mapSection.findUnique({
    where: {
      mapId_type: {
        mapId,
        type,
      },
    },

    select: {
      id: true,
      mapId: true,
      type: true,
      heading: true,
      description: true,
      displayOrder: true,
      published: true,
    },
  });
}

export async function updateMap(
  id,
  data
) {
  return prisma.map.update({
    where: {
      id,
    },

    data,

    select:
      MAP_ADMIN_DETAIL_PROJECTION,
  });
}

export async function updateMapSection(
  mapId,
  type,
  data
) {
  return prisma.mapSection.update({
    where: {
      mapId_type: {
        mapId,
        type,
      },
    },

    data,

    select: {
      id: true,
      mapId: true,
      type: true,
      heading: true,
      description: true,
      displayOrder: true,
      published: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}