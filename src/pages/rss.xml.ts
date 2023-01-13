import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://blog.krznbtni.com",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
