export const SPIRIT_COLLECTIBLE_PUBLIC_PROJECTION = {
  id: true,
  label: true,
  image: true,
  currency: true,
  price: true,
  displayOrder: true,
};

export const SPIRIT_TREE_COST_PUBLIC_PROJECTION = {
  id: true,
  candles: true,
  hearts: true,
  ascendedCandles: true,
  displayOrder: true,
};

export const SPIRIT_LIST_PROJECTION = {
  id: true,
  code: true,
  mapId: true,

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

export const SPIRIT_DETAIL_PROJECTION = {
  ...SPIRIT_LIST_PROJECTION,

  map: {
    select: {
      id: true,
      name: true,
      slug: true,
      mapConstellationIcon: true,
    },
  },

  collectibles: {
    orderBy: {
      displayOrder: "asc",
    },

    select:
      SPIRIT_COLLECTIBLE_PUBLIC_PROJECTION,
  },

  treeCosts: {
    orderBy: {
      displayOrder: "asc",
    },

    select:
      SPIRIT_TREE_COST_PUBLIC_PROJECTION,
  },
};

export const SPIRIT_ADMIN_LIST_PROJECTION = {
  ...SPIRIT_LIST_PROJECTION,

  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};

export const SPIRIT_ADMIN_DETAIL_PROJECTION = {
  ...SPIRIT_DETAIL_PROJECTION,

  iconImagePublicId: true,
  detailImagePublicId: true,

  createdAt: true,
  updatedAt: true,
  deletedAt: true,

  collectibles: {
    orderBy: {
      displayOrder: "asc",
    },

    select: {
      ...SPIRIT_COLLECTIBLE_PUBLIC_PROJECTION,

      imagePublicId: true,

      createdAt: true,
      updatedAt: true,
    },
  },

  treeCosts: {
    orderBy: {
      displayOrder: "asc",
    },

    select: {
      ...SPIRIT_TREE_COST_PUBLIC_PROJECTION,

      createdAt: true,
      updatedAt: true,
    },
  },
};