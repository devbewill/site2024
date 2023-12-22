import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getLocalData(localFolder) {
  const files = fs.readdirSync(path.join(localFolder));
  const localFiles = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(localFolder, filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  // Sort posts by date in descending order
  const sortedFiles = localFiles.sort(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );

  return sortedFiles;
}
