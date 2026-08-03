export const PHILIPPINES_TIME_ZONE = 'Asia/Manila'
export const SKY_TIME_ZONE = 'America/Los_Angeles'
export const DEFAULT_VISITOR_TIME_ZONE = 'UTC'

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

const formatterCache = new Map()

function getFormatter(
  locale,
  timeZone,
  options
) {
  const cacheKey = JSON.stringify([
    locale,
    timeZone,
    options,
  ])

  if (!formatterCache.has(cacheKey)) {
    formatterCache.set(
      cacheKey,
      new Intl.DateTimeFormat(locale, {
        timeZone,
        ...options,
      })
    )
  }

  return formatterCache.get(cacheKey)
}

function partsToObject(parts) {
  return Object.fromEntries(
    parts
      .filter(
        ({ type }) => type !== 'literal'
      )
      .map(({ type, value }) => [
        type,
        value,
      ])
  )
}

export function isValidTimeZone(
  timeZone
) {
  if (
    typeof timeZone !== 'string' ||
    !timeZone.trim()
  ) {
    return false
  }

  try {
    Intl.DateTimeFormat('en-US', {
      timeZone,
    }).format()

    return true
  } catch {
    return false
  }
}

export function getVisitorTimeZone() {
  try {
    const resolvedTimeZone =
      Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone

    return isValidTimeZone(
      resolvedTimeZone
    )
      ? resolvedTimeZone
      : DEFAULT_VISITOR_TIME_ZONE
  } catch {
    return DEFAULT_VISITOR_TIME_ZONE
  }
}

export function getZonedParts(
  date = new Date(),
  timeZone = DEFAULT_VISITOR_TIME_ZONE
) {
  const safeTimeZone = isValidTimeZone(
    timeZone
  )
    ? timeZone
    : DEFAULT_VISITOR_TIME_ZONE

  const formatter = getFormatter(
    'en-US',
    safeTimeZone,
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    }
  )

  const parts = partsToObject(
    formatter.formatToParts(date)
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

export function getManilaParts(
  date = new Date()
) {
  return getZonedParts(
    date,
    PHILIPPINES_TIME_ZONE
  )
}

export function formatTimeInZone(
  date,
  timeZone,
  {
    includeSeconds = false,
    locale = 'en-US',
  } = {}
) {
  const safeTimeZone = isValidTimeZone(
    timeZone
  )
    ? timeZone
    : DEFAULT_VISITOR_TIME_ZONE

  return getFormatter(
    locale,
    safeTimeZone,
    {
      hour: 'numeric',
      minute: '2-digit',
      ...(includeSeconds
        ? { second: '2-digit' }
        : {}),
      hour12: true,
    }
  ).format(date)
}

export function formatDateInZone(
  date,
  timeZone,
  {
    includeWeekday = false,
    locale = 'en-US',
  } = {}
) {
  const safeTimeZone = isValidTimeZone(
    timeZone
  )
    ? timeZone
    : DEFAULT_VISITOR_TIME_ZONE

  return getFormatter(
    locale,
    safeTimeZone,
    {
      ...(includeWeekday
        ? { weekday: 'short' }
        : {}),
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }
  ).format(date)
}

export function formatDateTimeInZone(
  date,
  timeZone,
  {
    includeSeconds = false,
    includeWeekday = false,
    locale = 'en-US',
  } = {}
) {
  const safeTimeZone = isValidTimeZone(
    timeZone
  )
    ? timeZone
    : DEFAULT_VISITOR_TIME_ZONE

  return getFormatter(
    locale,
    safeTimeZone,
    {
      ...(includeWeekday
        ? { weekday: 'short' }
        : {}),
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      ...(includeSeconds
        ? { second: '2-digit' }
        : {}),
      hour12: true,
    }
  ).format(date)
}

export function getTimeZoneShortLabel(
  date = new Date(),
  timeZone = DEFAULT_VISITOR_TIME_ZONE
) {
  const safeTimeZone = isValidTimeZone(
    timeZone
  )
    ? timeZone
    : DEFAULT_VISITOR_TIME_ZONE

  try {
    const part = getFormatter(
      'en-US',
      safeTimeZone,
      {
        hour: 'numeric',
        timeZoneName: 'short',
      }
    )
      .formatToParts(date)
      .find(
        ({ type }) =>
          type === 'timeZoneName'
      )

    return (
      part?.value ||
      safeTimeZone
    )
  } catch {
    return safeTimeZone
  }
}

function getPacificOffsetHours(
  date = new Date()
) {
  try {
    const offsetPart = getFormatter(
      'en-US',
      SKY_TIME_ZONE,
      {
        timeZoneName: 'shortOffset',
      }
    )
      .formatToParts(date)
      .find(
        ({ type }) =>
          type === 'timeZoneName'
      )
      ?.value

    const match = offsetPart?.match(
      /GMT([+-])(\d{1,2})(?::(\d{2}))?/
    )

    if (match) {
      const sign =
        match[1] === '-' ? -1 : 1

      const hours = Number(match[2])
      const minutes =
        Number(match[3] || 0) / 60

      return (
        sign * (hours + minutes)
      )
    }
  } catch {
    // Fall through to the short-name
    // formatter for older browsers.
  }

  const zoneName = getTimeZoneShortLabel(
    date,
    SKY_TIME_ZONE
  )

  return zoneName.includes('PDT')
    ? -7
    : -8
}

function addCalendarDays(
  dateParts,
  amount
) {
  const normalized = new Date(
    Date.UTC(
      dateParts.year,
      dateParts.month - 1,
      dateParts.day + amount
    )
  )

  return {
    year: normalized.getUTCFullYear(),
    month:
      normalized.getUTCMonth() + 1,
    day: normalized.getUTCDate(),
  }
}

/**
 * Converts a wall-clock date/time in an IANA
 * timezone into one absolute JavaScript Date.
 *
 * The short iteration keeps the conversion
 * correct across DST offset changes.
 */
export function zonedDateTimeToDate(
  {
    year,
    month,
    day,
    hour = 0,
    minute = 0,
    second = 0,
  },
  timeZone
) {
  const safeTimeZone = isValidTimeZone(
    timeZone
  )
    ? timeZone
    : DEFAULT_VISITOR_TIME_ZONE

  const desiredUtcValue = Date.UTC(
    year,
    month - 1,
    day,
    hour,
    minute,
    second
  )

  let result = new Date(
    desiredUtcValue
  )

  for (
    let iteration = 0;
    iteration < 3;
    iteration += 1
  ) {
    const actualParts =
      getZonedParts(
        result,
        safeTimeZone
      )

    const actualUtcValue = Date.UTC(
      actualParts.year,
      actualParts.month - 1,
      actualParts.day,
      actualParts.hour,
      actualParts.minute,
      actualParts.second
    )

    const adjustment =
      desiredUtcValue -
      actualUtcValue

    if (adjustment === 0) {
      break
    }

    result = new Date(
      result.getTime() + adjustment
    )
  }

  return result
}

export function getNextSkyReset(
  date = new Date()
) {
  const pacificDate =
    getZonedParts(
      date,
      SKY_TIME_ZONE
    )

  const nextPacificDate =
    addCalendarDays(
      pacificDate,
      1
    )

  return zonedDateTimeToDate(
    {
      ...nextPacificDate,
      hour: 0,
      minute: 0,
      second: 0,
    },
    SKY_TIME_ZONE
  )
}

export function getSkyTimeInfo(
  date = new Date(),
  visitorTimeZone =
    getVisitorTimeZone()
) {
  const safeVisitorTimeZone =
    isValidTimeZone(visitorTimeZone)
      ? visitorTimeZone
      : DEFAULT_VISITOR_TIME_ZONE

  const pacificOffset =
    getPacificOffsetHours(date)

  const isDaylightSavingTime =
    pacificOffset === -7

  const resetHourPht =
    isDaylightSavingTime ? 15 : 16

  const nextResetAt =
    getNextSkyReset(date)

  return {
    pacificOffset,
    isDaylightSavingTime,
    pacificLabel:
      isDaylightSavingTime
        ? 'PDT'
        : 'PST',

    // Legacy Philippine fields are retained so
    // existing Hero and Traveling Spirit code
    // does not break before those sections are
    // migrated.
    resetHourPht,
    resetLabel:
      formatHourMinute(
        resetHourPht,
        0
      ),
    scheduledParity:
      resetHourPht % 2 === 0
        ? 'even'
        : 'odd',

    visitorTimeZone:
      safeVisitorTimeZone,
    visitorTimeZoneLabel:
      getTimeZoneShortLabel(
        date,
        safeVisitorTimeZone
      ),
    nextResetAt,
    nextResetIso:
      nextResetAt.toISOString(),
    nextResetTimeLabel:
      formatTimeInZone(
        nextResetAt,
        safeVisitorTimeZone
      ),
    nextResetDateLabel:
      formatDateInZone(
        nextResetAt,
        safeVisitorTimeZone,
        {
          includeWeekday: true,
        }
      ),
    nextResetDateTimeLabel:
      formatDateTimeInZone(
        nextResetAt,
        safeVisitorTimeZone,
        {
          includeWeekday: true,
        }
      ),
    resetCountdownSeconds:
      Math.max(
        0,
        Math.floor(
          (
            nextResetAt.getTime() -
            date.getTime()
          ) / 1000
        )
      ),
  }
}

export function formatHourMinute(
  hour24,
  minute
) {
  const normalizedHour =
    ((hour24 % 24) + 24) % 24

  const suffix =
    normalizedHour >= 12
      ? 'PM'
      : 'AM'

  const hour12 =
    normalizedHour % 12 || 12

  return `${hour12}:${String(
    minute
  ).padStart(2, '0')} ${suffix}`
}

function getEventWindow(
  event,
  manilaHour,
  hourStartAt,
  visitorTimeZone
) {
  const totalEndMinutes =
    event.startMinute +
    event.durationMinutes

  const endHour =
    manilaHour +
    Math.floor(
      totalEndMinutes / 60
    )

  const endMinute =
    totalEndMinutes % 60

  const startAt = new Date(
    hourStartAt.getTime() +
      event.startMinute *
        60 *
        1000
  )

  const endAt = new Date(
    startAt.getTime() +
      event.durationMinutes *
        60 *
        1000
  )

  return {
    startHour: manilaHour,
    endHour:
      ((endHour % 24) + 24) % 24,

    // Legacy PHT labels.
    startLabel:
      formatHourMinute(
        manilaHour,
        event.startMinute
      ),
    endLabel:
      formatHourMinute(
        endHour,
        endMinute
      ),

    startAt,
    endAt,
    startIso: startAt.toISOString(),
    endIso: endAt.toISOString(),

    localStartLabel:
      formatTimeInZone(
        startAt,
        visitorTimeZone
      ),
    localEndLabel:
      formatTimeInZone(
        endAt,
        visitorTimeZone
      ),
    localDateLabel:
      formatDateInZone(
        startAt,
        visitorTimeZone,
        {
          includeWeekday: true,
        }
      ),
  }
}

function isEventAvailableOnDate(
  event,
  manila
) {
  return (
    !event.firstDayOnly ||
    manila.day === 1
  )
}

function getHourStartAt(
  date,
  zonedParts
) {
  return new Date(
    date.getTime() -
      (
        zonedParts.minute * 60 +
        zonedParts.second
      ) *
        1000 -
      date.getMilliseconds()
  )
}

function getActiveEvent(
  event,
  manila,
  currentSecondOfHour,
  date,
  visitorTimeZone
) {
  if (
    !isEventAvailableOnDate(
      event,
      manila
    )
  ) {
    return null
  }

  const startSecond =
    event.startMinute * 60

  const totalSeconds =
    event.durationMinutes * 60

  const endSecond =
    startSecond + totalSeconds

  if (
    currentSecondOfHour <
      startSecond ||
    currentSecondOfHour >= endSecond
  ) {
    return null
  }

  const elapsedSeconds =
    currentSecondOfHour -
    startSecond

  const hourStartAt =
    getHourStartAt(
      date,
      manila
    )

  return {
    ...event,
    ...getEventWindow(
      event,
      manila.hour,
      hourStartAt,
      visitorTimeZone
    ),
    elapsedSeconds,
    remainingSeconds: Math.max(
      0,
      totalSeconds -
        elapsedSeconds
    ),
    progress: Math.min(
      100,
      Math.max(
        0,
        (
          elapsedSeconds /
          totalSeconds
        ) * 100
      )
    ),
  }
}

function getNextOccurrenceForEvent(
  event,
  date,
  resetHourPht,
  visitorTimeZone
) {
  const nowMs = date.getTime()
  const visitedHours = new Set()

  for (
    let hourOffset = 0;
    hourOffset <= 4;
    hourOffset += 1
  ) {
    const candidateDate = new Date(
      nowMs +
        hourOffset *
          60 *
          60 *
          1000
    )

    const candidateManila =
      getManilaParts(
        candidateDate
      )

    const hourKey = [
      candidateManila.year,
      candidateManila.month,
      candidateManila.day,
      candidateManila.hour,
    ].join('-')

    if (visitedHours.has(hourKey)) {
      continue
    }

    visitedHours.add(hourKey)

    const isScheduledHour =
      candidateManila.hour % 2 ===
      resetHourPht % 2

    if (
      !isScheduledHour ||
      !isEventAvailableOnDate(
        event,
        candidateManila
      )
    ) {
      continue
    }

    const hourStartAt =
      getHourStartAt(
        candidateDate,
        candidateManila
      )

    const eventWindow =
      getEventWindow(
        event,
        candidateManila.hour,
        hourStartAt,
        visitorTimeZone
      )

    if (
      eventWindow.startAt.getTime() >
      nowMs
    ) {
      return {
        ...event,
        ...eventWindow,
        startsInSeconds: Math.max(
          0,
          Math.floor(
            (
              eventWindow.startAt.getTime() -
              nowMs
            ) / 1000
          )
        ),
      }
    }
  }

  return null
}

function getNextEvent(
  date,
  resetHourPht,
  visitorTimeZone
) {
  const candidates =
    SKY_EVENT_DEFINITIONS
      .map((event) =>
        getNextOccurrenceForEvent(
          event,
          date,
          resetHourPht,
          visitorTimeZone
        )
      )
      .filter(Boolean)
      .sort(
        (first, second) =>
          first.startAt.getTime() -
          second.startAt.getTime()
      )

  return candidates[0] || null
}

function getEventSchedule(
  date,
  resetHourPht,
  visitorTimeZone,
  activeEvents
) {
  const activeById = new Map(
    activeEvents.map((event) => [
      event.id,
      event,
    ])
  )

  return SKY_EVENT_DEFINITIONS.map(
    (event) => ({
      ...event,
      activeEvent:
        activeById.get(event.id) ||
        null,
      nextOccurrence:
        getNextOccurrenceForEvent(
          event,
          date,
          resetHourPht,
          visitorTimeZone
        ),
    })
  )
}

export function getSkyEventSnapshot(
  date = new Date(),
  visitorTimeZone =
    getVisitorTimeZone()
) {
  const safeVisitorTimeZone =
    isValidTimeZone(visitorTimeZone)
      ? visitorTimeZone
      : DEFAULT_VISITOR_TIME_ZONE

  const manila =
    getManilaParts(date)

  const timeInfo =
    getSkyTimeInfo(
      date,
      safeVisitorTimeZone
    )

  const isScheduledHour =
    manila.hour % 2 ===
    timeInfo.resetHourPht % 2

  const currentSecondOfHour =
    manila.minute * 60 +
    manila.second

  const activeEvents =
    isScheduledHour
      ? SKY_EVENT_DEFINITIONS
          .map((event) =>
            getActiveEvent(
              event,
              manila,
              currentSecondOfHour,
              date,
              safeVisitorTimeZone
            )
          )
          .filter(Boolean)
      : []

  return {
    now: date,
    manila,

    // Legacy labels retained for components that
    // have not yet migrated.
    manilaTimeLabel:
      formatTimeInZone(
        date,
        PHILIPPINES_TIME_ZONE,
        {
          includeSeconds: true,
          locale: 'en-PH',
        }
      ),
    manilaDateLabel:
      formatDateInZone(
        date,
        PHILIPPINES_TIME_ZONE,
        {
          locale: 'en-PH',
        }
      ),

    localTimeLabel:
      formatTimeInZone(
        date,
        safeVisitorTimeZone,
        {
          includeSeconds: true,
        }
      ),
    localDateLabel:
      formatDateInZone(
        date,
        safeVisitorTimeZone,
        {
          includeWeekday: true,
        }
      ),

    isScheduledHour,
    activeEvents,
    nextEvent:
      getNextEvent(
        date,
        timeInfo.resetHourPht,
        safeVisitorTimeZone
      ),
    eventSchedule:
      getEventSchedule(
        date,
        timeInfo.resetHourPht,
        safeVisitorTimeZone,
        activeEvents
      ),
    ...timeInfo,
  }
}

export function formatCountdown(
  totalSeconds,
  {
    includeHours = false,
  } = {}
) {
  const safeSeconds = Math.max(
    0,
    Math.floor(totalSeconds)
  )

  const hours = Math.floor(
    safeSeconds / 3600
  )

  const minutes = Math.floor(
    (
      safeSeconds % 3600
    ) / 60
  )

  const seconds =
    safeSeconds % 60

  if (
    includeHours ||
    hours > 0
  ) {
    return [
      String(hours).padStart(
        2,
        '0'
      ),
      String(minutes).padStart(
        2,
        '0'
      ),
      String(seconds).padStart(
        2,
        '0'
      ),
    ].join(':')
  }

  return [
    String(minutes).padStart(
      2,
      '0'
    ),
    String(seconds).padStart(
      2,
      '0'
    ),
  ].join(':')
}
