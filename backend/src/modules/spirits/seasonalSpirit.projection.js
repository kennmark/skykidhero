export const SEASONAL_SPIRIT_LIST_PROJECTION = {
  id: true,
  code: true,

  mapId: true,
  seasonId: true,

  type: true,
  name: true,

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
};

export const SEASONAL_SPIRIT_DETAIL_PROJECTION = {
  ...SEASONAL_SPIRIT_LIST_PROJECTION,

  map: {
    select: {
      id: true,
      name: true,
      slug: true,
      published: true,
      deletedAt: true,
    },
  },

  season: {
    select: {
      id: true,
      number: true,
      year: true,
      code: true,
      name: true,
      slug: true,
      iconImage: true,
      image: true,
    },
  },

  collectibles: {
    orderBy: {
      displayOrder: "asc",
    },

    select: {
      id: true,
      spiritId: true,
      label: true,
      image: true,
      currency: true,
      price: true,
      displayOrder: true,
    },
  },

  treeCosts: {
    orderBy: {
      displayOrder: "asc",
    },

    select: {
      id: true,
      spiritId: true,
      candles: true,
      hearts: true,
      ascendedCandles: true,
      displayOrder: true,
    },
  },
};

export const SEASONAL_SPIRIT_ADMIN_LIST_PROJECTION = {
  ...SEASONAL_SPIRIT_LIST_PROJECTION,

  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};

export const SEASONAL_SPIRIT_ADMIN_DETAIL_PROJECTION = {
  ...SEASONAL_SPIRIT_DETAIL_PROJECTION,

  // Cloudinary identifiers are admin-only. Public detail responses
  // expose the image URL but never the provider's internal public ID.
  collectibles: {
    ...SEASONAL_SPIRIT_DETAIL_PROJECTION.collectibles,
    select: {
      ...SEASONAL_SPIRIT_DETAIL_PROJECTION.collectibles.select,
      imagePublicId: true,
    },
  },

  iconImagePublicId: true,
  detailImagePublicId: true,

  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};