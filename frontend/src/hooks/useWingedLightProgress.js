import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  ORBIT_WL,
  SHARDS_WL,
  TOTAL_WL_COUNT,
  WB_REGULAR_SPIRITS,
  WB_TRAVELING_SPIRITS,
  WL_COUNT,
} from '../exports/constants'

import {
  getWingBuffSlotKey,
  getWingedLightKey,
  readWingedLightProgress,
  resetWingedLightProgress,
  setWingBuffCount,
  setWingBuffSlotChecked,
  setWingedLightChecked,
  subscribeWingedLightProgress,
} from '../utils/wingedLightProgress'

function getPercentage(
  value,
  maximum
) {
  if (!maximum) {
    return 0
  }

  return Math.min(
    100,
    Math.round(
      (value / maximum) * 100
    )
  )
}

export default function useWingedLightProgress() {
  const [progress, setProgress] =
    useState(
      readWingedLightProgress
    )

  useEffect(
    () =>
      subscribeWingedLightProgress(
        setProgress
      ),
    []
  )

  const mapCollected =
    Object.keys(
      progress.mapLights
    ).length

  const specialCollected =
    Object.keys(
      progress.specialLights
    ).length

  /**
   * Orbit Winged Light is counted from the beginning.
   * It is not controlled by a location checkbox.
   */
  const orbitWingedLights =
    ORBIT_WL

  const totalCollectedWingedLights =
    mapCollected +
    specialCollected +
    orbitWingedLights

  const totalCollectibleWingedLights =
    WL_COUNT +
    SHARDS_WL +
    ORBIT_WL

  const regularAssignedWingBuffs =
    Object.keys(
      progress.wingBuffs.regular
    ).length

  const seasonalAssignedWingBuffs =
    Object.keys(
      progress.wingBuffs.seasonal
    ).length

  const regularLegacyWingBuffs =
    progress.legacyWingBuffCounts
      .regular

  const seasonalLegacyWingBuffs =
    progress.legacyWingBuffCounts
      .seasonal

  const regularWingBuffs =
    Math.min(
      WB_REGULAR_SPIRITS,
      regularAssignedWingBuffs +
        regularLegacyWingBuffs
    )

  const seasonalWingBuffs =
    Math.min(
      WB_TRAVELING_SPIRITS,
      seasonalAssignedWingBuffs +
        seasonalLegacyWingBuffs
    )

  /**
   * Complete acquired Wing Power shown in the global badge:
   *
   * Orbit + map WL + Shattering Void WL
   * + Regular Spirit Wing Buffs
   * + Seasonal / Traveling Spirit Wing Buffs.
   */
  const totalAcquiredWingedLights =
    totalCollectedWingedLights +
    regularWingBuffs +
    seasonalWingBuffs

  const totalMaximumWingedLights =
    TOTAL_WL_COUNT

  const isWingedLightChecked =
    useCallback(
      (
        wingedLight,
        context = {}
      ) => {
        const key =
          getWingedLightKey(
            wingedLight,
            context
          )

        return Boolean(
          progress.mapLights[key] ||
          progress.specialLights[key]
        )
      },
      [progress]
    )

  const updateWingedLight =
    useCallback(
      (
        wingedLight,
        checked,
        context = {}
      ) =>
        setWingedLightChecked(
          wingedLight,
          checked,
          context
        ),
      []
    )

  const isWingBuffSlotChecked =
    useCallback(
      (
        spirit,
        slot
      ) => {
        const slotId =
          typeof slot === 'string'
            ? slot
            : slot?.id

        const key =
          getWingBuffSlotKey(
            spirit,
            slotId
          )

        const type =
          spirit?.type ||
          spirit?.spiritType ||
          spirit?.spirit_type

        return Boolean(
          key &&
          (
            type === 'regular' ||
            type === 'seasonal'
          ) &&
          progress.wingBuffs[
            type
          ]?.[key]
        )
      },
      [progress]
    )

  const updateWingBuffSlot =
    useCallback(
      (
        spirit,
        slot,
        checked
      ) => {
        const type =
          spirit?.type ||
          spirit?.spiritType ||
          spirit?.spirit_type

        const alreadyChecked =
          isWingBuffSlotChecked(
            spirit,
            slot
          )

        const currentCount =
          type === 'regular'
            ? regularWingBuffs
            : seasonalWingBuffs

        const maximum =
          type === 'regular'
            ? WB_REGULAR_SPIRITS
            : WB_TRAVELING_SPIRITS

        if (
          checked &&
          !alreadyChecked &&
          currentCount >= maximum
        ) {
          return progress
        }

        return setWingBuffSlotChecked(
          spirit,
          slot,
          checked
        )
      },
      [
        progress,
        regularWingBuffs,
        seasonalWingBuffs,
        isWingBuffSlotChecked,
      ]
    )

  const updateRegularWingBuffs =
    useCallback(
      (value) =>
        setWingBuffCount(
          'regular',
          value,
          WB_REGULAR_SPIRITS
        ),
      []
    )

  const updateSeasonalWingBuffs =
    useCallback(
      (value) =>
        setWingBuffCount(
          'seasonal',
          value,
          WB_TRAVELING_SPIRITS
        ),
      []
    )

  return useMemo(
    () => ({
      progress,
      mapCollected,
      mapMaximum: WL_COUNT,
      mapPercentage:
        getPercentage(
          mapCollected,
          WL_COUNT
        ),
      specialCollected,
      specialMaximum:
        SHARDS_WL,
      specialPercentage:
        getPercentage(
          specialCollected,
          SHARDS_WL
        ),
      orbitWingedLights,
      orbitMaximum:
        ORBIT_WL,
      totalCollectedWingedLights,
      totalCollectibleWingedLights,
      totalWingedLightPercentage:
        getPercentage(
          totalCollectedWingedLights,
          totalCollectibleWingedLights
        ),
      totalAcquiredWingedLights,
      totalMaximumWingedLights,
      totalAcquiredWingedLightPercentage:
        getPercentage(
          totalAcquiredWingedLights,
          totalMaximumWingedLights
        ),
      regularWingBuffs,
      regularAssignedWingBuffs,
      regularLegacyWingBuffs,
      regularWingBuffMaximum:
        WB_REGULAR_SPIRITS,
      regularWingBuffPercentage:
        getPercentage(
          regularWingBuffs,
          WB_REGULAR_SPIRITS
        ),
      seasonalWingBuffs,
      seasonalAssignedWingBuffs,
      seasonalLegacyWingBuffs,
      seasonalWingBuffMaximum:
        WB_TRAVELING_SPIRITS,
      seasonalWingBuffPercentage:
        getPercentage(
          seasonalWingBuffs,
          WB_TRAVELING_SPIRITS
        ),
      isWingedLightChecked,
      setWingedLightChecked:
        updateWingedLight,
      isWingBuffSlotChecked,
      setWingBuffSlotChecked:
        updateWingBuffSlot,
      setRegularWingBuffs:
        updateRegularWingBuffs,
      setSeasonalWingBuffs:
        updateSeasonalWingBuffs,
      resetWingedLightProgress,
    }),
    [
      progress,
      mapCollected,
      specialCollected,
      orbitWingedLights,
      totalCollectedWingedLights,
      totalCollectibleWingedLights,
      totalAcquiredWingedLights,
      totalMaximumWingedLights,
      regularWingBuffs,
      regularAssignedWingBuffs,
      regularLegacyWingBuffs,
      seasonalWingBuffs,
      seasonalAssignedWingBuffs,
      seasonalLegacyWingBuffs,
      isWingedLightChecked,
      updateWingedLight,
      isWingBuffSlotChecked,
      updateWingBuffSlot,
      updateRegularWingBuffs,
      updateSeasonalWingBuffs,
    ]
  )
}
