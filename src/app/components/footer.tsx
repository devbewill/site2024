import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between mt-20 py-5 border-t">
      <p>2023 - Stefano Perelli</p>
      <div>
        <Link href="/" className="font-semibold transition hover:text-primary">
          Home
        </Link>{" "}
        /{" "}
        <Link
          href="/blog"
          className="font-semibold transition hover:text-primary"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
