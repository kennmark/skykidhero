export function getSorting(
  query,
  defaults = {
    field: "publishedAt",
    direction: "desc",
  }
) {
  const field = query.sort ?? defaults.field
  const direction = query.order === "asc" ? "asc":"desc"

  return {
    field,
    direction,
  }
}