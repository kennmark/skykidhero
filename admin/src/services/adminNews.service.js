import client from "../api/client";

export async function getAdminNews(params = {}) {
  const response = await client.get("/admin/news", {
    params,
  });

  return response.data;
}

export async function getNewsById(id) {
  const response = await client.get(`/admin/news/${id}`);

  return response.data;
}

export async function createNews(data) {
  const response = await client.post("/admin/news", data);

  return response.data;
}

export async function updateNews(id, data) {
  const response = await client.put(`/admin/news/${id}`, data);

  return response.data;
}

export async function deleteNews(id) {
  const response = await client.delete(`/admin/news/${id}`);

  return response.data;
}

export async function restoreNews(id) {
  const response = await client.patch(
    `/admin/news/${id}/restore`
  );

  return response.data;
}