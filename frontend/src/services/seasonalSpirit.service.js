import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",
  timeout: 15000,
});

/**
 * Retrieve the published Seasonal Spirit list for a season, then hydrate
 * each item through the public detail endpoint. The list endpoint is kept
 * lightweight and does not include collectibles or Spirit Tree costs.
 */
export async function getPublishedSeasonalSpirits(
  seasonId,
  { signal } = {},
) {
  if (
    seasonId === null ||
    seasonId === undefined ||
    seasonId === ""
  ) {
    return [];
  }

  const listResponse = await api.get(
    `/seasons/${encodeURIComponent(seasonId)}/spirits`,
    { signal },
  );

  const spirits = Array.isArray(listResponse.data?.data)
    ? listResponse.data.data
    : [];

  const detailedSpirits = await Promise.all(
    spirits.map(async (spirit) => {
      if (!spirit?.code) {
        return spirit;
      }

      try {
        const detailResponse = await api.get(
          `/seasonal-spirits/${encodeURIComponent(spirit.code)}`,
          { signal },
        );

        return detailResponse.data?.data ?? spirit;
      } catch (error) {
        // A navigation cancellation should stop the whole request chain.
        if (signal?.aborted) {
          throw error;
        }

        // Keep the list record usable when one detail request fails.
        console.warn(
          `Unable to load details for Seasonal Spirit ${spirit.code}:`,
          error,
        );

        return spirit;
      }
    }),
  );

  return detailedSpirits.sort((left, right) => {
    const leftOrder = Number(left?.displayOrder ?? 0);
    const rightOrder = Number(right?.displayOrder ?? 0);

    return leftOrder - rightOrder;
  });
}

export async function getPublishedSeasonalSpirit(
  code,
  { signal } = {},
) {
  if (!code) {
    throw new Error("A Seasonal Spirit code is required.");
  }

  const response = await api.get(
    `/seasonal-spirits/${encodeURIComponent(code)}`,
    { signal },
  );

  return response.data?.data ?? null;
}
