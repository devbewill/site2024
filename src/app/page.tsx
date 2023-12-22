import Link from "next/link";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Sidebar from "./components/sidebar";
import Tasks from "./components/tasks";
import Experience from "./components/experience";
import Lastposts from "./components/lastposts";
import Stack from "./components/stack";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="w-full lg:grid lg:grid-cols-10 mt-36">
        <Sidebar></Sidebar>
        <div className="mt-20 lg:mt-10 lg:col-start-5 lg:col-span-full">
          <Section title="On track">
            <Tasks></Tasks>
          </Section>
          <Section title="Last posts">
            <Lastposts></Lastposts>
          </Section>
          <Section title="Experience">
            <Experience></Experience>
          </Section>
          <Section title="Daily tools">
            <Stack></Stack>
          </Section>
        </div>
      </main>
    </>
  );
}
