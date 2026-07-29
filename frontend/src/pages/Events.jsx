import { Typography, Card, CardHeader } from '@material-tailwind/react'
import { useState } from 'react'
import FaQ from './FaQ'
import { eventsData } from '../data/eventsData'
import EventCard from './components/EventCard'

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 4
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = eventsData.toReversed().slice(firstIndex, lastIndex)
  const nPage = Math.ceil(eventsData.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <div className="container grid justify-items-center gap-5 my-10 text-[#fe7f2d]">
      <Typography variant="h1">Events</Typography>
      <EventCard records={records} />
      <div className="flex space-x-1">
        <button
          onClick={prevPage}
          className="min-w-9 rounded-md border border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-amber-800 hover:border-amber-800 focus:text-amber-600 focus:bg-amber-800 focus:border-amber-800 ml-2"
        >
          Prev
        </button>
        {numbers.map((n, i) => (
          <button
            className={`min-w-9 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:bg-amber-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-none ml-2 ${
              currentPage === n
                ? 'bg-amber-700 shadow-none'
                : 'disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            }`}
            onClick={() => changeCurrentPage(n)}
            key={i}
          >
            {n}
          </button>
        ))}
        <button
          onClick={nextPage}
          className="min-w-9 rounded-md border border-amber-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-amber-800 hover:border-amber-800 focus:text-amber-600 focus:bg-amber-800 focus:border-amber-800 ml-2"
        >
          Next
        </button>
      </div>
      <FaQ />
    </div>
  )
}

export default Events
