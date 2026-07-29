import React from 'react'
import RED_JAR from '../../assets/images/Dyes/Red-Jar.webp'
import YELLOW_JAR from '../../assets/images/Dyes/Yellow-Jar.webp'
import WHITE_JAR from '../../assets/images/Dyes/White-Jar.webp'
import GREEN_JAR from '../../assets/images/Dyes/Green-Jar.webp'
import CYAN_JAR from '../../assets/images/Dyes/Cyan-Jar.webp'
import BLUE_JAR from '../../assets/images/Dyes/Blue-Jar.webp'
import MAGENTA_JAR from '../../assets/images/Dyes/Magenta-Jar.webp'
import BLACK_JAR from '../../assets/images/Dyes/Black-Jar.webp'
import { Typography } from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const DyesMaxPerDay = () => {
  return (
    <div className="my-10">
      <Typography variant="h1">Max Jars Per Day</Typography>
      <div className="flex flex-wrap justify-center mt-5 pt-5 pb-10 gap-4 rounded-3xl">
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={RED_JAR}
            alt={'Red Jar'}
            title={'Red Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">4 Jars</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={GREEN_JAR}
            alt={'Green Jar'}
            title={'Green Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">4 Jars</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={BLUE_JAR}
            alt={'Blue Jar'}
            title={'Blue Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">4 Jars</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={YELLOW_JAR}
            alt={'Yellow Jar'}
            title={'Yellow Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">3 Jars</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={CYAN_JAR}
            alt={'Cyan Jar'}
            title={'Cyan Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">3 Jars</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={MAGENTA_JAR}
            alt={'Magenta Jar'}
            title={'Magenta Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">3 Jars</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={WHITE_JAR}
            alt={'White Jar'}
            title={'White Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">1 Jar</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={BLACK_JAR}
            alt={'White Jar'}
            title={'White Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">1 Jar</Typography>
        </div>
      </div>
    </div>
  )
}

export default DyesMaxPerDay
