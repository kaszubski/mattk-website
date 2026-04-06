import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

async function expectNoSeriousA11yViolations(page: import("@playwright/test").Page, path: string) {
  await page.goto(path);
  const { violations } = await new AxeBuilder({ page }).analyze();
  const serious = violations.filter((v) => v.impact === "serious" || v.impact === "critical");
  expect(serious, `${path}: ${serious.map((v) => `${v.id} — ${v.help}`).join("; ")}`).toEqual([]);
}

test.describe("accessibility (axe, serious + critical only)", () => {
  test("home", async ({ page }) => {
    await expectNoSeriousA11yViolations(page, "/");
  });

  test("writing index", async ({ page }) => {
    await expectNoSeriousA11yViolations(page, "/writing/");
  });

  test("accessibility statement", async ({ page }) => {
    await expectNoSeriousA11yViolations(page, "/accessibility/");
  });

  test("404 page", async ({ page }) => {
    await expectNoSeriousA11yViolations(page, "/this-route-should-not-exist-404-test/");
  });
});
