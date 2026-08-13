import React, { useEffect, useState } from 'react'
import { maps } from '../data/maps'
import { Typography, Chip, Tooltip, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import MapCardContainer from './components/MapCardContainer'
// import ErrorBoundary from './components/ErrorBoundary'
import AnnouncementModal from './AnnouncementModal'
import FaQ from './FaQ'
import SkyClock from './SkyClock'
import {
  WL_COUNT_DATE_UPDATED,
  TOTAL_WL_COUNT,
  PLAYSTATION_MAX_WL,
  STEAM_MAX_WL,
} from '../exports/constants'

import Testimonials from './components/Testimonials'
import LatestTSVisit from './components/LatestTSVisit'
import MapShrineIntro from './components/MapShrineIntro'
import useScreenSize from '../hooks/useScreenSize'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import DyeLocations from './components/DyeLocations'
import TestFile from './components/TestFile'
import VeteranFeatured from './components/VeteranFeatured'
import HomeHero from './components/HomeHero'
import WingedLightSection from './components/WingedLightSection'
import ShardEvent from './components/ShardEvent'
import SpiritProgressOverview from './components/SpiritProgressOverview'

const HomeSpace = () => {
  const screenSize = useScreenSize()

  // console.log(getAllInLocalStorage)

  return (
    <div className="">
      <AnnouncementModal />
      <HomeHero />

      {/* Spirit progress */}
      <SpiritProgressOverview />
      {/* Spirit progress */}

      <div className="flex flex-wrap justify-center my-5 md:my-20">
        <SkyClock />
      </div>
      {/* Test */}
      {/* <TestFile /> */}
      {/* Test */}

      {/* Map Cards */}
      <div className="flex flex-cols justify-center">
          <Typography variant="h1" className="text-[#fe7f2d]">
            Maps
          </Typography>
      </div>
      <div className="flex flex-wrap justify-center my-5 md:my-10">
        {screenSize < 1440 ? (
          maps.map((map) => {
            return <MapCardContainer {...map} />
          })
        ) : (
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // slideshadows
            loop={true}
            effect="coverflow"
            className="py-5"
          >
            {maps.map((map, index) => {
              return (
                <SwiperSlide zoom={true} key={index}>
                  <MapCardContainer {...map} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        )}
      </div>
      {/* Map Cards */}

      {/* Traveling Spirits */}
      <div className="my-6 w-96 md:w-full flex justify-center">
        <LatestTSVisit />
      </div>
      {/* Traveling Spirits */}
      
      {/* Shard Event */}
      <ShardEvent />
      {/* Shard Event */}

      {/* Winged Lights */}
      <WingedLightSection />
      {/* Winged Lights */}

      {/* Map Shrines */}
      <MapShrineIntro />
      {/* Map Shrines */}

      {/* Dye Locations */}
        <DyeLocations />
      {/* Dye Locations */}

      {/* Veterans */}
        <VeteranFeatured />
      {/* Veterans */}

      <div className="my-5 md:my-20 w-96 md:w-full text-[#fe7f2d]">
        <Testimonials />
      </div>
      <FaQ />
    </div>
  )
}

export default HomeSpace
