import { expect, test } from "@playwright/test";
import { getLatestWritingSlug } from "./helpers/latest-writing-slug";

const articlePath = `/writing/${getLatestWritingSlug()}/`;

async function barWidth(page: import("@playwright/test").Page): Promise<number> {
  return page.evaluate(() => {
    const el = document.querySelector<HTMLElement>(".reading-progress__bar");
    return el ? el.getBoundingClientRect().width : -1;
  });
}

test.describe("reading progress bar", () => {
  test("updates on scroll after a fresh load", async ({ page }) => {
    await page.goto(articlePath, { waitUntil: "load" });
    await expect(page.locator(".reading-progress__bar")).toHaveCount(1);

    const start = await barWidth(page);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await expect.poll(() => barWidth(page)).toBeGreaterThan(start);
  });

  test("reinitializes after SPA nav: article → home → article", async ({ page }) => {
    // Regression guard: the after-swap handler used to self-remove on non-article
    // routes, leaving subsequent article visits without a live progress bar until
    // a hard refresh (fixed in tandem with this test).
    await page.goto(articlePath, { waitUntil: "load" });
    await expect(page.locator(".reading-progress__bar")).toHaveCount(1);

    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator(".reading-progress__bar")).toHaveCount(0);

    await page.click(`a[href="${articlePath}"], a[href="${articlePath.replace(/\/$/, "")}"]`);
    await expect(page).toHaveURL(new RegExp(articlePath.replace(/\//g, "\\/")));
    await expect(page.locator(".reading-progress__bar")).toHaveCount(1);

    await page.evaluate(() => window.scrollTo(0, 0));
    const start = await barWidth(page);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await expect
      .poll(() => barWidth(page), { message: "progress bar should advance after SPA re-entry" })
      .toBeGreaterThan(start);
  });
});
