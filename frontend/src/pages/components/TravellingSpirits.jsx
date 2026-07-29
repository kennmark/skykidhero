import React from 'react'
import { allSeasons } from '../../data/seasons'
import { Typography } from '@material-tailwind/react'
import SpiritCardContainer from './SpiritCardContainer'

const TravellingSpirits = () => {
  return (
    <div>
      <Typography variant="h1">Traveling Spirits</Typography>
      <div className="flex">
        {/* {travelingSpirits[0].map((spirits, key) => {
          // console.log(
          //   spirits.number_of_visits.sort((a, b) => b.visitNo - a.visitNo)
          // )

          return <SpiritCardContainer {...spirits} key={key} />
        })} */}
      </div>
    </div>
  )
}

export default TravellingSpirits
