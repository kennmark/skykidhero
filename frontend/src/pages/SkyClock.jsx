import {
  ClockIcon,
  FireIcon,
  GlobeAltIcon,
  MusicalNoteIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

import useSkyEvents from '../hooks/useSkyEvents'
import {
  formatCountdown,
} from '../utils/skyEvents'

const EVENT_ICONS = {
  fire: FireIcon,
  grandma: UserGroupIcon,
  turtle: SparklesIcon,
  fireworks: SparklesIcon,
  music: MusicalNoteIcon,
}

function ScheduleRow({
  schedule,
}) {
  const {
    activeEvent,
    nextOccurrence,
  } = schedule

  const isLive =
    Boolean(activeEvent)

  const Icon =
    EVENT_ICONS[schedule.icon] ||
    SparklesIcon

  const displayedOccurrence =
    activeEvent ||
    nextOccurrence

  return (
    <li
      className={`
        flex
        min-w-0
        items-center
        gap-3
        rounded-2xl
        border
        px-3
        py-3
        transition

        ${
          isLive
            ? 'border-[#fe7f2d]/45 bg-[#fe7f2d]/10'
            : 'border-white/10 bg-white/[0.035]'
        }
      `}
    >
      <span
        className={`
          grid
          h-10
          w-10
          shrink-0
          place-items-center
          rounded-xl

          ${
            isLive
              ? 'bg-[#fe7f2d] text-[#233d4d]'
              : 'bg-white/10 text-[#fe7f2d]'
          }
        `}
      >
        <Icon
          aria-hidden="true"
          className="h-5 w-5"
        />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex min-w-0 items-center gap-2">
          <span
            className="
              truncate
              text-sm
              font-black
              text-white
            "
          >
            {schedule.name}
          </span>

          {isLive && (
            <span
              className="
                inline-flex
                shrink-0
                items-center
                gap-1
                rounded-full
                bg-[#fe7f2d]/15
                px-2
                py-0.5
                text-[9px]
                font-black
                uppercase
                tracking-wider
                text-[#ff9b57]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-[#fe7f2d]
                "
              />

              Live
            </span>
          )}
        </span>

        {displayedOccurrence ? (
          <>
            <span
              className="
                mt-0.5
                block
                truncate
                text-xs
                text-white/55
              "
            >
              {isLive ? 'Now' : 'Next'}
              {' · '}
              {
                displayedOccurrence.localStartLabel
              }
              {' – '}
              {
                displayedOccurrence.localEndLabel
              }
            </span>

            <span
              className="
                mt-0.5
                block
                truncate
                text-[10px]
                text-white/30
              "
            >
              {
                displayedOccurrence.localDateLabel
              }
              {' · '}
              {schedule.firstDayOnly
                ? 'first day of month'
                : 'repeats every 2 hours'}
            </span>
          </>
        ) : (
          <span
            className="
              mt-0.5
              block
              text-xs
              text-white/45
            "
          >
            First day of each month
          </span>
        )}
      </span>

      {isLive && activeEvent && (
        <span className="shrink-0 text-right">
          <span
            className="
              block
              text-xs
              font-black
              text-[#ff9b57]
            "
          >
            {formatCountdown(
              activeEvent.remainingSeconds
            )}
          </span>

          <span
            className="
              block
              text-[9px]
              uppercase
              tracking-wider
              text-white/35
            "
          >
            remaining
          </span>
        </span>
      )}
    </li>
  )
}

export default function SkyClock() {
  const {
    now,
    activeEvents,
    nextEvent,
    eventSchedule,
    localTimeLabel,
    localDateLabel,
    visitorTimeZone,
    visitorTimeZoneLabel,
    nextResetTimeLabel,
    nextResetDateLabel,
    resetCountdownSeconds,
    pacificLabel,
    isDaylightSavingTime,
  } = useSkyEvents()

  return (
    <section
      aria-labelledby="sky-clock-title"
      className="
        w-full
        rounded-[2rem]
        border
        border-[#fe7f2d]/20
        bg-[#102a37]
        p-4
        text-white
        shadow-[0_24px_70px_rgba(0,0,0,0.28)]

        sm:p-6

        lg:p-8
      "
    >
      <header
        className="
          flex
          flex-col
          gap-4
          border-b
          border-white/10
          pb-5

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              grid
              h-12
              w-12
              shrink-0
              place-items-center
              rounded-2xl
              bg-[#fe7f2d]
              text-[#233d4d]
              shadow-lg
              shadow-[#fe7f2d]/15
            "
          >
            <ClockIcon
              aria-hidden="true"
              className="h-6 w-6"
            />
          </span>

          <div className="min-w-0">
            <p
              className="
                flex
                items-center
                gap-2
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                text-[#ff9b57]
              "
            >
              <GlobeAltIcon
                aria-hidden="true"
                className="h-4 w-4"
              />

              Your local time
            </p>

            <h2
              id="sky-clock-title"
              className="
                mt-1
                text-2xl
                font-black
                tracking-tight

                sm:text-3xl
              "
            >
              Sky Clock
            </h2>

            <p
              className="
                mt-1
                max-w-xl
                text-xs
                leading-5
                text-white/40
              "
            >
              Times are automatically converted
              from Sky’s Pacific schedule to
              your browser timezone.
            </p>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-2
            gap-2

            sm:flex
          "
        >
          <div
            className="
              min-w-0
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-3
              py-2

              sm:min-w-44
            "
          >
            <span
              className="
                block
                text-[9px]
                font-black
                uppercase
                tracking-wider
                text-white/35
              "
            >
              Current local time
            </span>

            <time
              dateTime={now.toISOString()}
              className="
                mt-0.5
                block
                truncate
                text-sm
                font-black
                text-white
              "
            >
              {localTimeLabel}
            </time>

            <span
              className="
                block
                truncate
                text-[10px]
                text-white/45
              "
              title={visitorTimeZone}
            >
              {localDateLabel}
              {' · '}
              {visitorTimeZoneLabel}
            </span>
          </div>

          <div
            className="
              min-w-0
              rounded-2xl
              border
              border-[#fe7f2d]/20
              bg-[#fe7f2d]/10
              px-3
              py-2

              sm:min-w-48
            "
          >
            <span
              className="
                block
                text-[9px]
                font-black
                uppercase
                tracking-wider
                text-[#ff9b57]
              "
            >
              Next daily reset
            </span>

            <span
              className="
                mt-0.5
                block
                truncate
                text-sm
                font-black
                text-white
              "
            >
              {nextResetTimeLabel}
            </span>

            <span
              className="
                block
                truncate
                text-[10px]
                text-white/45
              "
            >
              {nextResetDateLabel}
              {' · '}
              {formatCountdown(
                resetCountdownSeconds,
                {
                  includeHours: true,
                }
              )}
            </span>
          </div>
        </div>
      </header>

      <div
        className="
          mt-5
          grid
          gap-5

          lg:grid-cols-[minmax(0,1fr)_18rem]
        "
      >
        <div>
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
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#ff9b57]
                "
              >
                Event schedule
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-white/55
                "
              >
                Upcoming times in{' '}
                {visitorTimeZoneLabel}.
              </p>
            </div>

            <span
              className="
                shrink-0
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

          <ul
            className="
              grid
              gap-2

              sm:grid-cols-2
            "
          >
            {eventSchedule.map(
              (schedule) => (
                <ScheduleRow
                  key={schedule.id}
                  schedule={schedule}
                />
              )
            )}
          </ul>

          <div
            className="
              mt-3
              flex
              items-start
              gap-2
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              px-3
              py-2.5
            "
          >
            <GlobeAltIcon
              aria-hidden="true"
              className="
                mt-0.5
                h-4
                w-4
                shrink-0
                text-[#fe7f2d]
              "
            />

            <p
              className="
                text-[10px]
                leading-5
                text-white/40

                sm:text-xs
              "
            >
              Sky’s reset remains fixed at
              midnight in America/Los_Angeles
              ({pacificLabel},{' '}
              {isDaylightSavingTime
                ? 'daylight time'
                : 'standard time'}
              ). Only the displayed time changes
              for each visitor.
            </p>
          </div>
        </div>

        <aside
          className="
            rounded-3xl
            border
            border-white/10
            bg-[#071820]/60
            p-4
          "
        >
          <p
            className="
              text-[10px]
              font-black
              uppercase
              tracking-[0.18em]
              text-white/40
            "
          >
            Right now
          </p>

          {activeEvents.length > 0 ? (
            <div className="mt-3 space-y-3">
              {activeEvents.map(
                (event) => (
                  <div
                    key={event.id}
                    className="
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
                        items-center
                        justify-between
                        gap-3
                      "
                    >
                      <span
                        className="
                          text-sm
                          font-black
                          text-white
                        "
                      >
                        {event.name}
                      </span>

                      <span
                        className="
                          rounded-full
                          bg-[#fe7f2d]
                          px-2
                          py-0.5
                          text-[9px]
                          font-black
                          uppercase
                          tracking-wider
                          text-[#233d4d]
                        "
                      >
                        Live
                      </span>
                    </div>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-white/55
                      "
                    >
                      {event.localStartLabel}
                      {' – '}
                      {event.localEndLabel}
                    </p>

                    <p
                      className="
                        mt-3
                        text-2xl
                        font-black
                        text-[#ff9b57]
                      "
                    >
                      {formatCountdown(
                        event.remainingSeconds
                      )}
                    </p>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-white/35
                      "
                    >
                      remaining
                    </p>
                  </div>
                )
              )}
            </div>
          ) : (
            <div
              className="
                mt-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
                p-3
              "
            >
              <p
                className="
                  text-sm
                  font-bold
                  text-white/75
                "
              >
                No event is active.
              </p>

              {nextEvent && (
                <>
                  <p
                    className="
                      mt-2
                      text-xs
                      text-white/45
                    "
                  >
                    Next event
                  </p>

                  <p
                    className="
                      mt-0.5
                      font-black
                      text-white
                    "
                  >
                    {nextEvent.name}
                  </p>

                  <p
                    className="
                      text-xs
                      text-[#ff9b57]
                    "
                  >
                    {nextEvent.localStartLabel}
                    {' · '}
                    {nextEvent.localDateLabel}
                  </p>

                  <p
                    className="
                      mt-2
                      text-xs
                      text-white/45
                    "
                  >
                    Starts in{' '}
                    {formatCountdown(
                      nextEvent.startsInSeconds,
                      {
                        includeHours: true,
                      }
                    )}
                  </p>
                </>
              )}
            </div>
          )}
        </aside>
      </div>
    </section>
  )
}