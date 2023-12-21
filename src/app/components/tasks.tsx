export default function Tasks() {
  const data = [
    {
      year: "2023",
      role: "Product Director",
      company: "Mangrovia",
      img: "mangrovia.png",
    },
    {
      year: "2020",
      role: "Sr. Product Manager",
      company: "Fiscozen",
      img: "fiscozen.png",
    },
    {
      year: "2018",
      role: "Product Manager",
      company: "PAX Italy",
      img: "pax.png",
    },
    {
      year: "2012",
      role: "Front-end developer",
      company: "NTT DATA",
      img: "nttdata.png",
    },
    {
      year: "2011",
      role: "Founder",
      company: "skillybiz.com",
      img: "skillybiz.png",
    },
    {
      year: "2008",
      role: "Web designer",
      company: "freelance",
      img: "freelance.png",
    },
  ];
  return (
    <section className="experience py-4">
      {data.map((job, index) => {
        return (
          <div className="grid py-2 grid-cols-12 border-b border-black">
            <div className="col-span-5 font-semibold text-black">
              {job.role}
            </div>
            <div className="col-span-5 ">{job.company}</div>
            <div className="col-span-2 justify-self-end">{job.year}</div>
          </div>
        );
      })}
    </section>
  );
}
