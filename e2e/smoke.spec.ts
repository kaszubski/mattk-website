import { expect, test, request } from "@playwright/test";

const EXTRA_ROUTES = [
  "/clocks/",
  "/secret/yir/",
] as const;

// Paths browsers probe automatically that don't exist in public/; not real errors.
const IGNORE_REQUEST_PATHS = [
  /\/apple-touch-icon(-precomposed)?\.png$/,
  /\/favicon\.ico$/,
  // Vercel-injected at runtime in production; absent under `astro preview`.
  /^\/_vercel\//,
];

async function fetchSitemapPaths(): Promise<string[]> {
  const ctx = await request.newContext();
  const res = await ctx.get("/sitemap-index.xml");
  expect(res.ok(), "sitemap-index.xml should be reachable").toBeTruthy();
  const indexXml = await res.text();
  const childUrls = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  const paths = new Set<string>();
  for (const childUrl of childUrls) {
    const child = await ctx.get(new URL(childUrl).pathname);
    expect(child.ok(), `${childUrl} should be reachable`).toBeTruthy();
    const xml = await child.text();
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      paths.add(new URL(m[1]).pathname);
    }
  }
  await ctx.dispose();
  return [...paths];
}

test.describe("site smoke", () => {
  test("every sitemap route + extras returns 200, no page errors, no unexpected 4xx/5xx resources", async ({ page, baseURL }) => {
    const sitemapPaths = await fetchSitemapPaths();
    const allPaths = [...new Set([...sitemapPaths, ...EXTRA_ROUTES])].sort();
    expect(allPaths.length).toBeGreaterThan(5);

    const failures: string[] = [];

    for (const pathname of allPaths) {
      const pageErrors: string[] = [];
      const badResources: string[] = [];

      const onPageError = (err: Error) => pageErrors.push(err.message);
      const onResponse = (resp: import("@playwright/test").Response) => {
        const status = resp.status();
        if (status < 400) return;
        const url = resp.url();
        const p = new URL(url).pathname;
        if (IGNORE_REQUEST_PATHS.some((re) => re.test(p))) return;
        if (p === pathname) return; // primary doc handled below
        badResources.push(`${status} ${url}`);
      };

      page.on("pageerror", onPageError);
      page.on("response", onResponse);

      const res = await page.goto(pathname, { waitUntil: "load" });
      if (!res || res.status() !== 200) {
        failures.push(`${pathname} → ${res?.status() ?? "no response"}`);
      }
      if (pageErrors.length) failures.push(`${pathname} pageerror: ${pageErrors.join(" | ")}`);
      if (badResources.length) failures.push(`${pathname} bad resources: ${badResources.join(" | ")}`);

      page.off("pageerror", onPageError);
      page.off("response", onResponse);
    }

    expect(failures, `failures on ${baseURL}`).toEqual([]);
  });

  test("404 route returns a 404 status", async ({ page }) => {
    const res = await page.goto("/this-route-does-not-exist/", { waitUntil: "load" });
    expect(res?.status()).toBe(404);
    await expect(page.locator("h1")).toBeVisible();
  });
});
