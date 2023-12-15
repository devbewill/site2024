import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  // 1) Set posts directory
  const postDir = "posts";

  // 2) Find all files in the posts directory
  const files = fs.readdirSync(path.join(postDir));

  // 3) For each blog found
  const posts = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(postDir, filename), "utf-8");

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className="flex flex-col">
      <h1 className="text-3xl font-bold">My Blogging Site</h1>

      <section className="py-10">
        <h2 className="text-2xl font-bold">Latest Posts</h2>

        <div className="py-2">
          {posts.map((post) => (
            <Link href={"/post/" + post.slug} passHref key={post.slug}>
              <div className="py-2 flex justify-between align-middle gap-2">
                <div>
                  <h3 className="text-lg font-bold">{post.meta.title}</h3>
                  <p className="text-gray-400">{post.meta.description}</p>
                </div>
                <div className="my-auto text-gray-400">
                  <p>{post.meta.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
