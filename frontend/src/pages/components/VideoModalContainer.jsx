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

const VideoModalContainer = ({
  handleOpen,
  open,
  spirit_guide_video_url,
  spirit_name,
}) => {
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
    `Spirit Guide Video - ${
      spirit_name || 'Spirit'
    }`

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
          max-w-4xl
          min-w-0
          flex-col
          overflow-hidden
          rounded-3xl
          border-2
          border-[#fe7f2d]
          bg-[#233d4d]
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
            bg-[#233d4d]
            px-4
            py-3

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
            aria-label="Close video guide"
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
            overflow-y-auto
            overscroll-contain
            p-2

            sm:p-4
          "
        >
          <div
            className="
              mx-auto
              aspect-video
              w-full
              overflow-hidden
              rounded-2xl
              bg-black
              shadow-2xl
            "
          >
            <iframe
              className="
                h-full
                w-full
                border-0
              "
              src={
                spirit_guide_video_url
              }
              title={
                `${
                  spirit_name ||
                  'Spirit'
                } Sky - Children of the Light`
              }
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </DialogBody>
      </section>
    </div>,
    document.body
  )
}

export default VideoModalContainer