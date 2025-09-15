
export default async function SSRPage() {
  const post = await fetchData(); // data fetched on server

  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store", // ensures fresh data on each request
  });
  return res.json();
}
