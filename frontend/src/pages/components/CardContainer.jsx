import React, {
  useState,
} from 'react'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  Typography,
} from '@material-tailwind/react'

import {
  LazyLoadImage,
} from 'react-lazy-load-image-component'

import { TextGuideModal } from './TextGuideModal'
import WingedLightCheckbox from './WingedLightCheckbox'

const CardContainer = ({
  label,
  location,
  url,
  wingedLight,
  realmName,
}) => {
  const [open, setOpen] =
    useState(false)

  const [
    openTextModal,
    setOpenTextModal,
  ] = useState(false)

  const handleOpen = () =>
    setOpen((current) =>
      !current
    )

  const handleTextGuideOpen = () =>
    setOpenTextModal(
      (current) =>
        !current
    )

  return (
    <>
      <Card
        className="
          theme-card-bg
          mb-5
          mt-6
          flex
          w-80
          justify-between

          lg:w-72
        "
      >
        <CardHeader
          className="
            relative
            flex
            h-auto
            cursor-pointer
            justify-center
          "
          onClick={handleOpen}
        >
          {wingedLight && (
            <WingedLightCheckbox
              wingedLight={
                wingedLight
              }
              realmName={realmName}
              className="
                absolute
                right-3
                top-3
                z-20
              "
            />
          )}

          <LazyLoadImage
            src={url}
            alt={label}
            title={label}
            className="wl-ms-imgs"
          />
        </CardHeader>

        <CardBody>
          <Typography
            variant="h5"
            className="mb-2 text-[#fe7f2d]"
          >
            {label}
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <Button
            onClick={
              handleTextGuideOpen
            }
            ripple
            fullWidth
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
        <DialogBody
          divider
          className="
            w-full
            rounded-3xl
            p-0
          "
        >
          <img
            alt={label}
            className="
              w-full
              rounded-3xl
              border-2
              border-[#fe7f2d]
              object-cover
              object-center
            "
            src={url}
          />
        </DialogBody>
      </Dialog>

      <TextGuideModal
        direction={location}
        handleOpen={
          handleTextGuideOpen
        }
        open={openTextModal}
        label={label}
      />
    </>
  )
}

export default CardContainer
