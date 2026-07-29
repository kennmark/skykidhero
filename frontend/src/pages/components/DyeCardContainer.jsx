import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Dialog,
  DialogBody,
  Chip,
} from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import RED_JAR from '../../assets/images/Dyes/Red-Jar.webp'
import YELLOW_JAR from '../../assets/images/Dyes/Yellow-Jar.webp'
import WHITE_JAR from '../../assets/images/Dyes/White-Jar.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DyeCardContainer = ({
  imgUrl,
  order,
  imgName,
  imgDesc,
  icon,
  map,
  lightsDistribution,
}) => {
  // console.log(id, imgUrl, order, imgName, imgDesc)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  // console.log(lightsDistribution)
  return (
    <>
      <Card
        className="mt-6 lg:w-72 w-80 mb-5 flex justify-between"
        color="gray"
        variant="gradient"
      >
        <CardHeader
          className="relative h-auto flex justify-center bg-blue-gray-900 cursor-pointer"
          onClick={handleOpen}
        >
          <LazyLoadImage
            src={imgUrl}
            alt={imgName}
            title={imgName}
            className="wl-ms-imgs"
          />
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap justify-center gap-2">
            <Tooltip content={map}>
              <Avatar size="sm" src={icon} />
            </Tooltip>
            <Typography variant="h5" color="white" className="place-self-end">
              {imgName}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="white"
            className="mt-3 font-normal"
          >
            {imgDesc}
            {lightsDistribution.map((colors, index) => {
              return (
                <div className="flex flex-wrap justify-center gap-2">
                  {colors.red && (
                    <div className="flex flex-wrap justify-center pt-1 gap-1">
                      <LazyLoadImage
                        src={RED_JAR}
                        alt="Red jar"
                        title="Red jar"
                        width={15}
                        height={'auto'}
                      />
                      <div className="place-self-end">{colors.red}%</div>
                    </div>
                  )}
                  {colors.yellow && (
                    <div className="flex flex-wrap justify-center pt-1 gap-1">
                      <LazyLoadImage
                        src={YELLOW_JAR}
                        alt="Yellow jar"
                        title="Yellow jar"
                        width={15}
                        height={'auto'}
                      />
                      <div className="place-self-end">{colors.yellow}%</div>
                    </div>
                  )}
                  {colors.white && (
                    <div className="flex flex-wrap justify-center pt-1 gap-1">
                      <LazyLoadImage
                        src={WHITE_JAR}
                        alt="White jar"
                        title="White jar"
                        width={15}
                        height={'auto'}
                      />
                      <div className="place-self-end">{colors.white}%</div>
                    </div>
                  )}
                </div>
              )
            })}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            {lightsDistribution.map((colors, index) => {
              return (
                <>
                  {colors.red && (
                    <Tooltip content={colors.red + '%'}>
                      <Avatar
                        size="sm"
                        // variant="circular"
                        alt={''}
                        src={RED_JAR}
                        className="border-2 border-white hover:z-10"
                      />
                    </Tooltip>
                  )}
                  {colors.yellow && (
                    <Tooltip content={colors.yellow + '%'}>
                      <Avatar
                        size="sm"
                        // variant="circular"
                        alt={''}
                        src={YELLOW_JAR}
                        className="border-2 border-white hover:z-10"
                      />
                    </Tooltip>
                  )}
                  {colors.white && (
                    <Tooltip content={colors.white + '%'}>
                      <Avatar
                        size="sm"
                        // variant="circular"
                        alt={''}
                        src={WHITE_JAR}
                        className="border-2 border-white hover:z-10"
                      />
                    </Tooltip>
                  )}
                </>
              )
            })}
          </div>

          <Chip
            color={order === 'Even' ? 'amber' : 'green'}
            value={order + ' Hours'}
          />
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
            className="w-full object-cover object-center rounded-3xl border-amber-500 border-2"
            src={imgUrl}
          />
        </DialogBody>
      </Dialog>
    </>
  )
}

export default DyeCardContainer
