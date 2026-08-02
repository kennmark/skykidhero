import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  ArrowRightIcon,
  BoltIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  CloudIcon,
  EyeIcon,
  FireIcon,
  GlobeAltIcon,
  HomeModernIcon,
  MapIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
  TrophyIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

import {
  AVIARY_NUM_MAP_SHRINES,
  EDEN_NUM_MAP_SHRINES,
  FOREST_NUM_MAP_SHRINES,
  ISLE_NUM_MAP_SHRINES,
  MS_COUNT_DATE_UPDATED,
  MS_HOME,
  PRAIRIE_NUM_MAP_SHRINES,
  TOTAL_MS_COUNT,
  VALLEY_NUM_MAP_SHRINES,
  VAULT_NUM_MAP_SHRINES,
  WASTELAND_NUM_MAP_SHRINES,
} from '../../exports/constants'
import { MAP_SHRINE } from '../../exports/defaultImages'

const MAP_SHRINE_FEATURES = [
  {
    id: 'winged-lights',
    title: 'Missing Winged Lights',
    description:
      'See which Winged Lights remain uncollected in each discovered area.',
    Icon: SparklesIcon,
  },
  {
    id: 'daily-quests',
    title: 'Daily Quest Tracking',
    description:
      'Check your active Daily Quests and find the areas connected to them.',
    Icon: CalendarDaysIcon,
  },
  {
    id: 'season-guides',
    title: 'Past Season Guides',
    description:
      'Locate Season Guides and review your Regular and Seasonal Spirit progress.',
    Icon: UserGroupIcon,
  },
]

const MAP_SHRINE_SOURCES = [
  {
    id: 'old-home',
    label: 'Old Home',
    count: MS_HOME,
    Icon: MapPinIcon,
  },
  {
    id: 'aviary',
    label: 'Aviary Village',
    count: AVIARY_NUM_MAP_SHRINES,
    Icon: HomeModernIcon,
  },
  {
    id: 'isle',
    label: 'Isle of Dawn',
    count: ISLE_NUM_MAP_SHRINES,
    Icon: SunIcon,
  },
  {
    id: 'prairie',
    label: 'Daylight Prairie',
    count: PRAIRIE_NUM_MAP_SHRINES,
    Icon: CloudIcon,
  },
  {
    id: 'forest',
    label: 'Hidden Forest',
    count: FOREST_NUM_MAP_SHRINES,
    Icon: BoltIcon,
  },
  {
    id: 'valley',
    label: 'Valley of Triumph',
    count: VALLEY_NUM_MAP_SHRINES,
    Icon: TrophyIcon,
  },
  {
    id: 'wasteland',
    label: 'Golden Wasteland',
    count: WASTELAND_NUM_MAP_SHRINES,
    Icon: FireIcon,
  },
  {
    id: 'vault',
    label: 'Vault of Knowledge',
    count: VAULT_NUM_MAP_SHRINES,
    Icon: BuildingLibraryIcon,
  },
  {
    id: 'eden',
    label: 'Eye of Eden',
    count: EDEN_NUM_MAP_SHRINES,
    Icon: EyeIcon,
  },
]

function FeatureCard({
  feature,
}) {
  const Icon = feature.Icon

  return (
    <article
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-2.5
        transition
        duration-300

        hover:border-[#fe7f2d]/35
        hover:bg-white/[0.065]

        lg:flex
        lg:items-start
        lg:gap-3
      "
    >
      <span
        className="
          grid
          h-9
          w-9
          shrink-0
          place-items-center
          rounded-xl
          bg-[#fe7f2d]/12
          text-[#fe7f2d]
        "
      >
        <Icon
          aria-hidden="true"
          className="h-5 w-5"
        />
      </span>

      <div className="min-w-0">
        <h3
          className="
            mt-3
            text-sm
            font-black
            leading-5
            text-white

            lg:mt-0
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-1
            text-xs
            leading-5
            text-white/50

            lg:line-clamp-2
          "
        >
          {feature.description}
        </p>
      </div>
    </article>
  )
}

function SourceCard({
  source,
}) {
  const Icon = source.Icon

  const percentage = Math.min(
    100,
    Math.max(
      8,
      Math.round(
        (Number(source.count || 0) /
          Number(TOTAL_MS_COUNT || 1)) *
          100
      )
    )
  )

  return (
    <article
      className="
        group
        min-w-0
        rounded-2xl
        border
        border-white/10
        bg-white/[0.035]
        p-3
        transition
        duration-300

        hover:-translate-y-0.5
        hover:border-[#fe7f2d]/35
        hover:bg-white/[0.06]
      "
    >
      <div className="flex min-w-0 items-center gap-3">
        <span
          className="
            grid
            h-8
            w-8
            shrink-0
            place-items-center
            rounded-xl
            bg-[#fe7f2d]/10
            text-[#fe7f2d]
          "
        >
          <Icon
            aria-hidden="true"
            className="h-4 w-4"
          />
        </span>

        <span className="min-w-0 flex-1">
          <span
            className="
              block
              truncate
              text-xs
              font-black
              text-white

              sm:text-sm
            "
            title={source.label}
          >
            {source.label}
          </span>

          <span
            className="
              mt-0.5
              block
              text-[9px]
              font-black
              uppercase
              tracking-wider
              text-white/35
            "
          >
            Map Shrines
          </span>
        </span>

        <strong
          className="
            shrink-0
            text-lg
            font-black
            text-[#ff9b57]
          "
        >
          {source.count}
        </strong>
      </div>

      <div
        className="
          mt-2
          h-1
          overflow-hidden
          rounded-full
          bg-white/10
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-[#fe7f2d]
            transition-[width]
            duration-500
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </article>
  )
}

const MapShrineIntro = () => {
  return (
    <section
      id="map-shrines"
      aria-labelledby="map-shrine-title"
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

          lg:min-h-[100svh]
          lg:pb-5
          lg:pt-[5.5rem]
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
            bg-[#102a37]
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
              bg-[radial-gradient(circle_at_88%_8%,_rgba(254,127,45,0.18),_transparent_31%),radial-gradient(circle_at_8%_92%,_rgba(45,131,169,0.17),_transparent_36%)]
            "
          />

          <div
            className="
              grid
              gap-4
              p-4

              sm:p-5

              lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)]
              lg:items-center
              lg:gap-5
              lg:p-5

              xl:p-5
            "
          >
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
                <MapIcon
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                Sky map progression
              </div>

              <h2
                id="map-shrine-title"
                className="
                  mt-3
                  max-w-3xl
                  text-2xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-white

                  sm:text-3xl

                  lg:text-[2.15rem]

                  xl:text-[2.4rem]
                "
              >
                Reveal the kingdom. Track what
                remains.
              </h2>

              <p
                className="
                  mt-3
                  max-w-3xl
                  text-sm
                  leading-6
                  text-white/65

                  sm:text-base
                  sm:leading-7
                "
              >
                Map Shrines reveal the Sky
                Kingdom and help you track
                uncollected Winged Lights, Daily
                Quests, spirits, and Season
                Guides. Activate every shrine to
                unlock the complete map in your
                Map Locator.
              </p>

              <div
                className="
                  mt-4
                  grid
                  gap-3

                  sm:grid-cols-3
                "
              >
                {MAP_SHRINE_FEATURES.map(
                  (feature) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                    />
                  )
                )}
              </div>
              
              <div
                className="
                  mt-4
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                  sm:items-center
                "
              >
                <Link
                  to="/map-shrines"
                  className="
                    group
                    inline-flex
                    min-h-11
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
                  View Map Shrine locations

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

                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    text-white/40

                    sm:text-sm
                  "
                >
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="h-4 w-4 text-[#fe7f2d]"
                  />

                  Updated {MS_COUNT_DATE_UPDATED}
                </span>
              </div>
            </div>

            <div className="min-w-0">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-[#071820]/70
                  p-3

                  sm:p-4
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-8
                    h-48
                    w-48
                    -translate-x-1/2
                    rounded-full
                    bg-[#fe7f2d]/15
                    blur-3xl

                    sm:h-60
                    sm:w-60
                  "
                />

                <LazyLoadImage
                  src={MAP_SHRINE}
                  alt="Map Shrine in Sky: Children of the Light"
                  effect="blur"
                  wrapperClassName="relative z-10 block w-full"
                  className="
                    mx-auto
                    h-36
                    w-full
                    object-contain

                    sm:h-44

                    lg:h-[clamp(8rem,18vh,10rem)]

                    xl:h-[clamp(9rem,19vh,11rem)]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    mt-4
                    rounded-2xl
                    border
                    border-[#fe7f2d]/25
                    bg-[#fe7f2d]/10
                    p-3
                  "
                >
                  <div
                    className="
                      flex
                      items-end
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[9px]
                          font-black
                          uppercase
                          tracking-[0.16em]
                          text-white/40

                          sm:text-[10px]
                        "
                      >
                        Total Map Shrines
                      </p>

                      <strong
                        className="
                          mt-1
                          block
                          text-3xl
                          font-black
                          leading-none
                          text-[#ff9b57]

                          sm:text-4xl
                        "
                      >
                        {TOTAL_MS_COUNT}
                      </strong>
                    </div>

                    <span
                      className="
                        grid
                        h-10
                        w-10
                        shrink-0
                        place-items-center
                        rounded-2xl
                        bg-[#fe7f2d]
                        text-[#233d4d]
                      "
                    >
                      <GlobeAltIcon
                        aria-hidden="true"
                        className="h-5 w-5"
                      />
                    </span>
                  </div>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-white/50

                      sm:text-sm
                      sm:leading-6
                    "
                  >
                    Found across Old Home,
                    Aviary Village, the seven
                    realms, and connected
                    seasonal areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              border-t
              border-white/10
              bg-[#071820]/45
              p-3

              sm:p-4

              lg:px-5
              lg:py-4

              xl:px-5
            "
          >
            <div
              className="
                mb-3
                flex
                flex-col
                gap-2

                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-[#ff9b57]

                    sm:text-xs
                  "
                >
                  Map Shrine breakdown
                </p>

                <h3
                  className="
                    mt-1
                    text-lg
                    font-black
                    tracking-tight
                    text-white

                    sm:text-xl
                  "
                >
                  Shrines by home and realm
                </h3>
              </div>

              <span
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  py-1.5
                  text-[10px]
                  text-white/45

                  sm:text-xs
                "
              >
                <MapPinIcon
                  aria-hidden="true"
                  className="h-4 w-4 text-[#fe7f2d]"
                />

                {MAP_SHRINE_SOURCES.length} mapped
                regions
              </span>
            </div>

            <div
              className="
                grid
                gap-2.5

                sm:grid-cols-2

                lg:grid-cols-5
              "
            >
              {MAP_SHRINE_SOURCES.map(
                (source) => (
                  <SourceCard
                    key={source.id}
                    source={source}
                  />
                )
              )}
            </div>

            <div
              className="
                mt-2.5
                flex
                items-center
                justify-between
                gap-4
                rounded-2xl
                border
                border-[#fe7f2d]/25
                bg-[#fe7f2d]/10
                px-4
                py-2.5
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.14em]
                    text-white/35

                    sm:text-[10px]
                  "
                >
                  Complete kingdom total
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    text-white/55

                    sm:text-sm
                  "
                >
                  Activate every Map Shrine to
                  reveal your complete Sky map.
                </p>
              </div>

              <strong
                className="
                  shrink-0
                  text-3xl
                  font-black
                  text-[#ff9b57]

                  sm:text-4xl
                "
              >
                {TOTAL_MS_COUNT}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapShrineIntro