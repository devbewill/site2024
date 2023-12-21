import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <header className="lg:self-start lg:sticky lg:col-span-3 top-10">
      <Image
        className="rounded-full"
        src="/stefano-perelli.jpg"
        width="120"
        height="120"
        alt="avatar"
      ></Image>

      <h1 className="text-4xl mt-5 font-black text-black">Stefano Perelli</h1>
      <p className="py-2 font-bold">
        Product Director <span className="text-violet-700">@Mangrovia</span>
      </p>
      <p>
        I like to think of myself as a product manager who consistently strikes
        the perfect balance between relying on best practices and trusting my
        intuition or at least that's what I tell myself when things go for the
        right way.
      </p>
    </header>
  );
}
