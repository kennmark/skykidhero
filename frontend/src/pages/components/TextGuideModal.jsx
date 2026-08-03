import React from 'react'
import { createPortal } from 'react-dom'

import {
  DialogBody,
  DialogHeader,
  IconButton,
  Typography,
} from '@material-tailwind/react'

import {
  XMarkIcon,
} from '@heroicons/react/24/outline'

export function TextGuideModal({
  label,
  handleOpen,
  open,
  direction = [],
}) {
  React.useEffect(() => {
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
        handleOpen()
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
  }, [open, handleOpen])

  if (
    !open ||
    typeof document ===
      'undefined'
  ) {
    return null
  }

  const title =
    `Text Guide - ${
      label || 'Spirit'
    }`

  const steps =
    direction
      .slice(0, 5)
      .filter(
        (step) =>
          typeof step === 'string' &&
          step.trim().length > 0
      )

  return createPortal(
    <div
      role="presentation"
      onPointerDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          handleOpen()
        }
      }}
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black/70
        p-6
        backdrop-blur-[2px]

        sm:p-8
      "
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onPointerDown={(event) =>
          event.stopPropagation()
        }
        className="
          relative
          flex
          max-h-[calc(100dvh-3rem)]
          w-full
          max-w-2xl
          min-w-0
          flex-col
          overflow-hidden
          rounded-3xl
          border-2
          border-[#fe7f2d]
          bg-[#233d4d]/95
          shadow-2xl

          sm:max-h-[calc(100dvh-4rem)]
          sm:border-4
        "
      >
        <DialogHeader
          className="
            flex
            shrink-0
            items-center
            justify-between
            gap-3
            border-b
            border-white/10
            bg-[#233d4d]/95
            px-4
            py-3
            backdrop-blur-md

            sm:px-5
            sm:py-4
          "
        >
          <Typography
            variant="h5"
            className="
              min-w-0
              break-words
              pr-1
              text-base
              font-black
              leading-tight
              text-[#fe7f2d]

              sm:text-xl
            "
          >
            {title}
          </Typography>

          <IconButton
            color="white"
            variant="text"
            ripple={false}
            onClick={handleOpen}
            aria-label="Close text guide"
            className="
              h-9
              w-9
              shrink-0
              rounded-full
              border
              border-white/10
              bg-black/20

              hover:border-[#fe7f2d]/50
              hover:bg-[#fe7f2d]/15
            "
          >
            <XMarkIcon
              className="
                h-6
                w-6
                text-[#fe7f2d]
              "
            />
          </IconButton>
        </DialogHeader>

        <DialogBody
          className="
            min-h-0
            flex-1
            overflow-x-hidden
            overflow-y-auto
            overscroll-contain
            px-4
            py-4

            sm:px-6
            sm:py-5
          "
        >
          <div
            className="
              space-y-4
              text-left
            "
          >
            {steps.length > 0 ? (
              steps.map(
                (step, index) => (
                  <section
                    key={`${index}-${step}`}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.045]
                      p-4
                    "
                  >
                    <Typography
                      variant="h6"
                      className="
                        text-sm
                        font-black
                        uppercase
                        tracking-[0.08em]
                        text-[#fe7f2d]

                        sm:text-base
                      "
                    >
                      Step {index + 1}
                    </Typography>

                    <Typography
                      className="
                        mt-1.5
                        whitespace-pre-line
                        break-words
                        text-sm
                        leading-6
                        text-white/90

                        sm:text-base
                      "
                    >
                      {step}
                    </Typography>
                  </section>
                )
              )
            ) : (
              <Typography
                className="
                  py-6
                  text-center
                  text-sm
                  text-white/55
                "
              >
                No text-guide steps are
                available for this Spirit.
              </Typography>
            )}
          </div>
        </DialogBody>
      </section>
    </div>,
    document.body
  )
}

export default TextGuideModal