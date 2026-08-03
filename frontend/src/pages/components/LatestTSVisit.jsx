import React, {
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  ArrowTopRightOnSquareIcon,
  CalendarDaysIcon,
  ClockIcon,
  InformationCircleIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { allSeasons } from '../../data/seasons'
import * as skyConstants from '../../exports/constants'
import useSkyEvents from '../../hooks/useSkyEvents'
import {
  SKY_TIME_ZONE,
  formatDateTimeInZone,
  zonedDateTimeToDate,
} from '../../utils/skyEvents'

import SpiritCardContainer from './SpiritCardContainer'

const {
  travelingSpirit,
  groupTs,
  travelingSpiritDate,
  travelingSpiritHint,
  travelingSpiritHintImage,
  travelingSpiritHintUrl,
  travelingSpiritStartDate,
  travelingSpiritEndDate,
  travellingSpiritSeasonId,
  travellingSpiritId,
} = skyConstants

const DEFAULT_HINT_URL =
  'https://www.facebook.com/photo.php?fbid=1433003992205632&set=a.606494871523219&type=3&mibextid=wwXIfr'

const MONTH_INDEX = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
}

function parseIsoDate(value) {
  if (typeof value !== 'string') {
    return null
  }

  const match = value
    .trim()
    .match(/^(\d{4})-(\d{2})-(\d{2})$/)

  if (!match) {
    return null
  }

  return {
    year: Number(match[1]),
    month: Number(match[2]) - 1,
    day: Number(match[3]),
  }
}

function createDateParts(
  monthName,
  day,
  year
) {
  const month =
    MONTH_INDEX[
      String(monthName).toLowerCase()
    ]

  if (
    month === undefined ||
    !Number.isInteger(Number(day)) ||
    !Number.isInteger(Number(year))
  ) {
    return null
  }

  return {
    year: Number(year),
    month,
    day: Number(day),
  }
}

/**
 * Fallback parser for common display formats:
 *
 * August 6, 2026
 * August 6-10, 2026
 * August 6 to 10, 2026
 * August 6, 2026 - August 10, 2026
 */
function parseDisplayDateRange(value) {
  if (typeof value !== 'string') {
    return {
      start: null,
      end: null,
    }
  }

  const normalized = value
    .replace(/^[A-Za-z]+,\s*/, '')
    .replace(/[–—]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()

  const fullRange = normalized.match(
    /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})\s*(?:-|to)\s*([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/i
  )

  if (fullRange) {
    return {
      start: createDateParts(
        fullRange[1],
        fullRange[2],
        fullRange[3]
      ),
      end: createDateParts(
        fullRange[4],
        fullRange[5],
        fullRange[6]
      ),
    }
  }

  const sameMonthRange = normalized.match(
    /^([A-Za-z]+)\s+(\d{1,2})\s*(?:-|to)\s*(\d{1,2}),?\s+(\d{4})$/i
  )

  if (sameMonthRange) {
    return {
      start: createDateParts(
        sameMonthRange[1],
        sameMonthRange[2],
        sameMonthRange[4]
      ),
      end: createDateParts(
        sameMonthRange[1],
        sameMonthRange[3],
        sameMonthRange[4]
      ),
    }
  }

  const singleDate = normalized.match(
    /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/i
  )

  if (singleDate) {
    return {
      start: createDateParts(
        singleDate[1],
        singleDate[2],
        singleDate[3]
      ),
      end: null,
    }
  }

  return {
    start: null,
    end: null,
  }
}

/**
 * Converts the configured Sky calendar date into one absolute
 * reset timestamp. Sky reset is always midnight in
 * America/Los_Angeles; the visitor only sees a local conversion
 * of that same instant.
 */
function createResetTimestamp(dateParts) {
  if (!dateParts) {
    return null
  }

  return zonedDateTimeToDate(
    {
      year: dateParts.year,
      month: dateParts.month + 1,
      day: dateParts.day,
      hour: 0,
      minute: 0,
      second: 0,
    },
    SKY_TIME_ZONE
  )
}

function getVisitSchedule() {
  const fallback =
    parseDisplayDateRange(
      travelingSpiritDate
    )

  const startParts =
    parseIsoDate(
      travelingSpiritStartDate
    ) || fallback.start

  const endParts =
    parseIsoDate(
      travelingSpiritEndDate
    ) || fallback.end

  return {
    startAt:
      createResetTimestamp(startParts),
    endAt:
      createResetTimestamp(endParts),
  }
}

function getCountdownParts(
  milliseconds
) {
  const totalSeconds = Math.max(
    0,
    Math.floor(milliseconds / 1000)
  )

  const days = Math.floor(
    totalSeconds / 86400
  )

  const hours = Math.floor(
    (totalSeconds % 86400) / 3600
  )

  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  )

  const seconds = totalSeconds % 60

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}

function getVisitStatus({
  now,
  startAt,
  endAt,
}) {
  const currentMs = now.getTime()

  if (
    startAt &&
    currentMs < startAt.getTime()
  ) {
    return 'upcoming'
  }

  if (
    endAt &&
    currentMs >= endAt.getTime()
  ) {
    return 'ended'
  }

  if (
    startAt &&
    currentMs >= startAt.getTime()
  ) {
    if (
      endAt &&
      currentMs < endAt.getTime()
    ) {
      return 'active'
    }

    return travelingSpirit
      ? 'active'
      : 'ended'
  }

  return travelingSpirit
    ? 'active'
    : 'upcoming'
}

function getStatusStyles(status) {
  if (status === 'active') {
    return {
      label: 'Visiting now',
      dot: 'bg-emerald-400',
      badge:
        'border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
    }
  }

  if (status === 'ended') {
    return {
      label: 'Visit ended',
      dot: 'bg-white/35',
      badge:
        'border-white/10 bg-white/[0.04] text-white/55',
    }
  }

  return {
    label: 'Arriving soon',
    dot: 'bg-[#fe7f2d]',
    badge:
      'border-[#fe7f2d]/25 bg-[#fe7f2d]/10 text-[#ffc394]',
  }
}

function CountdownUnit({
  value,
  label,
}) {
  return (
    <div
      className="
        min-w-0
        rounded-xl
        border
        border-white/10
        bg-[#071820]/65
        px-2
        py-3
        text-center

        sm:rounded-2xl
        sm:px-3
        sm:py-3
      "
    >
      <strong
        className="
          block
          text-xl
          font-black
          leading-none
          text-white

          sm:text-2xl

          xl:text-3xl
        "
      >
        {String(value).padStart(2, '0')}
      </strong>

      <span
        className="
          mt-1.5
          block
          text-[8px]
          font-black
          uppercase
          tracking-[0.12em]
          text-white/35

          sm:text-[10px]
        "
      >
        {label}
      </span>
    </div>
  )
}

function VisitCountdown({
  now,
  status,
  startAt,
  endAt,
  localTimeLabel,
  localDateLabel,
  visitorTimeZone,
  visitorTimeZoneLabel,
  nextResetTimeLabel,
  nextResetDateLabel,
  pacificLabel,
}) {
  const target =
    status === 'upcoming'
      ? startAt
      : status === 'active'
        ? endAt
        : null

  const targetDifference = target
    ? target.getTime() -
      now.getTime()
    : 0

  const countdown =
    getCountdownParts(
      targetDifference
    )

  const countdownLabel =
    status === 'active'
      ? 'Visit ends in'
      : status === 'upcoming'
        ? 'Visit starts in'
        : 'Schedule completed'

  return (
    <aside
      className="
        rounded-[1.5rem]
        border
        border-white/10
        bg-[#102a37]/90
        p-4
        text-white
        shadow-xl
        shadow-black/15

        sm:rounded-[1.75rem]
        sm:p-4
      "
    >
      <div className="flex items-start justify-between gap-3">
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
            Your local countdown
          </p>

          <h3
            className="
              mt-1
              text-lg
              font-black
              text-white

              sm:text-xl
            "
          >
            {countdownLabel}
          </h3>
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
          <ClockIcon
            aria-hidden="true"
            className="h-5 w-5"
          />
        </span>
      </div>

      {target ? (
        <div className="mt-3 grid grid-cols-4 gap-2">
          <CountdownUnit
            value={countdown.days}
            label="Days"
          />

          <CountdownUnit
            value={countdown.hours}
            label="Hours"
          />

          <CountdownUnit
            value={countdown.minutes}
            label="Minutes"
          />

          <CountdownUnit
            value={countdown.seconds}
            label="Seconds"
          />
        </div>
      ) : (
        <div
          className="
            mt-4
            rounded-2xl
            border
            border-white/10
            bg-[#071820]/55
            px-4
            py-5
            text-sm
            text-white/50
          "
        >
          Add an exact start and end date
          to enable the countdown.
        </div>
      )}

      <div
        className="
          mt-3
          grid
          grid-cols-2
          gap-2
        "
      >
        <div
          title={visitorTimeZone}
          className="
            rounded-xl
            border
            border-white/10
            bg-white/[0.035]
            px-3
            py-2.5
          "
        >
          <span
            className="
              block
              text-[8px]
              font-black
              uppercase
              tracking-wider
              text-white/30

              sm:text-[9px]
            "
          >
            Current local time
          </span>

          <time
            dateTime={now.toISOString()}
            className="
              mt-1
              block
              text-xs
              font-black
              text-white

              sm:text-sm
            "
          >
            {localTimeLabel}
          </time>

          <span className="mt-0.5 block text-[9px] text-white/35 sm:text-[10px]">
            {localDateLabel}
            {' · '}
            {visitorTimeZoneLabel}
          </span>
        </div>

        <div
          className="
            rounded-xl
            border
            border-[#fe7f2d]/20
            bg-[#fe7f2d]/10
            px-3
            py-2.5
          "
        >
          <span
            className="
              block
              text-[8px]
              font-black
              uppercase
              tracking-wider
              text-[#ffc394]/70

              sm:text-[9px]
            "
          >
            Next Sky reset
          </span>

          <span
            className="
              mt-1
              block
              text-xs
              font-black
              text-white

              sm:text-sm
            "
          >
            {nextResetTimeLabel}
          </span>

          <span className="mt-0.5 block text-[9px] text-white/35 sm:text-[10px]">
            {nextResetDateLabel}
            {' · '}
            midnight {pacificLabel}
          </span>
        </div>
      </div>
    </aside>
  )
}

function VisitInfographic({
  Icon,
  label,
  value,
}) {
  return (
    <div
      className="
        min-w-0
        rounded-2xl
        border
        border-white/10
        bg-white/[0.035]
        p-3

        sm:p-4
      "
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className="
            grid
            h-9
            w-9
            shrink-0
            place-items-center
            rounded-xl
            bg-[#fe7f2d]/10
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
        className="
          mt-3
          block
          truncate
          text-sm
          font-black
          text-white

          sm:text-base
        "
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
          tracking-[0.12em]
          text-white/35
        "
      >
        {label}
      </span>
    </div>
  )
}

const LatestTSVisit = () => {
  const {
    now,
    localTimeLabel,
    localDateLabel,
    visitorTimeZone,
    visitorTimeZoneLabel,
    nextResetTimeLabel,
    nextResetDateLabel,
    pacificLabel,
  } = useSkyEvents()

  const [checkedSpirits, setCheckedSpirits] =
    useState(() => {
      if (
        typeof window === 'undefined'
      ) {
        return {}
      }

      try {
        const saved =
          window.localStorage.getItem(
            'checkedSpirits'
          )

        return saved
          ? JSON.parse(saved)
          : {}
      } catch {
        return {}
      }
    })

  useEffect(() => {
    try {
      window.localStorage.setItem(
        'checkedSpirits',
        JSON.stringify(
          checkedSpirits
        )
      )
    } catch {
      // The checklist still works in memory
      // when storage is unavailable.
    }
  }, [checkedSpirits])

  const seasonIndex =
    Number(
      travellingSpiritSeasonId
    ) - 1

  const season =
    allSeasons?.[seasonIndex]

  const {
    id,
    name = 'Unknown Season',
    icon_route,
    season_spirits = [],
  } = season || {}

  const singleTsSpirit =
    season_spirits?.[
      Number(travellingSpiritId)
    ]

  const schedule = useMemo(
    () => getVisitSchedule(),
    []
  )

  const status = getVisitStatus({
    now,
    ...schedule,
  })

  const statusStyles =
    getStatusStyles(status)

  const spiritCount = groupTs
    ? season_spirits.length
    : singleTsSpirit
      ? 1
      : 0

  const handleCheckboxChange = (
    event
  ) => {
    const {
      name: checkboxName,
      checked,
    } = event.target

    setCheckedSpirits(
      (previous) => ({
        ...previous,
        [checkboxName]: checked,
      })
    )
  }

  const scheduleRangeLabel =
    schedule.startAt &&
    schedule.endAt
      ? `${formatDateTimeInZone(
          schedule.startAt,
          visitorTimeZone,
          {
            includeWeekday: true,
          }
        )} – ${formatDateTimeInZone(
          schedule.endAt,
          visitorTimeZone,
          {
            includeWeekday: true,
          }
        )}`
      : travelingSpiritDate ||
        'Schedule not configured'

  const announcement =
    status === 'active'
      ? groupTs
        ? 'A group of Traveling Spirits is visiting Sky now.'
        : 'A Traveling Spirit is visiting Sky now.'
      : status === 'ended'
        ? 'The scheduled Traveling Spirit visit has ended.'
        : groupTs
          ? 'A group of Traveling Spirits will return at the scheduled reset.'
          : 'A Traveling Spirit will return at the scheduled reset.'

  return (
    <section
      id="traveling-spirit"
      aria-labelledby="latest-ts-title"
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
            bg-[#071820]/85
            text-white
            shadow-[0_24px_70px_rgba(0,0,0,0.28)]

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
          bg-[radial-gradient(circle_at_88%_12%,_rgba(254,127,45,0.17),_transparent_30%),radial-gradient(circle_at_8%_88%,_rgba(57,139,174,0.16),_transparent_34%)]
        "
      />

      <div
        className="
          grid
          gap-6
          p-4

          sm:p-6

          lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.62fr)]
          lg:items-center
          lg:gap-5
          lg:p-5
        "
      >
        <div className="min-w-0">
          <div
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#fe7f2d]/20
              bg-[#fe7f2d]/10
              px-3
              py-1.5
              text-[9px]
              font-black
              uppercase
              tracking-[0.16em]
              text-[#ffc394]

              sm:text-[10px]
            "
          >
            <CalendarDaysIcon
              aria-hidden="true"
              className="h-4 w-4"
            />

            Traveling Spirit schedule
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-2.5

              sm:grid-cols-4
              sm:gap-3
            "
          >
            <VisitInfographic
              Icon={CalendarDaysIcon}
              label="Visit schedule"
              value={
                travelingSpiritDate ||
                'Not set'
              }
            />

            <VisitInfographic
              Icon={UserGroupIcon}
              label="Visit type"
              value={
                groupTs
                  ? 'Spirit Group'
                  : 'Single Spirit'
              }
            />

            <VisitInfographic
              Icon={SparklesIcon}
              label="Spirit count"
              value={spiritCount}
            />

            <VisitInfographic
              Icon={InformationCircleIcon}
              label="Season"
              value={name}
            />
          </div>

          <div
            className="
              mt-3
              rounded-2xl
              border
              border-white/10
              bg-[#102a37]/75
              p-3
              sm:p-4
            "
          >
            <div className="flex items-start gap-3">
              <span
                className="
                  grid
                  h-10
                  w-10
                  shrink-0
                  place-items-center
                  rounded-xl
                  bg-[#fe7f2d]/10
                  text-[#fe7f2d]
                "
              >
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </span>

              <div className="min-w-0">
                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-white/35

                    sm:text-[10px]
                  "
                >
                  Exact schedule in your timezone
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    font-bold
                    leading-6
                    text-white/75

                    sm:text-base
                  "
                >
                  {scheduleRangeLabel}
                </p>

                <p
                  className="
                    mt-1
                    text-[10px]
                    leading-5
                    text-white/35

                    sm:text-xs
                  "
                  title={visitorTimeZone}
                >
                  Converted automatically to{' '}
                  {visitorTimeZoneLabel}. Sky’s
                  source schedule remains
                  midnight Pacific time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <VisitCountdown
          now={now}
          status={status}
          startAt={schedule.startAt}
          endAt={schedule.endAt}
          localTimeLabel={localTimeLabel}
          localDateLabel={localDateLabel}
          visitorTimeZone={visitorTimeZone}
          visitorTimeZoneLabel={visitorTimeZoneLabel}
          nextResetTimeLabel={nextResetTimeLabel}
          nextResetDateLabel={nextResetDateLabel}
          pacificLabel={pacificLabel}
        />
      </div>

      <div
        className="
          relative
          z-10
          border-t
          border-white/10
          bg-[#102a37]/55
          p-4

          sm:p-5

          lg:p-5
        "
      >
        {status === 'active' ? (
          <div
            className={
              groupTs
                ? ''
                : 'lg:grid lg:grid-cols-[minmax(20rem,0.72fr)_minmax(18rem,1fr)] lg:items-center lg:gap-6'
            }
          >
            <div
              className={
                groupTs
                  ? 'mb-5'
                  : 'mb-5 lg:mb-0'
              }
            >
              <div
                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-3
                  py-1.5
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.15em]

                  sm:text-[10px]

                  ${statusStyles.badge}
                `}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className={`
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      opacity-60

                      ${statusStyles.dot}
                    `}
                  />

                  <span
                    className={`
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full

                      ${statusStyles.dot}
                    `}
                  />
                </span>

                {statusStyles.label}
              </div>

              <h2
                id="latest-ts-title"
                className="
                  mt-3
                  max-w-xl
                  text-2xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white

                  sm:text-3xl

                  lg:text-[2rem]

                  xl:text-4xl
                "
              >
                Latest Traveling Spirit Visit
              </h2>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/60

                  sm:text-base
                "
              >
                {announcement}
              </p>

              <div
                className="
                  mt-4
                  border-l-2
                  border-[#fe7f2d]
                  pl-3
                "
              >
                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.16em]
                    text-[#ff9b57]

                    sm:text-[10px]
                  "
                >
                  Currently available
                </p>

                <h3
                  className="
                    mt-1
                    text-lg
                    font-black
                    text-white

                    sm:text-xl
                  "
                >
                  {groupTs
                    ? 'Visiting Spirit Group'
                    : 'Featured Traveling Spirit'}
                </h3>
              </div>

              <span
                className="
                  mt-3
                  block
                  text-xs
                  leading-5
                  text-white/40

                  sm:text-sm
                "
              >
                Checklist progress is saved
                locally on this device.
              </span>
            </div>

            {season ? (
              <div
                className="
                  flex
                  min-w-0
                  flex-wrap
                  justify-center
                  gap-3

                  lg:items-center
                "
              >
                {groupTs ? (
                  season_spirits.map(
                    (spirit) => (
                      <SpiritCardContainer
                        {...spirit}
                        icon_route={
                          icon_route
                        }
                        key={
                          spirit.spirit_id
                        }
                        season={name}
                        checkedSpirits={
                          checkedSpirits
                        }
                        handleCheckboxChange={
                          handleCheckboxChange
                        }
                      />
                    )
                  )
                ) : singleTsSpirit ? (
                  <SpiritCardContainer
                    {...singleTsSpirit}
                    icon_route={icon_route}
                    key={
                      singleTsSpirit.spirit_id ||
                      id
                    }
                    season={name}
                    checkedSpirits={
                      checkedSpirits
                    }
                    handleCheckboxChange={
                      handleCheckboxChange
                    }
                  />
                ) : (
                  <div
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-dashed
                      border-white/10
                      bg-white/[0.025]
                      px-4
                      py-10
                      text-center
                      text-sm
                      text-white/45
                    "
                  >
                    The selected spirit could
                    not be found in the season
                    data.
                  </div>
                )}
              </div>
            ) : (
              <div
                className="
                  rounded-2xl
                  border
                  border-dashed
                  border-white/10
                  bg-white/[0.025]
                  px-4
                  py-10
                  text-center
                  text-sm
                  text-white/45
                "
              >
                The configured season could not
                be found.
              </div>
            )}
          </div>
        ) : status === 'upcoming' ? (
          <div
            className="
              grid
              gap-5

              lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.75fr)]
              lg:items-center
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
                Upcoming visit
              </p>

              <h2
                id="latest-ts-title"
                className="
                  mt-2
                  text-xl
                  font-black
                  text-white

                  sm:text-3xl
                "
              >
                A new Traveling Spirit is on
                the way.
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-7
                  text-white/55

                  sm:text-base
                "
              >
                The countdown uses Sky’s
                Pacific reset as the source of
                truth, then displays the exact
                start and end time in your
                browser timezone.
              </p>
            </div>

            {travelingSpiritHint &&
            travelingSpiritHintImage ? (
              <a
                href={
                  travelingSpiritHintUrl ||
                  DEFAULT_HINT_URL
                }
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#071820]
                  shadow-xl
                  shadow-black/20

                  focus:outline-none
                  focus-visible:ring-4
                  focus-visible:ring-[#fe7f2d]/25
                "
              >
                <LazyLoadImage
                  src={
                    travelingSpiritHintImage
                  }
                  alt="Traveling Spirit hint"
                  effect="blur"
                  className="
                    aspect-video
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#071820]/90
                    via-transparent
                    to-transparent
                  "
                />

                <span
                  className="
                    absolute
                    bottom-3
                    right-3
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#fe7f2d]
                    px-3
                    py-2
                    text-xs
                    font-black
                    text-[#233d4d]
                  "
                >
                  View official hint

                  <ArrowTopRightOnSquareIcon
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </span>
              </a>
            ) : (
              <div
                className="
                  rounded-2xl
                  border
                  border-dashed
                  border-white/10
                  bg-white/[0.025]
                  px-5
                  py-10
                  text-center
                "
              >
                <SparklesIcon
                  aria-hidden="true"
                  className="
                    mx-auto
                    h-9
                    w-9
                    text-[#fe7f2d]/40
                  "
                />

                <p
                  className="
                    mt-3
                    text-sm
                    font-bold
                    text-white/55
                  "
                >
                  No hint has been released yet.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              px-5
              py-10
              text-center
            "
          >
            <ClockIcon
              aria-hidden="true"
              className="
                mx-auto
                h-9
                w-9
                text-white/20
              "
            />

            <h2
              id="latest-ts-title"
              className="
                mt-3
                text-lg
                font-black
                text-white/65
              "
            >
              This Traveling Spirit visit has
              ended.
            </h2>

            <p
              className="
                mt-2
                text-sm
                text-white/40
              "
            >
              Update the next visit schedule
              in your constants when it is
              announced.
            </p>
          </div>
        )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestTSVisit