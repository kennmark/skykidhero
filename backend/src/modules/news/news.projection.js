export const NEWS_LIST_PROJECTION = {
  id: true,
  title: true,
  slug: true,
  summary: true,
  image: true,
  imagePublicId: true,
  externalUrl: true,
  featured: true,
  publishedAt: true,

  author: {
    select: {
      id: true,
      username: true,
    },
  },
};

export const NEWS_DETAIL_PROJECTION = {
  id: true,
  title: true,
  slug: true,
  summary: true,
  body: true,
  image: true,
  imagePublicId: true,
  externalUrl: true,
  featured: true,
  published: true,
  publishedAt: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,

  author: {
    select: {
      id: true,
      username: true,
    },
  },
};

export const NEWS_ADMIN_PROJECTION = {
  id: true,
  title: true,
  slug: true,
  summary: true,
  body: true,
  image: true,
  imagePublicId: true,
  externalUrl: true,
  featured: true,
  published: true,
  publishedAt: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,

  author: {
    select: {
      id: true,
      username: true,
      email: true,
    },
  },
}