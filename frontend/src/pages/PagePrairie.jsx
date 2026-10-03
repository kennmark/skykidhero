import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
} from '@material-tailwind/react'
import { useState, useEffect } from 'react'
import MapTabHeaderContainer from './components/MapTabHeaderContainer'
import { prairie } from '../data/prairieData'
import { maps } from '../data/maps'
import SpiritCardContainer from './components/SpiritCardContainer'
import CardContainer from './components/CardContainer'
import { GIF_PRAIRIE, PRAIRIE_ALT } from '../exports/mapGIFs'
import DifficultyCriteria from './components/DifficultyCriteria'
import MapPageLayout from "./components/MapPageLayout";
import useRegularSpirits from "../hooks/useRegularSpirits";
import useMapWingedLights from "../hooks/useMapWingedLights";

const PagePrairie = ({ mapData, }) => {
  const fallbackMap =
  maps.find(
    (map) =>
      map.id === 2
  )

  const [activeTab, setActiveTab] = useState('regular_spirits')
  const mapTitle =
  fallbackMap?.title || ""

  const mapIntro =
  fallbackMap?.map_intro || ""

  const [checkedSpirits, setCheckedSpirits] = useState(() => {
    const saved = localStorage.getItem('checkedSpirits')
    const initialValue = JSON.parse(saved) || {} // Default to empty object if no saved data
    return initialValue
  })

  const {
    wingedLights,
    count: wingedLightCount,
    loading: wingedLightsLoading,
    error: wingedLightsError,
    retry: retryWingedLights,
  } = useMapWingedLights(2);

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
      prairiePageData,
  } = useRegularSpirits({
    mapId: 2,
    mapData,
    pageData:
      prairie,
  });

  return (
    <MapPageLayout
    mapData={mapData}
    fallbackImage={GIF_PRAIRIE}
    fallbackImageAlt={PRAIRIE_ALT}
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
          {prairiePageData.map(
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

        {prairiePageData.map(
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

                    {activeTab === 'winged_lights' && (
                      <>
                        {wingedLightsLoading ? (
                          <div className="w-full py-10 text-center text-sm text-gray-300">
                            Loading Winged Lights...
                          </div>
                        ) : wingedLightsError ? (
                          <div className="w-full py-8 text-center">
                            <p className="text-sm text-red-300">
                              {wingedLightsError}
                            </p>

                            <button
                              type="button"
                              onClick={retryWingedLights}
                              className="mt-4 rounded-lg bg-[#fe7f2d] px-4 py-2 text-sm font-semibold text-[#233d4d]"
                            >
                              Try Again
                            </button>
                          </div>
                        ) : wingedLights.length > 0 ? (
                          wingedLights.map(
                            (wingedLight) => (
                              <CardContainer
                                key={
                                  wingedLight.code ||
                                  wingedLight.wl_id
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
                                wingedLight={
                                  wingedLight
                                }
                                realmName="Daylight Prairie"
                              />
                            )
                          )
                        ) : (
                          <div className="w-full py-10 text-center text-sm text-gray-300">
                            No Winged Lights are currently available.
                          </div>
                        )}
                      </>
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

export default PagePrairie
