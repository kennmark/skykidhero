import {
  ClockIcon,
  FireIcon,
  GlobeAltIcon,
  MusicalNoteIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

import useSkyEvents from '../../hooks/useSkyEvents'
import {
  formatCountdown,
} from '../../utils/skyEvents'

const EVENT_ICONS = {
  fire: FireIcon,
  grandma: UserGroupIcon,
  turtle: SparklesIcon,
  fireworks: SparklesIcon,
  music: MusicalNoteIcon,
}

function ActiveEventCard({
  event,
}) {
  const Icon =
    EVENT_ICONS[event.icon] ||
    SparklesIcon

  return (
    <article
      className="
        min-w-0
        rounded-xl
        border
        border-[#fe7f2d]/20
        bg-[#183746]/90
        px-3
        py-2.5
        shadow-lg
        shadow-black/10
      "
    >
      <div
        className="
          flex
          min-w-0
          items-center
          gap-2.5
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
            bg-[#fe7f2d]
            text-[#233d4d]
          "
        >
          <Icon
            aria-hidden="true"
            className="h-5 w-5"
          />
        </span>

        <span className="min-w-0 flex-1">
          <span
            className="
              flex
              min-w-0
              items-center
              gap-2
            "
          >
            <span
              className="
                truncate
                text-xs
                font-black
                text-white

                sm:text-sm
              "
            >
              {event.name}
            </span>

            <span
              className="
                inline-flex
                shrink-0
                items-center
                gap-1
                rounded-full
                bg-[#fe7f2d]/15
                px-1.5
                py-0.5
                text-[8px]
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
          </span>

          <span
            className="
              mt-0.5
              block
              truncate
              text-[10px]
              font-medium
              text-white/60

              sm:text-xs
            "
          >
            {event.localStartLabel}
            {' – '}
            {event.localEndLabel}
            {' · '}
            {formatCountdown(
              event.remainingSeconds
            )}{' '}
            left
          </span>
        </span>
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
            duration-1000
            ease-linear
          "
          style={{
            width: `${event.progress}%`,
          }}
        />
      </div>
    </article>
  )
}

function NextEventCard({
  event,
}) {
  const Icon =
    EVENT_ICONS[event.icon] ||
    SparklesIcon

  return (
    <article
      className="
        flex
        min-w-0
        items-center
        gap-2.5
        rounded-xl
        border
        border-white/10
        bg-white/[0.04]
        px-3
        py-3
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
          bg-white/10
          text-[#fe7f2d]
        "
      >
        <Icon
          aria-hidden="true"
          className="h-5 w-5"
        />
      </span>

      <span className="min-w-0 flex-1">
        <span
          className="
            block
            truncate
            text-xs
            font-black
            text-white/80

            sm:text-sm
          "
        >
          Next: {event.name}
        </span>

        <span
          className="
            mt-0.5
            block
            truncate
            text-[10px]
            text-white/45

            sm:text-xs
          "
        >
          {event.localStartLabel}
          {' · '}
          {event.localDateLabel}
        </span>
      </span>

      <span className="shrink-0 text-right">
        <strong
          className="
            block
            text-xs
            font-black
            text-[#ff9b57]
          "
        >
          {formatCountdown(
            event.startsInSeconds,
            {
              includeHours: true,
            }
          )}
        </strong>

        <span
          className="
            block
            text-[8px]
            font-black
            uppercase
            tracking-wider
            text-white/30
          "
        >
          starts in
        </span>
      </span>
    </article>
  )
}

export default function HeroSkyEvents() {
  const {
    now,
    activeEvents,
    nextEvent,
    localTimeLabel,
    visitorTimeZone,
    visitorTimeZoneLabel,
    nextResetTimeLabel,
    nextResetDateLabel,
    resetCountdownSeconds,
    pacificLabel,
  } = useSkyEvents()

  return (
    <section
      aria-label="Current Sky events in your local time"
      className="
        pointer-events-auto
        min-w-0
        rounded-2xl
        border
        border-white/10
        bg-[#102a37]/90
        p-2.5
        text-white
        shadow-xl
        shadow-black/20
        backdrop-blur-md

        sm:p-3
      "
    >
      <header
        className="
          mb-2
          flex
          items-center
          justify-between
          gap-3
        "
      >
        <div
          className="
            flex
            min-w-0
            items-center
            gap-2
          "
        >
          <span
            className="
              grid
              h-8
              w-8
              shrink-0
              place-items-center
              rounded-xl
              bg-white/10
              text-[#fe7f2d]
            "
          >
            <GlobeAltIcon
              aria-hidden="true"
              className="h-4 w-4"
            />
          </span>

          <span className="min-w-0">
            <span
              className="
                block
                truncate
                text-[9px]
                font-black
                uppercase
                tracking-[0.16em]
                text-white/45
              "
            >
              Live Sky events
            </span>

            <time
              dateTime={now.toISOString()}
              className="
                mt-0.5
                block
                truncate
                text-xs
                font-bold
                text-white

                sm:text-sm
              "
              title={visitorTimeZone}
            >
              {localTimeLabel}
              {' · '}
              {visitorTimeZoneLabel}
            </time>
          </span>
        </div>

        <div
          className="
            flex
            shrink-0
            items-center
            gap-1.5
          "
        >
          <span
            className="
              hidden
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-2
              py-1
              text-[8px]
              font-black
              uppercase
              tracking-wider
              text-white/35

              sm:inline-flex
            "
            title={`Sky source timezone: America/Los_Angeles (${pacificLabel})`}
          >
            {pacificLabel}
          </span>

          <span
            className="
              rounded-full
              border
              border-[#fe7f2d]/20
              bg-[#fe7f2d]/10
              px-2
              py-1
              text-[8px]
              font-black
              uppercase
              tracking-wider
              text-[#ff9b57]
            "
            title={`Next Sky reset: ${nextResetDateLabel} at ${nextResetTimeLabel} in ${visitorTimeZone}`}
          >
            Reset {nextResetTimeLabel}
          </span>
        </div>
      </header>

      {activeEvents.length > 0 ? (
        <div
          className={`grid gap-2 ${
            activeEvents.length > 1
              ? 'sm:grid-cols-2'
              : ''
          }`}
        >
          {activeEvents.map((event) => (
            <ActiveEventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      ) : nextEvent ? (
        <NextEventCard
          event={nextEvent}
        />
      ) : (
        <div
          className="
            flex
            min-w-0
            items-center
            gap-2.5
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            px-3
            py-3
          "
        >
          <span
            className="
              relative
              flex
              h-2.5
              w-2.5
              shrink-0
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
                bg-white/25
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2.5
                w-2.5
                rounded-full
                bg-white/40
              "
            />
          </span>

          <span className="min-w-0">
            <span
              className="
                block
                text-xs
                font-bold
                text-white/80
              "
            >
              No Sky event is active
            </span>

            <span
              className="
                mt-0.5
                block
                text-[10px]
                text-white/45

                sm:text-xs
              "
            >
              The panel updates automatically
              when the next event begins.
            </span>
          </span>
        </div>
      )}

      <footer
        className="
          mt-2
          flex
          items-center
          justify-between
          gap-3
          border-t
          border-white/10
          pt-2
        "
      >
        <span
          className="
            flex
            min-w-0
            items-center
            gap-1.5
            truncate
            text-[9px]
            text-white/30

            sm:text-[10px]
          "
          title={visitorTimeZone}
        >
          <ClockIcon
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 text-[#fe7f2d]"
          />

          Times shown in your local timezone
        </span>

        <span
          className="
            shrink-0
            text-[9px]
            font-black
            text-white/40

            sm:text-[10px]
          "
        >
          Reset in{' '}
          {formatCountdown(
            resetCountdownSeconds,
            {
              includeHours: true,
            }
          )}
        </span>
      </footer>
    </section>
  )
}