export function createPaginationMeta({
  page,
  limit,
  total,
}) {
  const totalPages = Math.ceil(total/limit)

  return {
    page,
    limit,
    total,
    totalPages,

    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  }
}