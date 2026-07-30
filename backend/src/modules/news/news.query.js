export function buildNewsWhere(filters) {
  const where = {
    deletedAt: null,
    published: true,
  };

  if (filters.search) {
    where.OR = [
      {
        title: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
      {
        summary: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
      {
        body: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
    ];
  }

  if (filters.featured !== undefined) {
    where.featured = filters.featured;
  }

  if (filters.published !== undefined) {
    where.published = filters.published;
  }

  return where;
}

export function buildNewsOrderBy(sorting) {
  return {
    [sorting.field]: sorting.direction,
  };
}

export function buildAdminNewsWhere(filters) {
  const where = {}

  if (filters.search) {
    where.OR = [
      {
        title: {
        contains: filters.search,
        mode: "insensitive",
        },
      },
      {
        summary: {
          contains: filters.search,
          mode: "insensitive",
        },
      },
    ]
  }

  if (filters.published !== undefined) {
    where.published = filters.published
  }

  if (filters.deleted === true) {
    where.deletedAt = {
      not: null,
    }
  } else if (filters.deleted === false) {
    where.deletedAt = null
  }

  return where
}