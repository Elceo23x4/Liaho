import { expect, test } from "@playwright/test";

test.describe("BODY pinned service system", () => {
  test("keeps the 900vh architecture and all ten production assets", async ({
    page,
  }) => {
    await page.goto("/");

    const body = page.locator("#services");
    await expect(body).toBeVisible();

    const viewport = page.viewportSize();
    expect(viewport).not.toBeNull();

    const height = await body.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).height),
    );

    expect(height).toBeGreaterThan((viewport?.height ?? 720) * 8.5);

    await expect(body.locator("[data-body-piece]")).toHaveCount(9);
    await expect(body.locator("[data-body-final-piece]")).toHaveCount(1);
    await expect(body.locator("[data-body-copy]")).toHaveCount(10);
    await expect(body.locator("[data-body-outline]")).toHaveCount(10);
  });

  test("pins the stage at viewport top", async ({ page }) => {
    await page.goto("/");

    const body = page.locator("#services");
    await body.scrollIntoViewIfNeeded();

    await expect(body).toBeVisible();

    const position = await body
      .locator("[data-body-sticky-stage]")
      .evaluate((element) => getComputedStyle(element).position);

    expect(position).toBe("sticky");
  });

  test("reduced motion exposes the complete instrument state", async ({
    browser,
  }) => {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();

    await page.goto("/");

    const body = page.locator("#services");
    await expect(body).toHaveAttribute("data-motion", "reduced");

    const finalPiece = body.locator("[data-body-final-piece]");
    await expect(finalPiece).toBeVisible();

    const opacity = await finalPiece.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).opacity),
    );

    expect(opacity).toBeGreaterThan(0.99);

    await context.close();
  });
});
