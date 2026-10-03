const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api"
).replace(/\/$/, "");

function getRequestErrorMessage(
  payload,
  status
) {
  return (
    payload?.message ||
    `Unable to load Winged Lights. (${status})`
  );
}

export async function getPublishedWingedLightsByMap(
  mapId,
  {
    signal,
  } = {}
) {
  if (
    mapId === null ||
    mapId === undefined ||
    mapId === ""
  ) {
    throw new Error(
      "A Map ID is required."
    );
  }

  const response =
    await fetch(
      `${API_URL}/maps/${encodeURIComponent(
        mapId
      )}/winged-lights`,
      {
        method: "GET",

        headers: {
          Accept:
            "application/json",
        },

        signal,
      }
    );

  let payload = null;

  try {
    payload =
      await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(
      getRequestErrorMessage(
        payload,
        response.status
      )
    );
  }

  return Array.isArray(
    payload?.data
  )
    ? payload.data
    : [];
}