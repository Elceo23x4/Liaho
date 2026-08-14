import { expect, test } from "@playwright/test";

test("HERO video is scrub-controlled and never autoplay/loop", async ({ page }) => {
  await page.goto("/");
  const video = page.locator("[data-hero-video]");
  await expect(video).toBeAttached();

  await expect(video).not.toHaveAttribute("autoplay", /.*/);
  await expect(video).not.toHaveAttribute("loop", /.*/);

  const hero = page.locator('[data-section="hero"]');
  const box = await hero.boundingBox();
  expect(box).not.toBeNull();

  if (box) {
    await page.mouse.move(box.x + box.width * 0.82, box.y + box.height * 0.5);
    await page.waitForTimeout(500);
    const currentTime = await video.evaluate((node: HTMLVideoElement) => node.currentTime);
    expect(currentTime).toBeGreaterThan(5);
  }
});

test("HERO exposes live editorial links and map control", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("SURVEY PLAN REQUIRED AT e-PLANNING SCREENING")).toBeVisible();

  await page.getByRole("button", { name: "Open Lagos blueprint map" }).click();
  await expect(page.getByRole("dialog", { name: "LAGOS BLUEPRINT" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "LAGOS BLUEPRINT" })).toHaveCount(0);
});
