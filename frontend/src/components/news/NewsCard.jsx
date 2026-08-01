import {
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  UserCircleIcon,
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
    return "Unpublished date";
  }

  return new Intl.DateTimeFormat(
    "en-PH",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  ).format(new Date(value));
}

export default function NewsCard({
  news,
}) {
  const imageUrl = getImageUrl(
    news.image
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#233d4d]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={news.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-white/70">
            SkyKidHero News
          </div>
        )}

        {news.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-[#fe7f2d] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDaysIcon className="h-4 w-4" />

            {formatDate(
              news.publishedAt
            )}
          </span>

          {news.author?.username && (
            <span className="inline-flex items-center gap-1.5">
              <UserCircleIcon className="h-4 w-4" />

              {news.author.username}
            </span>
          )}
        </div>

        <Typography
          variant="h5"
          className="mb-3 leading-snug text-[#233d4d]"
        >
          {news.title}
        </Typography>

        <Typography className="mb-6 line-clamp-4 flex-1 text-sm leading-6 text-gray-600">
          {news.summary ||
            "Read the latest update from SkyKidHero."}
        </Typography>

        {news.externalUrl && (
          <a
            href={news.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit"
          >
            <Button
              variant="text"
              className="flex items-center gap-2 px-0 text-[#fe7f2d] hover:bg-transparent"
            >
              Read More

              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </Button>
          </a>
        )}
      </div>
    </article>
  );
}