import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Lastposts() {
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
    <section className="lastposts py-4">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="w-full grid py-2 grid-cols-12 border-b border-slate-500"
        >
          <Link
            href={"/post/" + post.slug}
            passHref
            className="col-span-9 font-semibold text-black"
          >
            {post.meta.title}
          </Link>
          <div className="col-span-3 justify-self-end">{post.meta.date}</div>
        </div>
      ))}
    </section>
  );
}
