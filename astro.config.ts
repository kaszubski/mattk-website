import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

function writingLastmods(): Map<string, string> {
  const dir = join(process.cwd(), "src/content/writing");
  const out = new Map<string, string>();
  if (!existsSync(dir)) return out;
  for (const file of readdirSync(dir)) {
    if (!/\.mdx?$/i.test(file)) continue;
    const raw = readFileSync(join(dir, file), "utf8");
    const m = raw.match(/^date:\s*(.+)$/m);
    if (!m) continue;
    const t = new Date(m[1].trim().replace(/^["']|["']$/g, ""));
    if (Number.isNaN(t.getTime())) continue;
    const slug = file.replace(/\.mdx?$/i, "");
    out.set(`/writing/${slug}/`, t.toISOString());
  }
  return out;
}

function pageLastmod(pathname: string): string | undefined {
  const map: Record<string, string> = {
    "/": "src/pages/index.astro",
    "/writing/": "src/pages/writing.astro",
    "/about/": "src/pages/about.astro",
    "/ai/": "src/pages/ai/index.astro",
    "/stack/": "src/pages/stack.astro",
    "/accessibility/": "src/pages/accessibility.astro",
    "/clocks/": "src/pages/clocks.astro",
  };
  const rel = map[pathname];
  if (!rel) return undefined;
  try {
    return statSync(join(process.cwd(), rel)).mtime.toISOString();
  } catch {
    return undefined;
  }
}

const articleLastmods = writingLastmods();

export default defineConfig({
  site: "https://mattkaszubski.com",
  trailingSlash: "always",
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/secret/"),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const lastmod = articleLastmods.get(pathname) ?? pageLastmod(pathname);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});
