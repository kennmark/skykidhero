import { createPaginationMeta } from "../../shared/pagination/paginatedResponse.js"
import AppError from "../../shared/utils/AppError.js"
import { genereateSlug } from "../../shared/utils/slug.js"
import { 
  createNews, 
  deleteNews, 
  findAllNews, 
  findAnyNewsBySlug,
  findFeaturedNews, 
  findNewsById, 
  findNewsBySlug, 
  publishNews, 
  restoreNews, 
  unpublishNews, 
  updateNews,
} from "./news.repository.js"
import { buildQuery } from './../../shared/query/index.js';
import {
  buildNewsWhere,
  buildNewsOrderBy,
  buildAdminNewsWhere,
} from "./news.query.js";

import {
  NEWS_LIST_PROJECTION,
  NEWS_ADMIN_PROJECTION,
} from "./news.projection.js";

import {
  deleteNewsImageFromCloudinary,
} from "../../services/cloudinary.service.js";

function hasOwn(object, property) {
  return Object.prototype.hasOwnProperty.call(
    object,
    property
  );
}

function normalizeNullableString(
  value
) {
  if (
    value === null ||
    value === undefined
  ) {
    return null;
  }

  if (typeof value !== "string") {
    return value;
  }

  return value.trim() || null;
}

export async function createNewsService(
  data,
  userId
) {
  const title = data.title.trim();

  const slug =
    genereateSlug(title);

  const existing =
    await findAnyNewsBySlug(
      slug,
      {
        id: true,
      }
    );

  if (existing) {
    throw new AppError(
      "A news article with this title already exists.",
      409
    );
  }

  const image =
    normalizeNullableString(
      data.image
    );

  const imagePublicId = image
    ? normalizeNullableString(
        data.imagePublicId
      )
    : null;

  return createNews({
    title,
    slug,

    summary:
      normalizeNullableString(
        data.summary
      ),

    body: data.body.trim(),

    image,
    imagePublicId,

    externalUrl:
      normalizeNullableString(
        data.externalUrl
      ),

    featured:
      data.featured ?? false,

    published:
      data.published ?? false,

    publishedAt:
      data.published
        ? new Date()
        : null,

    authorId: userId,
  });
}

export async function getAllNewsService(
  query
) {
  const queryOptions =
    buildQuery(query);

  const result =
    await findAllNews({
      where: buildNewsWhere(
        queryOptions.filters
      ),

      orderBy: buildNewsOrderBy(
        queryOptions.sorting
      ),

      pagination: queryOptions.pagination,

      select: NEWS_LIST_PROJECTION,
    });

  return {
    items: result.items,

    meta: createPaginationMeta({
      page:
        queryOptions.pagination.page,

      limit:
        queryOptions.pagination.limit,

      total: result.total,
    }),
  };
}

export async function getNewsBySlugService(slug) {
  const news = await findNewsBySlug(slug)

  if (!news) {
    throw new AppError(
      "News article not found.",
      404
    )
  }

  return news
}

export async function updateNewsService(
  id,
  data
) {
  const news =
    await findNewsById(
      id,
      NEWS_ADMIN_PROJECTION
    );

  if (!news) {
    throw new AppError(
      "News article not found.",
      404
    );
  }

  const updateData = {};

  /*
   * Validate the new title and slug
   * before changing anything in Neon.
   */
  if (hasOwn(data, "title")) {
    const title =
      data.title.trim();

    const slug =
      genereateSlug(title);

    const duplicate =
      await findAnyNewsBySlug(
        slug,
        {
          id: true,
        }
      );

    if (
      duplicate &&
      duplicate.id !== news.id
    ) {
      throw new AppError(
        "A news article with this title already exists.",
        409
      );
    }

    updateData.title = title;
    updateData.slug = slug;
  }

  if (hasOwn(data, "summary")) {
    updateData.summary =
      normalizeNullableString(
        data.summary
      );
  }

  if (hasOwn(data, "body")) {
    updateData.body =
      data.body.trim();
  }

  if (
    hasOwn(data, "externalUrl")
  ) {
    updateData.externalUrl =
      normalizeNullableString(
        data.externalUrl
      );
  }

  if (hasOwn(data, "featured")) {
    updateData.featured =
      Boolean(data.featured);
  }

  if (hasOwn(data, "published")) {
    const willBePublished =
      Boolean(data.published);

    updateData.published =
      willBePublished;

    if (
      willBePublished &&
      !news.published
    ) {
      updateData.publishedAt =
        new Date();
    }
  }

  const hasImage =
    hasOwn(data, "image");

  const hasImagePublicId =
    hasOwn(
      data,
      "imagePublicId"
    );

  if (hasImage) {
    const nextImage =
      normalizeNullableString(
        data.image
      );

    updateData.image =
      nextImage;

    /*
     * Removing the image must also
     * remove its Cloudinary public ID.
     */
    if (!nextImage) {
      updateData.imagePublicId =
        null;
    } else if (
      hasImagePublicId
    ) {
      updateData.imagePublicId =
        normalizeNullableString(
          data.imagePublicId
        );
    } else if (
      nextImage !== news.image
    ) {
      /*
       * A different URL without a
       * public ID must not retain the
       * previous image's public ID.
       */
      updateData.imagePublicId =
        null;
    }
  } else if (
    hasImagePublicId
  ) {
    updateData.imagePublicId =
      normalizeNullableString(
        data.imagePublicId
      );
  }

  const nextPublicId =
    hasOwn(
      updateData,
      "imagePublicId"
    )
      ? updateData.imagePublicId
      : news.imagePublicId;

  const oldPublicId =
    news.imagePublicId;

  const shouldDeleteOldImage =
    Boolean(
      oldPublicId &&
      oldPublicId !== nextPublicId
    );

  /*
   * Perform exactly one database update.
   * All validation has already completed.
   */
  const updatedNews =
    await updateNews(
      id,
      updateData
    );

  /*
   * Delete the previous Cloudinary image
   * only after the Neon update succeeds.
   */
  if (shouldDeleteOldImage) {
    try {
      const deletionResult =
        await deleteNewsImageFromCloudinary(
          oldPublicId
        );

      if (
        deletionResult &&
        ![
          "ok",
          "not found",
        ].includes(
          deletionResult.result
        )
      ) {
        console.warn(
          "Unexpected Cloudinary deletion result:",
          deletionResult.result
        );
      }
    } catch (error) {
      /*
       * The News update remains valid
       * even when Cloudinary cleanup
       * temporarily fails.
       */
      console.error(
        `Unable to delete old Cloudinary image ${oldPublicId}:`,
        error.message
      );
    }
  }

  return updatedNews;
}

export async function deleteNewsService(id) {
  const news = await findNewsById(id, NEWS_ADMIN_PROJECTION)

  if(!news) {
    throw new AppError("News article not found.", 404)
  }

  if (news.deletedAt) {
    throw new AppError("News article is already deleted.", 400)
  }

  return await deleteNews(id)
}

export async function restoreNewsService(id) {
  const news = await findNewsById(id, NEWS_ADMIN_PROJECTION);

  if (!news) {
    throw new AppError("News article not found.", 404);
  }

  if (!news.deletedAt) {
    throw new AppError("News article is not deleted.", 400);
  }

  return restoreNews(id);
}

export async function getFeaturedNewsService() {
  return await findFeaturedNews()
}

export async function publishNewsService(id) {
  const news = await findNewsById(id, NEWS_ADMIN_PROJECTION);

  if (!news) {
    throw new AppError("News article not found.", 404);
  }

  if (news.deletedAt) {
    throw new AppError("Cannot publish a deleted news article.", 400);
  }

  if (news.published) {
    throw new AppError("News article is already published.", 400);
  }

  return publishNews(id);
}

export async function unpublishNewsService(id) {
  const news = await findNewsById(id, NEWS_ADMIN_PROJECTION);

  if (!news) {
    throw new AppError("News article not found.", 404);
  }

  if (news.deletedAt) {
    throw new AppError("Cannot unpublish a deleted news article.", 400);
  }

  if (!news.published) {
    throw new AppError("News article is already unpublished.", 400);
  }

  return unpublishNews(id);
}

export async function getAdminNewsService(query) {
  const queryOptions = buildQuery(query);

  const result = await findAllNews({
    where: buildAdminNewsWhere(queryOptions.filters),

    orderBy: buildNewsOrderBy(
      queryOptions.sorting
    ),

    pagination: queryOptions.pagination,

    select: NEWS_ADMIN_PROJECTION,
  });

  return {
    items: result.items,

    meta: createPaginationMeta({
      page: queryOptions.pagination.page,
      limit: queryOptions.pagination.limit,
      total: result.total,
    }),
  };
}

export async function getNewsByIdService(id) {
  const news = await findNewsById(
    id,
    NEWS_ADMIN_PROJECTION
  );

  if (!news) {
    throw new AppError(
      "News article not found.",
      404
    );
  }

  return news;
}