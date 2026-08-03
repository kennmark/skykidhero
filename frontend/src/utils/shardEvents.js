import {
  SKY_TIME_ZONE,
  formatDateInZone,
  formatDateTimeInZone,
  formatTimeInZone,
  getTimeZoneShortLabel,
  getVisitorTimeZone,
  getZonedParts,
  isValidTimeZone,
  zonedDateTimeToDate,
} from './skyEvents'

export const SHARD_REFERENCE_URL =
  'https://sky-shards.pages.dev/en'

export const SHARD_TIMING_CYCLE = [
  2,
  1,
  3,
  0,
  4,
  1,
  2,
  0,
  3,
  1,
  4,
  0,
]

const SHARD_WINDOW_DURATION_SECONDS =
  3 * 60 * 60 + 51 * 60 + 20

/**
 * Each timing group controls:
 * - shard type
 * - weekday availability
 * - location/reward group
 * - three Pacific landing windows
 *
 * Weekdays follow JavaScript's getUTCDay():
 * 0 Sunday ... 6 Saturday.
 */
export const SHARD_TIMING_GROUPS = {
  0: {
    id: 0,
    type: 'black',
    noShardWeekdays: [6, 0],
    starts: [
      {
        hour: 1,
        minute: 58,
        second: 40,
      },
      {
        hour: 9,
        minute: 58,
        second: 40,
      },
      {
        hour: 17,
        minute: 58,
        second: 40,
      },
    ],
  },
  1: {
    id: 1,
    type: 'black',
    noShardWeekdays: [0, 1],
    starts: [
      {
        hour: 2,
        minute: 18,
        second: 40,
      },
      {
        hour: 10,
        minute: 18,
        second: 40,
      },
      {
        hour: 18,
        minute: 18,
        second: 40,
      },
    ],
  },
  2: {
    id: 2,
    type: 'red',
    noShardWeekdays: [1, 2],
    starts: [
      {
        hour: 7,
        minute: 48,
        second: 40,
      },
      {
        hour: 13,
        minute: 48,
        second: 40,
      },
      {
        hour: 19,
        minute: 48,
        second: 40,
      },
    ],
  },
  3: {
    id: 3,
    type: 'red',
    noShardWeekdays: [2, 3],
    starts: [
      {
        hour: 2,
        minute: 28,
        second: 40,
      },
      {
        hour: 8,
        minute: 28,
        second: 40,
      },
      {
        hour: 14,
        minute: 28,
        second: 40,
      },
    ],
  },
  4: {
    id: 4,
    type: 'red',
    noShardWeekdays: [3, 4],
    starts: [
      {
        hour: 3,
        minute: 38,
        second: 40,
      },
      {
        hour: 9,
        minute: 38,
        second: 40,
      },
      {
        hour: 15,
        minute: 38,
        second: 40,
      },
    ],
  },
}

const BLACK_REWARD = {
  amount: 4,
  unit: 'Candle Cakes',
  shortLabel: '4 Candle Cakes',
  detail: 'approximately 200 wax',
}

function redReward(amount) {
  return {
    amount,
    unit: 'Ascended Candles',
    shortLabel: `${amount} Ascended Candles`,
    detail: 'plus access to a Shard Memory',
  }
}

/**
 * Realm order repeats every five calendar days.
 * The timing group selects one location/reward
 * entry inside the active realm.
 */
export const SHARD_REALMS = [
  {
    id: 'prairie',
    name: 'Daylight Prairie',
    shortName: 'Prairie',
    entries: {
      0: {
        location: 'Butterfly Fields',
        reward: BLACK_REWARD,
      },
      1: {
        location: 'Village Islands',
        reward: BLACK_REWARD,
      },
      2: {
        location: 'Prairie Caves',
        reward: redReward(2),
      },
      3: {
        location: 'Bird Nest',
        reward: redReward(2.5),
      },
      4: {
        location: 'Sanctuary Islands',
        reward: redReward(3.5),
      },
    },
  },
  {
    id: 'forest',
    name: 'Hidden Forest',
    shortName: 'Forest',
    entries: {
      0: {
        location: 'Forest Brook',
        reward: BLACK_REWARD,
      },
      1: {
        location: 'Boneyard',
        reward: BLACK_REWARD,
      },
      2: {
        location: 'Sacred Pond / Forest End',
        reward: redReward(2.5),
      },
      3: {
        location: 'Treehouse',
        reward: redReward(3.5),
      },
      4: {
        location: 'Elevated Clearing',
        reward: redReward(3.5),
      },
    },
  },
  {
    id: 'valley',
    name: 'Valley of Triumph',
    shortName: 'Valley',
    entries: {
      0: {
        location: 'Ice Rink',
        reward: BLACK_REWARD,
      },
      1: {
        location: 'Ice Rink',
        reward: BLACK_REWARD,
      },
      2: {
        location: 'Village of Dreams',
        reward: redReward(2.5),
      },
      3: {
        location: 'Village of Dreams',
        reward: redReward(2.5),
      },
      4: {
        location: 'Hermit Valley',
        reward: redReward(3.5),
      },
    },
  },
  {
    id: 'wasteland',
    name: 'Golden Wasteland',
    shortName: 'Wasteland',
    entries: {
      0: {
        location: 'Broken Temple',
        reward: BLACK_REWARD,
      },
      1: {
        location: 'Battlefield',
        reward: BLACK_REWARD,
      },
      2: {
        location: 'Graveyard',
        reward: redReward(2),
      },
      3: {
        location: 'Crab Fields',
        reward: redReward(2.5),
      },
      4: {
        location: 'Forgotten Ark',
        reward: redReward(3.5),
      },
    },
  },
  {
    id: 'vault',
    name: 'Vault of Knowledge',
    shortName: 'Vault',
    entries: {
      0: {
        location: 'Starlight Desert',
        reward: BLACK_REWARD,
      },
      1: {
        location: 'Starlight Desert',
        reward: BLACK_REWARD,
      },
      2: {
        location: 'Jellyfish Cove',
        reward: redReward(3.5),
      },
      3: {
        location: 'Jellyfish Cove',
        reward: redReward(3.5),
      },
      4: {
        location: 'Jellyfish Cove',
        reward: redReward(3.5),
      },
    },
  },
]

function positiveModulo(
  value,
  divisor
) {
  return (
    ((value % divisor) + divisor) %
    divisor
  )
}

function addCalendarDays(
  dateParts,
  amount
) {
  const normalizedDate = new Date(
    Date.UTC(
      dateParts.year,
      dateParts.month - 1,
      dateParts.day + amount
    )
  )

  return {
    year:
      normalizedDate.getUTCFullYear(),
    month:
      normalizedDate.getUTCMonth() + 1,
    day:
      normalizedDate.getUTCDate(),
  }
}

function getCalendarWeekday(
  dateParts
) {
  return new Date(
    Date.UTC(
      dateParts.year,
      dateParts.month - 1,
      dateParts.day
    )
  ).getUTCDay()
}

function getTimingGroupId(
  dayOfMonth
) {
  return SHARD_TIMING_CYCLE[
    positiveModulo(
      dayOfMonth - 1,
      SHARD_TIMING_CYCLE.length
    )
  ]
}

function getRealm(
  dayOfMonth
) {
  return SHARD_REALMS[
    positiveModulo(
      dayOfMonth - 1,
      SHARD_REALMS.length
    )
  ]
}

function formatWindowDateLabel(
  startAt,
  endAt,
  visitorTimeZone
) {
  const startLabel =
    formatDateInZone(
      startAt,
      visitorTimeZone,
      {
        includeWeekday: true,
      }
    )

  const endLabel =
    formatDateInZone(
      endAt,
      visitorTimeZone,
      {
        includeWeekday: true,
      }
    )

  return startLabel === endLabel
    ? startLabel
    : `${startLabel} – ${endLabel}`
}

function createShardWindows(
  skyDate,
  timingGroup,
  visitorTimeZone
) {
  return timingGroup.starts.map(
    (startTime, index) => {
      const startAt =
        zonedDateTimeToDate(
          {
            year: skyDate.year,
            month: skyDate.month,
            day: skyDate.day,
            hour: startTime.hour,
            minute: startTime.minute,
            second: startTime.second,
          },
          SKY_TIME_ZONE
        )

      const endAt = new Date(
        startAt.getTime() +
          SHARD_WINDOW_DURATION_SECONDS *
            1000
      )

      return {
        id: index + 1,
        label:
          index === 0
            ? 'First shard'
            : index === 1
              ? 'Second shard'
              : 'Last shard',
        startAt,
        endAt,
        startIso:
          startAt.toISOString(),
        endIso:
          endAt.toISOString(),
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
          formatWindowDateLabel(
            startAt,
            endAt,
            visitorTimeZone
          ),
        skyStartLabel:
          formatTimeInZone(
            startAt,
            SKY_TIME_ZONE
          ),
        skyEndLabel:
          formatTimeInZone(
            endAt,
            SKY_TIME_ZONE
          ),
      }
    }
  )
}

function buildShardDay(
  skyDate,
  visitorTimeZone
) {
  const timingGroupId =
    getTimingGroupId(
      skyDate.day
    )

  const timingGroup =
    SHARD_TIMING_GROUPS[
      timingGroupId
    ]

  const realm =
    getRealm(skyDate.day)

  const entry =
    realm.entries[
      timingGroupId
    ]

  const weekday =
    getCalendarWeekday(
      skyDate
    )

  const hasShard =
    !timingGroup.noShardWeekdays
      .includes(weekday)

  const skyDateProbe =
    zonedDateTimeToDate(
      {
        ...skyDate,
        hour: 12,
        minute: 0,
        second: 0,
      },
      SKY_TIME_ZONE
    )

  const windows = hasShard
    ? createShardWindows(
        skyDate,
        timingGroup,
        visitorTimeZone
      )
    : []

  return {
    skyDate,
    skyDateIso: [
      skyDate.year,
      String(
        skyDate.month
      ).padStart(2, '0'),
      String(
        skyDate.day
      ).padStart(2, '0'),
    ].join('-'),
    skyDateLabel:
      formatDateInZone(
        skyDateProbe,
        SKY_TIME_ZONE,
        {
          includeWeekday: true,
        }
      ),
    localCalendarDateLabel:
      formatDateInZone(
        skyDateProbe,
        visitorTimeZone,
        {
          includeWeekday: true,
        }
      ),
    weekday,
    timingGroupId,
    timingGroup,
    type:
      timingGroup.type,
    typeLabel:
      timingGroup.type === 'red'
        ? 'Red Shard'
        : 'Black Shard',
    isRed:
      timingGroup.type === 'red',
    isBlack:
      timingGroup.type === 'black',
    realm,
    location:
      entry.location,
    reward:
      entry.reward,
    memory:
      timingGroup.type === 'red'
        ? 'Random Shard Memory'
        : 'No memory',
    hasShard,
    windows,
  }
}

function findNextShardDay(
  skyDate,
  visitorTimeZone
) {
  for (
    let offset = 1;
    offset <= 10;
    offset += 1
  ) {
    const candidateSkyDate =
      addCalendarDays(
        skyDate,
        offset
      )

    const candidate =
      buildShardDay(
        candidateSkyDate,
        visitorTimeZone
      )

    if (
      candidate.hasShard &&
      candidate.windows.length > 0
    ) {
      return {
        ...candidate,
        daysAway: offset,
        firstWindow:
          candidate.windows[0],
      }
    }
  }

  return null
}

function getStatus(
  now,
  shardDay
) {
  if (!shardDay.hasShard) {
    return {
      id: 'no-shard',
      label: 'No shard today',
      description:
        'No eruption is scheduled for this Sky day.',
      activeWindow: null,
      nextWindow: null,
    }
  }

  const nowMs = now.getTime()

  const activeWindow =
    shardDay.windows.find(
      (window) =>
        nowMs >=
          window.startAt.getTime() &&
        nowMs <
          window.endAt.getTime()
    ) || null

  if (activeWindow) {
    return {
      id: 'active',
      label: 'Shard active now',
      description:
        `${activeWindow.label} is currently active.`,
      activeWindow,
      nextWindow: null,
    }
  }

  const nextWindow =
    shardDay.windows.find(
      (window) =>
        window.startAt.getTime() >
        nowMs
    ) || null

  if (nextWindow) {
    const isFirst =
      nextWindow.id === 1

    return {
      id: isFirst
        ? 'upcoming'
        : 'between',
      label: isFirst
        ? 'Shard incoming'
        : 'Waiting for next shard',
      description:
        `${nextWindow.label} has not landed yet.`,
      activeWindow: null,
      nextWindow,
    }
  }

  return {
    id: 'ended',
    label: 'All shards ended',
    description:
      'All three eruption windows have finished for this Sky day.',
    activeWindow: null,
    nextWindow: null,
  }
}

export function getShardPrediction(
  date = new Date(),
  visitorTimeZone =
    getVisitorTimeZone()
) {
  const safeVisitorTimeZone =
    isValidTimeZone(
      visitorTimeZone
    )
      ? visitorTimeZone
      : 'UTC'

  const skyDate =
    getZonedParts(
      date,
      SKY_TIME_ZONE
    )

  const shardDay =
    buildShardDay(
      {
        year: skyDate.year,
        month: skyDate.month,
        day: skyDate.day,
      },
      safeVisitorTimeZone
    )

  const status =
    getStatus(
      date,
      shardDay
    )

  const nextShardDay =
    status.id === 'no-shard' ||
    status.id === 'ended'
      ? findNextShardDay(
          shardDay.skyDate,
          safeVisitorTimeZone
        )
      : null

  const targetAt =
    status.activeWindow?.endAt ||
    status.nextWindow?.startAt ||
    nextShardDay?.firstWindow
      ?.startAt ||
    null

  const countdownSeconds =
    targetAt
      ? Math.max(
          0,
          Math.floor(
            (
              targetAt.getTime() -
              date.getTime()
            ) / 1000
          )
        )
      : 0

  const activeProgress =
    status.activeWindow
      ? Math.min(
          100,
          Math.max(
            0,
            (
              (
                date.getTime() -
                status.activeWindow
                  .startAt
                  .getTime()
              ) /
              (
                status.activeWindow
                  .endAt
                  .getTime() -
                status.activeWindow
                  .startAt
                  .getTime()
              )
            ) * 100
          )
        )
      : 0

  const countdownLabel =
    status.id === 'active'
      ? 'Ending in'
      : status.id ===
          'no-shard' ||
        status.id === 'ended'
        ? 'Next shard lands in'
        : 'Landing in'

  return {
    now: date,
    visitorTimeZone:
      safeVisitorTimeZone,
    visitorTimeZoneLabel:
      getTimeZoneShortLabel(
        date,
        safeVisitorTimeZone
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
    skyTimeLabel:
      formatTimeInZone(
        date,
        SKY_TIME_ZONE,
        {
          includeSeconds: true,
        }
      ),
    skyTimeZoneLabel:
      getTimeZoneShortLabel(
        date,
        SKY_TIME_ZONE
      ),
    status,
    statusId: status.id,
    statusLabel:
      status.label,
    statusDescription:
      status.description,
    isActive:
      status.id === 'active',
    isUpcoming:
      status.id === 'upcoming' ||
      status.id === 'between',
    isEnded:
      status.id === 'ended',
    activeWindow:
      status.activeWindow,
    nextWindow:
      status.nextWindow,
    countdownLabel,
    countdownSeconds,
    countdownTargetAt:
      targetAt,
    activeProgress,
    nextShardDay,
    nextShardDateTimeLabel:
      nextShardDay
        ? formatDateTimeInZone(
            nextShardDay
              .firstWindow
              .startAt,
            safeVisitorTimeZone,
            {
              includeWeekday: true,
            }
          )
        : null,
    ...shardDay,
  }
}

export function getShardPredictionForDate(
  year,
  month,
  day,
  visitorTimeZone =
    getVisitorTimeZone()
) {
  const date =
    zonedDateTimeToDate(
      {
        year,
        month,
        day,
        hour: 12,
        minute: 0,
        second: 0,
      },
      SKY_TIME_ZONE
    )

  return getShardPrediction(
    date,
    visitorTimeZone
  )
}
