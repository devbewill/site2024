export default function Lastposts() {
  return (
    <section className="experience py-4">
      {data.map((job, index) => {
        return (
          <div className="grid py-2 grid-cols-12 border-b">
            <div className="col-span-5 font-semibold">{job.role}</div>
            <div className="col-span-5 ">{job.company}</div>
            <div className="col-span-2 justify-self-end">{job.year}</div>
          </div>
        );
      })}
    </section>
  );
}
