import React from 'react'
import {
  Tooltip,
  Typography,
} from '@material-tailwind/react'
import { Link } from 'react-router-dom'

import AnnouncementCarousel from './AnnouncementCarousel'

import {
  WL_COUNT_DATE_UPDATED,
  TOTAL_WL_COUNT,
  PLAYSTATION_MAX_WL,
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

          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-white/10 p-2">
              <span className="block text-base font-black text-[#fe7f2d]">
                {TOTAL_WL_COUNT}
              </span>

              <span className="text-[10px] uppercase tracking-wide text-white/60">
                Mobile
              </span>
            </div>

            <div className="rounded-lg bg-white/10 p-2">
              <span className="block text-base font-black text-[#fe7f2d]">
                {PLAYSTATION_MAX_WL}
              </span>

              <span className="text-[10px] uppercase tracking-wide text-white/60">
                PlayStation
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
          group flex w-full items-center gap-3
          rounded-2xl
          border border-white/15
          bg-[#102a37]/75
          p-3 text-left text-white
          shadow-lg backdrop-blur-md
          transition duration-300
          hover:border-[#fe7f2d]/50
          hover:bg-[#233d4d]/90
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#fe7f2d]
          sm:w-auto sm:min-w-56
        "
      >
        <span
          className="
            relative grid h-11 w-11 shrink-0
            place-items-center rounded-xl
            bg-[#fe7f2d] text-[#233d4d]
          "
        >
          <span className="absolute inset-0 animate-ping rounded-xl bg-[#fe7f2d]/30" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.75}
            stroke="currentColor"
            className="relative h-6 w-6"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
            />
          </svg>
        </span>

        <span className="min-w-0">
          <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
            Max Winged Lights
          </span>

          <span className="mt-0.5 block text-2xl font-black leading-none text-[#fe7f2d]">
            {TOTAL_WL_COUNT}
          </span>

          <span className="mt-1 block text-xs text-white/60">
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
          min-h-[calc(100svh-5.5rem)]
          w-full overflow-hidden
          rounded-2xl
          border border-[#fe7f2d]/20
          bg-[#102a37]
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          sm:h-[calc(100svh-8.5rem)]
          sm:min-h-[640px]
          sm:rounded-[2rem]
        "
      >
        <div
          className="
            absolute inset-0

            [&_.swiper]:h-full
            [&_.swiper]:w-full
            [&_.swiper-slide]:h-full

            [&_img]:h-full
            [&_img]:w-full
            [&_img]:object-cover
            [&_img]:object-center

            [&_.swiper-button-prev]:hidden
            [&_.swiper-button-next]:hidden
            [&_.swiper-pagination]:hidden

            sm:[&_.swiper-button-prev]:flex
            sm:[&_.swiper-button-next]:flex
            sm:[&_.swiper-pagination]:block
          "
        >
          <AnnouncementCarousel />
        </div>

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-[#01080c]
            via-[#071820]/80
            to-[#102a37]/20
            sm:via-[#102a37]/55
            sm:to-transparent
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-r
            from-[#01080c]/40
            via-transparent
            to-transparent
            sm:from-[#01080c]/75
          "
        />

        <figcaption
          className="
            relative z-10
            flex min-h-[calc(100svh-5.5rem)]
            flex-col justify-end
            p-3
            sm:h-full
            sm:min-h-0
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
                text-white/80
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
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
                  inline-flex min-h-11
                  items-center justify-center gap-1.5
                  rounded-full
                  bg-[#fe7f2d]
                  px-3 py-2.5
                  text-xs font-black
                  text-[#233d4d]
                  shadow-lg shadow-black/20
                  transition duration-300
                  hover:bg-[#ff934d]
                  focus:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-[#fe7f2d]/30
                  sm:min-h-12
                  sm:gap-2
                  sm:px-6
                  sm:py-3
                  sm:text-sm
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
                  inline-flex min-h-11
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  bg-[#102a37]/75
                  px-3 py-2.5
                  text-xs font-black
                  text-white
                  backdrop-blur-md
                  transition duration-300
                  hover:border-[#fe7f2d]/50
                  hover:bg-[#233d4d]/90
                  focus:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-white/20
                  sm:min-h-12
                  sm:px-6
                  sm:py-3
                  sm:text-sm
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
              grid grid-cols-2 gap-2
              border-t border-white/15
              pt-3
              sm:mt-7
              sm:gap-4
              sm:pt-4
            "
          >
            <div
              className="
                flex min-w-0 items-center gap-2
                rounded-2xl
                border border-white/10
                bg-[#102a37]/80
                p-2
                text-white
                backdrop-blur-md
                sm:gap-3
                sm:p-3
              "
            >
              <span
                className="
                  grid h-9 w-9 shrink-0
                  place-items-center
                  rounded-xl
                  bg-white/10
                  text-[#fe7f2d]
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
                    d="M6.75 3v2.25M17.25 3v2.25M3.75 9.75h16.5M5.25 5.25h13.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5z"
                  />
                </svg>
              </span>

              <span className="min-w-0">
                <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-white/50 sm:text-[10px]">
                  Today
                </span>

                 <span className="mt-0.5 block truncate text-xs font-bold text-white sm:hidden">
                  {formattedMobileDate}
                </span>

                <span className="mt-0.5 hidden text-sm font-bold text-white sm:block sm:text-base">
                  {formattedToday}
                </span>
              </span>
            </div>

            <WingedLightSummary
              dateFormat={dateFormat}
            />
          </div>
        </figcaption>
      </figure>
    </section>
  )
}

export default HomeHero