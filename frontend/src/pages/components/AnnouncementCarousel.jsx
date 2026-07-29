import React from 'react'
import { Carousel } from '@material-tailwind/react'
import { announcementCarousel } from '../../data/announcementCarousel'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const AnnouncementCarousel = () => {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-40 flex -translate-x-2/4 gap-2">
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
      {announcementCarousel.map((banner) => (
        <a href={banner.url} target="_blank" key={banner.id}>
          <LazyLoadImage
            src={banner.img_url}
            alt={banner.alt}
            title={banner.alt}
            effect="blur"
            className="h-full w-full object-cover rounded-xl"
          />
        </a>
      ))}
    </Carousel>
  )
}

export default AnnouncementCarousel
