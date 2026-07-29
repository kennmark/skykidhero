import React, { useState, useEffect } from 'react'
import MapTabHeaderContainer from '../components/MapTabHeaderContainer'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Typography,
} from '@material-tailwind/react'
import SpiritCardContainer from '../components/SpiritCardContainer'
import CardContainer from '../components/CardContainer'
import PageHeaderContainer from '../components/PageHeaderContainer'
import { SideBarContainer } from '../components/SidebarContainer'
import DifficultyCriteria from '../components/DifficultyCriteria'
import { SeasonTabHeader2 } from '../../data/seasonTabHeader'
import { seasons2022 } from '../../data/seasons'
import ScrollToTop from 'react-scroll-to-top'
import SeasonQuestGiver from '../components/SeasonQuestGiver'
import { SeasonGuidesData } from '../../data/seasonGuidesData'

const S14ShatteringPage = () => {
  const [activeTab, setActiveTab] = useState('info')
  const {
    id,
    name,
    time_duration,
    spirit_num,
    ms_num,
    wl_num,
    icon_route,
    quick_info,
    season_spirits,
    winged_lights,
    map_shrines,
  } = seasons2022[2]

  const [checkedSpirits, setCheckedSpirits] = useState(() => {
    const saved = localStorage.getItem('checkedSpirits')
    const initialValue = JSON.parse(saved) || {} // Default to empty object if no saved data
    return initialValue
  })
  // console.log({ checkedSpirits })

  useEffect(() => {
    localStorage.setItem('checkedSpirits', JSON.stringify(checkedSpirits))
  }, [checkedSpirits])

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target
    setCheckedSpirits((prevState) => ({ ...prevState, [name]: checked }))
  }

  return (
    <div className="flex justify-center">
      <div>
        <SideBarContainer />
      </div>
      <div className="justify-start w-full">
        <PageHeaderContainer
          seasonId={id}
          imgUrl={icon_route}
          alt={name}
          height={25}
          width={75}
          title={name}
          mapIntro={
            'The ground shakes and the sky darkens... Unite, Sky kids, and bring your light to Season of Shattering!'
          }
        />
        <Tabs id="custom-animation" value={activeTab}>
          <TabsHeader className="bg-[#233d4d] flex items-center">
            {SeasonTabHeader2.map((headerTab, index) => {
              return (
                <MapTabHeaderContainer
                  {...headerTab}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  key={index}
                />
              )
            })}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
            key={activeTab}
          >
            <TabPanel key={activeTab} value={activeTab}>
              {activeTab === 'info' && (
                <div className="text-gray-100 pb-5">
                  <Typography className="mb-3">
                    {quick_info} Nagsimula ito noong {time_duration}. May{' '}
                    {spirit_num} na spirits sa season na ito at{' '}
                    {wl_num ? 'May ' + wl_num : '(0) o walang winged light '}
                    &nbsp; winged light(s). Sa season na ito ay
                    {ms_num
                      ? ' may ' + ms_num
                      : ' (0) o walang map shrine'}{' '}
                    &nbsp;map shrine(s).
                  </Typography>{' '}
                  <Typography className="mb-3">
                    Ang Shard Schedules ay hindi sunod-sunod. Upang makapasok sa
                    void memories, Red Shards Eruption ang tanging paraan para
                    makapasok. Mayroong Jellyfish Void bilang 1st void, Crabs &
                    Flying Darkness Plants void 2nd void, Mantas Void naman
                    bilang 3rd void, Krill Void bilang 4th void, Whale void
                    bilang 5th void, at Elders Void bilang 6th void.
                  </Typography>
                  <Typography>
                    Kung ito ay unang beses mo palang gagawin ang Red Shards
                    Eruption, ay maari mong ulit-ulitin habang ginagawa mo ang
                    quest sa Shattering Void Spaces. Tandaan na bago ka lumabas
                    sa void space ay pindutin ang susunod na quest ng Shard
                    Quest Giver, upang ma-unlock mo at macomplete mo ang quest
                    at balik ka nanaman sa location ng Shard Eruption that day.
                  </Typography>
                  <SeasonQuestGiver 
                    {...SeasonGuidesData[11]}
                    icon_route={icon_route}
                  />
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-3">
                {activeTab === 'collectibles' &&
                  season_spirits?.map((spirit) => {
                    return (
                      <SpiritCardContainer
                        {...spirit}
                        icon_route={icon_route}
                        key={spirit.spirit_id}
                        season={name}
                        checkedSpirits={checkedSpirits}
                        handleCheckboxChange={handleCheckboxChange}
                      />
                    )
                  })}
                {activeTab === 'winged_lights' &&
                  winged_lights?.map((wingedLight) => {
                    return (
                      <CardContainer
                        label={wingedLight.wl_label}
                        location={wingedLight.wl_location}
                        url={wingedLight.wl_url}
                        key={wingedLight.wl_label}
                      />
                    )
                  })}
                {activeTab === 'map_shrines' &&
                  map_shrines?.map((mapShrine) => {
                    return (
                      <CardContainer
                        label={mapShrine.shrine_label}
                        location={mapShrine.shrine_location}
                        url={mapShrine.shrine_url}
                        key={mapShrine.shrine_label}
                      />
                    )
                  })}
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
        <div className="w-full">
          <DifficultyCriteria />
        </div>
      </div>
      <ScrollToTop smooth className="scrollToTop" />
    </div>
  )
}

export default S14ShatteringPage
