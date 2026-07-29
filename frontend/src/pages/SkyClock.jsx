import { Collapse, Button, Card, Typography } from '@material-tailwind/react'
import { Bars3Icon, ClockIcon } from '@heroicons/react/24/solid'
import SkyClockContainer from './components/SkyClockContainer'
import { useEffect, useState } from 'react'

const SkyClock = () => {
  const [open, setOpen] = useState(true)

  const toggleOpen = () => setOpen((cur) => !cur)

  return (
    <>
      <Button
        onClick={toggleOpen}
        className=" mb-4 flex items-center theme-button"
      >
        {!open ? (
          <Bars3Icon className="h-6 w-6 text-[#233d4d] stroke-2" />
        ) : (
          <ClockIcon className="h-6 w-6 text-[#233d4d] stroke-2" />
        )}
        <Typography className="text-lg font-bold">
          &nbsp; SkyClock &nbsp;
        </Typography>
      </Button>
      <Collapse open={open}>
        <SkyClockContainer />
      </Collapse>
    </>
  )
}

export default SkyClock
