import {
  WINGED_LIGHT,
} from "../exports/defaultImages";

function getLegacyId(
  wingedLight
) {
  const displayOrder =
    Number(
      wingedLight
        ?.displayOrder
    );

  if (
    Number.isInteger(
      displayOrder
    ) &&
    displayOrder > 0
  ) {
    return displayOrder;
  }

  return (
    wingedLight?.code ||
    wingedLight?.id ||
    null
  );
}

export function adaptPublicWingedLight(
  wingedLight
) {
  const legacyId =
    getLegacyId(
      wingedLight
    );

  return {
    /*
     * Keep the backend fields
     * available for future migration.
     */
    ...wingedLight,

    /*
     * Preserve the real Prisma ID
     * separately.
     */
    databaseId:
      wingedLight?.id ??
      null,

    /*
     * Legacy compatibility.
     *
     * Existing WL progress currently
     * uses realm group + old numeric
     * Map WL ID.
     *
     * displayOrder matches that old
     * Map-local numbering.
     */
    id: legacyId,

    wl_id: legacyId,

    wl_label:
      wingedLight?.label ||
      "Winged Light",

    wl_group:
      wingedLight?.groupKey ||
      null,

    wl_season_group:
      wingedLight
        ?.seasonGroupKey ||
      null,

    wl_url:
      wingedLight?.image ||
      WINGED_LIGHT,

    wl_location:
      Array.isArray(
        wingedLight
          ?.directions
      )
        ? wingedLight
            .directions
        : [],
  };
}

export function adaptPublicWingedLights(
  wingedLights
) {
  if (
    !Array.isArray(
      wingedLights
    )
  ) {
    return [];
  }

  return wingedLights
    .map(
      adaptPublicWingedLight
    )
    .sort(
      (first, second) =>
        (
          first.displayOrder ||
          0
        ) -
        (
          second.displayOrder ||
          0
        )
    );
}