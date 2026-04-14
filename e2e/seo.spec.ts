import { expect, test } from "@playwright/test";
import { getLatestWritingSlug } from "./helpers/latest-writing-slug";

const SITE_ORIGIN = "https://mattkaszubski.com";
const latestArticlePath = `/writing/${getLatestWritingSlug()}/`;

const PUBLIC_INDEXABLE_ROUTES = [
  "/",
  "/writing/",
  latestArticlePath,
  "/about/",
  "/ai/",
  "/stack/",
  "/accessibility/",
  "/clocks/",
] as const;

test.describe("seo metadata regressions", () => {
  for (const pathname of PUBLIC_INDEXABLE_ROUTES) {
    test(`metadata baseline for ${pathname}`, async ({ page }) => {
      await page.goto(pathname, { waitUntil: "load" });

      await expect(page.locator("head > title")).toHaveCount(1);

      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveCount(1);
      await expect(metaDescription).toHaveAttribute("content", /.+/);

      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveCount(1);
      const canonicalHref = await canonical.getAttribute("href");
      expect(canonicalHref).toBeTruthy();
      expect(canonicalHref).toMatch(new RegExp(`^${SITE_ORIGIN.replace(".", "\\.")}/`));

      const robots = page.locator('meta[name="robots"]');
      await expect(robots).toHaveCount(1);
      await expect(robots).toHaveAttribute("content", "index, follow");

      await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:description"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);
      await expect(page.locator('meta[name="twitter:card"]')).toHaveCount(1);
      await expect(page.locator('meta[name="twitter:image"]')).toHaveCount(1);
    });
  }

  test("secret year-in-review route stays noindex", async ({ page }) => {
    await page.goto("/secret/yir/", { waitUntil: "load" });
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow");
  });
});
