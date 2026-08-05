import prisma from "../../config/prisma.js";
import { NEWS_ADMIN_PROJECTION, NEWS_DETAIL_PROJECTION, NEWS_LIST_PROJECTION } from './news.projection.js';


export async function createNews(data) {
  return prisma.news.create({
    data,
    select: NEWS_ADMIN_PROJECTION,
  })
}

export async function findNewsById(id, select = NEWS_DETAIL_PROJECTION) {
  return prisma.news.findUnique({
    where: {id},
    select,
  })
}

export async function findNewsBySlug(slug, select = NEWS_DETAIL_PROJECTION) {
  return prisma.news.findFirst({
    where: { 
      slug,
      published: true,
      deletedAt: null, 
    },
    select,
  })
}

export async function findAnyNewsBySlug(slug, 
  select = {
    id: true,
    title: true,
    slug: true,
  }) {
  return prisma.news.findUnique({
    where: { slug },
    select,
  })
}

export async function findAllNews({
  where,
  orderBy,
  pagination,
  select,
}) {
  const [items, total] =
    await prisma.$transaction([
      prisma.news.findMany({
        where,
        orderBy,
        skip: pagination.skip,
        take: pagination.limit,
        select,
      }),

      prisma.news.count({
        where,
      }),
    ]);

  return {
    items,
    total,
  };
}

export async function updateNews(id, data) {
  return prisma.news.update({
    where: {
      id,
    },
    data,
    select: NEWS_ADMIN_PROJECTION,
  });
}

export async function deleteNews(id) {
  return prisma.news.update({
    where: { id },
    data: { deletedAt: new Date(),},
    select: NEWS_ADMIN_PROJECTION
  })
}

export async function restoreNews(id) {
  return prisma.news.update({
    where: { id },
    data: {
      deletedAt: null,
    },
    select: NEWS_ADMIN_PROJECTION,
  });
}

export async function findFeaturedNews(select = NEWS_LIST_PROJECTION) {
  return prisma.news.findMany({
    where: {
      featured: true,
      published: true,
      deletedAt: null,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 5,
    select,
  })
}

export async function publishNews(id) {
  return prisma.news.update({
    where: { id },
    data: {
      published: true,
      publishedAt: new Date(),
    },
    select: NEWS_ADMIN_PROJECTION,
  });
}

export async function unpublishNews(id) {
  return prisma.news.update({
    where: { id },
    data: {
      published: false,
    },
    select: NEWS_ADMIN_PROJECTION,
  });
}