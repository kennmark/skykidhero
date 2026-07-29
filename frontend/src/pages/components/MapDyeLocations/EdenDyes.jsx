import React from 'react'

import { Typography } from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import RED_JAR from '../../../assets/images/Dyes/Red-Jar.webp'
import BLACK_JAR from '../../../assets/images/Dyes/Black-Jar.webp'

const EdenDyes = () => {
  return (
    <div className="mt-5 mb-5 border-4 rounded-3xl p-5 w-72 h-auto  md:h-96 flex flex-wrap justify-center items-center">
      <Typography variant="h2" className="my-5">
        Eden Dye Distribution
      </Typography>

      <div className="flex flex-wrap justify-center pt-5 pb-10 gap-4">
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={RED_JAR}
            alt={'Blue Jar'}
            title={'Blue Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">52.5%</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={BLACK_JAR}
            alt={'Black Jar'}
            title={'Black Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">17.5%</Typography>
        </div>
      </div>
    </div>
  )
}

export default EdenDyes
