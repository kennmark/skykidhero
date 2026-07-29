import Header from '../components/Header'
import Footer from '../components/Footer'
import ParallaxBG from '../components/ParallaxBG'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Layout = () => {
  const location = useLocation();

    useEffect(() => {
  requestAnimationFrame(() => {
    window.scrollTo(window.scrollX, window.scrollY);
  });
}, [location.pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <ParallaxBG />
      <Header />
      <div className="container mx-auto flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
