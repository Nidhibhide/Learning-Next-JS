"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ClientComponent = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1 className="text-3xl mb-4">
        This is Client Component Example ( Category List ) :
      </h1>
      <ul className="px-4">
        {/* {data.map((value) => ( */}
        <li className="mt-4 text-lg">
          <p>
            <strong>ID:</strong> {data?.id}
          </p>
          <p>
            <strong>Title:</strong> {data?.title}
          </p>
          <p>
            <strong>Description:</strong> {data?.description}
          </p>
          <p>
            <strong>Category:</strong> {data?.category}
          </p>
          <p>
            <strong>Image:</strong> {data?.image}
          </p>
          <p>
            <strong>Rate:</strong> {data?.rating?.rate}
          </p>
        </li>
        {/* ))} */}
      </ul>
    </>
  );
};
export default ClientComponent;
