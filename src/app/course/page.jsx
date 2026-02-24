"use client";
import { useSearchParams } from "next/navigation";

const useSearchParamExample = () => {
  const params = useSearchParams();
  //get params using get()
  const name = params.get("name");
  const level = params.get("level"); //to get single value from URL
  const paramFromURL = params.getAll("course"); //to get multiple values

  return (
    <>
      <h1>This is useSearchParam Example </h1>
      <p>name = {name}</p>
      <p>level = {level}</p>
      <p>Course List : </p>
      <ul>
        {paramFromURL.map((value, id) => (
          <li key={id}>{value}</li>
        ))}
      </ul>
    </>
  );
};
export default useSearchParamExample;
