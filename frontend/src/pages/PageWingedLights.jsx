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
import { WINGED_LIGHT } from '../exports/defaultImages'
import { isleOfDawn } from '../data/isleOfDawnData'
import { prairie } from '../data/prairieData'
import { hiddenForest } from '../data/forestData'
import { valley } from '../data/valleyData'
import { wasteland } from '../data/wastelandData'
import { vault } from '../data/vaultData'
import { eden } from '../data/edenData'
import { aviaryData } from '../data/aviarydata'
import { seasons2022 } from '../data/seasons'
import {
  WL_COUNT_DATE_UPDATED,
  TOTAL_WL_COUNT,
  WB_TRAVELING_SPIRITS,
  WB_REGULAR_SPIRITS,
  WL_COUNT,
  ISLE_NUM_WL,
  PRAIRIE_NUM_WL,
  FOREST_NUM_WL,
  VALLEY_NUM_WL,
  WASTELAND_NUM_WL,
  VAULT_NUM_WL,
  EDEN_NUM_WL,
  SHARDS_WL,
  ORBIT_WL,
  AVIARY_NUM_WL,
} from '../exports/constants'
import CardContainer from './components/CardContainer'
import { BarsArrowDownIcon } from '@heroicons/react/24/solid'
import WingedLightIntro from './components/WingedLightIntro'

const PageWingedLights = () => {
  const [open, setOpen] = useState(0)

  const isle_wl = isleOfDawn[2].winged_lights
  const prarie_wl = prairie[2].winged_lights
  const hiddenForest_wl = hiddenForest[2].winged_lights
  const valley_wl = valley[2].winged_lights
  const wasteland_wl = wasteland[2].winged_lights
  const vault_wl = vault[2].winged_lights
  const eden_wl = eden[2].winged_lights
  const shards_wl = seasons2022[2].winged_lights
  const aviary_wl = aviaryData[2].winged_lights

  // console.log(isle_wl)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (
    <div className="flex justify-center">
      <div>
        <SideBarContainer />
      </div>
      <div className="justify-start w-full">
        <WingedLightIntro />
        <div className="p-5">
          <Accordion
            open={open === 1}
            className="mb-2 rounded-lg px-4 bg-[#233d4d] text-[#fe7f2d]"
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
                Isle of Dawn - {ISLE_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {isle_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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
                Daylight Prairie - {PRAIRIE_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {prarie_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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
                Hidden Forest - {FOREST_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {hiddenForest_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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
                Valley of Triumph - {VALLEY_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {valley_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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
                Golden Wasteland - {WASTELAND_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {wasteland_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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
                Vault of Knowledge - {VAULT_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {vault_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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
                Eye of Eden - {EDEN_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {eden_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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
                Shattering Void Space - {SHARDS_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {shards_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
                    />
                  )
                })}
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 9}
            className="mb-2 rounded-lg bg-[#233d4d] text-[#fe7f2d] px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(9)}
              className={`border-b-0 transition-colors ${
                open === 9
                  ? 'text-[#fe7f2d] hover:!text-[#ff9854]'
                  : 'text-[#fe7f2d] hover:text-[#c56646]'
              }`}
            >
              <span className="flex">
                Aviary Village - {AVIARY_NUM_WL} WL &nbsp;
                <BarsArrowDownIcon className="h-6 w-6 text-[#fe7f2d]" />
              </span>
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <div className="flex flex-wrap justify-center gap-3">
                {aviary_wl?.map((wingedLight) => {
                  return (
                    <CardContainer
                      label={wingedLight.wl_label}
                      location={wingedLight.wl_location}
                      url={wingedLight.wl_url}
                      key={wingedLight.wl_label}
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

export default PageWingedLights
