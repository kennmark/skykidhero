import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Spinner,
} from '@material-tailwind/react'
import kennAvatar from '../../assets/images/team/kenndev.jpg'
import GCash from '../../assets/images/support/GCash.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export function BuyMeACoffee() {
  return (
    <Card className="w-full max-w-[48rem] h-auto md:h-72 flex-row bg-[#233d4d]">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none "
      >
        <LazyLoadImage
          src={kennAvatar}
          alt="card-image"
          className="h-full w-full object-cover grayscale opacity-80 "
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" className="mb-4 uppercase text-[#fe7f2d]">
          Buy Me A Coffee?
        </Typography>
        <Typography color="white" className="mb-2 font-normal">
          Please support my work through any of the options below.
        </Typography>
        <div className="flex flex-wrap flex-col md:flex-row content-center items-center">
          <div className="flex justify-center w-auto md:w-[50%]">
            <a href="https://www.buymeacoffee.com/KennDev" target="_blank">
              <LazyLoadImage
                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=KennDev&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff"
                placeholderSrc={
                  <Spinner className="h-10 w-10 text-gray-900/50" />
                }
                effect="blur"
              />
            </a>
          </div>

          {/* <div>
            <a href="https://www.buymeacoffee.com/KennDev" target="_blank">
              Buy Me A Coffee
            </a>
          </div> */}
          <div className="flex flex-wrap justify-center items-center flex-col w-auto md:w-[50%]">
            <Typography className="text-gray-400">GCash</Typography>
            <LazyLoadImage
              src={GCash}
              alt="GCash"
              title="GCash"
              effect="blur"
              className="w-36 md:w-28 max-w-[48rem]"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
