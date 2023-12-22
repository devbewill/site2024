import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function WeeklyAgenda() {
  const postDir = "agenda";
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
    (a, b) => new Date(b.meta.date) - new Date(a.meta.date)
  );

  return (
    <section className="lastposts py-4">
      <p className="pb-4">
        A sneak peek into my life as a Product Director. I will share here my
        notes, my goals and their relative progress, a rollercoaster of
        challenges, victories and pains as we shape our product and company
        vision.
      </p>
      {sortedPosts.slice(0, 5).map((post) => (
        <div
          key={post.slug}
          className="w-full grid py-2 lg:grid-cols-12 border-b border-slate-500"
        >
          <div className="lg:order-2 lg:col-span-3 lg:justify-self-end">
            {post.meta.date}
          </div>
          <Link
            href={"/weekly/" + post.slug}
            passHref
            className="lg:order-1 lg:col-span-9 font-semibold text-black transition hover:text-primary hover:translate-x-1"
          >
            {post.meta.title}
          </Link>
        </div>
      ))}
    </section>
  );
}
