import prisma from "../../config/prisma.js";

import {
  SEASON_LIST_PROJECTION,
  SEASON_DETAIL_PROJECTION,
  SEASON_ADMIN_LIST_PROJECTION,
  SEASON_ADMIN_DETAIL_PROJECTION,
} from "./season.projection.js";

export async function findPublishedSeasons() {
  return prisma.season.findMany({
    where: {
      published: true,
      deletedAt: null,
    },
    select: SEASON_LIST_PROJECTION,
    orderBy: {
      number: "desc",
    },
  });
}

export async function findPublishedSeasonBySlug(slug) {
  return prisma.season.findFirst({
    where: {
      slug,
      published: true,
      deletedAt: null,
    },
    select: SEASON_DETAIL_PROJECTION,
  });
}

export async function findPublishedSeasonByNumber(number) {
  return prisma.season.findFirst({
    where: {
      number,
      published: true,
      deletedAt: null,
    },
    select: SEASON_DETAIL_PROJECTION,
  });
}

export async function findSeasonById(id) {
  return prisma.season.findFirst({
    where: {
      id,
      deletedAt: null,
    },
    select: SEASON_ADMIN_DETAIL_PROJECTION,
  });
}

export async function findSeasonByCode(code) {
  return prisma.season.findFirst({
    where: {
      code,
      deletedAt: null,
    },
    select: SEASON_ADMIN_DETAIL_PROJECTION,
  });
}

export async function findSeasonBySlug(slug) {
  return prisma.season.findFirst({
    where: {
      slug,
      deletedAt: null,
    },
    select: SEASON_ADMIN_DETAIL_PROJECTION,
  });
}

export async function findSeasonByNumber(number) {
  return prisma.season.findFirst({
    where: {
      number,
      deletedAt: null,
    },
    select: SEASON_ADMIN_DETAIL_PROJECTION,
  });
}

export async function findAdminSeasons() {
  return prisma.season.findMany({
    where: {
      deletedAt: null,
    },
    select: SEASON_ADMIN_LIST_PROJECTION,
    orderBy: {
      number: "desc",
    },
  });
}

export async function createSeason(data) {
  return prisma.season.create({
    data,
    select: SEASON_ADMIN_DETAIL_PROJECTION,
  });
}

export async function updateSeason(id, data) {
  return prisma.season.update({
    where: {
      id,
    },
    data,
    select: SEASON_ADMIN_DETAIL_PROJECTION,
  });
}