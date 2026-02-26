import DetailPage from "@/components/project/detailPage";

const ProductDetailPage = async ({ params }) => {
  const { id } = await params;

  let product = null;
  let error = null;

  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    product = await response.json();
  } catch (e) {
    error = e.message;
    console.error('Failed to fetch product:', e);
  }

  if (error || !product || product.message) {
    return <div className="text-center py-10 text-gray-500">Product not found</div>;
  }

  return (
    <>
      <DetailPage product={product} />
    </>
  );
};

export default ProductDetailPage;
