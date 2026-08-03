import {
  SPIRIT_CATALOG_BY_KEY,
} from '../data/spiritCatalog'

export const LEGACY_SPIRIT_STORAGE_KEY =
  'checkedSpirits'

export const SPIRIT_PROGRESS_STORAGE_KEY =
  'skykidhero:spirit-progress:v2'

export const SPIRIT_PROGRESS_EVENT =
  'skykidhero:spirit-progress-change'

const EMPTY_PROGRESS = {
  version: 2,
  updatedAt: null,
  spirits: {},
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

export function getSpiritProgressKey(
  spiritName
) {
  return String(spiritName || '')
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

function getCatalogSpirit(
  spiritName
) {
  const key =
    getSpiritProgressKey(
      spiritName
    )

  return (
    SPIRIT_CATALOG_BY_KEY[key] ||
    null
  )
}

function normalizeRecord(
  record,
  fallbackKey
) {
  const name =
    record?.name ||
    fallbackKey ||
    'Unknown Spirit'

  const key =
    record?.key ||
    getSpiritProgressKey(name)

  const catalogSpirit =
    getCatalogSpirit(name)

  return {
    key,
    name:
      catalogSpirit?.name ||
      name,
    canonicalId:
      record?.canonicalId ||
      catalogSpirit?.id ||
      record?.spiritId ||
      null,
    spiritId:
      record?.spiritId ||
      catalogSpirit?.id ||
      null,
    aliases:
      record?.aliases ||
      catalogSpirit?.aliases ||
      [],
    kind:
      catalogSpirit?.kind ||
      record?.kind ||
      'unknown',
    realm:
      catalogSpirit?.realm ||
      record?.realm ||
      null,
    collection:
      catalogSpirit?.collection ||
      record?.collection ||
      null,
    season:
      catalogSpirit?.season ||
      record?.season ||
      null,
    seasonId:
      record?.seasonId ??
      catalogSpirit?.seasonId ??
      null,
    year:
      record?.year ||
      catalogSpirit?.year ||
      null,
    route:
      record?.route ||
      catalogSpirit?.route ||
      null,
    image:
      record?.image ||
      null,
    category:
      record?.category ||
      null,
    reliveType:
      record?.reliveType ||
      null,
    checkedAt:
      record?.checkedAt ||
      null,
    updatedAt:
      record?.updatedAt ||
      null,
    source:
      record?.source ||
      'saved',
  }
}

function normalizeProgress(
  progress
) {
  const records =
    progress?.spirits &&
    typeof progress.spirits ===
      'object'
      ? progress.spirits
      : {}

  const spirits =
    Object.fromEntries(
      Object.entries(records)
        .map(([key, record]) => {
          const normalized =
            normalizeRecord(
              record,
              key
            )

          return [
            normalized.key,
            normalized,
          ]
        })
        .filter(
          ([key]) =>
            Boolean(key)
        )
    )

  return {
    version: 2,
    updatedAt:
      progress?.updatedAt ||
      null,
    spirits,
  }
}

function readLegacyCheckedSpirits() {
  if (!canUseStorage()) {
    return {}
  }

  return safeParse(
    window.localStorage.getItem(
      LEGACY_SPIRIT_STORAGE_KEY
    ),
    {}
  )
}

function createLegacyRecord(
  spiritName
) {
  const catalogSpirit =
    getCatalogSpirit(
      spiritName
    )

  const now =
    new Date().toISOString()

  return normalizeRecord(
    {
      key:
        getSpiritProgressKey(
          spiritName
        ),
      name:
        catalogSpirit?.name ||
        spiritName,
      canonicalId:
        catalogSpirit?.id ||
        null,
      aliases:
        catalogSpirit?.aliases ||
        [],
      kind:
        catalogSpirit?.kind ||
        'unknown',
      realm:
        catalogSpirit?.realm ||
        null,
      collection:
        catalogSpirit?.collection ||
        null,
      season:
        catalogSpirit?.season ||
        null,
      seasonId:
        catalogSpirit?.seasonId ??
        null,
      year:
        catalogSpirit?.year ||
        null,
      route:
        catalogSpirit?.route ||
        null,
      checkedAt: null,
      updatedAt: now,
      source: 'legacy-migration',
    },
    spiritName
  )
}

function mergeLegacyProgress(
  progress
) {
  const legacy =
    readLegacyCheckedSpirits()

  const nextSpirits = {
    ...progress.spirits,
  }

  let changed = false

  Object.entries(legacy)
    .filter(
      ([, checked]) =>
        checked === true
    )
    .forEach(
      ([spiritName]) => {
        const key =
          getSpiritProgressKey(
            spiritName
          )

        if (
          !key ||
          nextSpirits[key]
        ) {
          return
        }

        nextSpirits[key] =
          createLegacyRecord(
            spiritName
          )

        changed = true
      }
    )

  return {
    changed,
    progress: changed
      ? {
          ...progress,
          updatedAt:
            new Date()
              .toISOString(),
          spirits: nextSpirits,
        }
      : progress,
  }
}

function persistProgress(
  progress,
  {
    notify = true,
  } = {}
) {
  const normalized =
    normalizeProgress(
      progress
    )

  if (!canUseStorage()) {
    return normalized
  }

  try {
    window.localStorage.setItem(
      SPIRIT_PROGRESS_STORAGE_KEY,
      JSON.stringify(
        normalized
      )
    )
  } catch {
    return normalized
  }

  if (notify) {
    window.dispatchEvent(
      new CustomEvent(
        SPIRIT_PROGRESS_EVENT,
        {
          detail: normalized,
        }
      )
    )
  }

  return normalized
}

export function readSpiritProgress() {
  if (!canUseStorage()) {
    return EMPTY_PROGRESS
  }

  const saved =
    safeParse(
      window.localStorage.getItem(
        SPIRIT_PROGRESS_STORAGE_KEY
      ),
      EMPTY_PROGRESS
    )

  const normalized =
    normalizeProgress(
      saved
    )

  const migration =
    mergeLegacyProgress(
      normalized
    )

  if (migration.changed) {
    return persistProgress(
      migration.progress,
      {
        notify: false,
      }
    )
  }

  return migration.progress
}

function updateLegacyValue(
  spiritName,
  checked
) {
  if (!canUseStorage()) {
    return
  }

  const legacy =
    readLegacyCheckedSpirits()

  const nextLegacy = {
    ...legacy,
    [spiritName]:
      Boolean(checked),
  }

  try {
    window.localStorage.setItem(
      LEGACY_SPIRIT_STORAGE_KEY,
      JSON.stringify(
        nextLegacy
      )
    )
  } catch {
    // The structured progress store
    // can still work in memory.
  }
}

export function setSpiritChecked(
  spirit,
  checked
) {
  const name =
    spirit?.name ||
    spirit?.spiritName ||
    ''

  const key =
    getSpiritProgressKey(
      name
    )

  if (!key) {
    return readSpiritProgress()
  }

  const current =
    readSpiritProgress()

  const nextSpirits = {
    ...current.spirits,
  }

  updateLegacyValue(
    name,
    checked
  )

  if (!checked) {
    delete nextSpirits[key]

    return persistProgress({
      ...current,
      updatedAt:
        new Date()
          .toISOString(),
      spirits: nextSpirits,
    })
  }

  const now =
    new Date().toISOString()

  const catalogSpirit =
    getCatalogSpirit(name)

  const existing =
    nextSpirits[key]

  nextSpirits[key] =
    normalizeRecord(
      {
        ...existing,
        key,
        name:
          catalogSpirit?.name ||
          name,
        canonicalId:
          catalogSpirit?.id ||
          spirit?.spiritId ||
          existing?.canonicalId ||
          null,
        spiritId:
          spirit?.spiritId ||
          existing?.spiritId ||
          catalogSpirit?.id ||
          null,
        aliases:
          catalogSpirit?.aliases ||
          existing?.aliases ||
          [],
        kind:
          catalogSpirit?.kind ||
          spirit?.kind ||
          spirit?.type ||
          existing?.kind ||
          'unknown',
        realm:
          catalogSpirit?.realm ||
          spirit?.realm ||
          existing?.realm ||
          null,
        collection:
          catalogSpirit?.collection ||
          spirit?.collection ||
          existing?.collection ||
          null,
        season:
          catalogSpirit?.season ||
          spirit?.season ||
          existing?.season ||
          null,
        seasonId:
          spirit?.seasonId ??
          catalogSpirit?.seasonId ??
          existing?.seasonId ??
          null,
        year:
          spirit?.year ||
          catalogSpirit?.year ||
          existing?.year ||
          null,
        route:
          spirit?.route ||
          catalogSpirit?.route ||
          existing?.route ||
          (
            typeof window !==
              'undefined'
              ? window.location
                  .pathname
              : null
          ),
        image:
          spirit?.image ||
          existing?.image ||
          null,
        category:
          spirit?.category ||
          existing?.category ||
          null,
        reliveType:
          spirit?.reliveType ||
          existing?.reliveType ||
          null,
        checkedAt:
          existing?.checkedAt ||
          now,
        updatedAt: now,
        source:
          existing?.source ===
            'legacy-migration'
            ? 'enriched'
            : 'checklist',
      },
      key
    )

  return persistProgress({
    ...current,
    updatedAt: now,
    spirits: nextSpirits,
  })
}


export function resetSpiritProgress() {
  const emptyProgress = {
    version: 2,
    updatedAt:
      new Date().toISOString(),
    spirits: {},
  }

  if (!canUseStorage()) {
    return emptyProgress
  }

  try {
    window.localStorage.removeItem(
      LEGACY_SPIRIT_STORAGE_KEY
    )

    window.localStorage.removeItem(
      SPIRIT_PROGRESS_STORAGE_KEY
    )
  } catch {
    return emptyProgress
  }

  window.dispatchEvent(
    new CustomEvent(
      SPIRIT_PROGRESS_EVENT,
      {
        detail: emptyProgress,
      }
    )
  )

  return emptyProgress
}

export function subscribeSpiritProgress(
  listener
) {
  if (
    typeof window ===
    'undefined'
  ) {
    return () => {}
  }

  const handleProgressChange =
    () => {
      listener(
        readSpiritProgress()
      )
    }

  const handleStorage =
    (event) => {
      if (
        event.key ===
          SPIRIT_PROGRESS_STORAGE_KEY ||
        event.key ===
          LEGACY_SPIRIT_STORAGE_KEY ||
        event.key === null
      ) {
        handleProgressChange()
      }
    }

  window.addEventListener(
    SPIRIT_PROGRESS_EVENT,
    handleProgressChange
  )

  window.addEventListener(
    'storage',
    handleStorage
  )

  return () => {
    window.removeEventListener(
      SPIRIT_PROGRESS_EVENT,
      handleProgressChange
    )

    window.removeEventListener(
      'storage',
      handleStorage
    )
  }
}
