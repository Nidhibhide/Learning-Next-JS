const useSearchParamsExample = async ({ searchParams }) => {
  const res = await searchParams;
  console.log(res);
  return (
    <>
      <h1>Category SearchParams from URL = {res.category}</h1>
            <h1>Price SearchParams from URL = {res.price}</h1>
    </>
  );
};

export default useSearchParamsExample;
