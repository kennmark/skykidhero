import React from 'react'
import {
  CheckIcon,
} from '@heroicons/react/24/solid'

import useWingedLightProgress from '../../hooks/useWingedLightProgress'

export default function WingedLightCheckbox({
  wingedLight,
  realmName,
  className = '',
}) {
  const {
    isWingedLightChecked,
    setWingedLightChecked,
  } = useWingedLightProgress()

  const context = {
    realmName,
  }

  const isChecked =
    isWingedLightChecked(
      wingedLight,
      context
    )

  const label =
    wingedLight?.wl_label ||
    wingedLight?.label ||
    'Winged Light'

  const handleChange = (event) => {
    event.stopPropagation()

    setWingedLightChecked(
      wingedLight,
      event.target.checked,
      context
    )
  }

  return (
    <label
      title={
        isChecked
          ? 'Winged Light collected'
          : 'Mark Winged Light as collected'
      }
      onClick={(event) =>
        event.stopPropagation()
      }
      className={`
        inline-flex
        cursor-pointer
        items-center
        justify-center
        rounded-full
        border
        p-1.5
        shadow-lg
        backdrop-blur-md
        transition

        focus-within:ring-2
        focus-within:ring-[#fe7f2d]
        focus-within:ring-offset-2
        focus-within:ring-offset-[#071820]

        ${
          isChecked
            ? 'border-[#fe7f2d] bg-[#fe7f2d] text-[#233d4d]'
            : 'border-white/20 bg-[#071820]/75 text-white/55 hover:border-[#fe7f2d]/60 hover:text-[#ff9b57]'
        }

        ${className}
      `}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        onClick={(event) =>
          event.stopPropagation()
        }
        aria-label={`${
          isChecked
            ? 'Unmark'
            : 'Mark'
        } ${label} as collected`}
        className="sr-only"
      />

      <span
        className="
          grid
          h-5
          w-5
          place-items-center
          rounded-full
          border
          border-current
        "
      >
        {isChecked && (
          <CheckIcon
            aria-hidden="true"
            className="h-4 w-4"
          />
        )}
      </span>
    </label>
  )
}
