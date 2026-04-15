import { expect, test } from "@playwright/test";

test.describe("error pages are not indexable", () => {
  test("404 route uses noindex robots", async ({ page }) => {
    await page.goto("/this-route-should-not-exist-404-seo-test/", { waitUntil: "load" });
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow");
  });

  test("500 route uses noindex robots", async ({ page }) => {
    await page.goto("/500.html", { waitUntil: "load" });
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex, nofollow");
  });
});
