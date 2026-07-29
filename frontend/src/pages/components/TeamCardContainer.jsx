import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Spinner,
} from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'

const TeamCardContainer = ({
  fullname,
  facebook,
  instagram,
  tiktok,
  title,
  avatar_img,
  ign,
  
}) => {
  // console.log(socials.facebook);
  
  return (
    <Card className="sm:w-56 bg-transparent team-avatar-card text-white hover:text-[#fe7f2d]">
      <CardHeader
        floated={false}
        className="h-80 md:h-48 rounded-2xl md:rounded-full"
      >
        <LazyLoadImage
          src={avatar_img}
          alt="avatar"
          effect="blur"
          className="avatar-image"
        />
      </CardHeader>
      <CardBody className="text-center ">
        <Typography variant="h6" className="mb-2">
          {fullname || ign}
        </Typography>
        <Typography color="white" className="text-xs">
          {title}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        {facebook && (
          <Tooltip content="Like">
            <Typography
              as="a"
              href={facebook}
              className="opacity-80 transition-opacity hover:opacity-100 "
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-7 text-white hover:text-[#fe7f2d]"
                cursor="pointer"
              />
            </Typography>
          </Tooltip>
        )}
        {/* {socials?.facebook && (
          <Tooltip content="Like">
            <Typography
              as="a"
              href={socials?.facebook}
              className="opacity-80 transition-opacity hover:opacity-100 "
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="h-7 text-white hover:text-[#fe7f2d]"
                cursor="pointer"
              />
            </Typography>
          </Tooltip>
        )} */}
          
        {instagram && (
          <Tooltip content="Follow">
            <Typography
              as="a"
              href={instagram}
              className="opacity-80 transition-opacity hover:opacity-100 text-sm"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                cursor="pointer"
                className="text-white hover:text-[#fe7f2d]"
              />
            </Typography>
          </Tooltip>
        )}

        {tiktok && (
          <Tooltip content="Follow">
            <Typography
              as="a"
              href={tiktok}
              className="opacity-80 transition-opacity hover:opacity-100 text-sm"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                size="2x"
                className="text-white hover:text-[#fe7f2d]"
                cursor="pointer"
              />
            </Typography>
          </Tooltip>
        )}
      </CardFooter>
    </Card>
  )
}

export default TeamCardContainer
