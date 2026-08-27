import client
  from "../api/client.js";

export async function getAdminRegularSpiritsByMap(
  mapId
) {
  if (!mapId) {
    throw new Error(
      "A Map ID is required."
    );
  }

  const response =
    await client.get(
      `/admin/maps/${mapId}/spirits`
    );

  return response.data;
}

export async function getAdminRegularSpirit(
  spiritId
) {
  if (!spiritId) {
    throw new Error(
      "A Spirit ID is required."
    );
  }

  const response =
    await client.get(
      `/admin/spirits/${spiritId}`
    );

  return response.data;
}

export async function createAdminRegularSpirit(
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
      `/admin/maps/${mapId}/spirits`,
      data
    );

  return response.data;
}

export async function updateAdminRegularSpirit(
  spiritId,
  data
) {
  if (!spiritId) {
    throw new Error(
      "A Spirit ID is required."
    );
  }

  const response =
    await client.put(
      `/admin/spirits/${spiritId}`,
      data
    );

  return response.data;
}

export async function uploadAdminSpiritMedia(
  spiritId,
  slot,
  file
) {
  if (!spiritId) {
    throw new Error(
      "A Spirit ID is required."
    );
  }

  if (!slot) {
    throw new Error(
      "A Spirit media slot is required."
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
      `/admin/spirits/${spiritId}/media/${slot}`,
      formData
    );

  return response.data;
}

export async function removeAdminSpiritMedia(
  spiritId,
  slot
) {
  if (!spiritId) {
    throw new Error(
      "A Spirit ID is required."
    );
  }

  if (!slot) {
    throw new Error(
      "A Spirit media slot is required."
    );
  }

  const response =
    await client.delete(
      `/admin/spirits/${spiritId}/media/${slot}`
    );

  return response.data;
}

export async function updateAdminSpiritCollectibles(
  spiritId,
  collectibles
) {
  if (!spiritId) {
    throw new Error(
      "A Spirit ID is required."
    );
  }

  const response =
    await client.put(
      `/admin/spirits/${spiritId}/collectibles`,
      {
        collectibles,
      }
    );

  return response.data;
}

export async function updateAdminSpiritTreeCosts(
  spiritId,
  treeCosts
) {
  if (!spiritId) {
    throw new Error(
      "A Spirit ID is required."
    );
  }

  const response =
    await client.put(
      `/admin/spirits/${spiritId}/tree-costs`,
      {
        treeCosts,
      }
    );

  return response.data;
}

export async function uploadAdminSpiritCollectibleImage(
  spiritId,
  collectibleId,
  file
) {
  if (!spiritId) {
    throw new Error(
      "A Spirit ID is required."
    );
  }

  if (!collectibleId) {
    throw new Error(
      "A Collectible ID is required."
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
      `/admin/spirits/${spiritId}/collectibles/${collectibleId}/image`,
      formData
    );

  return response.data;
}

export async function removeAdminSpiritCollectibleImage(
  spiritId,
  collectibleId
) {
  if (!spiritId) {
    throw new Error(
      "A Spirit ID is required."
    );
  }

  if (!collectibleId) {
    throw new Error(
      "A Collectible ID is required."
    );
  }

  const response =
    await client.delete(
      `/admin/spirits/${spiritId}/collectibles/${collectibleId}/image`
    );

  return response.data;
}