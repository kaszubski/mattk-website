import { expect, test } from "@playwright/test";

test.describe("timezone dashboard", () => {
  test("renders five cities with live clocks on /clocks/", async ({ page }) => {
    await page.goto("/clocks/", { waitUntil: "load" });

    const dash = page.locator("[data-tz-dashboard]");
    await expect(dash).toBeVisible();

    const cities = page.locator("[data-tz-city]");
    await expect(cities).toHaveCount(5);

    // Clocks start as "--:--:--" and should tick to HH:MM:SS within a second.
    const firstClock = page.locator("[data-tz-clock]").first();
    await expect(firstClock).toHaveText(/^\d{2}:\d{2}:\d{2}$/, { timeout: 2000 });

    // Offset label should render something like "+02" / "-07".
    await expect(page.locator("[data-tz-offset]").first()).toHaveText(/^UTC[+-]\d{1,2}(:\d{2})?$/);
  });

  test("clock advances over time", async ({ page }) => {
    await page.goto("/clocks/", { waitUntil: "load" });
    const clock = page.locator("[data-tz-clock]").first();
    await expect(clock).toHaveText(/^\d{2}:\d{2}:\d{2}$/, { timeout: 2000 });

    const first = await clock.textContent();
    await expect
      .poll(async () => clock.textContent(), { timeout: 3000, intervals: [500, 500, 500] })
      .not.toBe(first);
  });
});
