import { expect, test } from "@playwright/test";

test.describe("world clocks keyboard behavior", () => {
  test("focus mirrors hover highlighting for timezone rows", async ({ page }) => {
    await page.goto("/clocks/", { waitUntil: "load" });

    const sfoRow = page.locator('[data-tz-city="SFO"]');
    const nycRow = page.locator('[data-tz-city="NYC"]');

    await sfoRow.focus();
    await expect(sfoRow).toHaveAttribute("data-tz-hovered", "");

    const sfoHeaders = page.locator('[data-tz-matrix-head="SFO"]');
    await expect(sfoHeaders.first()).toHaveCSS("color", "rgb(255, 107, 107)");

    await nycRow.focus();
    await expect(nycRow).toHaveAttribute("data-tz-hovered", "");
    await expect(sfoRow).not.toHaveAttribute("data-tz-hovered", "");

    await page.locator(".nav__logo").focus();
    await expect(page.locator("[data-tz-hovered]")).toHaveCount(0);
  });
});
