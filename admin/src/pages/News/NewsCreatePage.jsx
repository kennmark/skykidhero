import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NewsForm from "../../components/news/NewsForm.jsx";
import { createNews } from "../../services/adminNews.service";
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

export default function NewsCreatePage() {
  const navigate = useNavigate();

  const [submitError, setSubmitError] =
    useState("");

  async function handleCreate(values) {
    try {
      setSubmitError("");

      const payload =
        normalizePayload(values);

      await createNews(payload);

      navigate("/news", {
        replace: true,
      });
    } catch (error) {
      setSubmitError(
        error.response?.data?.message ||
          "Unable to create the news article."
      );
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Create News
          </h1>

          <p className="mt-1 text-sm text-gray-600">
            Create a new news article.
          </p>
        </div>

        <NewsForm
          onSubmit={handleCreate}
          submitLabel="Create News"
          serverError={submitError}
        />
      </div>
    </AdminLayout>
    
  );
}