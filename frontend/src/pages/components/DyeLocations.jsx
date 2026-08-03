import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  BeakerIcon,
  BoltIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  CloudIcon,
  FireIcon,
  SparklesIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline'

import DyesMaxPerDay, {
  DYE_JARS,
} from './DyesMaxPerDay'

const REALM_DYE_DATA = [
  {
    id: 'prairie',
    name: 'Daylight Prairie',
    Icon: CloudIcon,
    values: [
      { ...DYE_JARS.red, value: 53 },
      { ...DYE_JARS.yellow, value: 30 },
      { ...DYE_JARS.white, value: 7 },
    ],
  },
  {
    id: 'forest',
    name: 'Hidden Forest',
    Icon: BoltIcon,
    values: [
      { ...DYE_JARS.green, value: 36.5 },
      { ...DYE_JARS.cyan, value: 19 },
      { ...DYE_JARS.red, value: 9 },
      { ...DYE_JARS.blue, value: 9 },
      { ...DYE_JARS.white, value: 5 },
      { ...DYE_JARS.yellow, value: 4 },
      { ...DYE_JARS.magenta, value: 4 },
    ],
  },
  {
    id: 'valley',
    name: 'Valley of Triumph',
    Icon: TrophyIcon,
    values: [
      { ...DYE_JARS.red, value: 27 },
      { ...DYE_JARS.green, value: 27 },
      { ...DYE_JARS.yellow, value: 13 },
      { ...DYE_JARS.cyan, value: 13 },
      { ...DYE_JARS.white, value: 10 },
    ],
  },
  {
    id: 'wasteland',
    name: 'Golden Wasteland',
    Icon: FireIcon,
    values: [
      { ...DYE_JARS.blue, value: 55 },
      { ...DYE_JARS.magenta, value: 30 },
      { ...DYE_JARS.black, value: 5 },
    ],
  },
  {
    id: 'vault',
    name: 'Vault of Knowledge',
    Icon: BuildingLibraryIcon,
    values: [
      { ...DYE_JARS.blue, value: 55 },
      { ...DYE_JARS.magenta, value: 30 },
      { ...DYE_JARS.black, value: 5 },
    ],
  },
  {
    id: 'eden',
    name: 'Eye of Eden',
    Icon: FireIcon,
    values: [
      { ...DYE_JARS.red, value: 52.5 },
      { ...DYE_JARS.black, value: 17.5 },
    ],
  },
]

function formatPercentage(value) {
  return Number.isInteger(value)
    ? `${value}%`
    : `${value.toFixed(1)}%`
}

function RealmSnapshotCard({ realm }) {
  const Icon = realm.Icon
  const sortedValues = [...realm.values].sort(
    (first, second) => second.value - first.value
  )

  const dominant = sortedValues[0]
  const secondary = sortedValues.slice(1, 4)
  const representedTotal = sortedValues.reduce(
    (total, dye) => total + Number(dye.value),
    0
  )

  return (
    <article
      className="
        flex
        h-full
        min-w-0
        flex-col
        rounded-2xl
        border
        border-white/10
        bg-[#102a37]/82
        p-3.5
        text-white
        shadow-lg
        shadow-black/10

        sm:p-4
      "
    >
      <div
        className="
          flex
          min-w-0
          items-start
          justify-between
          gap-3
        "
      >
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="
              grid
              h-10
              w-10
              shrink-0
              place-items-center
              rounded-2xl
              bg-[#fe7f2d]/12
              text-[#fe7f2d]
            "
          >
            <Icon
              aria-hidden="true"
              className="h-5 w-5"
            />
          </span>

          <div className="min-w-0">
            <h4
              className="
                truncate
                text-sm
                font-black
                text-white

                sm:text-base
              "
              title={realm.name}
            >
              {realm.name}
            </h4>

            <p
              className="
                mt-0.5
                text-[9px]
                font-black
                uppercase
                tracking-[0.14em]
                text-white/30
              "
            >
              Dominant dye
            </p>
          </div>
        </div>

        <span
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-2.5
            py-1
            text-[9px]
            font-black
            uppercase
            tracking-wider
            text-white/40
          "
        >
          {formatPercentage(representedTotal)} listed
        </span>
      </div>

      <div
        className="
          mt-4
          rounded-2xl
          border
          border-[#fe7f2d]/20
          bg-[#fe7f2d]/10
          p-3
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              grid
              h-12
              w-12
              shrink-0
              place-items-center
              rounded-2xl
              bg-[#071820]/55
            "
          >
            <LazyLoadImage
              src={dominant.image}
              alt={`${dominant.label} dye jar`}
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </span>

          <div className="min-w-0">
            <p
              className="
                text-sm
                font-black
                text-white
              "
            >
              {dominant.label}
            </p>

            <strong
              className="
                mt-1
                block
                text-2xl
                font-black
                leading-none
                text-[#ff9b57]
              "
            >
              {formatPercentage(dominant.value)}
            </strong>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        {secondary.map((dye) => (
          <div
            key={dye.id}
            className="
              flex
              items-center
              justify-between
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/[0.035]
              px-3
              py-2
            "
          >
            <div
              className="
                flex
                min-w-0
                items-center
                gap-2
              "
            >
              <LazyLoadImage
                src={dye.image}
                alt={`${dye.label} dye jar`}
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />

              <span
                className="
                  truncate
                  text-xs
                  font-black
                  text-white/80
                "
              >
                {dye.label}
              </span>
            </div>

            <strong
              className="
                shrink-0
                text-xs
                font-black
                text-[#ff9b57]
              "
            >
              {formatPercentage(dye.value)}
            </strong>
          </div>
        ))}
      </div>

      <div
        className="
          mt-4
          flex
          items-center
          justify-between
          border-t
          border-white/10
          pt-3
        "
      >
        <span
          className="
            text-[9px]
            font-black
            uppercase
            tracking-wider
            text-white/30
          "
        >
          Colors shown
        </span>

        <strong
          className="
            text-sm
            font-black
            text-white/60
          "
        >
          {realm.values.length}
        </strong>
      </div>
    </article>
  )
}

const DyeLocations = () => {
  return (
    <section
      id="dye-locations"
      aria-labelledby="dye-section-title"
      className="
        w-full
        scroll-mt-24
        px-2

        sm:px-4
      "
    >
      <div
        className="
          flex
          w-full
          items-center
          py-5

          sm:py-6

          lg:min-h-[100svh]
          lg:pb-5
          lg:pt-[5.5rem]
        "
      >
        <div
          className="
            relative
            isolate
            w-full
            overflow-hidden
            rounded-[1.5rem]
            border
            border-[#fe7f2d]/20
            bg-[#071820]/88
            p-4
            text-white
            shadow-[0_24px_70px_rgba(0,0,0,0.3)]

            sm:rounded-[2rem]
            sm:p-5

            lg:p-5
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              bg-[radial-gradient(circle_at_10%_8%,_rgba(254,127,45,0.16),_transparent_26%),radial-gradient(circle_at_90%_90%,_rgba(42,126,164,0.15),_transparent_30%)]
            "
          />

          <div
            className="
              grid
              gap-5

              xl:grid-cols-[minmax(19rem,0.42fr)_minmax(0,0.58fr)]
              xl:items-start
            "
          >
            <div className="min-w-0">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#fe7f2d]/25
                  bg-[#fe7f2d]/10
                  px-3
                  py-1.5
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#ffc394]

                  sm:text-xs
                "
              >
                <BeakerIcon
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                Dye collection guide
              </div>

              <h2
                id="dye-section-title"
                className="
                  mt-3
                  max-w-2xl
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-white

                  sm:text-4xl

                  lg:text-[2.6rem]

                  xl:text-[2.9rem]
                "
              >
                Dye limits and realm snapshots in one view.
              </h2>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/60

                  sm:text-base
                  sm:leading-7
                "
              >
                A simplified overview of daily jar limits and the strongest dye
                colors in each realm.
              </p>

              <div
                className="
                  mt-4
                  grid
                  grid-cols-3
                  gap-2.5
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#102a37]/82
                    p-3
                  "
                >
                  <ChartBarIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fe7f2d]"
                  />

                  <strong
                    className="
                      mt-3
                      block
                      text-2xl
                      font-black
                      text-white
                    "
                  >
                    6
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    Realm charts
                  </span>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#102a37]/82
                    p-3
                  "
                >
                  <SparklesIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fe7f2d]"
                  />

                  <strong
                    className="
                      mt-3
                      block
                      text-2xl
                      font-black
                      text-white
                    "
                  >
                    8
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    Dye colors
                  </span>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-[#fe7f2d]/25
                    bg-[#fe7f2d]/10
                    p-3
                  "
                >
                  <BeakerIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fe7f2d]"
                  />

                  <strong
                    className="
                      mt-3
                      block
                      text-2xl
                      font-black
                      text-[#ff9b57]
                    "
                  >
                    23
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-[9px]
                      font-black
                      uppercase
                      tracking-wider
                      text-white/35
                    "
                  >
                    Total max jars
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <DyesMaxPerDay />
              </div>
            </div>

            <section
              aria-labelledby="realm-dye-distribution-title"
              className="
                min-w-0
                rounded-[1.5rem]
                border
                border-white/10
                bg-[#102a37]/55
                p-4

                sm:p-5
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-2

                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.18em]
                      text-[#ff9b57]
                    "
                  >
                    Realm comparison
                  </p>

                  <h3
                    id="realm-dye-distribution-title"
                    className="
                      mt-1
                      text-xl
                      font-black
                      tracking-tight
                      text-white

                      sm:text-2xl
                    "
                  >
                    Realm dye snapshots
                  </h3>
                </div>

                <p
                  className="
                    max-w-sm
                    text-[10px]
                    leading-5
                    text-white/35

                    sm:text-right
                    sm:text-xs
                  "
                >
                  Each card highlights the dominant dye and the next key colors
                  for quick comparison.
                </p>
              </div>

              <div
                className="
                  mt-4
                  grid
                  gap-3

                  md:grid-cols-2

                  2xl:grid-cols-3
                "
              >
                {REALM_DYE_DATA.map((realm) => (
                  <RealmSnapshotCard
                    key={realm.id}
                    realm={realm}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DyeLocations