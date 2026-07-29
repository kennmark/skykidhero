import {
  Card,
  Typography,
  CardFooter,
  CardBody,
  Button,
} from '@material-tailwind/react'
import FaQ from './FaQ'
import { newsData } from '../data/newsData'
import { useState } from 'react'

const News = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 4
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = newsData.toReversed().slice(firstIndex, lastIndex)
  const nPage = Math.ceil(newsData.length / recordsPerPage)
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
    <div>
      <Typography variant="h1" className="my-10 text-[#fe7f2d]">
        News
      </Typography>
      <section className="container grid justify-items-center gap-2">
        {records.map((news, index) => (
          <Card
            className={`p-5 w-11/12  news-bg-${news.id} bg-[#233d4d]`}
            key={index}
          >
            <CardBody className="textbox">
              <Typography variant="h4" className="text-left text-black mb-5">
                {news.newsTitle}
              </Typography>

              <Typography variant="h6" className="text-left text-black pl-5">
                {news.newsBody}
              </Typography>
            </CardBody>
            <CardFooter className="pt-3 flex justify-start">
              <a href={news.newsLink} target="_blank">
                <Button className="theme-button">Read More</Button>
              </a>
            </CardFooter>
          </Card>
        ))}

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
      </section>

      <FaQ />
    </div>
  )
}

export default News
