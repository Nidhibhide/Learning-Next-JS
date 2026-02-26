"use client";
import Select from "react-select";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { createParams } from "@/utils/ecommerce";

const SearchBar = ({ products, categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const selectedSearch = searchParams.get("search");
  const selectedSortBy = searchParams.get("sortBy");
  const selectedOrder = searchParams.get("order");

  const [ratingDir, setRatingDir] = useState("asc");
  const [priceDir, setPriceDir] = useState("asc");

  const categoryOptions = categories?.map((c) => ({
    value: c.slug,
    label: c.name,
  })) || [];

  const searchOptions = products?.map((p) => ({
  value: p.title,
  label: p.title,
}));

const selectedCategoryOption = categoryOptions.find(
  (opt) => opt.value === selectedCategory
);

const selectedSearchOption = searchOptions?.find(
  (opt) => opt.value === selectedSearch
);

useEffect(() => {
  if (selectedSortBy === "rating") {
    setRatingDir(selectedOrder || "asc");
  }
  if (selectedSortBy === "price") {
    setPriceDir(selectedOrder || "asc");
  }
}, [selectedSortBy, selectedOrder]);

  const updateUrl = (updates) => {
    const params = createParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.replace(`/project/products?${params.toString()}`);
  };

  const handleChange = (filterType, selectedOption) => {
    // Reset to page 1 when changing category or search
    const updates = { [filterType]: selectedOption?.value || "" };
    updateUrl({ ...updates, page: "1" });
  };

  const handleSort = (sortType, currentDir) => {
    const newDir = currentDir === "asc" ? "desc" : "asc";

    if (sortType === "rating") setRatingDir(newDir);
    if (sortType === "price") setPriceDir(newDir);

    // Reset to page 1 when changing sort
    updateUrl({
      sortBy: sortType,
      order: newDir,
      page: "1",
    });
  };
  const selectTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "#2563eb",
      primary25: "#e0f2fe",
      primary50: "#bae6fd",
    },
  });

  return (
    <div className="w-full bg-white shadow-md rounded-2xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 mt-3 sm:mt-6 md:mt-8 sticky top-0 z-50">
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 max-w-[1920px] mx-auto">
        {/* 🔍 SEARCH */}
        <div className="w-full md:flex-1 md:max-w-2xl px-0 md:px-4 py-2 md:py-0">
          <Select
            options={products?.map((p) => ({
              value: p.title,
              label: p.title,
            }))}
            placeholder="Search products..."
             value={selectedSearchOption || null}
            isClearable
            onChange={(opt) => handleChange("search", opt)}
            theme={selectTheme}
            styles={{
              control: (base) => ({
                ...base,
                fontSize: "1rem",
                padding: "0.25rem",
              }),
              input: (base) => ({
                ...base,
                fontSize: "1rem",
              }),
              placeholder: (base) => ({
                ...base,
                fontSize: "1rem",
              }),
              option: (base) => ({
                ...base,
                fontSize: "0.875rem",
              }),
            }}
          />
        </div>

        {/* 🎯 FILTERS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 ml-auto w-full sm:w-auto">
          <div className="w-full sm:w-40 lg:w-48 px-0 sm:px-2 py-2 sm:py-0">
            <Select
              options={categoryOptions}
              placeholder="Category"
              value={selectedCategoryOption || null}
              isClearable
              onChange={(opt) => handleChange("category", opt)}
              theme={selectTheme}
              styles={{
                control: (base) => ({
                  ...base,
                  fontSize: "0.875rem",
                  padding: "0.10rem",
                }),

                option: (base) => ({
                  ...base,
                  fontSize: "0.875rem",
                }),
              }}
            />
          </div>

          <div className="flex gap-2 justify-center sm:justify-start flex-wrap sm:flex-nowrap">
            <button
              onClick={() => handleSort("rating", ratingDir)}
              className="px-2 sm:px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm md:text-base rounded-lg hover:bg-blue-700 transition flex items-center gap-1 sm:gap-2 whitespace-nowrap"
            >
              {ratingDir === "asc" ? "↑" : "↓"} <span className="hidden xs:inline">Rating</span><span className="xs:hidden">Rate</span>
            </button>
            <button
              onClick={() => handleSort("price", priceDir)}
              className="px-2 sm:px-3 py-2 bg-gray-100 text-gray-700 text-xs sm:text-sm md:text-base rounded-lg hover:bg-gray-200 transition flex items-center gap-1 sm:gap-2 whitespace-nowrap"
            >
              {priceDir === "asc" ? "↑" : "↓"} <span className="hidden xs:inline">Price</span><span className="xs:hidden">Cost</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
