import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const WRITING_DIR = join(process.cwd(), "src/content/writing");

/** Slug of the newest post by `date:` in frontmatter (matches content collection ordering). */
export function getLatestWritingSlug(): string {
  const files = readdirSync(WRITING_DIR).filter((f) => /\.mdx?$/i.test(f));
  let best = { slug: "", t: -Infinity };

  for (const file of files) {
    const raw = readFileSync(join(WRITING_DIR, file), "utf8");
    const m = raw.match(/^date:\s*(.+)$/m);
    if (!m) continue;
    const t = new Date(m[1].trim().replace(/^["']|["']$/g, "")).getTime();
    if (Number.isNaN(t)) continue;
    const slug = file.replace(/\.mdx?$/i, "");
    if (t >= best.t) best = { slug, t };
  }

  if (!best.slug) throw new Error(`No dated writing posts under ${WRITING_DIR}`);
  return best.slug;
}
