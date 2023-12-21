import Link from "next/link";
import Section from "./components/section";
import Experience from "./components/experience";
import Lastposts from "./components/lastposts";
import Stack from "./components/stack";

export default function Home() {
  return (
    <div className="lg:col-start-5 lg:col-span-full ">
      <Section title="On track"></Section>
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
  );
}
