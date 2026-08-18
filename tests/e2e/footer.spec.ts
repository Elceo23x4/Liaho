import { expect, test } from "@playwright/test";

test.describe("Liahona current-Figma footer", () => {
  test("desktop keeps office address static and navigation interactive", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const footer = page.locator("[data-section='footer']");
    await expect(footer).toBeVisible();

    await expect(footer.getByText("OFFICE ADDRESS:")).toBeVisible();
    await expect(footer.getByText(/61, Kudirat Abiola Way/)).toBeVisible();
    expect(
      await footer.getByText("OFFICE ADDRESS:").evaluate((node) =>
        Boolean(node.closest("a, button")),
      ),
    ).toBe(false);

    await expect(footer.getByRole("link", { name: "TEAM" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "SITE WORKS" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "SERVICES" })).toBeVisible();
  });

  test("contact opens envelope form with required fields", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");

    const footer = page.locator("[data-section='footer']");
    await footer.getByRole("button", { name: "CONTACT US" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByLabel("Name")).toBeVisible();
    await expect(dialog.getByLabel("Email address")).toBeVisible();
    await expect(dialog.getByLabel("Message")).toBeVisible();
    await expect(dialog.getByRole("button", { name: /Continue to WhatsApp/i })).toBeVisible();
  });

  test("mobile uses the current 390×690 composition", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const footer = page.locator("[data-section='footer']");
    const box = await footer.boundingBox();

    expect(box).not.toBeNull();
    expect(Math.abs((box?.height ?? 0) - 690)).toBeLessThan(2);
    await expect(footer.getByRole("button", { name: "CONTACT US" })).toBeVisible();
  });

  test("scroll-to-top is fixed and navigation carries dust particles", async ({ page }) => {
    await page.goto("/");

    const top = page.getByRole("button", { name: "Scroll to top" });
    await expect(top).toBeVisible();
    expect(await top.evaluate((node) => getComputedStyle(node).position)).toBe("fixed");

    const team = page.locator("[data-section='footer']").getByRole("link", { name: "TEAM" });
    expect(await team.locator("i").count()).toBeGreaterThanOrEqual(10);
  });
});
