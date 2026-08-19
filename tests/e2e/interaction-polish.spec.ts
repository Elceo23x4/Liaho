import { expect, test } from "@playwright/test";

test.describe("interaction + responsive polish", () => {
  test("BODY state 01 copy is immediate at the pin start", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const body = page.locator("section[data-scroll-vh]");
    await body.evaluate((node) => node.scrollIntoView({ block: "start" }));
    await page.waitForTimeout(120);

    const first = body.locator('[data-body-copy="1"]');
    await expect(first).toBeVisible();

    const opacity = await first.evaluate((node) => getComputedStyle(node).opacity);
    expect(Number(opacity)).toBeGreaterThan(0.99);
  });

  test("BODY progress rail only appears while BODY is pinned", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const rail = page.locator('[class*="progressRail"]');
    await expect(rail).toHaveAttribute("data-active", "false");

    const body = page.locator("section[data-scroll-vh]");
    await body.evaluate((node) => node.scrollIntoView({ block: "start" }));
    await page.waitForTimeout(120);

    await expect(rail).toHaveAttribute("data-active", "true");
  });

  test("tablet BODY scene fits the viewport", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 820 });
    await page.goto("/");

    const body = page.locator("section[data-scroll-vh]");
    await body.evaluate((node) => node.scrollIntoView({ block: "start" }));
    await page.waitForTimeout(120);

    const assembly = body.locator("[data-body-assembly]");
    const box = await assembly.boundingBox();

    expect(box).not.toBeNull();
    expect((box?.x ?? 0) + (box?.width ?? 0)).toBeLessThanOrEqual(1024 + 2);
  });

  test("hero outer links have pop interaction and dock labels exist", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const core = page.getByRole("link", { name: "CORE VALUES" });
    await expect(core).toBeVisible();

    const before = await core.evaluate((node) => getComputedStyle(node).transform);
    await core.hover();
    await page.waitForTimeout(280);
    const after = await core.evaluate((node) => getComputedStyle(node).transform);

    expect(after).not.toBe(before);

    await expect(page.locator(".dock-bearing-n")).toHaveText("N");
    await expect(page.locator(".dock-bearing-s")).toHaveText("S");
  });
});
