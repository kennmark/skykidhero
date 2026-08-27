import { Tabs, TabsHeader, TabsBody, TabPanel } from '@material-tailwind/react'
import { useState, useEffect } from 'react'
import MapTabHeaderContainer from './components/MapTabHeaderContainer'
import { wasteland } from '../data/wastelandData'
import { maps } from '../data/maps'
import SpiritCardContainer from './components/SpiritCardContainer'
import CardContainer from './components/CardContainer'
import { GIF_WASTELAND, WASTELAND_ALT } from '../exports/mapGIFs'
import DifficultyCriteria from './components/DifficultyCriteria'
import MapPageLayout from "./components/MapPageLayout"
import useRegularSpirits from "../hooks/useRegularSpirits";


const PageWasteland = ({ mapData, }) => {
  const [activeTab, setActiveTab] = useState('regular_spirits')
  const fallbackMap =
  maps.find(
    (map) =>
      map.id === 5
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

  const {
    loading:
      regularSpiritsLoading,

    error:
      regularSpiritsError,

    pageData:
      wastelandPageData,
  } = useRegularSpirits({
    mapId: 5,
    mapData,
    pageData:
      wasteland,
  });

  return (
    <MapPageLayout
      mapData={mapData}
      fallbackImage={GIF_WASTELAND}
      fallbackImageAlt={WASTELAND_ALT}
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
            {wastelandPageData.map(
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

          {wastelandPageData.map(
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

                  {body.value ===
                    "regular_spirits" &&
                    regularSpiritsLoading && (
                      <div className="mb-4 text-center text-sm text-gray-300">
                        Loading Regular Spirits...
                      </div>
                    )}

                  {body.value ===
                    "regular_spirits" &&
                    !regularSpiritsLoading &&
                    regularSpiritsError && (
                      <div className="mb-4 rounded-xl border border-amber-400/30 bg-amber-900/20 px-4 py-3 text-center text-sm text-amber-100">
                        {
                          regularSpiritsError
                        }
                      </div>
                    )}
                  {!(
                    body.value ===
                      "regular_spirits" &&
                    regularSpiritsLoading
                  ) && (
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
                  )}
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

export default PageWasteland
