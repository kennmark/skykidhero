import { Button, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div id="error-page" className="my-10">
      <Typography variant="h1" className="text-[#fe7f2d]">
        Oops!
      </Typography>
      <div className="my-5">
        <p>Sorry, looks like a moth drag your Skykid Hero to somewhere else.</p>
        <p className="my-5">
          <i>Page Not Found</i>
        </p>
      </div>
      <Link to={'/'}>
        <Button className="theme-button">Home</Button>
      </Link>
    </div>
  )
}

export default ErrorPage
