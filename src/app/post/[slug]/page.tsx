import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import "@/styles/highlight-js/dracula.css";

/* rehypeHighlight options for syntax highlight and other stuff */

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

/* By default, dynamic routes are generated on-demand at request time which leads to slow loading pages with bad SEO. Instead, as our blogs aren't going to regularly change, we can statically generate the routes for these blogs at build time.
To do this, we fetch all files in the "blogs" directory and return an array of slugs for each file. */

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

/* This method will simply fetch a blog post from a given slug. To do this it reads the file in the "blogs" directory with the same filename as the slug. It then uses matter to fetch the metadata and markdown content of this file and returns the FrontMatter metadata, inputted slug and markdown content. */

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

/* display the blog post itself. We first fetch the post with the getPost method and then display it using the MDXRemote component.
We also display the blog's title at the top of the page too. */

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg mx-auto">
      <h1>{props.frontMatter.title}</h1>

      {/* @ts-expect-error Server Component*/}
      <MDXRemote source={props.content} options={options} />
    </article>
  );
}

//METADATA
export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
