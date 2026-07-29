import { Button, Typography } from '@material-tailwind/react'
import { useState } from 'react'

const Fireworks = ({ dtsValue }) => {
  const [daylightTimeSaving, setDaylightTimeSaving] = useState(dtsValue)

  return (
    <>
      {!daylightTimeSaving && (
        <div className="my-16">
          <Typography>
            Fireworks starts at an exact time{' '}
            <span className="text-red-400">ODD Numbers Time</span> at
            &nbsp;
            <span className="text-amber-700 font-extrabold">:00</span>
            &nbsp;minutes, Example&nbsp;
            <span className="text-red-400">3</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">7</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">11</span>
            <span className="text-amber-700 font-extrabold">:00</span>
            At only lasts within{' '}
            <span className="text-amber-700 font-extrabold">
              Fifteen (15) minutes
            </span>
            . You'll find it in the Aviary Village | Seventh Map (in the
            middle portal that is on the sea if you are coming from the old home), Just go straight towards the end of the village and on the right side after a short tunnel, you will find the fireworks staff.
          </Typography>
        </div>
      )}
      {daylightTimeSaving && (
        <div className="my-16">
          <Typography>
             Fireworks starts at an exact time{' '}
            <span className="text-red-400">EVEN Numbers Time</span> at
            &nbsp;
            <span className="text-red-400">4</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">8</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">12</span>
            <span className="text-amber-700 font-extrabold">:00</span>. At
            only lasts within{' '}
            <span className="text-amber-700 font-extrabold">
              Fifteen (15) minutes
            </span>
            . You'll find it in the Aviary Village | Seventh Map (in the
            middle portal that is on the sea if you are coming from the old home), Just go straight towards the end of the village and on the right side after a short tunnel, you will find the fireworks staff.
          </Typography>
        </div>
      )}
    </>
  )
}

export default Fireworks
