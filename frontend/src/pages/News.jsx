import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Typography,
} from "@material-tailwind/react";

import FaQ from "./FaQ";

import FeaturedNewsSlider from "../components/news/FeaturedNewsSlider.jsx";
import NewsCard from "../components/news/NewsCard.jsx";

import {
  getPublishedNews,
} from "../services/news.service.js";

const RECORDS_PER_PAGE = 6;

function createVisiblePages(
  currentPage,
  totalPages
) {
  if (totalPages <= 5) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );
  }

  const firstPage = Math.max(
    1,
    Math.min(
      currentPage - 2,
      totalPages - 4
    )
  );

  return Array.from(
    { length: 5 },
    (_, index) =>
      firstPage + index
  );
}

const News = () => {
  const [currentPage, setCurrentPage] =
    useState(1);

  const [newsItems, setNewsItems] =
    useState([]);

  const [
    featuredNews,
    setFeaturedNews,
  ] = useState([]);

  const [meta, setMeta] = useState({
    page: 1,
    limit: RECORDS_PER_PAGE,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const [loading, setLoading] =
    useState(true);

  const [
    featuredLoading,
    setFeaturedLoading,
  ] = useState(true);

  const [error, setError] =
    useState("");

  const newsListRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    async function loadFeaturedNews() {
      try {
        setFeaturedLoading(true);

        const result =
          await getPublishedNews({
            page: 1,
            limit: 10,
            featured: true,
          });

        if (!isMounted) {
          return;
        }

        const featured =
          result.items
            .filter(
              (news) =>
                news.featured
            )
            .slice(0, 5);

        setFeaturedNews(featured);
      } catch (requestError) {
        console.error(
          "Unable to load featured news:",
          requestError
        );

        if (isMounted) {
          setFeaturedNews([]);
        }
      } finally {
        if (isMounted) {
          setFeaturedLoading(false);
        }
      }
    }

    loadFeaturedNews();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadNews() {
      try {
        setLoading(true);
        setError("");

        const result =
          await getPublishedNews({
            page: currentPage,
            limit: RECORDS_PER_PAGE,
          });

        if (!isMounted) {
          return;
        }

        setNewsItems(result.items);
        setMeta(result.meta);
      } catch (requestError) {
        console.error(
          "Unable to load news:",
          requestError
        );

        if (isMounted) {
          setError(
            requestError.response?.data
              ?.message ||
              "Unable to load the latest news."
          );

          setNewsItems([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadNews();

    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  const visiblePages = useMemo(
    () =>
      createVisiblePages(
        currentPage,
        meta.totalPages
      ),
    [
      currentPage,
      meta.totalPages,
    ]
  );

  function changePage(page) {
    if (
      page < 1 ||
      page > meta.totalPages ||
      page === currentPage
    ) {
      return;
    }

    setCurrentPage(page);

    window.setTimeout(() => {
      newsListRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  return (
    <div className="pb-16">
      <header className="mb-10 pt-6 text-center">
        <Typography
          variant="h1"
          className="text-[#fe7f2d]"
        >
          SkyKidHero News
        </Typography>

        <Typography className="mx-auto mt-3 max-w-2xl text-white-600">
          Discover the latest Sky updates,
          community announcements, events,
          and important guides.
        </Typography>
      </header>

      <div className="container mx-auto px-4">
        {!featuredLoading &&
          featuredNews.length > 0 && (
            <FeaturedNewsSlider
              items={featuredNews}
            />
          )}

        <section
          ref={newsListRef}
          className="scroll-mt-24 pt-14"
        >
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <Typography
                variant="h2"
                className="text-3xl text-[#d5dadd]"
              >
                Latest News
              </Typography>

              <Typography className="mt-2 text-white-600">
                Stay updated with the newest
                SkyKidHero articles.
              </Typography>
            </div>

            {meta.total > 0 && (
              <span className="text-sm text-gray-200">
                {meta.total}{" "}
                {meta.total === 1
                  ? "article"
                  : "articles"}
              </span>
            )}
          </div>

          {loading && (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({
                length:
                  RECORDS_PER_PAGE,
              }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                >
                  <div className="aspect-[16/9] animate-pulse bg-gray-200" />

                  <div className="space-y-4 p-6">
                    <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
                    <div className="h-6 w-4/5 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-8 text-center text-red-700">
              {error}
            </div>
          )}

          {!loading &&
            !error &&
            newsItems.length === 0 && (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
                <Typography
                  variant="h5"
                  className="text-[#233d4d]"
                >
                  No news articles yet
                </Typography>

                <Typography className="mt-2 text-gray-500">
                  Published articles will
                  appear here.
                </Typography>
              </div>
            )}

          {!loading &&
            !error &&
            newsItems.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {newsItems.map((news) => (
                  <NewsCard
                    key={news.id}
                    news={news}
                  />
                ))}
              </div>
            )}

          {!loading &&
            meta.totalPages > 1 && (
              <nav
                className="mt-10 flex flex-wrap items-center justify-center gap-2"
                aria-label="News pagination"
              >
                <button
                  type="button"
                  onClick={() =>
                    changePage(
                      currentPage - 1
                    )
                  }
                  disabled={
                    !meta.hasPreviousPage
                  }
                  className="rounded-lg border border-[#fe7f2d] px-4 py-2 text-sm font-semibold text-[#fe7f2d] transition hover:bg-[#fe7f2d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                {visiblePages.map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() =>
                        changePage(page)
                      }
                      className={`h-10 min-w-10 rounded-lg px-3 text-sm font-semibold transition ${
                        currentPage === page
                          ? "bg-[#fe7f2d] text-white shadow-md"
                          : "border border-gray-300 bg-white text-[#233d4d] hover:border-[#fe7f2d] hover:text-[#fe7f2d]"
                      }`}
                      aria-current={
                        currentPage === page
                          ? "page"
                          : undefined
                      }
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  onClick={() =>
                    changePage(
                      currentPage + 1
                    )
                  }
                  disabled={
                    !meta.hasNextPage
                  }
                  className="rounded-lg border border-[#fe7f2d] px-4 py-2 text-sm font-semibold text-[#fe7f2d] transition hover:bg-[#fe7f2d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </nav>
            )}
        </section>
      </div>

      <div className="mt-16">
        <FaQ />
      </div>
    </div>
  );
};

export default News;