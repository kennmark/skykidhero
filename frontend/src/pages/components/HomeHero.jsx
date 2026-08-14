import React from 'react'
import {
  Tooltip,
  Typography,
} from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import HeroSkyEvents from './HeroSkyEvents'

import AnnouncementCarousel from './AnnouncementCarousel'

import {
  WL_COUNT_DATE_UPDATED,
  TOTAL_WL_COUNT,
  STEAM_MAX_WL,
} from '../../exports/constants'

function WingedLightSummary({
  dateFormat,
}) {
  const recordIsToday =
    WL_COUNT_DATE_UPDATED === dateFormat

  return (
    <Tooltip
      placement="top"
      content={
        <div className="w-64 p-1">
          <Typography
            color="white"
            className="text-sm font-bold"
          >
            Maximum Winged Lights
          </Typography>

          <Typography
            variant="small"
            color="white"
            className="mt-1 font-normal leading-5 opacity-80"
          >
            The latest record was updated{' '}
            {recordIsToday ? 'today' : 'on'}{' '}
            {WL_COUNT_DATE_UPDATED}.
          </Typography>

          <div className="mt-3 grid grid-cols-2 gap-2 text-center">
            <div className="rounded-lg bg-white/10 p-2">
              <span className="block text-base font-black text-[#fe7f2d]">
                {TOTAL_WL_COUNT}
              </span>

              <span className="text-[10px] uppercase tracking-wide text-white/60">
                Mobile| PS | Nintendo
              </span>
            </div>
            <div className="rounded-lg bg-white/10 p-2">
              <span className="block text-base font-black text-[#fe7f2d]">
                {STEAM_MAX_WL}
              </span>

              <span className="text-[10px] uppercase tracking-wide text-white/60">
                Steam
              </span>
            </div>
          </div>
        </div>
      }
      animate={{
        mount: {
          scale: 1,
          y: 0,
        },
        unmount: {
          scale: 0.95,
          y: 8,
        },
      }}
    >
      <button
        type="button"
        aria-label={`Maximum Winged Lights: ${TOTAL_WL_COUNT}`}
        className="
          pointer-events-auto
          flex
          h-full
          w-full
          min-w-0
          items-center
          gap-2.5
          rounded-2xl
          border border-white/10
          bg-[#102a37]/90
          p-2.5
          text-left
          text-white
          shadow-xl shadow-black/20
          backdrop-blur-md
          transition duration-300

          hover:border-[#fe7f2d]/40
          hover:bg-[#183746]/90

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#fe7f2d]

          sm:gap-3
          sm:p-3
        "
      >
        <span
          className="
            relative
            grid
            h-10
            w-10
            shrink-0
            place-items-center
            rounded-xl
            bg-[#fe7f2d]
            text-[#233d4d]

            sm:h-11
            sm:w-11
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
            className="h-5 w-5 sm:h-6 sm:w-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
            />
          </svg>
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-[9px] font-black uppercase tracking-[0.14em] text-white/45">
            Max Winged Lights
          </span>

          <span className="mt-0.5 block text-xl font-black leading-none text-[#fe7f2d] sm:text-2xl">
            {TOTAL_WL_COUNT}
          </span>

          <span className="mt-1 block text-[10px] text-white/45 sm:text-xs">
            Tap or hover for details
          </span>
        </span>
      </button>
    </Tooltip>
  )
}

function HomeHero() {
  const today = new Date()

  const formattedToday =
    new Intl.DateTimeFormat(
      'en-US',
      {
        weekday: 'long',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
      }
    ).format(today)

  const dateFormat =
    new Intl.DateTimeFormat(
      'en-US',
      {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }
    ).format(today)

  const formattedMobileDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(today)

  return (
    <section
      aria-labelledby="home-hero-title"
      className="w-full px-2 py-3 sm:px-4 sm:py-6"
    >
      <figure
        className="
           relative isolate
            w-full overflow-hidden
            rounded-2xl
            border border-[#fe7f2d]/20
            bg-[#071820]
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]

            sm:h-[calc(100svh-8.5rem)]
            sm:min-h-[600px]
            sm:max-h-[880px]
            sm:rounded-[2rem]
        "
      >
        <div
          className="
            relative z-0
            h-[clamp(11rem,52vw,15rem)]
            w-full overflow-hidden

            sm:absolute
            sm:inset-0
            sm:h-full

            [&_.swiper]:!h-full
            [&_.swiper]:!w-full
            [&_.swiper-wrapper]:!h-full
            [&_.swiper-slide]:!h-full

            [&_.carousel-image]:!m-0
            [&_.carousel-image]:!h-full
            [&_.carousel-image]:!w-full

            [&_img]:!h-full
            [&_img]:!w-full
            [&_img]:object-cover
            [&_img]:object-center

            max-sm:[&_.swiper-button-prev]:!hidden
            max-sm:[&_.swiper-button-next]:!hidden
            max-sm:[&_.swiper-pagination]:!hidden

            sm:[&_.swiper-button-prev]:!z-30
            sm:[&_.swiper-button-next]:!z-30
            sm:[&_.swiper-button-prev]:!pointer-events-auto
            sm:[&_.swiper-button-next]:!pointer-events-auto
            sm:[&_.swiper-pagination]:!z-30
            sm:[&_.swiper-pagination]:!pointer-events-auto
          "
        >
          <AnnouncementCarousel />
        </div>

        <div
          aria-hidden="true"
          className="
          pointer-events-none
          absolute inset-x-0 top-0 z-[1]
          h-[clamp(11rem,52vw,15rem)]
          bg-gradient-to-t
          from-[#071820]
          via-transparent
          to-black/10
          sm:hidden
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0 z-[1]
            hidden
            bg-gradient-to-t
            from-[#01080c]/90
            via-[#071820]/35
            to-transparent
            sm:block
          "
        />

        <figcaption
          className="
            pointer-events-none
            relative z-10
            flex flex-col
            bg-gradient-to-b
            from-[#071820]
            to-[#01080c]
            px-3 pb-3 pt-4

            sm:absolute
            sm:inset-0
            sm:justify-end
            sm:bg-none
            sm:p-7

            lg:p-10
            xl:p-12
          "
        >
          <div className="max-w-3xl">
            <div
              className="
                mb-4 hidden
                items-center gap-2
                rounded-full
                border border-white/15
                bg-[#102a37]/65
                px-3 py-1.5
                text-xs font-bold text-white
                backdrop-blur-md
                sm:inline-flex
                sm:text-sm
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#fe7f2d] opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fe7f2d]" />
              </span>

              Welcome to SkykidHero
            </div>

            <Typography
              id="home-hero-title"
              variant="h1"
              className="
                max-w-xl
                text-2xl
                font-black
                leading-tight
                tracking-tight
                text-white
                drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]

                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >
              Your companion for every journey across Sky.
            </Typography>

            <Typography
              className="
                mt-2
                max-w-xl
                text-xs
                font-normal
                leading-5
                text-white/75

                sm:mt-4
                sm:text-sm
                sm:leading-6
                lg:text-base
              "
            >
              <span className="sm:hidden">
                Maps, spirits, Winged Lights, shrines, quests, and events.
              </span>

              <span className="hidden sm:inline">
                Discover maps, spirits, Winged Lights, Map Shrines,
                seasonal quests, events, and helpful community guides.
              </span>
            </Typography>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:gap-3">
              <a
                href="#maps"
                className="
                  pointer-events-auto
                  inline-flex min-h-11
                  items-center justify-center
                  rounded-full
                  bg-[#fe7f2d]
                  px-4 py-2.5
                  text-xs font-black
                  text-[#233d4d]
                "
              >
                Explore Maps

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>

              <Link
                to="/winged-lights"
                className="
                  pointer-events-auto
                  inline-flex min-h-11
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-[#102a37]/75
                  px-4 py-2.5
                  text-xs font-black
                  text-white
                "
              >
                <span className="sm:hidden">
                  Winged Lights
                </span>

                <span className="hidden sm:inline">
                  Find Winged Lights
                </span>
              </Link>
            </div>
          </div>

          <div
            className="
              mt-4
              grid
              grid-cols-1
              items-stretch
              gap-3
              border-t
              border-white/15
              pt-3

              sm:mt-7
              sm:grid-cols-2
              sm:gap-4
              sm:pt-4
            "
          >
            <div className="min-w-0 h-full">
              <HeroSkyEvents />
            </div>

            <div className="min-w-0 h-full">
              <WingedLightSummary
                dateFormat={dateFormat}
              />
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}

export default HomeHero