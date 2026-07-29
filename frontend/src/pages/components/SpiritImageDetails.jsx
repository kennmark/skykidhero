import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Chip,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Badge,
} from '@material-tailwind/react'
import { RC, HEART, AC, SC_29_CARNIVAL_ICON } from '../../exports/constants'

const SpiritImageDetails = ({
  label,
  handleOpen,
  open,
  spiritImg,
  spiritCollectibles,
  seasonLabel,
  spiritTreeCost,
  noOfVisits,
  isCurrentSeason,
}) => {
  const [activeTab, setActiveTab] = React.useState('tree-cost')

  const data = [
    {
      label: 'Tree Cost',
      value: 'tree-cost',
      desc: (
        <div className="text-center">
          {spiritTreeCost?.map((cost, index) => (
            <span
              className="inline-flex justify-center text-[#fe7f2d] text-base md:text-base"
              key={index}
            >
              {cost.candles}&nbsp;
              {isCurrentSeason === true ? (
                <img
                  src={SC_29_CARNIVAL_ICON}
                  alt="season candles"
                  title="season candles"
                  className="h-5"
                />
              ) : (
                <img
                  src={RC}
                  alt="white candles"
                  title="white candles"
                  className="h-5"
                />
              )}
              &nbsp;|&nbsp;
              {cost.hearts || 0}&nbsp;
              <img src={HEART} alt="hearts" title="hearts" className="h-5" />
              &nbsp;| &nbsp;{cost.ascended_candles}&nbsp;
              <img
                src={AC}
                alt="ascended candles"
                title="ascended candles for wing buff"
                className="h-5"
              />
            </span>
          ))}
        </div>
      ),
    },
    {
      label: seasonLabel ? 'Visit as TS' : 'Constellation',
      value: 'visits',
      desc: (
        <div className="flex flex-wrap justify-center gap-3">
          {noOfVisits < 1 && (
            <Chip value="No Visit Yet" className="text-[10px] text-[#fe7f2d]" />
          )}
          {noOfVisits?.map((visit, index) => (
            <Badge
              content={`${visit.visitNo}`}
              color={`${isNaN(visit.visitNo) ? 'red' : 'green'}`}
              className="text-[9px]"
              key={index}
            >
              <Chip
                value={visit.visit_date}
                className="text-[10px] bg-[#fe7f2d] text-[#233d4d]"
              />
            </Badge>
          ))}
        </div>
      ),
    },
  ]
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      key={label}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      size="xs"
      className="bg-[#233d4d]/90 -top-12 md:top-0 border-[#fe7f2d] border-4 h-fit rounded-3xl"
    >
      <DialogHeader className=" text-[#fe7f2d] flex justify-center flex-col">
        <Typography variant="h4">{label}</Typography>
        <Typography className="text-xs">{seasonLabel}</Typography>
      </DialogHeader>
      <DialogBody className="flex flex-col items-center justify-center md:flex-row md:flex">
        <div className="flex items-center">
          <img
            src={spiritImg}
            alt={label}
            className="w-auto h-56 md:h-96 md:w-auto 2xl:w-auto 2xl:h-auto 2xl:max-h-96"
          />
        </div>
        <div>
          <h2 className="text-[#fe7f2d] text-center">Main Collectibles</h2>

          <div className="flex flex-wrap justify-center md:w-48 gap-x-2">
            {spiritCollectibles?.map((collectible, index) => (
              <div
                className="text-white flex flex-wrap justify-center items-center align-middle"
                key={index}
              >
                <img
                  src={collectible.img}
                  alt={collectible.label}
                  title={collectible.label}
                  className="h-auto md:h-16 w-10 md:w-auto max-h-16 md:max-h-16"
                />
                <div className="flex flex-row">
                  <Typography className="text-sm md:text-base">
                    {collectible.label} -{' '}
                    <span className="text-[#fe7f2d]">
                      {collectible.price === 0 ? 'Free' : collectible.price}
                    </span>
                    &nbsp;
                    {collectible.currency === 'Candles' ? (
                      <span className="inline-flex flex-wrap justify-center">
                        <img
                          src={RC}
                          alt="white candles"
                          title="white candles"
                          className="h-4 md:h-5"
                        />
                      </span>
                    ) : collectible.currency === 'Hearts' ? (
                      <span className="inline-flex flex-wrap justify-center">
                        <img
                          src={HEART}
                          alt="hearts"
                          title="hearts"
                          className="h-4 md:h-5"
                        />
                      </span>
                    ) : collectible.currency === 'Free' ? (
                      <span className="inline-flex flex-wrap justify-center">
                        &nbsp;
                      </span>
                    ) : (
                      <span className="inline-flex flex-wrap justify-center">
                        <img
                          src={SC_29_CARNIVAL_ICON}
                          alt="Season Candles"
                          title="Season Candles"
                          className="h-4 md:h-5"
                        />
                      </span>
                    )}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          {isCurrentSeason === true ? (
            <div className="text-gray-300">
              <p className="text-[11px] text-center pt-2">
                Prices with value can be obtain using season candles.
              </p>
              <p className="text-[11px] text-center">
                items don't have prices, needs season pass.
              </p>
            </div>
          ) : (
            <div className="text-gray-300">
              <p className="text-[11px] text-center pt-2">
                Prices may vary upon arrival as TS.
              </p>
              <p className="text-[11px] text-center">
                Emote/Action total price level 1 to max
              </p>
            </div>
          )}
        </div>
      </DialogBody>
      <DialogFooter className="flex justify-center">
        <Tabs id="custom-animation" value={activeTab} className="w-full">
          <TabsHeader className=" bg-[#233d4d] flex items-center border-[#fe7f2d] border-y-2">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="theme-navbar">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </DialogFooter>
    </Dialog>
  )
}

export default SpiritImageDetails
