export const SEASON_LIST_PROJECTION = {
  id: true,
  number: true,
  year: true,
  code: true,
  name: true,
  slug: true,

  intro: true,
  description: true,

  startDate: true,
  endDate: true,

  iconImage: true,
  iconImageAlt: true,

  image: true,
  imageAlt: true,

  published: true,
};

export const SEASON_DETAIL_PROJECTION = {
  ...SEASON_LIST_PROJECTION,

  spirits: {
    where: {
      type: "SEASONAL",
      deletedAt: null,
    },
    select: {
      id: true,
      code: true,
      name: true,
      type: true,
      mapId: true,
      seasonId: true,
      category: true,
      reliveType: true,
      difficultyLevel: true,
      difficultyTypes: true,
      iconImage: true,
      detailImage: true,
      guideVideoUrl: true,
      directions: true,
      displayOrder: true,
      published: true,
    },
    orderBy: {
      displayOrder: "asc",
    },
  },
};

export const SEASON_ADMIN_LIST_PROJECTION = {
  ...SEASON_LIST_PROJECTION,

  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};

export const SEASON_ADMIN_DETAIL_PROJECTION = {
  ...SEASON_DETAIL_PROJECTION,

  iconImagePublicId: true,
  imagePublicId: true,

  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};