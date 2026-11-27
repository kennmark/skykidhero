import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",
  timeout: 15000,
});

/**
 * Retrieve a Season's published Seasonal Spirits by its stable
 * Season.number value, not the database primary key. The Step 7
 * backend endpoint returns each spirit's public detail projection,
 * including collectibles and Spirit Tree costs, in one request.
 */
export async function getPublishedSeasonalSpirits(
  seasonNumber,
  { signal } = {},
) {
  if (
    seasonNumber === null ||
    seasonNumber === undefined ||
    seasonNumber === ""
  ) {
    return [];
  }

  const normalizedSeasonNumber = Number(seasonNumber);

  if (
    !Number.isInteger(normalizedSeasonNumber) ||
    normalizedSeasonNumber <= 0
  ) {
    throw new Error("A valid Season number is required.");
  }

  const response = await api.get(
    `/seasons/by-number/${encodeURIComponent(normalizedSeasonNumber)}/spirits`,
    { signal },
  );

  const spirits = Array.isArray(response.data?.data)
    ? response.data.data
    : [];

  return spirits.sort((left, right) => {
    const leftOrder = Number(left?.displayOrder ?? 0);
    const rightOrder = Number(right?.displayOrder ?? 0);

    return leftOrder - rightOrder;
  });
}

/**
 * Fetch one published Seasonal Spirit by its globally unique code.
 * Kept for any public UI that needs a single detail record.
 */
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
