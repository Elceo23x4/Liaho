import { expect, test } from "@playwright/test";

test.describe("footer zero-tail regression", () => {
  test("desktop copyright box ends at the authored 650 master boundary", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const footer = page.locator('footer[data-section="footer"]');
    const desktopViewport = footer.locator(":scope > div").first();
    const desktopScene = desktopViewport.locator(":scope > div").first();

    const copyright = footer
      .getByAltText("© 2026 Liahona Geoservices. Crafted with love by 8DAT.")
      .first()
      .locator("..");

    const sceneBox = await desktopScene.boundingBox();
    const copyrightBox = await copyright.boundingBox();

    expect(sceneBox).not.toBeNull();
    expect(copyrightBox).not.toBeNull();

    const sceneBottom = (sceneBox?.y ?? 0) + (sceneBox?.height ?? 0);
    const copyrightBottom = (copyrightBox?.y ?? 0) + (copyrightBox?.height ?? 0);

    expect(Math.abs(copyrightBottom - sceneBottom)).toBeLessThan(2);
  });

  test("document bottom aligns with visible desktop footer bottom", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(120);

    const footer = page.locator('footer[data-section="footer"]');
    const scene = footer.locator(":scope > div").first().locator(":scope > div").first();

    const box = await scene.boundingBox();
    expect(box).not.toBeNull();

    const bottom = (box?.y ?? 0) + (box?.height ?? 0);
    expect(Math.abs(bottom - 900)).toBeLessThan(3);
  });
});
