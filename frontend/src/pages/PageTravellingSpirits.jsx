import React, {
  useEffect,
  useMemo,
  useState,
} from 'react'

import { Link } from 'react-router-dom'

import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

import {
  LazyLoadImage,
} from 'react-lazy-load-image-component'

import {
  travellingSpiritHistory,
} from '../utils/travellingSpiritHistory'

import {
  allSeasons,
} from '../data/seasons'

import * as skyConstants
  from '../exports/constants'

import useSkyEvents
  from '../hooks/useSkyEvents'

import {
  SKY_TIME_ZONE,
  zonedDateTimeToDate,
} from '../utils/skyEvents'

import SpiritCardContainer
  from './components/SpiritCardContainer'


const VISITS_PER_PAGE = 10


const {
  travelingSpirit,
  groupTs,
  travelingSpiritDate,
  travelingSpiritStartDate,
  travelingSpiritEndDate,
  travellingSpiritSeasonId,
  travellingSpiritId,
} = skyConstants


const VISIT_MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
}


function VisitBadge({
  visitNo,
}) {
  if (
    visitNo === null ||
    visitNo === undefined ||
    visitNo === ''
  ) {
    return null
  }

  const isGroupVisit =
    String(visitNo)
      .toUpperCase()
      .startsWith('GV')

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-2.5
        py-1

        text-[10px]
        font-black
        uppercase
        tracking-[0.12em]

        ${
          isGroupVisit
            ? `
              border-sky-400/20
              bg-sky-400/10
              text-sky-200
            `
            : `
              border-[#fe7f2d]/25
              bg-[#fe7f2d]/10
              text-[#ffad72]
            `
        }
      `}
    >
      {isGroupVisit
        ? visitNo
        : `Visit #${visitNo}`}
    </span>
  )
}


function parseVisitDateForSort(
  value
) {
  if (
    typeof value !== 'string'
  ) {
    return 0
  }

  const match =
    value
      .trim()
      .match(
        /^([A-Za-z]{3,9})\s+(\d{1,2}),\s+(\d{4})$/
      )

  if (!match) {
    return 0
  }

  const month =
    VISIT_MONTHS[
      match[1]
        .slice(0, 3)
        .toLowerCase()
    ]

  if (
    month === undefined
  ) {
    return 0
  }

  return new Date(
    Number(match[3]),
    month,
    Number(match[2]),
    12,
    0,
    0
  ).getTime()
}


function getOtherVisits(
  visits = [],
  currentVisitDate
) {
  return [...visits]
    .filter(
      (visit) =>
        visit?.visit_date &&
        visit.visit_date !==
          currentVisitDate
    )
    .sort(
      (a, b) =>
        parseVisitDateForSort(
          b.visit_date
        ) -
        parseVisitDateForSort(
          a.visit_date
        )
    )
}


function TravellingSpiritVisitCard({
  visit,
  isLatest = false,
}) {
  const otherVisits =
    getOtherVisits(
      visit.number_of_visits,
      visit.visit_date
    )

  const previewImage =
    visit.spirit_image ||
    visit.spirit_img_url

  return (
    <article
      className="
        group
        relative
        overflow-hidden

        rounded-2xl
        border
        border-white/10
        bg-[#0b202b]/90

        shadow-lg
        shadow-black/10

        transition

        hover:-translate-y-0.5
        hover:border-[#fe7f2d]/30
        hover:shadow-xl

        sm:rounded-3xl
      "
    >
      <div
        className="
          grid
          grid-cols-[120px_minmax(0,1fr)]

          sm:grid-cols-[170px_minmax(0,1fr)]

          lg:grid-cols-[200px_minmax(0,1fr)]
        "
      >
        {/* Spirit preview */}
        <div
          className="
            relative
            flex
            min-h-[190px]
            items-center
            justify-center

            overflow-hidden

            border-r
            border-white/5

            bg-[#071820]/70

            p-3

            sm:min-h-[220px]
            sm:p-5

            lg:min-h-[230px]
          "
        >
          {/* background glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0

              bg-[radial-gradient(circle_at_center,_rgba(254,127,45,0.14),_transparent_62%)]
            "
          />

          {previewImage ? (
            <LazyLoadImage
              src={previewImage}
              alt={
                visit.spirit_name
              }
              title={
                visit.spirit_name
              }
              effect="blur"
              wrapperClassName="
                relative
                z-10

                flex
                w-full
                items-center
                justify-center
              "
              className="
                relative
                z-10

                h-auto
                max-h-[145px]
                w-auto
                max-w-full

                object-contain

                drop-shadow-[0_10px_24px_rgba(0,0,0,0.40)]

                transition
                duration-300

                group-hover:scale-105

                sm:max-h-[180px]

                lg:max-h-[195px]
              "
            />
          ) : (
            <SparklesIcon
              aria-hidden="true"
              className="
                relative
                z-10

                h-12
                w-12

                text-white/15
              "
            />
          )}

          {isLatest && (
            <div
              className="
                absolute
                left-2
                top-2
                z-20

                inline-flex
                items-center
                gap-1.5

                rounded-full
                border
                border-[#fe7f2d]/30
                bg-[#fe7f2d]

                px-2
                py-1

                text-[8px]
                font-black
                uppercase
                tracking-[0.1em]
                text-[#102a37]

                shadow-lg

                sm:left-3
                sm:top-3
                sm:px-2.5
                sm:text-[9px]
                sm:tracking-[0.12em]
              "
            >
              <SparklesIcon
                aria-hidden="true"
                className="
                  h-3
                  w-3

                  sm:h-3.5
                  sm:w-3.5
                "
              />

              <span
                className="
                  hidden
                  xs:inline
                "
              >
                Latest Visit
              </span>

              <span
                className="
                  xs:hidden
                "
              >
                Latest
              </span>
            </div>
          )}
        </div>

        {/* Information */}
        <div
          className="
            min-w-0
            p-3

            sm:p-5

            lg:flex
            lg:items-center
            lg:justify-between
            lg:gap-6
          "
        >
          <div
            className="
              min-w-0
              flex-1
            "
          >
            {/* current visit */}
            <div
              className="
                mb-2
                flex
                flex-wrap
                items-center
                gap-1.5
              "
            >
              <VisitBadge
                visitNo={
                  visit.visitNo
                }
              />

              <span
                className="
                  inline-flex
                  items-center
                  gap-1

                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]

                  px-2.5
                  py-1

                  text-[10px]
                  font-bold
                  text-white/65
                "
              >
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="
                    h-3.5
                    w-3.5
                  "
                />

                {visit.visit_date}
              </span>
            </div>

            <h2
              className="
                truncate

                text-base
                font-black
                text-white

                sm:text-xl

                lg:text-2xl
              "
            >
              {visit.spirit_name}
            </h2>

            {/* Season */}
            <div
              className="
                mt-1
                flex
                min-w-0
                items-center
                gap-2

                text-xs
                text-white/50

                sm:text-sm
              "
            >
              {visit.season_icon && (
                <LazyLoadImage
                  src={
                    visit.season_icon
                  }
                  alt=""
                  className="
                    h-5
                    w-5
                    shrink-0
                    object-contain
                  "
                />
              )}

              <span
                className="
                  truncate
                "
              >
                {visit.season_name}
              </span>

              {visit.season_year && (
                <>
                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                    "
                  >
                    •
                  </span>

                  <span
                    className="
                      shrink-0
                    "
                  >
                    {
                      visit.season_year
                    }
                  </span>
                </>
              )}
            </div>

            {/* Other visits */}
            {otherVisits.length >
              0 && (
              <div
                className="
                  mt-4
                "
              >
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.14em]
                      text-white/30

                      sm:text-[10px]
                    "
                  >
                    Other Visits
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-white/[0.04]

                      px-2
                      py-0.5

                      text-[8px]
                      font-bold
                      text-white/30
                    "
                  >
                    {
                      otherVisits.length
                    }
                  </span>
                </div>

                <div
                  className="
                    mt-2
                    flex
                    flex-wrap
                    gap-1.5
                  "
                >
                  {otherVisits.map(
                    (
                      otherVisit,
                      index
                    ) => {
                      const otherVisitNo =
                        String(
                          otherVisit
                            .visitNo ??
                            ''
                        )

                      const isGroupVisit =
                        otherVisitNo
                          .toUpperCase()
                          .startsWith(
                            'GV'
                          )

                      return (
                        <span
                          key={`${otherVisit.visit_date}-${otherVisit.visitNo}-${index}`}
                          className="
                            inline-flex
                            items-center
                            gap-1.5

                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.035]

                            px-2.5
                            py-1

                            text-[9px]
                            font-bold
                            text-white/50

                            transition

                            hover:border-[#fe7f2d]/25
                            hover:bg-[#fe7f2d]/10
                            hover:text-[#ffc394]

                            sm:text-[10px]
                          "
                        >
                          <CalendarDaysIcon
                            aria-hidden="true"
                            className="
                              h-3
                              w-3
                              shrink-0
                              text-white/30
                            "
                          />

                          <span>
                            {
                              otherVisit
                                .visit_date
                            }
                          </span>

                          {otherVisitNo && (
                            <span
                              className="
                                font-black
                                text-[#fe7f2d]/70
                              "
                            >
                              {isGroupVisit
                                ? otherVisitNo
                                : `#${otherVisitNo}`}
                            </span>
                          )}
                        </span>
                      )
                    }
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Season button */}
          {visit.season_route && (
            <div
              className="
                mt-4
                shrink-0

                lg:mt-0
              "
            >
              <Link
                to={`/${visit.season_route}`}
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]

                  px-3
                  py-2

                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.1em]
                  text-white/65

                  transition

                  hover:border-[#fe7f2d]/30
                  hover:bg-[#fe7f2d]/10
                  hover:text-[#ffad72]

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#fe7f2d]/40
                "
              >
                View Season
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}


function parseIsoDate(
  value
) {
  if (
    typeof value !== 'string'
  ) {
    return null
  }

  const match =
    value
      .trim()
      .match(
        /^(\d{4})-(\d{2})-(\d{2})$/
      )

  if (!match) {
    return null
  }

  return {
    year: Number(match[1]),
    month: Number(match[2]),
    day: Number(match[3]),
  }
}


function createSkyResetTimestamp(
  value
) {
  const date =
    parseIsoDate(value)

  if (!date) {
    return null
  }

  return zonedDateTimeToDate(
    {
      year: date.year,
      month: date.month,
      day: date.day,
      hour: 0,
      minute: 0,
      second: 0,
    },
    SKY_TIME_ZONE
  )
}


function getCurrentVisitWindow() {
  return {
    startAt:
      createSkyResetTimestamp(
        travelingSpiritStartDate
      ),

    endAt:
      createSkyResetTimestamp(
        travelingSpiritEndDate
      ),
  }
}


function isVisitCurrentlyActive(
  now,
  startAt,
  endAt
) {
  if (
    startAt &&
    endAt
  ) {
    return (
      now.getTime() >=
        startAt.getTime() &&
      now.getTime() <
        endAt.getTime()
    )
  }

  return Boolean(
    travelingSpirit
  )
}


function FeaturedTravellingSpirit({
  season,
  spirits,
  checkedSpirits,
  handleCheckboxChange,
}) {
  if (
    !season ||
    !spirits?.length
  ) {
    return null
  }

  return (
    <section
      className="
        relative
        mb-6
        overflow-hidden

        rounded-[1.75rem]
        border
        border-[#fe7f2d]/30
        bg-[#071820]/90

        p-4
        text-white

        shadow-xl
        shadow-black/20

        sm:mb-8
        sm:rounded-[2rem]
        sm:p-6
      "
    >
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
          bg-[#fe7f2d]/15
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-28
          -left-20

          h-72
          w-72

          rounded-full
          bg-sky-400/10
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-start
            justify-between
            gap-3
          "
        >
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full
                border
                border-emerald-400/25
                bg-emerald-400/10

                px-3
                py-1.5

                text-[9px]
                font-black
                uppercase
                tracking-[0.15em]
                text-emerald-200

                sm:text-[10px]
              "
            >
              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full

                    animate-ping

                    rounded-full
                    bg-emerald-400
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2

                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              Visiting Now
            </div>

            <p
              className="
                mt-4

                text-[10px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#ff9b57]
              "
            >
              Featured TS
            </p>

            <h2
              className="
                mt-1

                text-2xl
                font-black
                tracking-tight
                text-white

                sm:text-3xl
              "
            >
              {groupTs
                ? 'Featured Traveling Spirit Group'
                : 'Featured Traveling Spirit'}
            </h2>

            <p
              className="
                mt-2
                max-w-2xl

                text-sm
                leading-6
                text-white/55

                sm:text-base
              "
            >
              Currently visiting Sky
              from{' '}
              <strong
                className="
                  text-white/80
                "
              >
                {season.name}
              </strong>
              .
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-[#fe7f2d]/20
              bg-[#fe7f2d]/10

              px-4
              py-3
            "
          >
            <span
              className="
                block

                text-[9px]
                font-black
                uppercase
                tracking-[0.14em]
                text-[#ffc394]/70
              "
            >
              Current Visit
            </span>

            <strong
              className="
                mt-1
                block

                text-sm
                font-black
                text-white
              "
            >
              {travelingSpiritDate ||
                'Current visit'}
            </strong>
          </div>
        </div>

        <div
          className="
            my-5
            h-px
            bg-white/10
          "
        />

        <div
          className={`
            flex
            min-w-0
            flex-wrap
            justify-center
            gap-4

            ${
              groupTs
                ? `
                  sm:grid
                  sm:grid-cols-2

                  lg:grid-cols-3

                  xl:grid-cols-4
                `
                : ''
            }
          `}
        >
          {spirits.map(
            (spirit) => (
              <SpiritCardContainer
                {...spirit}
                key={
                  spirit.spirit_id
                }
                icon_route={
                  season.icon_route
                }
                season={
                  season.name
                }
                checkedSpirits={
                  checkedSpirits
                }
                handleCheckboxChange={
                  handleCheckboxChange
                }
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}


function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (
    totalPages <= 1
  ) {
    return null
  }

  const getPages = () => {
    const pages = []

    const start =
      Math.max(
        1,
        currentPage - 2
      )

    const end =
      Math.min(
        totalPages,
        currentPage + 2
      )

    if (
      start > 1
    ) {
      pages.push(1)

      if (
        start > 2
      ) {
        pages.push(
          'start-ellipsis'
        )
      }
    }

    for (
      let page = start;
      page <= end;
      page += 1
    ) {
      pages.push(page)
    }

    if (
      end < totalPages
    ) {
      if (
        end <
        totalPages - 1
      ) {
        pages.push(
          'end-ellipsis'
        )
      }

      pages.push(
        totalPages
      )
    }

    return pages
  }

  const pages =
    getPages()

  return (
    <nav
      aria-label="Traveling Spirit history pagination"
      className="
        mt-6

        flex
        flex-col
        items-center
        justify-between
        gap-3

        rounded-2xl
        border
        border-white/10
        bg-[#071820]/75

        p-3

        sm:flex-row
        sm:px-4
      "
    >
      <button
        type="button"
        disabled={
          currentPage === 1
        }
        onClick={() =>
          onPageChange(
            currentPage - 1
          )
        }
        className="
          inline-flex
          w-full
          items-center
          justify-center
          gap-2

          rounded-xl
          border
          border-white/10
          bg-white/[0.04]

          px-3
          py-2

          text-[10px]
          font-black
          uppercase
          tracking-[0.1em]
          text-white/60

          transition

          hover:border-[#fe7f2d]/30
          hover:bg-[#fe7f2d]/10
          hover:text-[#ffc394]

          disabled:pointer-events-none
          disabled:opacity-25

          sm:w-auto
        "
      >
        <ChevronLeftIcon
          aria-hidden="true"
          className="
            h-4
            w-4
          "
        />

        Previous
      </button>

      <div
        className="
          flex
          flex-wrap
          items-center
          justify-center
          gap-1.5
        "
      >
        {pages.map(
          (page) => {
            if (
              typeof page !==
              'number'
            ) {
              return (
                <span
                  key={page}
                  className="
                    px-1.5

                    text-sm
                    text-white/25
                  "
                >
                  •••
                </span>
              )
            }

            const active =
              page ===
              currentPage

            return (
              <button
                type="button"
                key={page}
                onClick={() =>
                  onPageChange(
                    page
                  )
                }
                aria-current={
                  active
                    ? 'page'
                    : undefined
                }
                className={`
                  grid
                  h-9
                  min-w-9
                  place-items-center

                  rounded-xl
                  border
                  px-2

                  text-xs
                  font-black

                  transition

                  ${
                    active
                      ? `
                        border-[#fe7f2d]
                        bg-[#fe7f2d]
                        text-[#102a37]
                      `
                      : `
                        border-white/10
                        bg-white/[0.035]
                        text-white/55

                        hover:border-[#fe7f2d]/30
                        hover:bg-[#fe7f2d]/10
                        hover:text-[#ffc394]
                      `
                  }
                `}
              >
                {page}
              </button>
            )
          }
        )}
      </div>

      <button
        type="button"
        disabled={
          currentPage ===
          totalPages
        }
        onClick={() =>
          onPageChange(
            currentPage + 1
          )
        }
        className="
          inline-flex
          w-full
          items-center
          justify-center
          gap-2

          rounded-xl
          border
          border-white/10
          bg-white/[0.04]

          px-3
          py-2

          text-[10px]
          font-black
          uppercase
          tracking-[0.1em]
          text-white/60

          transition

          hover:border-[#fe7f2d]/30
          hover:bg-[#fe7f2d]/10
          hover:text-[#ffc394]

          disabled:pointer-events-none
          disabled:opacity-25

          sm:w-auto
        "
      >
        Next

        <ChevronRightIcon
          aria-hidden="true"
          className="
            h-4
            w-4
          "
        />
      </button>
    </nav>
  )
}


export default function PageTravellingSpirits() {
  const historyTopRef =
    React.useRef(null)

  const {
    now,
  } = useSkyEvents()

  const [
    search,
    setSearch,
  ] = useState('')

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1)

  const [
    checkedSpirits,
    setCheckedSpirits,
  ] = useState(() => {
    if (
      typeof window ===
      'undefined'
    ) {
      return {}
    }

    try {
      const saved =
        window.localStorage
          .getItem(
            'checkedSpirits'
          )

      return saved
        ? JSON.parse(saved)
        : {}
    } catch {
      return {}
    }
  })


  const currentSeasonIndex =
    Number(
      travellingSpiritSeasonId
    ) - 1

  const currentSeason =
    allSeasons?.[
      currentSeasonIndex
    ]

  const currentSingleSpirit =
    currentSeason
      ?.season_spirits?.[
        Number(
          travellingSpiritId
        )
      ]

  const featuredSpirits =
    groupTs
      ? currentSeason
          ?.season_spirits ||
        []
      : currentSingleSpirit
        ? [
            currentSingleSpirit,
          ]
        : []


  const currentVisitWindow =
    useMemo(
      () =>
        getCurrentVisitWindow(),
      []
    )

  const currentVisitActive =
    isVisitCurrentlyActive(
      now,
      currentVisitWindow.startAt,
      currentVisitWindow.endAt
    )

  const showFeaturedTS =
    currentVisitActive &&
    Boolean(
      currentSeason
    ) &&
    featuredSpirits.length >
      0


  useEffect(() => {
    setCurrentPage(1)
  }, [search])


  useEffect(() => {
    try {
      window.localStorage
        .setItem(
          'checkedSpirits',
          JSON.stringify(
            checkedSpirits
          )
        )
    } catch {
      // Keep working in memory
      // when storage is unavailable.
    }
  }, [checkedSpirits])


  const handleCheckboxChange = (
    event
  ) => {
    const {
      name,
      checked,
    } = event.target

    setCheckedSpirits(
      (previous) => ({
        ...previous,
        [name]: checked,
      })
    )
  }


  const filteredVisits =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase()

      if (!query) {
        return (
          travellingSpiritHistory
        )
      }

      return (
        travellingSpiritHistory
          .filter(
            (visit) => {
              return [
                visit.spirit_name,
                visit.season_name,
                visit.visit_date,
                String(
                  visit.visitNo ??
                    ''
                ),
              ].some(
                (value) =>
                  String(
                    value ?? ''
                  )
                    .toLowerCase()
                    .includes(
                      query
                    )
              )
            }
          )
      )
    }, [search])


  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filteredVisits.length /
          VISITS_PER_PAGE
      )
    )

  const safeCurrentPage =
    Math.min(
      currentPage,
      totalPages
    )

  const startIndex =
    (
      safeCurrentPage - 1
    ) *
    VISITS_PER_PAGE

  const endIndex =
    startIndex +
    VISITS_PER_PAGE

  const paginatedVisits =
    filteredVisits.slice(
      startIndex,
      endIndex
    )


  useEffect(() => {
    if (
      currentPage >
      totalPages
    ) {
      setCurrentPage(
        totalPages
      )
    }
  }, [
    currentPage,
    totalPages,
  ])


  const uniqueSpirits =
    useMemo(() => {
      return new Set(
        travellingSpiritHistory
          .map(
            (visit) =>
              visit.spirit_name
          )
      ).size
    }, [])


  const handlePageChange = (
    page
  ) => {
    setCurrentPage(page)

    requestAnimationFrame(
      () => {
        historyTopRef.current
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
      }
    )
  }


  return (
    <main
      className="
        mx-auto
        w-full
        max-w-6xl

        px-3
        py-6

        sm:px-5
        sm:py-8

        lg:px-6
        lg:py-10
      "
    >
      {/* Header */}
      <section
        className="
          relative
          mb-5
          overflow-hidden

          rounded-[1.75rem]
          border
          border-white/10
          bg-[#102a37]/90

          p-5
          text-white

          shadow-xl
          shadow-black/10

          sm:mb-7
          sm:rounded-[2rem]
          sm:p-7
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20

            h-64
            w-64

            rounded-full
            bg-[#fe7f2d]/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10
          "
        >
          <div
            className="
              mb-3

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
              tracking-[0.15em]
              text-[#ffad72]
            "
          >
            <ClockIcon
              aria-hidden="true"
              className="
                h-4
                w-4
              "
            />

            Visit History
          </div>

          <h1
            className="
              text-2xl
              font-black
              tracking-tight

              sm:text-4xl
            "
          >
            Travelling Spirits
          </h1>

          <p
            className="
              mt-2
              max-w-2xl

              text-sm
              leading-6
              text-white/60

              sm:text-base
            "
          >
            Explore previous
            Travelling Spirit visits,
            ordered from the latest
            appearance to the oldest.
          </p>

          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-2
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-xl
                border
                border-white/10
                bg-white/[0.04]

                px-3
                py-2
              "
            >
              <CalendarDaysIcon
                aria-hidden="true"
                className="
                  h-4
                  w-4
                  text-[#fe7f2d]
                "
              />

              <span
                className="
                  text-xs
                  text-white/55
                "
              >
                Recorded visits
              </span>

              <strong
                className="
                  text-sm
                  text-white
                "
              >
                {
                  travellingSpiritHistory
                    .length
                }
              </strong>
            </div>

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-xl
                border
                border-white/10
                bg-white/[0.04]

                px-3
                py-2
              "
            >
              <UserGroupIcon
                aria-hidden="true"
                className="
                  h-4
                  w-4
                  text-[#fe7f2d]
                "
              />

              <span
                className="
                  text-xs
                  text-white/55
                "
              >
                Spirits visited
              </span>

              <strong
                className="
                  text-sm
                  text-white
                "
              >
                {uniqueSpirits}
              </strong>
            </div>
          </div>
        </div>
      </section>


      {/* Current Featured TS */}
      {showFeaturedTS && (
        <FeaturedTravellingSpirit
          season={
            currentSeason
          }
          spirits={
            featuredSpirits
          }
          checkedSpirits={
            checkedSpirits
          }
          handleCheckboxChange={
            handleCheckboxChange
          }
        />
      )}


      {/* Search */}
      <section
        className="
          sticky
          top-2
          z-30

          mb-5

          sm:mb-6
        "
      >
        <div
          className="
            relative

            rounded-2xl
            border
            border-white/10
            bg-[#071820]/95

            p-2

            shadow-xl
            shadow-black/10

            backdrop-blur-xl
          "
        >
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              left-5
              top-1/2

              h-5
              w-5

              -translate-y-1/2

              text-white/30
            "
          />

          <input
            type="search"
            value={search}
            onChange={
              (event) =>
                setSearch(
                  event.target.value
                )
            }
            placeholder="Search spirit, season, visit number or date..."
            className="
              w-full

              rounded-xl
              border
              border-transparent
              bg-white/[0.04]

              py-3
              pl-11
              pr-4

              text-sm
              text-white

              outline-none

              placeholder:text-white/30

              focus:border-[#fe7f2d]/35
              focus:bg-white/[0.06]
            "
          />
        </div>
      </section>


      {/* Results heading */}
      <div
        ref={
          historyTopRef
        }
        className="
          mb-3
          scroll-mt-28

          flex
          flex-wrap
          items-center
          justify-between
          gap-3
        "
      >
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-[0.12em]
            text-white/40
          "
        >
          {
            filteredVisits.length
          }{' '}
          {filteredVisits.length ===
          1
            ? 'visit'
            : 'visits'}
        </p>

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-end
            gap-3

            text-xs
            text-white/35
          "
        >
          {filteredVisits.length >
            0 && (
            <span>
              {startIndex + 1}–
              {Math.min(
                endIndex,
                filteredVisits.length
              )}{' '}
              of{' '}
              {
                filteredVisits.length
              }
            </span>
          )}

          <span>
            Latest → Oldest
          </span>
        </div>
      </div>


      {/* History */}
      {filteredVisits.length >
      0 ? (
        <>
          <section
            className="
              space-y-3

              sm:space-y-4
            "
          >
            {paginatedVisits.map(
              (
                visit,
                index
              ) => {
                const globalIndex =
                  startIndex +
                  index

                return (
                  <TravellingSpiritVisitCard
                    key={
                      visit.id
                    }
                    visit={
                      visit
                    }
                    isLatest={
                      !search &&
                      globalIndex ===
                        0
                    }
                  />
                )
              }
            )}
          </section>

          <Pagination
            currentPage={
              safeCurrentPage
            }
            totalPages={
              totalPages
            }
            onPageChange={
              handlePageChange
            }
          />
        </>
      ) : (
        <section
          className="
            rounded-3xl

            border
            border-dashed
            border-white/10

            bg-white/[0.025]

            px-5
            py-16

            text-center
          "
        >
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="
              mx-auto

              h-8
              w-8

              text-white/20
            "
          />

          <h2
            className="
              mt-3

              font-black
              text-white
            "
          >
            No visits found
          </h2>

          <p
            className="
              mt-1

              text-sm
              text-white/40
            "
          >
            Try another spirit,
            season, date or visit
            number.
          </p>
        </section>
      )}
    </main>
  )
}