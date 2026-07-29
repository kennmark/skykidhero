import React from 'react'
import { PrairieDyeLocation } from '../../../data/DyeLocations'
import { Typography } from '@material-tailwind/react'
import DyeCardContainer from '../DyeCardContainer'
import PrairieIcon from '../../../assets/images/icons/Map2-Prairie-Icon.webp'
import RED_JAR from '../../../assets/images/Dyes/Red-Jar.webp'
import YELLOW_JAR from '../../../assets/images/Dyes/Yellow-Jar.webp'
import WHITE_JAR from '../../../assets/images/Dyes/White-Jar.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import DyesMaxPerDay from '../DyesMaxPerDay'

const PrairieDyes = () => {
  const PRAIRIE = 'Prairie'

  return (
    <div className="mt-5 mb-5 border-4 rounded-3xl p-5 w-72 h-auto md:h-96 flex flex-wrap justify-center items-center">
      <Typography variant="h2" className="my-5">
        Prairie Dye Distribution
      </Typography>

      <div className="flex flex-wrap justify-center pt-5 pb-10 gap-4">
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={RED_JAR}
            alt={'Red Jar'}
            title={'Red Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">53%</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={YELLOW_JAR}
            alt={'Yellow Jar'}
            title={'Yellow Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">30%</Typography>
        </div>
        <div className="flex flex-wrap gap-2 mr-2">
          <LazyLoadImage
            src={WHITE_JAR}
            alt={'White Jar'}
            title={'White Jar'}
            width={20}
          />
          <Typography className="flex place-self-end">7%</Typography>
        </div>
      </div>

      {/* <div className="flex flex-wrap gap-5 justify-center">
        {PrairieDyeLocation.map((dyeLocation, index) => {
          return (
            <DyeCardContainer
              {...dyeLocation}
              icon={PrairieIcon}
              map={PRAIRIE}
              key={index}
            />
          )
        })}
      </div> */}
    </div>
  )
}

export default PrairieDyes
