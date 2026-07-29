import React from 'react'
import { Link } from 'react-router-dom'
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Spinner,
} from '@material-tailwind/react'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { seasons2020 } from '../../data/seasons'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const AccordionSeason2020 = ({ open, handleOpen }) => {
  return (
    <Accordion
      open={open === 3}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            open === 3 ? 'rotate-180' : ''
          }`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 3}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 p-3 hover:text-[#fe7f2d] transition-colors ${
            open === 3 ? 'text-[#fe7f2d]' : ''
          }`}
        >
          <ListItemPrefix>
            <SparklesIcon className={`h-5 w-5 `} />
          </ListItemPrefix>
          <Typography className={`mr-auto`}>Seasons in 2020</Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1">
        <List className="p-0">
          {seasons2020
            .slice()
            .reverse()
            .map((season) => {
              return (
                <Link
                  to={`/${season.page_route}`}
                  className=" text-blue-gray-900"
                  key={season.id}
                >
                  <ListItem className="hover:text-[#fe7f2d]">
                    <ListItemPrefix>
                      <LazyLoadImage
                        src={season.icon_route}
                        alt={season.name}
                        width={35}
                        placeholderSrc={
                          <Spinner className="h-10 w-10 text-gray-900/50" />
                        }
                        effect="blur"
                      />
                    </ListItemPrefix>
                    {season.name}
                  </ListItem>
                </Link>
              )
            })}
        </List>
      </AccordionBody>
    </Accordion>
  )
}

export default AccordionSeason2020
