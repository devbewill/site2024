import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white  sticky  top-0 py-8 flex justify-between items-center">
      <h2 className="text-xl font-black text-black">stefanoperelli</h2>
      <div>
        <Link href="/" className="px-1 transition hover:text-primary">
          Home
        </Link>
        /
        <Link href="/blog" className="px-1 transition hover:text-primary">
          Blog
        </Link>
        /
        <Link href="/agenda" className="px-1 transition hover:text-primary">
          Agenda
        </Link>
      </div>
    </header>
  );
}
