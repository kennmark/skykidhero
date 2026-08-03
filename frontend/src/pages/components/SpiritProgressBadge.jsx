import React from 'react'
import {
  CheckBadgeIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid'

import useSpiritProgress from '../../hooks/useSpiritProgress'
import useWingedLightProgress from '../../hooks/useWingedLightProgress'

function ProgressChip({
  Icon,
  shortLabel,
  label,
  checked,
  total,
  action = 'relived',
  accent = false,
}) {
  return (
    <span
      title={`${label}: ${checked} of ${total} ${action}`}
      className={`
        inline-flex
        min-w-0
        items-center
        gap-1
        rounded-full
        border
        px-2
        py-1

        ${
          accent
            ? 'border-[#fe7f2d]/25 bg-[#fe7f2d]/10'
            : 'border-white/10 bg-white/[0.055]'
        }
      `}
    >
      <Icon
        aria-hidden="true"
        className={`
          h-3
          w-3
          shrink-0

          sm:h-3.5
          sm:w-3.5

          ${
            accent
              ? 'text-[#ff9b57]'
              : 'text-[#fe7f2d]'
          }
        `}
      />

      <span
        className="
          text-[8px]
          font-black
          uppercase
          tracking-[0.06em]
          text-white/45

          sm:hidden
        "
      >
        {shortLabel}
      </span>

      <span
        className="
          hidden
          text-[8px]
          font-black
          uppercase
          tracking-[0.06em]
          text-white/45

          sm:inline

          xl:text-[9px]
        "
      >
        {label}
      </span>

      <strong
        className="
          whitespace-nowrap
          text-[10px]
          font-black
          tabular-nums
          text-white

          sm:text-[11px]
        "
      >
        {checked}
        <span className="text-white/25">
          /{total}
        </span>
      </strong>
    </span>
  )
}

export default function SpiritProgressBadge() {
  const {
    totalChecked,
    totalSpirits,
    regularChecked,
    seasonalChecked,
    collectibleChecked,
    totalRegularSpirits,
    totalSeasonalSpirits,
    totalCollectibleSpirits,
  } = useSpiritProgress()

  const {
    totalAcquiredWingedLights,
    totalMaximumWingedLights,
  } = useWingedLightProgress()

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={
        `Progress: ${totalChecked} of ${totalSpirits} Spirit entries checked (${regularChecked} of ${totalRegularSpirits} Regular Spirits, ${seasonalChecked} of ${totalSeasonalSpirits} Seasonal Spirits, and ${collectibleChecked} of ${totalCollectibleSpirits} Aviary Village collectibles); ${totalAcquiredWingedLights} of ${totalMaximumWingedLights} total Winged Lights acquired`
      }
      className="
        flex
        shrink-0
        items-center
        gap-1
        rounded-full
        border
        border-[#fe7f2d]/25
        bg-[#071820]/55
        p-1
        shadow-sm
        backdrop-blur-sm

        sm:gap-1.5
      "
    >
      <span
        className="
          hidden
          items-center
          gap-1
          pl-1
          text-[8px]
          font-black
          uppercase
          tracking-[0.1em]
          text-[#ff9b57]

          xl:inline-flex
        "
      >
        <CheckBadgeIcon
          aria-hidden="true"
          className="h-3 w-3"
        />

        Progress
      </span>

      <ProgressChip
        Icon={CheckBadgeIcon}
        shortLabel="SP"
        label="Spirits"
        checked={totalChecked}
        total={totalSpirits}
      />

      <ProgressChip
        Icon={SparklesIcon}
        shortLabel="WL"
        label="Winged Lights"
        checked={
          totalAcquiredWingedLights
        }
        total={
          totalMaximumWingedLights
        }
        action="acquired"
        accent
      />
    </div>
  )
}
