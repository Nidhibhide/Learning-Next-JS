"use client";
import { useParams } from "next/navigation";

//Here Dynamic Routes Segments in RCC
const DynamicRoutingInRCC = () => {
  const result = useParams();
  console.log(result);
  return (
    <>
      <h1>This is Dynamic Routing Segments in RCC :</h1>
      <p>ID = {result?.id}</p>
    </>
  );
};
export default DynamicRoutingInRCC;
