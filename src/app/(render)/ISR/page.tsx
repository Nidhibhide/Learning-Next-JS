

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { revalidate: 10 }, // Every 10 seconds  Next.js will fetch fresh data in the background and update the cache.
  });
  return res.json();
}

export default async function ISRPage() {
  const post = await fetchData(); // data fetched at build + revalidated

  return (
    <div>
      <h1>Incremental Static Regeneration Example</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
