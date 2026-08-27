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
    SEASON_CANDLES:
      "Season Candles",
    FREE: "Free",
  };

  return (
    currencyMap[value] ??
    value ??
    ""
  );
}

function adaptCollectibles(
  collectibles
) {
  if (
    !Array.isArray(
      collectibles
    )
  ) {
    return [];
  }

  return collectibles.map(
    (collectible) => ({
      label:
        collectible.label,

      /*
       * Collectible media now comes
       * entirely from the CMS.
       */
      img:
        collectible.image ??
        "",

      currency:
        currencyToLegacy(
          collectible.currency
        ),

      price:
        collectible.price ??
        0,
    })
  );
}

function adaptTreeCosts(
  treeCosts
) {
  if (
    !Array.isArray(
      treeCosts
    )
  ) {
    return [];
  }

  return treeCosts.map(
    (treeCost) => ({
      candles:
        treeCost.candles ??
        0,

      hearts:
        treeCost.hearts ??
        0,

      ascended_candles:
        treeCost
          .ascendedCandles ??
        0,
    })
  );
}

export function adaptRegularSpirit(
  apiSpirit,
  {
    mapData = null,
  } = {}
) {
  if (!apiSpirit) {
    return null;
  }

  const mapName =
    mapData?.name ||
    apiSpirit.map?.name ||
    "";

  return {
    /*
     * Keep the stable code:
     * isle1, prairie1, etc.
     *
     * Existing Spirit progress
     * tracking depends on it.
     */
    spirit_id:
      apiSpirit.code,

    season_id:
      "season-0",

    spirit_type:
      "regular",

    spirit_name:
      apiSpirit.name,

    spirit_category:
      enumToLegacy(
        apiSpirit.category
      ),

    spirit_relive_type:
      enumToLegacy(
        apiSpirit.reliveType
      ),

    difficulty_level:
      apiSpirit
        .difficultyLevel ??
      0,

    difficulty_types:
      Array.isArray(
        apiSpirit.difficultyTypes
      )
        ? apiSpirit
            .difficultyTypes
        : [],

    /*
     * No static fallback anymore.
     */
    spirit_img_url:
      apiSpirit.iconImage ??
      "",

    spirit_image:
      apiSpirit.detailImage ??
      "",

    spirit_guide_video_url:
      apiSpirit.guideVideoUrl ??
      "",

    spirit_direction:
      Array.isArray(
        apiSpirit.directions
      )
        ? apiSpirit.directions
        : [],

    spirit_collectibles:
      adaptCollectibles(
        apiSpirit.collectibles
      ),

    spirit_tree_cost:
      adaptTreeCosts(
        apiSpirit.treeCosts
      ),

    /*
     * Regular Spirits don't have
     * Traveling Spirit visits.
     * Keep the realm display derived.
     */
    number_of_visits:
      mapName
        ? [
            {
              visit_date:
                mapName,
              visitNo: "",
            },
          ]
        : [],

    constellation_icon_route:
      mapData
        ?.mapConstellationIcon ||
      apiSpirit.map
        ?.mapConstellationIcon ||
      "",
  };
}

export function adaptRegularSpirits(
  apiSpirits,
  {
    mapData = null,
  } = {}
) {
  if (
    !Array.isArray(
      apiSpirits
    )
  ) {
    return [];
  }

  return apiSpirits
    .map((apiSpirit) =>
      adaptRegularSpirit(
        apiSpirit,
        {
          mapData,
        }
      )
    )
    .filter(Boolean);
}