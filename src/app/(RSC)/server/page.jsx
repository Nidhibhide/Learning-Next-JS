const ServerComponent = async ({ searchParams }) => {
  let result = [];
  try {
    const params = await searchParams;
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`,
    );
    result = await response.json();
    console.log(result);
  } catch (e) {
    console.log(e);
  }

  return (
    <>
      <h1 className="text-3xl mb-4">
        This is Server Component Example ( Category List ) :
      </h1>
      <ul className="px-4">
        {/* {result.map((value) => ( */}
        <li className="mt-4 text-lg">
          <p>
            <strong>ID:</strong> {result?.id}
          </p>
          <p>
            <strong>Title:</strong> {result?.title}
          </p>
          <p>
            <strong>Description:</strong> {result?.description}
          </p>
          <p>
            <strong>Category:</strong> {result?.category}
          </p>
          <p>
            <strong>Image:</strong> {result?.image}
          </p>
          <p>
            <strong>Rate:</strong> {result?.rating?.rate}
          </p>
        </li>
        {/* ))} */}
      </ul>
    </>
  );
};
export default ServerComponent;
