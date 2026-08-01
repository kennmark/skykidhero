import {
  useEffect,
  useState,
} from "react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import {
  Button,
  Typography,
} from "@material-tailwind/react";

import {
  getImageUrl,
} from "../../utils/getImageUrl.js";

function formatDate(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat(
    "en-PH",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ).format(new Date(value));
}

export default function FeaturedNewsSlider({
  items = [],
}) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [items]);

  useEffect(() => {
    if (
      items.length <= 1 ||
      isPaused
    ) {
      return undefined;
    }

    const intervalId = window.setInterval(
      () => {
        setActiveIndex(
          (currentIndex) =>
            (currentIndex + 1) %
            items.length
        );
      },
      6000
    );

    return () => {
      window.clearInterval(intervalId);
    };
  }, [items.length, isPaused]);

  if (!items.length) {
    return null;
  }

  const activeNews =
    items[activeIndex];

  const imageUrl = getImageUrl(
    activeNews.image
  );

  function showPrevious() {
    setActiveIndex(
      (currentIndex) =>
        currentIndex === 0
          ? items.length - 1
          : currentIndex - 1
    );
  }

  function showNext() {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + 1) %
        items.length
    );
  }

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#162c3a] shadow-2xl"
      onMouseEnter={() =>
        setIsPaused(true)
      }
      onMouseLeave={() =>
        setIsPaused(false)
      }
      aria-label="Featured news"
    >
      <div className="relative min-h-[430px] md:min-h-[520px]">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={activeNews.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

        <div className="relative z-10 flex min-h-[430px] max-w-3xl flex-col justify-end px-6 py-10 md:min-h-[520px] md:px-12 md:py-14">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#fe7f2d] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
            <SparklesIcon className="h-4 w-4" />

            Featured News
          </div>

          <Typography
            variant="h2"
            className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            {activeNews.title}
          </Typography>

          {activeNews.summary && (
            <Typography className="mb-5 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
              {activeNews.summary}
            </Typography>
          )}

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-300">
            {activeNews.publishedAt && (
              <span>
                {formatDate(
                  activeNews.publishedAt
                )}
              </span>
            )}

            {activeNews.author?.username && (
              <>
                <span aria-hidden="true">
                  •
                </span>

                <span>
                  By{" "}
                  {
                    activeNews.author
                      .username
                  }
                </span>
              </>
            )}
          </div>

          {activeNews.externalUrl && (
            <a
              href={
                activeNews.externalUrl
              }
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <Button className="bg-[#fe7f2d] px-6 py-3 text-sm normal-case shadow-none hover:shadow-lg">
                Read More
              </Button>
            </a>
          )}
        </div>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white backdrop-blur-sm transition hover:bg-black/70"
              aria-label="Previous featured news"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white backdrop-blur-sm transition hover:bg-black/70"
              aria-label="Next featured news"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            <div className="absolute bottom-5 right-6 z-20 flex gap-2">
              {items.map((news, index) => (
                <button
                  key={news.id}
                  type="button"
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-8 bg-[#fe7f2d]"
                      : "w-2.5 bg-white/55 hover:bg-white"
                  }`}
                  aria-label={`Show featured news ${
                    index + 1
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}