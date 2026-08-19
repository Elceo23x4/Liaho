"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { LagosMapOverlay } from "@/components/landing/map/LagosMapOverlay";
import { landingContent } from "@/content/landing";

import { CompassDock } from "./CompassDock";
import { CompassMedallion } from "./CompassMedallion";
import { HeroBlogRail } from "./HeroBlogRail";
import { HeroNav } from "./HeroNav";
import { HeroSurveyPlans } from "./HeroSurveyPlans";
import { HeroVideo, type HeroVideoHandle, getPointerRatio } from "./HeroVideo";

import styles from "./hero.module.css";
import parityStyles from "./hero.parity.module.css";
import interactionStyles from "./hero.interactions.module.css";

export function HeroExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HeroVideoHandle>(null);
  const dragRef = useRef<{ x: number; y: number; progress: number } | null>(null);
  const [mapOpen, setMapOpen] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.dataset.hydrated = "true";

    return () => {
      delete root.dataset.hydrated;
    };
  }, []);

  const handleProgress = (next: number) => {
    rootRef.current?.style.setProperty("--scrub-progress", String(next));
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    if (event.pointerType === "mouse" || event.pointerType === "pen") {
      video.setProgress(getPointerRatio(event, root));
      return;
    }

    const drag = dragRef.current;
    if (!drag) return;

    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;

    if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
      event.preventDefault();
      const bounds = root.getBoundingClientRect();
      video.setProgress(drag.progress + dx / Math.max(bounds.width * 0.72, 1));
    }
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "touch") return;

    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      progress: videoRef.current?.getProgress() ?? 0,
    };

    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const endDrag = () => {
    dragRef.current = null;
  };

  return (
    <>
      <section
        ref={rootRef}
        id="hero"
        className={`${styles.root} ${parityStyles.root} ${interactionStyles.root}`}
        data-section="hero"
        data-hydrated="false"
        onPointerMove={onPointerMove}
        onPointerDown={onPointerDown}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-labelledby="hero-heading"
      >
        <div
          className={styles.paperField}
          data-parity="paper-field"
          aria-hidden="true"
        />

        <HeroSurveyPlans />

        <div className={styles.canvas} data-parity="hero-canvas">
          <div
            className={styles.groundShadow}
            data-parity="ground-shadow"
            aria-hidden="true"
          />

          <div className={styles.mediaFrame} data-parity="media-frame">
            <HeroVideo ref={videoRef} onProgress={handleProgress} />
            <div className={styles.mediaGrade} aria-hidden="true" />
          </div>

          <div className={styles.rimOuter} aria-hidden="true" />
          <div className={styles.rimChampagne} aria-hidden="true" />
          <div className={styles.rimInner} aria-hidden="true" />

          <HeroNav />

          <div className={styles.dock}>
            <CompassDock onOpen={() => setMapOpen(true)} />
          </div>

          <header className={styles.heroCopy} data-parity="hero-copy">
            <h1 id="hero-heading">
              <span>{landingContent.hero.headline[0]}</span>
              <span>{landingContent.hero.headline[1]}</span>
            </h1>
            <p>{landingContent.hero.eyebrow.replace(" / ", "   /   ")}</p>
          </header>

          <div className={styles.blog} data-parity="editorial-assembly">
            <HeroBlogRail />
          </div>

          <div className={styles.medallion} data-parity="medallion">
            <CompassMedallion />
          </div>

          <div
            className={styles.scrubber}
            data-parity="scrubber"
            aria-hidden="true"
          >
            <span className={styles.scrubCue}>MOVE TO EXPLORE</span>
            <span className={styles.scrubZero}>00</span>
            <span className={styles.scrubTen}>10</span>
            <span className={styles.scrubTrack}>
              <span className={styles.scrubActive} />
              <span className={styles.scrubThumb} />
            </span>
          </div>

          <div className={styles.mobileDragHint} aria-hidden="true">
            <span className={styles.mobileCue}>DRAG TO EXPLORE</span>
            <span className={styles.mobileZero}>00</span>
            <span className={styles.mobileTen}>10</span>
            <span className={styles.mobileTrack}>
              <i />
            </span>
          </div>
        </div>
      </section>

      <LagosMapOverlay open={mapOpen} onClose={() => setMapOpen(false)} />
    </>
  );
}
