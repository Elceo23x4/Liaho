"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { bodyStates } from "@/content/body";

import { BODY_SCROLL_VH, bodyTimeline } from "./bodyTimeline";
import styles from "./body.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ASSET_ROOT = "/images/body";

function buildEntry(stage: (typeof bodyTimeline)[number]) {
  return {
    x: stage.entry.xVw ? `${stage.entry.xVw}vw` : 0,
    y: stage.entry.yVh ? `${stage.entry.yVh}vh` : 0,
    rotation: stage.entry.rotateDeg?.[0] ?? 0,
    scale: stage.entry.scale?.[0] ?? 1,
    opacity: stage.entry.opacity?.[0] ?? 1,
  };
}

function buildLocked(stage: (typeof bodyTimeline)[number]) {
  return {
    x: 0,
    y: 0,
    rotation: stage.entry.rotateDeg?.[1] ?? 0,
    scale: stage.entry.scale?.[1] ?? 1,
    opacity: stage.entry.opacity?.[1] ?? 1,
  };
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

function ServiceDiamond() {
  return <i className={styles.serviceDiamond} aria-hidden="true" />;
}

export function Body() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const pieceStack = Array.from(
        root.querySelectorAll<HTMLElement>("[data-body-piece]"),
      );
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

      gsap.set(pieceStack, { transformOrigin: "50% 50%" });
      gsap.set(finalPiece, {
        opacity: 0,
        y: "3vh",
        scale: 0.985,
        transformOrigin: "50% 50%",
      });
      gsap.set(copyStates, { opacity: 0, y: 28 });
      gsap.set(outlineStates, { opacity: 0 });
      gsap.set(outlineRail, { x: "-2.5vw" });

      if (reduceMotion) {
        gsap.set(pieceStack, { opacity: 0, x: 0, y: 0, rotation: 0, scale: 1 });
        gsap.set(finalPiece, { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1 });
        gsap.set(copyStates, { opacity: 0, y: 0 });
        const finalCopy = copyStates[copyStates.length - 1];
        if (finalCopy) gsap.set(finalCopy, { opacity: 1, y: 0 });

        gsap.set(outlineStates, { opacity: 0 });
        const finalOutline = outlineStates[outlineStates.length - 1];
        if (finalOutline) gsap.set(finalOutline, { opacity: 1 });
        gsap.set(outlineRail, { x: 0 });
        root.dataset.motion = "reduced";
        return;
      }

      root.dataset.motion = "full";

      const timeline = gsap.timeline({
        defaults: { overwrite: "auto" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: false,
        },
      });

      bodyTimeline.slice(0, 9).forEach((stage) => {
        const target = root.querySelector<HTMLElement>(
          `[data-body-piece="${stage.asset}"]`,
        );
        if (!target) return;

        timeline.fromTo(
          target,
          buildEntry(stage),
          {
            ...buildLocked(stage),
            duration: stage.reveal[1] - stage.reveal[0],
            ease: "power3.out",
          },
          stage.reveal[0],
        );
      });

      /*
       * State copy changes only after the corresponding instrument component
       * reaches LOCK. It remains readable while the next component travels,
       * then yields just before that next component locks.
       */
      copyStates.forEach((copy, index) => {
        const state = bodyTimeline[index];
        const enterAt = index === bodyTimeline.length - 1 ? 88 : state.reveal[1];
        const nextState = bodyTimeline[index + 1];
        const leaveAt = nextState ? nextState.reveal[1] : 100;
        const inDuration = 1.15;
        const outDuration = 1.15;

        timeline.to(
          copy,
          {
            opacity: 1,
            y: 0,
            duration: inDuration,
            ease: "power3.out",
          },
          enterAt,
        );

        if (nextState) {
          timeline.to(
            copy,
            {
              opacity: 0,
              y: -18,
              duration: outDuration,
              ease: "power2.inOut",
            },
            Math.max(enterAt + inDuration, leaveAt - outDuration),
          );
        }
      });

      outlineStates.forEach((outline, index) => {
        const state = bodyTimeline[index];
        const enterAt =
          index === bodyTimeline.length - 1
            ? 88
            : Math.max(0, state.reveal[1] - 0.6);
        const nextState = bodyTimeline[index + 1];
        const leaveAt = nextState ? nextState.reveal[1] : 100;

        timeline.to(
          outline,
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          enterAt,
        );

        if (nextState) {
          timeline.to(
            outline,
            {
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
            },
            leaveAt - 0.8,
          );
        }
      });

      timeline.fromTo(
        outlineRail,
        { x: "-2.5vw" },
        { x: "2.5vw", duration: 100, ease: "none" },
        0,
      );

      /*
       * State 10 contract:
       * 88–90% settle TS_comp in place while hidden.
       * 90–100% cross-resolve cumulative stack -> TS_comp.
       */
      timeline.to(
        finalPiece,
        {
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
        },
        88,
      );
      timeline.to(
        pieceStack,
        {
          opacity: 0,
          duration: 10,
          ease: "none",
        },
        90,
      );
      timeline.to(
        finalPiece,
        {
          opacity: 1,
          duration: 10,
          ease: "none",
        },
        90,
      );

      return () => {
        delete root.dataset.motion;
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
                <li key={`${state.index}-${service.label}`}>
                  <strong>{service.label}</strong>: {service.copy}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className={styles.stickyStage} data-body-sticky-stage>
        <div className={styles.backgroundLayer} aria-hidden="true" />

        <div className={styles.scene} aria-hidden="true">
          <div className={styles.stageRule} />

          <div className={styles.instrumentStage}>
            <i className={styles.assemblyAxis} />

            <div className={styles.instrumentCanvas}>
              {bodyTimeline.slice(0, 9).map((stage) => (
                <div
                  key={stage.asset}
                  className={styles.instrumentPiece}
                  data-body-piece={stage.asset}
                >
                  <Image
                    src={`${ASSET_ROOT}/${stage.asset}`}
                    alt=""
                    fill
                    sizes="(max-width: 767px) 78vw, 36vw"
                    unoptimized
                    draggable={false}
                  />
                </div>
              ))}

              <div
                className={`${styles.instrumentPiece} ${styles.finalPiece}`}
                data-body-final-piece
              >
                <Image
                  src={`${ASSET_ROOT}/TS_comp.png`}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 78vw, 36vw"
                  unoptimized
                  draggable={false}
                />
              </div>
            </div>
          </div>

          <div
            className={styles.outlineRail}
            data-body-outline-rail
          >
            {bodyStates.map((state) => (
              <div
                key={`outline-${state.index}`}
                className={styles.outlineState}
                data-body-outline={state.index}
              >
                <span>{state.outline}</span>
                <span>{state.outline}</span>
              </div>
            ))}
          </div>

          <div className={styles.copyRail}>
            {bodyStates.map((state) => (
              <article
                key={state.index}
                className={`${styles.stateCopy} ${
                  state.layout === "deep" ? styles.deepLayout : styles.standardLayout
                }`}
                data-body-copy={state.index}
              >
                <p className={styles.kicker}>LIAHONA / SERVICE SYSTEM</p>

                <h3
                  className={`${styles.heading} ${
                    state.headingScale === "xl"
                      ? styles.headingXl
                      : state.headingScale === "lg"
                        ? styles.headingLg
                        : styles.headingMd
                  } ${
                    state.mobileHeadingScale === "xl"
                      ? styles.mobileHeadingXl
                      : state.mobileHeadingScale === "lg"
                        ? styles.mobileHeadingLg
                        : styles.mobileHeadingMd
                  }`}
                >
                  {state.heading}
                </h3>

                <p className={styles.subheading}>{state.subheading}</p>
                <p className={styles.microcopy}>
                  REGISTERED SURVEYORS&nbsp;&nbsp;/&nbsp;&nbsp;MAPPING CONSULTANTS
                </p>
                <p className={styles.intro}>{state.intro}</p>

                <div className={styles.servicesGrid}>
                  {state.services.map((service, serviceIndex) => (
                    <div
                      key={`${state.index}-${service.label}`}
                      className={`${styles.serviceItem} ${
                        serviceIndex === 0
                          ? styles.serviceOne
                          : serviceIndex === 1
                            ? styles.serviceTwo
                            : styles.serviceThree
                      }`}
                    >
                      <ServiceDiamond />
                      <div>
                        <p className={styles.serviceLabel}>{service.label}</p>
                        <p className={styles.serviceCopy}>{service.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.bottomLinks}>
                  <i className={styles.bottomRule} />
                  <span>{state.bottomLinks[0]}</span>
                  <i className={styles.bottomDivider} />
                  <span>{state.bottomLinks[1]}</span>
                </div>

                <div className={styles.techMeta}>
                  <span className={styles.fieldSystem}>
                    FIELD SYSTEM / {String(state.index).padStart(2, "0")}
                  </span>
                  <i className={styles.techLead} />
                  <span className={styles.techNote}>{state.techNote}</span>
                </div>
              </article>
            ))}
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
