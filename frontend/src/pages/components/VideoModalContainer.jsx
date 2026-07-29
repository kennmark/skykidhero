import React from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
} from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const VideoModalContainer = ({
  handleOpen,
  open,
  spirit_guide_video_url,
  spirit_name,
}) => {
  return (
    <>
      <Dialog
        className="bg-[#233d4d] border-y-2 border-[#fe7f2d]"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="text-[#fe7f2d] justify-between">
          Spirit Guide Video - {spirit_name}
          <IconButton color="white" variant="text" onClick={handleOpen}>
            <XMarkIcon className="h-6 w-6 text-[#fe7f2d]" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="h-96 drop-shadow-2xl">
          <iframe
            className="w-full h-full"
            src={spirit_guide_video_url}
            title={`${spirit_name} Sky - Children of the Light`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </DialogBody>
      </Dialog>
    </>
  )
}

export default VideoModalContainer
