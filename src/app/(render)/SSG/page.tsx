
// No "use client" here → runs on server at build time

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache", // default in SSG → cached at build time ( this is only difference in SSG and SSR)
  });
  return res.json();
}

export default async function SSGPage() {
  const post = await fetchData(); // data fetched at build time

  return (
    <div>
      <h1>Static Site Generation Example</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
