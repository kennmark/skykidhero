import {
  Card,
  Typography,
  CardBody,
  CardHeader,
  Button,
} from '@material-tailwind/react'
import FaQ from './FaQ'
import { BuyMeACoffee } from './components/BuyMeACoffee'
import carousel3 from '../assets/images/home-carousel/home4.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import gcashlogo from '../assets/images/support/gcashlogo.png'
import GCash from '../assets/images/support/GCash.jpg'
const Support = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center my-10">
        <Typography variant="h5" className="p-10">
          Did you like this website? Your generosity and kindness will inspire
          me more to improve this site.
        </Typography>
        <BuyMeACoffee />
        {/* <div className="mt-10 w-full max-w-[48rem]">
          <Card className="w-full flex-row" color="gray" variant="gradient">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
              style={{ backgroundColor: '#007dfe' }}
            >
              <LazyLoadImage
                src={gcashlogo}
                alt="card-image"
                className="h-full w-full object-contain opacity-80 rounded-lg"
              />
            </CardHeader>
            <CardBody className="flex flex-wrap justify-center w-full items-center">
              <LazyLoadImage
                src={GCash}
                alt="GCash"
                title="GCash"
                effect="blur"
                className="w-60 md:w-60"
              />
            </CardBody>
          </Card>
        </div> */}
        <div className="mt-10">
          <Card className="w-full max-w-[48rem] flex-row ">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={carousel3}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                support us too at our youtube channel
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                SKYKIDHero
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                This channel is all about Sky: Children of The Light. From how
                to relive spirits, how to find winged lights, map shrines and
                many more. Please click subscribe and follow us for more.
              </Typography>
              <a
                href="https://www.youtube.com/@SKYKIDTulongGabay"
                className="inline-block"
              >
                <Button
                  variant="filled"
                  color="red"
                  className="flex items-center gap-2"
                >
                  Visit our channel
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>
        </div>
      </div>

      <FaQ />
    </>
  )
}

export default Support
