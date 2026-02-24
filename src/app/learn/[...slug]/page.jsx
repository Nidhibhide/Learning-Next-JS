"use client";
import { useParams } from "next/navigation";

const CatchAllSegmentsExampleInRSC = () => {
  const { slug } = useParams();

  return (
    <>
      <h1>Catch All Segments Example in RSC : {slug.join("/")}</h1>
    </>
  );
};

export default CatchAllSegmentsExampleInRSC;
