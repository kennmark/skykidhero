import {
  useEffect,
  useState,
} from 'react'

import {
  Link,
  useLocation,
} from 'react-router-dom'

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react'

import {
  Bars3Icon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/24/solid'

import {
  LazyLoadImage,
} from 'react-lazy-load-image-component'

import skykidlogo from '../../assets/images/logo/T_G Logo white.png'
import SpiritProgressBadge from './SpiritProgressBadge'

function NavItem({
  to,
  children,
  currentPath,
  onClick,
}) {
  const isActive =
    currentPath === to

  return (
    <Link
      to={to}
      onClick={onClick}
      aria-current={
        isActive
          ? 'page'
          : undefined
      }
      className={`
        block
        rounded-lg
        px-3
        py-2.5
        text-sm
        font-semibold
        uppercase
        transition-all
        duration-200

        ${
          isActive
            ? 'bg-[#fe7f2d] text-[#233d4d]'
            : 'text-[#fe7f2d] hover:bg-[#fe7f2d] hover:text-[#233d4d]'
        }
      `}
    >
      {children}
    </Link>
  )
}

const NAV_ITEMS = [
  {
    to: '/news',
    label: 'News',
  },
  {
    to: '/seasons',
    label: 'Seasons',
  },
  {
    to: '/team',
    label: 'Team',
  },
  {
    to: '/events',
    label: 'Events',
  },
  {
    to: '/support',
    label: 'Support',
  },
]

const Header = () => {
  const [
    openNav,
    setOpenNav,
  ] = useState(false)

  const location =
    useLocation()

  useEffect(() => {
    setOpenNav(false)
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth >= 960
      ) {
        setOpenNav(false)
      }
    }

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      )
    }
  }, [])

  const handleNavClick = () => {
    setOpenNav(false)
  }

  const navList = (
    <ul
      className="
        flex
        flex-col
        gap-2

        lg:flex-row
        lg:items-center
        lg:gap-0.5

        xl:gap-1.5
      "
    >
      {NAV_ITEMS.map(
        (item) => (
          <li key={item.to}>
            <NavItem
              to={item.to}
              currentPath={
                location.pathname
              }
              onClick={
                handleNavClick
              }
            >
              {item.label}
            </NavItem>
          </li>
        )
      )}
    </ul>
  )

  return (
    <Navbar
      fullWidth
      className="
        sticky
        top-0
        z-50
        mx-auto
        h-max
        w-full
        rounded-b-lg
        border-0
        border-b-2
        border-[#fe7f2d]
        bg-[#233d4d]
        px-3
        py-2

        sm:px-4

        lg:px-6
        lg:py-3

        xl:px-8
        xl:py-4
      "
    >
      <div
        className="
          grid
          min-w-0
          grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
          items-center
          gap-2
          uppercase

          sm:gap-3
        "
      >
        <div
          className="
            min-w-0
            justify-self-start
          "
        >
          <Link
            to="/"
            onClick={handleNavClick}
            aria-label="SkykidHero home"
            className="
              block
              min-w-0
            "
          >
            <div
              className="
                flex
                min-w-0
                items-center
                rounded-2xl
                px-2
                py-1
                text-[#fe7f2d]
                transition
                duration-300

                hover:bg-[#fe7f2d]
                hover:text-[#233d4d]

                sm:px-3
              "
            >
              <LazyLoadImage
                src={skykidlogo}
                alt="SkykidHero"
                className="
                  h-10
                  w-10
                  shrink-0
                  object-contain

                  sm:h-[50px]
                  sm:w-[50px]
                "
              />

              <Typography
                className="
                  hidden
                  truncate
                  p-1
                  text-base
                  font-bold

                  xl:block
                "
              >
                SkykidHero
              </Typography>
            </div>
          </Link>
        </div>

        <div
          className="
            min-w-0
            justify-self-center
          "
        >
          <SpiritProgressBadge />
        </div>

        <div
          className="
            flex
            min-w-0
            items-center
            justify-self-end
          "
        >
          <div
            className="
              hidden

              lg:block
            "
          >
            {navList}
          </div>

          <IconButton
            variant="text"
            ripple={false}
            aria-label={
              openNav
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={openNav}
            onClick={() =>
              setOpenNav(
                (previous) =>
                  !previous
              )
            }
            className="
              shrink-0
              text-white

              hover:bg-white/10

              lg:hidden
            "
          >
            {openNav ? (
              <ChevronDoubleUpIcon
                className="h-6 w-6"
              />
            ) : (
              <Bars3Icon
                className="h-6 w-6"
              />
            )}
          </IconButton>
        </div>
      </div>

      <Collapse open={openNav}>
        <div
          className="
            mt-3
            border-t
            border-[#fe7f2d]/30
            pt-3

            lg:hidden
          "
        >
          {navList}
        </div>
      </Collapse>
    </Navbar>
  )
}

export default Header