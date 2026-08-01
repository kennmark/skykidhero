import { createPaginationMeta } from "../../shared/pagination/paginatedResponse.js"
import AppError from "../../shared/utils/AppError.js"
import { genereateSlug } from "../../shared/utils/slug.js"
import { createNews, deleteNews, findAllNews, findFeaturedNews, findNewsById, findNewsBySlug, publishNews, restoreNews, unpublishNews, updateNews } from "./news.repository.js"
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

export async function createNewsService(data, userId) {
  const slug = genereateSlug(data.title)

  const existing = await findNewsBySlug(slug)

  if(existing) {
    throw new AppError(
      "A news article with this title already exists.",
      409
    )
  }

  return await createNews({
    title: data.title.trim(),
    slug,
    summary: data.summary,
    body: data.body,
    image: data.image,
    imagePublicId: data.imagePublicId || null,
    externalUrl: data.externalUrl,
    featured: data.featured ?? false,
    published: data.published ?? false,
    publishedAt: data.published
      ? new Date()
      : null,
      authorId: userId,
  })
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

  const news = await findNewsById(
    id,
    NEWS_ADMIN_PROJECTION
  )

  if (!news) {
    throw new AppError(
      "News article not found.",
      404
    );
  }

  const updateData = {
    ...data,
  };

   const hasImage =
    Object.prototype.hasOwnProperty.call(
      data,
      "image"
    );

  const hasImagePublicId =
    Object.prototype.hasOwnProperty.call(
      data,
      "imagePublicId"
    );

  /*
   * Convert empty image values into null
   * so Prisma clears the database columns.
   */
  if (hasImage) {
    updateData.image =
      typeof data.image === "string"
        ? data.image.trim() || null
        : data.image ?? null;
  }

  if (hasImagePublicId) {
    updateData.imagePublicId =
      typeof data.imagePublicId ===
      "string"
        ? data.imagePublicId.trim() ||
          null
        : data.imagePublicId ?? null;
  }

  /*
   * If the image URL was explicitly
   * removed, clear its public ID too.
   */
  if (
    hasImage &&
    updateData.image === null &&
    !hasImagePublicId
  ) {
    updateData.imagePublicId = null;
  }

  const nextPublicId =
    Object.prototype.hasOwnProperty.call(
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
   * Update Neon first. Only delete the
   * old Cloudinary image after the
   * database update succeeds.
   */
  const updatedNews =
    await updateNews(
      id,
      updateData
    );

  if (shouldDeleteOldImage) {
    try {
      const deletionResult =
        await deleteNewsImageFromCloudinary(
          oldPublicId
        );

      if (
        deletionResult &&
        !["ok", "not found"].includes(
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
       * Do not fail the News update,
       * because Neon was already updated.
       */
      console.error(
        `Unable to delete old Cloudinary image ${oldPublicId}:`,
        error.message
      );
    }
  }

  if (
    data.title &&
    data.title !== news.title
  ) {
    const slug = genereateSlug(
      data.title
    );

    const duplicate =
      await findNewsBySlug(slug);

    if (
      duplicate &&
      duplicate.id !== news.id
    ) {
      throw new AppError(
        "A news article with this title already exists.",
        409
      );
    }

    updateData.slug = slug;
  }

  if (
    data.published &&
    !news.published
  ) {
    updateData.publishedAt =
      new Date();
  }

  if (
    data.title &&
    data.title !== news.title
  ) {

    const slug = genereateSlug(data.title);

    const duplicate =
      await findNewsBySlug(slug);

    if (
      duplicate &&
      duplicate.id !== news.id
    ) {
      throw new AppError(
        "A news article with this title already exists.",
        409
      );
    }

    updateData.slug = slug;
  }

  if (
    data.published &&
    !news.published
  ) {
    updateData.publishedAt =
      new Date();
  }

  return await updateNews(
    id,
    updateData
  );
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