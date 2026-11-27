import client from "../api/client.js";

export async function getAdminSeasonalSpiritsBySeason(seasonId) {
  if (!seasonId) {
    throw new Error("A Season ID is required.");
  }

  const response = await client.get(
    `/admin/seasons/${seasonId}/spirits`
  );

  return response.data;
}

export async function getAdminSeasonalSpirit(spiritId) {
  if (!spiritId) {
    throw new Error("A Seasonal Spirit ID is required.");
  }

  const response = await client.get(
    `/admin/seasonal-spirits/${spiritId}`
  );

  return response.data;
}

export async function createAdminSeasonalSpirit(seasonId, data) {
  if (!seasonId) {
    throw new Error("A Season ID is required.");
  }

  const response = await client.post(
    `/admin/seasons/${seasonId}/spirits`,
    data
  );

  return response.data;
}

export async function updateAdminSeasonalSpirit(spiritId, data) {
  if (!spiritId) {
    throw new Error("A Seasonal Spirit ID is required.");
  }

  const response = await client.put(
    `/admin/seasonal-spirits/${spiritId}`,
    data
  );

  return response.data;
}

export async function uploadAdminSeasonalSpiritMedia(
  spiritId,
  slot,
  file
) {
  if (!spiritId) {
    throw new Error("A Seasonal Spirit ID is required.");
  }

  if (!slot || !["icon", "detail"].includes(slot)) {
    throw new Error("A valid Seasonal Spirit media slot is required.");
  }

  if (!file) {
    throw new Error("Please select an image.");
  }

  const formData = new FormData();
  formData.append("image", file);

  const response = await client.post(
    `/admin/seasonal-spirits/${spiritId}/media/${slot}`,
    formData
  );

  return response.data;
}

export async function removeAdminSeasonalSpiritMedia(
  spiritId,
  slot
) {
  if (!spiritId) {
    throw new Error("A Seasonal Spirit ID is required.");
  }

  if (!slot || !["icon", "detail"].includes(slot)) {
    throw new Error("A valid Seasonal Spirit media slot is required.");
  }

  const response = await client.delete(
    `/admin/seasonal-spirits/${spiritId}/media/${slot}`
  );

  return response.data;
}

/*
 * -------------------------------------------------------
 * Seasonal Spirit Collectibles
 * -------------------------------------------------------
 */

export async function updateAdminSeasonalSpiritCollectibles(
  spiritId,
  collectibles
) {
  if (!Number.isInteger(Number(spiritId)) || Number(spiritId) <= 0) {
    throw new Error("A valid Seasonal Spirit ID is required.");
  }

  if (!Array.isArray(collectibles)) {
    throw new Error("Collectibles must be provided as an array.");
  }

  const response = await client.put(
    `/admin/seasonal-spirits/${spiritId}/collectibles`,
    { collectibles }
  );

  return response.data;
}

export async function uploadAdminSeasonalSpiritCollectibleImage(
  spiritId,
  collectibleId,
  file
) {
  if (!Number.isInteger(Number(spiritId)) || Number(spiritId) <= 0) {
    throw new Error("A valid Seasonal Spirit ID is required.");
  }

  if (!Number.isInteger(Number(collectibleId)) || Number(collectibleId) <= 0) {
    throw new Error("A valid Collectible ID is required.");
  }

  if (!file) {
    throw new Error("Please select an image.");
  }

  const formData = new FormData();
  formData.append("image", file);

  const response = await client.post(
    `/admin/seasonal-spirits/${spiritId}/collectibles/${collectibleId}/image`,
    formData
  );

  return response.data;
}

export async function removeAdminSeasonalSpiritCollectibleImage(
  spiritId,
  collectibleId
) {
  if (!Number.isInteger(Number(spiritId)) || Number(spiritId) <= 0) {
    throw new Error("A valid Seasonal Spirit ID is required.");
  }

  if (!Number.isInteger(Number(collectibleId)) || Number(collectibleId) <= 0) {
    throw new Error("A valid Collectible ID is required.");
  }

  const response = await client.delete(
    `/admin/seasonal-spirits/${spiritId}/collectibles/${collectibleId}/image`
  );

  return response.data;
}

/*
 * -------------------------------------------------------
 * Seasonal Spirit Tree Costs
 * -------------------------------------------------------
 */

export async function updateAdminSeasonalSpiritTreeCosts(
  spiritId,
  treeCosts
) {
  if (!Number.isInteger(Number(spiritId)) || Number(spiritId) <= 0) {
    throw new Error("A valid Seasonal Spirit ID is required.");
  }

  if (!Array.isArray(treeCosts)) {
    throw new Error("Tree Costs must be provided as an array.");
  }

  const response = await client.put(
    `/admin/seasonal-spirits/${spiritId}/tree-costs`,
    { treeCosts }
  );

  return response.data;
}

/*
 * -------------------------------------------------------
 * Delete Seasonal Spirit (soft delete)
 * -------------------------------------------------------
 */

export async function deleteAdminSeasonalSpirit(spiritId) {
  if (!Number.isInteger(Number(spiritId)) || Number(spiritId) <= 0) {
    throw new Error("A valid Seasonal Spirit ID is required.");
  }

  const response = await client.delete(
    `/admin/seasonal-spirits/${spiritId}`
  );

  return response.data;
}
