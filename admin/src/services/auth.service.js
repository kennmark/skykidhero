import client from "../api/client.js";

export async function login(credentials) {
  const response = await client.post(
    "/auth/login",
    credentials
  );

  const authData = response.data?.data;

  if (!authData?.token || !authData?.user) {
    throw new Error(
      response.data?.message ||
      "The server returned an invalid login response."
    );
  }

  return authData;
}