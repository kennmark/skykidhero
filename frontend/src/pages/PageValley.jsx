import { Tabs, TabsHeader, TabsBody, TabPanel } from '@material-tailwind/react'
import { useState, useEffect } from 'react'
import MapTabHeaderContainer from './components/MapTabHeaderContainer'
import { valley } from '../data/valleyData'
import { maps } from '../data/maps'
import SpiritCardContainer from './components/SpiritCardContainer'
import CardContainer from './components/CardContainer'
import { GIF_VALLEY, VALLEY_ALT } from '../exports/mapGIFs'
import DifficultyCriteria from './components/DifficultyCriteria'
import MapPageLayout from "./components/MapPageLayout"

const PageValley = ({ mapData, }) => {
  const [activeTab, setActiveTab] = useState('regular_spirits')
  const fallbackMap =
  maps.find(
    (map) =>
      map.id === 4
  )
    const mapTitle =
  fallbackMap?.title || ""

  const mapIntro =
  fallbackMap?.map_intro || ""

  const [checkedSpirits, setCheckedSpirits] = useState(() => {
    const saved = localStorage.getItem('checkedSpirits')
    const initialValue = JSON.parse(saved) || {} // Default to empty object if no saved data
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem('checkedSpirits', JSON.stringify(checkedSpirits))
  }, [checkedSpirits])

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target
    setCheckedSpirits((prevState) => ({ ...prevState, [name]: checked }))
  }

  return (
    <MapPageLayout
      mapData={mapData}
      fallbackImage={GIF_VALLEY}
      fallbackImageAlt={VALLEY_ALT}
      fallbackTitle={mapTitle}
      fallbackIntro={mapIntro}
    >
      <section
        className="
          overflow-hidden
          rounded-[1.5rem]
          border
          border-white/10
          bg-[#102a37]/45
          shadow-lg
          shadow-black/10
        "
      >
        <Tabs
          id="custom-animation"
          value={activeTab}
        >
          <TabsHeader
            className="
              flex
              items-center
              rounded-none
              bg-[#233d4d]
            "
          >
            {valley.map(
              (
                headerTab,
                index
              ) => (
                <MapTabHeaderContainer
                  {...headerTab}
                  activeTab={
                    activeTab
                  }
                  setActiveTab={
                    setActiveTab
                  }
                  key={index}
                />
              )
            )}
          </TabsHeader>

          {valley.map(
            (body, index) => (
              <TabsBody
                animate={{
                  initial: {
                    y: 250,
                  },
                  mount: {
                    y: 0,
                  },
                  unmount: {
                    y: 250,
                  },
                }}
                key={index}
              >
                <TabPanel
                  value={
                    body.value
                  }
                >
                  <div
                    className="
                      pb-5
                      text-gray-100
                    "
                  >
                    {body.desc}
                  </div>

                  <div
                    className="
                      grid
                      w-full
                      grid-cols-1
                      justify-items-center
                      gap-x-3
                      gap-y-4

                      md:grid-cols-2
                      xl:grid-cols-3
                    "
                  >
                    {body.spirits?.map(
                      (spirit) => (
                        <SpiritCardContainer
                          {...spirit}
                          key={
                            spirit.spirit_id
                          }
                          checkedSpirits={
                            checkedSpirits
                          }
                          handleCheckboxChange={
                            handleCheckboxChange
                          }
                        />
                      )
                    )}

                    {body.winged_lights?.map(
                      (
                        wingedLight
                      ) => (
                        <CardContainer
                          wingedLight={
                            wingedLight
                          }
                          label={
                            wingedLight.wl_label
                          }
                          location={
                            wingedLight.wl_location
                          }
                          url={
                            wingedLight.wl_url
                          }
                          key={
                            wingedLight.wl_label
                          }
                        />
                      )
                    )}

                    {body.map_shrines?.map(
                      (
                        mapShrine
                      ) => (
                        <CardContainer
                          label={
                            mapShrine.shrine_label
                          }
                          location={
                            mapShrine.shrine_location
                          }
                          url={
                            mapShrine.shrine_url
                          }
                          key={
                            mapShrine.shrine_label
                          }
                        />
                      )
                    )}
                  </div>
                </TabPanel>
              </TabsBody>
            )
          )}
        </Tabs>
      </section>

      <div className="mt-5 w-full">
        <DifficultyCriteria />
      </div>
    </MapPageLayout>
  )
}

export default PageValley
