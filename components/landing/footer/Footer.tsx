"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, type ReactNode, useState } from "react";

import { footerContent } from "@/content/footer";

import { ContactEnvelope } from "./ContactEnvelope";
import {
  BrandPlaqueArt,
  OfficePlaqueArt,
  SignPlaqueArt,
} from "./FooterVectorArt";
import { ScrollToTop } from "./ScrollToTop";

import styles from "./footer.module.css";

type Vars = CSSProperties & Record<`--${string}`, string | number>;

const poles = [
  [122, 356, 250, -1.5],
  [426, 354, 252, 1.2],
  [620.6, 218, 250, 0.7],
  [739.4, 218, 250, -0.5],
  [951, 288.11, 250, 0.7],
  [829.18, 296, 250, -0.5],
  [648.08, 384, 250, 0.7],
  [751.92, 384, 250, -0.5],
  [1314.72, 262, 250, 0.7],
  [1435.28, 262, 250, -0.5],
  [1343.44, 358, 250, 0.7],
  [1452.56, 358, 250, -0.5],
  [1604, 322, 215, 0],
  [1701, 268, 215, 0],
  [1787, 358, 215, 0],
  [1880, 306, 215, 0],
] as const;

const dust = [
  [-12, -2, -26, -18, 2.2, 0],
  [-7, 3, -18, -27, 1.6, 0.04],
  [-2, -4, -7, -31, 1.8, 0.08],
  [4, 2, 10, -26, 1.4, 0.02],
  [9, -3, 22, -21, 2.1, 0.07],
  [13, 2, 30, -12, 1.5, 0.1],
  [-10, 5, -31, -8, 1.2, 0.12],
  [-3, 5, -13, -19, 1.3, 0.05],
  [6, 5, 16, -15, 1.7, 0.09],
  [11, 5, 27, -5, 1.15, 0.03],
] as const;

const desktop = (x: number, y: number, w: number, h: number, r = 0): Vars => ({
  "--x": `${x / 19.2}cqw`,
  "--y": `${y / 19.2}cqw`,
  "--w": `${w / 19.2}cqw`,
  "--h": `${h / 19.2}cqw`,
  "--r": `${r}deg`,
});

const mobile = (x: number, y: number, w: number, h: number, r = 0): Vars => ({
  "--x": `${x / 3.9}cqw`,
  "--y": `${y / 3.9}cqw`,
  "--w": `${w / 3.9}cqw`,
  "--h": `${h / 3.9}cqw`,
  "--r": `${r}deg`,
});

function DustLabel({ children }: { children: ReactNode }) {
  return (
    <span className={styles.dustLabel}>
      <span className={styles.dustText}>{children}</span>
      <span className={styles.dustCloud} aria-hidden="true">
        {dust.map(([ox, oy, dx, dy, size, delay], index) => (
          <i
            key={index}
            style={
              {
                "--ox": `${ox}px`,
                "--oy": `${oy}px`,
                "--dx": `${dx}px`,
                "--dy": `${dy}px`,
                "--dust-size": `${size}px`,
                "--dust-delay": `${delay}s`,
              } as Vars
            }
          />
        ))}
      </span>
    </span>
  );
}

function SocialIcon({
  kind,
  label,
}: {
  kind: "instagram" | "x" | "linkedin" | "tiktok";
  label: string;
}) {
  return (
    <span className={styles.socialFace}>
      {kind === "instagram" ? (
        <span className={styles.instagramGlyph}><i /></span>
      ) : null}
      {kind === "x" ? <span className={styles.xGlyph} /> : null}
      {kind === "linkedin" ? <span className={styles.linkedinGlyph}>in</span> : null}
      {kind === "tiktok" ? <span className={styles.tiktokGlyph} /> : null}
      <span className={styles.srOnly}>{label}</span>
    </span>
  );
}

function SocialControl({
  kind,
  label,
  href,
  style,
}: {
  kind: "instagram" | "x" | "linkedin" | "tiktok";
  label: string;
  href: string | null;
  style: Vars;
}) {
  if (href) {
    return (
      <a
        className={styles.socialControl}
        style={style}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
      >
        <SocialIcon kind={kind} label={label} />
      </a>
    );
  }

  return (
    <span
      className={styles.socialControl}
      style={style}
      aria-label={label}
      aria-disabled="true"
    >
      <SocialIcon kind={kind} label={label} />
    </span>
  );
}

function Brand({
  mobileMode = false,
}: {
  mobileMode?: boolean;
}) {
  const p = mobileMode ? mobile : desktop;
  const plaque = mobileMode
    ? [42, 34, 304.67, 161.31] as const
    : [62, 186, 430, 220] as const;
  const logoBack = mobileMode
    ? [48.56, 66.2, 106.4, 106.4] as const
    : [66, 232, 152, 152] as const;
  const logoFront = mobileMode
    ? [66.76, 60.6, 85.4, 85.4] as const
    : [92, 224, 122, 122] as const;

  return (
    <>
      <div className={styles.brandPlaque} style={p(plaque[0], plaque[1], plaque[2], plaque[3])}>
        <BrandPlaqueArt />
      </div>
      <Image
        className={`${styles.brandLogo} ${styles.brandLogoBack}`}
        style={p(logoBack[0], logoBack[1], logoBack[2], logoBack[3])}
        src="/brand/logo.png"
        alt=""
        width={152}
        height={152}
        unoptimized
        draggable={false}
      />
      <Image
        className={`${styles.brandLogo} ${styles.brandLogoFront}`}
        style={p(logoFront[0], logoFront[1], logoFront[2], logoFront[3])}
        src="/brand/logo.png"
        alt=""
        width={122}
        height={122}
        unoptimized
        draggable={false}
      />
      <span
        className={`${styles.brandText} ${styles.brandName}`}
        style={
          mobileMode
            ? p(150.06, 66.9, 152, 41)
            : p(211, 233, 248, 59)
        }
      >
        LIAHONA
      </span>
      <span
        className={`${styles.brandText} ${styles.brandService}`}
        style={
          mobileMode
            ? p(167.56, 103.3, 156, 24)
            : p(236, 285, 222, 34)
        }
      >
        GEOSERVICES
      </span>
      <span
        className={`${styles.brandText} ${styles.brandLimited}`}
        style={
          mobileMode
            ? p(250.43, 128.35, 66, 11)
            : p(363, 324, 94, 18)
        }
      >
        Limited
      </span>
    </>
  );
}

function Office({ mobileMode = false }: { mobileMode?: boolean }) {
  const p = mobileMode ? mobile : desktop;

  return (
    <>
      <section
        className={styles.officePlaque}
        style={
          mobileMode
            ? p(78, 205, 220.53, 88.22)
            : p(510.26, 122, 302.26, 111.01, -2.2)
        }
        aria-label="Office address"
      >
        <OfficePlaqueArt />
      </section>
      <i
        className={styles.amberMarker}
        style={
          mobileMode
            ? p(85.2, 235.96, 6.48, 7.2)
            : p(525, 169, 9, 10)
        }
        aria-hidden="true"
      />
      <span
        className={`${styles.officeText} ${styles.officeLabel}`}
        style={
          mobileMode
            ? p(97.33, 233.42, 45.1, 25.2)
            : p(542.1, 166.64, 60, 33)
        }
      >
        {footerContent.office.label}
      </span>
      <address
        className={`${styles.officeText} ${styles.officeAddress}`}
        style={
          mobileMode
            ? p(142.09, 230.41, 143.49, 51.2)
            : p(609.58, 163.01, 188.16, 59)
        }
      >
        {footerContent.office.address}
      </address>
    </>
  );
}

function Sign({
  mobileMode = false,
  variant,
  label,
  href,
  onClick,
  geometry,
  dustHover,
}: {
  mobileMode?: boolean;
  variant: "team" | "contact" | "site" | "services";
  label: string;
  href?: string;
  onClick?: () => void;
  geometry: readonly [number, number, number, number, number?];
  dustHover?: boolean;
}) {
  const p = mobileMode ? mobile : desktop;
  const style = p(
    geometry[0],
    geometry[1],
    geometry[2],
    geometry[3],
    geometry[4] ?? 0,
  );
  const labelContent = dustHover ? <DustLabel>{label}</DustLabel> : label;

  const body = (
    <>
      <SignPlaqueArt variant={variant} />
      <span className={`${styles.signLabel} ${styles[`signLabel_${variant}`]}`}>
        {labelContent}
      </span>
      <i className={styles.signMarker} aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <Link
        className={`${styles.signAction} ${mobileMode ? styles.mobileSign : ""}`}
        style={style}
        href={href}
      >
        {body}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`${styles.signAction} ${mobileMode ? styles.mobileSign : ""}`}
      style={style}
      onClick={onClick}
      aria-haspopup={variant === "contact" ? "dialog" : undefined}
    >
      {body}
    </button>
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
            <div className={styles.desktopTerrain} aria-hidden="true" />
            <div className={styles.atmosphericVeil} aria-hidden="true" />
            <div className={styles.edgeVeil} aria-hidden="true" />

            {poles.map(([x, y, h, r], index) => (
              <i
                key={index}
                className={styles.pole}
                style={desktop(x, y, 9, h, r)}
                aria-hidden="true"
              />
            ))}

            <Brand />
            <Office />

            <Sign
              variant="team"
              label={footerContent.navigation.team.label}
              href={footerContent.navigation.team.href}
              geometry={[773, 247.86, 224, 62, 1.5]}
              dustHover
            />
            <Sign
              variant="contact"
              label={footerContent.contact.label}
              onClick={() => setContactOpen(true)}
              geometry={[582, 330, 236, 64, -1.4]}
            />
            <Sign
              variant="site"
              label={footerContent.navigation.siteWorks.label}
              href={footerContent.navigation.siteWorks.href}
              geometry={[1239, 208.17, 274, 66, 1.5]}
              dustHover
            />
            <Sign
              variant="services"
              label={footerContent.navigation.services.label}
              href={footerContent.navigation.services.href}
              geometry={[1274, 304, 248, 64, -1.4]}
              dustHover
            />

            <SocialControl kind="instagram" label="Instagram" href={social.Instagram} style={desktop(1570, 252, 76, 76)} />
            <SocialControl kind="x" label="X" href={social.X} style={desktop(1664, 192, 82, 82)} />
            <SocialControl kind="linkedin" label="LinkedIn" href={social.LinkedIn} style={desktop(1752, 286, 78, 78)} />
            <SocialControl kind="tiktok" label="TikTok" href={social.TikTok} style={desktop(1846, 233, 74, 74)} />

            <div className={styles.copyrightDesktop} style={desktop(655, 349, 711, 474)}>
              <Image
                src="/images/footer/copyright-current.png"
                alt="© 2026 Liahona Geoservices. Crafted with love by 8DAT."
                fill
                sizes="37vw"
                unoptimized
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div className={styles.mobileScene}>
          <div className={styles.mobileTerrain} aria-hidden="true" />
          <div className={styles.mobileAtmosphericVeil} aria-hidden="true" />
          <div className={styles.mobileEdgeVeil} aria-hidden="true" />
          <div className={styles.earthBlend} aria-hidden="true" />
          <div className={styles.earthBed} aria-hidden="true" />

          <Brand mobileMode />
          <Office mobileMode />

          <Sign
            mobileMode
            variant="team"
            label={footerContent.navigation.team.label}
            href={footerContent.navigation.team.href}
            geometry={[20, 320, 162.39, 48.85]}
            dustHover
          />
          <Sign
            mobileMode
            variant="contact"
            label={footerContent.contact.label}
            onClick={() => setContactOpen(true)}
            geometry={[202, 320, 161.5, 47.43]}
          />
          <Sign
            mobileMode
            variant="site"
            label={footerContent.navigation.siteWorks.label}
            href={footerContent.navigation.siteWorks.href}
            geometry={[20, 392, 162.62, 43.16]}
            dustHover
          />
          <Sign
            mobileMode
            variant="services"
            label={footerContent.navigation.services.label}
            href={footerContent.navigation.services.href}
            geometry={[205, 392, 162.17, 45.53]}
            dustHover
          />

          <SocialControl kind="instagram" label="Instagram" href={social.Instagram} style={mobile(42, 492, 47.12, 47.12)} />
          <SocialControl kind="x" label="X" href={social.X} style={mobile(124, 489, 49.2, 49.2)} />
          <SocialControl kind="linkedin" label="LinkedIn" href={social.LinkedIn} style={mobile(207, 491, 47.58, 47.58)} />
          <SocialControl kind="tiktok" label="TikTok" href={social.TikTok} style={mobile(290, 492, 45.88, 45.88)} />

          <div className={styles.copyrightMobile} style={mobile(29, 520, 334, 223)}>
            <Image
              src="/images/footer/copyright-current.png"
              alt="© 2026 Liahona Geoservices. Crafted with love by 8DAT."
              fill
              sizes="86vw"
              unoptimized
              draggable={false}
            />
          </div>
        </div>
      </footer>

      <ContactEnvelope open={contactOpen} onClose={() => setContactOpen(false)} />
      <ScrollToTop />
    </>
  );
}
