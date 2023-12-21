import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

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
  return (
    <main className="flex flex-col">
      <h1 className="text-3xl font-bold">All posts</h1>
      <section className="py-10">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="w-full grid py-2 grid-cols-12 border-b"
          >
            <div className="col-span-1">
              <span className="text-xs font-bold uppercase bg-purple-500 text-white p-1 rounded">
                {post.meta.tags}
              </span>
            </div>
            <Link
              href={"/post/" + post.slug}
              passHref
              className="col-span-5 font-semibold"
            >
              {post.meta.title}
            </Link>
            <div className="col-span-5 justify-self-end">{post.meta.date}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
