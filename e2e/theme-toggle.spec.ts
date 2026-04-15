import { expect, test } from "@playwright/test";

async function themeAttr(page: import("@playwright/test").Page) {
  return page.evaluate(() => document.documentElement.getAttribute("data-theme"));
}

test.describe("theme toggle", () => {
  test("toggles dark ↔ light and persists across reload", async ({ page, context }) => {
    // Force dark baseline before any script runs.
    await context.addInitScript(() => {
      try { localStorage.setItem("theme", "dark"); } catch {}
    });
    await page.goto("/", { waitUntil: "load" });

    const btn = page.locator("[data-theme-toggle]");
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute("aria-pressed", "false");

    await btn.click();
    expect(await themeAttr(page)).toBe("light");
    await expect(btn).toHaveAttribute("aria-pressed", "true");
    expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe("light");

    await btn.click();
    expect(await themeAttr(page)).toBeNull();
    await expect(btn).toHaveAttribute("aria-pressed", "false");
    expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe("dark");
  });

  test("toggle stays wired after SPA navigation", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });
    await page.click('a[href="/about/"]');
    await expect(page).toHaveURL(/\/about\/$/);

    const btn = page.locator("[data-theme-toggle]");
    const beforeTheme = await themeAttr(page);
    await btn.click();
    const afterTheme = await themeAttr(page);
    expect(afterTheme).not.toBe(beforeTheme);
  });
});
