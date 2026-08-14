import client from "../api/client.js";

export async function getAdminMaps() {
  const response =
    await client.get("/admin/maps");

  return response.data;
}

export async function getAdminMapById(id) {
  const response =
    await client.get(
      `/admin/maps/${id}`
    );

  return response.data;
}

export async function updateAdminMap(
  id,
  data
) {
  const response =
    await client.put(
      `/admin/maps/${id}`,
      data
    );

  return response.data;
}

export async function updateAdminMapSection(
  mapId,
  type,
  data
) {
  const response =
    await client.put(
      `/admin/maps/${mapId}/sections/${type}`,
      data
    );

  return response.data;
}

export async function uploadAdminMapMedia(
  mapId,
  slot,
  file
) {
  if (!mapId) {
    throw new Error(
      "Map ID is required."
    );
  }

  if (!file) {
    throw new Error(
      "Please select an image."
    );
  }

  const formData =
    new FormData();

  formData.append(
    "image",
    file
  );

  const response =
    await client.post(
      `/admin/maps/${mapId}/media/${slot}`,
      formData
    );

  return response.data;
}

export async function removeAdminMapMedia(
  mapId,
  slot
) {
  if (!mapId) {
    throw new Error(
      "Map ID is required."
    );
  }

  const response =
    await client.delete(
      `/admin/maps/${mapId}/media/${slot}`
    );

  return response.data;
}