/// <reference types="astro/client" />

interface MarkdownFrontmatter {
  pubDate: string;
  title: string;
  description: string;
  author: string;
  image: {
    url: string;
    alt: string;
  };
  tags: Array<string>;
}
