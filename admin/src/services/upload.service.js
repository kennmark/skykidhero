import client from "../api/client.js";

export async function uploadNewsImage(file) {
  if (!file) {
    throw new Error("Please select an image.");
  }

  const formData = new FormData();

  formData.append("image", file);

  const response = await client.post(
    "/uploads/news",
    formData
  );

  // Supports both:
  // { data: { url, filename } }
  // and { url, filename }
  return response.data?.data ?? response.data;
}