"use client";

import { useEffect, useState } from "react";

const ClientComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <h1 className="text-3xl mb-4">This is Client Component Example ( Category List ) :</h1>
      <ul className="px-4">
        {data.map((value) => (
          <li key={value.id} className="mt-2 text-xl font-bold">{value?.id} - {value?.category}</li>
        ))}
      </ul>
    </>
  );
};
export default ClientComponent;
