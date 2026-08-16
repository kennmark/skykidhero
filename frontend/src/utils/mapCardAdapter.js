import { maps } from "../data/maps";

const STATIC_MAP_CARDS =
  maps.filter((card) =>
    card.pageRoute?.startsWith(
      "maps/"
    )
  );

export const FEATURED_SEASON_CARD =
  maps.find((card) =>
    card.pageRoute?.startsWith(
      "seasons/"
    )
  ) ?? null;

function findStaticFallback(
  apiMap
) {
  const canonicalRoute =
    `maps/${apiMap.id}/${apiMap.slug}`;

  return STATIC_MAP_CARDS.find(
    (card) =>
      card.pageRoute ===
      canonicalRoute
  );
}

export function createMapCard(
  apiMap
) {
  const fallback =
    findStaticFallback(apiMap);

  return {
    /*
     * Canonical backend identity.
     */
    id: apiMap.id,

    title:
      apiMap.name ||
      fallback?.title ||
      "",

    subtitle:
      apiMap.subtitle ||
      fallback?.subtitle ||
      "",

    /*
     * Prefer uploaded Map media.
     *
     * Map GIF
     * → main image
     * → old static GIF
     */
    img:
      apiMap.mapGif || "",

    alt:
      apiMap.imageAlt ||
      fallback?.alt ||
      apiMap.name ||
      "Map image",

    caption:
      apiMap.caption ||
      fallback?.caption ||
      "",

    pageRoute:
      `maps/${apiMap.id}/${apiMap.slug}`,

    /*
     * Keep the existing realm-specific
     * visual classes for now.
     */
    group:
      fallback?.group ||
      "shadow-8",

    /*
     * Counts remain static until the
     * Spirit, Winged Light, and Shrine
     * tables exist.
     */
    num_of_wls:
      fallback?.num_of_wls ?? 0,

    num_of_reg_spirits:
      fallback
        ?.num_of_reg_spirits ?? 0,

    num_of_season_spirits:
      fallback
        ?.num_of_season_spirits ?? 0,

    num_of_map_shrines:
      fallback
        ?.num_of_map_shrines ?? 0,
  };
}

export function createMapCards(
  apiMaps
) {
  if (!Array.isArray(apiMaps)) {
    return [];
  }

  return [...apiMaps]
    .sort(
      (a, b) =>
        a.displayOrder -
        b.displayOrder
    )
    .map(createMapCard);
}

export function getStaticMapCards() {
  return STATIC_MAP_CARDS;
}

export function createHomeMapCards(
  mapCards
) {
  /*
   * Preserve the existing Homepage order:
   *
   * Aviary
   * Featured Season
   * Isle
   * Prairie
   * Forest
   * Valley
   * Wasteland
   * Vault
   * Eden
   */

  const aviary =
    mapCards.find(
      (map) => map.id === 8
    );

  const kingdomMaps =
    mapCards.filter(
      (map) => map.id !== 8
    );

  return [
    ...(aviary
      ? [aviary]
      : []),

    ...(FEATURED_SEASON_CARD
      ? [FEATURED_SEASON_CARD]
      : []),

    ...kingdomMaps,
  ];
}