import Image from "next/image";

export default function Stack() {
  const data = [
    {
      name: "Product Hunt",
      role: "Discover trends",
      desc: "Great site for discovering current product trends",
      logo: "product-hunt.svg",
    },
    {
      name: "Reddit",
      role: "Discover trends",
      desc: "The best place to ask and inquire about any topic",
      logo: "reddit.svg",
    },
    {
      name: "Figma",
      role: "Mockup and Flow",
      desc: "Design and share mockup, prototype and flow quickly",
      logo: "figma.svg",
    },
    {
      name: "Monday",
      role: "Team management",
      desc: "Team coordination and keep roadmap on track",
      logo: "monday.svg",
    },
    {
      name: "ChatGPT",
      role: "AI Tools",
      desc: "The help that an AI can give you on a daily routine would just be a big waste",
      logo: "chatgpt.svg",
    },
    {
      name: "Git",
      role: "Code versioning",
      desc: "Sometimes a few lines of code is fastest than mockup to explain something",
      logo: "git.svg",
    },
    {
      name: "Obsidian",
      role: "Note taking",
      desc: "Take notes during the meeting or at any time during the day",
      logo: "obsidian.svg",
    },
  ];

  return (
    <section className="experience py-4">
      <div className="flex flex-col">
        {data.map((tool, index) => {
          return (
            <div className="flex items-center py-2 border-b">
              <div className="pr-4">
                <Image width={40} height={40} src={tool.logo} alt={tool.name} />
              </div>
              <div className="flex">
                <div className="flex flex-col">
                  <p className="font-semibold text-black">{tool.name}</p>
                  <p>{tool.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
