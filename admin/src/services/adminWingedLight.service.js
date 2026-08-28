import client
  from "../api/client.js";

export async function getAdminWingedLightsByMap(
  mapId
) {
  if (!mapId) {
    throw new Error(
      "A Map ID is required."
    );
  }

  const response =
    await client.get(
      `/admin/maps/${mapId}/winged-lights`
    );

  return response.data;
}

export async function getAdminWingedLight(
  wingedLightId
) {
  if (!wingedLightId) {
    throw new Error(
      "A Winged Light ID is required."
    );
  }

  const response =
    await client.get(
      `/admin/winged-lights/${wingedLightId}`
    );

  return response.data;
}

export async function createAdminWingedLight(
  mapId,
  data
) {
  if (!mapId) {
    throw new Error(
      "A Map ID is required."
    );
  }

  const response =
    await client.post(
      `/admin/maps/${mapId}/winged-lights`,
      data
    );

  return response.data;
}

export async function updateAdminWingedLight(
  wingedLightId,
  data
) {
  if (!wingedLightId) {
    throw new Error(
      "A Winged Light ID is required."
    );
  }

  const response =
    await client.put(
      `/admin/winged-lights/${wingedLightId}`,
      data
    );

  return response.data;
}

export async function uploadAdminWingedLightImage(
  wingedLightId,
  file
) {
  if (!wingedLightId) {
    throw new Error(
      "A Winged Light ID is required."
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
      `/admin/winged-lights/${wingedLightId}/image`,
      formData
    );

  return response.data;
}

export async function removeAdminWingedLightImage(
  wingedLightId
) {
  if (!wingedLightId) {
    throw new Error(
      "A Winged Light ID is required."
    );
  }

  const response =
    await client.delete(
      `/admin/winged-lights/${wingedLightId}/image`
    );

  return response.data;
}

export async function getArchivedAdminWingedLightsByMap(
  mapId
) {
  if (!mapId) {
    throw new Error(
      "A Map ID is required."
    );
  }

  const response =
    await client.get(
      `/admin/maps/${mapId}/winged-lights/archived`
    );

  return response.data;
}

export async function archiveAdminWingedLight(
  wingedLightId
) {
  if (!wingedLightId) {
    throw new Error(
      "A Winged Light ID is required."
    );
  }

  const response =
    await client.delete(
      `/admin/winged-lights/${wingedLightId}`
    );

  return response.data;
}

export async function restoreAdminWingedLight(
  wingedLightId
) {
  if (!wingedLightId) {
    throw new Error(
      "A Winged Light ID is required."
    );
  }

  const response =
    await client.post(
      `/admin/winged-lights/${wingedLightId}/restore`
    );

  return response.data;
}