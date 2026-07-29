import { Alert, Typography } from '@material-tailwind/react'
import React from 'react'

const DyeAlertMessage = () => {
  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    )
  }

  return (
    <div className="flex w-full flex-col mt-2">
      <Alert color="amber" icon={<Icon />} className="p-1">
        <Typography variant="h3">REMINDER</Typography>
        Burning Dye Plants releases butterflies that match the plants' corresponding colors. Use the Butterfly Expression or a Deep Honk to collect and fill containers with Colored Light, similar to gathering wax for regular candles.
When the group leader performs the expression or Deep Honk, nearby companions can also receive the corresponding color. Dye Plant locations rotate regularly, changing every hour based on whether the current time falls on an even-numbered or odd-numbered hour.
      </Alert>
    </div>
  )
}

export default DyeAlertMessage
