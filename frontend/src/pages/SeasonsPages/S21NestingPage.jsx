import React, { useState, useEffect } from 'react'
import MapTabHeaderContainer from '../components/MapTabHeaderContainer'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Typography,
  Spinner,
} from '@material-tailwind/react'
import SpiritCardContainer from '../components/SpiritCardContainer'
import CardContainer from '../components/CardContainer'
import PageHeaderContainer from '../components/PageHeaderContainer'
import { SideBarContainer } from '../components/SidebarContainer'
import DifficultyCriteria from '../components/DifficultyCriteria'
import { SeasonTabHeader2 } from '../../data/seasonTabHeader'
import { seasons2024 } from '../../data/seasons'
import ScrollToTop from 'react-scroll-to-top'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SeasonOfNesting from '../../assets/images/home-carousel/Season-of-Nesting.webp'
import SeasonQuestGiver from '../components/SeasonQuestGiver'
import { SeasonGuidesData } from '../../data/seasonGuidesData'

const S21NestingPage = () => {
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
  } = seasons2024[1]

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
          mapIntro={`It's TIME to DECORATE our own HOMESPACE!`}
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
                  <LazyLoadImage
                    src={SeasonOfNesting}
                    alt="Season of Nesting"
                    title="Season of Nesting"
                    placeholderSrc={
                      <Spinner className="h-10 w-10 text-gray-900/50" />
                    }
                    effect="blur"
                    className="rounded-xl"
                  />
                  <Typography>
                    {quick_info} Nagsimula ito noong {time_duration}. May (
                    {spirit_num}) na spirits sa season na ito at{' '}
                    {wl_num ? 'May ' + wl_num : '(0) o walang winged light '}
                    &nbsp; winged light(s). Sa season na ito ay
                    {ms_num
                      ? ' may ' + ms_num
                      : ' (0) o walang map shrine'}{' '}
                    &nbsp;map shrine(s).
                  </Typography>{' '}
                  <SeasonQuestGiver 
                    {...SeasonGuidesData[18]}
                    icon_route={icon_route}
                  />
                  <br />
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

export default S21NestingPage
