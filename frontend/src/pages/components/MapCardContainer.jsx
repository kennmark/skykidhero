import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
  Badge,
  Spinner,
} from '@material-tailwind/react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const MapCardContainer = ({
  id,
  title,
  subtitle,
  img,
  alt,
  group,
  caption,
  pageRoute,
  num_of_wls,
  num_of_reg_spirits,
  num_of_season_spirits,
  num_of_map_shrines,
}) => {
  return (
    <div className="sm:px-4 py-10 flex justify-center">
      <Card className={`${group} max-w-[20rem] p-8 w-96 `}>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-5 rounded-none pb-8 text-center"
        >
          <Typography className="mt-1 flex justify-center gap-1 text-7xl font-normal">
            <span>
              <LazyLoadImage
                src={img}
                alt={alt}
                width={75}
                placeholderSrc={
                  <Spinner className="h-10 w-10 text-gray-900/50" />
                }
                effect="blur"
              />
            </span>
          </Typography>
          <Typography className="text-xl text-blue-gray-50">{title}</Typography>
          <Typography className="bg-gradient-to-r from-purple-500/0 via-[#fe7f2d] to-purple-500/0 py-1 shadow-lg text-[#233d4d]">
            {subtitle}
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full bg-white/20 p-1">
                <Badge
                  content={num_of_wls}
                  className="shadow-lg shadow-black/20 font-extrabold bg-[#fe7f2d] text-[#233d4d]"
                >
                  <Chip
                    color="gray"
                    variant="gradient"
                    value="Wing Lights"
                    className="rounded-full bg-gradient-to-r from-bg-white/20 to-bg-white/30"
                  />
                </Badge>
              </span>
              <span className="rounded-full bg-white/20 p-1">
                <Badge
                  content={num_of_reg_spirits}
                  className="shadow-lg shadow-black/20 font-extrabold bg-[#fe7f2d] text-[#233d4d]"
                >
                  <Chip
                    color="gray"
                    variant="gradient"
                    value="Regular Spirits"
                    className="rounded-full bg-gradient-to-r from-bg-white/20 to-bg-white/30"
                  />
                </Badge>
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full bg-white/20 p-1">
                <Badge
                  content={num_of_season_spirits}
                  className="shadow-lg shadow-black/20 font-extrabold bg-[#fe7f2d] text-[#233d4d]"
                >
                  <Chip
                    color="gray"
                    variant="gradient"
                    value={
                      num_of_season_spirits > 0
                        ? 'Season Spirits'
                        : 'Collectibles'
                    }
                    className="rounded-full bg-gradient-to-r from-bg-white/20 to-bg-white/30"
                  />
                </Badge>
              </span>
              <span className="rounded-full bg-white/20 p-1">
                <Badge
                  content={num_of_map_shrines}
                  className="shadow-lg shadow-black/20 font-extrabold bg-[#fe7f2d] text-[#233d4d]"
                >
                  <Chip
                    color="gray"
                    variant="gradient"
                    value="Map Shrines"
                    className="rounded-full bg-gradient-to-r from-bg-white/20 to-bg-white/30"
                  />
                </Badge>
              </span>
            </li>
          </ul>
          <Typography color="white" className="py-4">
            {caption}
          </Typography>
        </CardBody>
        <CardFooter className="p-0">
          <Link to={`/${pageRoute}`}>
            <Button
              size="lg"
              color="gray"
              className="theme-button hover:shadow-xl"
              ripple={true}
              fullWidth={true}
            >
              <div className="flex justify-center items-center">
                <ArrowRightOnRectangleIcon className="h-6 w-6" />
                &nbsp;Enter
              </div>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default MapCardContainer
