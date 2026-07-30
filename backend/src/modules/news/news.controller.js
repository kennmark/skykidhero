import { 
  createNewsService, 
  deleteNewsService, 
  getAdminNewsService, 
  getAllNewsService, 
  getFeaturedNewsService, 
  getNewsBySlugService, 
  publishNewsService, 
  restoreNewsService, 
  unpublishNewsService, 
  updateNewsService,
  getNewsByIdService 
} from "./news.service.js";
import { success } from './../../shared/utils/response.js';

export async function createNewsController(
  req,
  res,
  next
) {
  try {
    const news = await createNewsService(
      req.validated,
      req.user.id
    )

    return success(
      res,
      news,
      "News created successfully.",
      201
    )
  } catch(err) {
    next(err)
  }
}

export async function getAllNewsController(
  req,
  res,
  next,
) {
  try {
    const result = await getAllNewsService(req.query)
    return success(
      res,
      result.items,
      "News retrieved successfully.",
      200,
      result.meta
    )
  } catch (err) {
    next(err)
  }
}

export async function getNewsBySlugController(
  req,
  res,
  next,
) {
  try {
    const news = await getNewsBySlugService(
      req.params.slug
    )

    return success(
      res,
      news,
      "News retrieved successfully."
    )
  } catch(err) {
    next(err)
  }
}

export async function updateNewsController(req, res, next) {
  try {
    const news = await updateNewsService(Number(req.params.id), req.validated)

    return success(res, news, "News updated successfully.")
  } catch (err) {
    next(err)
  }
}

export async function deleteNewsController(req, res, next) {
  try {
    await deleteNewsService(Number(req.params.id))

    return success(res, null, "News deleted successfully.")
  } catch (err) {
    next(err)
  }
}

export async function restoreNewsController(req, res, next) {
  try {
    const news = await restoreNewsService(Number(req.params.id));

    return success(
      res,
      news,
      "News restored successfully."
    );
  } catch (error) {
    next(error);
  }
}

export async function getFeaturedNewsController(req, res, next) {
  try {
    const news = await getFeaturedNewsService()

    return success(res, news, "Featured news retrieved successfully.")
  } catch (err) {
    next(err)
  }
}

export async function publishNewsController(req, res, next) {
  try {
    const news = await publishNewsService(Number(req.params.id));

    return success(
      res,
      news,
      "News published successfully."
    );
  } catch (err) {
    next(err);
  }
}

export async function unpublishNewsController(req, res, next) {
  try {
    const news = await unpublishNewsService(Number(req.params.id));

    return success(
      res,
      news,
      "News unpublished successfully."
    );
  } catch (err) {
    next(err);
  }
}

export async function getAdminNewsController(req, res, next) {
  try {
    const result = await getAdminNewsService(req.query)

    return success(
      res, result.items, "Admin news retrieve successfully.", 200, result.meta
    )
  } catch (err) {
    next(err)
  }
}

export async function getNewsByIdController(
  req,
  res,
  next
) {
  try {
    const news = await getNewsByIdService(
      Number(req.params.id)
    );

    return success(
      res,
      news,
      "News retrieved successfully."
    );
  } catch (error) {
    next(error);
  }
}