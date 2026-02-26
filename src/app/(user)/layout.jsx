import Link from 'next/link';
export default function UserRootLayout({ children }) {
  return (
    <>
      <ul className=' flex text-2xl font-bold  gap-4'>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
         <li>
          <Link href="/demo">Demo </Link>
        </li>
        <li>
          <Link href="/project/products">Project</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
