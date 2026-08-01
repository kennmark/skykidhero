import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

  timeout: 15000,
});

export async function getPublishedNews({
  page = 1,
  limit = 6,
  featured,
} = {}) {
  const params = {
    page,
    limit,
  };

  if (typeof featured === "boolean") {
    params.featured = featured;
  }

  const response = await api.get(
    "/news",
    {
      params,
    }
  );

  return {
    items: Array.isArray(response.data?.data)
      ? response.data.data
      : [],

    meta: response.data?.meta || {
      page,
      limit,
      total: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
}