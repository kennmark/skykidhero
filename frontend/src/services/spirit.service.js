import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

  timeout: 15000,
});

export async function getPublishedRegularSpirits(
  mapId
) {
  const response =
    await api.get(
      `/maps/${mapId}/spirits`
    );

  return Array.isArray(
    response.data?.data
  )
    ? response.data.data
    : [];
}