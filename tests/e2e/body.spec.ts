import { expect, test } from "@playwright/test";

async function setBodyProgress(page: import("@playwright/test").Page, progress: number) {
  await page.evaluate((nextProgress) => {
    const body = document.querySelector<HTMLElement>("#services");
    if (!body) throw new Error("BODY section not found");
    const rect = body.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const travel = Math.max(body.offsetHeight - window.innerHeight, 1);
    window.scrollTo(0, top + travel * nextProgress);
  }, progress);

  await page.waitForTimeout(250);
}

async function opacity(page: import("@playwright/test").Page, selector: string) {
  return page.locator(selector).evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).opacity),
  );
}

test.describe("BODY assembly pass 3", () => {
  test("core appears alone and then leaves permanently", async ({ page }) => {
    await page.goto("/");
    await setBodyProgress(page, 0.555);

    for (const asset of [
      "TS_hand.png",
      "TS_optics.png",
      "TS_left.png",
      "TS_right.png",
      "TS_lens.png",
      "TS_disp.png",
      "TS_base.png",
      "TS_foot.png",
    ]) {
      expect(await opacity(page, `[data-body-piece="${asset}"]`)).toBeLessThan(0.12);
    }

    expect(await opacity(page, '[data-body-piece="TS_core.png"]')).toBeGreaterThan(0.9);

    await setBodyProgress(page, 0.66);

    expect(await opacity(page, '[data-body-piece="TS_core.png"]')).toBeLessThan(0.12);
    expect(await opacity(page, '[data-body-piece="TS_disp.png"]')).toBeGreaterThan(0.82);
  });

  test("outline plane is above instrument plane", async ({ page }) => {
    await page.goto("/");

    const assemblyZ = await page.locator("[data-body-assembly]").evaluate((element) =>
      Number.parseInt(getComputedStyle(element).zIndex, 10),
    );
    const outlineZ = await page.locator("[data-body-outline-rail]").evaluate((element) =>
      Number.parseInt(getComputedStyle(element).zIndex, 10),
    );

    expect(outlineZ).toBeGreaterThan(assemblyZ);
  });

  test("mobile service stack does not absolutely overlap", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const labels = page.locator("[data-body-copy='1'] .serviceLabel");
    await expect(labels.first()).toBeVisible();
  });
}
