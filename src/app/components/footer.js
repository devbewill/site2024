import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-between mt-20 py-5 border-t">
      <p>2025 - Stefano Perelli</p>
      <div>
        <Link href="/" className="transition hover:text-primary">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/blog" className="transition hover:text-primary">
          Blog
        </Link>{" "}
        /{" "}
        <Link href="/agenda" className="transition hover:text-primary">
          Agenda
        </Link>
      </div>
    </div>
  );
}
