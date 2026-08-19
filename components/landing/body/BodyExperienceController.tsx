"use client";

import { useEffect, useRef } from "react";

import styles from "./bodyExperienceController.module.css";

const FIRST_STATE_HOLD = 0.095;

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function BodyExperienceController() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const body = document.querySelector<HTMLElement>("section[data-scroll-vh]");
    const progressRail = progressRef.current;

    if (!body || !progressRail) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const viewportHeight = Math.max(window.innerHeight, 1);
      const rect = body.getBoundingClientRect();
      const scrollableDistance = Math.max(body.offsetHeight - viewportHeight, 1);
      const traveled = -rect.top;
      const progress = clamp01(traveled / scrollableDistance);
      const active = rect.top <= 1 && rect.bottom >= viewportHeight - 1;

      progressRail.style.setProperty("--body-progress", String(progress));
      progressRail.dataset.active = active ? "true" : "false";

      /*
       * State 01 copy is intentionally complete the instant BODY pins.
       * TS_hand remains controlled by the existing GSAP assembly timeline.
       */
      if (active && progress < FIRST_STATE_HOLD) {
        body.dataset.bodyFirstImmediate = "true";
      } else {
        delete body.dataset.bodyFirstImmediate;
      }
    };

    const schedule = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      delete body.dataset.bodyFirstImmediate;
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className={styles.progressRail}
      data-active="false"
      aria-hidden="true"
    >
      <i className={styles.progressTrack} />
      <i className={styles.progressFill} />
      <i className={styles.progressMarker} />
    </div>
  );
}
