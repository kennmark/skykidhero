export const PHILIPPINES_TIME_ZONE = 'Asia/Manila'
export const SKY_TIME_ZONE = 'America/Los_Angeles'

export const SKY_EVENT_DEFINITIONS = [
  {
    id: 'geyser',
    name: 'Geyser',
    startMinute: 5,
    durationMinutes: 10,
    icon: 'fire',
  },
  {
    id: 'grandma',
    name: 'Grandma',
    startMinute: 35,
    durationMinutes: 10,
    icon: 'grandma',
  },
  {
    id: 'turtle',
    name: 'Turtle',
    startMinute: 50,
    durationMinutes: 10,
    icon: 'turtle',
  },
  {
    id: 'fireworks',
    name: 'Fireworks',
    startMinute: 0,
    durationMinutes: 15,
    firstDayOnly: true,
    icon: 'fireworks',
  },
  {
    id: 'aurora',
    name: 'AURORA Concert',
    startMinute: 0,
    durationMinutes: 50,
    icon: 'music',
  },
]

const MANILA_PARTS_FORMATTER = new Intl.DateTimeFormat('en-US', {
  timeZone: PHILIPPINES_TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
})

const MANILA_CLOCK_FORMATTER = new Intl.DateTimeFormat('en-PH', {
  timeZone: PHILIPPINES_TIME_ZONE,
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
})

const MANILA_DATE_FORMATTER = new Intl.DateTimeFormat('en-PH', {
  timeZone: PHILIPPINES_TIME_ZONE,
  month: 'short',
  day: '2-digit',
  year: 'numeric',
})

const PACIFIC_OFFSET_FORMATTER = new Intl.DateTimeFormat('en-US', {
  timeZone: SKY_TIME_ZONE,
  timeZoneName: 'shortOffset',
})

const PACIFIC_ZONE_NAME_FORMATTER = new Intl.DateTimeFormat('en-US', {
  timeZone: SKY_TIME_ZONE,
  timeZoneName: 'short',
})

function partsToObject(parts) {
  return Object.fromEntries(
    parts
      .filter(({ type }) => type !== 'literal')
      .map(({ type, value }) => [type, value])
  )
}

export function getManilaParts(date = new Date()) {
  const parts = partsToObject(
    MANILA_PARTS_FORMATTER.formatToParts(date)
  )

  return {
    year: Number(parts.year),
    month: Number(parts.month),
    day: Number(parts.day),
    hour: Number(parts.hour),
    minute: Number(parts.minute),
    second: Number(parts.second),
  }
}

function getPacificOffsetHours(date = new Date()) {
  const offsetPart = PACIFIC_OFFSET_FORMATTER
    .formatToParts(date)
    .find(({ type }) => type === 'timeZoneName')
    ?.value

  const match = offsetPart?.match(
    /GMT([+-])(\d{1,2})(?::(\d{2}))?/
  )

  if (match) {
    const sign = match[1] === '-' ? -1 : 1
    const hours = Number(match[2])
    const minutes = Number(match[3] || 0) / 60

    return sign * (hours + minutes)
  }

  const zoneName = PACIFIC_ZONE_NAME_FORMATTER
    .formatToParts(date)
    .find(({ type }) => type === 'timeZoneName')
    ?.value

  return zoneName?.includes('PDT') ? -7 : -8
}

export function getSkyTimeInfo(date = new Date()) {
  const pacificOffset = getPacificOffsetHours(date)
  const isDaylightSavingTime = pacificOffset === -7
  const resetHourPht = isDaylightSavingTime ? 15 : 16

  return {
    pacificOffset,
    isDaylightSavingTime,
    pacificLabel: isDaylightSavingTime ? 'PDT' : 'PST',
    resetHourPht,
    resetLabel: formatHourMinute(resetHourPht, 0),
    scheduledParity:
      resetHourPht % 2 === 0 ? 'even' : 'odd',
  }
}

export function formatHourMinute(hour24, minute) {
  const normalizedHour = ((hour24 % 24) + 24) % 24
  const suffix = normalizedHour >= 12 ? 'PM' : 'AM'
  const hour12 = normalizedHour % 12 || 12

  return `${hour12}:${String(minute).padStart(2, '0')} ${suffix}`
}

function getEventWindow(event, hour) {
  const totalEndMinutes =
    event.startMinute + event.durationMinutes

  const endHour =
    hour + Math.floor(totalEndMinutes / 60)

  const endMinute = totalEndMinutes % 60

  return {
    startHour: hour,
    endHour: ((endHour % 24) + 24) % 24,
    startLabel: formatHourMinute(
      hour,
      event.startMinute
    ),
    endLabel: formatHourMinute(
      endHour,
      endMinute
    ),
  }
}

function isEventAvailableOnDate(event, manila) {
  return !event.firstDayOnly || manila.day === 1
}

function getActiveEvent(
  event,
  manila,
  currentSecondOfHour
) {
  if (!isEventAvailableOnDate(event, manila)) {
    return null
  }

  const startSecond = event.startMinute * 60
  const totalSeconds = event.durationMinutes * 60
  const endSecond = startSecond + totalSeconds

  if (
    currentSecondOfHour < startSecond ||
    currentSecondOfHour >= endSecond
  ) {
    return null
  }

  const elapsedSeconds =
    currentSecondOfHour - startSecond

  return {
    ...event,
    ...getEventWindow(event, manila.hour),
    elapsedSeconds,
    remainingSeconds: Math.max(
      0,
      totalSeconds - elapsedSeconds
    ),
    progress: Math.min(
      100,
      Math.max(
        0,
        (elapsedSeconds / totalSeconds) * 100
      )
    ),
  }
}

function getNextEvent(date, resetHourPht) {
  const nowMs = date.getTime()

  for (let hourOffset = 0; hourOffset <= 48; hourOffset += 1) {
    const candidateMs =
      nowMs + hourOffset * 60 * 60 * 1000

    const candidateDate = new Date(candidateMs)
    const candidateManila =
      getManilaParts(candidateDate)

    const isScheduledHour =
      candidateManila.hour % 2 ===
      resetHourPht % 2

    if (!isScheduledHour) {
      continue
    }

    for (const event of SKY_EVENT_DEFINITIONS) {
      if (!isEventAvailableOnDate(event, candidateManila)) {
        continue
      }

      const candidateStartMs =
        candidateMs -
        candidateManila.minute * 60 * 1000 -
        candidateManila.second * 1000 +
        event.startMinute * 60 * 1000

      if (candidateStartMs > nowMs) {
        return {
          ...event,
          ...getEventWindow(event, candidateManila.hour),
          startsInSeconds: Math.max(
            0,
            Math.floor(
              (candidateStartMs - nowMs) / 1000
            )
          ),
        }
      }
    }
  }

  return null
}

export function getSkyEventSnapshot(
  date = new Date()
) {
  const manila = getManilaParts(date)
  const timeInfo = getSkyTimeInfo(date)

  const isScheduledHour =
    manila.hour % 2 ===
    timeInfo.resetHourPht % 2

  const currentSecondOfHour =
    manila.minute * 60 + manila.second

  const activeEvents = isScheduledHour
    ? SKY_EVENT_DEFINITIONS
        .map((event) =>
          getActiveEvent(
            event,
            manila,
            currentSecondOfHour
          )
        )
        .filter(Boolean)
    : []

  return {
    now: date,
    manila,
    manilaTimeLabel:
      MANILA_CLOCK_FORMATTER.format(date),
    manilaDateLabel:
      MANILA_DATE_FORMATTER.format(date),
    isScheduledHour,
    activeEvents,
    nextEvent: getNextEvent(
      date,
      timeInfo.resetHourPht
    ),
    ...timeInfo,
  }
}

export function formatCountdown(
  totalSeconds,
  { includeHours = false } = {}
) {
  const safeSeconds = Math.max(
    0,
    Math.floor(totalSeconds)
  )

  const hours = Math.floor(
    safeSeconds / 3600
  )

  const minutes = Math.floor(
    (safeSeconds % 3600) / 60
  )

  const seconds = safeSeconds % 60

  if (includeHours || hours > 0) {
    return [
      String(hours).padStart(2, '0'),
      String(minutes).padStart(2, '0'),
      String(seconds).padStart(2, '0'),
    ].join(':')
  }

  return [
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
  ].join(':')
}
