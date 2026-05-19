import { expect, test, type Page } from "@playwright/test";

const readTransform = (page: Page) =>
  page.locator(".worked__track-shift").evaluate((el) => (el as HTMLElement).style.transform);

test.describe("experience marquee pause/play toggle", () => {
  test("toggles aria-pressed and visible label", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });

    const btn = page.locator("[data-worked-toggle]");
    await expect(btn).toBeVisible();
    await expect(btn).toHaveAttribute("aria-pressed", "false");
    await expect(btn).toHaveAttribute("aria-label", "Pause companies marquee");
    await expect(btn.locator("[data-worked-toggle-label]")).toHaveText("Pause");

    await btn.click();
    await expect(btn).toHaveAttribute("aria-pressed", "true");
    await expect(btn).toHaveAttribute("aria-label", "Play companies marquee");
    await expect(btn.locator("[data-worked-toggle-label]")).toHaveText("Play");

    await btn.click();
    await expect(btn).toHaveAttribute("aria-pressed", "false");
    await expect(btn).toHaveAttribute("aria-label", "Pause companies marquee");
    await expect(btn.locator("[data-worked-toggle-label]")).toHaveText("Pause");
  });

  test("pausing stops the marquee transform from advancing", async ({ page }) => {
    // Pin reduced-motion off so the auto-scroll fires regardless of host defaults.
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto("/", { waitUntil: "load" });

    // The marquee uses an IntersectionObserver to start the rAF loop only when
    // the section is in view — on a desktop viewport it sits below the fold.
    await page.locator("[data-worked-marquee]").scrollIntoViewIfNeeded();

    // The marquee initialises on `astro:page-load` and needs a layout pass for
    // `scrollWidth` to settle, so poll until the transform has moved off origin
    // rather than relying on a fixed timeout.
    const initial = await readTransform(page);
    await expect
      .poll(() => readTransform(page), {
        message: "marquee should auto-advance once initialised",
        timeout: 4000,
      })
      .not.toBe(initial);

    await page.locator("[data-worked-toggle]").click();

    // Allow one rAF tick to register the paused flag, then capture the frozen
    // transform and confirm it does not move over a comparable window.
    await page.waitForTimeout(50);
    const tPaused = await readTransform(page);
    await page.waitForTimeout(700);
    const tStillPaused = await readTransform(page);
    expect(tStillPaused, "marquee should not advance while paused").toBe(tPaused);
  });
});
