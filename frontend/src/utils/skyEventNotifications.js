export const SKY_EVENT_NOTIFICATION_STORAGE_KEY =
  'skykidhero:sky-event-notifications:v1'

export const SKY_EVENT_NOTIFICATION_SENT_KEY =
  'skykidhero:sky-event-notifications:sent:v1'

export const SKY_EVENT_NOTIFICATION_PROMPT_KEY =
  'skykidhero:sky-event-notifications:prompt:v1'

export const SKY_EVENT_NOTIFICATION_SETTINGS_EVENT =
  'skykidhero:sky-event-notification-settings'

export const SKY_NOTIFICATION_EVENT_OPTIONS = [
  {
    id: 'geyser',
    label: 'Geyser',
    description:
      'Polluted Geyser eruption',
    icon: 'fire',
  },
  {
    id: 'grandma',
    label: 'Grandma',
    description:
      'Grandma’s shared-space dinner',
    icon: 'group',
  },
  {
    id: 'turtle',
    label: 'Turtle',
    description:
      'Sanctuary Turtle event',
    icon: 'sparkles',
  },
  {
    id: 'fireworks',
    label: 'Fireworks',
    description:
      'Monthly fireworks event',
    icon: 'fireworks',
  },
  {
    id: 'aurora',
    label: 'AURORA',
    description:
      'AURORA concert',
    icon: 'music',
  },
  {
    id: 'shard',
    label: 'Shards',
    description:
      'Black and Red Shard eruptions',
    icon: 'shard',
  },
]

const DEFAULT_EVENT_FLAGS =
  Object.freeze(
    Object.fromEntries(
      SKY_NOTIFICATION_EVENT_OPTIONS.map(
        ({ id }) => [id, true]
      )
    )
  )

export const DEFAULT_SKY_EVENT_NOTIFICATION_SETTINGS =
  Object.freeze({
    version: 1,
    enabled: false,
    notifyUpcoming: true,
    notifyLive: true,
    leadMinutes: 5,
    events: DEFAULT_EVENT_FLAGS,
  })

const PROMPT_SNOOZE_DAYS = 7
const MAX_SENT_KEYS = 160

function canUseWindow() {
  return (
    typeof window !== 'undefined'
  )
}

function canUseStorage() {
  return (
    canUseWindow() &&
    typeof window.localStorage !==
      'undefined'
  )
}

function safeParse(value, fallback) {
  if (!value) {
    return fallback
  }

  try {
    return JSON.parse(value)
  } catch {
    return fallback
  }
}

function normalizeBoolean(
  value,
  fallback
) {
  return typeof value === 'boolean'
    ? value
    : fallback
}

function normalizeLeadMinutes(value) {
  const numericValue =
    Number(value)

  return [5, 10, 15, 30].includes(
    numericValue
  )
    ? numericValue
    : 5
}

export function normalizeSkyEventNotificationSettings(
  value
) {
  const source =
    value &&
    typeof value === 'object'
      ? value
      : {}

  const sourceEvents =
    source.events &&
    typeof source.events === 'object'
      ? source.events
      : {}

  return {
    version: 1,
    enabled:
      normalizeBoolean(
        source.enabled,
        false
      ),
    notifyUpcoming:
      normalizeBoolean(
        source.notifyUpcoming,
        true
      ),
    notifyLive:
      normalizeBoolean(
        source.notifyLive,
        true
      ),
    leadMinutes:
      normalizeLeadMinutes(
        source.leadMinutes
      ),
    events:
      Object.fromEntries(
        SKY_NOTIFICATION_EVENT_OPTIONS.map(
          ({ id }) => [
            id,
            normalizeBoolean(
              sourceEvents[id],
              true
            ),
          ]
        )
      ),
  }
}

export function readSkyEventNotificationSettings() {
  if (!canUseStorage()) {
    return {
      ...DEFAULT_SKY_EVENT_NOTIFICATION_SETTINGS,
      events: {
        ...DEFAULT_EVENT_FLAGS,
      },
    }
  }

  const saved = safeParse(
    window.localStorage.getItem(
      SKY_EVENT_NOTIFICATION_STORAGE_KEY
    ),
    null
  )

  return normalizeSkyEventNotificationSettings(
    saved
  )
}

export function writeSkyEventNotificationSettings(
  nextValue
) {
  const normalized =
    normalizeSkyEventNotificationSettings(
      nextValue
    )

  if (!canUseStorage()) {
    return normalized
  }

  window.localStorage.setItem(
    SKY_EVENT_NOTIFICATION_STORAGE_KEY,
    JSON.stringify(normalized)
  )

  window.dispatchEvent(
    new CustomEvent(
      SKY_EVENT_NOTIFICATION_SETTINGS_EVENT,
      {
        detail: normalized,
      }
    )
  )

  return normalized
}

export function subscribeSkyEventNotificationSettings(
  listener
) {
  if (!canUseWindow()) {
    return () => {}
  }

  const handleCustomEvent = (
    event
  ) => {
    listener(
      normalizeSkyEventNotificationSettings(
        event.detail
      )
    )
  }

  const handleStorage = (
    event
  ) => {
    if (
      event.key ===
        SKY_EVENT_NOTIFICATION_STORAGE_KEY ||
      event.key === null
    ) {
      listener(
        readSkyEventNotificationSettings()
      )
    }
  }

  window.addEventListener(
    SKY_EVENT_NOTIFICATION_SETTINGS_EVENT,
    handleCustomEvent
  )

  window.addEventListener(
    'storage',
    handleStorage
  )

  return () => {
    window.removeEventListener(
      SKY_EVENT_NOTIFICATION_SETTINGS_EVENT,
      handleCustomEvent
    )

    window.removeEventListener(
      'storage',
      handleStorage
    )
  }
}

export function getBrowserNotificationSupport() {
  const supported =
    canUseWindow() &&
    'Notification' in window

  const secure =
    canUseWindow() &&
    window.isSecureContext

  return {
    supported,
    secure,
    available:
      supported && secure,
    permission:
      supported
        ? window.Notification
            .permission
        : 'unsupported',
  }
}

export async function requestSkyEventNotificationPermission() {
  const support =
    getBrowserNotificationSupport()

  if (!support.available) {
    return support.permission
  }

  try {
    return await window.Notification
      .requestPermission()
  } catch {
    return window.Notification
      .permission
  }
}

export function showSkyEventBrowserNotification({
  title,
  body,
  tag,
  icon = '/favicon.ico',
  data = {},
}) {
  const support =
    getBrowserNotificationSupport()

  if (
    !support.available ||
    support.permission !== 'granted'
  ) {
    return false
  }

  try {
    const notification =
      new window.Notification(
        title,
        {
          body,
          tag,
          icon,
          badge: icon,
          data,
          renotify: false,
        }
      )

    notification.onclick = () => {
      window.focus()
      notification.close()
    }

    return true
  } catch {
    return false
  }
}

function readSentKeys() {
  if (!canUseStorage()) {
    return []
  }

  const value = safeParse(
    window.localStorage.getItem(
      SKY_EVENT_NOTIFICATION_SENT_KEY
    ),
    []
  )

  return Array.isArray(value)
    ? value.filter(
        (item) =>
          typeof item === 'string'
      )
    : []
}

export function hasSentSkyEventNotification(
  key
) {
  return readSentKeys().includes(
    key
  )
}

export function markSkyEventNotificationSent(
  key
) {
  if (!canUseStorage()) {
    return
  }

  const nextKeys = [
    ...readSentKeys().filter(
      (item) => item !== key
    ),
    key,
  ].slice(-MAX_SENT_KEYS)

  window.localStorage.setItem(
    SKY_EVENT_NOTIFICATION_SENT_KEY,
    JSON.stringify(nextKeys)
  )
}

export function clearSkyEventNotificationHistory() {
  if (!canUseStorage()) {
    return
  }

  window.localStorage.removeItem(
    SKY_EVENT_NOTIFICATION_SENT_KEY
  )
}

export function dismissSkyEventNotificationPrompt() {
  if (!canUseStorage()) {
    return
  }

  window.localStorage.setItem(
    SKY_EVENT_NOTIFICATION_PROMPT_KEY,
    JSON.stringify({
      dismissedAt:
        new Date().toISOString(),
    })
  )
}

export function clearSkyEventNotificationPromptDismissal() {
  if (!canUseStorage()) {
    return
  }

  window.localStorage.removeItem(
    SKY_EVENT_NOTIFICATION_PROMPT_KEY
  )
}

export function shouldShowSkyEventNotificationPrompt() {
  const support =
    getBrowserNotificationSupport()

  if (
    !support.available ||
    support.permission !== 'default'
  ) {
    return false
  }

  if (!canUseStorage()) {
    return true
  }

  const record = safeParse(
    window.localStorage.getItem(
      SKY_EVENT_NOTIFICATION_PROMPT_KEY
    ),
    null
  )

  const dismissedAt =
    record?.dismissedAt
      ? new Date(
          record.dismissedAt
        )
      : null

  if (
    !dismissedAt ||
    Number.isNaN(
      dismissedAt.getTime()
    )
  ) {
    return true
  }

  const elapsedMs =
    Date.now() -
    dismissedAt.getTime()

  return (
    elapsedMs >=
    PROMPT_SNOOZE_DAYS *
      24 *
      60 *
      60 *
      1000
  )
}
