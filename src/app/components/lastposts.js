import Link from "next/link";
import { getLocalData } from "../lib/getLocalData";

export default function Lastposts() {
  const posts = getLocalData("posts");

  return (
    <section className="lastposts py-4">
      {posts.slice(0, 5).map((post) => (
        <div
          key={post.slug}
          className="w-full grid py-2 lg:grid-cols-12 border-b border-slate-500"
        >
          <div className="lg:order-2 lg:col-span-3 lg:justify-self-end">
            {post.date}
          </div>
          <Link
            href={"/post/" + post.slug}
            passHref
            className="lg:order-1 lg:col-span-9 font-semibold text-black transition hover:text-primary hover:translate-x-1"
          >
            {post.title}
          </Link>
        </div>
      ))}
    </section>
  );
}
