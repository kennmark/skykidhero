import {
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import AdminLayout
  from "../../components/layout/AdminLayout";
import NewsTable
  from "../../components/news/NewsTable";
import NewsToolbar
  from "../../components/news/newsToolbar";
import NewsPagination
  from "../../components/news/newsPagination";

import {
  deleteNews,
  getAdminNews,
  restoreNews,
} from "../../services/adminNews.service";

function getErrorMessage(
  error,
  fallbackMessage
) {
  return (
    error.response?.data?.message ||
    error.message ||
    fallbackMessage
  );
}

export default function NewsListPage() {
  const [news, setNews] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [meta, setMeta] =
    useState(null);

  const [error, setError] =
    useState("");

  const navigate = useNavigate();

  const loadNews = useCallback(
    async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await getAdminNews({
            search,
            page,
            limit: 10,
          });

        setNews(
          Array.isArray(response?.data)
            ? response.data
            : []
        );

        setMeta(
          response?.meta ?? null
        );
      } catch (requestError) {
        setNews([]);
        setMeta(null);

        setError(
          getErrorMessage(
            requestError,
            "Unable to load news articles."
          )
        );
      } finally {
        setLoading(false);
      }
    },
    [page, search]
  );

  async function handleDelete(id) {
    try {
      setError("");

      await deleteNews(id);

      /*
       * Return to the previous page when
       * the deleted article was the final
       * item on the current page.
       */
      if (
        news.length === 1 &&
        page > 1
      ) {
        setPage(
          (currentPage) =>
            currentPage - 1
        );

        return;
      }

      await loadNews();
    } catch (requestError) {
      setError(
        getErrorMessage(
          requestError,
          "Unable to delete the news article."
        )
      );

      /*
       * NewsTable catches this rejection
       * and keeps the confirmation modal
       * open.
       */
      throw requestError;
    }
  }

  async function handleRestore(id) {
    try {
      setError("");

      await restoreNews(id);

      await loadNews();
    } catch (requestError) {
      setError(
        getErrorMessage(
          requestError,
          "Unable to restore the news article."
        )
      );
    }
  }

  function handleEdit(id) {
    navigate(`/news/${id}/edit`);
  }

  function handleSearch(value) {
    setSearch(value);
    setPage(1);
  }

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  return (
    <AdminLayout>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            News
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Manage SkyKidHero news articles.
          </p>
        </div>

        <Link
          to="/news/create"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Create News
        </Link>
      </div>

      {error && (
        <div
          role="alert"
          className="mb-6 flex flex-col gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>{error}</span>

          <button
            type="button"
            onClick={loadNews}
            className="cursor-pointer rounded-md border border-red-300 px-3 py-1.5 font-medium hover:bg-red-100"
          >
            Try again
          </button>
        </div>
      )}

      <NewsToolbar
        search={search}
        onSearch={handleSearch}
      />

      {loading ? (
        <div className="rounded-lg border bg-white p-8 text-center text-sm text-gray-500">
          Loading news articles...
        </div>
      ) : (
        <>
          <NewsTable
            news={news}
            onDelete={handleDelete}
            onRestore={handleRestore}
            onEdit={handleEdit}
          />

          <NewsPagination
            meta={meta}
            onPageChange={setPage}
          />
        </>
      )}
    </AdminLayout>
  );
}