import { Button, Typography } from '@material-tailwind/react'
import { useState } from 'react'
const GeyserContainer = ({ dtsValue }) => {
  const [daylightTimeSaving, setDaylightTimeSaving] = useState(dtsValue)

  return (
    <>
      {!daylightTimeSaving && (
        <div className="my-16">
          <Typography>
            Geyser starts at{' '}
            <span className="text-red-400">ODD Numbers Time</span> at
            &nbsp;
            <span className="text-amber-700 font-extrabold">:05</span> minutes,
            Example&nbsp;
            <span className="text-red-400">1</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">3</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">5</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">7</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">9</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">11</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            and only lasts within{' '}
            <span className="text-amber-700 font-extrabold">
              ten (10) minutes
            </span>
            . You'll find it in the Sanctuary Islands of Daylight Prairie | Second Map.
          </Typography>
        </div>
      )}
      {daylightTimeSaving && (
        <div className="my-16">
          <Typography>
            Geyser starts at{' '}
            <span className="text-red-400">EVEN Numbers Time</span> at
            &nbsp;
            <span className="text-red-400">2</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">4</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">6</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">8</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">10</span>
            <span className="text-amber-700 font-extrabold">:05</span>, &nbsp;
            <span className="text-red-400">12</span>
            <span className="text-amber-700 font-extrabold">:05</span>. At
            only lasts within{' '}
            <span className="text-amber-700 font-extrabold">
              ten (10) minutes
            </span>
            . You'll find it in the Sanctuary Islands of Daylight Prairie |
            Second Map.
          </Typography>
        </div>
      )}
    </>
  )
}

export default GeyserContainer
