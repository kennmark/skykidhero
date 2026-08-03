import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  readSpiritProgress,
  resetSpiritProgress,
  setSpiritChecked,
  subscribeSpiritProgress,
} from '../utils/spiritProgress'

import {
  TOTAL_REGULAR_SPIRIT_COUNT,
  TOTAL_SEASONAL_SPIRIT_COUNT,
  TOTAL_SPIRIT_COUNT,
} from '../data/spiritCatalog'

function sortCheckedSpirits(
  records
) {
  return [...records].sort(
    (left, right) => {
      const leftTime =
        Date.parse(
          left.updatedAt ||
          left.checkedAt ||
          ''
        ) || 0

      const rightTime =
        Date.parse(
          right.updatedAt ||
          right.checkedAt ||
          ''
        ) || 0

      if (
        leftTime !==
        rightTime
      ) {
        return (
          rightTime -
          leftTime
        )
      }

      return left.name.localeCompare(
        right.name
      )
    }
  )
}

export default function useSpiritProgress() {
  const [
    progress,
    setProgress,
  ] = useState(
    readSpiritProgress
  )

  useEffect(
    () =>
      subscribeSpiritProgress(
        setProgress
      ),
    []
  )

  return useMemo(() => {
    const checkedSpirits =
      sortCheckedSpirits(
        Object.values(
          progress.spirits
        )
      )

    const regularChecked =
      checkedSpirits.filter(
        (spirit) =>
          spirit.kind ===
          'regular'
      ).length

    const seasonalChecked =
      checkedSpirits.filter(
        (spirit) =>
          spirit.kind ===
          'seasonal'
      ).length

    const unknownChecked =
      checkedSpirits.length -
      regularChecked -
      seasonalChecked

    const completionPercentage =
      TOTAL_SPIRIT_COUNT > 0
        ? Math.min(
            100,
            Math.round(
              (
                checkedSpirits.length /
                TOTAL_SPIRIT_COUNT
              ) * 100
            )
          )
        : 0

    return {
      progress,
      checkedSpirits,
      totalChecked:
        checkedSpirits.length,
      regularChecked,
      seasonalChecked,
      unknownChecked,
      totalSpirits:
        TOTAL_SPIRIT_COUNT,
      totalRegularSpirits:
        TOTAL_REGULAR_SPIRIT_COUNT,
      totalSeasonalSpirits:
        TOTAL_SEASONAL_SPIRIT_COUNT,
      completionPercentage,
      resetSpiritProgress,
      setSpiritChecked,
    }
  }, [progress])
}
