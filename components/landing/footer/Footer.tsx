"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useMemo, useState } from "react";

import { footerContent } from "@/content/footer";

import { ContactEnvelope } from "./ContactEnvelope";
import { footerFigmaSvg, type FooterFigmaSvgKey } from "./footerFigmaExports";
import { ScrollToTop } from "./ScrollToTop";
import styles from "./footer.module.css";

type Vars = CSSProperties & Record<`--${string}`, string | number>;

const desktop = (x: number, y: number, w: number, h: number): Vars => ({
  "--x": `${x / 19.2}cqw`,
  "--y": `${y / 19.2}cqw`,
  "--w": `${w / 19.2}cqw`,
  "--h": `${h / 19.2}cqw`,
});

const mobile = (x: number, y: number, w: number, h: number): Vars => ({
  "--x": `${x / 3.9}cqw`,
  "--y": `${y / 3.9}cqw`,
  "--w": `${w / 3.9}cqw`,
  "--h": `${h / 3.9}cqw`,
});

function scopeSvgIds(svg: string, scope: string) {
  const ids = Array.from(svg.matchAll(/\sid="([^"]+)"/g), (match) => match[1]);
  let scoped = svg;
  for (const id of ids) {
    const next = `${id}__${scope}`;
    scoped = scoped
      .replaceAll(`id="${id}"`, `id="${next}"`)
      .replaceAll(`url(#${id})`, `url(#${next})`)
      .replaceAll(`href="#${id}"`, `href="#${next}"`)
      .replaceAll(`xlink:href="#${id}"`, `xlink:href="#${next}"`);
  }
  return scoped;
}

function FigmaAsset({
  asset,
  scope,
  className = "",
}: {
  asset: FooterFigmaSvgKey;
  scope: string;
  className?: string;
}) {
  const html = useMemo(() => scopeSvgIds(footerFigmaSvg[asset], scope), [asset, scope]);
  return (
    <span
      className={`${styles.figmaSvg} ${className}`}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Dust() {
  return (
    <span className={styles.dustCloud} aria-hidden="true">
      {Array.from({ length: 10 }, (_, index) => <i key={index} />)}
    </span>
  );
}

function FigmaSign({
  asset,
  label,
  href,
  onClick,
  style,
  scope,
}: {
  asset: "team" | "contact" | "site" | "services";
  label: string;
  href?: string;
  onClick?: () => void;
  style: Vars;
  scope: string;
}) {
  const body = (
    <>
      <FigmaAsset asset={asset} scope={scope} />
      <Dust />
      <span className={styles.srOnly}>{label}</span>
    </>
  );

  if (href) {
    return (
      <Link className={styles.figmaAction} style={style} href={href} aria-label={label}>
        {body}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={styles.figmaAction}
      style={style}
      onClick={onClick}
      aria-label={label}
      aria-haspopup="dialog"
    >
      {body}
    </button>
  );
}

function Social({
  asset,
  label,
  href,
  style,
  scope,
}: {
  asset: "instagram" | "x" | "linkedin" | "tiktok";
  label: string;
  href: string | null;
  style: Vars;
  scope: string;
}) {
  const fallback = {
    instagram: "https://www.instagram.com/",
    x: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
    tiktok: "https://www.tiktok.com/",
  }[asset];

  return (
    <a
      className={styles.socialFigmaAction}
      style={style}
      href={href || fallback}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      data-profile-configured={href ? "true" : "false"}
    >
      <FigmaAsset asset={asset} scope={scope} />
    </a>
  );
}

function DesktopBrand() {
  return (
    <>
      <div className={styles.figmaLayer} style={desktop(62, 186, 436, 231)}>
        <FigmaAsset asset="brandPlaque" scope="brand-desktop" />
      </div>
      <Image
        className={styles.brandLogoDirect}
        style={desktop(92, 224, 122, 122)}
        src="/brand/logo.png"
        alt=""
        width={122}
        height={122}
        unoptimized
        draggable={false}
      />
      <div className={styles.figmaLayer} style={desktop(222.371, 251.469, 238.151, 29.084)}>
        <FigmaAsset asset="liahona" scope="liahona-desktop" />
      </div>
      <div className={styles.figmaLayer} style={desktop(245.715, 295.188, 220.371, 18.82)}>
        <FigmaAsset asset="geoservices" scope="geoservices-desktop" />
      </div>
    </>
  );
}

function MobileBrand() {
  return (
    <>
      <div className={styles.figmaLayer} style={mobile(42, 34, 305, 162)}>
        <FigmaAsset asset="brandPlaque" scope="brand-mobile" />
      </div>
      <Image
        className={styles.brandLogoDirect}
        style={mobile(66.76, 60.6, 85.4, 85.4)}
        src="/brand/logo.png"
        alt=""
        width={86}
        height={86}
        unoptimized
        draggable={false}
      />
      <div className={styles.figmaLayer} style={mobile(151.805, 76.928, 149.738, 20.359)}>
        <FigmaAsset asset="liahona" scope="liahona-mobile" />
      </div>
      <div className={styles.figmaLayer} style={mobile(168.063, 107.831, 154.243, 13.174)}>
        <FigmaAsset asset="geoservices" scope="geoservices-mobile" />
      </div>
    </>
  );
}

export function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const social = Object.fromEntries(
    footerContent.socials.map((item) => [item.label, item.href]),
  ) as Record<string, string | null>;

  return (
    <>
      <footer className={styles.root} data-section="footer">
        <div className={styles.desktopViewport}>
          <div className={styles.desktopScene}>
            <div className={styles.terrainStage} aria-hidden="true">
              <Image
                className={styles.terrainImage}
                src="/images/footer/footer-terrain.png"
                alt=""
                width={1536}
                height={1024}
                unoptimized
                draggable={false}
              />
            </div>

            <div className={`${styles.figmaLayer} ${styles.polesLayer}`} style={desktop(0, 0, 1920, 650)}>
              <FigmaAsset asset="poles" scope="poles-desktop" />
            </div>

            <DesktopBrand />

            <div className={styles.figmaLayer} style={desktop(515, 126, 307, 123)}>
              <FigmaAsset asset="address" scope="address-desktop" />
            </div>

            <FigmaSign asset="team" label={footerContent.navigation.team.label} href={footerContent.navigation.team.href} style={desktop(782, 246, 226, 68)} scope="team-desktop" />
            <FigmaSign asset="contact" label={footerContent.contact.label} onClick={() => setContactOpen(true)} style={desktop(589.436, 334, 238, 70)} scope="contact-desktop" />
            <FigmaSign asset="site" label={footerContent.navigation.siteWorks.label} href={footerContent.navigation.siteWorks.href} style={desktop(1248, 205, 276, 74)} scope="site-desktop" />
            <FigmaSign asset="services" label={footerContent.navigation.services.label} href={footerContent.navigation.services.href} style={desktop(1281.436, 308, 250, 71)} scope="services-desktop" />

            <Social asset="instagram" label="Instagram" href={social.Instagram} style={desktop(1567, 254, 100, 100)} scope="instagram-desktop" />
            <Social asset="x" label="X" href={social.X} style={desktop(1661, 194, 106, 106)} scope="x-desktop" />
            <Social asset="linkedin" label="LinkedIn" href={social.LinkedIn} style={desktop(1749, 288, 102, 102)} scope="linkedin-desktop" />
            <Social asset="tiktok" label="TikTok" href={social.TikTok} style={desktop(1843, 235, 98, 98)} scope="tiktok-desktop" />

            {/*
              The source copyright PNG is 711×474 but its visible plaque sits
              inside the authored 1920×650 footer frame. The old 474px-tall
              absolutely-positioned box extended to master y=827, so its
              transparent lower 177px enlarged the document's scrollable
              overflow and created the blank tail below the footer.

              Clip the desktop wrapper exactly at the authored footer bottom:
              650 - 353 = 297px. Keep the PNG itself at its original 711×474
              rendered size so the visible artwork is pixel-for-pixel unchanged.
            */}
            <div
              className={styles.copyrightDirect}
              style={{
                ...desktop(664, 353, 711, 297),
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/footer/copyright-current.png"
                alt="© 2026 Liahona Geoservices. Crafted with love by 8DAT."
                width={711}
                height={474}
                sizes="37vw"
                unoptimized
                draggable={false}
                style={{
                  display: "block",
                  width: `${711 / 19.2}cqw`,
                  height: `${474 / 19.2}cqw`,
                  maxWidth: "none",
                  objectFit: "fill",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>

        <div className={styles.mobileDirectScene}>
          <div className={styles.mobileTerrainStage} aria-hidden="true">
            <Image className={styles.mobileTerrainImage} src="/images/footer/footer-terrain.png" alt="" width={1536} height={1024} unoptimized draggable={false} />
          </div>

          <MobileBrand />
          <div className={styles.figmaLayer} style={mobile(78, 205, 221, 89)}><FigmaAsset asset="address" scope="address-mobile" /></div>
          <FigmaSign asset="team" label={footerContent.navigation.team.label} href={footerContent.navigation.team.href} style={mobile(20, 320, 163, 49)} scope="team-mobile" />
          <FigmaSign asset="contact" label={footerContent.contact.label} onClick={() => setContactOpen(true)} style={mobile(202, 320, 162, 48)} scope="contact-mobile" />
          <FigmaSign asset="site" label={footerContent.navigation.siteWorks.label} href={footerContent.navigation.siteWorks.href} style={mobile(20, 392, 163, 44)} scope="site-mobile" />
          <FigmaSign asset="services" label={footerContent.navigation.services.label} href={footerContent.navigation.services.href} style={mobile(205, 392, 163, 46)} scope="services-mobile" />

          <Social asset="instagram" label="Instagram" href={social.Instagram} style={mobile(34.56, 490.76, 62, 62)} scope="instagram-mobile" />
          <Social asset="x" label="X" href={social.X} style={mobile(116.8, 487.8, 63.6, 63.6)} scope="x-mobile" />
          <Social asset="linkedin" label="LinkedIn" href={social.LinkedIn} style={mobile(199.68, 489.78, 62.22, 62.22)} scope="linkedin-mobile" />
          <Social asset="tiktok" label="TikTok" href={social.TikTok} style={mobile(282.56, 490.76, 60.76, 60.76)} scope="tiktok-mobile" />

          <div className={styles.copyrightDirect} style={mobile(29, 520, 334, 223)}>
            <Image src="/images/footer/copyright-current.png" alt="© 2026 Liahona Geoservices. Crafted with love by 8DAT." fill sizes="86vw" unoptimized draggable={false} />
          </div>
        </div>
      </footer>

      <ContactEnvelope open={contactOpen} onClose={() => setContactOpen(false)} />
      <ScrollToTop />
    </>
  );
}
