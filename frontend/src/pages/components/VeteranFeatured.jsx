import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  ArrowPathIcon,
  ArrowRightIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

import veteransImg from '../../assets/images/veterans/skykidheroes.png'
import { SkykidHero } from '../../data/skykidHeroData'

const FEATURED_COUNT = 3

function getRandomVeterans(
  veterans,
  count
) {
  if (!Array.isArray(veterans)) {
    return []
  }

  const shuffled = [...veterans]

  for (
    let index = shuffled.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex = Math.floor(
      Math.random() * (index + 1)
    )

    ;[
      shuffled[index],
      shuffled[randomIndex],
    ] = [
      shuffled[randomIndex],
      shuffled[index],
    ]
  }

  return shuffled.slice(
    0,
    Math.min(count, shuffled.length)
  )
}

function formatWingedLights(value) {
  if (
    value === null ||
    value === undefined ||
    value === ''
  ) {
    return '—'
  }

  return value
}

function VeteranThumbnail({
  veteran,
  isActive,
  onSelect,
}) {
  const {
    avatar_img,
    ign = 'Skykid Veteran',
    current_no_of_winged_lights,
  } = veteran

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`
        group
        flex
        min-w-0
        items-center
        gap-3
        rounded-2xl
        border
        p-2.5
        text-left
        transition
        duration-300

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#fe7f2d]

        ${
          isActive
            ? 'border-[#fe7f2d]/55 bg-[#fe7f2d]/12'
            : 'border-white/10 bg-white/[0.035] hover:border-[#fe7f2d]/30 hover:bg-white/[0.06]'
        }
      `}
    >
      <span
        className="
          h-14
          w-12
          shrink-0
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-[#071820]

          sm:h-16
          sm:w-14
        "
      >
        <LazyLoadImage
          src={avatar_img || veteransImg}
          alt={`${ign} avatar`}
          width={56}
          height={64}
          className="
            h-full
            w-full
            object-cover
            object-center
            transition
            duration-300

            group-hover:scale-105
          "
        />
      </span>

      <span className="min-w-0 flex-1">
        <span
          className="
            block
            truncate
            text-sm
            font-black
            text-white
          "
          title={ign}
        >
          {ign}
        </span>

        <span
          className="
            mt-1
            flex
            items-center
            gap-1.5
            text-[10px]
            font-black
            uppercase
            tracking-wider
            text-white/40
          "
        >
          <SparklesIcon
            aria-hidden="true"
            className="h-3.5 w-3.5 text-[#fe7f2d]"
          />

          {formatWingedLights(
            current_no_of_winged_lights
          )}{' '}
          Winged Lights
        </span>
      </span>

      <span
        aria-hidden="true"
        className={`
          h-2
          w-2
          shrink-0
          rounded-full
          transition

          ${
            isActive
              ? 'bg-[#fe7f2d]'
              : 'bg-white/15 group-hover:bg-[#fe7f2d]/60'
          }
        `}
      />
    </button>
  )
}

const VeteranFeatured = () => {
  const [
    featuredVeterans,
    setFeaturedVeterans,
  ] = useState(() =>
    getRandomVeterans(
      SkykidHero,
      FEATURED_COUNT
    )
  )

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0)

  const activeVeteran =
    featuredVeterans[activeIndex] ||
    featuredVeterans[0] ||
    null

  const activeImage =
    activeVeteran?.avatar_img ||
    veteransImg

  const activeName =
    activeVeteran?.ign ||
    'Skykid Heroes'

  const activeWingedLights =
    formatWingedLights(
      activeVeteran
        ?.current_no_of_winged_lights
    )

  function refreshVeterans() {
    setFeaturedVeterans(
      getRandomVeterans(
        SkykidHero,
        FEATURED_COUNT
      )
    )

    setActiveIndex(0)
  }

  return (
    <section
      id="featured-veterans"
      aria-labelledby="featured-veterans-title"
      className="
        w-full
        scroll-mt-24
        px-2

        sm:px-4
      "
    >
      <div
        className="
          flex
          w-full
          items-center
          py-5

          sm:py-6

          lg:min-h-[calc(100svh-4rem)]
        "
      >
        <div
          className="
            relative
            isolate
            w-full
            overflow-hidden
            rounded-[1.5rem]
            border
            border-[#fe7f2d]/20
            bg-[#071820]/88
            text-white
            shadow-[0_24px_70px_rgba(0,0,0,0.3)]

            sm:rounded-[2rem]
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              bg-[radial-gradient(circle_at_12%_10%,_rgba(254,127,45,0.17),_transparent_30%),radial-gradient(circle_at_90%_90%,_rgba(40,122,160,0.16),_transparent_34%)]
            "
          />

          <div
            className="
              grid
              gap-5
              p-4

              sm:p-6

              lg:grid-cols-[minmax(19rem,0.9fr)_minmax(0,1.1fr)]
              lg:items-center
              lg:gap-8
              lg:p-8
            "
          >
            <div
              className="
                relative
                min-w-0
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#102a37]
              "
            >
              <div
                className="
                  relative
                  aspect-[4/5]
                  max-h-[34rem]
                  overflow-hidden

                  sm:aspect-[16/11]

                  lg:aspect-[4/5]
                "
              >
                <LazyLoadImage
                  src={activeImage}
                  alt={`${activeName}, featured Skykid veteran`}
                  className="
                    h-full
                    w-full
                    translate-x-[4%]
                    object-contain
                    object-center
                    transition
                    duration-500

                    sm:translate-x-[3%]

                    lg:translate-x-[5%]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071820]
                    via-[#071820]/10
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-4

                    sm:p-5
                  "
                >
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-[#071820]/70
                      px-3
                      py-1.5
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-[#ffc394]
                      backdrop-blur-md
                    "
                  >
                    <SparklesIcon
                      aria-hidden="true"
                      className="h-4 w-4"
                    />

                    Featured Veteran
                  </span>

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-black
                      tracking-tight
                      text-white

                      sm:text-3xl
                    "
                  >
                    {activeName}
                  </h3>

                  <p
                    className="
                      mt-1
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-white/60
                    "
                  >
                    <SparklesIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-[#fe7f2d]"
                    />

                    {activeWingedLights}{' '}
                    current Winged Lights
                  </p>
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#fe7f2d]/25
                  bg-[#fe7f2d]/10
                  px-3
                  py-1.5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#ffc394]

                  sm:text-xs
                "
              >
                <UserGroupIcon
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                Community spotlight
              </div>

              <h2
                id="featured-veterans-title"
                className="
                  mt-4
                  max-w-2xl
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white

                  sm:text-4xl

                  lg:text-5xl
                "
              >
                Meet our featured Skykid
                Veterans.
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/60

                  sm:text-base
                "
              >
                Highlighting experienced
                community members and their
                continued journey across the Sky
                Kingdom.
              </p>

              <div
                className="
                  mt-5
                  grid
                  grid-cols-2
                  gap-3
                "
              >
                <article
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#102a37]/75
                    p-4
                  "
                >
                  <UserGroupIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fe7f2d]"
                  />

                  <strong
                    className="
                      mt-3
                      block
                      text-2xl
                      font-black
                      text-white
                    "
                  >
                    {SkykidHero.length}
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    Community Veterans
                  </span>
                </article>

                <article
                  className="
                    rounded-2xl
                    border
                    border-[#fe7f2d]/25
                    bg-[#fe7f2d]/10
                    p-4
                  "
                >
                  <SparklesIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fe7f2d]"
                  />

                  <strong
                    className="
                      mt-3
                      block
                      text-2xl
                      font-black
                      text-[#ff9b57]
                    "
                  >
                    {activeWingedLights}
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    Selected WL Count
                  </span>
                </article>
              </div>

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >
                <h3
                  className="
                    text-sm
                    font-black
                    text-white
                  "
                >
                  Featured profiles
                </h3>

                <button
                  type="button"
                  onClick={refreshVeterans}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-2
                    text-[10px]
                    font-black
                    uppercase
                    tracking-wider
                    text-white/55
                    transition

                    hover:border-[#fe7f2d]/30
                    hover:bg-[#fe7f2d]/10
                    hover:text-white

                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#fe7f2d]
                  "
                >
                  <ArrowPathIcon
                    aria-hidden="true"
                    className="h-4 w-4"
                  />

                  Refresh
                </button>
              </div>

              <div
                className="
                  mt-3
                  grid
                  gap-2.5
                "
              >
                {featuredVeterans.map(
                  (veteran, index) => (
                    <VeteranThumbnail
                      key={`${veteran.ign}-${index}`}
                      veteran={veteran}
                      isActive={
                        activeIndex === index
                      }
                      onSelect={() =>
                        setActiveIndex(index)
                      }
                    />
                  )
                )}
              </div>

              <Link
                to="/veterans"
                className="
                  group
                  mt-5
                  inline-flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#fe7f2d]
                  px-5
                  py-2.5
                  text-sm
                  font-black
                  text-[#233d4d]
                  shadow-lg
                  shadow-black/20
                  transition
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#ff934d]

                  focus:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-[#fe7f2d]/30
                "
              >
                View all Skykid Heroes

                <ArrowRightIcon
                  aria-hidden="true"
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VeteranFeatured
