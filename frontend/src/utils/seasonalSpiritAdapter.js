function normalizeName(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function enumToLegacy(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replaceAll("_", "-");
}

function currencyToLegacy(value) {
  const currencyMap = {
    CANDLES: "Candles",
    HEARTS: "Hearts",
    SEASON_CANDLES: "Season Candles",
    FREE: "Free",
  };

  return currencyMap[value] ?? value ?? "";
}

function adaptCollectibles(collectibles) {
  if (!Array.isArray(collectibles)) {
    return [];
  }

  return collectibles.map((collectible) => ({
    id: collectible.id,
    label: collectible.label ?? "",
    img: collectible.image ?? "",
    currency: currencyToLegacy(collectible.currency),
    price: collectible.price ?? 0,
    displayOrder: collectible.displayOrder ?? 0,
  }));
}

function adaptTreeCosts(treeCosts) {
  if (!Array.isArray(treeCosts)) {
    return [];
  }

  return treeCosts.map((treeCost) => ({
    id: treeCost.id,
    candles: treeCost.candles ?? 0,
    hearts: treeCost.hearts ?? 0,
    ascended_candles: treeCost.ascendedCandles ?? 0,
    displayOrder: treeCost.displayOrder ?? 0,
  }));
}

function createLegacySeasonId(season) {
  const seasonNumber = season?.number ?? season?.id;

  return seasonNumber === null || seasonNumber === undefined
    ? undefined
    : `season-${seasonNumber}`;
}

/**
 * Convert a published Seasonal Spirit API record to the legacy shape used
 * by SpiritCardContainer and SpiritImageDetails. Legacy-only fields such as
 * Traveling Spirit visit history are retained when a matching static record
 * exists because they are not part of the Seasonal Spirit CMS model.
 */
export function adaptSeasonalSpirit(
  apiSpirit,
  {
    season = null,
    legacySpirit = null,
  } = {},
) {
  if (!apiSpirit) {
    return legacySpirit;
  }

  const hasCollectibles = Array.isArray(apiSpirit.collectibles);
  const hasTreeCosts = Array.isArray(apiSpirit.treeCosts);

  return {
    ...(legacySpirit ?? {}),

    spirit_id: apiSpirit.code ?? legacySpirit?.spirit_id,
    season_id:
      createLegacySeasonId(apiSpirit.season ?? season) ??
      legacySpirit?.season_id,
    spirit_type: "seasonal",

    spirit_name: apiSpirit.name ?? legacySpirit?.spirit_name ?? "",
    spirit_category:
      enumToLegacy(apiSpirit.category) ||
      legacySpirit?.spirit_category ||
      "",
    spirit_relive_type:
      enumToLegacy(apiSpirit.reliveType) ||
      legacySpirit?.spirit_relive_type ||
      "",

    difficulty_level:
      apiSpirit.difficultyLevel ??
      legacySpirit?.difficulty_level ??
      0,
    difficulty_types: Array.isArray(apiSpirit.difficultyTypes)
      ? apiSpirit.difficultyTypes
      : legacySpirit?.difficulty_types ?? [],

    spirit_img_url:
      apiSpirit.iconImage ?? legacySpirit?.spirit_img_url ?? "",
    spirit_image:
      apiSpirit.detailImage ?? legacySpirit?.spirit_image ?? "",
    spirit_guide_video_url:
      apiSpirit.guideVideoUrl ??
      legacySpirit?.spirit_guide_video_url ??
      "",
    spirit_direction: Array.isArray(apiSpirit.directions)
      ? apiSpirit.directions
      : legacySpirit?.spirit_direction ?? [],

    spirit_collectibles: hasCollectibles
      ? adaptCollectibles(apiSpirit.collectibles)
      : legacySpirit?.spirit_collectibles ?? [],
    spirit_tree_cost: hasTreeCosts
      ? adaptTreeCosts(apiSpirit.treeCosts)
      : legacySpirit?.spirit_tree_cost ?? [],

    // These fields remain legacy-backed; the Seasonal Spirit API does not
    // currently store historical Traveling Spirit visit records.
    number_of_visits: legacySpirit?.number_of_visits ?? [],
    constellation_icon_route:
      legacySpirit?.constellation_icon_route ?? "",
  };
}

/**
 * Merge CMS records with the current static Season archive.
 *
 * Published CMS records appear first in displayOrder. Matching records
 * replace their static counterpart. Static-only records remain visible while
 * a season is being migrated, and newly created CMS records are appended as
 * published entries even when no static counterpart exists.
 */
export function mergeSeasonalSpirits(
  legacySpirits,
  apiSpirits,
  season = null,
) {
  const legacy = Array.isArray(legacySpirits)
    ? legacySpirits
    : [];
  const published = Array.isArray(apiSpirits)
    ? apiSpirits
    : [];

  if (published.length === 0) {
    return legacy;
  }

  const usedLegacyIndexes = new Set();

  const cmsFirst = published.map((apiSpirit) => {
    const apiName = normalizeName(apiSpirit?.name);

    let legacyIndex = legacy.findIndex(
      (candidate, index) =>
        !usedLegacyIndexes.has(index) &&
        apiName &&
        normalizeName(candidate?.spirit_name) === apiName,
    );

    // displayOrder also provides a stable fallback for records whose CMS
    // display name differs slightly from the historical static label.
    if (legacyIndex < 0) {
      const orderIndex = Number(apiSpirit?.displayOrder) - 1;

      if (
        Number.isInteger(orderIndex) &&
        orderIndex >= 0 &&
        orderIndex < legacy.length &&
        !usedLegacyIndexes.has(orderIndex)
      ) {
        legacyIndex = orderIndex;
      }
    }

    const legacySpirit =
      legacyIndex >= 0 ? legacy[legacyIndex] : null;

    if (legacyIndex >= 0) {
      usedLegacyIndexes.add(legacyIndex);
    }

    return adaptSeasonalSpirit(apiSpirit, {
      season,
      legacySpirit,
    });
  });

  const staticFallbacks = legacy.filter(
    (_spirit, index) => !usedLegacyIndexes.has(index),
  );

  return [...cmsFirst, ...staticFallbacks];
}
