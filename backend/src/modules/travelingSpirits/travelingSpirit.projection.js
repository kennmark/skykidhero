export const TRAVELING_SPIRIT_SPIRIT_PROJECTION = {
  id: true,
  code: true,
  name: true,
  type: true,
  category: true,

  iconImage: true,
  detailImage: true,

  displayOrder: true,
};

export const TRAVELING_SPIRIT_VISIT_SPIRIT_PROJECTION = {
  id: true,
  spiritId: true,
  displayOrder: true,

  spirit: {
    select:
      TRAVELING_SPIRIT_SPIRIT_PROJECTION,
  },
};

export const TRAVELING_SPIRIT_PUBLIC_LIST_PROJECTION = {
  id: true,

  type: true,

  startDate: true,
  endDate: true,

  hintEnabled: true,
  hintImage: true,
  hintUrl: true,

  wingBuffCount: true,

  spirits: {
    orderBy: {
      displayOrder: "asc",
    },

    select:
      TRAVELING_SPIRIT_VISIT_SPIRIT_PROJECTION,
  },
};

export const TRAVELING_SPIRIT_PUBLIC_DETAIL_PROJECTION = {
  ...TRAVELING_SPIRIT_PUBLIC_LIST_PROJECTION,

  published: true,
};

export const TRAVELING_SPIRIT_ADMIN_LIST_PROJECTION = {
  id: true,

  type: true,

  startDate: true,
  endDate: true,

  hintEnabled: true,
  hintImage: true,
  hintUrl: true,

  wingBuffCount: true,

  published: true,

  createdAt: true,
  updatedAt: true,
  deletedAt: true,

  spirits: {
    orderBy: {
      displayOrder: "asc",
    },

    select:
      TRAVELING_SPIRIT_VISIT_SPIRIT_PROJECTION,
  },
};

export const TRAVELING_SPIRIT_ADMIN_DETAIL_PROJECTION = {
  ...TRAVELING_SPIRIT_ADMIN_LIST_PROJECTION,
};