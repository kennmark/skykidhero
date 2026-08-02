import React, {
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ScrollToTop from 'react-scroll-to-top'
import {
  ArrowRightIcon,
  BookOpenIcon,
  BoltIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  CloudIcon,
  EyeIcon,
  FireIcon,
  GlobeAltIcon,
  HomeModernIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MapPinIcon,
  SparklesIcon,
  SunIcon,
  TrophyIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { SideBarContainer } from './components/SidebarContainer'
import MapShrineIntro from './components/MapShrineIntro'

import { isleOfDawn } from '../data/isleOfDawnData'
import { prairie } from '../data/prairieData'
import { hiddenForest } from '../data/forestData'
import { valley } from '../data/valleyData'
import { wasteland } from '../data/wastelandData'
import { vault } from '../data/vaultData'
import { eden } from '../data/edenData'
import { aviaryData } from '../data/aviarydata'

import {
  AVIARY_NUM_MAP_SHRINES,
  EDEN_NUM_MAP_SHRINES,
  FOREST_NUM_MAP_SHRINES,
  ISLE_NUM_MAP_SHRINES,
  MS_COUNT_DATE_UPDATED,
  PRAIRIE_NUM_MAP_SHRINES,
  TOTAL_MS_COUNT,
  VALLEY_NUM_MAP_SHRINES,
  VAULT_NUM_MAP_SHRINES,
  WASTELAND_NUM_MAP_SHRINES,
} from '../exports/constants'

const REALMS = [
  {
    id: 'isle',
    name: 'Isle of Dawn',
    shortName: 'Isle',
    count: ISLE_NUM_MAP_SHRINES,
    Icon: SunIcon,
    accent:
      'from-amber-400/20 via-orange-400/5 to-transparent',
    items:
      isleOfDawn?.[3]?.map_shrines ?? [],
  },
  {
    id: 'prairie',
    name: 'Daylight Prairie',
    shortName: 'Prairie',
    count: PRAIRIE_NUM_MAP_SHRINES,
    Icon: CloudIcon,
    accent:
      'from-emerald-400/20 via-cyan-400/5 to-transparent',
    items:
      prairie?.[3]?.map_shrines ?? [],
  },
  {
    id: 'forest',
    name: 'Hidden Forest',
    shortName: 'Forest',
    count: FOREST_NUM_MAP_SHRINES,
    Icon: BoltIcon,
    accent:
      'from-cyan-400/20 via-blue-400/5 to-transparent',
    items:
      hiddenForest?.[3]?.map_shrines ?? [],
  },
  {
    id: 'valley',
    name: 'Valley of Triumph',
    shortName: 'Valley',
    count: VALLEY_NUM_MAP_SHRINES,
    Icon: TrophyIcon,
    accent:
      'from-sky-400/20 via-indigo-400/5 to-transparent',
    items:
      valley?.[3]?.map_shrines ?? [],
  },
  {
    id: 'wasteland',
    name: 'Golden Wasteland',
    shortName: 'Wasteland',
    count: WASTELAND_NUM_MAP_SHRINES,
    Icon: FireIcon,
    accent:
      'from-lime-400/15 via-yellow-400/5 to-transparent',
    items:
      wasteland?.[3]?.map_shrines ?? [],
  },
  {
    id: 'vault',
    name: 'Vault of Knowledge',
    shortName: 'Vault',
    count: VAULT_NUM_MAP_SHRINES,
    Icon: BuildingLibraryIcon,
    accent:
      'from-violet-400/20 via-fuchsia-400/5 to-transparent',
    items:
      vault?.[3]?.map_shrines ?? [],
  },
  {
    id: 'eden',
    name: 'Eye of Eden',
    shortName: 'Eden',
    count: EDEN_NUM_MAP_SHRINES,
    Icon: EyeIcon,
    accent:
      'from-red-400/20 via-orange-400/5 to-transparent',
    items:
      eden?.[3]?.map_shrines ?? [],
  },
  {
    id: 'aviary',
    name: 'Aviary Village',
    shortName: 'Aviary',
    count: AVIARY_NUM_MAP_SHRINES,
    Icon: HomeModernIcon,
    accent:
      'from-orange-400/20 via-amber-400/5 to-transparent',
    items:
      aviaryData?.[3]?.map_shrines ?? [],
  },
]

function extractText(value) {
  if (
    value == null ||
    typeof value === 'boolean'
  ) {
    return ''
  }

  if (
    typeof value === 'string' ||
    typeof value === 'number'
  ) {
    return String(value)
  }

  if (Array.isArray(value)) {
    return value
      .map(extractText)
      .filter(Boolean)
      .join(' ')
  }

  if (React.isValidElement(value)) {
    return extractText(
      value.props?.children
    )
  }

  return ''
}

function normalize(value) {
  return extractText(value)
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

function getGuideItems(location) {
  if (location == null) {
    return []
  }

  if (Array.isArray(location)) {
    return location.filter(
      (item) =>
        item !== null &&
        item !== undefined &&
        item !== false
    )
  }

  if (
    React.isValidElement(location) &&
    location.type === React.Fragment
  ) {
    return React.Children.toArray(
      location.props?.children
    )
  }

  return [location]
}

function getGuidePreview(location) {
  const guideText = extractText(location)
    .replace(/\s+/g, ' ')
    .trim()

  if (!guideText) {
    return 'Open the guide to view the activation steps.'
  }

  return guideText.length > 145
    ? `${guideText
        .slice(0, 145)
        .trim()}…`
    : guideText
}

function SummaryCard({
  Icon,
  label,
  value,
  accent = false,
}) {
  return (
    <article
      className={`
        min-w-0
        rounded-2xl
        border
        p-4
        text-white

        ${
          accent
            ? 'border-[#fe7f2d]/25 bg-[#fe7f2d]/10'
            : 'border-white/10 bg-white/[0.04]'
        }
      `}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="
            grid
            h-10
            w-10
            shrink-0
            place-items-center
            rounded-xl
            bg-[#fe7f2d]/12
            text-[#fe7f2d]
          "
        >
          <Icon
            aria-hidden="true"
            className="h-5 w-5"
          />
        </span>

        <strong
          className={`
            text-2xl
            font-black

            ${
              accent
                ? 'text-[#ff9b57]'
                : 'text-white'
            }
          `}
        >
          {value}
        </strong>
      </div>

      <p
        className="
          mt-3
          text-[10px]
          font-black
          uppercase
          tracking-[0.13em]
          text-white/40
        "
      >
        {label}
      </p>
    </article>
  )
}

function RealmNavigator({
  realm,
  onSelect,
}) {
  const Icon = realm.Icon

  return (
    <button
      type="button"
      onClick={() =>
        onSelect(realm.id)
      }
      className="
        group
        relative
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#102a37]/80
        p-3
        text-left
        transition
        duration-300

        hover:-translate-y-0.5
        hover:border-[#fe7f2d]/35
        hover:bg-[#163746]

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#fe7f2d]
      "
    >
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          ${realm.accent}
        `}
      />

      <div className="relative flex items-center gap-3">
        <span
          className="
            grid
            h-10
            w-10
            shrink-0
            place-items-center
            rounded-xl
            border
            border-white/10
            bg-[#071820]/55
            text-[#fe7f2d]
          "
        >
          <Icon
            aria-hidden="true"
            className="h-5 w-5"
          />
        </span>

        <span className="min-w-0 flex-1">
          <span
            className="
              block
              truncate
              text-sm
              font-black
              text-white
            "
          >
            {realm.shortName}
          </span>

          <span
            className="
              mt-0.5
              block
              text-[10px]
              uppercase
              tracking-wider
              text-white/40
            "
          >
            {realm.count}{' '}
            {Number(realm.count) === 1
              ? 'Map Shrine'
              : 'Map Shrines'}
          </span>
        </span>

        <ArrowRightIcon
          aria-hidden="true"
          className="
            h-4
            w-4
            shrink-0
            text-white/30
            transition-transform
            duration-300

            group-hover:translate-x-1
            group-hover:text-[#fe7f2d]
          "
        />
      </div>
    </button>
  )
}

function MapShrineGuideModal({
  selected,
  open,
  onClose,
}) {
  if (!selected) {
    return null
  }

  const {
    mapShrine,
    index,
    realmName,
  } = selected

  const label =
    mapShrine?.shrine_label ||
    `Map Shrine ${index + 1}`

  const imageUrl =
    mapShrine?.shrine_url

  const guideItems = getGuideItems(
    mapShrine?.shrine_location
  )

  return (
    <Dialog
      open={open}
      handler={onClose}
      size="lg"
      className="
        max-h-[92svh]
        overflow-hidden
        rounded-[1.5rem]
        border
        border-white/10
        bg-[#102a37]
        text-white
        shadow-2xl
        shadow-black/50

        sm:rounded-[2rem]
      "
    >
      <DialogHeader
        className="
          flex
          items-start
          justify-between
          gap-4
          border-b
          border-white/10
          px-4
          py-4
          text-white

          sm:px-6
          sm:py-5
        "
      >
        <div className="flex min-w-0 items-start gap-3">
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
            <BookOpenIcon
              aria-hidden="true"
              className="h-6 w-6"
            />
          </span>

          <span className="min-w-0">
            <span
              className="
                block
                text-[10px]
                font-black
                uppercase
                tracking-[0.18em]
                text-[#ff9b57]
              "
            >
              Step-by-step activation guide
            </span>

            <span
              className="
                mt-1
                block
                text-lg
                font-black
                leading-tight
                text-white

                sm:text-2xl
              "
            >
              {label}
            </span>

            <span
              className="
                mt-1
                block
                text-xs
                font-normal
                text-white/45

                sm:text-sm
              "
            >
              {realmName}
            </span>
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Map Shrine guide"
          className="
            grid
            h-9
            w-9
            shrink-0
            place-items-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-white/50
            transition

            hover:bg-white/10
            hover:text-white

            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#fe7f2d]
          "
        >
          <XMarkIcon
            aria-hidden="true"
            className="h-5 w-5"
          />
        </button>
      </DialogHeader>

      <DialogBody
        className="
          max-h-[calc(92svh-9rem)]
          overflow-y-auto
          px-4
          py-4
          text-white

          sm:px-6
          sm:py-6
        "
      >
        <div
          className="
            grid
            gap-5

            lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)]
            lg:items-start
          "
        >
          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#071820]
            "
          >
            {imageUrl ? (
              <LazyLoadImage
                src={imageUrl}
                alt={label}
                className="
                  aspect-video
                  max-h-[23rem]
                  w-full
                  object-cover
                "
              />
            ) : (
              <div className="grid aspect-video place-items-center">
                <MapIcon
                  aria-hidden="true"
                  className="h-14 w-14 text-[#fe7f2d]/35"
                />
              </div>
            )}

            <div
              className="
                border-t
                border-white/10
                bg-[#071820]/90
                px-4
                py-3
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  text-white/45
                "
              >
                <MapPinIcon
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#fe7f2d]"
                />

                <span>
                  Map Shrine {index + 1} in{' '}
                  {realmName}
                </span>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="map-shrine-guide-steps"
            className="min-w-0"
          >
            <div
              className="
                flex
                items-center
                justify-between
                gap-3
              "
            >
              <div>
                <p
                  id="map-shrine-guide-steps"
                  className="
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.18em]
                    text-[#ff9b57]
                  "
                >
                  How to locate and activate it
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    leading-6
                    text-white/45
                  "
                >
                  Follow the guide in order and
                  light the shrine when you
                  arrive.
                </p>
              </div>

              {guideItems.length > 1 && (
                <span
                  className="
                    inline-flex
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-3
                    py-1.5
                    text-[10px]
                    font-black
                    uppercase
                    tracking-wider
                    text-white/45
                  "
                >
                  <ListBulletIcon
                    aria-hidden="true"
                    className="h-4 w-4 text-[#fe7f2d]"
                  />

                  {guideItems.length} steps
                </span>
              )}
            </div>

            {guideItems.length > 1 ? (
              <ol className="mt-4 space-y-3">
                {guideItems.map(
                  (
                    guideItem,
                    guideIndex
                  ) => (
                    <li
                      key={guideIndex}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        p-4
                      "
                    >
                      <span
                        className="
                          grid
                          h-8
                          w-8
                          shrink-0
                          place-items-center
                          rounded-xl
                          bg-[#fe7f2d]
                          text-xs
                          font-black
                          text-[#233d4d]
                        "
                      >
                        {guideIndex + 1}
                      </span>

                      <div
                        className="
                          min-w-0
                          pt-0.5
                          text-sm
                          font-normal
                          leading-7
                          text-white/70

                          sm:text-base

                          [&_a]:text-[#ff9b57]
                          [&_a]:underline
                          [&_img]:my-3
                          [&_img]:max-h-[24rem]
                          [&_img]:w-full
                          [&_img]:rounded-xl
                          [&_img]:object-contain
                          [&_li]:text-white/70
                          [&_p]:text-white/70
                          [&_span]:text-white/70
                          [&_strong]:text-white
                        "
                      >
                        {guideItem}
                      </div>
                    </li>
                  )
                )}
              </ol>
            ) : guideItems.length === 1 ? (
              <div
                className="
                  mt-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-4
                  text-sm
                  font-normal
                  leading-7
                  text-white/70

                  sm:p-5
                  sm:text-base

                  [&_a]:text-[#ff9b57]
                  [&_a]:underline
                  [&_img]:my-3
                  [&_img]:max-h-[24rem]
                  [&_img]:w-full
                  [&_img]:rounded-xl
                  [&_img]:object-contain
                  [&_li]:text-white/70
                  [&_ol]:space-y-2
                  [&_p]:text-white/70
                  [&_span]:text-white/70
                  [&_strong]:text-white
                  [&_ul]:space-y-2
                "
              >
                {guideItems[0]}
              </div>
            ) : (
              <div
                className="
                  mt-4
                  rounded-2xl
                  border
                  border-dashed
                  border-white/10
                  bg-white/[0.025]
                  px-4
                  py-10
                  text-center
                "
              >
                <BookOpenIcon
                  aria-hidden="true"
                  className="mx-auto h-8 w-8 text-white/20"
                />

                <p
                  className="
                    mt-3
                    text-sm
                    text-white/45
                  "
                >
                  The activation guide for this
                  Map Shrine has not been added
                  yet.
                </p>
              </div>
            )}
          </section>
        </div>
      </DialogBody>

      <DialogFooter
        className="
          border-t
          border-white/10
          px-4
          py-3

          sm:px-6
        "
      >
        <button
          type="button"
          onClick={onClose}
          className="
            inline-flex
            min-h-10
            items-center
            justify-center
            rounded-full
            bg-[#fe7f2d]
            px-5
            py-2.5
            text-sm
            font-black
            text-[#233d4d]
            transition

            hover:bg-[#ff934d]

            focus:outline-none
            focus-visible:ring-4
            focus-visible:ring-[#fe7f2d]/25
          "
        >
          Done
        </button>
      </DialogFooter>
    </Dialog>
  )
}

function MapShrineCard({
  mapShrine,
  index,
  realmName,
  onOpenGuide,
}) {
  const label =
    mapShrine?.shrine_label ||
    `Map Shrine ${index + 1}`

  const imageUrl =
    mapShrine?.shrine_url

  const guideItems = getGuideItems(
    mapShrine?.shrine_location
  )

  const openGuide = () =>
    onOpenGuide({
      mapShrine,
      index,
      realmName,
    })

  return (
    <article
      className="
        group
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#102a37]/85
        shadow-lg
        shadow-black/10
        transition
        duration-300

        hover:-translate-y-1
        hover:border-[#fe7f2d]/40
        hover:shadow-xl
        hover:shadow-black/20
      "
    >
      <button
        type="button"
        onClick={openGuide}
        className="
          relative
          aspect-[16/10]
          w-full
          overflow-hidden
          bg-[#071820]
          text-left

          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-inset
          focus-visible:ring-[#fe7f2d]
        "
        aria-label={`Open activation guide for ${label}`}
      >
        {imageUrl ? (
          <LazyLoadImage
            src={imageUrl}
            alt={label}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-500

              group-hover:scale-105
            "
          />
        ) : (
          <div className="grid h-full place-items-center">
            <MapIcon
              aria-hidden="true"
              className="h-12 w-12 text-[#fe7f2d]/35"
            />
          </div>
        )}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#071820]/95
            via-transparent
            to-transparent
          "
        />

        <span
          className="
            absolute
            left-3
            top-3
            rounded-full
            border
            border-white/10
            bg-[#071820]/75
            px-2.5
            py-1
            text-[9px]
            font-black
            uppercase
            tracking-[0.14em]
            text-[#ff9b57]
            backdrop-blur-md
          "
        >
          Shrine {index + 1}
        </span>

        <span
          className="
            absolute
            bottom-3
            right-3
            inline-flex
            items-center
            gap-1.5
            rounded-full
            bg-[#fe7f2d]
            px-3
            py-1.5
            text-[10px]
            font-black
            text-[#233d4d]
            shadow-lg
          "
        >
          <BookOpenIcon
            aria-hidden="true"
            className="h-4 w-4"
          />

          View guide
        </span>
      </button>

      <div
        className="
          flex
          flex-1
          flex-col
          p-4

          sm:p-5
        "
      >
        <div className="flex items-start gap-3">
          <span
            className="
              grid
              h-9
              w-9
              shrink-0
              place-items-center
              rounded-xl
              bg-[#fe7f2d]/10
              text-[#fe7f2d]
            "
          >
            <MapPinIcon
              aria-hidden="true"
              className="h-5 w-5"
            />
          </span>

          <div className="min-w-0">
            <h3
              className="
                line-clamp-2
                text-base
                font-black
                leading-snug
                text-white

                sm:text-lg
              "
            >
              {label}
            </h3>

            <p
              className="
                mt-1
                text-[10px]
                font-black
                uppercase
                tracking-wider
                text-white/30
              "
            >
              {realmName}
            </p>
          </div>
        </div>

        <p
          className="
            mt-4
            line-clamp-3
            flex-1
            text-sm
            leading-6
            text-white/50
          "
        >
          {getGuidePreview(
            mapShrine?.shrine_location
          )}
        </p>

        <button
          type="button"
          onClick={openGuide}
          className="
            mt-4
            inline-flex
            w-full
            items-center
            justify-between
            gap-3
            rounded-xl
            border
            border-white/10
            bg-white/[0.035]
            px-3
            py-2.5
            text-left
            transition

            hover:border-[#fe7f2d]/30
            hover:bg-[#fe7f2d]/10

            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#fe7f2d]
          "
        >
          <span>
            <span
              className="
                block
                text-xs
                font-black
                text-white/75
              "
            >
              Activation steps
            </span>

            <span
              className="
                mt-0.5
                block
                text-[10px]
                text-white/35
              "
            >
              {guideItems.length > 1
                ? `${guideItems.length} instructions`
                : 'Open complete guide'}
            </span>
          </span>

          <ArrowRightIcon
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-[#fe7f2d]"
          />
        </button>
      </div>
    </article>
  )
}

function RealmAccordion({
  realm,
  isOpen,
  onToggle,
  onOpenGuide,
}) {
  const Icon = realm.Icon

  const visibleCount =
    realm.filteredItems.length

  return (
    <Accordion
      open={isOpen}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#102a37]/80
        shadow-lg
        shadow-black/10
      "
    >
      <AccordionHeader
        onClick={onToggle}
        className="
          border-b-0
          px-4
          py-4
          text-left
          text-white

          hover:!text-white

          sm:px-5
          sm:py-5
        "
      >
        <div
          className="
            flex
            w-full
            min-w-0
            items-center
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
              bg-[#fe7f2d]/10
              text-[#fe7f2d]

              sm:h-12
              sm:w-12
            "
          >
            <Icon
              aria-hidden="true"
              className="h-6 w-6"
            />
          </span>

          <span className="min-w-0 flex-1">
            <span
              className="
                block
                truncate
                text-base
                font-black
                text-white

                sm:text-lg
              "
            >
              {realm.name}
            </span>

            <span
              className="
                mt-1
                block
                text-xs
                font-medium
                text-white/40

                sm:text-sm
              "
            >
              {visibleCount}{' '}
              {visibleCount === 1
                ? 'shrine'
                : 'shrines'}{' '}
              shown
              {visibleCount !==
              realm.items.length
                ? ` of ${realm.items.length}`
                : ''}
            </span>
          </span>

          <span
            className="
              hidden
              shrink-0
              rounded-full
              border
              border-[#fe7f2d]/20
              bg-[#fe7f2d]/10
              px-3
              py-1.5
              text-xs
              font-black
              text-[#ff9b57]

              sm:inline-flex
            "
          >
            {realm.count}{' '}
            {Number(realm.count) === 1
              ? 'Shrine'
              : 'Shrines'}
          </span>

          <ChevronDownIcon
            aria-hidden="true"
            className={`
              h-5
              w-5
              shrink-0
              text-white/40
              transition-transform
              duration-300

              ${
                isOpen
                  ? 'rotate-180 text-[#fe7f2d]'
                  : ''
              }
            `}
          />
        </div>
      </AccordionHeader>

      <AccordionBody
        className="
          px-4
          pb-5
          pt-0

          sm:px-5
        "
      >
        <div
          className="
            border-t
            border-white/10
            pt-5
          "
        >
          {visibleCount > 0 ? (
            <div
              className="
                grid
                items-stretch
                gap-4

                sm:grid-cols-2

                xl:grid-cols-3

                2xl:grid-cols-4
              "
            >
              {realm.filteredItems.map(
                (
                  mapShrine,
                  index
                ) => (
                  <MapShrineCard
                    key={
                      mapShrine?.shrine_label ??
                      `${realm.id}-${index}`
                    }
                    mapShrine={mapShrine}
                    index={index}
                    realmName={realm.name}
                    onOpenGuide={
                      onOpenGuide
                    }
                  />
                )
              )}
            </div>
          ) : (
            <div
              className="
                rounded-2xl
                border
                border-dashed
                border-white/10
                bg-white/[0.025]
                px-4
                py-10
                text-center
              "
            >
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="mx-auto h-8 w-8 text-white/20"
              />

              <p
                className="
                  mt-3
                  text-sm
                  font-bold
                  text-white/60
                "
              >
                No matching Map Shrine
                locations
              </p>
            </div>
          )}
        </div>
      </AccordionBody>
    </Accordion>
  )
}

export default function PageMapShrines() {
  const [openRealm, setOpenRealm] =
    useState('isle')

  const [search, setSearch] =
    useState('')

  const [
    selectedGuide,
    setSelectedGuide,
  ] = useState(null)

  const filteredRealms = useMemo(() => {
    const query = normalize(search)

    return REALMS.map((realm) => {
      const realmMatches =
        normalize(realm.name).includes(
          query
        ) ||
        normalize(
          realm.shortName
        ).includes(query)

      const filteredItems =
        !query || realmMatches
          ? realm.items
          : realm.items.filter(
              (mapShrine) =>
                normalize(
                  mapShrine?.shrine_label
                ).includes(query) ||
                normalize(
                  mapShrine?.shrine_location
                ).includes(query)
            )

      return {
        ...realm,
        filteredItems,
      }
    }).filter(
      (realm) =>
        !query ||
        realm.filteredItems.length > 0
    )
  }, [search])

  useEffect(() => {
    if (!search.trim()) {
      return
    }

    const openRealmIsVisible =
      filteredRealms.some(
        (realm) =>
          realm.id === openRealm
      )

    if (
      !openRealmIsVisible &&
      filteredRealms.length > 0
    ) {
      setOpenRealm(
        filteredRealms[0].id
      )
    }

    if (
      filteredRealms.length === 1
    ) {
      setOpenRealm(
        filteredRealms[0].id
      )
    }
  }, [
    filteredRealms,
    openRealm,
    search,
  ])

  const shownShrineCount = useMemo(
    () =>
      filteredRealms.reduce(
        (total, realm) =>
          total +
          realm.filteredItems.length,
        0
      ),
    [filteredRealms]
  )

  const datasetShrineCount = useMemo(
    () =>
      REALMS.reduce(
        (total, realm) =>
          total + realm.items.length,
        0
      ),
    []
  )

  function handleRealmSelect(
    realmId
  ) {
    setOpenRealm(realmId)

    window.requestAnimationFrame(
      () => {
        document
          .getElementById(
            `map-shrine-${realmId}`
          )
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
      }
    )
  }

  return (
    <div className="flex w-full min-w-0">
      <div className="shrink-0">
        <SideBarContainer />
      </div>

      <main className="min-w-0 flex-1">
        <MapShrineIntro />

        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-2
            pb-16

            sm:px-4
          "
        >
          <section
            aria-labelledby="map-shrine-library-title"
            className="
              relative
              isolate
              mt-4
              overflow-hidden
              rounded-[1.75rem]
              border
              border-[#fe7f2d]/20
              bg-[#071820]/80
              p-4
              text-white
              shadow-[0_24px_70px_rgba(0,0,0,0.25)]

              sm:mt-6
              sm:rounded-[2rem]
              sm:p-6

              lg:p-8
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                -z-10
                bg-[radial-gradient(circle_at_10%_10%,_rgba(254,127,45,0.15),_transparent_28%),radial-gradient(circle_at_90%_90%,_rgba(42,124,160,0.17),_transparent_34%)]
              "
            />

            <div
              className="
                grid
                gap-6

                lg:grid-cols-[minmax(0,1fr)_minmax(25rem,0.75fr)]
                lg:items-end
                lg:gap-8
              "
            >
              <div>
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
                  <MapPinIcon
                    aria-hidden="true"
                    className="h-4 w-4"
                  />

                  Map Shrine location library
                </div>

                <h1
                  id="map-shrine-library-title"
                  className="
                    mt-4
                    max-w-3xl
                    text-3xl
                    font-black
                    leading-tight
                    tracking-tight
                    text-white

                    sm:text-4xl

                    lg:text-5xl
                  "
                >
                  Find every shrine and reveal
                  more of the kingdom.
                </h1>

                <p
                  className="
                    mt-3
                    max-w-3xl
                    text-sm
                    leading-7
                    text-white/60

                    sm:text-base
                    sm:leading-8
                  "
                >
                  Browse Map Shrine locations by
                  realm, search by landmark or
                  instruction, and open the full
                  activation guide from any
                  location card.
                </p>
              </div>

              <div
                className="
                  grid
                  grid-cols-3
                  gap-2.5
                "
              >
                <SummaryCard
                  Icon={GlobeAltIcon}
                  label="Kingdom total"
                  value={TOTAL_MS_COUNT}
                  accent
                />

                <SummaryCard
                  Icon={MapIcon}
                  label="Realm guides"
                  value={REALMS.length}
                />

                <SummaryCard
                  Icon={CheckCircleIcon}
                  label="Location cards"
                  value={datasetShrineCount}
                />
              </div>
            </div>

            <div
              className="
                mt-6
                grid
                gap-3

                sm:grid-cols-2

                lg:grid-cols-4

                xl:grid-cols-8
              "
            >
              {REALMS.map((realm) => (
                <RealmNavigator
                  key={realm.id}
                  realm={realm}
                  onSelect={
                    handleRealmSelect
                  }
                />
              ))}
            </div>

            <div
              className="
                mt-5
                flex
                flex-col
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-[#102a37]/70
                p-4

                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    grid
                    h-10
                    w-10
                    shrink-0
                    place-items-center
                    rounded-xl
                    bg-[#fe7f2d]/10
                    text-[#fe7f2d]
                  "
                >
                  <BookOpenIcon
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </span>

                <div>
                  <p
                    className="
                      text-sm
                      font-black
                      text-white
                    "
                  >
                    Every card includes its
                    original guide
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-white/45

                      sm:text-sm
                    "
                  >
                    Select a card to view its
                    complete location and
                    activation instructions in a
                    responsive popup.
                  </p>
                </div>
              </div>

              <span
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3
                  py-1.5
                  text-[10px]
                  text-white/45

                  sm:text-xs
                "
              >
                <SparklesIcon
                  aria-hidden="true"
                  className="h-4 w-4 text-[#fe7f2d]"
                />

                Updated {MS_COUNT_DATE_UPDATED}
              </span>
            </div>
          </section>

          <section
            id="map-shrine-locations"
            aria-labelledby="map-shrine-locations-title"
            className="
              mt-8
              scroll-mt-24

              sm:mt-10
            "
          >
            <div
              className="
                rounded-[1.75rem]
                border
                border-white/10
                bg-[#071820]/70
                p-4
                text-white
                shadow-xl
                shadow-black/15

                sm:p-6
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-5

                  lg:flex-row
                  lg:items-end
                  lg:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-xs
                      font-black
                      uppercase
                      tracking-[0.18em]
                      text-[#ff9b57]

                      sm:text-sm
                    "
                  >
                    Searchable location guides
                  </p>

                  <h2
                    id="map-shrine-locations-title"
                    className="
                      mt-2
                      text-2xl
                      font-black
                      tracking-tight
                      text-white

                      sm:text-4xl
                    "
                  >
                    Map Shrines by realm
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-white/45

                      sm:text-base
                    "
                  >
                    {shownShrineCount}{' '}
                    {shownShrineCount === 1
                      ? 'location'
                      : 'locations'}{' '}
                    currently shown
                  </p>
                </div>

                <div
                  className="
                    relative
                    w-full

                    lg:max-w-md
                  "
                >
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      h-5
                      w-5
                      -translate-y-1/2
                      text-white/30
                    "
                  />

                  <input
                    type="search"
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value
                      )
                    }
                    placeholder="Search realm, landmark, or guide step..."
                    className="
                      h-12
                      w-full
                      rounded-full
                      border
                      border-white/10
                      bg-[#102a37]
                      pl-12
                      pr-12
                      text-sm
                      text-white
                      outline-none
                      transition

                      placeholder:text-white/25

                      focus:border-[#fe7f2d]/50
                      focus:ring-4
                      focus:ring-[#fe7f2d]/10
                    "
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() =>
                        setSearch('')
                      }
                      aria-label="Clear search"
                      className="
                        absolute
                        right-3
                        top-1/2
                        grid
                        h-8
                        w-8
                        -translate-y-1/2
                        place-items-center
                        rounded-full
                        text-white/35
                        transition

                        hover:bg-white/10
                        hover:text-white
                      "
                    >
                      <XMarkIcon
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {filteredRealms.length > 0 ? (
              <div className="mt-4 space-y-3">
                {filteredRealms.map(
                  (realm) => (
                    <div
                      key={realm.id}
                      id={`map-shrine-${realm.id}`}
                      className="scroll-mt-24"
                    >
                      <RealmAccordion
                        realm={realm}
                        isOpen={
                          openRealm ===
                          realm.id
                        }
                        onToggle={() =>
                          setOpenRealm(
                            openRealm ===
                              realm.id
                              ? ''
                              : realm.id
                          )
                        }
                        onOpenGuide={
                          setSelectedGuide
                        }
                      />
                    </div>
                  )
                )}
              </div>
            ) : (
              <div
                className="
                  mt-4
                  rounded-[1.75rem]
                  border
                  border-dashed
                  border-white/10
                  bg-[#102a37]/60
                  px-5
                  py-16
                  text-center
                  text-white
                "
              >
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="mx-auto h-10 w-10 text-white/20"
                />

                <h3
                  className="
                    mt-4
                    text-lg
                    font-black
                    text-white/70
                  "
                >
                  No Map Shrine locations found
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-white/35
                  "
                >
                  Try another realm, landmark,
                  or guide instruction.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setSearch('')
                  }
                  className="
                    mt-5
                    rounded-full
                    bg-[#fe7f2d]
                    px-5
                    py-2.5
                    text-sm
                    font-black
                    text-[#233d4d]
                  "
                >
                  Clear search
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      <MapShrineGuideModal
        selected={selectedGuide}
        open={Boolean(selectedGuide)}
        onClose={() =>
          setSelectedGuide(null)
        }
      />

      <ScrollToTop
        smooth
        className="scrollToTop"
      />
    </div>
  )
}