import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  createPortal,
} from 'react-dom'

import {
  AdjustmentsHorizontalIcon,
  BellAlertIcon,
  BellIcon,
  BellSlashIcon,
  CheckCircleIcon,
  ClockIcon,
  FireIcon,
  MusicalNoteIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import useSkyEventNotifications from '../../hooks/useSkyEventNotifications'

import {
  dismissSkyEventNotificationPrompt,
  shouldShowSkyEventNotificationPrompt,
  SKY_NOTIFICATION_EVENT_OPTIONS,
} from '../../utils/skyEventNotifications'

const EVENT_ICONS = {
  fire: FireIcon,
  group: UserGroupIcon,
  sparkles: SparklesIcon,
  fireworks: SparklesIcon,
  music: MusicalNoteIcon,
  shard: ShieldCheckIcon,
}

function SettingsSwitch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() =>
        onChange(!checked)
      }
      className={`
        flex
        w-full
        min-w-0
        items-center
        justify-between
        gap-3
        rounded-2xl
        border
        px-3
        py-3
        text-left
        transition

        ${
          checked
            ? 'border-[#fe7f2d]/30 bg-[#fe7f2d]/10'
            : 'border-white/10 bg-white/[0.035]'
        }

        ${
          disabled
            ? 'cursor-not-allowed opacity-45'
            : 'hover:border-[#fe7f2d]/45'
        }
      `}
    >
      <span className="min-w-0">
        <strong
          className="
            block
            text-sm
            font-black
            text-white
          "
        >
          {label}
        </strong>

        {description && (
          <span
            className="
              mt-0.5
              block
              text-[10px]
              leading-4
              text-white/40
            "
          >
            {description}
          </span>
        )}
      </span>

      <span
        aria-hidden="true"
        className={`
          relative
          h-6
          w-11
          shrink-0
          rounded-full
          transition

          ${
            checked
              ? 'bg-[#fe7f2d]'
              : 'bg-white/15'
          }
        `}
      >
        <span
          className={`
            absolute
            top-1
            h-4
            w-4
            rounded-full
            bg-white
            shadow
            transition-transform

            ${
              checked
                ? 'translate-x-6'
                : 'translate-x-1'
            }
          `}
        />
      </span>
    </button>
  )
}

function EventSwitch({
  option,
  checked,
  onChange,
  disabled,
}) {
  const Icon =
    EVENT_ICONS[option.icon] ||
    SparklesIcon

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() =>
        onChange(!checked)
      }
      className={`
        flex
        min-w-0
        items-center
        gap-3
        rounded-2xl
        border
        p-3
        text-left
        transition

        ${
          checked
            ? 'border-[#fe7f2d]/35 bg-[#fe7f2d]/10'
            : 'border-white/10 bg-white/[0.03]'
        }

        ${
          disabled
            ? 'cursor-not-allowed opacity-45'
            : 'hover:-translate-y-0.5 hover:border-[#fe7f2d]/50'
        }
      `}
    >
      <span
        className={`
          grid
          h-9
          w-9
          shrink-0
          place-items-center
          rounded-xl

          ${
            checked
              ? 'bg-[#fe7f2d] text-[#233d4d]'
              : 'bg-white/10 text-[#ff9b57]'
          }
        `}
      >
        <Icon
          aria-hidden="true"
          className="h-5 w-5"
        />
      </span>

      <span className="min-w-0 flex-1">
        <strong
          className="
            block
            truncate
            text-sm
            font-black
            text-white
          "
        >
          {option.label}
        </strong>

        <span
          className="
            mt-0.5
            block
            truncate
            text-[10px]
            text-white/35
          "
        >
          {option.description}
        </span>
      </span>

      <span
        aria-hidden="true"
        className={`
          h-2.5
          w-2.5
          shrink-0
          rounded-full

          ${
            checked
              ? 'bg-[#fe7f2d]'
              : 'bg-white/15'
          }
        `}
      />
    </button>
  )
}

function PermissionPrompt({
  onAllow,
  onDismiss,
}) {
  return createPortal(
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="sky-alert-prompt-title"
      className="
        fixed
        left-4
        top-4
        z-[100000]
        w-[calc(100vw-2rem)]
        max-w-sm
        overflow-hidden
        rounded-2xl
        border
        border-white/15
        bg-[#18212a]
        text-white
        shadow-[0_24px_80px_rgba(0,0,0,0.55)]

        sm:right-6
        sm:top-6
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-3
          px-4
          pt-4
        "
      >
        <div className="min-w-0">
          <h3
            id="sky-alert-prompt-title"
            className="
              truncate
              text-sm
              font-black
              text-white
            "
          >
            SkykidHero wants to
          </h3>

          <div
            className="
              mt-4
              flex
              items-center
              gap-3
            "
          >
            <BellIcon
              aria-hidden="true"
              className="
                h-5
                w-5
                shrink-0
                text-[#ff9b57]
              "
            />

            <p
              className="
                text-sm
                font-semibold
                text-white/90
              "
            >
              Show Sky event
              notifications
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification prompt"
          className="
            grid
            h-8
            w-8
            shrink-0
            place-items-center
            rounded-full
            text-white/55
            transition

            hover:bg-white/10
            hover:text-white
          "
        >
          <XMarkIcon
            className="h-5 w-5"
          />
        </button>
      </div>

      <p
        className="
          px-4
          pt-3
          text-[11px]
          leading-5
          text-white/40
        "
      >
        Choose the events you want,
        then receive reminders from
        the Sky Clock.
      </p>

      <div
        className="
          mt-4
          flex
          justify-end
          gap-2
          border-t
          border-white/10
          px-4
          py-4
        "
      >
        <button
          type="button"
          onClick={onDismiss}
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            px-4
            py-2
            text-sm
            font-black
            text-white/70
            transition

            hover:bg-white/10
            hover:text-white
          "
        >
          Not now
        </button>

        <button
          type="button"
          onClick={onAllow}
          className="
            rounded-full
            bg-[#fe7f2d]
            px-5
            py-2
            text-sm
            font-black
            text-[#233d4d]
            transition

            hover:bg-[#ff9b57]
          "
        >
          Allow
        </button>
      </div>
    </aside>,
    document.body
  )
}

function NotificationSettingsModal({
  open,
  onClose,
  settings,
  permission,
  support,
  updateSettings,
  setEventEnabled,
  requestPermission,
  sendTestNotification,
}) {
  useEffect(() => {
    if (
      !open ||
      typeof document ===
        'undefined'
    ) {
      return undefined
    }

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow =
      'hidden'

    const handleEscape = (
      event
    ) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener(
      'keydown',
      handleEscape
    )

    return () => {
      document.body.style.overflow =
        previousOverflow

      document.removeEventListener(
        'keydown',
        handleEscape
      )
    }
  }, [open, onClose])

  if (
    !open ||
    typeof document ===
      'undefined'
  ) {
    return null
  }

  const canConfigure =
    permission === 'granted'

  return createPortal(
    <div
      role="presentation"
      onPointerDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose()
        }
      }}
      className="
        fixed
        inset-0
        z-[100000]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black/75
        p-5
        backdrop-blur-sm

        sm:p-8
      "
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="sky-alert-settings-title"
        onPointerDown={(event) =>
          event.stopPropagation()
        }
        className="
          flex
          max-h-[calc(100dvh-2.5rem)]
          w-full
          max-w-2xl
          min-w-0
          flex-col
          overflow-hidden
          rounded-[1.75rem]
          border-2
          border-[#fe7f2d]
          bg-[#102a37]
          text-white
          shadow-[0_30px_100px_rgba(0,0,0,0.60)]

          sm:max-h-[calc(100dvh-4rem)]
        "
      >
        <header
          className="
            flex
            shrink-0
            items-start
            justify-between
            gap-4
            border-b
            border-white/10
            bg-[#102a37]
            px-4
            py-4

            sm:px-6
          "
        >
          <div
            className="
              flex
              min-w-0
              items-start
              gap-3
            "
          >
            <span
              className="
                grid
                h-11
                w-11
                shrink-0
                place-items-center
                rounded-2xl
                bg-[#fe7f2d]
                text-[#233d4d]
              "
            >
              <BellAlertIcon
                className="h-6 w-6"
              />
            </span>

            <div className="min-w-0">
              <p
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#ff9b57]
                "
              >
                Sky Clock
              </p>

              <h3
                id="sky-alert-settings-title"
                className="
                  mt-0.5
                  text-xl
                  font-black
                  text-white

                  sm:text-2xl
                "
              >
                Event notifications
              </h3>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-white/40
                "
              >
                Choose which Sky events
                can notify this browser.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close notification settings"
            className="
              grid
              h-9
              w-9
              shrink-0
              place-items-center
              rounded-full
              border
              border-white/10
              bg-black/20
              text-white/60
              transition

              hover:border-[#fe7f2d]/40
              hover:bg-[#fe7f2d]
              hover:text-[#233d4d]
            "
          >
            <XMarkIcon
              className="h-5 w-5"
            />
          </button>
        </header>

        <div
          className="
            min-h-0
            flex-1
            space-y-5
            overflow-y-auto
            overscroll-contain
            px-4
            py-5

            sm:px-6
          "
        >
          {!support.supported && (
            <div
              className="
                rounded-2xl
                border
                border-red-300/20
                bg-red-300/10
                p-4
                text-sm
                leading-6
                text-red-100
              "
            >
              This browser does not
              support web notifications.
            </div>
          )}

          {support.supported &&
            !support.secure && (
              <div
                className="
                  rounded-2xl
                  border
                  border-red-300/20
                  bg-red-300/10
                  p-4
                  text-sm
                  leading-6
                  text-red-100
                "
              >
                Notifications require an
                HTTPS connection or
                localhost.
              </div>
            )}

          {support.available &&
            permission === 'denied' && (
              <div
                className="
                  rounded-2xl
                  border
                  border-red-300/20
                  bg-red-300/10
                  p-4
                "
              >
                <strong
                  className="
                    block
                    text-sm
                    font-black
                    text-red-100
                  "
                >
                  Notifications are
                  blocked
                </strong>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-red-100/65
                  "
                >
                  Open the browser’s site
                  controls beside the
                  address bar, allow
                  notifications, then
                  return to this page.
                </p>
              </div>
            )}

          {support.available &&
            permission === 'default' && (
              <div
                className="
                  rounded-2xl
                  border
                  border-[#fe7f2d]/25
                  bg-[#fe7f2d]/10
                  p-4
                "
              >
                <strong
                  className="
                    block
                    text-sm
                    font-black
                    text-white
                  "
                >
                  Permission is required
                </strong>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-white/45
                  "
                >
                  Your browser will show
                  its own permission
                  prompt after you tap
                  Enable.
                </p>

                <button
                  type="button"
                  onClick={
                    requestPermission
                  }
                  className="
                    mt-3
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#fe7f2d]
                    px-4
                    py-2
                    text-sm
                    font-black
                    text-[#233d4d]
                    transition

                    hover:bg-[#ff9b57]
                  "
                >
                  <BellAlertIcon
                    className="h-4 w-4"
                  />

                  Enable notifications
                </button>
              </div>
            )}

          <SettingsSwitch
            checked={
              canConfigure &&
              settings.enabled
            }
            onChange={(enabled) =>
              updateSettings({
                enabled,
              })
            }
            label="Event notifications"
            description="Master switch for all Sky Clock alerts."
            disabled={!canConfigure}
          />

          <div>
            <div
              className="
                mb-2
                flex
                items-center
                gap-2
              "
            >
              <AdjustmentsHorizontalIcon
                className="
                  h-4
                  w-4
                  text-[#fe7f2d]
                "
              />

              <h4
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.14em]
                  text-white/65
                "
              >
                Reminder behavior
              </h4>
            </div>

            <div
              className="
                grid
                gap-2

                sm:grid-cols-2
              "
            >
              <SettingsSwitch
                checked={
                  settings.notifyUpcoming
                }
                onChange={(
                  notifyUpcoming
                ) =>
                  updateSettings({
                    notifyUpcoming,
                  })
                }
                label="Before an event"
                description={`Notify ${settings.leadMinutes} minutes before it begins.`}
                disabled={
                  !canConfigure ||
                  !settings.enabled
                }
              />

              <SettingsSwitch
                checked={
                  settings.notifyLive
                }
                onChange={(
                  notifyLive
                ) =>
                  updateSettings({
                    notifyLive,
                  })
                }
                label="When it goes live"
                description="Send a second alert at the event start."
                disabled={
                  !canConfigure ||
                  !settings.enabled
                }
              />
            </div>

            <label
              className="
                mt-2
                flex
                items-center
                justify-between
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
                px-3
                py-3
              "
            >
              <span
                className="
                  flex
                  min-w-0
                  items-center
                  gap-3
                "
              >
                <ClockIcon
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-[#ff9b57]
                  "
                />

                <span className="min-w-0">
                  <strong
                    className="
                      block
                      text-sm
                      font-black
                      text-white
                    "
                  >
                    Advance reminder
                  </strong>

                  <span
                    className="
                      mt-0.5
                      block
                      text-[10px]
                      text-white/40
                    "
                  >
                    Applied to all
                    enabled events.
                  </span>
                </span>
              </span>

              <select
                value={
                  settings.leadMinutes
                }
                onChange={(event) =>
                  updateSettings({
                    leadMinutes:
                      Number(
                        event.target
                          .value
                      ),
                  })
                }
                disabled={
                  !canConfigure ||
                  !settings.enabled ||
                  !settings.notifyUpcoming
                }
                className="
                  shrink-0
                  rounded-xl
                  border
                  border-[#fe7f2d]/25
                  bg-[#071820]
                  px-3
                  py-2
                  text-sm
                  font-black
                  text-white
                  outline-none

                  focus:border-[#fe7f2d]

                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <option value={5}>
                  5 min
                </option>
                <option value={10}>
                  10 min
                </option>
                <option value={15}>
                  15 min
                </option>
                <option value={30}>
                  30 min
                </option>
              </select>
            </label>
          </div>

          <div>
            <div
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
                  items-center
                  gap-2
                "
              >
                <SparklesIcon
                  className="
                    h-4
                    w-4
                    text-[#fe7f2d]
                  "
                />

                <h4
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.14em]
                    text-white/65
                  "
                >
                  Event alerts
                </h4>
              </div>

              <span
                className="
                  text-[10px]
                  text-white/30
                "
              >
                Saved on this browser
              </span>
            </div>

            <div
              className="
                grid
                gap-2

                sm:grid-cols-2
              "
            >
              {SKY_NOTIFICATION_EVENT_OPTIONS.map(
                (option) => (
                  <EventSwitch
                    key={option.id}
                    option={option}
                    checked={
                      settings.events[
                        option.id
                      ]
                    }
                    onChange={(
                      enabled
                    ) =>
                      setEventEnabled(
                        option.id,
                        enabled
                      )
                    }
                    disabled={
                      !canConfigure ||
                      !settings.enabled
                    }
                  />
                )
              )}
            </div>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-[#071820]/55
              p-4
            "
          >
            <div
              className="
                flex
                items-start
                gap-3
              "
            >
              <CheckCircleIcon
                className="
                  mt-0.5
                  h-5
                  w-5
                  shrink-0
                  text-[#fe7f2d]
                "
              />

              <div>
                <strong
                  className="
                    block
                    text-sm
                    font-black
                    text-white
                  "
                >
                  Uses your Sky Clock
                </strong>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-white/40
                  "
                >
                  Event times, visitor
                  timezone conversion,
                  daylight-saving
                  handling, and Shard
                  prediction all come
                  from the existing Sky
                  Clock logic.
                </p>

                <p
                  className="
                    mt-2
                    text-[10px]
                    leading-5
                    text-white/30
                  "
                >
                  Keep SkykidHero open in
                  this browser for timed
                  alerts. A push server
                  is not used.
                </p>
              </div>
            </div>

            {permission === 'granted' && (
              <button
                type="button"
                onClick={
                  sendTestNotification
                }
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#fe7f2d]/30
                  bg-[#fe7f2d]/10
                  px-4
                  py-2
                  text-sm
                  font-black
                  text-[#ff9b57]
                  transition

                  hover:bg-[#fe7f2d]
                  hover:text-[#233d4d]
                "
              >
                <BellIcon
                  className="h-4 w-4"
                />

                Send test notification
              </button>
            )}
          </div>
        </div>
      </section>
    </div>,
    document.body
  )
}

export default function SkyEventNotificationCenter({
  now,
  eventSchedule,
  shardPrediction,
}) {
  const [
    settingsOpen,
    setSettingsOpen,
  ] = useState(false)

  const [
    promptOpen,
    setPromptOpen,
  ] = useState(false)

  const {
    settings,
    permission,
    support,
    updateSettings,
    setEventEnabled,
    requestPermission,
    sendTestNotification,
  } = useSkyEventNotifications({
    now,
    eventSchedule,
    shardPrediction,
  })

  useEffect(() => {
    if (
      typeof document ===
        'undefined' ||
      !shouldShowSkyEventNotificationPrompt()
    ) {
      setPromptOpen(false)
      return undefined
    }

    const timer =
      window.setTimeout(() => {
        setPromptOpen(true)
      }, 900)

    return () => {
      window.clearTimeout(timer)
    }
  }, [
    permission,
    support.available,
  ])

  const enabledEventCount =
    useMemo(
      () =>
        Object.values(
          settings.events
        ).filter(Boolean).length,
      [settings.events]
    )

  const alertsActive =
    permission === 'granted' &&
    settings.enabled

  const buttonLabel =
    permission === 'denied'
      ? 'Alerts blocked'
      : alertsActive
        ? `${enabledEventCount} alerts on`
        : permission === 'granted'
          ? 'Alerts off'
          : 'Enable alerts'

  const ButtonIcon =
    permission === 'denied'
      ? BellSlashIcon
      : alertsActive
        ? BellAlertIcon
        : BellIcon

  const dismissPrompt = () => {
    dismissSkyEventNotificationPrompt()
    setPromptOpen(false)
  }

  const allowFromPrompt =
    async () => {
      const result =
        await requestPermission()

      setPromptOpen(false)

      if (result === 'granted') {
        setSettingsOpen(true)
      }
    }

  return (
    <div
      className="
        col-span-2
        min-w-0

        sm:col-span-1
      "
    >
      <button
        type="button"
        onClick={() =>
          setSettingsOpen(true)
        }
        aria-label="Open Sky event notification settings"
        className={`
          flex
          h-full
          min-h-[3.25rem]
          w-full
          min-w-0
          items-center
          gap-2.5
          rounded-2xl
          border
          px-3
          py-2
          text-left
          transition

          ${
            alertsActive
              ? 'border-[#fe7f2d]/30 bg-[#fe7f2d]/10'
              : 'border-white/10 bg-white/[0.04]'
          }

          hover:-translate-y-0.5
          hover:border-[#fe7f2d]/45

          sm:min-w-36
        `}
      >
        <span
          className={`
            grid
            h-9
            w-9
            shrink-0
            place-items-center
            rounded-xl

            ${
              alertsActive
                ? 'bg-[#fe7f2d] text-[#233d4d]'
                : 'bg-white/10 text-[#ff9b57]'
            }
          `}
        >
          <ButtonIcon
            className="h-5 w-5"
          />
        </span>

        <span className="min-w-0">
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
            Event notifications
          </span>

          <strong
            className={`
              mt-0.5
              block
              truncate
              text-sm
              font-black

              ${
                alertsActive
                  ? 'text-[#ff9b57]'
                  : 'text-white'
              }
            `}
          >
            {buttonLabel}
          </strong>
        </span>
      </button>

      {promptOpen && (
        <PermissionPrompt
          onAllow={allowFromPrompt}
          onDismiss={dismissPrompt}
        />
      )}

      <NotificationSettingsModal
        open={settingsOpen}
        onClose={() =>
          setSettingsOpen(false)
        }
        settings={settings}
        permission={permission}
        support={support}
        updateSettings={
          updateSettings
        }
        setEventEnabled={
          setEventEnabled
        }
        requestPermission={
          requestPermission
        }
        sendTestNotification={
          sendTestNotification
        }
      />
    </div>
  )
}
