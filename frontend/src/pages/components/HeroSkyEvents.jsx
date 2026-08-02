import {
  ClockIcon,
  FireIcon,
  MusicalNoteIcon,
  SparklesIcon,
  UserGroupIcon,
  LifebuoyIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

import useSkyEvents from '../../hooks/useSkyEvents'
import {
  formatCountdown,
} from '../../utils/skyEvents'

const EVENT_ICONS = {
  fire: BeakerIcon,
  grandma: FireIcon,
  turtle: LifebuoyIcon,
  fireworks: SparklesIcon,
  music: MusicalNoteIcon,
}

function EventCard({ event }) {
  const Icon =
    EVENT_ICONS[event.icon] || SparklesIcon

  return (
    <article className="min-w-0 rounded-xl border border-[#fe7f2d]/20 bg-[#183746]/90 px-3 py-2.5 shadow-lg shadow-black/10">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#fe7f2d] text-[#233d4d]">
          <Icon
            aria-hidden="true"
            className="h-5 w-5"
          />
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex min-w-0 items-center gap-2">
            <span className="truncate text-xs font-black text-white sm:text-sm">
              {event.name}
            </span>

            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#fe7f2d]/15 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-[#ff9b57]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#fe7f2d]" />
              Live
            </span>
          </span>

          <span className="mt-0.5 block truncate text-[10px] font-medium text-white/60 sm:text-xs">
            {event.startLabel} – {event.endLabel}
            {' · '}
            {formatCountdown(
              event.remainingSeconds
            )}{' '}
            left
          </span>
        </span>
      </div>

      <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#fe7f2d] transition-[width] duration-1000 ease-linear"
          style={{
            width: `${event.progress}%`,
          }}
        />
      </div>
    </article>
  )
}

export default function HeroSkyEvents() {
  const {
    now,
    activeEvents,
    manilaTimeLabel,
    resetLabel,
    pacificLabel,
  } = useSkyEvents()

  return (
    <section
      aria-label="Current Sky events in Philippine time"
      className="
      pointer-events-auto
      h-full
      min-w-0
      rounded-2xl
      border border-white/10
      bg-[#102a37]/90
      p-2.5
      text-white
      shadow-xl shadow-black/20
      backdrop-blur-md
      sm:p-3"
    >
      <header className="mb-2 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/10 text-[#fe7f2d]">
            <ClockIcon
              aria-hidden="true"
              className="h-4 w-4"
            />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-[9px] font-black uppercase tracking-[0.16em] text-white/45">
              Live Sky events
            </span>

            <time
              dateTime={now.toISOString()}
              className="mt-0.5 block truncate text-xs font-bold text-white sm:text-sm"
            >
              {manilaTimeLabel} PHT
            </time>
          </span>
        </div>

        <span
          className="shrink-0 rounded-full border border-[#fe7f2d]/20 bg-[#fe7f2d]/10 px-2 py-1 text-[8px] font-black uppercase tracking-wider text-[#ff9b57]"
          title={`Current Sky reset is ${resetLabel} PHT (${pacificLabel})`}
        >
          Reset {resetLabel}
        </span>
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
            <EventCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/25" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white/40" />
          </span>

          <span className="min-w-0">
            <span className="block text-xs font-bold text-white/80">
              No Sky event is active
            </span>

            <span className="mt-0.5 block text-[10px] text-white/45 sm:text-xs">
              The panel will update automatically when an event begins.
            </span>
          </span>
        </div>
      )}
    </section>
  )
}
