import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  Tooltip,
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'

const SeasonDisplayContainer = ({
  id,
  name,
  time_duration,
  icon_route,
  wl_num,
  quick_info,
  page_route,
  season_spirits,
}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)
  const spiritCount = season_spirits.length
  // console.log(spiritCount)

  return (
    <>
      <Tooltip
        content={
          <div className="block text-center">
            <Typography>
              Season {id}-{name}
            </Typography>
            <Typography>{time_duration}</Typography>
          </div>
        }
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <div className="rounded-full h-20 bg-[#233d4d] text-[#fe7f2d] transition ease-in-out duration-500 hover:bg-[#233d4d] shadow-md shadow-[#233d4d] hover:shadow-xl hover:shadow-[#fe7f2d] cursor-pointer">
          <LazyLoadImage
            src={icon_route}
            alt={name}
            width={80}
            effect="blur"
            className="p-2"
            onClick={handleOpen}
          />
        </div>
      </Tooltip>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
        key={name}
      >
        <Card className="mx-auto w-full max-w-[24rem] bg-[#233d4d]">
          <CardHeader className="bg-gray-900  grid h-auto pb-2 pt-1 place-items-center text-center px-1">
            <div className="block">
              <LazyLoadImage
                src={icon_route}
                alt={name}
                title={name}
                width={55}
                effect="blur"
              />
              <Typography variant="h3" className="text-[#fe7f2d]">
                {name}
              </Typography>
              <Typography className="text-white">{time_duration}</Typography>
            </div>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography className="text-[#fe7f2d]">Quick Note:</Typography>
            <p className="text-white">{quick_info}</p>

            <Typography className="text-[#fe7f2d]">
              No. of Spirits ({spiritCount})
            </Typography>
            <Typography className="text-[#fe7f2d]">
              No. of Winged Lights ({wl_num})
            </Typography>

            <div className="flex flex-nowrap justify-center items-center">
              {season_spirits?.map((spirit) => {
                return (
                  <Tooltip
                    content={spirit.spirit_name}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    key={spirit.spirit_id}
                    className="z-[10000]"
                  >
                    <div>
                      <LazyLoadImage
                        src={spirit.spirit_img_url}
                        alt={spirit.spirit_name}
                        effect="blur"
                        className="p-1"
                      />
                    </div>
                  </Tooltip>
                )
              })}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Link
              to={`/${page_route}`}
              className=" text-blue-gray-900"
              key={id}
              onClick={handleOpen}
            >
              <Button size="lg" fullWidth className="theme-button">
                Enter
              </Button>
            </Link>
            <div className="flex justify-center items-center align-middle text-xs mt-2">
              <span className="text-blue-gray-100">Visit the page of</span>
              <span className="ml-2 text-[#fe7f2d]">{name}</span>
            </div>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  )
}

export default SeasonDisplayContainer
