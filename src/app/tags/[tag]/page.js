import { getLocalData } from "../../lib/getLocalData";
import Navbar from "../../components/navbar";
import Link from "next/link";
import Post from "../../components/post";

const posts = getLocalData("posts");

export async function generateStaticParams() {
  return posts.map((post) => ({
    tag: encodeURI(post.tags),
  }));
}

export default function Tag({ params }) {
  const { tag } = params;
  const filteredPosts = posts.filter((post) => post.tags.includes(tag));

  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col mt-36">
        <div className="flex gap-3 items-center">
          <Link href="/blog">&larr; </Link>
          <h1 className="text-2xl font-bold text-black">
            Posts tagged
            <span className="text-sm font-bold uppercase bg-primary text-white p-1 mx-1 rounded">
              {tag}
            </span>
          </h1>
        </div>

        <section className="py-10">
          {filteredPosts.map((post) => (
            <Post key={post.title} data={post}></Post>
          ))}
        </section>
      </main>
    </>
  );
}
