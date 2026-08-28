export const WINGED_LIGHT_LIST_PROJECTION = {
  id: true,
  mapId: true,

  code: true,
  label: true,

  groupKey: true,
  seasonGroupKey: true,

  image: true,

  directions: true,

  displayOrder: true,
  published: true,
};

export const WINGED_LIGHT_DETAIL_PROJECTION = {
  ...WINGED_LIGHT_LIST_PROJECTION,

  map: {
    select: {
      id: true,
      name: true,
      slug: true,
    },
  },
};

export const WINGED_LIGHT_ADMIN_LIST_PROJECTION = {
  ...WINGED_LIGHT_LIST_PROJECTION,

  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};

export const WINGED_LIGHT_ADMIN_DETAIL_PROJECTION = {
  ...WINGED_LIGHT_DETAIL_PROJECTION,

  imagePublicId: true,

  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};