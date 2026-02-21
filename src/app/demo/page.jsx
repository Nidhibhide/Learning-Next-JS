import Link from "next/link";
export default function Demo() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-orange-400">This is Demo Page</h1>
      <Link href="/">Back</Link>
    </div>
  );
}
