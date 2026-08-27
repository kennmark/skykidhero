export const PUBLIC_SITE_URL =
  (
    import.meta.env
      .VITE_PUBLIC_SITE_URL ||
    (
      import.meta.env.PROD
        ? "https://skykidhero.onrender.com"
        : "http://localhost:5173"
    )
  ).replace(/\/$/, "");

export function getPublicMapUrl(
  map
) {
  if (!map?.id || !map?.slug) {
    return PUBLIC_SITE_URL;
  }

  return `${PUBLIC_SITE_URL}/maps/${map.id}/${map.slug}`;
}