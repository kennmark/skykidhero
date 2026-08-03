import React from 'react'
import {
  CheckBadgeIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid'

import useSpiritProgress from '../../hooks/useSpiritProgress'

function ProgressChip({
  Icon,
  shortLabel,
  label,
  checked,
  total,
  seasonal = false,
}) {
  return (
    <span
      title={`${label}: ${checked} of ${total} relived`}
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
          seasonal
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
            seasonal
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
    regularChecked,
    seasonalChecked,
    totalRegularSpirits,
    totalSeasonalSpirits,
  } = useSpiritProgress()

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={
        `Spirit progress: ${regularChecked} of ${totalRegularSpirits} regular spirits and ${seasonalChecked} of ${totalSeasonalSpirits} seasonal spirits relived`
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

        Relived
      </span>

      <ProgressChip
        Icon={CheckBadgeIcon}
        shortLabel="R"
        label="Regular"
        checked={regularChecked}
        total={totalRegularSpirits}
      />

      <ProgressChip
        Icon={SparklesIcon}
        shortLabel="S"
        label="Seasonal"
        checked={seasonalChecked}
        total={totalSeasonalSpirits}
        seasonal
      />
    </div>
  )
}