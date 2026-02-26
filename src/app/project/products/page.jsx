import SearchBar from "../../../components/project/searchbar";
import CardLayout from "../../../components/project/cardLayout";
import Pagination from "../../../components/project/pagination";
import { BASE_URL } from "@/utils/ecommerce";

const ProductList = async ({ searchParams }) => {
  const params = await searchParams;
  let data = [];

  const search = params?.search || "";
  const category = params?.category || "";
  
  // Sort parameters for URL query string
  const sortBy = params?.sortBy || "price";
  const order = params?.order || "asc";
  
  // Build sort query string for API calls
  const sortQueryString = `sortBy=${sortBy}&order=${order}`;
  
  const currentPage = parseInt(params?.page) || 1;
  const itemsPerPage = 20;
  const skip = (currentPage - 1) * itemsPerPage;

  // Fetch categories from API
  let categories = [];
  try {
    const categoriesResponse = await fetch(`${BASE_URL}/categories`);
    categories = await categoriesResponse.json();
  } catch (e) {
    console.log("Failed to fetch categories", e);
  }

  try {
    let baseURL;


    if (category) {
      baseURL = `${BASE_URL}/category/${category}?${sortQueryString}&limit=${itemsPerPage}&skip=${skip}`;
    } else if (search) {
      baseURL = `${BASE_URL}/search?q=${search}&${sortQueryString}&limit=${itemsPerPage}&skip=${skip}`;
    } else {
      baseURL = `${BASE_URL}?${sortQueryString}&limit=${itemsPerPage}&skip=${skip}`;
    }
console.log(baseURL)
    const response = await fetch(baseURL);
    let apiData = await response.json();

    // If both category AND search are present, filter results client-side
    // This is needed because DummyJSON API doesn't support combined category+search
    if (category && search) {
      const searchLower = search.toLowerCase();
      data.products = apiData.products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower),
      );
      data.total = data.products.length;
    } else {
      data = apiData;
    }
  } catch (e) {
    console.log(e);
  }

  // Default total = 50 (the limit)
console.log(data)
  const totalPages = Math.ceil((data.total || 0) / itemsPerPage);

  return (
    <>
      <div className="min-h-screen px-3 sm:px-4 md:px-6">
        <SearchBar products={data.products} categories={categories} />
        <div className="max-w-[1920px] mx-auto">
          <CardLayout products={data.products} />
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
};

export default ProductList;
