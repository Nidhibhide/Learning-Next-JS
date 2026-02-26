"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
const DetailPage = ({ product }) => {
  const searchParams = useSearchParams();
  // Helper function to render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href={`/project/products?${searchParams.toString()}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Products
        </Link>

        {/* Main Product Section - Card Style */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-100 mb-6 sm:mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="w-full md:w-1/2 bg-gray-50 p-4 sm:p-6 md:p-8 flex items-center justify-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="max-h-80 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8">
              {/* Brand & Category */}
              <div className="flex items-center gap-2 mb-2">
                <p className="text-sm text-gray-500">{product.brand}</p>
                <span className="text-sm text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>

              {/* Price & Discount */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-blue-600">
                  Rs.{product.price.toFixed(2)}
                </span>
                {product.discountPercentage && (
                  <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                    -{product.discountPercentage.toFixed(1)}%
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-gray-600">({product.rating})</span>
              </div>

              {/* Availability */}
              <span
                className={`inline-block text-sm px-3 py-1 rounded mb-4 ${
                  product.availabilityStatus === "In Stock"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.availabilityStatus}
              </span>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Specifications, Policies, Order Info, Metadata Grid - Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Product Specifications */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="bg-blue-50 px-6 py-3 border-b border-blue-100">
              <h2 className="text-lg font-semibold text-gray-800">
                Product Specifications
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500">SKU</span>
                <span className="text-gray-800 font-medium">{product.sku}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500">Weight</span>
                <span className="text-gray-800 font-medium">{product.weight} units</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-500">Dimensions (W × H × D)</span>
                <span className="text-gray-800 font-medium">
                  {product.dimensions.width} × {product.dimensions.height} ×{" "}
                  {product.dimensions.depth}
                </span>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="bg-purple-50 px-6 py-3 border-b border-purple-100">
              <h2 className="text-lg font-semibold text-gray-800">Policies</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="py-2 border-b border-gray-100">
                <span className="text-gray-500 text-sm block mb-1">Warranty</span>
                <span className="text-gray-800 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {product.warrantyInformation}
                </span>
              </div>
              <div className="py-2 border-b border-gray-100">
                <span className="text-gray-500 text-sm block mb-1">Shipping</span>
                <span className="text-gray-800 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  {product.shippingInformation}
                </span>
              </div>
              <div className="py-2">
                <span className="text-gray-500 text-sm block mb-1">Return Policy</span>
                <span className="text-gray-800 font-medium flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  {product.returnPolicy}
                </span>
              </div>
            </div>
          </div>

          {/* Order Info */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="bg-green-50 px-6 py-3 border-b border-green-100">
              <h2 className="text-lg font-semibold text-gray-800">Order Info</h2>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500">Minimum Order Quantity</span>
                <span className="text-gray-800 font-medium bg-blue-50 px-3 py-1 rounded">
                  {product.minimumOrderQuantity} units
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-500">Stock Available</span>
                <span className=" font-medium bg-green-50 px-3 py-1 rounded text-green-800">
                  {product.stock} units
                </span>
              </div>
            </div>
          </div>

          {/* Metadata */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-100">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">Metadata</h2>
            </div>
            <div className="p-6 space-y-3">
              <div className="py-2 border-b border-gray-100">
                <span className="text-gray-500 text-sm block mb-1">Barcode</span>
                <span className="text-gray-800 font-mono bg-gray-50 px-3 py-2 rounded block text-sm">
                  {product.meta.barcode}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500">Created At</span>
                <span className="text-gray-800 font-medium text-sm">
                  {formatDate(product.meta.createdAt)}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-500">Updated At</span>
                <span className="text-gray-800 font-medium text-sm">
                  {formatDate(product.meta.updatedAt)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section - Card Style */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-blue-100">
          <div className="bg-yellow-50 px-6 py-3 border-b border-yellow-100 flex items-center gap-2">
            <span className="text-yellow-500 text-xl">★</span>
            <h2 className="text-lg font-semibold text-gray-800">Customer Reviews</h2>
            <span className="text-sm text-gray-500 ml-auto">
              {product.reviews.length} review{product.reviews.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="p-6">
            {product.reviews && product.reviews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-50 hover:bg-white"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold">
                            {review.reviewerName.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">
                            {review.reviewerName}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {formatDate(review.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-2">{renderStars(review.rating)}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No reviews yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
