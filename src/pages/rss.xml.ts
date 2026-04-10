import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { en as t } from "@/i18n";
import { writingSlugFromEntryId } from "@/lib/post-slug";

export async function GET(context: APIContext) {
  const posts = await getCollection("writing");
  const items = posts
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/writing/${writingSlugFromEntryId(post.id)}/`,
      pubDate: post.data.date,
    }))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: t.siteTitle,
    description: t.siteDescription,
    site: context.site!,
    items,
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData: `<language>en-us</language><atom:link href="${context.site!}rss.xml" rel="self" type="application/rss+xml"/>`,
  });
}
