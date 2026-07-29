import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import { skyclock } from '../../data/skyclock'
import { createElement, useState } from 'react'

const SkyClockContainer = () => {
  const [activeTab, setActiveTab] = useState('geyser')

  return (
    <div className="w-full border-b border-blue-gray-50 py-4">
      <Tabs value={activeTab}>
        <TabsHeader className="bg-[#233d4d]">
          {skyclock.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`theme-navbar
                ${activeTab === value ? 'text-[#233d4d]' : 'text-[#fe7f2d]'}
              `}
            >
              <div className="flex items-center gap-2 py-2">
                {createElement(icon, { className: 'w-5 h-5' })}
                {screen.width > 750 ? label : ''}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="flex justify-center">
          {skyclock.map(({ value, desc }) => (
            <TabPanel
              key={value}
              value={value}
              className="text-amber-50 w-10/9 lg:w-10/12"
            >
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default SkyClockContainer
