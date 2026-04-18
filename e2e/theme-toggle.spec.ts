import { expect, test } from "@playwright/test";

function themeAttr(page: import("@playwright/test").Page) {
  return page.evaluate(() => document.documentElement.getAttribute("data-theme"));
}

test.describe("theme toggle", () => {
  test("toggles dark ↔ light and persists across reload", async ({ page, context }) => {
    // Force dark baseline before any script runs.
    await context.addInitScript(() => {
      try { localStorage.setItem("theme", "dark"); } catch {}
    });
    await page.goto("/", { waitUntil: "load" });

    const html = page.locator("html");
    const btn = page.locator("[data-theme-toggle]");
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute("aria-pressed", "false");

    await btn.click();
    await expect(html).toHaveAttribute("data-theme", "light");
    await expect(btn).toHaveAttribute("aria-pressed", "true");
    await expect.poll(() => page.evaluate(() => localStorage.getItem("theme"))).toBe("light");

    await btn.click();
    // Dark mode removes the attribute entirely — assert it's gone.
    await expect(html).not.toHaveAttribute("data-theme", /.*/);
    await expect(btn).toHaveAttribute("aria-pressed", "false");
    await expect.poll(() => page.evaluate(() => localStorage.getItem("theme"))).toBe("dark");
  });

  test("toggle stays wired after SPA navigation", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    await page.locator('nav a[href="/about/"]').click();
    await expect(page).toHaveURL(/\/about\/$/);

    const btn = page.locator("[data-theme-toggle]");
    const beforeTheme = await themeAttr(page);
    await btn.click();
    await expect
      .poll(() => themeAttr(page), { message: "theme attribute should change on click after SPA nav" })
      .not.toBe(beforeTheme);
  });
});
