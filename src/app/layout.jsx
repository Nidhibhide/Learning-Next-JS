import Link from "next/link";
import "./globals.css";

export default function UserRootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
