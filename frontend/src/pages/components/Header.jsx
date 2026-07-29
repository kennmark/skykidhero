import { useState, useEffect } from 'react'
import { Link, useLocation  } from 'react-router-dom'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react'
import { Bars3Icon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import skykidlogo from '../../assets/images/logo/T_G Logo white.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const NavItem = ({ to, children }) => (
  <Link
    to={to}
    className={`
      block rounded-lg px-4 py-3 text-sm font-semibold uppercase
      transition-all duration-200
      ${
        location.pathname === to
          ? "bg-[#fe7f2d] text-[#233d4d]"
          : "text-[#fe7f2d] hover:bg-[#fe7f2d] hover:text-[#233d4d]"
      }
    `}
  >
    {children}
  </Link>
);

const navList = (
  <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
    <li><NavItem to="/news">News</NavItem></li>
    <li><NavItem to="/seasons">Seasons</NavItem></li>
    <li><NavItem to="/team">Team</NavItem></li>
    <li><NavItem to="/events">Events</NavItem></li>
    <li><NavItem to="/support">Support</NavItem></li>
  </ul>
);

const Header = () => {
  const [openNav, setOpenNav] = useState(false)
  const location = useLocation();

  useEffect(() => {
    setOpenNav(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  const handleNavClick = () => {
    setOpenNav(false)
  }

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
      <li><NavItem to="/news">News</NavItem></li>
      <li><NavItem to="/seasons">Seasons</NavItem></li>
      <li><NavItem to="/team">Team</NavItem></li>
      <li><NavItem to="/events">Events</NavItem></li>
      <li><NavItem to="/support">Support</NavItem></li>
    </ul>
  )

  return (
    <Navbar
      className="bg-[#233d4d] border-0 border-b-2 border-[#fe7f2d] sticky top-0 z-50 h-max mx-auto w-full rounded-br-lg rounded-bl-lg py-2 px-4 lg:px-8 lg:py-4"
      fullWidth={true}
    >
      <div className="flex items-center justify-between uppercase">
        <Link to="/" className="">
          <div className="flex items-center text-[#fe7f2d] transition ease-in-out duration-500 hover:text-[#233d4d] hover:bg-[#fe7f2d] py-1 px-3 rounded-2xl">
            <LazyLoadImage src={skykidlogo} style={{ width: 50 }} />
            <Typography className="p-1 text-md font-bold hidden lg:flex">
              SkykidHero
            </Typography>
          </div>
        </Link>

        <div className="flex items-center  gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

         <IconButton
            variant="text"
            ripple={false}
            onClick={() => setOpenNav((prev) => !prev)}
            className="lg:hidden text-white hover:bg-white/10"
          >
            {openNav ? (
              <ChevronDoubleUpIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
            )}
        </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="mt-4 border-t border-[#fe7f2d]/30 pt-4 lg:hidden">
          {navList}
        </div>
      </Collapse>
    </Navbar>
  )
}

export default Header
