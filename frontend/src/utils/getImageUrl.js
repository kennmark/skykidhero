const BACKEND_URL = (
  import.meta.env.VITE_BACKEND_URL ||
  "http://localhost:5000"
).replace(/\/+$/, "");

export function getImageUrl(image) {
  if (!image) {
    return "";
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://") ||
    image.startsWith("blob:")
  ) {
    return image;
  }

  const normalizedPath =
    image.startsWith("/")
      ? image
      : `/${image}`;

  return `${BACKEND_URL}${normalizedPath}`;
}