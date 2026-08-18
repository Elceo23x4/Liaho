import { expect, test } from "@playwright/test";

test.describe("Liahona footer parity fix 2", () => {
  test("desktop address keeps Figma line breaks inside the plaque", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const footer = page.locator("[data-section='footer']");
    await expect(footer).toBeVisible();

    const address = footer.getByText(/61, Kudirat Abiola Way/);
    await expect(address).toBeVisible();

    const whiteSpace = await address.evaluate((node) => getComputedStyle(node).whiteSpace);
    expect(whiteSpace).toBe("pre-line");
    await expect(address).toContainText("Lagos, Nigeria");
  });

  test("brand renders one logo image, not duplicated logo layers", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const footer = page.locator("[data-section='footer']");
    const brandLogos = footer.locator('img[src="/brand/logo.png"]');

    // One desktop + one hidden mobile instance in the DOM.
    expect(await brandLogos.count()).toBe(2);
  });

  test("contact sign owns its visible hit target", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const button = page
      .locator("[data-section='footer']")
      .getByRole("button", { name: "CONTACT US" });

    await expect(button).toBeVisible();

    const pointerEvents = await button
      .locator("span")
      .first()
      .evaluate((node) => getComputedStyle(node).pointerEvents);

    expect(pointerEvents).toBe("none");

    await button.click({ position: { x: 118, y: 32 } });
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("desktop footer rises over final BODY section", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const marginTop = await page
      .locator("[data-section='footer']")
      .evaluate((node) => Number.parseFloat(getComputedStyle(node).marginTop));

    expect(marginTop).toBeLessThan(-90);
  });

  test("social rings use current Figma center radial gradient", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const face = page
      .locator("[data-section='footer']")
      .locator("span")
      .filter({ has: page.locator('svg[viewBox="0 0 76 76"]') })
      .first();

    const background = await face.evaluate((node) => getComputedStyle(node).backgroundImage);
    expect(background).toContain("radial-gradient");
  });
});
