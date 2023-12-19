import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-[200vh]">
      <div className="grid grid-cols-10 w-full">
        <aside className="self-start sticky top-10 col-span-2 bg-green-200">
          Mi sticky sidebar
        </aside>

        <div className="col-start-4 col-span-full  bg-violet-200">
          my awesome content
        </div>
      </div>
    </main>
  );
}
