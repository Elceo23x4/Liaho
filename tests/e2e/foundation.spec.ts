import { expect, test } from "@playwright/test";

test("landing foundation exposes the three production sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator('[data-section="hero"]')).toBeAttached();
  await expect(page.locator('[data-section="body"]')).toBeAttached();
  await expect(page.locator('[data-section="footer"]')).toBeAttached();
});

test("foundation does not introduce horizontal page overflow", async ({ page }) => {
  await page.goto("/");

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );

  expect(hasOverflow).toBe(false);
});
