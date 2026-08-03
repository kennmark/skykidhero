import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Chip,
  Typography,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Badge,
  Checkbox,
} from '@material-tailwind/react'
import { createPortal } from 'react-dom'

import {
  CheckBadgeIcon,
  LockClosedIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

import {
  RC,
  HEART,
  AC,
  SC_29_CARNIVAL_ICON,
} from '../../exports/constants'
import useWingedLightProgress from '../../hooks/useWingedLightProgress'
import {
  canTrackSpiritWingBuff,
  getWingBuffSlots,
} from '../../utils/wingedLightProgress'

function WingBuffTracker({
  spirit,
}) {
  const {
    regularWingBuffs,
    regularWingBuffMaximum,
    seasonalWingBuffs,
    seasonalWingBuffMaximum,
    isWingBuffSlotChecked,
    setWingBuffSlotChecked,
  } = useWingedLightProgress()

  const slots =
    getWingBuffSlots(spirit)

  const canTrack =
    canTrackSpiritWingBuff(
      spirit
    )

  const isRegular =
    String(
      spirit.type ?? ''
    ).toLowerCase() ===
    'regular'

  const currentTotal =
    isRegular
      ? regularWingBuffs
      : seasonalWingBuffs

  const maximum =
    isRegular
      ? regularWingBuffMaximum
      : seasonalWingBuffMaximum

  if (slots.length === 0) {
    return null
  }

  if (!canTrack) {
    return (
      <div
        className="
          mt-4
          rounded-2xl
          border
          border-white/10
          bg-white/[0.035]
          p-3
          text-left
        "
      >
        <div className="flex items-start gap-2.5">
          <span
            className="
              grid
              h-9
              w-9
              shrink-0
              place-items-center
              rounded-xl
              bg-white/[0.06]
              text-white/35
            "
          >
            <LockClosedIcon
              aria-hidden="true"
              className="h-4 w-4"
            />
          </span>

          <span className="min-w-0">
            <strong
              className="
                block
                text-xs
                font-black
                text-white/60
              "
            >
              Wing Buff not available yet
            </strong>

            <span
              className="
                mt-1
                block
                text-[10px]
                leading-4
                text-white/35
              "
            >
              This Seasonal Spirit becomes
              trackable after returning as a
              Traveling Spirit.
            </span>
          </span>
        </div>
      </div>
    )
  }

  const checkedCount =
    slots.filter(
      (slot) =>
        isWingBuffSlotChecked(
          spirit,
          slot
        )
    ).length

  return (
    <div
      className="
        mt-4
        rounded-2xl
        border
        border-[#fe7f2d]/25
        bg-[#fe7f2d]/10
        p-3
        text-left
      "
    >
      <div
        className="
          flex
          min-w-0
          flex-col
          gap-2.5

          sm:flex-row
          sm:items-start
          sm:justify-between
        "
      >
        <div
          className="
            flex
            min-w-0
            items-start
            gap-2.5
          "
        >
          <span
            className="
              grid
              h-9
              w-9
              shrink-0
              place-items-center
              rounded-xl
              bg-[#fe7f2d]
              text-[#233d4d]
            "
          >
            <SparklesIcon
              aria-hidden="true"
              className="h-4 w-4"
            />
          </span>

          <span>
            <strong
              className="
                block
                text-xs
                font-black
                text-white
              "
            >
              Wing Buff Tracker
            </strong>

            <span
              className="
                mt-1
                block
                text-[10px]
                leading-4
                text-white/45
              "
            >
              Check each permanent Wing Buff
              purchased from this Spirit.
            </span>
          </span>
        </div>

        <span
          className="
            w-fit
            shrink-0
            self-start
            rounded-full
            border
            border-[#fe7f2d]/25
            bg-[#071820]/30
            px-2.5
            py-1
            text-[9px]
            font-black
            text-[#ffb47d]
          "
        >
          {checkedCount}/{slots.length}
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {slots.map((slot) => {
          const checked =
            isWingBuffSlotChecked(
              spirit,
              slot
            )

          const checkboxId =
            `wing-buff-${spirit.type}-${String(
              spirit.name
            )
              .toLowerCase()
              .replace(
                /[^a-z0-9]+/g,
                '-'
              )}-${slot.id}`

          return (
            <label
              key={slot.id}
              htmlFor={checkboxId}
              className={`
                flex
                cursor-pointer
                items-center
                gap-2.5
                rounded-xl
                border
                px-2.5
                py-2
                transition

                ${
                  checked
                    ? 'border-[#fe7f2d]/45 bg-[#fe7f2d]/12'
                    : 'border-white/10 bg-[#071820]/25 hover:border-[#fe7f2d]/25'
                }
              `}
            >
              <Checkbox
                id={checkboxId}
                checked={checked}
                onChange={(event) =>
                  setWingBuffSlotChecked(
                    spirit,
                    slot,
                    event.target.checked
                  )
                }
                ripple
                className="
                  border-white/35
                  checked:border-[#fe7f2d]
                  checked:bg-[#fe7f2d]
                "
                containerProps={{
                  className: 'p-1',
                }}
              />

              <span className="min-w-0 flex-1">
                <strong
                  className="
                    block
                    text-xs
                    font-black
                    text-white
                  "
                >
                  {slot.label}
                </strong>

                <span
                  className="
                    mt-0.5
                    block
                    text-[9px]
                    text-white/35
                  "
                >
                  {checked
                    ? 'Purchased and tracked'
                    : 'Not yet purchased'}
                </span>
              </span>

              {checked && (
                <CheckBadgeIcon
                  aria-hidden="true"
                  className="
                    h-5
                    w-5
                    shrink-0
                    text-[#fe7f2d]
                  "
                />
              )}
            </label>
          )
        })}
      </div>

      <p
        className="
          mt-2
          text-center
          text-[9px]
          text-white/30
        "
      >
        Overall {isRegular
          ? 'Regular'
          : 'Seasonal / Traveling'}{' '}
        progress: {currentTotal}/{maximum}
      </p>
    </div>
  )
}

const SpiritImageDetails = ({
  label,
  handleOpen,
  open,
  spiritId,
  spiritType,
  seasonId,
  spiritImg,
  spiritCollectibles,
  seasonLabel,
  spiritTreeCost,
  noOfVisits,
  isCurrentSeason,
}) => {
  const [activeTab, setActiveTab] =
    React.useState('tree-cost')

  React.useEffect(() => {
    if (!open) {
      return undefined
    }

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow =
      'hidden'

    const handleEscape = (
      event
    ) => {
      if (event.key === 'Escape') {
        handleOpen()
      }
    }

    document.addEventListener(
      'keydown',
      handleEscape
    )

    return () => {
      document.body.style.overflow =
        previousOverflow

      document.removeEventListener(
        'keydown',
        handleEscape
      )
    }
  }, [open, handleOpen])

  /**
   * Older Season-page records often omit `spirit_type`.
   * The modal already receives the Season label, so classify
   * those entries here instead of relying only on the card.
   */
  const explicitSpiritType =
    String(spiritType ?? '')
      .trim()
      .toLowerCase()

  const normalizedSeasonId =
    String(seasonId ?? '')
      .trim()
      .toLowerCase()

  const resolvedSpiritType =
    explicitSpiritType === 'regular' ||
    explicitSpiritType === 'seasonal'
      ? explicitSpiritType
      : normalizedSeasonId ===
          'season-0'
        ? 'regular'
        : seasonLabel ||
            (
              normalizedSeasonId &&
              normalizedSeasonId !==
                'season-0'
            )
          ? 'seasonal'
          : null

  const wingBuffSpirit = {
    spiritId,
    name: label,
    type: resolvedSpiritType,
    seasonId,
    season: seasonLabel,
    spiritTreeCost,
    noOfVisits,
    isCurrentSeason,
  }

  const data = [
    {
      label: 'Tree Cost',
      value: 'tree-cost',
      desc: (
        <div className="text-center">
          {spiritTreeCost?.map(
            (cost, index) => (
              <span
                className="inline-flex flex-wrap justify-center text-base text-[#fe7f2d] md:text-base"
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
                <img
                  src={HEART}
                  alt="hearts"
                  title="hearts"
                  className="h-5"
                />
                &nbsp;|&nbsp;
                {cost.ascended_candles}&nbsp;
                <img
                  src={AC}
                  alt="ascended candles"
                  title="ascended candles for wing buff"
                  className="h-5"
                />
              </span>
            )
          )}

          {open && (
            <WingBuffTracker
              spirit={wingBuffSpirit}
            />
          )}
        </div>
      ),
    },
    {
      label: seasonLabel
        ? 'Visit as TS'
        : 'Constellation',
      value: 'visits',
      desc: (
        <div className="flex flex-wrap justify-center gap-3">
          {(!Array.isArray(noOfVisits) ||
            noOfVisits.length < 1) && (
            <Chip
              value="No Visit Yet"
              className="text-[10px] text-[#fe7f2d]"
            />
          )}

          {noOfVisits?.map(
            (visit, index) => (
              <Badge
                content={`${visit.visitNo}`}
                color={`${
                  isNaN(visit.visitNo)
                    ? 'red'
                    : 'green'
                }`}
                className="text-[9px]"
                key={index}
              >
                <Chip
                  value={visit.visit_date}
                  className="bg-[#fe7f2d] text-[10px] text-[#233d4d]"
                />
              </Badge>
            )
          )}
        </div>
      ),
    },
  ]

  if (
    !open ||
    typeof document ===
      'undefined'
  ) {
    return null
  }

  return createPortal(
    <div
      role="presentation"
      onPointerDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          handleOpen()
        }
      }}
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black/70
        p-6
        backdrop-blur-[2px]

        sm:p-8
      "
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={label}
        onPointerDown={(event) =>
          event.stopPropagation()
        }
        className="
          relative
          flex
          max-h-[calc(100dvh-3rem)]
          w-full
          max-w-[42rem]
          min-w-0
          flex-col
          overflow-x-hidden
          overflow-y-auto
          overscroll-contain
          rounded-3xl
          border-2
          border-[#fe7f2d]
          bg-[#233d4d]/95
          shadow-2xl
          [scrollbar-gutter:stable]

          sm:max-h-[calc(100dvh-4rem)]
          sm:border-4
        "
      >
      <DialogHeader
        className="
          sticky
          top-0
          z-20
          flex
          flex-col
          justify-center
          border-b
          border-white/10
          bg-[#233d4d]/95
          px-4
          pb-2
          pt-3
          text-center
          text-[#fe7f2d]
          backdrop-blur-md

          sm:px-6
          sm:pb-3
          sm:pt-4
        "
      >
        <Typography
          variant="h4"
          className="
            max-w-full
            break-words
            px-7
            text-lg
            leading-tight

            sm:text-2xl
          "
        >
          {label}
        </Typography>

        <button
          type="button"
          onClick={handleOpen}
          aria-label="Close Spirit details"
          className="
            absolute
            right-2.5
            top-2.5
            grid
            h-8
            w-8
            place-items-center
            rounded-full
            border
            border-white/10
            bg-black/20
            text-lg
            leading-none
            text-white/60
            transition

            hover:border-[#fe7f2d]/50
            hover:bg-[#fe7f2d]
            hover:text-[#233d4d]

            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#fe7f2d]
          "
        >
          ×
        </button>

        <Typography
          className="
            mt-1
            max-w-full
            break-words
            text-[10px]
            leading-4

            sm:text-xs
          "
        >
          {seasonLabel}
        </Typography>
      </DialogHeader>

      <DialogBody
        className="
          flex
          min-w-0
          flex-col
          items-center
          justify-center
          gap-3
          px-4
          py-3

          sm:px-5

          md:flex-row
          md:items-center
          md:gap-5
          md:px-6
          md:py-4
        "
      >
        <div
          className="
            flex
            w-full
            shrink-0
            items-center
            justify-center

            md:w-auto
          "
        >
          <img
            src={spiritImg}
            alt={label}
            className="
              h-auto
              max-h-[32dvh]
              w-auto
              max-w-[82%]
              object-contain

              sm:max-h-56
              sm:max-w-[20rem]

              md:max-h-80
              md:max-w-[19rem]

              2xl:max-h-96
            "
          />
        </div>

        <div
          className="
            w-full
            min-w-0

            md:max-w-xs
          "
        >
          <h2
            className="
              text-center
              text-sm
              font-bold
              text-[#fe7f2d]

              sm:text-base
            "
          >
            Main Collectibles
          </h2>

          <div
            className="
              flex
              w-full
              flex-wrap
              justify-center
              gap-x-2
              gap-y-1

              md:w-48
            "
          >
            {spiritCollectibles?.map(
              (collectible, index) => (
                <div
                  className="flex flex-wrap items-center justify-center text-white"
                  key={index}
                >
                  <img
                    src={collectible.img}
                    alt={collectible.label}
                    title={collectible.label}
                    className="
                      h-auto
                      max-h-12
                      w-9
                      object-contain

                      sm:max-h-14
                      sm:w-10

                      md:h-16
                      md:max-h-16
                      md:w-auto
                    "
                  />

                  <div className="flex flex-row">
                    <Typography className="text-sm md:text-base">
                      {collectible.label} -{' '}
                      <span className="text-[#fe7f2d]">
                        {collectible.price === 0
                          ? 'Free'
                          : collectible.price}
                      </span>
                      &nbsp;
                      {collectible.currency ===
                      'Candles' ? (
                        <span className="inline-flex flex-wrap justify-center">
                          <img
                            src={RC}
                            alt="white candles"
                            title="white candles"
                            className="h-4 md:h-5"
                          />
                        </span>
                      ) : collectible.currency ===
                        'Hearts' ? (
                        <span className="inline-flex flex-wrap justify-center">
                          <img
                            src={HEART}
                            alt="hearts"
                            title="hearts"
                            className="h-4 md:h-5"
                          />
                        </span>
                      ) : collectible.currency ===
                        'Free' ? (
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
              )
            )}
          </div>

          {isCurrentSeason === true ? (
            <div className="text-gray-300">
              <p className="pt-2 text-center text-[11px]">
                Prices with value can be obtained using season candles.
              </p>
              <p className="text-center text-[11px]">
                Items without prices require the Season Pass.
              </p>
            </div>
          ) : (
            <div className="text-gray-300">
              <p className="pt-2 text-center text-[11px]">
                Prices may vary upon arrival as a Traveling Spirit.
              </p>
              <p className="text-center text-[11px]">
                Emote/action price includes level 1 through maximum.
              </p>
            </div>
          )}
        </div>
      </DialogBody>

      <DialogFooter
        className="
          flex
          justify-center
          px-3
          pb-4
          pt-2

          sm:px-5
        "
      >
        <Tabs
          id="custom-animation"
          value={activeTab}
          className="w-full"
        >
          <TabsHeader
            className="
              flex
              items-center
              border-y-2
              border-[#fe7f2d]
              bg-[#233d4d]
              p-1
            "
          >
            {data.map(
              ({
                label: tabLabel,
                value,
              }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() =>
                    setActiveTab(value)
                  }
                  className="
                    theme-navbar
                    min-w-0
                    px-2
                    py-2
                    text-xs

                    sm:text-sm
                  "
                >
                  {tabLabel}
                </Tab>
              )
            )}
          </TabsHeader>

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
          >
            {data.map(
              ({ value, desc }) => (
                <TabPanel
                  key={value}
                  value={value}
                  className="
                    px-1
                    pb-1
                    pt-3

                    sm:px-2
                  "
                >
                  {desc}
                </TabPanel>
              )
            )}
          </TabsBody>
        </Tabs>
      </DialogFooter>
      </section>
    </div>,
    document.body
  )
}

export default SpiritImageDetails