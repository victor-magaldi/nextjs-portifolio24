// pages/[slug].js

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export const dynamicParams = false; // evita tentativa de gerar novas páginas caindo no 404

export async function generateStaticParams() {
  const contentDirectory = path.join(process.cwd(), "contents");
  const filenames = fs.readdirSync(contentDirectory);

  const posts = filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
  return posts;
}

interface PageSlugProps {
  params: {
    slug: string;
  };
}
export default async function Page({ params }: PageSlugProps) {
  const { slug } = params;
  const contentDirectory = path?.join(process.cwd(), "contents");
  const filePath = path?.join(contentDirectory, `${slug}.md`);
  const fileContent = fs?.readFileSync(filePath, "utf8");

  const { content, data } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <article>
      <h1>{data.title}</h1>
      <p>Author: {data.author}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
