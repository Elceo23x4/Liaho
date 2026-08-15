"use client";

import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

import { landingContent } from "@/content/landing";
import { LagosMapOverlay } from "@/components/landing/map/LagosMapOverlay";

import { CompassDock } from "./CompassDock";
import { CompassMedallion } from "./CompassMedallion";
import { HeroBlogRail } from "./HeroBlogRail";
import { HeroNav } from "./HeroNav";
import { HeroVideo, type HeroVideoHandle, getPointerRatio } from "./HeroVideo";

import styles from "./hero.module.css";

export function HeroExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HeroVideoHandle>(null);
  const dragRef = useRef<{ x: number; y: number; progress: number } | null>(null);
  const [mapOpen, setMapOpen] = useState(false);

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
    if (!drag || event.pointerId === undefined) return;

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
        className={styles.root}
        data-section="hero"
        onPointerMove={onPointerMove}
        onPointerDown={onPointerDown}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-labelledby="hero-heading"
      >
        <div className={styles.canvas}>
          <div className={styles.paperField} aria-hidden="true" />
          <HeroNav />

          <div className={styles.groundShadow} aria-hidden="true" />

          <div className={styles.mediaFrame}>
            <HeroVideo ref={videoRef} onProgress={handleProgress} />
            <div className={styles.headlineScrim} aria-hidden="true" />
            <div className={styles.groundLift} aria-hidden="true" />
          </div>

          <div className={styles.pearlRim} aria-hidden="true" />

          <div className={styles.dock}>
            <CompassDock onOpen={() => setMapOpen(true)} />
          </div>

          <header className={styles.heroCopy}>
            <h1 id="hero-heading">
              <span>{landingContent.hero.headline[0]}</span>
              <span>{landingContent.hero.headline[1]}</span>
            </h1>
            <p>{landingContent.hero.eyebrow.replace(" / ", "  /  ")}</p>
          </header>

          <div className={styles.blog}>
            <HeroBlogRail />
          </div>

          <div className={styles.medallion}>
            <CompassMedallion />
          </div>

          <div className={styles.scrubber} aria-hidden="true">
            <span className={styles.scrubCue}>MOVE TO EXPLORE&nbsp; ↔</span>
            <span className={styles.scrubZero}>00</span>
            <span className={styles.scrubTen}>10</span>
            <span className={styles.scrubTrack}>
              <span className={styles.scrubActive} />
              <span className={styles.scrubThumb} />
            </span>
          </div>

          <div className={styles.mobileDragHint} aria-hidden="true">
            <span>DRAG TO EXPLORE</span>
            <span className={styles.mobileTrack}><i /></span>
          </div>
        </div>
      </section>

      <LagosMapOverlay open={mapOpen} onClose={() => setMapOpen(false)} />
    </>
  );
}
