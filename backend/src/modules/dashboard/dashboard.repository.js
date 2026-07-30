import prisma from "../../config/prisma.js";

export async function getDashboardAnalyticsRepository({ activityStartDate }) {
  const [
    total,
    published,
    drafts,
    featured,
    deleted,
    recentNews,
    activityNews,
  ] = await prisma.$transaction([
    prisma.news.count({
      where: {
        deletedAt: null,
      },
    }),

    prisma.news.count({
      where: {
        published: true,
        deletedAt: null,
      },
    }),

    prisma.news.count({
      where: {
        published: false,
        deletedAt: null,
      },
    }),

    prisma.news.count({
      where: {
        featured: true,
        deletedAt: null,
      },
    }),

    prisma.news.count({
      where: {
        deletedAt: {
          not: null,
        },
      },
    }),

    prisma.news.findMany({
      where: {
        deletedAt: null,
      },

      orderBy: {
        createdAt: "desc",
      },

      take: 5,

      select: {
        id: true,
        title: true,
        slug: true,
        published: true,
        featured: true,
        publishedAt: true,
        createdAt: true,
        updatedAt: true,
      },
    }),

    prisma.news.findMany({
      where: {
        deletedAt: null,

        OR: [
          {
            createdAt: {
              gte: activityStartDate,
            },
          },
          {
            publishedAt: {
              gte: activityStartDate,
            },
          },
        ],
      },

      select: {
        createdAt: true,
        publishedAt: true,
        published: true,
      },
    }),
  ]);

  return {
    counts: {
      total,
      published,
      drafts,
      featured,
      deleted,
    },

    recentNews,
    activityNews,
  };
}