import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  getBrowserNotificationSupport,
  hasSentSkyEventNotification,
  markSkyEventNotificationSent,
  readSkyEventNotificationSettings,
  requestSkyEventNotificationPermission,
  showSkyEventBrowserNotification,
  subscribeSkyEventNotificationSettings,
  writeSkyEventNotificationSettings,
} from '../utils/skyEventNotifications'

function getOccurrenceKey(
  id,
  phase,
  startAt
) {
  return [
    id,
    phase,
    startAt.toISOString(),
  ].join(':')
}

function formatLeadLabel(seconds) {
  const minutes = Math.max(
    1,
    Math.ceil(seconds / 60)
  )

  return `${minutes} minute${
    minutes === 1 ? '' : 's'
  }`
}

function getShardDisplayData(
  prediction,
  mode
) {
  const useNextDay =
    mode === 'upcoming' &&
    !prediction.nextWindow &&
    prediction.nextShardDay

  const source =
    useNextDay
      ? prediction.nextShardDay
      : prediction

  return {
    typeLabel:
      source?.typeLabel ||
      'Shard',
    realm:
      source?.realm?.name ||
      source?.realm?.shortName ||
      'Sky Kingdom',
    location:
      source?.location ||
      'Shard location',
    reward:
      source?.reward?.shortLabel ||
      'Shard reward',
  }
}

export default function useSkyEventNotifications({
  now,
  eventSchedule = [],
  shardPrediction,
}) {
  const [
    settings,
    setSettings,
  ] = useState(
    readSkyEventNotificationSettings
  )

  const [
    permission,
    setPermission,
  ] = useState(
    () =>
      getBrowserNotificationSupport()
        .permission
  )

  const support = useMemo(
    () =>
      getBrowserNotificationSupport(),
    [permission]
  )

  useEffect(
    () =>
      subscribeSkyEventNotificationSettings(
        setSettings
      ),
    []
  )

  useEffect(() => {
    if (
      typeof window ===
      'undefined'
    ) {
      return undefined
    }

    const refreshPermission = () => {
      setPermission(
        getBrowserNotificationSupport()
          .permission
      )
    }

    const handleVisibilityChange =
      () => {
        if (
          document.visibilityState ===
          'visible'
        ) {
          refreshPermission()
        }
      }

    window.addEventListener(
      'focus',
      refreshPermission
    )

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    )

    return () => {
      window.removeEventListener(
        'focus',
        refreshPermission
      )

      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      )
    }
  }, [])

  const replaceSettings =
    useCallback(
      (nextValue) => {
        const saved =
          writeSkyEventNotificationSettings(
            nextValue
          )

        setSettings(saved)
        return saved
      },
      []
    )

  const updateSettings =
    useCallback(
      (patch) =>
        replaceSettings({
          ...settings,
          ...patch,
          events: {
            ...settings.events,
            ...(
              patch.events || {}
            ),
          },
        }),
      [
        replaceSettings,
        settings,
      ]
    )

  const setEventEnabled =
    useCallback(
      (
        eventId,
        enabled
      ) => {
        updateSettings({
          events: {
            [eventId]:
              Boolean(enabled),
          },
        })
      },
      [updateSettings]
    )

  const requestPermission =
    useCallback(async () => {
      const result =
        await requestSkyEventNotificationPermission()

      setPermission(result)

      if (result === 'granted') {
        updateSettings({
          enabled: true,
        })

        showSkyEventBrowserNotification({
          title:
            'SkykidHero alerts enabled',
          body:
            'Sky Clock will notify you about the events you select.',
          tag:
            'skykidhero-notifications-enabled',
          data: {
            type: 'test',
          },
        })
      }

      return result
    }, [updateSettings])

  const sendTestNotification =
    useCallback(() => {
      return showSkyEventBrowserNotification({
        title:
          'SkykidHero event reminder',
        body:
          'Your Sky Clock notifications are working.',
        tag:
          `skykidhero-test-${Date.now()}`,
        data: {
          type: 'test',
        },
      })
    }, [])

  useEffect(() => {
    if (
      !now ||
      !settings.enabled ||
      permission !== 'granted'
    ) {
      return
    }

    const leadSeconds =
      settings.leadMinutes * 60

    const sendOnce = ({
      key,
      title,
      body,
      tag,
      data,
    }) => {
      if (
        hasSentSkyEventNotification(
          key
        )
      ) {
        return
      }

      const sent =
        showSkyEventBrowserNotification({
          title,
          body,
          tag,
          data,
        })

      if (sent) {
        markSkyEventNotificationSent(
          key
        )
      }
    }

    eventSchedule.forEach(
      (schedule) => {
        if (
          !settings.events[
            schedule.id
          ]
        ) {
          return
        }

        if (
          settings.notifyLive &&
          schedule.activeEvent
        ) {
          const active =
            schedule.activeEvent

          const key =
            getOccurrenceKey(
              schedule.id,
              'live',
              active.startAt
            )

          sendOnce({
            key,
            title:
              `${schedule.name} is live`,
            body:
              `Now until ${active.localEndLabel} · ${active.localDateLabel}`,
            tag: key,
            data: {
              eventId:
                schedule.id,
              phase: 'live',
              startsAt:
                active.startIso,
            },
          })
        }

        if (
          settings.notifyUpcoming &&
          schedule.nextOccurrence
        ) {
          const upcoming =
            schedule.nextOccurrence

          const startsIn =
            Math.max(
              0,
              Math.floor(
                (
                  upcoming.startAt
                    .getTime() -
                  now.getTime()
                ) / 1000
              )
            )

          if (
            startsIn > 0 &&
            startsIn <= leadSeconds
          ) {
            const key =
              getOccurrenceKey(
                schedule.id,
                'upcoming',
                upcoming.startAt
              )

            sendOnce({
              key,
              title:
                `${schedule.name} starts soon`,
              body:
                `Starts in ${formatLeadLabel(
                  startsIn
                )} · ${upcoming.localStartLabel}–${upcoming.localEndLabel}`,
              tag: key,
              data: {
                eventId:
                  schedule.id,
                phase:
                  'upcoming',
                startsAt:
                  upcoming.startIso,
              },
            })
          }
        }
      }
    )

    if (
      !shardPrediction ||
      !settings.events.shard
    ) {
      return
    }

    if (
      settings.notifyLive &&
      shardPrediction.isActive &&
      shardPrediction.activeWindow
    ) {
      const activeWindow =
        shardPrediction.activeWindow

      const display =
        getShardDisplayData(
          shardPrediction,
          'live'
        )

      const key =
        getOccurrenceKey(
          'shard',
          'live',
          activeWindow.startAt
        )

      sendOnce({
        key,
        title:
          `${display.typeLabel} Shard is live`,
        body:
          `${display.realm} · ${display.location} · ${display.reward}`,
        tag: key,
        data: {
          eventId: 'shard',
          phase: 'live',
          startsAt:
            activeWindow.startAt
              .toISOString(),
        },
      })
    }

    if (
      settings.notifyUpcoming &&
      !shardPrediction.isActive
    ) {
      const nextWindow =
        shardPrediction.nextWindow ||
        shardPrediction
          .nextShardDay
          ?.firstWindow ||
        null

      if (!nextWindow?.startAt) {
        return
      }

      const startsIn =
        Math.max(
          0,
          Math.floor(
            (
              nextWindow.startAt
                .getTime() -
              now.getTime()
            ) / 1000
          )
        )

      if (
        startsIn > 0 &&
        startsIn <= leadSeconds
      ) {
        const display =
          getShardDisplayData(
            shardPrediction,
            'upcoming'
          )

        const key =
          getOccurrenceKey(
            'shard',
            'upcoming',
            nextWindow.startAt
          )

        sendOnce({
          key,
          title:
            `${display.typeLabel} Shard lands soon`,
          body:
            `In ${formatLeadLabel(
              startsIn
            )} · ${display.realm} · ${display.location}`,
          tag: key,
          data: {
            eventId: 'shard',
            phase:
              'upcoming',
            startsAt:
              nextWindow.startAt
                .toISOString(),
          },
        })
      }
    }
  }, [
    eventSchedule,
    now,
    permission,
    settings,
    shardPrediction,
  ])

  return {
    settings,
    permission,
    support,
    updateSettings,
    setEventEnabled,
    requestPermission,
    sendTestNotification,
  }
}
