import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
  Button,
} from '@material-tailwind/react'
import React from 'react'

const TextPopOver = ({
  openPopover,
  setOpenPopover,
  triggers,
  spirit_direction,
}) => {
  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Button
          size="md"
          ripple={true}
          fullWidth={true}
          className="bg-gradient-to-r rounded-tl-none rounded-bl-none from-purple-900 to-blue-900 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500 hover:shadow-lg"
        >
          Text Guide
        </Button>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[26rem]">
        <div className="mb-2 flex items-center gap-3">
          <Typography
            variant="h6"
            color="blue-gray"
            className="font-medium transition-colors hover:text-gray-900"
          >
            {spirit_direction}
          </Typography>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default TextPopOver
