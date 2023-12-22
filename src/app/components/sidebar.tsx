import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <header className="lg:self-start lg:sticky lg:col-span-3 lg:top-10">
      <Image
        className="rounded-full mt-10 shadow-xl "
        src="/stefano-perelli.jpg"
        width="150"
        height="150"
        alt="avatar"
      ></Image>

      <p className="py-2 text-xl mt-5 font-black text-black">
        Product Director <span className="text-primary">@mangrovia</span>
      </p>
      <p>
        I like to think of myself as a product manager who consistently strikes
        the perfect balance between relying on best practices and trusting my
        intuition or at least that&apos;s what I tell myself when things go for
        the right way.
      </p>

      <a
        href="https://www.linkedin.com/in/stefanoperelli/"
        target="_blank"
        className="flex pt-6 font-semibold text-black transition hover:text-primary"
      >
        Linkedin &#8594;
      </a>
    </header>
  );
}
