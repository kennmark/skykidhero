import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  getSkyEventSnapshot,
} from '../utils/skyEvents'

export default function useSkyEvents({
  intervalMs = 1000,
} = {}) {
  const [now, setNow] = useState(
    () => new Date()
  )

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date())
    }, intervalMs)

    return () => {
      window.clearInterval(timer)
    }
  }, [intervalMs])

  return useMemo(
    () => getSkyEventSnapshot(now),
    [now]
  )
}
