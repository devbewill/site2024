import Link from "next/link";
import { getLocalData } from "../lib/getLocalData";

export default function WeeklyAgenda() {
  const agendaNotes = getLocalData("agenda");

  return (
    <section className="lastposts py-4">
      <p className="pb-4">
        A sneak peek into my life as a Product Director. I will share here my
        notes, my goals and their relative progress, a rollercoaster of
        challenges, victories and pains as we shape our product and company
        vision.
      </p>
      {agendaNotes.slice(0, 5).map((note) => (
        <div
          key={note.slug}
          className="w-full grid py-2 lg:grid-cols-12 border-b border-slate-500"
        >
          <div className="lg:order-2 lg:col-span-3 lg:justify-self-end">
            {note.meta.date}
          </div>
          <Link
            href={"/weekly/" + note.slug}
            passHref
            className="lg:order-1 lg:col-span-9 font-semibold text-black transition hover:text-primary hover:translate-x-1"
          >
            {note.meta.title}
          </Link>
        </div>
      ))}
    </section>
  );
}
