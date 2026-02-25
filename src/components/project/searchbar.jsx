"use client";
import Select from "react-select";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = ({ products, onFilter }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryOptions = [...new Set(products?.map((p) => p.category))].map(
    (c) => ({ value: c, label: c }),
  );

  const handleChange = (filterType, selectedOption) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedOption) {
      params.set(filterType, selectedOption.value);
    } else {
      params.delete(filterType);
    }
    router.replace(`/project/products?${params.toString()}`);
  };

  const handleSort = (sortType) => {
    onFilter?.("sort", { value: sortType, label: sortType });
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
    <div className="w-full bg-white shadow-md rounded-2xl px-4 md:px-6 py-4 md:py-5 mt-4 md:mt-8 sticky top-0 z-50">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 max-w-[1920px] mx-auto">
        {/* 🔍 SEARCH */}
        <div className="w-full lg:flex-1 lg:max-w-lg px-0 lg:px-4 py-2 lg:py-0">
          <Select
            options={products?.map((p) => ({
              value: p.title,
              label: p.title,
            }))}
            placeholder="Search products..."
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
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 ml-auto w-full sm:w-auto lg:w-xl">
          <div className="w-full sm:w-40 lg:w-48 px-0 sm:px-2 py-2 sm:py-0">
            <Select
              options={categoryOptions}
              placeholder="Category"
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

          <div className="flex gap-2 justify-center sm:justify-start">
            <button
              onClick={() => handleSort("rating-desc")}
              className="px-3 py-2 md:px-4 md:py-2 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700 transition flex-1 sm:flex-none"
            >
              ↓ Rating
            </button>
            <button
              onClick={() => handleSort("price-asc")}
              className="px-3 py-2 md:px-4 md:py-2 bg-gray-100 text-gray-700 text-sm md:text-base rounded-lg hover:bg-gray-200 transition flex-1 sm:flex-none"
            >
              ↑ Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
