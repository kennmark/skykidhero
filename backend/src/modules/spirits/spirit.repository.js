import prisma
  from "../../config/prisma.js";

import {
  SPIRIT_ADMIN_DETAIL_PROJECTION,
  SPIRIT_ADMIN_LIST_PROJECTION,
  SPIRIT_DETAIL_PROJECTION,
  SPIRIT_LIST_PROJECTION,
} from "./spirit.projection.js";

export function findMapForSpirit(
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
      published: true,
    },
  });
}

export function findSpiritByCode(
  code
) {
  return prisma.spirit.findUnique({
    where: {
      code,
    },
  });
}

export function findAdminSpiritById(
  id
) {
  return prisma.spirit.findFirst({
    where: {
      id,
      type: "REGULAR",
      deletedAt: null,
    },

    select:
      SPIRIT_ADMIN_DETAIL_PROJECTION,
  });
}

export function findPublishedRegularSpiritsByMap(
  mapId
) {
  return prisma.spirit.findMany({
    where: {
      mapId,

      type: "REGULAR",

      published: true,
      deletedAt: null,

      map: {
        published: true,
        deletedAt: null,
      },
    },

    orderBy: {
      displayOrder: "asc",
    },

    select:
      SPIRIT_DETAIL_PROJECTION,
  });
}

export function findPublishedRegularSpiritByCode(
  code
) {
  return prisma.spirit.findFirst({
    where: {
      code,

      type: "REGULAR",

      published: true,
      deletedAt: null,

      map: {
        published: true,
        deletedAt: null,
      },
    },

    select:
      SPIRIT_DETAIL_PROJECTION,
  });
}

export function findAdminRegularSpiritsByMap(
  mapId
) {
  return prisma.spirit.findMany({
    where: {
      mapId,

      type: "REGULAR",

      deletedAt: null,
    },

    orderBy: {
      displayOrder: "asc",
    },

    select:
      SPIRIT_ADMIN_LIST_PROJECTION,
  });
}

export function createRegularSpirit(
  mapId,
  data
) {
  return prisma.spirit.create({
    data: {
      ...data,

      mapId,
      type: "REGULAR",
    },

    select:
      SPIRIT_ADMIN_DETAIL_PROJECTION,
  });
}

export function updateRegularSpirit(
  id,
  data
) {
  return prisma.spirit.update({
    where: {
      id,
    },

    data,

    select:
      SPIRIT_ADMIN_DETAIL_PROJECTION,
  });
}

export async function syncRegularSpiritCollectibles(
  spiritId,
  collectibles
) {
  return prisma.$transaction(
    async (tx) => {
      const existing =
        await tx.spiritCollectible.findMany({
          where: {
            spiritId,
          },

          select: {
            id: true,
            displayOrder: true,
          },
        });

      /*
       * Temporarily move existing
       * display orders to negative
       * values.
       *
       * This prevents unique conflicts
       * when rows are reordered.
       */
      for (
        const item
        of existing
      ) {
        await tx.spiritCollectible.update({
          where: {
            id: item.id,
          },

          data: {
            displayOrder:
              -item.id,
          },
        });
      }

      const retainedIds =
        collectibles
          .map(
            (item) =>
              item.id
          )
          .filter(
            (id) =>
              id !== undefined
          );

      if (
        retainedIds.length >
        0
      ) {
        await tx.spiritCollectible.deleteMany({
          where: {
            spiritId,

            id: {
              notIn:
                retainedIds,
            },
          },
        });
      } else {
        await tx.spiritCollectible.deleteMany({
          where: {
            spiritId,
          },
        });
      }

      for (
        const collectible
        of collectibles
      ) {
        const {
          id,
          ...data
        } = collectible;

        if (id) {
          await tx.spiritCollectible.update({
            where: {
              id,
            },

            data,
          });
        } else {
          await tx.spiritCollectible.create({
            data: {
              spiritId,
              ...data,
            },
          });
        }
      }

      return tx.spirit.findFirst({
        where: {
          id: spiritId,
          type: "REGULAR",
          deletedAt: null,
        },

        select:
          SPIRIT_ADMIN_DETAIL_PROJECTION,
      });
    }
  );
}

export async function syncRegularSpiritTreeCosts(
  spiritId,
  treeCosts
) {
  return prisma.$transaction(
    async (tx) => {
      const existing =
        await tx.spiritTreeCost.findMany({
          where: {
            spiritId,
          },

          select: {
            id: true,
            displayOrder: true,
          },
        });

      /*
       * Avoid unique displayOrder
       * collisions while reordering.
       */
      for (
        const item
        of existing
      ) {
        await tx.spiritTreeCost.update({
          where: {
            id: item.id,
          },

          data: {
            displayOrder:
              -item.id,
          },
        });
      }

      const retainedIds =
        treeCosts
          .map(
            (item) =>
              item.id
          )
          .filter(
            (id) =>
              id !== undefined
          );

      if (
        retainedIds.length >
        0
      ) {
        await tx.spiritTreeCost.deleteMany({
          where: {
            spiritId,

            id: {
              notIn:
                retainedIds,
            },
          },
        });
      } else {
        await tx.spiritTreeCost.deleteMany({
          where: {
            spiritId,
          },
        });
      }

      for (
        const treeCost
        of treeCosts
      ) {
        const {
          id,
          ...data
        } = treeCost;

        if (id) {
          await tx.spiritTreeCost.update({
            where: {
              id,
            },

            data,
          });
        } else {
          await tx.spiritTreeCost.create({
            data: {
              spiritId,
              ...data,
            },
          });
        }
      }

      return tx.spirit.findFirst({
        where: {
          id: spiritId,
          type: "REGULAR",
          deletedAt: null,
        },

        select:
          SPIRIT_ADMIN_DETAIL_PROJECTION,
      });
    }
  );
}

export function findSpiritCollectible(
  spiritId,
  collectibleId
) {
  return prisma.spiritCollectible.findFirst({
    where: {
      id:
        collectibleId,

      spiritId,

      spirit: {
        type:
          "REGULAR",

        deletedAt:
          null,
      },
    },

    select: {
      id: true,
      spiritId: true,
      label: true,
      image: true,
      imagePublicId:
        true,
    },
  });
}

export function updateSpiritCollectibleImage(
  collectibleId,
  {
    image,
    imagePublicId,
  }
) {
  return prisma.spiritCollectible.update({
    where: {
      id:
        collectibleId,
    },

    data: {
      image,
      imagePublicId,
    },
  });
}