import React, { useState } from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
} from '@material-tailwind/react'
import {
  GlobeAsiaAustraliaIcon,
  UserGroupIcon,
  InboxIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/solid'
import {
  ChevronDownIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { maps } from '../../data/maps'
import AccordionSeason2019 from './AccordionSeason2019'
import AccordionSeason2020 from './AccordionSeason2020'
import AccordionSeason2021 from './AccordionSeason2021'
import AccordionSeason2022 from './AccordionSeason2022'
import AccordionSeason2023 from './AccordionSeason2023'
import AccordionSeason2024 from './AccordionSeason2024'
import AccordionSeason2025 from './AccordionSeason2025'
import AccordionSeason2026 from './AccordionSeason2026'
import { Link, useNavigate } from 'react-router-dom'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { allSeasons } from './../../data/seasons';
import { LazyLoadImage } from 'react-lazy-load-image-component'

const SideBar = ({ closeDrawer }) => {
  const [open, setOpen] = useState(0)
  const navigate = useNavigate()
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  const handleSearchClick = (route) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    closeDrawer();

    setTimeout(() => {
      navigate(route);
    }, 200);
  }

   // 1. Manage state for the search input text string
  const [searchTerm, setSearchTerm] = useState('')

  // 2. Automate filtering logic (Completely case-insensitive)
  const filteredSeasons = searchTerm.trim()
    ? allSeasons.filter((season) =>
        season.name.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 3)
    : []

  return (
    <div className="
      w-full
      lg:max-w-[20rem]
      h-full
      bg-blue-gray-50
      flex flex-col
      shadow-blue-gray-900/5">
      <div className="p-4 border-b border-blue-gray-100">
        <Typography variant="h5" className="text-[#233d4d]">
          Dashboard
        </Typography>
        {/* 3. The Search Input Box Field */}
        <div className="relative w-full mt-2">
          <Input
            type="text"
            label="Search Seasons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            color="amber"
            className="text-[16px] pr-10 text-blue-gray-900"
            icon={
              searchTerm ? (
                <XMarkIcon 
                  className="h-5 w-5 text-gray-400 hover:text-[#fe7f2d] cursor-pointer transition-colors" 
                  onClick={() => {
                    setSearchTerm('')
                    document.activeElement?.blur()}}
                />
              ) : (
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              )
            }
          />
        </div>
         {/* 4. Scrollable Container List Area */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-1 scrollbar-thin scrollbar-thumb-amber-700">
          {!searchTerm && (
            <Typography
              variant="small"
              className="text-gray-400 font-mono uppercase px-3 py-1 block"
            >
              Seasons Record ({allSeasons.length})
            </Typography>
          )}
          {filteredSeasons.length > 0 ? (
            filteredSeasons.map((season) => (
              <Link
                key={season.id}
                to={`/${season.page_route}`}
                onClick={handleSearchClick}
                className="flex items-center gap-2 px-3 py-2.5 cursor-pointer rounded-lg text-[#233d4d] hover:bg-[#fe7f2d] hover:text-[#233d4d] transition-all duration-200 group font-sans text-sm font-medium"
              >
                <span className="font-mono text-xs text-[#fe7f2d] group-hover:text-[#233d4d] bg-[#233d4d] group-hover:bg-white/20 px-1.5 py-0.5 rounded">
                  {String(season.id).padStart(2, "0")}
                </span>
                <span>
                  <LazyLoadImage 
                    src={season.icon_route}
                    alt={season.name}
                    width={20}
                    effect="blur"/>
                </span>
                <span className="truncate">{season.name}</span>
              </Link>
            ))
          ) : (
            searchTerm && (
              <div className="text-center py-8 px-2">
                <Typography variant="small" className="text-gray-500 italic">
                  No Season matched your search "{searchTerm}"
                </Typography>
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <List className="pb-20">
          <Accordion
            className="text-[#233d4d]"
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform  ${
                  open === 1 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={`border-b-0 p-3 hover:text-[#fe7f2d] transition-colors ${
                  open === 1 ? 'text-[#fe7f2d]' : ''
                }`}
              >
                <ListItemPrefix className="">
                  <GlobeAsiaAustraliaIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography className={`mr-auto`}>Maps</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                {maps.map((map, index) => {
                  return (
                    <Link
                      to={`/${map.pageRoute}`}
                      onClick={handleSearchClick}
                      className=" flex justify-center"
                      key={index}
                    >
                      <ListItem
                        selected={map.id}
                        className={`text-[#233d4d] hover:text-[#fe7f2d] `}
                      >
                        <Typography>{map.title}&nbsp;</Typography>

                        <ListItemSuffix>
                          <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                        </ListItemSuffix>
                      </ListItem>
                    </Link>
                  )
                })}
              </List>
            </AccordionBody>
          </Accordion>

          <hr className="my-2 border-[#fe7f2d]" />
          
          <AccordionSeason2026 open={open} handleOpen={handleOpen} />
          <AccordionSeason2025 open={open} handleOpen={handleOpen} />
          <AccordionSeason2024 open={open} handleOpen={handleOpen} />
          <AccordionSeason2023 open={open} handleOpen={handleOpen} />
          <AccordionSeason2022 open={open} handleOpen={handleOpen} />
          <AccordionSeason2021 open={open} handleOpen={handleOpen} />
          <AccordionSeason2020 open={open} handleOpen={handleOpen} />
          <AccordionSeason2019 open={open} handleOpen={handleOpen} />

          <hr className="my-2 border-[#fe7f2d]" />

          <ListItem className="">
            <Link to={'/winged-lights'} onClick={handleSearchClick}>
              <div className="flex flex-wrap ">
                <ListItemPrefix>
                  <UserGroupIcon className="h-5 w-5" />
                </ListItemPrefix>
                <div>Winged Lights</div>
                <ListItemSuffix>
                  <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                </ListItemSuffix>
              </div>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={'/map-shrines'} onClick={handleSearchClick}>
              <div className="flex flex-wrap">
                <ListItemPrefix>
                  <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>
                Map Shrines
                <ListItemSuffix>
                  <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                </ListItemSuffix>
              </div>
            </Link>
          </ListItem>

          <ListItem>
            <Link to={'/veterans'} onClick={handleSearchClick}>
              <div className="flex flex-wrap text-blue-gray-700">
                <ListItemPrefix>
                  <CheckBadgeIcon className="h-5 w-5" />
                </ListItemPrefix>
                Veterans
                <ListItemSuffix>
                  <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                </ListItemSuffix>
              </div>
            </Link>
          </ListItem>
        </List>
      </div>   
    </div>
  )
}

export default SideBar
