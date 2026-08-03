import React from 'react'
import {
  CheckBadgeIcon,
  GiftIcon,
  MapPinIcon,
  SparklesIcon,
  TrashIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

import useSpiritProgress from '../../hooks/useSpiritProgress'

function ProgressStat({
  Icon,
  label,
  value,
  total,
}) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-4
      "
    >
      <span
        className="
          grid
          h-10
          w-10
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

      <strong
        className="
          mt-3
          block
          text-2xl
          font-black
          text-white
        "
      >
        {value}

        {typeof total ===
          'number' && (
          <span
            className="
              ml-1
              text-sm
              text-white/30
            "
          >
            / {total}
          </span>
        )}
      </strong>

      <span
        className="
          mt-1
          block
          text-[9px]
          font-black
          uppercase
          tracking-[0.14em]
          text-white/35
        "
      >
        {label}
      </span>
    </article>
  )
}

function SpiritProgressItem({
  spirit,
}) {
  const subtitle = [
    spirit.kind === 'regular'
      ? 'Regular Spirit'
      : spirit.kind ===
          'seasonal'
        ? 'Seasonal Spirit'
        : spirit.kind ===
            'collectible'
          ? 'Aviary Collectible'
          : 'Saved Spirit',
    spirit.season,
    spirit.realm,
  ]
    .filter(Boolean)
    .join(' · ')

  return (
    <article
      className="
        flex
        min-w-0
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-[#102a37]/60
        p-3
      "
    >
      <span
        className="
          grid
          h-11
          w-11
          shrink-0
          place-items-center
          overflow-hidden
          rounded-xl
          border
          border-white/10
          bg-[#071820]
        "
      >
        {spirit.image ? (
          <img
            src={spirit.image}
            alt=""
            loading="lazy"
            className="
              h-full
              w-full
              object-contain
              p-1
            "
          />
        ) : (
          <CheckBadgeIcon
            aria-hidden="true"
            className="
              h-6
              w-6
              text-[#fe7f2d]
            "
          />
        )}
      </span>

      <span className="min-w-0 flex-1">
        <strong
          className="
            block
            truncate
            text-sm
            font-black
            text-white
          "
          title={spirit.name}
        >
          {spirit.name}
        </strong>

        <span
          className="
            mt-1
            block
            truncate
            text-[10px]
            text-white/40
          "
          title={subtitle}
        >
          {subtitle}
        </span>
      </span>

      <span
        className="
          h-2
          w-2
          shrink-0
          rounded-full
          bg-[#fe7f2d]
        "
      />
    </article>
  )
}

export default function SpiritProgressOverview() {
  const {
    checkedSpirits,
    totalChecked,
    regularChecked,
    seasonalChecked,
    collectibleChecked,
    totalSpirits,
    totalRegularSpirits,
    totalSeasonalSpirits,
    totalCollectibleSpirits,
    completionPercentage,
    resetSpiritProgress,
  } = useSpiritProgress()

  const handleResetSpirits = () => {
    if (totalChecked === 0) {
      return
    }

    const confirmed =
      window.confirm(
        'Reset all Spirit progress? This will uncheck every Regular Spirit, Seasonal Spirit, and Aviary Village collectible saved on this browser. Other website settings will not be removed.'
      )

    if (!confirmed) {
      return
    }

    resetSpiritProgress()
  }

  return (
    <section
      id="spirit-progress"
      aria-labelledby="spirit-progress-title"
      className="
        w-full
        scroll-mt-24
        px-3
        py-6

        sm:px-5
        sm:py-8
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[1.75rem]
          border
          border-[#fe7f2d]/20
          bg-[#071820]/90
          p-4
          text-white
          shadow-[0_24px_70px_rgba(0,0,0,0.25)]

          sm:p-6

          lg:p-7
        "
      >
        <div
          className="
            grid
            gap-6

            lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]
            lg:items-stretch
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
                tracking-[0.17em]
                text-[#ffc394]
              "
            >
              <CheckBadgeIcon
                aria-hidden="true"
                className="h-4 w-4"
              />

              Saved on this browser
            </div>

            <h2
              id="spirit-progress-title"
              className="
                mt-4
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-white

                sm:text-4xl
              "
            >
              Your Spirit Journey
            </h2>

            <p
              className="
                mt-3
                max-w-xl
                text-sm
                leading-6
                text-white/55
              "
            >
              Every spirit you mark as
              relived is collected here,
              including checks made from
              realm pages, season pages,
              the Traveling Spirit section,
              and Aviary Village collectibles.
            </p>

            <div
              className="
                mt-5
                grid
                grid-cols-2
                gap-2.5
              "
            >
              <ProgressStat
                Icon={CheckBadgeIcon}
                label="Spirit entries"
                value={totalChecked}
                total={totalSpirits}
              />

              <ProgressStat
                Icon={SparklesIcon}
                label="Overall completion"
                value={`${completionPercentage}%`}
              />
            </div>

            <div
              className="
                mt-2.5
                grid
                gap-2.5

                sm:grid-cols-3

                lg:grid-cols-1

                xl:grid-cols-3
              "
            >
              <ProgressStat
                Icon={MapPinIcon}
                label="Regular spirits"
                value={regularChecked}
                total={
                  totalRegularSpirits
                }
              />

              <ProgressStat
                Icon={UserGroupIcon}
                label="Seasonal spirits"
                value={seasonalChecked}
                total={
                  totalSeasonalSpirits
                }
              />

              <ProgressStat
                Icon={GiftIcon}
                label="Aviary collectibles"
                value={
                  collectibleChecked
                }
                total={
                  totalCollectibleSpirits
                }
              />
            </div>

            <div className="mt-5">
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >
                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.14em]
                    text-white/35
                  "
                >
                  Collection progress
                </span>

                <span
                  className="
                    text-xs
                    font-black
                    text-[#ff9b57]
                  "
                >
                  {totalChecked}
                  {' / '}
                  {totalSpirits}
                </span>
              </div>

              <div
                className="
                  mt-2
                  h-2
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
                    width:
                      `${completionPercentage}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="
              min-w-0
              rounded-[1.5rem]
              border
              border-white/10
              bg-[#102a37]/55
              p-4

              sm:p-5
            "
          >
            <div
              className="
                flex
                items-end
                justify-between
                gap-3
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.17em]
                    text-[#ff9b57]
                  "
                >
                  Checked spirits
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-black
                    text-white

                    sm:text-2xl
                  "
                >
                  Relived collection
                </h3>
              </div>

              <div
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-1.5
                    text-[10px]
                    font-black
                    text-white/45
                  "
                >
                  {totalChecked}
                  {' saved'}
                </span>

                <button
                  type="button"
                  onClick={
                    handleResetSpirits
                  }
                  disabled={
                    totalChecked === 0
                  }
                  aria-label="Reset all relived Spirit progress"
                  title={
                    totalChecked > 0
                      ? 'Reset Regular and Seasonal Spirit progress'
                      : 'No relived Spirit progress to reset'
                  }
                  className="
                    inline-flex
                    min-h-8
                    items-center
                    justify-center
                    gap-1.5
                    rounded-full
                    border
                    border-red-400/25
                    bg-red-400/10
                    px-3
                    py-1.5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.1em]
                    text-red-200
                    transition

                    hover:border-red-400/45
                    hover:bg-red-400/15
                    hover:text-white

                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-red-300/70

                    disabled:cursor-not-allowed
                    disabled:border-white/5
                    disabled:bg-white/[0.025]
                    disabled:text-white/20
                  "
                >
                  <TrashIcon
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  />

                  Reset
                </button>
              </div>
            </div>

            {checkedSpirits.length > 0 ? (
              <div
                className="
                  mt-4
                  grid
                  max-h-[24rem]
                  gap-2.5
                  overflow-y-auto
                  pr-1

                  sm:grid-cols-2
                "
              >
                {checkedSpirits.map(
                  (spirit) => (
                    <SpiritProgressItem
                      key={spirit.key}
                      spirit={spirit}
                    />
                  )
                )}
              </div>
            ) : (
              <div
                className="
                  mt-4
                  grid
                  min-h-56
                  place-items-center
                  rounded-2xl
                  border
                  border-dashed
                  border-white/10
                  bg-white/[0.025]
                  p-6
                  text-center
                "
              >
                <div>
                  <CheckBadgeIcon
                    aria-hidden="true"
                    className="
                      mx-auto
                      h-10
                      w-10
                      text-white/20
                    "
                  />

                  <strong
                    className="
                      mt-3
                      block
                      text-sm
                      font-black
                      text-white/55
                    "
                  >
                    No checked spirits yet
                  </strong>

                  <p
                    className="
                      mt-2
                      max-w-sm
                      text-xs
                      leading-5
                      text-white/35
                    "
                  >
                    Check a spirit or an
                    Aviary Village collectible
                    and it will appear here
                    automatically.
                  </p>
                </div>
              </div>
            )}

            <p
              className="
                mt-3
                text-[9px]
                leading-4
                text-white/25
              "
            >
              This progress remains local
              to the current browser and
              device unless it is later
              connected to an account.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
