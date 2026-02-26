/**
 * Creates URLSearchParams from existing params
 * @param {URLSearchParams|string} searchParams - Existing search params
 * @returns {URLSearchParams}
 */
export const createParams = (searchParams) => {
  return new URLSearchParams(
    searchParams instanceof URLSearchParams
      ? searchParams.toString()
      : searchParams || ""
  );
};

// Base URL for DummyJSON API
export const BASE_URL = "https://dummyjson.com/products";
