import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  ChartBarIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline'

import RED_JAR from '../../assets/images/Dyes/Red-Jar.webp'
import YELLOW_JAR from '../../assets/images/Dyes/Yellow-Jar.webp'
import WHITE_JAR from '../../assets/images/Dyes/White-Jar.webp'
import GREEN_JAR from '../../assets/images/Dyes/Green-Jar.webp'
import CYAN_JAR from '../../assets/images/Dyes/Cyan-Jar.webp'
import BLUE_JAR from '../../assets/images/Dyes/Blue-Jar.webp'
import MAGENTA_JAR from '../../assets/images/Dyes/Magenta-Jar.webp'
import BLACK_JAR from '../../assets/images/Dyes/Black-Jar.webp'

export const DYE_JARS = {
  red: {
    id: 'red',
    label: 'Red',
    image: RED_JAR,
  },
  yellow: {
    id: 'yellow',
    label: 'Yellow',
    image: YELLOW_JAR,
  },
  white: {
    id: 'white',
    label: 'White',
    image: WHITE_JAR,
  },
  green: {
    id: 'green',
    label: 'Green',
    image: GREEN_JAR,
  },
  cyan: {
    id: 'cyan',
    label: 'Cyan',
    image: CYAN_JAR,
  },
  blue: {
    id: 'blue',
    label: 'Blue',
    image: BLUE_JAR,
  },
  magenta: {
    id: 'magenta',
    label: 'Magenta',
    image: MAGENTA_JAR,
  },
  black: {
    id: 'black',
    label: 'Black',
    image: BLACK_JAR,
  },
}

const DAILY_GROUPS = [
  {
    id: 'four-jars',
    cap: 4,
    caption: 'Highest daily cap',
    colors: [
      DYE_JARS.red,
      DYE_JARS.green,
      DYE_JARS.blue,
    ],
  },
  {
    id: 'three-jars',
    cap: 3,
    caption: 'Mid daily cap',
    colors: [
      DYE_JARS.yellow,
      DYE_JARS.cyan,
      DYE_JARS.magenta,
    ],
  },
  {
    id: 'one-jar',
    cap: 1,
    caption: 'Limited daily cap',
    colors: [
      DYE_JARS.white,
      DYE_JARS.black,
    ],
  },
]

const TOTAL_DAILY_JARS =
  DAILY_GROUPS.reduce(
    (total, group) =>
      total +
      group.cap * group.colors.length,
    0
  )

function DailyCapGroup({ group }) {
  return (
    <article
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-3

        sm:p-4
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-3
        "
      >
        <div>
          <strong
            className="
              block
              text-2xl
              font-black
              leading-none
              text-[#ff9b57]

              sm:text-3xl
            "
          >
            {group.cap}
          </strong>

          <p
            className="
              mt-1
              text-[10px]
              font-black
              uppercase
              tracking-[0.16em]
              text-white/35
            "
          >
            {group.cap === 1
              ? 'Jar per day'
              : 'Jars per day'}
          </p>
        </div>

        <span
          className="
            rounded-full
            border
            border-[#fe7f2d]/20
            bg-[#fe7f2d]/10
            px-2.5
            py-1
            text-[9px]
            font-black
            uppercase
            tracking-wider
            text-[#ff9b57]
          "
        >
          {group.colors.length}{' '}
          {group.colors.length === 1
            ? 'color'
            : 'colors'}
        </span>
      </div>

      <p
        className="
          mt-3
          text-xs
          text-white/45
        "
      >
        {group.caption}
      </p>

      <div
        className="
          mt-3
          flex
          flex-wrap
          gap-2
        "
      >
        {group.colors.map((dye) => (
          <div
            key={dye.id}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-[#071820]/55
              px-2.5
              py-1.5
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
                text-[11px]
                font-black
                text-white/80
              "
            >
              {dye.label}
            </span>
          </div>
        ))}
      </div>
    </article>
  )
}

const DyesMaxPerDay = () => {
  return (
    <section
      aria-labelledby="dye-daily-limit-title"
      className="
        rounded-[1.5rem]
        border
        border-white/10
        bg-[#102a37]/82
        p-4
        text-white
        shadow-xl
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
          sm:items-start
          sm:justify-between
        "
      >
        <div className="flex items-start gap-3">
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
            <ChartBarIcon
              aria-hidden="true"
              className="h-6 w-6"
            />
          </span>

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
              Daily dye limits
            </p>

            <h3
              id="dye-daily-limit-title"
              className="
                mt-1
                text-xl
                font-black
                tracking-tight
                text-white

                sm:text-2xl
              "
            >
              Max jars per day
            </h3>

            <p
              className="
                mt-1
                max-w-md
                text-xs
                leading-5
                text-white/45

                sm:text-sm
              "
            >
              Colors are grouped by their daily
              cap so the information is easier
              to scan at a glance.
            </p>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-2
            gap-2
            self-start
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-[#fe7f2d]/25
              bg-[#fe7f2d]/10
              px-4
              py-3
            "
          >
            <strong
              className="
                block
                text-2xl
                font-black
                leading-none
                text-[#ff9b57]
              "
            >
              {TOTAL_DAILY_JARS}
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

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-3
            "
          >
            <strong
              className="
                block
                text-2xl
                font-black
                leading-none
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
        </div>
      </div>

      <div
        className="
          mt-5
          grid
          gap-3

          md:grid-cols-3
        "
      >
        {DAILY_GROUPS.map((group) => (
          <DailyCapGroup
            key={group.id}
            group={group}
          />
        ))}
      </div>

      <div
        className="
          mt-4
          flex
          items-start
          gap-2
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          px-3
          py-2.5
        "
      >
        <SwatchIcon
          aria-hidden="true"
          className="
            mt-0.5
            h-4
            w-4
            shrink-0
            text-[#fe7f2d]
          "
        />

        <p
          className="
            text-[10px]
            leading-5
            text-white/40

            sm:text-xs
          "
        >
          The combined total is a helpful daily
          reference. Actual routes and color
          availability may vary while playing.
        </p>
      </div>
    </section>
  )
}

export default DyesMaxPerDay