export const MAP_SECTION_PUBLIC_PROJECTION = {
  id: true,
  type: true,
  heading: true,
  description: true,
  displayOrder: true,
};

export const MAP_LIST_PROJECTION = {
  id: true,
  name: true,
  slug: true,
  displayOrder: true,

  subtitle: true,
  introduction: true,
  caption: true,

  image: true,
  imageAlt: true,

  /*
   * Useful for compact Map cards and
   * constellation navigation.
   */
  mapConstellationIcon: true,
};

export const MAP_DETAIL_PROJECTION = {
  ...MAP_LIST_PROJECTION,

  mapGif: true,
  mapConstellationImage: true,

  sections: {
    where: {
      published: true,
    },

    orderBy: {
      displayOrder: "asc",
    },

    select:
      MAP_SECTION_PUBLIC_PROJECTION,
  },
};

export const MAP_ADMIN_LIST_PROJECTION = {
  ...MAP_LIST_PROJECTION,

  mapGif: true,
  mapConstellationImage: true,

  published: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
};

export const MAP_ADMIN_DETAIL_PROJECTION = {
  ...MAP_ADMIN_LIST_PROJECTION,

  imagePublicId: true,

  mapGifPublicId: true,

  mapConstellationIconPublicId:
    true,

  mapConstellationImagePublicId:
    true,

  sections: {
    orderBy: {
      displayOrder: "asc",
    },

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
  },
};