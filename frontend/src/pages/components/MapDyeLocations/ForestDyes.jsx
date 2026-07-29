import React from 'react'
import { Typography } from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import RED_JAR from '../../../assets/images/Dyes/Red-Jar.webp'
import YELLOW_JAR from '../../../assets/images/Dyes/Yellow-Jar.webp'
import WHITE_JAR from '../../../assets/images/Dyes/White-Jar.webp'
import GREEN_JAR from '../../../assets/images/Dyes/Green-Jar.webp'
import CYAN_JAR from '../../../assets/images/Dyes/Cyan-Jar.webp'
import BLUE_JAR from '../../../assets/images/Dyes/Blue-Jar.webp'
import MAGENTA_JAR from '../../../assets/images/Dyes/Magenta-Jar.webp'

import DyesMaxPerDay from '../DyesMaxPerDay'

const ForestDyes = () => {
  return (
    <div className="mt-5 mb-5 border-4 rounded-3xl p-5 w-72 h-auto  md:h-96 flex flex-wrap justify-center items-center">
      <Typography variant="h2" className="my-5">
        Forest Dye Distribution
      </Typography>

      <div className="flex flex-wrap justify-center pt-5 pb-10 gap-4">
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={RED_JAR}
            alt={'Red Jar'}
            title={'Red Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">9%</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={YELLOW_JAR}
            alt={'Yellow Jar'}
            title={'Yellow Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">4%</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={WHITE_JAR}
            alt={'White Jar'}
            title={'White Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">5%</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={GREEN_JAR}
            alt={'Green Jar'}
            title={'Green Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">36.5%</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={CYAN_JAR}
            alt={'Cyan Jar'}
            title={'Cyan Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">19%</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={BLUE_JAR}
            alt={'Blue Jar'}
            title={'Blue Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">9%</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={MAGENTA_JAR}
            alt={'Magenta Jar'}
            title={'Magenta Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">4%</Typography>
        </div>
      </div>
    </div>
  )
}

export default ForestDyes
