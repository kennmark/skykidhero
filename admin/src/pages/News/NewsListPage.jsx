import { useEffect, useState } from "react";

import AdminLayout
  from "../../components/layout/AdminLayout";
import { Link, useNavigate } from "react-router-dom";
import NewsTable
  from "../../components/news/NewsTable";
import NewsToolbar from "../../components/news/newsToolbar";
import NewsPagination from "../../components/news/newsPagination";
import {
  deleteNews,
  restoreNews,
  getAdminNews
} from "../../services/adminNews.service";

export default function NewsListPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function loadNews() {
    try {
      const response = await getAdminNews({
        search,
        page,
        limit: 10,
      });
      setNews(response.data);
      setMeta(response.meta);

    } finally {

      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      setError("");

      await deleteNews(id);
      await loadNews();
    } catch (error) {
      setError(
        requestError.response?.data?.message ||
          "Unable to delete the news article."
      );

      throw error;
    }
  }

  async function handleRestore(id) {
    try {
      await restoreNews(id);
      await loadNews();
    } catch (error) {
      alert(error.response?.data?.message || "Unable to restore news.");
    }
  }

  function handleEdit(id) {
    navigate(`/news/${id}/edit`);
  }

  useEffect(() => {
    loadNews();
  }, [search, page]);

  return (
    <AdminLayout>
      <div className="mb-6 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            News
          </h1>
          <p className="mt-1 text-sm text-gray-600">
              Lists of SkykidHero News.
            </p>
        </div>
        <div>
          <Link
          to="/news/create"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Create News
        </Link>
        </div>
        
      </div>
      
      {loading
      ? (
        <p>Loading...</p>
      )
      : (
        <>
          <NewsToolbar search={search} onSearch={setSearch} />
          <NewsTable
            news={news}
            onDelete={handleDelete}
            onRestore={handleRestore}
            onEdit={handleEdit}
          />
          <NewsPagination meta={meta} onPageChange={setPage} />
        </>
      )}

    </AdminLayout>
  );
}