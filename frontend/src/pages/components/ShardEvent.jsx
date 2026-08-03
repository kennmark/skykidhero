import React from 'react'
import {
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  ClockIcon,
  FireIcon,
  GlobeAltIcon,
  MapPinIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

import useShardEvent from '../../hooks/useShardEvent'
import {
  SHARD_REFERENCE_URL,
} from '../../utils/shardEvents'
import {
  formatCountdown,
} from '../../utils/skyEvents'

function InfoCard({
  Icon,
  label,
  value,
  detail,
  accent = false,
}) {
  return (
    <article
      className={`
        min-w-0
        rounded-2xl
        border
        p-3.5

        ${
          accent
            ? 'border-[#fe7f2d]/25 bg-[#fe7f2d]/10'
            : 'border-white/10 bg-white/[0.04]'
        }
      `}
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-3
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
      </div>

      <strong
        className={`
          mt-3
          block
          truncate
          text-sm
          font-black

          sm:text-base

          ${
            accent
              ? 'text-[#ff9b57]'
              : 'text-white'
          }
        `}
        title={String(value)}
      >
        {value}
      </strong>

      <span
        className="
          mt-1
          block
          text-[9px]
          font-black
          uppercase
          tracking-[0.13em]
          text-white/35
        "
      >
        {label}
      </span>

      {detail && (
        <span
          className="
            mt-1.5
            block
            truncate
            text-[10px]
            text-white/35
          "
          title={detail}
        >
          {detail}
        </span>
      )}
    </article>
  )
}

function WindowCard({
  window,
  isActive,
  isNext,
}) {
  return (
    <article
      className={`
        relative
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        p-3.5
        transition

        ${
          isActive
            ? 'border-[#fe7f2d]/55 bg-[#fe7f2d]/12'
            : isNext
              ? 'border-[#fe7f2d]/25 bg-[#fe7f2d]/5'
              : 'border-white/10 bg-white/[0.035]'
        }
      `}
    >
      {(isActive || isNext) && (
        <span
          className={`
            absolute
            right-3
            top-3
            rounded-full
            px-2
            py-1
            text-[8px]
            font-black
            uppercase
            tracking-wider

            ${
              isActive
                ? 'bg-[#fe7f2d] text-[#233d4d]'
                : 'border border-[#fe7f2d]/25 bg-[#fe7f2d]/10 text-[#ff9b57]'
            }
          `}
        >
          {isActive
            ? 'Active'
            : 'Next'}
        </span>
      )}

      <span
        className="
          text-[9px]
          font-black
          uppercase
          tracking-[0.14em]
          text-white/35
        "
      >
        {window.label}
      </span>

      <strong
        className="
          mt-2
          block
          text-sm
          font-black
          text-white

          sm:text-base
        "
      >
        {window.localStartLabel}
        {' – '}
        {window.localEndLabel}
      </strong>

      <span
        className="
          mt-1
          block
          text-[10px]
          text-white/40
        "
      >
        {window.localDateLabel}
      </span>

      <span
        className="
          mt-3
          block
          border-t
          border-white/10
          pt-2
          text-[9px]
          text-white/25
        "
      >
        Sky time:{' '}
        {window.skyStartLabel}
        {' – '}
        {window.skyEndLabel}
      </span>
    </article>
  )
}

function EmptyWindowCard() {
  return (
    <article
      className="
        grid
        min-h-32
        place-items-center
        rounded-2xl
        border
        border-dashed
        border-white/10
        bg-white/[0.025]
        p-4
        text-center
      "
    >
      <div>
        <CalendarDaysIcon
          aria-hidden="true"
          className="
            mx-auto
            h-7
            w-7
            text-white/20
          "
        />

        <p
          className="
            mt-2
            text-xs
            font-bold
            text-white/40
          "
        >
          No eruption window
        </p>
      </div>
    </article>
  )
}

export default function ShardEvent() {
  const prediction =
    useShardEvent()

  const {
    now,
    visitorTimeZone,
    visitorTimeZoneLabel,
    localTimeLabel,
    localDateLabel,
    statusId,
    statusLabel,
    statusDescription,
    typeLabel,
    isRed,
    realm,
    location,
    reward,
    memory,
    hasShard,
    windows,
    activeWindow,
    nextWindow,
    countdownLabel,
    countdownSeconds,
    activeProgress,
    nextShardDay,
    nextShardDateTimeLabel,
  } = prediction

  const ShardIcon =
    isRed
      ? FireIcon
      : SparklesIcon

  return (
    <section
      id="shard-event"
      aria-labelledby="shard-event-title"
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
            bg-[#071820]/90
            p-4
            text-white
            shadow-[0_24px_70px_rgba(0,0,0,0.3)]

            sm:rounded-[2rem]
            sm:p-6

            lg:p-8
          "
        >
          <div
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute
              inset-0
              -z-10

              ${
                isRed
                  ? 'bg-[radial-gradient(circle_at_10%_8%,_rgba(239,68,68,0.19),_transparent_30%),radial-gradient(circle_at_90%_90%,_rgba(254,127,45,0.15),_transparent_34%)]'
                  : 'bg-[radial-gradient(circle_at_10%_8%,_rgba(148,163,184,0.15),_transparent_30%),radial-gradient(circle_at_90%_90%,_rgba(42,126,164,0.15),_transparent_34%)]'
              }
            `}
          />

          <header
            className="
              flex
              flex-col
              gap-5

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-3xl">
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
                <ShardIcon
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                Live shard prediction
              </div>

              <h2
                id="shard-event-title"
                className="
                  mt-4
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white

                  sm:text-4xl

                  lg:text-5xl
                "
              >
                Shard Eruption
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
                Today’s type, realm, location,
                rewards, and eruption windows
                are calculated from the Sky
                calendar and converted to your
                local timezone.
              </p>
            </div>

            <div
              title={visitorTimeZone}
              className="
                min-w-0
                rounded-2xl
                border
                border-white/10
                bg-[#102a37]/80
                px-4
                py-3

                sm:min-w-56
              "
            >
              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-[9px]
                  font-black
                  uppercase
                  tracking-wider
                  text-white/35
                "
              >
                <GlobeAltIcon
                  aria-hidden="true"
                  className="
                    h-3.5
                    w-3.5
                    text-[#fe7f2d]
                  "
                />

                Your local time
              </span>

              <time
                dateTime={now.toISOString()}
                className="
                  mt-1
                  block
                  text-base
                  font-black
                  text-white
                "
              >
                {localTimeLabel}
              </time>

              <span
                className="
                  mt-0.5
                  block
                  truncate
                  text-[10px]
                  text-white/35
                "
              >
                {localDateLabel}
                {' · '}
                {visitorTimeZoneLabel}
              </span>
            </div>
          </header>

          <div
            className="
              mt-6
              grid
              gap-5

              lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]
              lg:items-stretch
            "
          >
            <div className="min-w-0">
              <div
                className="
                  grid
                  grid-cols-2
                  gap-2.5

                  sm:grid-cols-4
                "
              >
                <InfoCard
                  Icon={ShardIcon}
                  label="Shard type"
                  value={
                    hasShard
                      ? typeLabel
                      : 'No shard'
                  }
                  detail={
                    isRed
                      ? 'Strong eruption'
                      : 'Regular eruption'
                  }
                  accent={hasShard}
                />

                <InfoCard
                  Icon={MapPinIcon}
                  label="Realm"
                  value={realm.name}
                  detail={location}
                />

                <InfoCard
                  Icon={SparklesIcon}
                  label="Reward"
                  value={
                    reward.shortLabel
                  }
                  detail={reward.detail}
                />

                <InfoCard
                  Icon={CalendarDaysIcon}
                  label="Memory"
                  value={memory}
                  detail={
                    isRed
                      ? 'Available after cleansing'
                      : 'Black shards give wax'
                  }
                />
              </div>

              <div
                className="
                  mt-4
                  rounded-[1.5rem]
                  border
                  border-white/10
                  bg-[#102a37]/65
                  p-4

                  sm:p-5
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-3

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
                      "
                    >
                      Local eruption windows
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
                      Three daily windows
                    </h3>
                  </div>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.035]
                      px-3
                      py-1.5
                      text-[10px]
                      text-white/40
                    "
                    title={visitorTimeZone}
                  >
                    {visitorTimeZone}
                  </span>
                </div>

                <div
                  className="
                    mt-4
                    grid
                    gap-3

                    md:grid-cols-3
                  "
                >
                  {hasShard
                    ? windows.map(
                        (window) => (
                          <WindowCard
                            key={window.id}
                            window={window}
                            isActive={
                              activeWindow?.id ===
                              window.id
                            }
                            isNext={
                              nextWindow?.id ===
                              window.id
                            }
                          />
                        )
                      )
                    : [1, 2, 3].map(
                        (id) => (
                          <EmptyWindowCard
                            key={id}
                          />
                        )
                      )}
                </div>
              </div>
            </div>

            <aside
              className={`
                flex
                min-w-0
                flex-col
                rounded-[1.5rem]
                border
                p-4

                sm:p-5

                ${
                  statusId === 'active'
                    ? 'border-[#fe7f2d]/35 bg-[#fe7f2d]/10'
                    : 'border-white/10 bg-[#102a37]/65'
                }
              `}
            >
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-3
                "
              >
                <span
                  className="
                    grid
                    h-11
                    w-11
                    shrink-0
                    place-items-center
                    rounded-2xl
                    bg-[#fe7f2d]
                    text-[#233d4d]
                  "
                >
                  <ClockIcon
                    aria-hidden="true"
                    className="h-6 w-6"
                  />
                </span>

                <span
                  className={`
                    rounded-full
                    px-3
                    py-1.5
                    text-[9px]
                    font-black
                    uppercase
                    tracking-wider

                    ${
                      statusId ===
                      'active'
                        ? 'bg-[#fe7f2d] text-[#233d4d]'
                        : 'border border-white/10 bg-white/[0.04] text-white/45'
                    }
                  `}
                >
                  {statusLabel}
                </span>
              </div>

              <p
                className="
                  mt-5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-white/35
                "
              >
                {countdownLabel}
              </p>

              <strong
                className="
                  mt-2
                  block
                  text-4xl
                  font-black
                  tracking-tight
                  text-[#ff9b57]

                  sm:text-5xl
                "
              >
                {formatCountdown(
                  countdownSeconds,
                  {
                    includeHours: true,
                  }
                )}
              </strong>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-white/50
                "
              >
                {statusDescription}
              </p>

              {statusId ===
                'active' && (
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
                        tracking-wider
                        text-white/35
                      "
                    >
                      Window progress
                    </span>

                    <span
                      className="
                        text-xs
                        font-black
                        text-[#ff9b57]
                      "
                    >
                      {Math.round(
                        activeProgress
                      )}
                      %
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
                        duration-1000
                      "
                      style={{
                        width:
                          `${activeProgress}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {nextShardDay && (
                <div
                  className="
                    mt-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.035]
                    p-3.5
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    Next available shard
                  </span>

                  <strong
                    className="
                      mt-2
                      block
                      text-sm
                      font-black
                      text-white
                    "
                  >
                    {
                      nextShardDay.typeLabel
                    }
                    {' · '}
                    {
                      nextShardDay
                        .realm
                        .shortName
                    }
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-xs
                      text-white/50
                    "
                  >
                    {
                      nextShardDay.location
                    }
                  </span>

                  <span
                    className="
                      mt-2
                      block
                      text-xs
                      font-bold
                      text-[#ff9b57]
                    "
                  >
                    {
                      nextShardDateTimeLabel
                    }
                  </span>
                </div>
              )}

              <div className="mt-auto pt-5">
                <a
                  href={SHARD_REFERENCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    min-h-10
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-2.5
                    text-xs
                    font-black
                    text-white/65
                    transition

                    hover:border-[#fe7f2d]/30
                    hover:bg-[#fe7f2d]/10
                    hover:text-white

                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#fe7f2d]
                  "
                >
                  Compare with Sky Shards

                  <ArrowTopRightOnSquareIcon
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      transition-transform

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>

                <p
                  className="
                    mt-3
                    flex
                    items-start
                    gap-2
                    text-[9px]
                    leading-4
                    text-white/25
                  "
                >
                  <GlobeAltIcon
                    aria-hidden="true"
                    className="
                      mt-0.5
                      h-3.5
                      w-3.5
                      shrink-0
                    "
                  />

                  Fan-made prediction. Times
                  remain anchored to the Sky
                  calendar in Pacific time.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}