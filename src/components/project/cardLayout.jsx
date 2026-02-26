"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation";




const CardLayout = ({ products }) => {
  const searchParams = useSearchParams();
  if (!products || products.length === 0) {
    return <div className="text-center py-10 text-gray-500">No products found</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8 px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-100 flex flex-col"
        >
          {/* Product Image */}
          <div className="h-40 sm:h-44 md:h-48 lg:h-52 flex items-center justify-center p-3 md:p-4 bg-gray-50">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-3 sm:p-4 flex flex-col flex-grow">
            {/* Brand */}
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <p className="text-xs sm:text-sm text-gray-500">{product.brand}</p>
              {product.category && (
                <span className="text-xs sm:text-sm text-purple-600 bg-purple-50 px-1.5 sm:px-2 py-0.5 rounded">
                  {product.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-10 sm:h-11 md:h-12">
              {product.title}
            </h3>

            {/* Price, Discount and Availability */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 sm:mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
                  Rs.{product.price.toFixed(2)}
                </span>
                {product.discountPercentage && (
                  <span className="text-xs sm:text-sm text-green-600 bg-green-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                    -{product.discountPercentage.toFixed(1)}%
                  </span>
                )}
              </div>
              <span className={`text-xs sm:text-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded w-fit ${
                product.availabilityStatus === 'In Stock' 
                  ? 'bg-green-100 text-green-800' 
                  : product.availabilityStatus === 'Low Stock'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.availabilityStatus}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded mb-2 sm:mb-3 w-fit">
              <span className="text-yellow-500 mr-1 text-sm sm:text-base">★</span>
              <span className="text-sm sm:text-base text-gray-700 font-medium">
                {product.rating || 0}
              </span>
            </div>

            {/* View Details Button */}
            <Link
                href={`/project/products/${product.id}?${searchParams.toString()}`}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base mt-auto text-center block"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLayout;
