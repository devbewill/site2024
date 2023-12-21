import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between mt-20 py-3 border-t">
      <p>2023 - Stefano Perelli</p>
      <div>
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
}
