import { getPagination } from "./pagination.js";
import { getSorting } from './sorting.js';
import { getFilters } from './filters.js';

export function buildQuery(query) {
  return {
    pagination: getPagination(query),
    sorting: getSorting(query),
    filters: getFilters(query),
  }
}