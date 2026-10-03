import prisma
  from "../../config/prisma.js";

import {
  TRAVELING_SPIRIT_PUBLIC_LIST_PROJECTION,
  TRAVELING_SPIRIT_PUBLIC_DETAIL_PROJECTION,
  TRAVELING_SPIRIT_ADMIN_LIST_PROJECTION,
  TRAVELING_SPIRIT_ADMIN_DETAIL_PROJECTION,
} from "./travelingSpirit.projection.js";

export async function findPublishedTravelingSpiritVisits(
  select =
    TRAVELING_SPIRIT_PUBLIC_LIST_PROJECTION
) {
  return prisma.travelingSpiritVisit.findMany({
    where: {
      published: true,
      deletedAt: null,
    },

    orderBy: {
      startDate: "asc",
    },

    select,
  });
}

export async function findPublishedTravelingSpiritVisitById(
  id,
  select =
    TRAVELING_SPIRIT_PUBLIC_DETAIL_PROJECTION
) {
  return prisma.travelingSpiritVisit.findFirst({
    where: {
      id,
      published: true,
      deletedAt: null,
    },

    select,
  });
}

export async function findAdminTravelingSpiritVisits(
  select =
    TRAVELING_SPIRIT_ADMIN_LIST_PROJECTION
) {
  return prisma.travelingSpiritVisit.findMany({
    where: {
      deletedAt: null,
    },

    orderBy: [
      {
        startDate: "desc",
      },
      {
        id: "desc",
      },
    ],

    select,
  });
}

export async function findAdminTravelingSpiritVisitById(
  id,
  select =
    TRAVELING_SPIRIT_ADMIN_DETAIL_PROJECTION
) {
  return prisma.travelingSpiritVisit.findFirst({
    where: {
      id,
      deletedAt: null,
    },

    select,
  });
}

export async function findTravelingSpiritVisitById(
  id
) {
  return prisma.travelingSpiritVisit.findUnique({
    where: {
      id,
    },

    select: {
      id: true,
      type: true,

      startDate: true,
      endDate: true,

      hintEnabled: true,
      hintImage: true,
      hintImagePublicId: true,
      hintUrl: true,

      wingBuffCount: true,

      published: true,
      deletedAt: true,
    },
  });
}

export async function findSpiritById(
  spiritId
) {
  return prisma.spirit.findFirst({
    where: {
      id: spiritId,
      deletedAt: null,
    },

    select: {
      id: true,
      code: true,
      name: true,
      type: true,
      category: true,

      iconImage: true,
      detailImage: true,

      published: true,
    },
  });
}

export async function findAdminSpiritsForTravelingSpiritSelection() {
  return prisma.spirit.findMany({
    where: {
      deletedAt: null,
      published: true,
    },

    orderBy: [
      {
        type: "asc",
      },
      {
        displayOrder: "asc",
      },
      {
        name: "asc",
      },
    ],

    select: {
      id: true,
      code: true,
      name: true,
      type: true,

      iconImage: true,
      detailImage: true,

      displayOrder: true,

      map: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
    },
  });
}

export async function createTravelingSpiritVisit(
  data,
  spirits
) {
  return prisma.$transaction(
    async (tx) => {
      const visit =
        await tx.travelingSpiritVisit.create({
          data: {
            type: data.type,

            startDate:
              data.startDate,

            endDate:
              data.endDate,

            hintEnabled:
              data.hintEnabled ?? false,

            hintImage:
              data.hintImage ?? null,

            hintImagePublicId:
              data.hintImagePublicId ??
              null,

            hintUrl:
              data.hintUrl ?? null,

            wingBuffCount:
              data.wingBuffCount ??
              null,

            published:
              data.published ??
              true,
          },
        });

      if (spirits?.length) {
        await tx.travelingSpiritVisitSpirit.createMany({
          data: spirits.map(
            (spirit, index) => ({
              travelingSpiritVisitId:
                visit.id,

              spiritId:
                spirit.spiritId,

              displayOrder:
                spirit.displayOrder ??
                index + 1,
            })
          ),
        });
      }

      return tx.travelingSpiritVisit.findUnique({
        where: {
          id: visit.id,
        },

        select:
          TRAVELING_SPIRIT_ADMIN_DETAIL_PROJECTION,
      });
    }
  );
}

export async function updateTravelingSpiritVisit(
  id,
  data,
  spirits
) {
  return prisma.$transaction(
    async (tx) => {
      await tx.travelingSpiritVisit.update({
        where: {
          id,
        },

        data,
      });

      if (spirits !== undefined) {
        await tx.travelingSpiritVisitSpirit.deleteMany({
          where: {
            travelingSpiritVisitId:
              id,
          },
        });

        if (spirits.length) {
          await tx.travelingSpiritVisitSpirit.createMany({
            data: spirits.map(
              (spirit, index) => ({
                travelingSpiritVisitId:
                  id,

                spiritId:
                  spirit.spiritId,

                displayOrder:
                  spirit.displayOrder ??
                  index + 1,
              })
            ),
          });
        }
      }

      return tx.travelingSpiritVisit.findUnique({
        where: {
          id,
        },

        select:
          TRAVELING_SPIRIT_ADMIN_DETAIL_PROJECTION,
      });
    }
  );
}

export async function softDeleteTravelingSpiritVisit(
  id
) {
  return prisma.travelingSpiritVisit.update({
    where: {
      id,
    },

    data: {
      deletedAt: new Date(),
    },

    select:
      TRAVELING_SPIRIT_ADMIN_DETAIL_PROJECTION,
  });
}

export async function restoreTravelingSpiritVisit(
  id
) {
  return prisma.travelingSpiritVisit.update({
    where: {
      id,
    },

    data: {
      deletedAt: null,
    },

    select:
      TRAVELING_SPIRIT_ADMIN_DETAIL_PROJECTION,
  });
}