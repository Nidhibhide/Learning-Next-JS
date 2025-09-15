"use client"; // CSR requires client component in Next.js App Router

import { useEffect, useState } from "react";

export default function CSRPage() {


  const [post, setPost] = useState<any>(null);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await res.json();
      setPost(data);
    }
    fetchData();
  }, []);


  return (
    <div>
      <h1>Client-Side Rendering Example</h1>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
