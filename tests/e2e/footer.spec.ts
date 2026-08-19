import { expect, test } from "@playwright/test";

test.describe("Liahona footer direct Figma export fix 3", () => {
  test("desktop footer itself is transparent and does not use the old negative black slab overlap", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const footer = page.locator("[data-section='footer']");
    await expect(footer).toBeVisible();

    const values = await footer.evaluate((node) => {
      const style = getComputedStyle(node);
      return { background: style.backgroundColor, marginTop: style.marginTop, overflow: style.overflow };
    });

    expect(values.background).toBe("rgba(0, 0, 0, 0)");
    expect(Number.parseFloat(values.marginTop)).toBe(0);
    expect(values.overflow).toBe("visible");
  });

  test("CONTACT US owns its complete visible plaque hit box", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const contact = page.locator("[data-section='footer']").getByRole("button", { name: "CONTACT US" });
    await expect(contact).toBeVisible();

    const box = await contact.boundingBox();
    expect(box).not.toBeNull();
    if (!box) return;

    // Click near the far-left edge, not merely on the text.
    await contact.click({ position: { x: 8, y: Math.max(8, box.height / 2) } });
    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("all four complete social rings are anchors", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const footer = page.locator("[data-section='footer']");
    for (const name of ["Instagram", "X", "LinkedIn", "TikTok"]) {
      const link = footer.getByRole("link", { name });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("href", /.+/);
    }
  });

  test("office plaque is the direct current Figma SVG export", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("/");

    const footer = page.locator("[data-section='footer']");
    await expect(footer.locator('svg g[id*="EXPORT_ONLY__address"]').first()).toBeVisible();
    await expect(footer.getByText(/61, Kudirat Abiola Way/).first()).toBeVisible();
  });
});
