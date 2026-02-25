"use client"
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-8 mb-8">

      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md border bg-gray-200 disabled:opacity-50 text-base font-medium"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md border text-base
            ${currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-white hover:bg-gray-200"}`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 text-base font-medium py-1 rounded-md border bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;