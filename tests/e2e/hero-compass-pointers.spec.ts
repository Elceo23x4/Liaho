import { expect, test } from "@playwright/test";

test.describe("hero survey-dock compass pointers", () => {
  test("animates all four original vector pointers", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const pointers = page.locator(
      '.dock-material svg g[stroke="#AA7A30"] > path',
    );

    await expect(pointers).toHaveCount(4);

    for (let index = 0; index < 4; index += 1) {
      expect(
        await pointers
          .nth(index)
          .evaluate((node) => getComputedStyle(node).animationName),
      ).toContain("dockPointerBearingSweep");
    }
  });

  test("pauses pointers together with N/S on dock hover", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const dock = page.locator(".dock-shell");
    const pointer = page.locator(
      '.dock-material svg g[stroke="#AA7A30"] > path',
    ).first();
    const north = page.locator(".dock-bearing-n");
    const south = page.locator(".dock-bearing-s");

    await dock.hover();
    await page.waitForTimeout(80);

    expect(
      await pointer.evaluate((node) => getComputedStyle(node).animationPlayState),
    ).toBe("paused");

    expect(
      await north.evaluate((node) => getComputedStyle(node).animationPlayState),
    ).toBe("paused");

    expect(
      await south.evaluate((node) => getComputedStyle(node).animationPlayState),
    ).toBe("paused");
  });
});
