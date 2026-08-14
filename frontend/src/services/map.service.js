import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

  timeout: 15000,
});

export async function getPublishedMap(
  id,
  slug
) {
  const response =
    await api.get(
      `/maps/${id}/${slug}`
    );

  return response.data?.data ?? null;
}

export async function getPublishedMaps() {
  const response =
    await api.get("/maps");

  return Array.isArray(
    response.data?.data
  )
    ? response.data.data
    : [];
}