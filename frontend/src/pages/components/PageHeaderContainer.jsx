import {
  Typography,
} from "@material-tailwind/react";

import {
  LazyLoadImage,
} from "react-lazy-load-image-component";

import {
  MapIcon,
} from "@heroicons/react/24/outline";

const PageHeaderContainer = ({
  seasonId,

  mapData,

  imgUrl,
  imgAlt,

  title,
  mapIntro,

  height,
  width,
}) => {
  const displayTitle =
    mapData?.name ||
    title ||
    "Sky Map";

  const displayIntro =
    mapData?.introduction ||
    mapIntro ||
    "";

  const displayMedia =
    mapData?.mapGif ||
    mapData?.image ||
    imgUrl;

  const displayAlt =
    mapData?.imageAlt ||
    imgAlt ||
    displayTitle;

  const constellationIcon =
    mapData?.mapConstellationIcon;

  const displayImage =
    mapData?.mapGif ||
    mapData?.image ||
    imgUrl


  return (
    <header
      className="
        relative
        mb-5
        overflow-hidden
        rounded-[1.75rem]
        border
        border-white/10
        bg-[#102a37]/80
        shadow-xl
        shadow-black/10
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-[#233d4d]/90
          via-[#173746]/75
          to-[#102a37]/95
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-28
          h-72
          w-72
          rounded-full
          bg-[#fe7f2d]/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          grid
          min-h-[220px]
          items-center
          gap-4
          p-4

          md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
          md:p-5

          lg:min-h-[260px]
          lg:gap-7
          lg:p-6
        "
      >
        <div
          className="
            relative
            flex
            min-h-[170px]
            items-center
            justify-center
            overflow-hidden
            rounded-[1.25rem]
            border
            border-white/10
            bg-black/15

            lg:min-h-[210px]
          "
        >
          {displayMedia ? (
            <LazyLoadImage
              src={displayMedia}
              alt={displayAlt}
              effect="blur"
              className="
                h-full
                max-h-[230px]
                w-full
                object-cover
              "
            />
          ) : (
            <MapIcon
              aria-hidden="true"
              className="
                h-16
                w-16
                text-white/20
              "
            />
          )}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#102a37]/35
              to-transparent
            "
          />
        </div>

        <div
          className="
            min-w-0
            px-1
            py-2

            md:px-0
          "
        >
          <div
            className="
              mb-3
              flex
              flex-wrap
              items-center
              gap-2
            "
          >
            {constellationIcon ? (
              <img
                src={
                  constellationIcon
                }
                alt=""
                aria-hidden="true"
                className="
                  h-10
                  w-10
                  object-contain

                  sm:h-12
                  sm:w-12
                "
              />
            ) : (
              <span
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-xl
                  bg-[#fe7f2d]/15
                  text-[#fe7f2d]

                  sm:h-12
                  sm:w-12
                "
              >
                <MapIcon
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </span>
            )}

            <span
              className="
                rounded-full
                border
                border-[#fe7f2d]/25
                bg-[#fe7f2d]/10
                px-3
                py-1
                text-[10px]
                font-black
                uppercase
                tracking-[0.16em]
                text-[#ffad72]
              "
            >
              {seasonId
                ? `Season ${seasonId}`
                : "Sky Kingdom Map"}
            </span>
          </div>

          <Typography
            variant="h2"
            className="
              text-2xl
              font-black
              text-white

              sm:text-3xl
              lg:text-4xl
            "
          >
            {displayTitle}
          </Typography>

          {mapData?.subtitle && (
            <Typography
              className="
                mt-1
                text-sm
                font-semibold
                text-[#ffad72]

                sm:text-base
              "
            >
              {mapData.subtitle}
            </Typography>
          )}

          {displayIntro && (
            <Typography
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-white/65

                sm:text-base
                sm:leading-7
              "
            >
              {displayIntro}
            </Typography>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeaderContainer;