import {
  useEffect,
  useState,
} from "react";

import {
  ArrowPathIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  NewspaperIcon,
  PencilSquareIcon,
  StarIcon,
  TrashIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

import {
  Link,
} from "react-router-dom";

import {
  getDashboardAnalytics,
} from "../../services/dashboard.service.js";
import AdminLayout from "../../components/layout/AdminLayout.jsx";

function formatDate(value) {
  if (!value) {
    return "Not available";
  }

  return new Intl.DateTimeFormat(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }
  ).format(new Date(value));
}

function StatCard({
  title,
  value,
  description,
  icon: Icon,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </p>

          <p className="mt-2 text-xs text-gray-500">
            {description}
          </p>
        </div>

        <div className="rounded-lg bg-gray-100 p-3">
          <Icon className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </div>
  );
}

function MonthlyActivityChart({
  activity,
}) {
  const maximumValue = Math.max(
    1,
    ...activity.flatMap(
      (month) => [
        month.created,
        month.published,
      ]
    )
  );

  function getWidth(value) {
    if (value === 0) {
      return "0%";
    }

    const percentage =
      (value / maximumValue) * 100;

    return `${Math.max(
      percentage,
      5
    )}%`;
  }
return (
    <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-gray-100 p-2">
            <ChartBarIcon className="h-5 w-5 text-gray-700" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              News Activity
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Articles created and published during the last six months.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6 flex flex-wrap gap-5 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-blue-600" />

            <span className="text-gray-600">
              Created
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-green-600" />

            <span className="text-gray-600">
              Published
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {activity.map((month) => (
            <div
              key={month.key}
              className="grid gap-3 sm:grid-cols-[100px_1fr]"
            >
              <div className="text-sm font-medium text-gray-600">
                {month.label}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-6 flex-1 overflow-hidden rounded-md bg-gray-100">
                    <div
                      className="flex h-full items-center justify-end rounded-md bg-blue-600 px-2 text-xs font-medium text-white transition-all"
                      style={{
                        width: getWidth(
                          month.created
                        ),
                      }}
                    >
                      {month.created > 0
                        ? month.created
                        : ""}
                    </div>
                  </div>

                  <span className="w-8 text-right text-sm text-gray-600">
                    {month.created}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-6 flex-1 overflow-hidden rounded-md bg-gray-100">
                    <div
                      className="flex h-full items-center justify-end rounded-md bg-green-600 px-2 text-xs font-medium text-white transition-all"
                      style={{
                        width: getWidth(
                          month.published
                        ),
                      }}
                    >
                      {month.published > 0
                        ? month.published
                        : ""}
                    </div>
                  </div>

                  <span className="w-8 text-right text-sm text-gray-600">
                    {month.published}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DashboardPage() {
  const [
    analytics,
    setAnalytics,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  async function loadDashboard() {
    try {
      setLoading(true);
      setError("");

      const response =
        await getDashboardAnalytics();

      setAnalytics(response.data);
    } catch (requestError) {
      setError(
        requestError.response?.data?.message ||
          "Unable to load dashboard analytics."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-center gap-3 text-gray-600">
          <ArrowPathIcon className="h-5 w-5 animate-spin" />

          <span>
            Loading dashboard...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <p className="font-medium text-red-700">
          {error}
        </p>

        <button
          type="button"
          onClick={loadDashboard}
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          <ArrowPathIcon className="h-5 w-5" />

          Try Again
        </button>
      </div>
    );
  }

  const counts =
    analytics?.counts ?? {
      total: 0,
      published: 0,
      drafts: 0,
      featured: 0,
      deleted: 0,
      publicationRate: 0,
    };

  const recentNews =
    analytics?.recentNews ?? [];

  const monthlyActivity =
    analytics?.monthlyActivity ?? [];
  
  const statCards = [
    {
      title: "Total News",
      value: counts.total,
      description:
        "Active news articles",
      icon: NewspaperIcon,
    },
    {
      title: "Published",
      value: counts.published,
      description:
        "Visible on the public website",
      icon: CheckCircleIcon,
    },
    {
      title: "Drafts",
      value: counts.drafts,
      description:
        "Unpublished articles",
      icon: PencilSquareIcon,
    },
    {
      title: "Featured",
      value: counts.featured,
      description:
        "Featured news articles",
      icon: StarIcon,
    },
    {
      title: "Deleted",
      value: counts.deleted,
      description:
        "Soft-deleted articles",
      icon: TrashIcon,
    },
    {
      title: "Publication Rate",
      value: `${counts.publicationRate}%`,
      description:
        "Published active articles",
      icon: DocumentTextIcon,
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-600">
              Overview of your SkyKidHero content.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={loadDashboard}
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <ArrowPathIcon className="h-5 w-5" />

              Refresh
            </button>

            <Link
              to="/news/create"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Create News
            </Link>
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {statCards.map((card) => (
            <StatCard
              key={card.title}
              {...card}
            />
          ))}
        </section>

        <MonthlyActivityChart
          activity={monthlyActivity}
        />

        <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Recent News
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                The five most recently created articles.
              </p>
            </div>

            <Link
              to="/news"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all
            </Link>
          </div>

          {recentNews.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <NewspaperIcon className="mx-auto h-10 w-10 text-gray-400" />

              <p className="mt-3 text-sm text-gray-500">
                No news articles have been created yet.
              </p>

              <Link
                to="/news/create"
                className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Create the first article
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Article
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Status
                    </th>

                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Created
                    </th>

                    <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {recentNews.map((news) => (
                    <tr
                      key={news.id}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <p className="font-medium text-gray-900">
                          {news.title}
                        </p>

                        {news.featured && (
                          <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-amber-600">
                            <StarIcon className="h-4 w-4" />

                            Featured
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={
                            news.published
                              ? "inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700"
                              : "inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                          }
                        >
                          {news.published
                            ? "Published"
                            : "Draft"}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                        {formatDate(
                          news.createdAt
                        )}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4 text-right">
                        <Link
                          to={`/news/${news.id}/edit`}
                          className="text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </AdminLayout>
    
  )
}