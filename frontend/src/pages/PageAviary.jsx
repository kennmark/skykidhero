import { Tabs, TabsHeader, TabsBody, TabPanel } from '@material-tailwind/react'
import { useEffect, useMemo, useState } from 'react'
import MapTabHeaderContainer from './components/MapTabHeaderContainer'
import { aviaryData } from '../data/aviarydata'
import { maps } from '../data/maps'
import SpiritCardContainer from './components/SpiritCardContainer'
import CardContainer from './components/CardContainer'
import { GIF_AVIARY, AVIARY_ALT } from '../exports/mapGIFs'
import DifficultyCriteria from './components/DifficultyCriteria'
import {
  CheckBadgeIcon,
  LockClosedIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

import useWingedLightProgress from '../hooks/useWingedLightProgress'
import {
  canTrackSpiritWingBuff,
  getWingBuffSlots,
  hasAscendedCandleCost,
} from '../utils/wingedLightProgress'
import MapPageLayout from "./components/MapPageLayout"

function normalizeAviaryCollectible(
  spirit
) {
  return {
    spiritId:
      spirit?.spirit_id,
    name:
      spirit?.spirit_name,
    type:
      spirit?.spirit_type ||
      'seasonal',
    seasonId:
      spirit?.season_id ||
      null,
    season:
      spirit?.season ||
      'Aviary Village Collectible',
    spiritTreeCost:
      spirit?.spirit_tree_cost,
    noOfVisits:
      spirit?.number_of_visits,
    isCurrentSeason:
      spirit?.isCurrentSeason ===
      true,
  }
}

function AviaryWingBuffSummary({
  spirits = [],
}) {
  const {
    isWingBuffSlotChecked,
  } = useWingedLightProgress()

  const summary = useMemo(() => {
    const uniqueSpirits =
      new Map()

    spirits.forEach((spirit) => {
      const normalized =
        normalizeAviaryCollectible(
          spirit
        )

      const key =
        String(
          normalized.name || ''
        )
          .trim()
          .toLowerCase()

      if (
        key &&
        !uniqueSpirits.has(key)
      ) {
        uniqueSpirits.set(
          key,
          normalized
        )
      }
    })

    let available = 0
    let checked = 0
    let awaitingReturn = 0

    uniqueSpirits.forEach(
      (spirit) => {
        if (
          !hasAscendedCandleCost(
            spirit.spiritTreeCost
          )
        ) {
          return
        }

        const slots =
          getWingBuffSlots(
            spirit
          )

        if (
          slots.length === 0
        ) {
          return
        }

        if (
          !canTrackSpiritWingBuff(
            spirit
          )
        ) {
          awaitingReturn +=
            slots.length

          return
        }

        available +=
          slots.length

        checked +=
          slots.filter(
            (slot) =>
              isWingBuffSlotChecked(
                spirit,
                slot
              )
          ).length
      }
    )

    return {
      available,
      checked,
      awaitingReturn,
      percentage:
        available > 0
          ? Math.round(
              (
                checked /
                available
              ) * 100
            )
          : 0,
    }
  }, [
    spirits,
    isWingBuffSlotChecked,
  ])

  if (
    summary.available === 0 &&
    summary.awaitingReturn === 0
  ) {
    return null
  }

  return (
    <section
      aria-label="Aviary collectible Wing Buff progress"
      className="
        mb-5
        rounded-[1.5rem]
        border
        border-[#fe7f2d]/25
        bg-[#102a37]/75
        p-4
        text-white
        shadow-lg
        shadow-black/10

        sm:p-5
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div
          className="
            flex
            min-w-0
            items-start
            gap-3
          "
        >
          <span
            className="
              grid
              h-11
              w-11
              shrink-0
              place-items-center
              rounded-2xl
              bg-[#fe7f2d]
              text-[#233d4d]
            "
          >
            <SparklesIcon
              aria-hidden="true"
              className="h-5 w-5"
            />
          </span>

          <span className="min-w-0">
            <span
              className="
                block
                text-[10px]
                font-black
                uppercase
                tracking-[0.15em]
                text-[#ff9b57]
              "
            >
              Aviary Wing Buffs
            </span>

            <strong
              className="
                mt-1
                block
                text-base
                font-black
                text-white

                sm:text-lg
              "
            >
              Traveling Spirit progress
            </strong>

            <span
              className="
                mt-1
                block
                text-xs
                leading-5
                text-white/45
              "
            >
              Open a collectible’s
              Spirit Info, then use the
              Tree Cost tab to mark its
              Wing Buff.
            </span>
          </span>
        </div>

        <div
          className="
            flex
            shrink-0
            items-center
            gap-2
          "
        >
          <span
            title="Purchased Wing Buffs from trackable Aviary collectibles"
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-[#fe7f2d]/25
              bg-[#fe7f2d]/10
              px-3
              py-2
              text-xs
              font-black
              text-[#ffb47d]
            "
          >
            <CheckBadgeIcon
              aria-hidden="true"
              className="h-4 w-4"
            />

            {summary.checked}
            <span className="text-white/30">
              /
              {summary.available}
            </span>
          </span>

          {summary.awaitingReturn >
            0 && (
            <span
              title="Collectibles that do not have an available Traveling Spirit Wing Buff yet"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-3
                py-2
                text-xs
                font-black
                text-white/45
              "
            >
              <LockClosedIcon
                aria-hidden="true"
                className="h-4 w-4"
              />

              {
                summary.awaitingReturn
              }
            </span>
          )}
        </div>
      </div>

      <div
        className="
          mt-4
          h-2
          overflow-hidden
          rounded-full
          bg-white/10
        "
      >
        <div
          className="
            h-full
            rounded-full
            bg-[#fe7f2d]
            transition-[width]
            duration-500
          "
          style={{
            width:
              `${summary.percentage}%`,
          }}
        />
      </div>
    </section>
  )
}

const PageAviary = ({ mapData, }) => {
  const [activeTab, setActiveTab] = useState('info')
  const fallbackMap =
  maps.find(
    (map) =>
      map.id === 8
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
    fallbackImage={GIF_AVIARY}
    fallbackImageAlt={AVIARY_ALT}
    fallbackTitle={mapTitle}
    fallbackIntro={mapIntro}
  >
    <Tabs
      id="custom-animation"
      value={activeTab}
    >
      <TabsHeader className="flex items-center bg-[#233d4d]">
        {aviaryData.map(
          (
            headerTab,
            index
          ) => (
            <MapTabHeaderContainer
              {...headerTab}
              activeTab={activeTab}
              setActiveTab={
                setActiveTab
              }
              key={index}
            />
          )
        )}
      </TabsHeader>

      {aviaryData.map(
        (
          body,
          index
        ) => (
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
              value={body.value}
            >
              <div className="pb-5 text-gray-100">
                {body.desc}
              </div>

              {body.value ===
                'collectibles' && (
                <AviaryWingBuffSummary
                  spirits={
                    body.spirits
                  }
                />
              )}

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
                  (spirit) => {
                    const isCollectible =
                      body.value ===
                      'collectibles'

                    return (
                      <SpiritCardContainer
                        {...spirit}

                        spirit_type={
                          spirit.spirit_type ||
                          (
                            isCollectible
                              ? 'seasonal'
                              : undefined
                          )
                        }

                        season={
                          spirit.season ||
                          (
                            isCollectible
                              ? 'Aviary Village Collectible'
                              : undefined
                          )
                        }

                        isCurrentSeason={
                          spirit.isCurrentSeason ??
                          false
                        }

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
                  }
                )}

                {body.winged_lights?.map(
                  (wingedLight) => (
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
                  (mapShrine) => (
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

    <div className="w-full">
      <DifficultyCriteria />
    </div>
  </MapPageLayout>
  )
}

export default PageAviary