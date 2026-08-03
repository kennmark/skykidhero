import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  ArrowRightIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

import { WINGED_LIGHT } from '../../exports/defaultImages'
import useWingedLightProgress from '../../hooks/useWingedLightProgress'

import {
  WL_COUNT_DATE_UPDATED,
  TOTAL_WL_COUNT,
  WB_TRAVELING_SPIRITS,
  WB_REGULAR_SPIRITS,
  WL_COUNT,
  SHARDS_WL,
  ORBIT_WL,
  PLAYSTATION_MAX_WL,
  STEAM_MAX_WL,
} from '../../exports/constants'

const SOURCE_DETAILS = [
  {
    id: 'maps',
    label: 'Winged Lights in Maps',
    shortLabel: 'All Maps',
    value: WL_COUNT,
    description:
      'Collectible Winged Lights found throughout the realms and seasonal areas.',
  },
  {
    id: 'regular',
    label: 'Regular Spirit Wing Buffs',
    shortLabel: 'Regular Spirits',
    value: WB_REGULAR_SPIRITS,
    description:
      'Permanent Wing Buffs purchased from Regular Spirits.',
  },
  {
    id: 'traveling',
    label: 'Traveling Spirit Wing Buffs',
    shortLabel: 'Traveling Spirits',
    value: WB_TRAVELING_SPIRITS,
    description:
      'Permanent Wing Buffs obtained from Traveling Spirits.',
  },
  {
    id: 'orbit',
    label: 'Orbit Winged Light',
    shortLabel: 'Orbit',
    value: ORBIT_WL,
    description:
      'Winged Light received after completing the Sky logo credits.',
  },
  {
    id: 'shards',
    label: 'Shattering Void Winged Light',
    shortLabel: 'Shattering Void',
    value: SHARDS_WL,
    description:
      'Winged Light available in the Shattering Void space.',
  },
]

const PLATFORM_TOTALS = [
  {
    id: 'mobile',
    platform: 'Mobile and Switch',
    value: TOTAL_WL_COUNT,
  },
  {
    id: 'playstation',
    platform: 'PlayStation',
    value: PLAYSTATION_MAX_WL,
  },
  {
    id: 'steam',
    platform: 'Steam',
    value: STEAM_MAX_WL,
  },
]


function TrackedProgressCard({
  Icon,
  label,
  value,
  maximum,
  percentage,
  detail,
  accent = false,
}) {
  return (
    <article
      className={`
        min-w-0
        rounded-xl
        border
        p-2.5

        ${
          accent
            ? 'border-[#fe7f2d]/30 bg-[#fe7f2d]/10'
            : 'border-white/10 bg-white/[0.035]'
        }
      `}
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-2
        "
      >
        <span
          className="
            grid
            h-7
            w-7
            shrink-0
            place-items-center
            rounded-lg
            bg-[#fe7f2d]/12
            text-[#fe7f2d]
          "
        >
          <Icon
            aria-hidden="true"
            className="h-4 w-4"
          />
        </span>

        <strong
          className={`
            whitespace-nowrap
            text-sm
            font-black
            tabular-nums

            ${
              accent
                ? 'text-[#ff9b57]'
                : 'text-white'
            }
          `}
        >
          {value}
          <span className="text-white/25">
            /{maximum}
          </span>
        </strong>
      </div>

      <span
        className="
          mt-2
          block
          truncate
          text-[9px]
          font-black
          uppercase
          tracking-[0.08em]
          text-white/40
        "
        title={label}
      >
        {label}
      </span>

      {detail && (
        <span
          className="
            mt-1
            block
            truncate
            text-[9px]
            text-white/25
          "
          title={detail}
        >
          {detail}
        </span>
      )}

      <div
        className="
          mt-2
          h-1.5
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

function WingedLightSection() {
  const {
    mapCollected,
    mapMaximum,
    specialCollected,
    specialMaximum,
    orbitWingedLights,
    orbitMaximum,
    totalCollectedWingedLights,
    totalCollectibleWingedLights,
    totalWingedLightPercentage,
    regularWingBuffs,
    regularWingBuffMaximum,
    regularWingBuffPercentage,
    seasonalWingBuffs,
    seasonalWingBuffMaximum,
    seasonalWingBuffPercentage,
  } = useWingedLightProgress()

  return (
    <section
      id="winged-lights"
      aria-labelledby="winged-light-title"
      className="
        w-full
        scroll-mt-24
        px-2
        sm:px-4

        lg:flex
        lg:min-h-[calc(100svh-4rem)]
        lg:items-center
        lg:py-6
      "
    >
      <div
        className="
          relative
          isolate
          my-6
          flex
          w-full
          flex-col
          overflow-hidden
          rounded-[1.5rem]
          border
          border-[#fe7f2d]/20
          bg-[#102a37]
          text-white
          shadow-[0_24px_70px_rgba(0,0,0,0.28)]

          sm:my-8
          sm:rounded-[2rem]

          lg:my-0
          lg:min-h-[calc(100svh-7rem)]
        "
      >
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_85%_15%,_rgba(254,127,45,0.18),_transparent_30%),radial-gradient(circle_at_10%_90%,_rgba(71,149,180,0.14),_transparent_34%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            border
            border-[#fe7f2d]/10
          "
        />

        <div
          className="
            relative
            z-10
            grid
            gap-6
            p-4

            sm:p-6

            lg:grid-cols-[minmax(0,1.08fr)_minmax(17rem,0.92fr)]
            lg:items-start
            lg:gap-5
            lg:p-5

            xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]
            xl:items-center
            xl:gap-8
            xl:p-6
          "
        >
          {/* Main information */}
          <div className="min-w-0">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#fe7f2d]/20
                bg-[#fe7f2d]/10
                px-3
                py-1.5
                text-[10px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#ff9b57]

                sm:text-xs
              "
            >
              <SparklesIcon
                aria-hidden="true"
                className="h-4 w-4"
              />

              Wing progression guide
            </div>

            <h2
              id="winged-light-title"
              className="
                mt-4
                max-w-3xl
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-white

                sm:text-4xl
                lg:text-[2.2rem]
                lg:leading-[1.08]
                xl:text-[2.75rem]
                2xl:text-5xl
              "
            >
              Collect light. Strengthen your cape. Fly higher.
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

                  lg:text-sm
                  lg:leading-6

                  xl:text-base
                  xl:leading-7
              "
            >
              Winged Lights increase your Wing Power and Wing
              Level. You can strengthen your cape by collecting
              Winged Lights throughout the Sky Kingdom and by
              purchasing permanent Wing Buffs from Regular and
              Traveling Spirits.
            </p>

            <div
              className="mt-5 grid gap-3 sm:grid-cols-3">
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-3
                  lg:p-3
                "
              >
                <MapPinIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-[#fe7f2d]"
                />

                <p className="mt-2 text-xl font-black text-white lg:text-2xl">
                  {WL_COUNT}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-white/40">
                  Map Winged Lights
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-4

                  lg:p-3
                "
              >
                <ShieldCheckIcon
                  aria-hidden="true"
                  className="
                    h-6
                    w-6
                    text-[#fe7f2d]

                    lg:h-5
                    lg:w-5
                  "
                />

                <p className="mt-3 text-2xl font-black text-white lg:mt-2 lg:text-xl">
                  {WB_REGULAR_SPIRITS +
                    WB_TRAVELING_SPIRITS}
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-white/40">
                  Spirit Wing Buffs
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-[#fe7f2d]/25
                  bg-[#fe7f2d]/10
                  p-4

                  lg:p-3
                "
              >
                <SparklesIcon
                  aria-hidden="true"
                  className="
                    h-6
                    w-6
                    text-[#fe7f2d]

                    lg:h-5
                    lg:w-5
                  "
                />

                <p className="mt-3 text-2xl font-black text-[#ff9b57] lg:mt-2 lg:text-xl">
                  {TOTAL_WL_COUNT}
                </p>

                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-white/45">
                  Maximum Total
                </p>
              </div>
            </div>


            <div
              className="
                mt-4
                rounded-2xl
                border
                border-[#fe7f2d]/20
                bg-[#071820]/40
                p-3
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-2

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.13em]
                      text-[#ff9b57]
                    "
                  >
                    <CheckBadgeIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                    />

                    Your tracked progress
                  </p>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      text-white/35
                    "
                  >
                    Saved locally on this browser.
                  </p>
                </div>

                <span
                  className="
                    w-fit
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.035]
                    px-2.5
                    py-1
                    text-[9px]
                    font-bold
                    text-white/40
                  "
                >
                  Updates from guide checkboxes
                </span>
              </div>

              <div
                className="
                  mt-3
                  grid
                  gap-2

                  sm:grid-cols-3
                "
              >
                <TrackedProgressCard
                  Icon={MapPinIcon}
                  label="Collected Winged Lights"
                  value={
                    totalCollectedWingedLights
                  }
                  maximum={
                    totalCollectibleWingedLights
                  }
                  percentage={
                    totalWingedLightPercentage
                  }
                  detail={
                    `${mapCollected}/${mapMaximum} maps · ${specialCollected}/${specialMaximum} Shattering Void · ${orbitWingedLights}/${orbitMaximum} Orbit`
                  }
                />

                <TrackedProgressCard
                  Icon={ShieldCheckIcon}
                  label="Regular Spirit Buffs"
                  value={regularWingBuffs}
                  maximum={regularWingBuffMaximum}
                  percentage={regularWingBuffPercentage}
                />

                <TrackedProgressCard
                  Icon={SparklesIcon}
                  label="Seasonal / Traveling Buffs"
                  value={seasonalWingBuffs}
                  maximum={seasonalWingBuffMaximum}
                  percentage={seasonalWingBuffPercentage}
                  accent
                />
              </div>
            </div>

          </div>

          {/* Image and platform totals */}
          <div className="min-w-0">
            <div
              className="
                relative
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#071820]/65
                p-4

                sm:p-5
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-x-10
                  top-4
                  h-48
                  rounded-full
                  bg-[#fe7f2d]/10
                  blur-3xl
                "
              />

              <LazyLoadImage
                src={WINGED_LIGHT}
                alt="Winged Light from Sky: Children of the Light"
                effect="opacity"
                className="
                  relative
                  z-10
                  mx-auto
                  h-48
                  w-full
                  object-contain

                  sm:h-56
                  lg:h-44
                  xl:h-[clamp(12rem,24vh,15rem)]
                  2xl:h-[clamp(13rem,26vh,17rem)]
                "
              />

              <div
                className="
                  relative
                  z-10
                  mt-4
                  grid
                  grid-cols-3
                  gap-2
                "
              >
                {PLATFORM_TOTALS.map((platform) => (
                  <div
                    key={platform.id}
                    className="
                      min-w-0
                      rounded-xl
                      border
                      border-white/10
                      bg-[#102a37]/85
                      px-2
                      py-2
                      text-center
                      backdrop-blur-md

                      sm:px-3
                    "
                  >
                    <span
                      className="block text-lg font-black text-[#ff9b57] lg:text-xl">
                      {platform.value}
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        truncate
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-white/40

                        sm:text-[10px]
                      "
                      title={platform.platform}
                    >
                      {platform.platform}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                mt-4
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center
                sm:justify-end
              "
            >
              <Link
                to="/winged-lights"
                className="
                  group
                  order-1
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

                  sm:order-2
                  sm:w-fit
                "
              >
                 Winged Light locations

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
                  order-2
                  text-center
                  text-xs
                  text-white/40

                  sm:order-1
                  sm:text-right
                "
              >
                Counts updated on {WL_COUNT_DATE_UPDATED}
              </span>
            </div>
          </div>
        </div>

        {/* Count breakdown */}
        <div
          className="
            relative
            z-10
            border-t
            border-white/10
            bg-[#071820]/45
            p-4

            sm:p-5

            lg:shrink-0
            lg:px-5
            lg:py-4

            xl:px-6
            xl:py-5
          "
        >
          <div
            className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#ff9b57]

                  sm:text-sm
                "
              >
                Winged Light breakdown
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-white/45

                  sm:text-base

                  lg:hidden

                  xl:block
                "
              >
                Sources that contribute to your maximum Wing
                Level.
              </p>
            </div>

            <div
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
                py-2
                text-xs
                text-white/55
              "
            >
              <GlobeAltIcon
                aria-hidden="true"
                className="h-4 w-4 text-[#fe7f2d]"
              />

              Seven realms and seasonal areas
            </div>
          </div>

          <div
            className="
              grid
              items-stretch
              gap-2

              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {SOURCE_DETAILS.map((source) => (
              <article
                key={source.id}
                className="
                  group
                  flex
                  h-full
                  min-w-0
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-3
                  transition
                  duration-300

                  hover:border-[#fe7f2d]/30
                  hover:bg-white/[0.06]

                  lg:block
                  lg:p-2.5

                  xl:p-3
                "
              >
                <span
                  className="
                    grid
                    h-10
                    w-10
                    shrink-0
                    place-items-center
                    rounded-xl
                    bg-[#fe7f2d]/10
                    text-base
                    font-black
                    text-[#ff9b57]

                    lg:h-9
                    lg:w-9

                    xl:h-11
                    xl:w-11
                  "
                >
                  {source.value}
                </span>

                <span className="min-w-0">
                  <span
                    className="
                      block
                      truncate
                      text-xs
                      font-black
                      text-white

                      lg:mt-2
                      lg:text-[11px]

                      xl:text-sm
                    "
                    title={source.label}
                  >
                    <span className="xl:hidden">
                      {source.shortLabel}
                    </span>

                    <span className="hidden xl:inline">
                      {source.label}
                    </span>
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[10px]
                      leading-4
                      text-white/40

                      lg:hidden

                      xl:block
                      xl:text-xs
                      xl:leading-5
                    "
                  >
                    {source.description}
                  </span>
                </span>
              </article>
            ))}
          </div>

          <div
            className="
              mt-3
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

              sm:px-5
              sm:py-3
            "
          >
            <span>
              <span className="block text-xs font-black uppercase tracking-[0.16em] text-white/45">
                Maximum Winged Lights
              </span>

              <span className="mt-1 block text-sm text-white/60">
                Mobile, Nintendo Switch and supported platforms
              </span>
            </span>

            <strong
              className="shrink-0 text-3xl font-black text-[#ff9b57]">
              {TOTAL_WL_COUNT}
            </strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WingedLightSection