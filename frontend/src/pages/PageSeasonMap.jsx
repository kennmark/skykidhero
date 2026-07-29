import { Carousel, Typography, Button, Card } from '@material-tailwind/react'
import { SideBarContainer } from './components/SidebarContainer'
import ScrollToTop from 'react-scroll-to-top'
import carousel1 from '../assets/images/seasonal-banners/DVG1.webp'
import carousel2 from '../assets/images/seasonal-banners/DVG2.webp'
import carousel3 from '../assets/images/seasonal-banners/DVG3.webp'
import SeasonDisplayContainer from './components/SeasonDisplayContainer'
import {
  seasons2019,
  seasons2020,
  seasons2021,
  seasons2022,
  seasons2023,
  seasons2024,
  seasons2025,
  seasons2026,
} from '../data/seasons'
import { Link } from 'react-router-dom'
const PageSeasonMap = () => {
  // OPTIMIZATION: Combine historical datasets into a single timeline array object
  const timelineData = [
    { year: "2026", label: "Seasons - [Lightmending, Carnival, Dear Van Gogh]", data: seasons2026, color: "bg-amber-800" },
    { year: "2025", label: "Seasons - [Radiance, Blue Bird, Two Embers One, Migration]", data: seasons2025, color: "bg-yellow-700" },
    { year: "2024", label: "Seasons - [The Nine Colored Deer, Nesting, Duet, Moomin]", data: seasons2024, color: "bg-amber-600" },
    { year: "2023", label: "Seasons - [Remembrance, Passage, Moments, Revival]", data: seasons2023, color: "bg-orange-700" },
    { year: "2022", label: "Seasons - [Abyss, Performance, Shattering, AURORA]", data: seasons2022, color: "bg-red-700" },
    { year: "2021", label: "Seasons - [Dreams, Assembly, The Little Prince, Flight]", data: seasons2021, color: "bg-pink-700" },
    { year: "2020", label: "Seasons - [Rhythm, Enchantment, Sanctuary, Prophecy]", data: seasons2020, color: "bg-purple-700" },
    { year: "2019", label: "Seasons - [Gratitude, Lightseekers, Belonging]", data: seasons2019, color: "bg-blue-700" },
  ]

  return (
    <div>
      <div className="flex justify-center">
        <div className="pt-5">
          <SideBarContainer />
        </div>
        <div className="h-fit w-full my-10 px-5">
          <Typography variant="h1" className="pb-5 text-[#fe7f2d]">
            Seasons
          </Typography>
          
          <Carousel
            className="rounded-xl overflow-hidden"
            autoplay={true}
            loop={true}
          >
            {/* Slide 1 */}
            <div className="relative h-full w-full">
              <img
                src={carousel1}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h5"
                    color="white"
                    className="mb-4 md:text-3xl text-xl"
                  >
                    Season 30 | Season of Dear Van Gogh
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 md:text-xl text-sm"
                  >
                    A New has Season Arrived in Sky: Children of The Light!
                  </Typography>
                  <div className="flex justify-center gap-2">
                    {/* OPTIMIZED ROUTE: Maps flawlessly to our new consolidated path */}
                    <Link to="/seasons/s30-dear-van-gogh">
                      <Button size="sm" className="theme-button" ripple={true}>
                        Enter
                      </Button>
                    </Link>

                    <a href="https://www.thatskygame.com/news/-dear-van-gogh-a-new-interactive-experience-in-sky" target="_blank" rel="noreferrer">
                      <Button size="sm" className="theme-button">
                        Visit Site
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="relative h-full w-full">
              <img src={carousel2} alt="image 2" className="h-full w-full object-cover" />
              <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography variant="h5" color="white" className="mb-4 md:text-3xl text-xl">
                    A New Interactive Experience in Sky
                  </Typography>
                  <Typography variant="lead" color="white" className="mb-12 opacity-80 md:text-xl text-sm">
                    Dear Van Gogh brings you into the life of Vincent van Gogh through an interactive journey shaped by his paintings, his struggles, and the people closest to him.
                  </Typography>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="relative h-full w-full">
              <img src={carousel3} alt="image 3" className="h-full w-full object-cover" />
              <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography variant="h5" color="white" className="mb-4 md:text-3xl text-xl">
                    Blending exploration and emotional storytelling
                  </Typography>
                  <Typography variant="lead" color="white" className="mb-12 opacity-80 md:text-xl text-sm">
                    Dear Van Gogh invites players to feel the weight and warmth of that family bond, to discover that art, at its most basic, rarely endures alone. 
                  </Typography>
                </div>
              </div>
            </div>
          </Carousel>

          {/* OPTIMIZED DYNAMIC TIMELINE GENERATION */}
          <div className="w-full py-10 grid place-content-center">
            <div className="relative border-l border-blue-gray-100 ml-4 md:ml-16 pl-6 space-y-8">
              {timelineData.map((timeline, index) => (
                <div key={index} className="relative">
                  {/* Timeline Indicator Badge */}
                  <span className="absolute -left-[39px] top-0 flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold text-white shadow-sm overflow-hidden">
                    <span className={`w-full h-full ${timeline.color} flex items-center justify-center`}>
                      {timeline.year}
                    </span>
                  </span>
                  
                  {/* Year Group Header */}
                  <Typography variant="h5" color="white" className="mb-4">
                    {timeline.label}
                  </Typography>
                  
                  {/* Flexible Inner Cards Grid mapping individual components */}
                  <div className="flex flex-wrap items-center justify-center gap-4 py-3">
                    {timeline.data && timeline.data.map((season) => (
                      <SeasonDisplayContainer {...season} key={season.id} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PageSeasonMap
