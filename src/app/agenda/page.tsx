import Link from "next/link";
import Navbar from "../components/navbar";
import { getLocalData } from "../lib/getLocalData";

export default function Blog() {
  const agendaNotes = getLocalData("agenda");
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-col mt-36">
        <h1 className="text-2xl font-bold text-black">All posts</h1>
        <section className="py-10">
          {agendaNotes.map((note) => (
            <div
              key={note.slug}
              className="w-full grid py-2 lg:grid-cols-12 border-b"
            >
              <div className="hidden lg:block lg:col-span-1">
                <span
                  className={
                    note.tags == "bad"
                      ? "text-xs font-bold uppercase bg-red-500 text-white p-1 rounded"
                      : "text-xs font-bold uppercase bg-green-500 text-white p-1 rounded"
                  }
                >
                  {note.tags}
                </span>
              </div>
              <div className="lg:col-span-3 lg:order-2 lg:place-self-end">
                {note.date}
              </div>
              <Link
                href={"/weekly/" + note.slug}
                passHref
                className="lg:col-span-8 font-semibold text-black lg:order-1 transition hover:text-primary hover:translate-x-1"
              >
                {note.title}
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
