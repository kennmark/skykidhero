import {
  FOREST_NUM_REG_SPIRIT,
  ISLE_NUM_REG_SPIRIT,
  PRAIRIE_NUM_REG_SPIRIT,
  VALLEY_NUM_REG_SPIRIT,
  VAULT_NUM_REG_SPIRIT,
  WASTELAND_NUM_REG_SPIRIT,
  WB_TRAVELING_SPIRITS,
} from '../exports/constants'

export const WINGED_LIGHT_PROGRESS_STORAGE_KEY =
  'skykidhero:winged-light-progress:v1'

export const WINGED_LIGHT_PROGRESS_EVENT =
  'skykidhero:winged-light-progress-change'

export const REGULAR_TIER_TWO_WING_BUFF_SPIRITS = [
  'Butterfly Charmer',
  'Waving Bellmaker',
  "Hide'n'Seek Pioneer",
  'Pouty Porter',
  'Dismayed Hunter',
  'Tearful Light Miner',
  'Handstanding Thrillseeker',
  'Proud Victor',
  'Courageous Soldier',
  'Stealthy Survivor',
  'Praying Acolyte',
  'Memory Whisperer',
]

export const REGULAR_SPIRIT_WING_BUFF_REALM_COUNTS =
  Object.freeze({
    isle:
      ISLE_NUM_REG_SPIRIT,
    prairie:
      PRAIRIE_NUM_REG_SPIRIT,
    forest:
      FOREST_NUM_REG_SPIRIT,
    valley:
      VALLEY_NUM_REG_SPIRIT,
    wasteland:
      WASTELAND_NUM_REG_SPIRIT,
    vault:
      VAULT_NUM_REG_SPIRIT,
  })

export const REGULAR_SPIRIT_BASE_WING_BUFF_COUNT =
  Object.values(
    REGULAR_SPIRIT_WING_BUFF_REALM_COUNTS
  ).reduce(
    (total, count) =>
      total + Number(count || 0),
    0
  )

export const REGULAR_TIER_TWO_WING_BUFF_COUNT =
  new Set(
    REGULAR_TIER_TWO_WING_BUFF_SPIRITS
  ).size

export const REGULAR_WING_BUFF_MAXIMUM =
  REGULAR_SPIRIT_BASE_WING_BUFF_COUNT +
  REGULAR_TIER_TWO_WING_BUFF_COUNT

function getWingBuffMaximum(type) {
  return type === 'regular'
    ? REGULAR_WING_BUFF_MAXIMUM
    : WB_TRAVELING_SPIRITS
}

const REGULAR_TIER_TWO_KEYS =
  new Set(
    REGULAR_TIER_TWO_WING_BUFF_SPIRITS.map(
      (name) => slugify(name)
    )
  )

const EMPTY_PROGRESS = {
  version: 2,
  updatedAt: null,
  mapLights: {},
  specialLights: {},
  wingBuffs: {
    regular: {},
    seasonal: {},
  },
  legacyWingBuffCounts: {
    regular: 0,
    seasonal: 0,
  },
}

function canUseStorage() {
  return (
    typeof window !== 'undefined' &&
    Boolean(window.localStorage)
  )
}

function safeParse(
  value,
  fallback
) {
  if (!value) {
    return fallback
  }

  try {
    return JSON.parse(value)
  } catch {
    return fallback
  }
}

function slugify(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFKD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .replace(
      /[^a-z0-9]+/g,
      '-'
    )
    .replace(
      /^-+|-+$/g,
      ''
    )
}

function normalizeCount(value) {
  const parsed = Number(value)

  if (!Number.isFinite(parsed)) {
    return 0
  }

  return Math.max(
    0,
    Math.round(parsed)
  )
}

function inferGroup(
  wingedLight,
  context = {}
) {
  const label =
    wingedLight?.wl_label ||
    wingedLight?.label ||
    ''

  const realmName =
    context.realmName ||
    wingedLight?.realmName ||
    ''

  const route =
    context.route ||
    (
      typeof window !==
        'undefined'
        ? window.location.pathname
        : ''
    )

  if (
    /eye[\s-]*of[\s-]*eden|\beden\b/i.test(
      `${label} ${realmName} ${route}`
    )
  ) {
    return 'wl-eden'
  }

  return (
    wingedLight?.wl_group ||
    wingedLight?.group ||
    `wl-${slugify(
      realmName ||
      route ||
      'unknown'
    )}`
  )
}

export function getWingedLightKey(
  wingedLight,
  context = {}
) {
  const group = inferGroup(
    wingedLight,
    context
  )

  const id =
    wingedLight?.id ??
    wingedLight?.wl_id ??
    null

  if (
    group &&
    id !== null &&
    id !== undefined &&
    String(id).trim() !== ''
  ) {
    return `${slugify(group)}:${slugify(id)}`
  }

  const label =
    wingedLight?.wl_label ||
    wingedLight?.label ||
    'winged-light'

  const location =
    Array.isArray(
      wingedLight?.wl_location
    )
      ? wingedLight.wl_location
          .join(' ')
      : wingedLight?.wl_location ||
        wingedLight?.location ||
        ''

  return [
    slugify(group),
    slugify(label),
    slugify(location).slice(
      0,
      48
    ),
  ]
    .filter(Boolean)
    .join(':')
}

export function getWingedLightSource(
  wingedLight,
  context = {}
) {
  const group = inferGroup(
    wingedLight,
    context
  )

  const label =
    wingedLight?.wl_label ||
    wingedLight?.label ||
    ''

  const seasonGroup =
    wingedLight?.wl_season_group ||
    ''

  if (
    /void|shatter/i.test(
      `${group} ${seasonGroup} ${label}`
    )
  ) {
    return 'special'
  }

  return 'map'
}

function resolveSpiritType(spirit) {
  const explicitType =
    String(
      spirit?.type ||
      spirit?.spiritType ||
      spirit?.spirit_type ||
      ''
    )
      .trim()
      .toLowerCase()

  if (
    explicitType === 'regular' ||
    explicitType === 'seasonal'
  ) {
    return explicitType
  }

  const seasonId =
    spirit?.seasonId ??
    spirit?.season_id ??
    null

  const normalizedSeasonId =
    String(seasonId ?? '')
      .trim()
      .toLowerCase()

  if (
    normalizedSeasonId ===
    'season-0'
  ) {
    return 'regular'
  }

  const seasonName =
    String(
      spirit?.season ||
      spirit?.seasonLabel ||
      spirit?.season_name ||
      ''
    ).trim()

  /**
   * Season pages already provide a season label even when their
   * copied Spirit object omitted `spirit_type`.
   */
  if (
    seasonName ||
    (
      normalizedSeasonId &&
      normalizedSeasonId !==
        'season-0'
    )
  ) {
    return 'seasonal'
  }

  return null
}

function resolveSpiritName(spirit) {
  return (
    spirit?.name ||
    spirit?.spiritName ||
    spirit?.spirit_name ||
    ''
  )
}

export function getWingBuffSpiritKey(
  spirit
) {
  const type =
    resolveSpiritType(spirit)

  const name =
    resolveSpiritName(spirit)

  if (!type || !name) {
    return ''
  }

  return `${type}:${slugify(name)}`
}

export function getWingBuffSlots(
  spirit
) {
  const type =
    resolveSpiritType(spirit)

  if (!type) {
    return []
  }

  const nameKey = slugify(
    resolveSpiritName(spirit)
  )

  if (
    type === 'regular' &&
    REGULAR_TIER_TWO_KEYS.has(
      nameKey
    )
  ) {
    return [
      {
        id: 'tier-1',
        label: 'Tier 1 Wing Buff',
      },
      {
        id: 'tier-2',
        label: 'Tier 2 Wing Buff',
      },
    ]
  }

  return [
    {
      id:
        type === 'regular'
          ? 'tier-1'
          : 'traveling',
      label:
        type === 'regular'
          ? 'Wing Buff'
          : 'Traveling Spirit Wing Buff',
    },
  ]
}

export function hasAscendedCandleCost(
  spiritTreeCost
) {
  return Boolean(
    spiritTreeCost?.some(
      (cost) =>
        Number(
          cost?.ascended_candles
        ) > 0
    )
  )
}

export function hasTravelingSpiritVisit(
  visits
) {
  return Boolean(
    Array.isArray(visits) &&
    visits.length > 0
  )
}

export function canTrackSpiritWingBuff(
  spirit
) {
  const type =
    resolveSpiritType(spirit)

  if (!type) {
    return false
  }

  /**
   * Every Regular Spirit contributes its base Wing Buff.
   * The twelve configured Tier 2 Spirits expose a second slot.
   */
  if (type === 'regular') {
    return true
  }

  /**
   * Seasonal Wing Buff availability is determined by an actual
   * Traveling Spirit visit, not by the original Season tree cost.
   *
   * Older Season records can contain their original seasonal
   * currency tree or a zero Ascended Candle value even though the
   * Spirit later returned as a Traveling Spirit.
   */
  return (
    spirit?.isCurrentSeason !== true &&
    hasTravelingSpiritVisit(
      spirit?.noOfVisits
    )
  )
}

export function getWingBuffSlotKey(
  spirit,
  slotId
) {
  const spiritKey =
    getWingBuffSpiritKey(spirit)

  if (!spiritKey || !slotId) {
    return ''
  }

  return `${spiritKey}:${slugify(slotId)}`
}

function normalizeLightRecords(
  records
) {
  if (
    !records ||
    typeof records !== 'object'
  ) {
    return {}
  }

  return Object.fromEntries(
    Object.entries(records)
      .filter(([, record]) =>
        Boolean(record)
      )
      .map(([key, record]) => [
        key,
        {
          key,
          label:
            record.label ||
            'Winged Light',
          id:
            record.id ??
            null,
          group:
            record.group ||
            null,
          seasonGroup:
            record.seasonGroup ||
            null,
          realmName:
            record.realmName ||
            null,
          route:
            record.route ||
            null,
          source:
            record.source ||
            'map',
          checkedAt:
            record.checkedAt ||
            null,
          updatedAt:
            record.updatedAt ||
            null,
        },
      ])
  )
}

function normalizeWingBuffRecords(
  records
) {
  if (
    !records ||
    typeof records !== 'object' ||
    Array.isArray(records)
  ) {
    return {}
  }

  return Object.fromEntries(
    Object.entries(records)
      .filter(([, record]) =>
        Boolean(record)
      )
      .map(([key, record]) => [
        key,
        {
          key,
          spiritKey:
            record.spiritKey ||
            null,
          spiritId:
            record.spiritId ||
            null,
          spiritName:
            record.spiritName ||
            'Spirit',
          spiritType:
            record.spiritType ||
            null,
          seasonId:
            record.seasonId ||
            null,
          season:
            record.season ||
            null,
          slotId:
            record.slotId ||
            null,
          slotLabel:
            record.slotLabel ||
            'Wing Buff',
          checkedAt:
            record.checkedAt ||
            null,
          updatedAt:
            record.updatedAt ||
            null,
        },
      ])
  )
}

function normalizeWingBuffBucket(
  value
) {
  if (
    typeof value === 'number'
  ) {
    return {
      records: {},
      legacyCount:
        normalizeCount(value),
    }
  }

  if (
    value &&
    typeof value === 'object'
  ) {
    return {
      records:
        normalizeWingBuffRecords(
          value.records ||
          value
        ),
      legacyCount:
        normalizeCount(
          value.legacyCount
        ),
    }
  }

  return {
    records: {},
    legacyCount: 0,
  }
}

function normalizeProgress(progress) {
  const regularBucket =
    normalizeWingBuffBucket(
      progress?.wingBuffs?.regular
    )

  const seasonalBucket =
    normalizeWingBuffBucket(
      progress?.wingBuffs?.seasonal
    )

  return {
    version: 2,
    updatedAt:
      progress?.updatedAt ||
      null,
    mapLights:
      normalizeLightRecords(
        progress?.mapLights
      ),
    specialLights:
      normalizeLightRecords(
        progress?.specialLights
      ),
    wingBuffs: {
      regular:
        regularBucket.records,
      seasonal:
        seasonalBucket.records,
    },
    legacyWingBuffCounts: {
      regular:
        normalizeCount(
          progress
            ?.legacyWingBuffCounts
            ?.regular
        ) ||
        regularBucket.legacyCount,
      seasonal:
        normalizeCount(
          progress
            ?.legacyWingBuffCounts
            ?.seasonal
        ) ||
        seasonalBucket.legacyCount,
    },
  }
}

export function readWingedLightProgress() {
  if (!canUseStorage()) {
    return EMPTY_PROGRESS
  }

  return normalizeProgress(
    safeParse(
      window.localStorage.getItem(
        WINGED_LIGHT_PROGRESS_STORAGE_KEY
      ),
      EMPTY_PROGRESS
    )
  )
}

function persistWingedLightProgress(
  progress,
  {
    notify = true,
  } = {}
) {
  const normalized =
    normalizeProgress(progress)

  if (canUseStorage()) {
    try {
      window.localStorage.setItem(
        WINGED_LIGHT_PROGRESS_STORAGE_KEY,
        JSON.stringify(normalized)
      )
    } catch {
      return normalized
    }
  }

  if (
    notify &&
    typeof window !== 'undefined'
  ) {
    window.dispatchEvent(
      new CustomEvent(
        WINGED_LIGHT_PROGRESS_EVENT,
        {
          detail: normalized,
        }
      )
    )
  }

  return normalized
}

export function setWingedLightChecked(
  wingedLight,
  checked,
  context = {}
) {
  const current =
    readWingedLightProgress()

  const key = getWingedLightKey(
    wingedLight,
    context
  )

  if (!key) {
    return current
  }

  const source =
    getWingedLightSource(
      wingedLight,
      context
    )

  const targetName =
    source === 'special'
      ? 'specialLights'
      : 'mapLights'

  const nextTarget = {
    ...current[targetName],
  }

  const now =
    new Date().toISOString()

  if (!checked) {
    delete nextTarget[key]
  } else {
    const previous =
      nextTarget[key]

    nextTarget[key] = {
      key,
      label:
        wingedLight?.wl_label ||
        wingedLight?.label ||
        'Winged Light',
      id:
        wingedLight?.id ??
        wingedLight?.wl_id ??
        null,
      group: inferGroup(
        wingedLight,
        context
      ),
      seasonGroup:
        wingedLight
          ?.wl_season_group ||
        null,
      realmName:
        context.realmName ||
        wingedLight?.realmName ||
        null,
      route:
        context.route ||
        (
          typeof window !==
            'undefined'
            ? window.location
                .pathname
            : null
        ),
      source,
      checkedAt:
        previous?.checkedAt ||
        now,
      updatedAt: now,
    }
  }

  return persistWingedLightProgress({
    ...current,
    updatedAt: now,
    [targetName]: nextTarget,
  })
}

export function setWingBuffSlotChecked(
  spirit,
  slot,
  checked
) {
  const current =
    readWingedLightProgress()

  const type =
    resolveSpiritType(spirit)

  const slotId =
    typeof slot === 'string'
      ? slot
      : slot?.id

  const slotLabel =
    typeof slot === 'string'
      ? 'Wing Buff'
      : slot?.label ||
        'Wing Buff'

  const key =
    getWingBuffSlotKey(
      spirit,
      slotId
    )

  if (!type || !key) {
    return current
  }

  const maximum =
    getWingBuffMaximum(type)

  const currentRecords = {
    ...current.wingBuffs[type],
  }

  const assignedCount =
    Object.keys(
      currentRecords
    ).length

  const storedLegacyCount =
    normalizeCount(
      current
        .legacyWingBuffCounts?.[
          type
        ]
    )

  /*
   * Legacy Wing Buffs represent buffs that
   * have not yet been assigned to a specific
   * Spirit checkbox.
   *
   * This also repairs older saved progress
   * where assigned + legacy exceeded the
   * maximum and became stuck at 49/49.
   */
  const normalizedLegacyCount =
    Math.min(
      storedLegacyCount,
      Math.max(
        0,
        maximum - assignedCount
      )
    )

  const alreadyChecked =
    Boolean(
      currentRecords[key]
    )

  let nextLegacyCount =
    normalizedLegacyCount

  const now =
    new Date().toISOString()

  if (checked && !alreadyChecked) {
    const currentTotal =
      assignedCount +
      normalizedLegacyCount

    /*
     * At the maximum, an existing legacy
     * count can be converted into a named
     * Spirit checkbox without increasing
     * the total.
     */
    if (currentTotal >= maximum) {
      if (
        normalizedLegacyCount <= 0
      ) {
        return current
      }

      nextLegacyCount =
        normalizedLegacyCount - 1
    }

    currentRecords[key] = {
      key,

      spiritKey:
        getWingBuffSpiritKey(
          spirit
        ),

      spiritId:
        spirit?.spiritId ||
        spirit?.spirit_id ||
        null,

      spiritName:
        resolveSpiritName(
          spirit
        ),

      spiritType: type,

      seasonId:
        spirit?.seasonId ||
        spirit?.season_id ||
        null,

      season:
        spirit?.season ||
        null,

      slotId,
      slotLabel,

      checkedAt:
        currentRecords[key]
          ?.checkedAt ||
        now,

      updatedAt: now,
    }
  } else if (
    !checked &&
    alreadyChecked
  ) {
    delete currentRecords[key]
  } else {
    /*
     * There was no checkbox change, but an
     * older overflowing legacy value may
     * still need normalization.
     */
    if (
      storedLegacyCount ===
      normalizedLegacyCount
    ) {
      return current
    }
  }

  return persistWingedLightProgress({
    ...current,

    updatedAt: now,

    wingBuffs: {
      ...current.wingBuffs,
      [type]: currentRecords,
    },

    legacyWingBuffCounts: {
      ...current
        .legacyWingBuffCounts,

      [type]: nextLegacyCount,
    },
  })
}

export function setWingBuffCount(
  type,
  value,
  maximum
) {
  if (
    type !== 'regular' &&
    type !== 'seasonal'
  ) {
    return readWingedLightProgress()
  }

  const current =
    readWingedLightProgress()

  const max =
    Math.max(
      0,
      normalizeCount(maximum)
    )

  /*
   * The value supplied by the UI is the
   * desired overall total, not the legacy
   * portion alone.
   */
  const desiredTotal =
    Math.min(
      max,
      normalizeCount(value)
    )

  const assignedCount =
    Object.keys(
      current.wingBuffs?.[
        type
      ] || {}
    ).length

  const nextLegacyCount =
    Math.max(
      0,
      desiredTotal -
        assignedCount
    )

  return persistWingedLightProgress({
    ...current,

    updatedAt:
      new Date().toISOString(),

    legacyWingBuffCounts: {
      ...current
        .legacyWingBuffCounts,

      [type]: nextLegacyCount,
    },
  })
}

export function resetWingedLightProgress() {
  const emptyProgress = {
    ...EMPTY_PROGRESS,
    updatedAt:
      new Date().toISOString(),
  }

  if (canUseStorage()) {
    try {
      window.localStorage.removeItem(
        WINGED_LIGHT_PROGRESS_STORAGE_KEY
      )
    } catch {
      return emptyProgress
    }
  }

  if (
    typeof window !== 'undefined'
  ) {
    window.dispatchEvent(
      new CustomEvent(
        WINGED_LIGHT_PROGRESS_EVENT,
        {
          detail: emptyProgress,
        }
      )
    )
  }

  return emptyProgress
}

export function subscribeWingedLightProgress(
  listener
) {
  if (
    typeof window === 'undefined'
  ) {
    return () => {}
  }

  const emitProgress = () => {
    listener(
      readWingedLightProgress()
    )
  }

  const handleStorage = (event) => {
    if (
      event.key ===
        WINGED_LIGHT_PROGRESS_STORAGE_KEY ||
      event.key === null
    ) {
      emitProgress()
    }
  }

  window.addEventListener(
    WINGED_LIGHT_PROGRESS_EVENT,
    emitProgress
  )

  window.addEventListener(
    'storage',
    handleStorage
  )

  return () => {
    window.removeEventListener(
      WINGED_LIGHT_PROGRESS_EVENT,
      emitProgress
    )

    window.removeEventListener(
      'storage',
      handleStorage
    )
  }
}
