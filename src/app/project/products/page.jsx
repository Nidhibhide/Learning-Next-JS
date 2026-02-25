import SearchBar from "../../../components/project/searchbar";
import CardLayout from "../../../components/project/cardLayout";
import Pagination from "../../../components/project/pagination";

const ProductList = async ({ searchParams }) => {
  const params = await searchParams;
  let data = [];

  const search = params?.search || "";
  const category = params?.category || "";

  try {
    const baseURL = category
      ? `https://dummyjson.com/products/category/${category}?limit=50`
      : search
        ? `https://dummyjson.com/products/search?q=${search}&limit=50`
        : `https://dummyjson.com/products?limit=50`;

    const response = await fetch(baseURL);
    data = await response.json();
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <div className="min-h-screen">
        <SearchBar products={data.products} />
        <div className="max-w-[1920px] mx-auto">
          <CardLayout products={data.products} />
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default ProductList;
