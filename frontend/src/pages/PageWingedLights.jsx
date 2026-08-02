import React, { useEffect, useMemo, useState } from 'react'
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
  ChevronDownIcon,
  CloudIcon,
  EyeIcon,
  FireIcon,
  GlobeAltIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
  MapIcon,
  MapPinIcon,
  ListBulletIcon,
  ShieldCheckIcon,
  SparklesIcon,
  SunIcon,
  TrophyIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { SideBarContainer } from './components/SidebarContainer'
import { WINGED_LIGHT } from '../exports/defaultImages'

import { isleOfDawn } from '../data/isleOfDawnData'
import { prairie } from '../data/prairieData'
import { hiddenForest } from '../data/forestData'
import { valley } from '../data/valleyData'
import { wasteland } from '../data/wastelandData'
import { vault } from '../data/vaultData'
import { eden } from '../data/edenData'
import { aviaryData } from '../data/aviarydata'
import { seasons2022 } from '../data/seasons'

import {
  AVIARY_NUM_WL,
  EDEN_NUM_WL,
  FOREST_NUM_WL,
  ISLE_NUM_WL,
  ORBIT_WL,
  PLAYSTATION_MAX_WL,
  PRAIRIE_NUM_WL,
  SHARDS_WL,
  STEAM_MAX_WL,
  TOTAL_WL_COUNT,
  VALLEY_NUM_WL,
  VAULT_NUM_WL,
  WASTELAND_NUM_WL,
  WB_REGULAR_SPIRITS,
  WB_TRAVELING_SPIRITS,
  WL_COUNT,
  WL_COUNT_DATE_UPDATED,
} from '../exports/constants'

const REALMS = [
  {
    id: 'isle',
    name: 'Isle of Dawn',
    shortName: 'Isle',
    count: ISLE_NUM_WL,
    Icon: SunIcon,
    accent: 'from-amber-400/20 via-orange-400/5 to-transparent',
    items: isleOfDawn?.[2]?.winged_lights ?? [],
  },
  {
    id: 'prairie',
    name: 'Daylight Prairie',
    shortName: 'Prairie',
    count: PRAIRIE_NUM_WL,
    Icon: CloudIcon,
    accent: 'from-emerald-400/20 via-cyan-400/5 to-transparent',
    items: prairie?.[2]?.winged_lights ?? [],
  },
  {
    id: 'forest',
    name: 'Hidden Forest',
    shortName: 'Forest',
    count: FOREST_NUM_WL,
    Icon: BoltIcon,
    accent: 'from-cyan-400/20 via-blue-400/5 to-transparent',
    items: hiddenForest?.[2]?.winged_lights ?? [],
  },
  {
    id: 'valley',
    name: 'Valley of Triumph',
    shortName: 'Valley',
    count: VALLEY_NUM_WL,
    Icon: TrophyIcon,
    accent: 'from-sky-400/20 via-indigo-400/5 to-transparent',
    items: valley?.[2]?.winged_lights ?? [],
  },
  {
    id: 'wasteland',
    name: 'Golden Wasteland',
    shortName: 'Wasteland',
    count: WASTELAND_NUM_WL,
    Icon: FireIcon,
    accent: 'from-lime-400/15 via-yellow-400/5 to-transparent',
    items: wasteland?.[2]?.winged_lights ?? [],
  },
  {
    id: 'vault',
    name: 'Vault of Knowledge',
    shortName: 'Vault',
    count: VAULT_NUM_WL,
    Icon: BuildingLibraryIcon,
    accent: 'from-violet-400/20 via-fuchsia-400/5 to-transparent',
    items: vault?.[2]?.winged_lights ?? [],
  },
  {
    id: 'eden',
    name: 'Eye of Eden',
    shortName: 'Eden',
    count: EDEN_NUM_WL,
    Icon: EyeIcon,
    accent: 'from-red-400/20 via-orange-400/5 to-transparent',
    items: eden?.[2]?.winged_lights ?? [],
  },
  {
    id: 'shattering',
    name: 'Shattering Void Space',
    shortName: 'Shattering',
    count: SHARDS_WL,
    Icon: SparklesIcon,
    accent: 'from-purple-400/20 via-pink-400/5 to-transparent',
    items: seasons2022?.[2]?.winged_lights ?? [],
  },
  {
    id: 'aviary',
    name: 'Aviary Village',
    shortName: 'Aviary',
    count: AVIARY_NUM_WL,
    Icon: HomeModernIcon,
    accent: 'from-orange-400/20 via-amber-400/5 to-transparent',
    items: aviaryData?.[2]?.winged_lights ?? [],
  },
]

const SOURCE_BREAKDOWN = [
  {
    id: 'maps',
    label: 'Realm Winged Lights',
    value: WL_COUNT,
    description:
      'Collectible lights found across the realms, seasonal maps, and special areas.',
    Icon: MapPinIcon,
  },
  {
    id: 'regular',
    label: 'Regular Spirit Buffs',
    value: WB_REGULAR_SPIRITS,
    description:
      'Permanent Wing Buffs unlocked from Regular Spirits.',
    Icon: ShieldCheckIcon,
  },
  {
    id: 'traveling',
    label: 'Traveling Spirit Buffs',
    value: WB_TRAVELING_SPIRITS,
    description:
      'Permanent Wing Buffs collected from Traveling Spirits.',
    Icon: SparklesIcon,
  },
  {
    id: 'orbit',
    label: 'Orbit',
    value: ORBIT_WL,
    description:
      'The Winged Light received after completing the Sky credits.',
    Icon: GlobeAltIcon,
  },
  {
    id: 'shards',
    label: 'Shattering Void',
    value: SHARDS_WL,
    description:
      'Winged Lights available through Shattering Void memories.',
    Icon: BoltIcon,
  },
]

const PLATFORM_TOTALS = [
  {
    id: 'mobile',
    label: 'Mobile & Switch',
    value: TOTAL_WL_COUNT,
  },
  {
    id: 'playstation',
    label: 'PlayStation',
    value: PLAYSTATION_MAX_WL,
  },
  {
    id: 'steam',
    label: 'Steam',
    value: STEAM_MAX_WL,
  },
]

function extractText(value) {
  if (value == null || typeof value === 'boolean') {
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
    return extractText(value.props?.children)
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

  return [location]
}

function getGuidePreview(location) {
  const guideText = extractText(location)
    .replace(/\s+/g, ' ')
    .trim()

  if (!guideText) {
    return 'Open the guide to view the location steps.'
  }

  return guideText.length > 145
    ? `${guideText.slice(0, 145).trim()}…`
    : guideText
}

function WingedLightGuideModal({
  selected,
  open,
  onClose,
}) {
  if (!selected) {
    return null
  }

  const {
    wingedLight,
    index,
    realmName,
  } = selected

  const label =
    wingedLight?.wl_label ||
    `Winged Light ${index + 1}`

  const imageUrl = wingedLight?.wl_url
  const guideItems = getGuideItems(
    wingedLight?.wl_location
  )

  return (
    <Dialog
      open={open}
      handler={onClose}
      size="lg"
      className="max-h-[92svh] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#102a37] text-white shadow-2xl shadow-black/50 sm:rounded-[2rem]"
    >
      <DialogHeader className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-4 text-white sm:px-6 sm:py-5">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#fe7f2d] text-[#233d4d]">
            <BookOpenIcon
              aria-hidden="true"
              className="h-6 w-6"
            />
          </span>

          <span className="min-w-0">
            <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#ff9b57]">
              Step-by-step location guide
            </span>

            <span className="mt-1 block text-lg font-black leading-tight text-white sm:text-2xl">
              {label}
            </span>

            <span className="mt-1 block text-xs font-normal text-white/45 sm:text-sm">
              {realmName}
            </span>
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Winged Light guide"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fe7f2d]"
        >
          <XMarkIcon
            aria-hidden="true"
            className="h-5 w-5"
          />
        </button>
      </DialogHeader>

      <DialogBody className="max-h-[calc(92svh-9rem)] overflow-y-auto px-4 py-4 text-white sm:px-6 sm:py-6">
        <div className="grid gap-5 lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#071820]">
            {imageUrl ? (
              <LazyLoadImage
                src={imageUrl}
                alt={label}
                className="aspect-video h-full max-h-[22rem] w-full object-cover"
              />
            ) : (
              <div className="grid aspect-video place-items-center">
                <SparklesIcon
                  aria-hidden="true"
                  className="h-14 w-14 text-[#fe7f2d]/35"
                />
              </div>
            )}

            <div className="border-t border-white/10 bg-[#071820]/90 px-4 py-3">
              <div className="flex items-center gap-2 text-xs text-white/45">
                <MapPinIcon
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#fe7f2d]"
                />

                <span>
                  Winged Light {index + 1} in{' '}
                  {realmName}
                </span>
              </div>
            </div>
          </div>

          <section
            aria-labelledby="location-guide-steps"
            className="min-w-0"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p
                  id="location-guide-steps"
                  className="text-xs font-black uppercase tracking-[0.18em] text-[#ff9b57]"
                >
                  How to locate it
                </p>

                <p className="mt-1 text-sm leading-6 text-white/45">
                  Follow the instructions in order.
                </p>
              </div>

              {guideItems.length > 1 && (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white/45">
                  <ListBulletIcon
                    aria-hidden="true"
                    className="h-4 w-4 text-[#fe7f2d]"
                  />

                  {guideItems.length} steps
                </span>
              )}
            </div>

            {guideItems.length > 0 ? (
              <ol className="mt-4 space-y-3">
                {guideItems.map(
                  (guideItem, guideIndex) => (
                    <li
                      key={guideIndex}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#fe7f2d] text-xs font-black text-[#233d4d]">
                        {guideIndex + 1}
                      </span>

                      <div className="min-w-0 pt-0.5 text-sm font-normal leading-7 text-white/70 sm:text-base">
                        {guideItem}
                      </div>
                    </li>
                  )
                )}
              </ol>
            ) : (
              <div className="mt-4 rounded-2xl border border-dashed border-white/10 bg-white/[0.025] px-4 py-10 text-center">
                <BookOpenIcon
                  aria-hidden="true"
                  className="mx-auto h-8 w-8 text-white/20"
                />

                <p className="mt-3 text-sm text-white/45">
                  The text guide for this Winged
                  Light has not been added yet.
                </p>
              </div>
            )}
          </section>
        </div>
      </DialogBody>

      <DialogFooter className="border-t border-white/10 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#fe7f2d] px-5 py-2.5 text-sm font-black text-[#233d4d] transition hover:bg-[#ff934d] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fe7f2d]/25"
        >
          Done
        </button>
      </DialogFooter>
    </Dialog>
  )
}

function WingedLightCard({
  wingedLight,
  index,
  realmName,
  onOpenGuide,
}) {
  const label =
    wingedLight?.wl_label ||
    `Winged Light ${index + 1}`

  const imageUrl = wingedLight?.wl_url
  const guideItems = getGuideItems(
    wingedLight?.wl_location
  )

  const openGuide = () =>
    onOpenGuide({
      wingedLight,
      index,
      realmName,
    })

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#102a37]/80 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#fe7f2d]/35 hover:shadow-xl hover:shadow-black/20">
      <button
        type="button"
        onClick={openGuide}
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#071820] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#fe7f2d]"
        aria-label={`Open location guide for ${label}`}
      >
        {imageUrl ? (
          <LazyLoadImage
            src={imageUrl}
            alt={label}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center">
            <SparklesIcon
              aria-hidden="true"
              className="h-12 w-12 text-[#fe7f2d]/40"
            />
          </div>
        )}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071820]/95 via-transparent to-transparent"
        />

        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-[#071820]/75 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#ff9b57] backdrop-blur-md">
          WL {index + 1}
        </span>

        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#fe7f2d] px-3 py-1.5 text-[10px] font-black text-[#233d4d] shadow-lg">
          <BookOpenIcon
            aria-hidden="true"
            className="h-4 w-4"
          />

          View guide
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="line-clamp-2 text-base font-black leading-snug text-white sm:text-lg">
          {label}
        </h3>

        <div className="mt-3 flex items-start gap-2">
          <MapPinIcon
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-[#fe7f2d]"
          />

          <p className="line-clamp-3 text-sm leading-6 text-white/50">
            {getGuidePreview(
              wingedLight?.wl_location
            )}
          </p>
        </div>

        <button
          type="button"
          onClick={openGuide}
          className="mt-4 inline-flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2.5 text-left transition hover:border-[#fe7f2d]/30 hover:bg-[#fe7f2d]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fe7f2d]"
        >
          <span>
            <span className="block text-xs font-black text-white/75">
              Step-by-step guide
            </span>

            <span className="mt-0.5 block text-[10px] text-white/35">
              {guideItems.length > 1
                ? `${guideItems.length} instructions`
                : 'Open instructions'}
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

function SourceCard({ source }) {
  const Icon = source.Icon
  const percentage = Math.min(
    100,
    Math.round(
      (Number(source.value) / Number(TOTAL_WL_COUNT || 1)) * 100
    )
  )

  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fe7f2d]/10 text-[#fe7f2d]">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>

        <strong className="text-2xl font-black text-[#ff9b57]">
          {source.value}
        </strong>
      </div>

      <h3 className="mt-4 text-sm font-black text-white">
        {source.label}
      </h3>

      <p className="mt-1 text-xs leading-5 text-white/45">
        {source.description}
      </p>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[#fe7f2d]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </article>
  )
}

function RealmNavigator({ realm, onSelect }) {
  const Icon = realm.Icon

  return (
    <button
      type="button"
      onClick={() => onSelect(realm.id)}
      className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#102a37]/75 p-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#fe7f2d]/35 hover:bg-[#163746] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fe7f2d]"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${realm.accent}`}
      />

      <div className="relative flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-[#071820]/50 text-[#fe7f2d]">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-black text-white">
            {realm.shortName}
          </span>

          <span className="mt-0.5 block text-[10px] uppercase tracking-wider text-white/40">
            {realm.count} Winged Lights
          </span>
        </span>

        <ArrowRightIcon
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#fe7f2d]"
        />
      </div>
    </button>
  )
}

function RealmAccordion({
  realm,
  isOpen,
  onToggle,
  onOpenGuide,
}) {
  const Icon = realm.Icon
  const visibleCount = realm.filteredItems.length

  return (
    <Accordion
      open={isOpen}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#102a37]/80 shadow-lg shadow-black/10"
    >
      <AccordionHeader
        onClick={onToggle}
        className="border-b-0 px-4 py-4 text-left text-white hover:!text-white sm:px-5 sm:py-5"
      >
        <div className="flex w-full min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#fe7f2d]/10 text-[#fe7f2d] sm:h-12 sm:w-12">
            <Icon aria-hidden="true" className="h-6 w-6" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block truncate text-base font-black text-white sm:text-lg">
              {realm.name}
            </span>

            <span className="mt-1 block text-xs font-medium text-white/40 sm:text-sm">
              {visibleCount} {visibleCount === 1 ? 'location' : 'locations'} shown
              {visibleCount !== realm.items.length
                ? ` of ${realm.items.length}`
                : ''}
            </span>
          </span>

          <span className="hidden shrink-0 rounded-full border border-[#fe7f2d]/20 bg-[#fe7f2d]/10 px-3 py-1.5 text-xs font-black text-[#ff9b57] sm:inline-flex">
            {realm.count} WL
          </span>

          <ChevronDownIcon
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-white/40 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-[#fe7f2d]' : ''
            }`}
          />
        </div>
      </AccordionHeader>

      <AccordionBody className="px-4 pb-5 pt-0 sm:px-5">
        <div className="border-t border-white/10 pt-5">
          {visibleCount > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {realm.filteredItems.map((wingedLight, index) => (
                <WingedLightCard
                  key={
                    wingedLight?.wl_label ?? `${realm.id}-${index}`
                  }
                  wingedLight={wingedLight}
                  index={index}
                  realmName={realm.name}
                  onOpenGuide={onOpenGuide}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.025] px-4 py-10 text-center">
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="mx-auto h-8 w-8 text-white/20"
              />

              <p className="mt-3 text-sm font-bold text-white/60">
                No matching Winged Light locations
              </p>
            </div>
          )}
        </div>
      </AccordionBody>
    </Accordion>
  )
}

export default function PageWingedLights() {
  const [openRealm, setOpenRealm] = useState('isle')
  const [search, setSearch] = useState('')
  const [selectedGuide, setSelectedGuide] =
    useState(null)

  const filteredRealms = useMemo(() => {
    const query = normalize(search)

    return REALMS.map((realm) => {
      const realmMatches =
        normalize(realm.name).includes(query) ||
        normalize(realm.shortName).includes(query)

      const filteredItems =
        !query || realmMatches
          ? realm.items
          : realm.items.filter(
              (wingedLight) =>
                normalize(wingedLight?.wl_label).includes(query) ||
                normalize(wingedLight?.wl_location).includes(query)
            )

      return {
        ...realm,
        filteredItems,
      }
    }).filter((realm) => !query || realm.filteredItems.length > 0)
  }, [search])

  useEffect(() => {
    if (!search.trim()) return

    const openRealmIsVisible = filteredRealms.some(
      (realm) => realm.id === openRealm
    )

    if (!openRealmIsVisible && filteredRealms.length > 0) {
      setOpenRealm(filteredRealms[0].id)
    }

    if (filteredRealms.length === 1) {
      setOpenRealm(filteredRealms[0].id)
    }
  }, [filteredRealms, openRealm, search])

  const shownLocationCount = useMemo(
    () =>
      filteredRealms.reduce(
        (total, realm) => total + realm.filteredItems.length,
        0
      ),
    [filteredRealms]
  )

  function handleRealmSelect(realmId) {
    setOpenRealm(realmId)

    window.requestAnimationFrame(() => {
      document
        .getElementById(`winged-light-${realmId}`)
        ?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    })
  }

  return (
    <div className="flex w-full min-w-0">
      <div className="shrink-0">
        <SideBarContainer />
      </div>

      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-[1600px] px-2 pb-16 pt-4 sm:px-4 sm:pt-6">
          <section
            aria-labelledby="winged-lights-page-title"
            className="relative isolate overflow-hidden rounded-[1.75rem] border border-[#fe7f2d]/20 bg-[#102a37] text-white shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:rounded-[2.25rem]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,_rgba(254,127,45,0.18),_transparent_32%),radial-gradient(circle_at_8%_90%,_rgba(51,137,178,0.16),_transparent_36%)]"
            />

            <div className="relative z-10 grid gap-8 p-5 sm:p-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-center lg:gap-10 lg:p-10 xl:p-12">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#fe7f2d]/20 bg-[#fe7f2d]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#ff9b57] sm:text-xs">
                  <SparklesIcon aria-hidden="true" className="h-4 w-4" />
                  Complete Winged Light guide
                </div>

                <h1
                  id="winged-lights-page-title"
                  className="mt-5 max-w-3xl text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
                >
                  Find every light. Build your strongest cape.
                </h1>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 lg:text-lg">
                  Browse every known Winged Light across the Sky Kingdom.
                  Search by realm, landmark, or location and use the source
                  breakdown to understand how your maximum Wing Level is
                  calculated.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <MapIcon aria-hidden="true" className="h-6 w-6 text-[#fe7f2d]" />
                    <strong className="mt-3 block text-3xl font-black text-white">
                      {WL_COUNT}
                    </strong>
                    <span className="mt-1 block text-[10px] font-black uppercase tracking-wider text-white/35">
                      Map Winged Lights
                    </span>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <ShieldCheckIcon aria-hidden="true" className="h-6 w-6 text-[#fe7f2d]" />
                    <strong className="mt-3 block text-3xl font-black text-white">
                      {WB_REGULAR_SPIRITS + WB_TRAVELING_SPIRITS}
                    </strong>
                    <span className="mt-1 block text-[10px] font-black uppercase tracking-wider text-white/35">
                      Permanent Wing Buffs
                    </span>
                  </div>

                  <div className="rounded-2xl border border-[#fe7f2d]/25 bg-[#fe7f2d]/10 p-4">
                    <SparklesIcon aria-hidden="true" className="h-6 w-6 text-[#fe7f2d]" />
                    <strong className="mt-3 block text-3xl font-black text-[#ff9b57]">
                      {TOTAL_WL_COUNT}
                    </strong>
                    <span className="mt-1 block text-[10px] font-black uppercase tracking-wider text-white/40">
                      Maximum Total
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#realm-locations"
                    className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fe7f2d] px-5 py-2.5 text-sm font-black text-[#233d4d] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff934d] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fe7f2d]/30"
                  >
                    Browse locations
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <span className="text-xs text-white/40 sm:text-sm">
                    Updated {WL_COUNT_DATE_UPDATED}
                  </span>
                </div>
              </div>

              <div className="min-w-0">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#071820]/65 p-4 sm:p-5">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-6 h-52 w-52 -translate-x-1/2 rounded-full bg-[#fe7f2d]/10 blur-3xl"
                  />

                  <LazyLoadImage
                    src={WINGED_LIGHT}
                    alt="Winged Light progression illustration"
                    className="relative z-10 mx-auto h-56 w-full object-contain sm:h-72 lg:h-80"
                  />

                  <div className="relative z-10 mt-4 grid grid-cols-3 gap-2">
                    {PLATFORM_TOTALS.map((platform) => (
                      <div
                        key={platform.id}
                        className="min-w-0 rounded-xl border border-white/10 bg-[#102a37]/85 px-2 py-3 text-center"
                      >
                        <strong className="block text-xl font-black text-[#ff9b57] sm:text-2xl">
                          {platform.value}
                        </strong>

                        <span
                          className="mt-1 block truncate text-[8px] font-black uppercase tracking-wide text-white/35 sm:text-[10px]"
                          title={platform.label}
                        >
                          {platform.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 border-t border-white/10 bg-[#071820]/45 p-5 sm:p-7 lg:p-10">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff9b57] sm:text-sm">
                    How the total is built
                  </p>

                  <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Winged Light source breakdown
                  </h2>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/45">
                  <GlobeAltIcon aria-hidden="true" className="h-4 w-4 text-[#fe7f2d]" />
                  Seven realms and special areas
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {SOURCE_BREAKDOWN.map((source) => (
                  <SourceCard key={source.id} source={source} />
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 sm:mt-10">
            <div className="mb-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff9b57] sm:text-sm">
                Realm navigator
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Jump directly to a realm
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/45 sm:text-base">
                Select a realm to open its Winged Light collection.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {REALMS.map((realm) => (
                <RealmNavigator
                  key={realm.id}
                  realm={realm}
                  onSelect={handleRealmSelect}
                />
              ))}
            </div>
          </section>

          <section
            id="realm-locations"
            className="mt-10 scroll-mt-24 sm:mt-14"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-[#071820]/65 p-4 shadow-xl shadow-black/15 sm:p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff9b57] sm:text-sm">
                    Location library
                  </p>

                  <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-4xl">
                    Winged Lights by realm
                  </h2>

                  <p className="mt-2 text-sm text-white/45 sm:text-base">
                    {shownLocationCount}{' '}
                    {shownLocationCount === 1 ? 'location' : 'locations'} currently shown
                  </p>
                </div>

                <div className="relative w-full lg:max-w-md">
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30"
                  />

                  <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search realm, landmark, or location..."
                    className="h-12 w-full rounded-full border border-white/10 bg-[#102a37] pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#fe7f2d]/50 focus:ring-4 focus:ring-[#fe7f2d]/10"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch('')}
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-white/35 transition hover:bg-white/10 hover:text-white"
                    >
                      <XMarkIcon aria-hidden="true" className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {filteredRealms.length > 0 ? (
              <div className="mt-4 space-y-3">
                {filteredRealms.map((realm) => (
                  <div
                    key={realm.id}
                    id={`winged-light-${realm.id}`}
                    className="scroll-mt-24"
                  >
                    <RealmAccordion
                      realm={realm}
                      isOpen={openRealm === realm.id}
                      onToggle={() =>
                        setOpenRealm(openRealm === realm.id ? '' : realm.id)
                      }
                      onOpenGuide={setSelectedGuide}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-[1.75rem] border border-dashed border-white/10 bg-[#102a37]/60 px-5 py-16 text-center">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="mx-auto h-10 w-10 text-white/20"
                />

                <h3 className="mt-4 text-lg font-black text-white/70">
                  No Winged Light locations found
                </h3>

                <p className="mt-2 text-sm text-white/35">
                  Try another realm, landmark, or location.
                </p>

                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="mt-5 rounded-full bg-[#fe7f2d] px-5 py-2.5 text-sm font-black text-[#233d4d]"
                >
                  Clear search
                </button>
              </div>
            )}
          </section>

          <section className="mt-8 rounded-[1.75rem] border border-[#fe7f2d]/20 bg-[#fe7f2d]/10 p-5 sm:mt-10 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#fe7f2d] text-[#233d4d]">
                <ShieldCheckIcon aria-hidden="true" className="h-6 w-6" />
              </span>

              <div>
                <h2 className="text-lg font-black text-white sm:text-xl">
                  Wing Buffs are permanent
                </h2>

                <p className="mt-1 max-w-4xl text-sm leading-6 text-white/50 sm:text-base">
                  Wing Buffs purchased from Regular and Traveling Spirits become
                  permanent Wing Levels after your rebirth from the Eye of Eden.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <WingedLightGuideModal
        selected={selectedGuide}
        open={Boolean(selectedGuide)}
        onClose={() => setSelectedGuide(null)}
      />

      <ScrollToTop smooth className="scrollToTop" />
    </div>
  )
}