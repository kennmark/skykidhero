import React from 'react'
import { useState } from 'react'
import { Typography, Card, CardHeader } from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const EventCard = ({ records }) => {
  return records.map((event) => (
    <div className="flex justify-center items-center pt-10" key={event.id}>
      <Card className="pt-2 pb-4 w-11/12 " variant="gradient" color="gray">
        <CardHeader color="blue-gray" className="relative h-auto">
          <LazyLoadImage
            src={event.img}
            alt={event.title}
            title={event.title}
            effect="blur"
          />
        </CardHeader>
        <Typography variant="h4" className="flex justify-start pt-3 pb-5 px-5">
          {event.title}
        </Typography>
        <Typography variant="h6" className="flex justify-start px-5">
          {event.sub_title}
        </Typography>
        <Typography variant="h6" className="flex justify-start px-5">
          {event.description}
        </Typography>
      </Card>
    </div>
  ))
}

export default EventCard
