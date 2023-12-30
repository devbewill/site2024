import Link from "next/link";
import Navbar from "../components/navbar";
import { getLocalData } from "../lib/getLocalData";
import Post from "../components/post";

export default function Blog() {
  const posts = getLocalData("posts");

  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col mt-20">
        <h1 className="text-2xl font-bold text-black">All posts</h1>
        <section className="py-10">
          {posts.map((post) => (
            <Post key={post.title} data={post}></Post>
          ))}
        </section>
      </main>
    </>
  );
}
