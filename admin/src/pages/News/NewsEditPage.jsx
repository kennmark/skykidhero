import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import NewsForm from "../../components/news/newsForm.jsx";

import {
  getNewsById,
  updateNews,
} from "../../services/adminNews.service.js";
import AdminLayout from "../../components/layout/AdminLayout.jsx";

function normalizePayload(values) {
  return {
    title: values.title.trim(),

    summary:
      values.summary?.trim() || undefined,

    body: values.body.trim(),

    image:
      values.image?.trim() || undefined,

    externalUrl:
      values.externalUrl?.trim() || undefined,

    featured: Boolean(values.featured),

    published: Boolean(values.published),
  };
}

export default function NewsEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [loadError, setLoadError] =
    useState("");

  const [submitError, setSubmitError] =
    useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadNews() {
      try {
        setLoading(true);
        setLoadError("");

        const response = await getNewsById(id);
        const news = response.data;

        if (!cancelled) {
          setInitialValues({
            title: news.title ?? "",
            summary: news.summary ?? "",
            body: news.body ?? "",
            image: news.image ?? "",
            externalUrl:
              news.externalUrl ?? "",
            featured:
              Boolean(news.featured),
            published:
              Boolean(news.published),
          });
        }
      } catch (error) {
        if (!cancelled) {
          setLoadError(
            error.response?.data?.message ||
              "Unable to load the news article."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadNews();

    return () => {
      cancelled = true;
    };
  }, [id]);

  async function handleUpdate(values) {
    try {
      setSubmitError("");

      const payload =
        normalizePayload(values);

      await updateNews(id, payload);

      navigate("/news", {
        replace: true,
      });
    } catch (error) {
      setSubmitError(
        error.response?.data?.message ||
          "Unable to update the news article."
      );
    }
  }

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <p className="text-gray-600">
          Loading news article...
        </p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6">
        <p className="text-red-700">
          {loadError}
        </p>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Edit News
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Update the selected news article.
          </p>
        </div>

        <NewsForm
          initialValues={initialValues}
          onSubmit={handleUpdate}
          submitLabel="Update News"
          serverError={submitError}
        />
      </div>
    </AdminLayout>
    
  );
}