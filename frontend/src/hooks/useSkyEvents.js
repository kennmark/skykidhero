import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  getSkyEventSnapshot,
  getVisitorTimeZone,
  isValidTimeZone,
} from '../utils/skyEvents'

function detectTimeZone() {
  return getVisitorTimeZone()
}

export default function useSkyEvents({
  intervalMs = 1000,
  timeZone,
} = {}) {
  const [now, setNow] =
    useState(() => new Date())

  const [
    detectedTimeZone,
    setDetectedTimeZone,
  ] = useState(detectTimeZone)

  useEffect(() => {
    const timer =
      window.setInterval(() => {
        setNow(new Date())
      }, intervalMs)

    return () => {
      window.clearInterval(timer)
    }
  }, [intervalMs])

  useEffect(() => {
    if (timeZone) {
      return undefined
    }

    function refreshTimeZone() {
      const nextTimeZone =
        detectTimeZone()

      setDetectedTimeZone(
        (currentTimeZone) =>
          currentTimeZone ===
          nextTimeZone
            ? currentTimeZone
            : nextTimeZone
      )
    }

    function handleVisibilityChange() {
      if (
        document.visibilityState ===
        'visible'
      ) {
        refreshTimeZone()
      }
    }

    window.addEventListener(
      'focus',
      refreshTimeZone
    )

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    )

    return () => {
      window.removeEventListener(
        'focus',
        refreshTimeZone
      )

      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      )
    }
  }, [timeZone])

  const effectiveTimeZone =
    isValidTimeZone(timeZone)
      ? timeZone
      : detectedTimeZone

  return useMemo(
    () =>
      getSkyEventSnapshot(
        now,
        effectiveTimeZone
      ),
    [
      now,
      effectiveTimeZone,
    ]
  )
}
