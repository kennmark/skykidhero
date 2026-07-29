import React, {useState, useEffect} from 'react'
import { Alert, Typography } from '@material-tailwind/react'

import { isleOfDawn } from '../../data/isleOfDawnData'
import { prairie } from '../../data/prairieData'
import { hiddenForest } from '../../data/forestData'
import { valley } from '../../data/valleyData'
import { wasteland } from '../../data/wastelandData'
import { vault } from '../../data/vaultData'
import SpiritCardContainer from './SpiritCardContainer'
import { allSeasons } from '../../data/seasons'
import { travelingSpirit, groupTs, travelingSpiritDate, travelingSpiritHint,travelingSpiritHintImage, travellingSpiritSeasonId, travellingSpiritId } from '../../exports/constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const LatestTSVisit = () => {
    const {
      id,
      name,
      icon_route,
      season_spirits,
    } = allSeasons[travellingSpiritSeasonId-1]
    
    const [checkedSpirits, setCheckedSpirits] = useState(() => {
        const saved = localStorage.getItem('checkedSpirits')
        const initialValue = JSON.parse(saved) || {} // Default to empty object if no saved data
        return initialValue
      })
    
      useEffect(() => {
        localStorage.setItem('checkedSpirits', JSON.stringify(checkedSpirits))
        }, [checkedSpirits])
      
        const handleCheckboxChange = (event) => {
          const { name, checked } = event.target
          setCheckedSpirits((prevState) => ({ ...prevState, [name]: checked }))
      }
    
    const singleTsSpirit = season_spirits[travellingSpiritId]
    // console.log(season_spirits[travellingSpiritId]);
  return (
    <div className="border-t border-blue-gray-50">
      <div className="py-6">
        <Typography variant="h1" className="my-10 text-[#fe7f2d]">Latest Traveling Spirit Visit (TS)</Typography>
      </div>
      {travelingSpirit ? 
        <>
          {groupTs ?
            <>
              <div className='pb-5'>
                <Typography>A Group of Traveling Spirits has returned in Sky. Starting <span className='font-bold'>{travelingSpiritDate}</span>.</Typography>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {
                  season_spirits.map((spirit) => {
                    return (
                      <SpiritCardContainer
                        {...spirit}
                        icon_route={icon_route}
                        key={spirit.spirit_id}
                        season={name}
                        checkedSpirits={checkedSpirits}
                        handleCheckboxChange={handleCheckboxChange}
                      />
                    )
                  })
                }
              </div>
            </>
            :
            <>
              <div className='pb-5 flex items-center justify-center'>
                <Alert color='amber' className='flex items-center justify-center'>A Traveling Spirits has returned in Sky. Starting <span className='font-bold'>{travelingSpiritDate}</span>.</Alert>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                  
                <SpiritCardContainer
                  {...singleTsSpirit}
                  icon_route={icon_route}
                  key={id}
                  season={name}
                  checkedSpirits={checkedSpirits}
                  handleCheckboxChange={handleCheckboxChange}
                />
              </div>
            </>
          }
        </>
       : 
        <div className='pb-5'>
          <Alert color='amber' className='flex items-center justify-center mb-5'>A Traveling Spirit will return this <span className='font-bold'>{travelingSpiritDate}</span>.</Alert>
          {travelingSpiritHint ?
            <Link to={'https://www.facebook.com/photo.php?fbid=1433003992205632&set=a.606494871523219&type=3&mibextid=wwXIfr&rdid=kOrBSq1SaYJAqyus&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EhC1Ew7xz%2F%3Fmibextid%3DwwXIfr#'}>
              <LazyLoadImage
              src={travelingSpiritHintImage}
              effect="blur"
              className="h-96 w-full rounded-xl"
            />
            </Link>
             :
            <Typography className=''>NO HINT YET!</Typography>
          }
          
        </div>
      }
      
    </div>
  )
}

export default LatestTSVisit
