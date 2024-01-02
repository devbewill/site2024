import Link from "next/link";
import Navbar from "../components/navbar";
import { getLocalData, getUniquePostTags } from "../lib/getLocalData";
import Post from "../components/post";

export default function Blog() {
  const posts = getLocalData("posts");
  const allTags = getUniquePostTags(posts);

  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col mt-36">
        <h1 className="text-2xl font-bold text-black">All posts</h1>
        <div className="flex mt-5 gap-1">
          {allTags.map((tag) => (
            <Link
              key={tag}
              className="text-xs font-bold uppercase bg-primary text-white p-1 rounded"
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          ))}
        </div>
        <section className="py-10">
          {posts.map((post) => (
            <Post key={post.title} data={post}></Post>
          ))}
        </section>
      </main>
    </>
  );
}
