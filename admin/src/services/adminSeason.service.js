import client from "../api/client";

export async function getAdminSeasons() {
  const response = await client.get("/admin/seasons");

  return response.data;
}

export async function getAdminSeason(id) {
  const response = await client.get(
    `/admin/seasons/${id}`,
  );

  return response.data;
}

export async function createAdminSeason(data) {
  const response = await client.post(
    "/admin/seasons",
    data,
  );

  return response.data;
}

export async function updateAdminSeason(id, data) {
  const response = await client.put(
    `/admin/seasons/${id}`,
    data,
  );

  return response.data;
}

export async function uploadAdminSeasonMedia(
  id,
  mediaType,
  file,
) {
  const formData = new FormData();

  formData.append(
    "image",
    file,
  );

  const response =
    await client.post(
      `/admin/seasons/${id}/${mediaType}`,
      formData,
    );

  return response.data;
}

export async function removeAdminSeasonMedia(
  id,
  mediaType,
) {
  const response =
    await client.delete(
      `/admin/seasons/${id}/${mediaType}`,
    );

  return response.data;
}