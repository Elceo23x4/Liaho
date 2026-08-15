import { expect, test, type Page } from "@playwright/test";

async function waitForHeroHydration(page: Page) {
  await page.locator('[data-section="hero"]').waitForFunction(
    (element: Element) => element.getAttribute("data-hydrated") === "true",
  );
}

test("HERO video is scrub-controlled and never autoplay/loop", async ({ page }) => {
  await page.goto("/");

  const hero = page.locator('[data-section="hero"]');
  const video = page.locator("[data-hero-video]");

  await expect(hero).toBeAttached();
  await expect(video).toBeAttached();

  await waitForHeroHydration(page);

  await video.waitForFunction(
    (element: HTMLVideoElement) =>
      element.readyState >= HTMLMediaElement.HAVE_METADATA &&
      element.dataset.mediaReady === "true",
    undefined,
    { timeout: 15_000 },
  );

  await expect(video).not.toHaveAttribute("autoplay", /.*/);
  await expect(video).not.toHaveAttribute("loop", /.*/);

  const box = await hero.boundingBox();
  expect(box).not.toBeNull();

  if (box) {
    await page.mouse.move(
      box.x + box.width * 0.82,
      box.y + box.height * 0.5,
    );

    await video.waitForFunction(
      (element: HTMLVideoElement) => element.currentTime > 5,
      undefined,
      { timeout: 10_000 },
    );

    const currentTime = await video.evaluate(
      (node: HTMLVideoElement) => node.currentTime,
    );

    expect(currentTime).toBeGreaterThan(5);
  }
});

test("HERO exposes live editorial links and map control", async ({ page }) => {
  await page.goto("/");
  await waitForHeroHydration(page);

  await expect(
    page.getByText("SURVEY PLAN REQUIRED AT e-PLANNING SCREENING"),
  ).toBeVisible();

  const mapButton = page.getByRole("button", {
    name: "Open Lagos blueprint map",
  });

  await expect(mapButton).toBeVisible();
  await mapButton.click();

  const dialog = page.getByRole("dialog", { name: "LAGOS BLUEPRINT" });
  await expect(dialog).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
});
