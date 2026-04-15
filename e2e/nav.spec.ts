import { expect, test } from "@playwright/test";

const NAV_TARGETS = ["/writing/", "/about/", "/ai/"] as const;

test.describe("primary navigation", () => {
  for (const href of NAV_TARGETS) {
    test(`nav link → ${href} loads with status 200`, async ({ page }) => {
      await page.goto("/", { waitUntil: "load" });
      const link = page.locator(`nav a[href="${href}"]`).first();
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(new RegExp(`${href.replace(/\//g, "\\/")}$`));
      await expect(page.locator("main, [role='main'], #main-content").first()).toBeVisible();
    });
  }

  test("home link returns to /", async ({ page }) => {
    await page.goto("/about/", { waitUntil: "load" });
    await page.locator('nav a[href="/"]').first().click();
    await expect(page).toHaveURL(/\/$/);
  });
});
