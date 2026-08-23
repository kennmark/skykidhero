import React, { useEffect, useState } from 'react'
import { Typography, Chip, Tooltip, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import MapCardContainer from './components/MapCardContainer'
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
import VeteranFeatured from './components/VeteranFeatured'
import HomeHero from './components/HomeHero'
import WingedLightSection from './components/WingedLightSection'
import ShardEvent from './components/ShardEvent'
import SpiritProgressOverview from './components/SpiritProgressOverview'
import {
  getPublishedMaps,
} from '../services/map.service'

import {
  createHomeMapCards,
  createMapCards,
  getStaticMapCards,
} from '../utils/mapCardAdapter'

const HomeSpace = () => {
  const screenSize = useScreenSize()

  const [
  apiMapCards,
  setApiMapCards,
  ] = useState(null)

  const [
  mapLoadFailed,
  setMapLoadFailed,
  ] = useState(false)

  useEffect(() => {
    let cancelled = false

    getPublishedMaps()
      .then((apiMaps) => {
        if (cancelled) {
          return
        }

        setApiMapCards(
          createMapCards(apiMaps)
        )

        setMapLoadFailed(false)
      })
      .catch((error) => {
        if (cancelled) {
          return
        }

        console.error(
          'Unable to load public Maps:',
          error
        )

        setMapLoadFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const mapsReady =
    apiMapCards !== null ||
    mapLoadFailed

  const mapCardSource =
    mapLoadFailed
      ? getStaticMapCards()
      : apiMapCards ?? []

  const mapCards =
    mapsReady
      ? createHomeMapCards(
          mapCardSource
        )
      : []
  
  const useMapSwiper =
    screenSize >= 1440 &&
    mapCards.length >= 4

  const swiperSlidesPerView = 3

  const canLoop =
    mapCards.length >
    swiperSlidesPerView

  console.log(
    'Map carousel debug:',
    {
      screenSize,
      innerWidth:
        window.innerWidth,
      apiMapCards:
        apiMapCards?.length,
      mapCards:
        mapCards.length,
      mapsReady,
      useMapSwiper,
    }
  )

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

      {/* Map Cards */}
      <div className="flex flex-cols justify-center">
          <Typography variant="h1" className="text-[#fe7f2d]">
            Maps
          </Typography>
      </div>
      <div className="flex flex-wrap justify-center my-5 md:my-10">
        {!mapsReady ? (
          <Typography className="py-10 text-white/50">
            Loading Maps...
          </Typography>
        ) : useMapSwiper ? (
          <Swiper
            spaceBetween={10}
            slidesPerView={
              swiperSlidesPerView
            }

            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              EffectCoverflow,
            ]}

            navigation

            pagination={{
              clickable: true,
            }}

            scrollbar={{
              draggable: true,
            }}

            loop={canLoop}

            effect="coverflow"
            centeredSlides={true}

            className="py-5"

            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {mapCards.map((map) => (
              <SwiperSlide
                key={map.pageRoute}
              >
                <MapCardContainer
                  {...map}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          mapCards.map((map) => (
            <MapCardContainer
              {...map}
              key={map.pageRoute}
            />
          ))
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
