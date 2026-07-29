import React from 'react'
import {  Tab } from '@material-tailwind/react'
import { Link, useLocation } from 'react-router-dom'

const MapTabHeaderContainer = ({ label, value, icon: Icon, activeTab, setActiveTab }) => {
  const { pathname } = useLocation();

  return (
    
      <Tab
        as={Link} // 1. Transforms the Tab component into a true React Router Link
        to={`${pathname}#${value}`} // 2. Appends the hash destination securely
        id={`${value}`} // 3. Attaches an explicit identifier to the DOM node element
        key={value}
        value={value}
        onClick={() => setActiveTab(value)}
        className={`py-3 theme-navbar transition-colors duration-200
                  ${activeTab === value ? 'text-[#233d4d] bg-[#fe7f2d] rounded-lg' : 'text-[#fe7f2d]'}
        `}
      >
        <div className="flex items-center justify-center gap-2">
          <Icon className="h-7 w-7" />
          <span className="hidden lg:inline">{label}</span>
        </div>
      </Tab> 
  )
}

export default MapTabHeaderContainer
