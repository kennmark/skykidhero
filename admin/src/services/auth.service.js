import client from "../api/client";

export async function login(credentials) {
  const response = await client.post(
    "/auth/login",
    credentials
  );

  return response.data;
}