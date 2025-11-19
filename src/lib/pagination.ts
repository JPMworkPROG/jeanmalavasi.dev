export const PAGINATION_CONFIG = {
   ITEMS_PER_PAGE: 1,
   DEFAULT_PAGE: 1,
   MIN_PAGE: 1,
} as const;

export interface PaginationSearchParams {
   page: number;
}

export function validatePaginationSearch(
   search: Record<string, unknown>
): PaginationSearchParams {
   const page = search.page;

   if (typeof page === 'string') {
      const parsed = parseInt(page, 10);
      if (!isNaN(parsed) && parsed >= PAGINATION_CONFIG.MIN_PAGE) {
         return { page: parsed };
      }
   } else if (typeof page === 'number' && page >= PAGINATION_CONFIG.MIN_PAGE) {
      return { page };
   }

   return { page: PAGINATION_CONFIG.DEFAULT_PAGE };
}

export function getPaginatedItems<T>(
   items: T[],
   currentPage: number,
   itemsPerPage: number = PAGINATION_CONFIG.ITEMS_PER_PAGE
) {
   const totalPages = Math.ceil(items.length / itemsPerPage);
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const paginatedItems = items.slice(startIndex, endIndex);

   return {
      items: paginatedItems,
      totalPages,
      startIndex,
      endIndex,
      totalItems: items.length,
   };
}

