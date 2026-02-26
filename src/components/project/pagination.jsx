"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { createParams } from "@/utils/ecommerce";

const Pagination = ({ currentPage = 1, totalPages = 1 }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    const params = createParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8 mb-6 sm:mb-8">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border bg-gray-200 disabled:opacity-50 text-sm font-medium">
        ← Prev
      </button>
      
      <span className="px-2 sm:px-3 py-1 text-sm text-gray-600">
        {currentPage} / {totalPages}
      </span>
      
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
        className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border bg-gray-200 disabled:opacity-50 text-sm font-medium">
        Next →
      </button>
    </div>
  );
};

export default Pagination;