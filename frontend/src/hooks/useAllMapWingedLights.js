import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  getPublishedWingedLightsByMap,
} from '../services/wingedLight.service'

import {
  adaptPublicWingedLights,
} from '../adapters/wingedLight.adapter'

const MAP_IDS = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
]

function getErrorMessage(error) {
  return (
    error?.message ||
    'Unable to load Winged Lights.'
  )
}

export default function useAllMapWingedLights() {
  const [
    wingedLightsByMap,
    setWingedLightsByMap,
  ] = useState({})

  const [
    loading,
    setLoading,
  ] = useState(true)

  const [
    error,
    setError,
  ] = useState('')

  const [
    reloadKey,
    setReloadKey,
  ] = useState(0)

  const retry = useCallback(
    () => {
      setReloadKey(
        (current) =>
          current + 1
      )
    },
    []
  )

  useEffect(() => {
    const controller =
      new AbortController()

    setLoading(true)
    setError('')

    Promise.all(
      MAP_IDS.map(
        async (mapId) => {
          const result =
            await getPublishedWingedLightsByMap(
              mapId,
              {
                signal:
                  controller.signal,
              }
            )

          return [
            mapId,
            adaptPublicWingedLights(
              result
            ),
          ]
        }
      )
    )
      .then((entries) => {
        setWingedLightsByMap(
          Object.fromEntries(
            entries
          )
        )
      })
      .catch(
        (requestError) => {
          if (
            requestError?.name ===
            'AbortError'
          ) {
            return
          }

          setWingedLightsByMap(
            {}
          )

          setError(
            getErrorMessage(
              requestError
            )
          )
        }
      )
      .finally(() => {
        if (
          !controller.signal
            .aborted
        ) {
          setLoading(false)
        }
      })

    return () => {
      controller.abort()
    }
  }, [reloadKey])

  const totalCount =
    Object.values(
      wingedLightsByMap
    ).reduce(
      (total, items) =>
        total +
        (
          Array.isArray(items)
            ? items.length
            : 0
        ),
      0
    )

  return {
    wingedLightsByMap,
    totalCount,
    loading,
    error,
    retry,
  }
}