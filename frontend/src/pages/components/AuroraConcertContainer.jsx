import { Button, Typography } from '@material-tailwind/react'
import { useState } from 'react'

const AuroraConcert = ({ dtsValue }) => {
  const [daylightTimeSaving, setDaylightTimeSaving] = useState(dtsValue)

  return (
    <>
      {!daylightTimeSaving && (
        <div className="my-16">
          <Typography>
            Aurora Concert starts at{' '}
            <span className="text-red-400">ODD Numbers Time</span> at
            &nbsp;
            <span className="text-amber-700 font-extrabold">:00</span>
            &nbsp;minutes, Example&nbsp;
            <span className="text-red-400">1</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">3</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">5</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">7</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            <span className="text-red-400">9</span>
            <span className="text-amber-700 font-extrabold">:00</span>&nbsp;
            <span className="text-red-400">11</span>
            <span className="text-amber-700 font-extrabold">:00</span>, &nbsp;
            At only lasts within{' '}
            <span className="text-amber-700 font-extrabold">
              50 minutes (50) minutes
            </span>
            . You will need Aurora Wings for you to be able to join the concert.
          </Typography>
        </div>
      )}
      {daylightTimeSaving && (
        <div className="my-16">
          <Typography>
            Aurora Concert starts at{' '}
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
              50 minutes (50) minutes
            </span>
            . You will need Aurora Wings for you to be able to join the concert.
          </Typography>
        </div>
      )}
    </>
  )
}

export default AuroraConcert
