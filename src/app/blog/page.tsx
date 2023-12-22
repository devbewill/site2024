import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function Blog() {
  const postDir = "posts";
  const files = fs.readdirSync(path.join(postDir));
  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");
    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  // Sort posts by date in descending order
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col mt-20">
        <h1 className="text-2xl font-bold text-black">All posts</h1>
        <section className="py-10">
          {sortedPosts.map((post) => (
            <div
              key={post.slug}
              className="w-full grid py-2 lg:grid-cols-12 border-b"
            >
              <div className="hidden lg:block lg:col-span-1">
                <span className="text-xs font-bold uppercase bg-primary text-white p-1 rounded">
                  {post.meta.tags}
                </span>
              </div>
              <div className="lg:col-span-3 lg:order-2 lg:place-self-end">
                {post.meta.date}
              </div>
              <Link
                href={"/post/" + post.slug}
                passHref
                className="lg:col-span-8 font-semibold text-black lg:order-1 transition hover:text-primary hover:translate-x-1"
              >
                {post.meta.title}
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
