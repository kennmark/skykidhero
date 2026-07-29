import React from 'react'
import {
  Carousel,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from '@material-tailwind/react'
import { testimonies } from '../../data/testimonyData'

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const Testimonials = () => {
  return (
    <div className="">
      <div className="my-10">
        <Typography variant="h1">Feedback</Typography>
      </div>
      <Carousel
        className="rounded-xl"
        transition={{ duration: 1 }}
        autoplay={true}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {testimonies.map((testimony, index) => (
          <div className="relative h-full w-full" key={index}>
            <Card color="transparent" shadow={false} className="w-full px-5">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src={testimony.testimonee_avatar}
                  alt={testimony.testimonee}
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" className="text-[#fe7f2d]">
                      {testimony.testimonee}
                    </Typography>

                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <Typography className="text-gray-500">
                      {testimony.group}
                    </Typography>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="mb-6  pb-5">
                <Typography className="text-[#fe7f2d]">
                  &quot;{testimony.testimonial}&quot;
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Testimonials
