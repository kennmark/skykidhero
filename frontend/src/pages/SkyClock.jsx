import {
 ClockIcon,
  FireIcon,
  MusicalNoteIcon,
  SparklesIcon,
  UserGroupIcon,
  LifebuoyIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

import useSkyEvents from '../hooks/useSkyEvents'
import {
  SKY_EVENT_DEFINITIONS,
  formatCountdown,
  formatHourMinute,
} from '../utils/skyEvents.js'

const EVENT_ICONS = {
  fire: BeakerIcon,
  grandma: FireIcon,
  turtle: LifebuoyIcon,
  fireworks: SparklesIcon,
  music: MusicalNoteIcon,
}

function ScheduleRow({
  event,
  isLive,
  liveEvent,
}) {
  const Icon =
    EVENT_ICONS[event.icon] || SparklesIcon

  const totalEndMinutes =
    event.startMinute + event.durationMinutes

  const endMinute = totalEndMinutes % 60
  const crossesHour = totalEndMinutes >= 60

  return (
    <li
      className={`flex
      min-w-0
      items-center
      gap-3
      rounded-2xl
      border
      px-3 py-3
      transition

      sm:gap-4
      sm:px-4
      sm:py-4 ${
        isLive
          ? 'border-[#fe7f2d]/45 bg-[#fe7f2d]/10'
          : 'border-white/10 bg-white/[0.035]'
      }`}
    >
      <span
        className={` grid
          h-10 w-10
          shrink-0
          place-items-center
          rounded-xl

          sm:h-12
          sm:w-12 ${
          isLive
            ? 'bg-[#fe7f2d] text-[#233d4d]'
            : 'bg-white/10 text-[#fe7f2d]'
        }`}
      >
        <Icon
            aria-hidden="true"
            className="h-5 w-5 sm:h-6 sm:w-6"
        />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="truncate text-sm font-black text-white sm:text-base lg:text-lg">
            {event.name}
          </span>

          {isLive && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#fe7f2d]/15 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#ff9b57]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#fe7f2d]" />
              Live
            </span>
          )}
        </span>

        <span className="mt-1 block text-xs leading-5 text-white/50 sm:text-sm">
          Every active cycle at XX:
          {String(event.startMinute).padStart(2, '0')}
          {' – '}
          {crossesHour ? 'next hour ' : 'XX:'}
          {String(endMinute).padStart(2, '0')}
          {event.firstDayOnly
            ? ' · first day of month'
            : ''}
        </span>
      </span>

      {isLive && liveEvent && (
        <span className="shrink-0 text-right">
          <span className="block text-sm font-black text-[#ff9b57] sm:text-base">
            {formatCountdown(
              liveEvent.remainingSeconds
            )}
          </span>

          <span className="block text-[9px] uppercase tracking-wider text-white/35">
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
    manilaTimeLabel,
    manilaDateLabel,
    resetLabel,
    resetHourPht,
    pacificLabel,
    isDaylightSavingTime,
    scheduledParity,
  } = useSkyEvents()

  const activeById = new Map(
    activeEvents.map((event) => [
      event.id,
      event,
    ])
  )

  const exampleSecondHour =
    (resetHourPht + 2) % 24

  return (
    <section
      aria-labelledby="sky-clock-title"
      className="
      w-full
      px-2
      py-5
      sm:px-4
      sm:py-8"
    >
      <div
        className="
          w-full
          overflow-hidden
          rounded-[1.5rem]
          border border-[#fe7f2d]/20
          bg-[#102a37]
          p-4
          text-white
          shadow-[0_24px_70px_rgba(0,0,0,0.28)]

          sm:rounded-[2rem]
          sm:p-6

          lg:p-8
          xl:p-10
        "
      >
         <header className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span
              className="
                grid
                h-12 w-12
                shrink-0
                place-items-center
                rounded-2xl
                bg-[#fe7f2d]
                text-[#233d4d]
                shadow-lg shadow-[#fe7f2d]/15

                sm:h-14
                sm:w-14
              "
            >
              <ClockIcon
                aria-hidden="true"
                className="h-6 w-6 sm:h-7 sm:w-7"
              />
            </span>

            <div>
              <p className="text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                text-[#ff9b57]
                sm:text-xs">
                Philippine time
              </p>

              <h2
                id="sky-clock-title"
                className="
                  mt-1
                  text-2xl
                  font-black
                  tracking-tight
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Sky Clock
              </h2>
            </div>
          </div>

          <div className="grid
            grid-cols-1
            gap-2

            xs:grid-cols-2
            sm:grid-cols-2
            lg:flex
            lg:gap-3">
            <div className=" rounded-2xl
              border border-white/10
              bg-white/[0.04]
              px-3 py-3

              sm:min-w-48
              sm:px-4">
              <span className="block text-[9px] font-black uppercase tracking-wider text-white/35 sm:text-[10px]">
                Current time
              </span>

              <time
                dateTime={now.toISOString()}
                className="mt-1
                  block
                  text-base
                  font-black
                  text-white

                  sm:text-lg
                  lg:text-xl"
                          >
                {manilaTimeLabel}
              </time>

              <span className="mt-0.5 block text-xs text-white/45 sm:text-sm">
                {manilaDateLabel}
              </span>
            </div>

            <div className="rounded-2xl
              border border-[#fe7f2d]/20
              bg-[#fe7f2d]/10
              px-3 py-3

              sm:min-w-48
              sm:px-4">
              <span className="block text-[9px] font-black uppercase tracking-wider text-[#ff9b57] sm:text-[10px]">
                Daily reset
              </span>

              <span className="mt-1
                block
                text-base
                font-black
                text-white

                sm:text-lg
                lg:text-xl">
                {resetLabel} PHT
              </span>

              <span className="mt-0.5 block text-xs text-white/45 sm:text-sm">
                {pacificLabel}
                {' · '}
                {isDaylightSavingTime
                  ? 'DST active'
                  : 'standard time'}
              </span>
            </div>
          </div>
        </header>

        <div className="mt-6
          grid
          gap-5

          lg:grid-cols-[minmax(0,1fr)_20rem]
          lg:gap-6

          xl:grid-cols-[minmax(0,1fr)_22rem]
          xl:gap-8">
          <div>
            <div className="mb-3 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#ff9b57]

                  sm:text-sm">
                  Event schedule
                </p>

                <p className="mt-1 text-sm text-white/55 sm:text-base">
                  Runs on {scheduledParity}-numbered
                  Philippine hours.
                </p>
              </div>

              <span className="hidden
                shrink-0
                text-right
                text-xs
                text-white/35

                sm:block">
                Examples:
                {' '}
                {formatHourMinute(
                  resetHourPht,
                  0
                )}
                {' · '}
                {formatHourMinute(
                  exampleSecondHour,
                  0
                )}
              </span>
            </div>

            <ul className="grid gap-2 sm:grid-cols-2">
              {SKY_EVENT_DEFINITIONS.map(
                (event) => {
                  const liveEvent =
                    activeById.get(event.id)

                  return (
                    <ScheduleRow
                      key={event.id}
                      event={event}
                      isLive={Boolean(liveEvent)}
                      liveEvent={liveEvent}
                    />
                  )
                }
              )}
            </ul>
          </div>

          <aside className="rounded-3xl
            border border-white/10
            bg-[#071820]/60
            p-4

            sm:p-5
            lg:p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40 sm:text-xs">
              Right now
            </p>

            {activeEvents.length > 0 ? (
              <div className="mt-3 space-y-3">
                {activeEvents.map((event) => (
                  <div
                    key={event.id}
                    className="rounded-2xl border border-[#fe7f2d]/25 bg-[#fe7f2d]/10 p-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-base font-black text-white sm:text-lg">
                        {event.name}
                      </span>

                      <span className="rounded-full bg-[#fe7f2d] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#233d4d]">
                        Live
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-white/55">
                      {event.startLabel}
                      {' – '}
                      {event.endLabel}
                    </p>

                    <p className="mt-4 text-3xl font-black text-[#ff9b57] sm:text-4xl">
                      {formatCountdown(
                        event.remainingSeconds
                      )}
                    </p>

                    <p className="text-[10px] uppercase tracking-wider text-white/35">
                      remaining
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3">
                <p className="text-base font-bold text-white/75">
                  No event is active.
                </p>

                {nextEvent && (
                  <>
                    <p className="mt-3 text-sm text-white/45">
                      Next event
                    </p>

                    <p className="mt-1 text-lg font-black text-white">
                      {nextEvent.name}
                    </p>

                    <p className="text-sm font-bold text-[#ff9b57]">
                      {nextEvent.startLabel}
                    </p>

                    <p className="mt-2 text-xs text-white/45">
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
      </div>
     
    </section>
  )
}
