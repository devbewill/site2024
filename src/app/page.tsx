import Link from "next/link";
import Sidebar from "./components/navbar";
import Section from "./components/section";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main className="flex">
      <div className="w-full pt-28 lg:grid lg:grid-cols-10">
        <Sidebar></Sidebar>
        <div className="lg:col-start-5 lg:col-span-full ">
          <Section title="Experience">
            <Experience></Experience>
          </Section>
          <Section title="Toolkit"></Section>
        </div>
      </div>
    </main>
  );
}
