import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogBody,
} from '@material-tailwind/react'
import { TextGuideModal } from './TextGuideModal'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CardContainer = ({ label, location, url }) => {
  const [open, setOpen] = useState(false)
  const [openTextModal, setOpenTextModal] = useState(false)

  const handleOpen = () => setOpen((cur) => !cur)
  const handleTextGuideOpen = () => setOpenTextModal(!openTextModal)

  return (
    <>
      <Card className="theme-card-bg mt-6 lg:w-72 w-80 mb-5 flex justify-between">
        <CardHeader
          className="relative h-auto flex justify-center cursor-pointer"
          onClick={handleOpen}
        >
          <LazyLoadImage
            src={url}
            alt={label}
            title={label}
            className="wl-ms-imgs"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" className="mb-2 text-[#fe7f2d]">
            {label}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={handleTextGuideOpen}
            ripple={true}
            fullWidth={true}
            className="theme-button"
          >
            Text Guide
          </Button>
        </CardFooter>
      </Card>

      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="rounded-3xl"
      >
        <DialogBody divider={true} className="p-0 w-full rounded-3xl">
          <img
            alt={label}
            className="w-full object-cover object-center rounded-3xl border-[#fe7f2d] border-2"
            src={url}
          />
        </DialogBody>
      </Dialog>
      <TextGuideModal
        direction={location}
        handleOpen={handleTextGuideOpen}
        open={openTextModal}
        label={label}
      />
    </>
  )
}

export default CardContainer
