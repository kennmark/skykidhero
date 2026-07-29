import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Spinner,
  Button,
} from '@material-tailwind/react'
import FaQ from './FaQ'
import kennAvatar from '../assets/images/team/kenndev.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { team } from '../data/team'
import { skyPhFbTeam } from '../data/skyPhFbTeam'
import TeamCardContainer from '../pages/components/TeamCardContainer'
import { SkykidHero } from './../data/skykidHeroData';
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <div>
      <div className="pt-5 mt-6">
        <Typography variant="h1" className="text-[#fe7f2d]">
          The Team
        </Typography>
        <Typography className="mt-4">
          SkykidHero This website was developed with the support of the *Sky: Children of the Light Philippines community.
        </Typography>
      </div>
      <div className="flex justify-center py-5 ">
        <Card className="sm:w-56 bg-transparent team-avatar-card text-white hover:text-[#fe7f2d]">
          <CardHeader
            floated={false}
            className="h-48 rounded-2xl md:rounded-full"
          >
            <LazyLoadImage
              src={kennAvatar}
              alt="profile-picture"
              effect="blur"
              className="avatar-image"
            />
          </CardHeader>
          <CardBody className="text-center ">
            <Typography variant="h6" className="mb-2">
              Kenn Mark Sabalberino
            </Typography>
            <Typography color="white" className="font-medium text-xs">
              Developer / Admin SkyPH
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-3 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="https://www.facebook.com/KennMDev/"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="h-7 text-white hover:text-[#fe7f2d]"
                />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="https://www.instagram.com/skyhex27/"
                className="opacity-80 transition-opacity hover:opacity-100 text-sm"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="text-white hover:text-[#fe7f2d]"
                />
              </Typography>
            </Tooltip>
            <Tooltip content="Star">
              <Typography
                as="a"
                href="https://github.com/kennmark"
                className="opacity-80 transition-opacity hover:opacity-100 text-sm"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="text-white hover:text-[#fe7f2d]"
                />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
      <div className="py-5">
        <Typography
          variant="h2"
          as="a"
          href="https://www.facebook.com/groups/skycotlphofficial"
          className="text-[#fe7f2d]"
        >
          SkyPH Facebook Group Team
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center pb-5">
        {skyPhFbTeam.map((skyphTeam, index) => {
          return (
            <div className="px-5">
              <TeamCardContainer {...skyphTeam} key={index} />
            </div>
          )
        })}
      </div>
      <div className="py-5">
        <Typography variant="h4" color="amber">
          Contributors
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center pb-5">
        {team.map((contributor, index) => {
          return (
            <div className="px-5">
              <TeamCardContainer {...contributor} key={index} />
            </div>
          )
        })}
      </div>
      <div>
        <div className="py-5">
          <Typography variant="h4" color="amber">
            Group's Game Veterans
          </Typography>
        </div>
        <div className="flex flex-wrap justify-center pb-5">
          {SkykidHero.map((sykidhero, index) => {
            return (
              <div className="px-5">
                <TeamCardContainer {...sykidhero} key={index} />
              </div>
            )
          })}
        </div>
        <div>
          <Link to={`/veterans`}>
            <Button  
                size="lg"
                className="theme-button mb-5"
                ripple={true}
                fullWidth={false}>
                    See All SkykidHeroes
            </Button>
          </Link>
        </div>
      </div>
     
      <div>
        Special Credits: for the GIFs{' '}
        <a href="https://www.behance.net/hongximing40a5">Joerdan Carney</a> and
        the spirit images and their collectibles from{' '}
        <a href="https://sky-children-of-the-light.fandom.com/wiki/Sky:_Children_of_the_Light_Wiki">
          Sky: Children of the Light Wiki
        </a>
      </div>
      <FaQ />
    </div>
  )
}

export default Team
