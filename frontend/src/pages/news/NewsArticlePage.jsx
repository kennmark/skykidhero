import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import {
  getPublishedNewsBySlug,
} from "../../services/news.service";

function formatDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Manila",
  }).format(date);
}

function getAuthorName(author) {
  if (!author) {
    return "SkykidHero";
  }

  return (
    author.displayName ||
    author.name ||
    author.username ||
    "SkykidHero"
  );
}

function getArticleImage(article) {
  return (
    article?.imageUrl ||
    article?.image ||
    article?.thumbnail ||
    ""
  );
}

export default function NewsArticlePage() {
  const { slug } = useParams();

  const [article, setArticle] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    let active = true;

    async function loadArticle() {
      try {
        setLoading(true);
        setError("");

        const response =
          await getPublishedNewsBySlug(
            slug
          );

        if (!active) {
          return;
        }

        setArticle(
          response.data?.data ||
            response.data
        );
      } catch (err) {
        if (!active) {
          return;
        }

        setArticle(null);

        setError(
          err.response?.data?.message ||
            "The news article could not be loaded."
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    if (slug) {
      loadArticle();
    } else {
      setLoading(false);
      setError(
        "The news article URL is invalid."
      );
    }

    return () => {
      active = false;
    };
  }, [slug]);

  useEffect(() => {
    if (!article?.title) {
      return;
    }

    const previousTitle =
      document.title;

    document.title =
      `${article.title} | SkykidHero`;

    return () => {
      document.title =
        previousTitle;
    };
  }, [article]);

  const publishedDate = useMemo(
    () =>
      formatDate(
        article?.publishedAt ||
          article?.createdAt
      ),
    [article]
  );

  const authorName = useMemo(
    () =>
      getAuthorName(
        article?.author
      ),
    [article]
  );

  const articleImage =
    getArticleImage(article);

  if (loading) {
    return (
      <section className="mx-auto min-h-[70vh] max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="aspect-[16/8] w-full rounded-3xl bg-blue-gray-100" />

          <div className="mx-auto mt-8 max-w-4xl space-y-5">
            <div className="h-10 w-4/5 rounded-lg bg-blue-gray-100" />
            <div className="h-5 w-full rounded bg-blue-gray-100" />
            <div className="h-5 w-3/4 rounded bg-blue-gray-100" />

            <div className="mt-8 h-px bg-blue-gray-100" />

            <div className="space-y-3 pt-5">
              <div className="h-4 w-full rounded bg-blue-gray-100" />
              <div className="h-4 w-full rounded bg-blue-gray-100" />
              <div className="h-4 w-5/6 rounded bg-blue-gray-100" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !article) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
        <div className="max-w-lg rounded-3xl bg-white/90 p-8 text-center shadow-xl backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-blue-gray-900">
            Article not found
          </h1>

          <p className="mt-3 leading-7 text-blue-gray-600">
            {error ||
              "This article may have been removed or unpublished."}
          </p>

          <Link
            to="/news"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#fe7f2d] px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <ArrowLeftIcon className="h-5 w-5" />

            Back to News
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/news"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#fe7f2d] transition hover:opacity-75"
      >
        <ArrowLeftIcon className="h-4 w-4" />

        Back to News
      </Link>

      {/* News image */}
      {articleImage && (
        <figure className="overflow-hidden rounded-3xl bg-blue-gray-100 shadow-xl">
          <img
            src={articleImage}
            alt={article.title}
            className="aspect-[16/8] w-full object-cover"
          />
        </figure>
      )}

      <div className="mx-auto max-w-4xl">
        {/* Article heading */}
        <header className="pt-8">
          <h1 className="text-3xl font-extrabold leading-tight text-blue-gray-900 sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          {/* Short description */}
          {article.summary && (
            <p className="mt-5 text-lg leading-8 text-blue-gray-600 sm:text-xl">
              {article.summary}
            </p>
          )}

          {/* Author and date */}
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 border-y border-blue-gray-100 py-5 text-sm text-blue-gray-600">
            <div className="flex items-center gap-2">
              <UserCircleIcon className="h-5 w-5" />

              <span>
                By{" "}
                <strong className="font-semibold text-blue-gray-900">
                  {authorName}
                </strong>
              </span>
            </div>

            {publishedDate && (
              <div className="flex items-center gap-2">
                <CalendarDaysIcon className="h-5 w-5" />

                <span>
                  Published{" "}
                  {publishedDate}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Full article content */}
        <section className="py-10">
          <div className="whitespace-pre-line text-base leading-8 text-blue-gray-800 sm:text-lg">
            {article.body}
          </div>
        </section>

        {/* External source */}
        {article.externalUrl && (
          <section className="mb-10 rounded-3xl border border-orange-200 bg-orange-50/90 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-blue-gray-900">
              View the original post
            </h2>

            <p className="mt-2 leading-7 text-blue-gray-600">
              This article is also
              available from its original
              source.
            </p>

            <a
              href={
                article.externalUrl
              }
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#fe7f2d] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Visit Original Post

              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </section>
        )}
      </div>
    </article>
  );
}