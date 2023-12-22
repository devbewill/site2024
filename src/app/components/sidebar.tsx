import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <header className="lg:self-start lg:sticky lg:col-span-3 lg:top-10">
      {/* <div className="flex font-semibold">
        <Link href="/" className="px-1 transition hover:text-primary">
          Home
        </Link>
        /
        <Link href="/blog" className="px-1 transition hover:text-primary">
          Blog
        </Link>
      </div> */}
      <Image
        className="rounded-full mt-10"
        src="/stefano-perelli.jpg"
        width="120"
        height="120"
        alt="avatar"
      ></Image>

      {/* <h1 className="text-3xl mt-5 font-black text-black">Stefano Perelli</h1> */}
      <p className="py-2 text-2xl mt-5 text-black">
        Product director <span className="text-primary">@mangrovia</span>
      </p>
      <p>
        I like to think of myself as a product manager who consistently strikes
        the perfect balance between relying on best practices and trusting my
        intuition or at least that&apos;s what I tell myself when things go for
        the right way.
      </p>
    </header>
  );
}
