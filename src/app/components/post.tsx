import Link from "next/link";

export default function Post({ data }: any) {
  const { slug, tags, date, title } = data;

  console.log(title);

  const getTagLink = (tag: string) => {
    return (
      <Link
        className="text-xs font-bold uppercase bg-primary text-white p-1 rounded"
        href={`/blog/${tag}`}
      >
        {tag}{" "}
      </Link>
    );
  };
  return (
    <div key={slug} className="w-full grid py-2 lg:grid-cols-12 border-b">
      <div className="hidden lg:block lg:col-span-2">
        <div className="flex gap-1">
          {tags.map((tag: string) => getTagLink(tag))}
        </div>
      </div>
      <div className="lg:col-span-2 lg:order-2 lg:place-self-end">{date}</div>
      <Link
        href={"/post/" + slug}
        passHref
        className="lg:col-span-8 font-semibold text-black lg:order-1 transition hover:text-primary hover:translate-x-1"
      >
        {title}
      </Link>
    </div>
  );
}
