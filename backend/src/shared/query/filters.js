export function getFilters(query) {
  return {
    search: query.search?.trim() || "",

    featured:
      query.featured === undefined
        ? undefined
        : query.featured === "true",

    published:
      query.published === undefined
        ? undefined
        : query.published === "true",
  };
}