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

async function opacity(
  page: import("@playwright/test").Page,
  selector: string,
) {
  return page.locator(selector).evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).opacity),
  );
}

test.describe("BODY assembly contract", () => {
  test("all instrument sources share one canonical registration box", async ({
    page,
  }) => {
    await page.goto("/");

    const body = page.locator("#services");
    await expect(body).toBeVisible();

    const assembly = body.locator("[data-body-assembly]");
    const assemblyBox = await assembly.boundingBox();
    expect(assemblyBox).not.toBeNull();

    const pieces = body.locator("[data-body-piece]");
    await expect(pieces).toHaveCount(9);

    for (let index = 0; index < 9; index += 1) {
      const box = await pieces.nth(index).boundingBox();
      expect(box).not.toBeNull();
      expect(Math.abs((box?.width ?? 0) - (assemblyBox?.width ?? 0))).toBeLessThan(1);
      expect(Math.abs((box?.height ?? 0) - (assemblyBox?.height ?? 0))).toBeLessThan(1);
    }

    const ratio = (assemblyBox?.width ?? 1) / (assemblyBox?.height ?? 1);
    expect(Math.abs(ratio - 2 / 3)).toBeLessThan(0.002);
  });

  test("builds cumulatively before the core interruption", async ({ page }) => {
    await page.goto("/");
    await setBodyProgress(page, 0.46);

    for (const asset of [
      "TS_hand.png",
      "TS_optics.png",
      "TS_left.png",
      "TS_right.png",
      "TS_lens.png",
    ]) {
      expect(
        await opacity(page, `[data-body-piece="${asset}"]`),
        `${asset} should be locked before core`,
      ).toBeGreaterThan(0.9);
    }
  });

  test("shows TS_core alone on its page", async ({ page }) => {
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
      expect(
        await opacity(page, `[data-body-piece="${asset}"]`),
        `${asset} must be absent while core owns the stage`,
      ).toBeLessThan(0.12);
    }

    expect(
      await opacity(page, '[data-body-piece="TS_core.png"]'),
    ).toBeGreaterThan(0.9);
  });

  test("core leaves permanently and the prior locked stack returns", async ({
    page,
  }) => {
    await page.goto("/");
    await setBodyProgress(page, 0.66);

    expect(
      await opacity(page, '[data-body-piece="TS_core.png"]'),
    ).toBeLessThan(0.12);

    for (const asset of [
      "TS_hand.png",
      "TS_optics.png",
      "TS_left.png",
      "TS_right.png",
      "TS_lens.png",
      "TS_disp.png",
    ]) {
      expect(
        await opacity(page, `[data-body-piece="${asset}"]`),
        `${asset} should participate after core handoff`,
      ).toBeGreaterThan(0.85);
    }
  });

  test("final TS_comp cross-resolves in the same registration box", async ({
    page,
  }) => {
    await page.goto("/");
    await setBodyProgress(page, 0.99);

    expect(await opacity(page, "[data-body-final-piece]")).toBeGreaterThan(0.92);
    expect(
      await opacity(page, '[data-body-piece="TS_core.png"]'),
    ).toBeLessThan(0.05);
  });

  test("outline typography is above the instrument plane", async ({ page }) => {
    await page.goto("/");

    const body = page.locator("#services");
    const assemblyZ = await body.locator("[data-body-assembly]").evaluate((element) =>
      Number.parseInt(getComputedStyle(element).zIndex, 10),
    );
    const outlineZ = await body.locator("[data-body-outline-rail]").evaluate((element) =>
      Number.parseInt(getComputedStyle(element).zIndex, 10),
    );

    expect(outlineZ).toBeGreaterThan(assemblyZ);
  });

  test("service content is prepared for character typing", async ({ page }) => {
    await page.goto("/");

    const body = page.locator("#services");
    expect(await body.locator("[data-type-char]").count()).toBeGreaterThan(300);
  });
});
