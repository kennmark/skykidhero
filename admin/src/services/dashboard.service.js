import client from "../api/client.js";

export async function getDashboardAnalytics() {
  const response = await client.get(
    "/admin/dashboard"
  );

  return response.data;
}