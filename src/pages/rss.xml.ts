import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { en as t } from "@/i18n";

export function GET(context: APIContext) {
  const allPosts = t.writing.sections.flatMap((section) =>
    section.posts.map((post) => ({
      title: post.title,
      description: post.description,
      link: `/writing/${post.slug}/`,
      pubDate: new Date(post.date),
    }))
  );

  allPosts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: t.siteTitle,
    description: t.siteDescription,
    site: context.site!,
    items: allPosts,
    customData: "<language>en-us</language>",
  });
}
