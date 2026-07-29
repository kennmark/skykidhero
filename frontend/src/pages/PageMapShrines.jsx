import React, { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Card,
} from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import ScrollToTop from 'react-scroll-to-top'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { MAP_SHRINE } from '../exports/defaultImages'
import { isleOfDawn } from '../data/isleOfDawnData'
import { prairie } from '../data/prairieData'
import { hiddenForest } from '../data/forestData'
import { valley } from '../data/valleyData'
import { wasteland } from '../data/wastelandData'
import { vault } from '../data/vaultData'
import { eden } from '../data/edenData'
import { aviaryData } from '../data/aviarydata'
import {
  MS_COUNT_DATE_UPDATED,
  TOTAL_MS_COUNT,
  ISLE_NUM_MAP_SHRINES,
  PRAIRIE_NUM_MAP_SHRINES,
  FOREST_NUM_MAP_SHRINES,
  VALLEY_NUM_MAP_SHRINES,
  WASTELAND_NUM_MAP_SHRINES,
  VAULT_NUM_MAP_SHRINES,
  EDEN_NUM_MAP_SHRINES,
  AVIARY_NUM_MAP_SHRINES,
} from '../exports/constants'
import CardContainer from './components/CardContainer'
import { BarsArrowDownIcon } from '@heroicons/react/24/solid'
import MapShrineIntro from './components/MapShrineIntro'

const PageMapShrines = () => {
  const [open, setOpen] = useState(0)

  const isle_ms = isleOfDawn[3].map_shrines
  const prarie_ms = prairie[3].map_shrines
  const hiddenForest_ms = hiddenForest[3].map_shrines
  const valley_ms = valley[3].map_shrines
  const wasteland_ms = wasteland[3].map_shrines
  const vault_ms = vault[3].map_shrines
  const eden_ms = eden[3].map_shrines
  const aviary_ms = aviaryData[3].map_shrines

  // console.log(isle_wl)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <div className="flex justify-center">
      <div>
        <SideBarContainer />
      </div>
      <div className="justify-start w-full">
        <MapShrineIntro />
        <div className="p-5">
          <Accordion
            open={open === 1}
            className="mb-2 rounded-lg bg-[#233d4d] text-[#fe7f2d] px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1
                  ? 'text-[#fe7f2d] hover:!text-[#ff9854]'
                  : 'text-[#fe7f2d] hover:text-[#c56646]'
              }`}
            >
              <span className="flex">
                Isle of Dawn - {ISLE_NUM_MAP_SHRINES} Map Shrines &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {isle_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            className="mb-2 rounded-lg bg-[#233d4d] text-[#fe7f2d] px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2
                  ? 'text-[#fe7f2d] hover:!text-[#ff9854]'
                  : 'text-[#fe7f2d] hover:text-[#c56646]'
              }`}
            >
              <span className="flex">
                Daylight Prairie - {PRAIRIE_NUM_MAP_SHRINES} Map Shrines &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {prarie_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            className="mb-2 rounded-lg bg-[#233d4d] text-[#fe7f2d] px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3
                  ? 'text-[#fe7f2d] hover:!text-[#ff9854]'
                  : 'text-[#fe7f2d] hover:text-[#c56646]'
              }`}
            >
              <span className="flex">
                Hidden Forest - {FOREST_NUM_MAP_SHRINES} Map Shrines &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {hiddenForest_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            className="mb-2 rounded-lg bg-[#233d4d] text-[#fe7f2d] px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors ${
                open === 4
                  ? 'text-[#fe7f2d] hover:!text-[#ff9854]'
                  : 'text-[#fe7f2d] hover:text-[#c56646]'
              }`}
            >
              <span className="flex">
                Valley of Triumph - {VALLEY_NUM_MAP_SHRINES} Map Shrines &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {valley_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            className="mb-2 rounded-lg bg-[#233d4d] text-[#fe7f2d] px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors ${
                open === 5
                  ? 'text-[#fe7f2d] hover:!text-[#ff9854]'
                  : 'text-[#fe7f2d] hover:text-[#c56646]'
              }`}
            >
              <span className="flex">
                Golden Wasteland - {WASTELAND_NUM_MAP_SHRINES} Map Shrines
                &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {wasteland_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 6}
            className="mb-2 rounded-lg bg-[#233d4d] text-[#fe7f2d] px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors ${
                open === 6
                  ? 'text-[#fe7f2d] hover:!text-[#ff9854]'
                  : 'text-[#fe7f2d] hover:text-[#c56646]'
              }`}
            >
              <span className="flex">
                Vault of Knowledge - {VAULT_NUM_MAP_SHRINES} Map Shrines &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {vault_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 7}
            className="mb-2 rounded-lg bg-[#233d4d] text-[#fe7f2d] px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className={`border-b-0 transition-colors ${
                open === 7
                  ? 'text-[#fe7f2d] hover:!text-[#ff9854]'
                  : 'text-[#fe7f2d] hover:text-[#c56646]'
              }`}
            >
              <span className="flex">
                Eye of Eden - {EDEN_NUM_MAP_SHRINES} Map Shrines &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {eden_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 8}
            className="mb-2 rounded-lg bg-[#233d4d] text-[#fe7f2d] px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(8)}
              className={`border-b-0 transition-colors ${
                open === 8
                  ? 'text-[#fe7f2d] hover:!text-[#ff9854]'
                  : 'text-[#fe7f2d] hover:text-[#c56646]'
              }`}
            >
              <span className="flex">
                Aviary Village - {AVIARY_NUM_MAP_SHRINES} Map Shrines &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {aviary_ms?.map((mapShrine) => {
                  return (
                    <CardContainer
                      label={mapShrine.shrine_label}
                      location={mapShrine.shrine_location}
                      url={mapShrine.shrine_url}
                      key={mapShrine.shrine_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <ScrollToTop smooth className="scrollToTop" />
    </div>
  )
}

export default PageMapShrines
