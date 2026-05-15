import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";
import { getLatestWritingSlug } from "./helpers/latest-writing-slug";

const COLOR_SCHEMES = ["light", "dark"] as const;

const articlePath = `/writing/${getLatestWritingSlug()}/`;

const ROUTES = [
  ["home", "/"],
  ["writing index", "/writing/"],
  ["writing article (MDX)", articlePath],
  ["about", "/about/"],
  ["AI manifesto", "/ai/"],
  ["stack", "/stack/"],
  ["accessibility statement", "/accessibility/"],
  ["clocks", "/clocks/"],
  ["404 page", "/this-route-should-not-exist-404-test/"],
] as const;

async function expectNoA11yViolations(page: Page, pathname: string, colorScheme: "light" | "dark") {
  // `BaseLayout` prefers saved `localStorage.theme` over `prefers-color-scheme`; clear it so
  // emulateMedia reliably drives light/dark tokens for these checks.
  await page.addInitScript(() => {
    try {
      localStorage.removeItem("theme");
    } catch {
      /* noop */
    }
  });
  // Audit the settled visual state. Entrance animations (e.g. the timezone
  // dashboard's staggered fade-up) transiently lower contrast mid-transition;
  // reduced motion pins elements to their final opacity so axe scans a stable
  // frame. Colour contrast itself is motion-independent, so coverage is intact.
  await page.emulateMedia({ colorScheme, reducedMotion: "reduce" });
  await page.goto(pathname, { waitUntil: "load" });

  await expect(page.locator("#main-content"), `${pathname}: main landmark`).toBeVisible();

  const { violations } = await new AxeBuilder({ page }).analyze();
  const failing = violations.filter((v) => v.impact === "moderate" || v.impact === "serious" || v.impact === "critical");
  const label = `${pathname} [${colorScheme}]: ${failing.map((v) => `${v.id} (${v.impact}) — ${v.help}`).join("; ")}`;
  expect(failing, label).toEqual([]);
}

test.describe("accessibility (axe, moderate + serious + critical)", () => {
  for (const [name, pathname] of ROUTES) {
    for (const scheme of COLOR_SCHEMES) {
      test(`${name} (${scheme})`, async ({ page }) => {
        await expectNoA11yViolations(page, pathname, scheme);
      });
    }
  }
});
