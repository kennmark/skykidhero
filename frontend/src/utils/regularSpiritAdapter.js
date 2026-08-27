function enumToLegacy(
  value
) {
  return String(
    value ?? ""
  )
    .trim()
    .toLowerCase()
    .replaceAll(
      "_",
      "-"
    );
}

function currencyToLegacy(
  value
) {
  const currencyMap = {
    CANDLES:
      "Candles",

    HEARTS:
      "Hearts",

    SEASON_CANDLES:
      "Season Candles",

    FREE:
      "Free",
  };

  return (
    currencyMap[value] ??
    value ??
    ""
  );
}

function adaptCollectibles(
  collectibles,
  legacyCollectibles = []
) {
  if (
    !Array.isArray(
      collectibles
    )
  ) {
    return [];
  }

  return collectibles.map(
    (
      collectible,
      index
    ) => {
      const legacy =
        legacyCollectibles[
          index
        ];

      return {
        label:
          collectible.label,

        /*
         * DB image wins once
         * collectible media is
         * uploaded through CMS.
         *
         * Until then preserve the
         * existing frontend asset.
         */
        img:
          collectible.image ||
          legacy?.img ||
          "",

        currency:
          currencyToLegacy(
            collectible.currency
          ),

        price:
          collectible.price ??
          0,
      };
    }
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
    legacySpirit = null,
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
     * Preserve code such as isle1.
     * Spirit progress/localStorage
     * depends on this stable value.
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
     * CMS media is authoritative.
     *
     * Static asset remains only as
     * transitional fallback while
     * icons/details are uploaded.
     */
    spirit_img_url:
      apiSpirit.iconImage ||
      legacySpirit
        ?.spirit_img_url ||
      "",

    spirit_image:
      apiSpirit.detailImage ||
      legacySpirit
        ?.spirit_image ||
      "",

    spirit_guide_video_url:
      apiSpirit.guideVideoUrl ||
      "",

    spirit_direction:
      Array.isArray(
        apiSpirit.directions
      )
        ? apiSpirit.directions
        : [],

    spirit_collectibles:
      adaptCollectibles(
        apiSpirit.collectibles,
        legacySpirit
          ?.spirit_collectibles
      ),

    spirit_tree_cost:
      adaptTreeCosts(
        apiSpirit.treeCosts
      ),

    /*
     * Regular Spirit "visits" were
     * never actual Traveling Spirit
     * visits. Derive the realm display
     * instead of storing it.
     */
    number_of_visits:
      mapName
        ? [
            {
              visit_date:
                mapName,

              visitNo:
                "",
            },
          ]
        : [],

    constellation_icon_route:
      mapData
        ?.mapConstellationIcon ||
      apiSpirit.map
        ?.mapConstellationIcon ||
      legacySpirit
        ?.constellation_icon_route ||
      "",
  };
}

export function adaptRegularSpirits(
  apiSpirits,
  {
    legacySpirits = [],
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

  const legacyByCode =
    new Map(
      legacySpirits.map(
        (spirit) => [
          spirit.spirit_id,
          spirit,
        ]
      )
    );

  return apiSpirits
    .map((apiSpirit) =>
      adaptRegularSpirit(
        apiSpirit,
        {
          legacySpirit:
            legacyByCode.get(
              apiSpirit.code
            ) ?? null,

          mapData,
        }
      )
    )
    .filter(Boolean);
}