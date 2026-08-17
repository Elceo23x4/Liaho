"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { bodyStates } from "@/content/body";

import {
  BODY_DESIGN_HEIGHT,
  BODY_DESIGN_WIDTH,
  bodyFigmaLayouts,
  canonicalAssemblyBox,
  type FigmaBox,
} from "./bodyLayout";
import { BODY_SCROLL_VH } from "./bodyTimeline";
import styles from "./body.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ASSET_ROOT = "/images/body";

type CustomStyle = CSSProperties & Record<`--${string}`, string | number>;

const preCoreAssets = [
  "TS_hand.png",
  "TS_optics.png",
  "TS_left.png",
  "TS_right.png",
  "TS_lens.png",
] as const;

const postCoreAssets = [
  "TS_hand.png",
  "TS_optics.png",
  "TS_left.png",
  "TS_right.png",
  "TS_lens.png",
  "TS_disp.png",
  "TS_base.png",
  "TS_foot.png",
] as const;

const piecePresentation = {
  "TS_hand.png": {
    z: 14,
    lock: { x: "0vw", y: "-0.6vh", scale: 1, rotation: -0.3 },
    entry: { x: "0vw", y: "-24vh", scale: 0.985, rotation: -1.2 },
  },
  "TS_optics.png": {
    z: 22,
    lock: { x: "-0.2vw", y: "0.25vh", scale: 1, rotation: 0 },
    entry: { x: "2.4vw", y: "-18vh", scale: 0.982, rotation: 0.8 },
  },
  "TS_left.png": {
    z: 17,
    lock: { x: "-0.9vw", y: "0.55vh", scale: 1, rotation: 0 },
    entry: { x: "-34vw", y: "2vh", scale: 0.985, rotation: -1.4 },
  },
  "TS_right.png": {
    z: 16,
    lock: { x: "0.85vw", y: "0.55vh", scale: 1, rotation: 0 },
    entry: { x: "35vw", y: "-1vh", scale: 0.985, rotation: 1.4 },
  },
  "TS_lens.png": {
    z: 40,
    lock: { x: "0.2vw", y: "-0.1vh", scale: 1, rotation: 0 },
    entry: { x: "12vw", y: "-9vh", scale: 0.92, rotation: 1.4 },
  },
  "TS_core.png": {
    z: 15,
    lock: { x: "0vw", y: "0vh", scale: 1, rotation: 0 },
    entry: { x: "-2vw", y: "13vh", scale: 0.93, rotation: -1.3 },
  },
  "TS_disp.png": {
    z: 24,
    lock: { x: "0.15vw", y: "1.1vh", scale: 1, rotation: 0 },
    entry: { x: "13vw", y: "14vh", scale: 0.92, rotation: 1.2 },
  },
  "TS_base.png": {
    z: 12,
    lock: { x: "0.55vw", y: "2.65vh", scale: 1, rotation: 0 },
    entry: { x: "2vw", y: "25vh", scale: 0.96, rotation: 1.1 },
  },
  "TS_foot.png": {
    z: 11,
    lock: { x: "1.1vw", y: "3.1vh", scale: 1, rotation: 0 },
    entry: { x: "-1vw", y: "30vh", scale: 0.96, rotation: -0.8 },
  },
  "TS_comp.png": {
    z: 28,
    lock: { x: "0vw", y: "0vh", scale: 1, rotation: 0 },
    entry: { x: "0vw", y: "0vh", scale: 1, rotation: 0 },
  },
} as const;

function x(value: number) {
  return `${(value / BODY_DESIGN_WIDTH) * 100}cqw`;
}

function y(value: number) {
  return `${(value / BODY_DESIGN_HEIGHT) * 100}cqh`;
}

function textVars(box: FigmaBox): CustomStyle {
  return {
    "--x": x(box.x),
    "--y": y(box.y),
    "--w": x(box.width ?? 0),
    "--h": y(box.height ?? 0),
    "--fs": x(box.fontSize ?? 0),
    "--lh": x(box.lineHeight ?? box.fontSize ?? 0),
    "--ls": x(box.letterSpacing ?? 0),
  };
}

function shapeVars(box: FigmaBox): CustomStyle {
  return {
    "--x": x(box.x),
    "--y": y(box.y),
    "--w": x(box.width ?? 0),
    "--h": y(box.height ?? 0),
  };
}

function pieceVars(asset: keyof typeof piecePresentation): CustomStyle {
  return {
    "--piece-z": piecePresentation[asset].z,
  };
}

const assemblyStyle: CustomStyle = {
  "--assembly-x": x(canonicalAssemblyBox.x),
  "--assembly-y": y(canonicalAssemblyBox.y),
  "--assembly-w": x(canonicalAssemblyBox.width),
  "--assembly-h": y(canonicalAssemblyBox.height),
};

function TypingText({ text }: { text: string }) {
  return (
    <span className={styles.typingText} aria-label={text}>
      <span aria-hidden="true">
        {Array.from(text).map((character, index) => (
          <span
            key={`${index}-${character}`}
            className={styles.typeChar}
            data-type-char
          >
            {character}
          </span>
        ))}
      </span>
    </span>
  );
}

function ServiceBlock({
  stateIndex,
  serviceIndex,
}: {
  stateIndex: number;
  serviceIndex: number;
}) {
  const state = bodyStates[stateIndex];
  const service = state.services[serviceIndex];
  const layout = bodyFigmaLayouts[stateIndex].services.find(
    (item) => item.slot === service.slot,
  );

  if (!layout) return null;

  return (
    <div
      className={styles.serviceBlock}
      data-body-service
      data-service-slot={service.slot}
    >
      <i
        className={styles.serviceDiamond}
        style={shapeVars(layout.diamond)}
        data-service-diamond
        aria-hidden="true"
      />
      <p className={styles.serviceLabel} style={textVars(layout.label)}>
        <TypingText text={service.label} />
      </p>
      <p className={styles.serviceCopy} style={textVars(layout.copy)}>
        <TypingText text={service.copy} />
      </p>
    </div>
  );
}

function ScaleTicks() {
  return (
    <div className={styles.scaleTicks} aria-hidden="true">
      {Array.from({ length: 26 }, (_, index) => (
        <i
          key={index}
          className={index % 5 === 0 ? styles.majorTick : styles.minorTick}
        />
      ))}
    </div>
  );
}

export function Body() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const pieceByAsset = new Map<string, HTMLElement>();
      root.querySelectorAll<HTMLElement>("[data-body-piece]").forEach((node) => {
        const asset = node.dataset.bodyPiece;
        if (asset) pieceByAsset.set(asset, node);
      });

      const finalPiece = root.querySelector<HTMLElement>(
        "[data-body-final-piece]",
      );
      const copyStates = Array.from(
        root.querySelectorAll<HTMLElement>("[data-body-copy]"),
      );
      const outlineStates = Array.from(
        root.querySelectorAll<HTMLElement>("[data-body-outline]"),
      );
      const outlineRail = root.querySelector<HTMLElement>(
        "[data-body-outline-rail]",
      );

      if (!finalPiece || !outlineRail) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const allPieceNodes = Array.from(pieceByAsset.values());

      const setLockedState = (asset: keyof typeof piecePresentation) => {
        const target = pieceByAsset.get(asset);
        if (!target) return;
        const lock = piecePresentation[asset].lock;
        gsap.set(target, {
          x: lock.x,
          y: lock.y,
          rotation: lock.rotation,
          scale: lock.scale,
          opacity: 0,
          transformOrigin: "50% 50%",
          force3D: true,
        });
      };

      (Object.keys(piecePresentation) as Array<keyof typeof piecePresentation>)
        .filter((asset) => asset !== "TS_comp.png")
        .forEach((asset) => setLockedState(asset));

      gsap.set(finalPiece, {
        x: piecePresentation["TS_comp.png"].lock.x,
        y: piecePresentation["TS_comp.png"].lock.y,
        rotation: 0,
        scale: 1,
        opacity: 0,
        transformOrigin: "50% 50%",
        force3D: true,
      });

      gsap.set(copyStates, { autoAlpha: 0 });
      gsap.set(outlineStates, { opacity: 0 });
      gsap.set(outlineRail, { x: "-1.6vw" });

      root.querySelectorAll<HTMLElement>("[data-heading-main]").forEach((node) => {
        gsap.set(node, {
          opacity: 0,
          x: 18,
          filter: "blur(11px)",
          clipPath: "inset(0 100% 0 0)",
        });
      });
      root.querySelectorAll<HTMLElement>("[data-heading-ghost]").forEach((node) => {
        gsap.set(node, {
          opacity: 0,
          x: -16,
          filter: "blur(18px)",
        });
      });
      root.querySelectorAll<HTMLElement>("[data-type-char]").forEach((node) => {
        gsap.set(node, { opacity: 0 });
      });
      root
        .querySelectorAll<HTMLElement>("[data-service-diamond]")
        .forEach((node) => {
          gsap.set(node, { opacity: 0, scale: 0.2, rotation: 45 });
        });

      if (reduceMotion) {
        gsap.set(allPieceNodes, { opacity: 0 });
        gsap.set(finalPiece, { opacity: 1 });
        const finalCopy = copyStates[copyStates.length - 1];
        if (finalCopy) gsap.set(finalCopy, { autoAlpha: 1 });
        const finalOutline = outlineStates[outlineStates.length - 1];
        if (finalOutline) gsap.set(finalOutline, { opacity: 1 });
        root.querySelectorAll<HTMLElement>("[data-heading-main]").forEach((node) => {
          gsap.set(node, {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            clipPath: "inset(0 0% 0 0)",
          });
        });
        root.querySelectorAll<HTMLElement>("[data-type-char]").forEach((node) => {
          gsap.set(node, { opacity: 1 });
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { overwrite: false },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.7,
          invalidateOnRefresh: true,
          fastScrollEnd: false,
          anticipatePin: 1,
        },
      });

      const revealPiece = (
        asset: keyof typeof piecePresentation,
        start: number,
        duration: number,
      ) => {
        const target = pieceByAsset.get(asset);
        if (!target) return;
        const entry = piecePresentation[asset].entry;
        const lock = piecePresentation[asset].lock;

        timeline.fromTo(
          target,
          { ...entry, opacity: 0 },
          {
            x: lock.x,
            y: lock.y,
            rotation: lock.rotation,
            scale: lock.scale,
            opacity: 1,
            duration,
            ease: "power3.out",
          },
          start,
        );
      };

      revealPiece("TS_hand.png", 0, 6);
      revealPiece("TS_optics.png", 10, 6);
      revealPiece("TS_left.png", 20, 6);
      revealPiece("TS_right.png", 30, 6);
      revealPiece("TS_lens.png", 40, 6);

      const explosionTargets = {
        "TS_hand.png": { x: "-4vw", y: "-28vh", rotation: -6, scale: 0.95 },
        "TS_optics.png": { x: "5vw", y: "-22vh", rotation: 5, scale: 0.95 },
        "TS_left.png": { x: "-38vw", y: "4vh", rotation: -7, scale: 0.95 },
        "TS_right.png": { x: "38vw", y: "-4vh", rotation: 7, scale: 0.95 },
        "TS_lens.png": { x: "18vw", y: "-18vh", rotation: 6, scale: 0.88 },
      } as const;

      preCoreAssets.forEach((asset) => {
        const target = pieceByAsset.get(asset);
        if (!target) return;
        timeline.to(
          target,
          {
            ...explosionTargets[asset],
            opacity: 0,
            duration: 2.1,
            ease: "power3.in",
          },
          48,
        );
      });

      revealPiece("TS_core.png", 50, 5.5);

      const core = pieceByAsset.get("TS_core.png");
      if (core) {
        timeline.to(
          core,
          {
            x: "30vw",
            y: "-3vh",
            rotation: 4,
            scale: 0.96,
            opacity: 0,
            duration: 2.1,
            ease: "power3.inOut",
          },
          58,
        );
      }

      preCoreAssets.forEach((asset) => {
        const target = pieceByAsset.get(asset);
        if (!target) return;
        const lock = piecePresentation[asset].lock;
        timeline.to(
          target,
          {
            x: lock.x,
            y: lock.y,
            rotation: lock.rotation,
            scale: lock.scale,
            opacity: 1,
            duration: 2.1,
            ease: "power3.out",
          },
          58,
        );
      });

      revealPiece("TS_disp.png", 60, 6);
      revealPiece("TS_base.png", 70, 6);
      revealPiece("TS_foot.png", 80, 6);

      postCoreAssets.forEach((asset) => {
        const target = pieceByAsset.get(asset);
        if (!target) return;
        timeline.to(
          target,
          {
            opacity: 0,
            scale: 0.992,
            duration: 8,
            ease: "power1.inOut",
          },
          90,
        );
      });

      timeline.fromTo(
        finalPiece,
        { opacity: 0, scale: 1.008, filter: "blur(4px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 8,
          ease: "power2.inOut",
        },
        90,
      );

      copyStates.forEach((copy, index) => {
        const start = index * 10;
        const nextStart = (index + 1) * 10;

        const headingMain = copy.querySelector<HTMLElement>("[data-heading-main]");
        const headingGhost =
          copy.querySelector<HTMLElement>("[data-heading-ghost]");
        const subheading =
          copy.querySelector<HTMLElement>("[data-body-subheading]");
        const intro = copy.querySelector<HTMLElement>("[data-body-intro]");
        const staticMeta = copy.querySelectorAll<HTMLElement>(
          "[data-body-static-meta]",
        );
        const serviceBlocks = Array.from(
          copy.querySelectorAll<HTMLElement>("[data-body-service]"),
        );

        timeline.set(copy, { autoAlpha: 1 }, start + 0.15);

        if (headingGhost) {
          timeline.fromTo(
            headingGhost,
            { opacity: 0, x: -16, filter: "blur(18px)" },
            {
              opacity: 0.85,
              x: 0,
              filter: "blur(6px)",
              duration: 1,
              ease: "power3.out",
            },
            start + 0.18,
          );
          timeline.to(
            headingGhost,
            {
              opacity: 0.14,
              filter: "blur(0px)",
              duration: 0.85,
              ease: "power2.out",
            },
            start + 1.0,
          );
        }

        if (headingMain) {
          timeline.fromTo(
            headingMain,
            {
              opacity: 0,
              x: 18,
              filter: "blur(11px)",
              clipPath: "inset(0 100% 0 0)",
            },
            {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              clipPath: "inset(0 0% 0 0)",
              duration: 1.75,
              ease: "power3.out",
            },
            start + 0.32,
          );
        }

        if (subheading) {
          timeline.fromTo(
            subheading,
            { opacity: 0, y: 14, filter: "blur(5px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.0,
              ease: "power3.out",
            },
            start + 0.85,
          );
        }

        if (intro) {
          timeline.fromTo(
            intro,
            { opacity: 0, y: 16, filter: "blur(5px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.15,
              ease: "power3.out",
            },
            start + 1.05,
          );
        }

        staticMeta.forEach((node) => {
          timeline.fromTo(
            node,
            { opacity: 0, y: 8 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
            },
            start + 1.18,
          );
        });

        serviceBlocks.forEach((block, serviceIndex) => {
          const diamond =
            block.querySelector<HTMLElement>("[data-service-diamond]");
          const chars = Array.from(
            block.querySelectorAll<HTMLElement>("[data-type-char]"),
          );
          const serviceStart = start + 1.7 + serviceIndex * 0.72;

          if (diamond) {
            timeline.fromTo(
              diamond,
              { opacity: 0, scale: 0.2, rotation: 45 },
              {
                opacity: 1,
                scale: 1,
                rotation: 45,
                duration: 0.55,
                ease: "back.out(1.7)",
              },
              serviceStart,
            );
          }

          if (chars.length) {
            timeline.to(
              chars,
              {
                opacity: 1,
                duration: 0.06,
                stagger: {
                  each: 0.018,
                  from: "start",
                },
                ease: "none",
              },
              serviceStart + 0.18,
            );
          }
        });

        const outline = outlineStates[index];
        if (outline) {
          timeline.to(
            outline,
            {
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
            },
            start + 0.35,
          );
        }

        if (index < copyStates.length - 1) {
          timeline.to(
            copy,
            {
              autoAlpha: 0,
              duration: 0.8,
              ease: "power2.inOut",
            },
            nextStart - 0.8,
          );

          if (outline) {
            timeline.to(
              outline,
              {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
              },
              nextStart - 0.8,
            );
          }
        }
      });

      timeline.fromTo(
        outlineRail,
        { x: "-1.6vw" },
        { x: "1.6vw", duration: 100, ease: "none" },
        0,
      );

      return () => {
        root.removeAttribute("data-motion");
      };
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      id="services"
      className={styles.root}
      data-scroll-vh={BODY_SCROLL_VH}
      aria-labelledby="body-heading"
    >
      <div className={styles.semanticOnly}>
        <h2 id="body-heading">Liahona Geoservices capabilities</h2>
        {bodyStates.map((state) => (
          <article key={state.index}>
            <h3>{state.heading}</h3>
            <p>{state.intro}</p>
            <ul>
              {state.services.map((service) => (
                <li key={`${state.index}-${service.slot}-${service.label}`}>
                  <strong>{service.label}</strong>: {service.copy}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className={styles.stickyStage} data-body-sticky-stage>
        <div className={styles.backgroundLayer} aria-hidden="true" />

        <div className={styles.scene}>
          <div className={styles.stageRule} aria-hidden="true" />

          <div
            className={styles.instrumentCanvas}
            style={assemblyStyle}
            data-body-assembly
            aria-hidden="true"
          >
            {preCoreAssets.map((asset) => (
              <div
                key={asset}
                className={styles.instrumentPiece}
                data-body-piece={asset}
                style={pieceVars(asset)}
              >
                <Image
                  src={`${ASSET_ROOT}/${asset}`}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 62vw, 30vw"
                  unoptimized
                  draggable={false}
                />
              </div>
            ))}
            {(["TS_core.png", "TS_disp.png", "TS_base.png", "TS_foot.png"] as const).map(
              (asset) => (
                <div
                  key={asset}
                  className={styles.instrumentPiece}
                  data-body-piece={asset}
                  style={pieceVars(asset)}
                >
                  <Image
                    src={`${ASSET_ROOT}/${asset}`}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 62vw, 30vw"
                    unoptimized
                    draggable={false}
                  />
                </div>
              ),
            )}

            <div
              className={`${styles.instrumentPiece} ${styles.finalPiece}`}
              data-body-final-piece
              style={pieceVars("TS_comp.png")}
            >
              <Image
                src={`${ASSET_ROOT}/TS_comp.png`}
                alt=""
                fill
                sizes="(max-width: 767px) 62vw, 30vw"
                unoptimized
                draggable={false}
              />
            </div>
          </div>

          <div
            className={styles.outlineRail}
            data-body-outline-rail
            aria-hidden="true"
          >
            {bodyStates.map((state, index) => {
              const layout = bodyFigmaLayouts[index];
              return (
                <div
                  key={`outline-${state.index}`}
                  className={styles.outlineState}
                  data-body-outline={state.index}
                  style={textVars(layout.outline)}
                >
                  <span className={styles.outlineUpper}>{state.outline}</span>
                  <span className={styles.outlineLower}>{state.outline}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.copyRail}>
            {bodyStates.map((state, index) => {
              const layout = bodyFigmaLayouts[index];

              return (
                <article
                  key={state.index}
                  className={styles.stateCopy}
                  data-body-copy={state.index}
                >
                  <h3
                    className={`${styles.heading} ${
                      state.mobileHeadingScale === "xl"
                        ? styles.mobileHeadingXl
                        : state.mobileHeadingScale === "lg"
                          ? styles.mobileHeadingLg
                          : styles.mobileHeadingMd
                    }`}
                    style={textVars(layout.heading)}
                    data-text={state.heading}
                  >
                    <span
                      className={styles.headingGhost}
                      data-heading-ghost
                      aria-hidden="true"
                    >
                      {state.heading}
                    </span>
                    <span className={styles.headingMain} data-heading-main>
                      {state.heading}
                    </span>
                  </h3>

                  {state.subheading && layout.subheading ? (
                    <p
                      className={styles.subheading}
                      style={textVars(layout.subheading)}
                      data-body-subheading
                    >
                      {state.subheading}
                    </p>
                  ) : null}

                  <p
                    className={styles.intro}
                    style={textVars(layout.intro)}
                    data-body-intro
                  >
                    {state.intro}
                  </p>

                  <div className={styles.servicesGrid}>
                    {state.services.map((service, serviceIndex) => (
                      <ServiceBlock
                        key={`${state.index}-${service.slot}-${service.label}`}
                        stateIndex={index}
                        serviceIndex={serviceIndex}
                      />
                    ))}
                  </div>

                  <i
                    className={styles.bottomRule}
                    style={shapeVars(layout.bottomRule)}
                    data-body-static-meta
                    aria-hidden="true"
                  />
                  <span
                    className={styles.bottomLink}
                    style={textVars(layout.bottomLinkOne)}
                    data-body-static-meta
                  >
                    {state.bottomLinks[0]}
                  </span>
                  <i
                    className={styles.bottomDivider}
                    style={shapeVars(layout.bottomDivider)}
                    data-body-static-meta
                    aria-hidden="true"
                  />
                  <span
                    className={styles.bottomLink}
                    style={textVars(layout.bottomLinkTwo)}
                    data-body-static-meta
                  >
                    {state.bottomLinks[1]}
                  </span>

                  <i
                    className={styles.techLead}
                    style={shapeVars(layout.techLead)}
                    data-body-static-meta
                    aria-hidden="true"
                  />
                  <span
                    className={styles.techNote}
                    style={textVars(layout.techNote)}
                    data-body-static-meta
                  >
                    {state.techNote}
                  </span>
                </article>
              );
            })}
          </div>

          <p className={styles.coordinates}>
            06°27&apos;N&nbsp;&nbsp;/&nbsp;&nbsp;03°23&apos;E
            &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;LAGOS / FIELD
            INTELLIGENCE
          </p>

          <ScaleTicks />

          <p className={styles.mobileMotionHint}>
            ACTUAL EXPERIENCE: 900VH PINNED • REVEAL → LOCK → HANDOFF
          </p>
        </div>
      </div>
    </section>
  );
}
