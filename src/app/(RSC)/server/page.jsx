const ServerComponent = async () => {
  let result = [];
  try {
    const response = await fetch("https://fakestoreapi.com/products");
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
        {result.map((value) => (
          <li key={value.id} className="mt-2 text-xl font-bold">
           {value?.id} - {value?.title}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ServerComponent;
