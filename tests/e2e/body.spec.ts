import { expect, test } from "@playwright/test";

async function setBodyProgress(
  page: import("@playwright/test").Page,
  progress: number,
) {
  await page.evaluate((nextProgress) => {
    const body = document.querySelector<HTMLElement>("#services");
    if (!body) throw new Error("BODY section not found");
    const rect = body.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const travel = Math.max(body.offsetHeight - window.innerHeight, 1);
    window.scrollTo(0, top + travel * nextProgress);
  }, progress);

  await page.waitForTimeout(300);
}

test.describe("BODY pass 4 regressions", () => {
  test("TS_lens renders above TS_disp", async ({ page }) => {
    await page.goto("/");

    const lens = await page
      .locator('[data-body-piece="TS_lens.png"]')
      .evaluate((element) => Number.parseInt(getComputedStyle(element).zIndex, 10));
    const display = await page
      .locator('[data-body-piece="TS_disp.png"]')
      .evaluate((element) => Number.parseInt(getComputedStyle(element).zIndex, 10));

    expect(lens).toBeGreaterThan(display);
  });

  test("typography overlay is above the station and has split line treatment", async ({
    page,
  }) => {
    await page.goto("/");

    const assemblyZ = await page
      .locator("[data-body-assembly]")
      .evaluate((element) => Number.parseInt(getComputedStyle(element).zIndex, 10));
    const overlayZ = await page
      .locator("[data-body-outline-rail]")
      .evaluate((element) => Number.parseInt(getComputedStyle(element).zIndex, 10));

    expect(overlayZ).toBeGreaterThan(assemblyZ);

    const upper = page.locator("[data-body-outline='1'] .outlineUpper");
    const lower = page.locator("[data-body-outline='1'] .outlineLower");

    expect(await upper.evaluate((el) => getComputedStyle(el).color)).not.toBe(
      "rgba(0, 0, 0, 0)",
    );
    expect(await lower.evaluate((el) => getComputedStyle(el).color)).toBe(
      "rgba(0, 0, 0, 0)",
    );
  });

  test("last typography overlay reads CONSULTS", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.locator("[data-body-outline='10'] .outlineUpper"),
    ).toHaveText("CONSULTS");
    await expect(
      page.locator("[data-body-outline='10'] .outlineLower"),
    ).toHaveText("CONSULTS");
  });

  test("mobile uses a smaller station and translucent content field", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await setBodyProgress(page, 0.72);

    const stationWidth = await page
      .locator("[data-body-assembly]")
      .evaluate((el) => el.getBoundingClientRect().width);
    expect(stationWidth).toBeLessThan(160);

    const copyBackground = await page
      .locator("[data-body-copy='8']")
      .evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(copyBackground).not.toBe("rgba(0, 0, 0, 0)");
  });
});
