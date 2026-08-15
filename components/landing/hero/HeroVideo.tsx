"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { HERO_VIDEO, clamp01 } from "@/lib/media/video";

export type HeroVideoHandle = {
  setProgress: (progress: number) => void;
  getProgress: () => number;
};

type Props = {
  onProgress?: (progress: number) => void;
};

export const HeroVideo = forwardRef<HeroVideoHandle, Props>(function HeroVideo(
  { onProgress },
  ref,
) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetProgressRef = useRef(0);
  const renderedProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useImperativeHandle(ref, () => ({
    setProgress(progress) {
      targetProgressRef.current = clamp01(progress);
    },
    getProgress() {
      return targetProgressRef.current;
    },
  }));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const duration = HERO_VIDEO.endSeconds - HERO_VIDEO.startSeconds;

    const initialize = () => {
      video.pause();
      video.currentTime = HERO_VIDEO.startSeconds;
      video.dataset.mediaReady = "true";
    };

    const tick = () => {
      const current = renderedProgressRef.current;
      const target = targetProgressRef.current;
      const next = current + (target - current) * HERO_VIDEO.interpolation;

      renderedProgressRef.current =
        Math.abs(target - next) < 0.0005 ? target : next;

      const targetTime =
        HERO_VIDEO.startSeconds + renderedProgressRef.current * duration;

      if (
        video.readyState >= HTMLMediaElement.HAVE_METADATA &&
        Math.abs(video.currentTime - targetTime) > 0.015 &&
        !video.seeking
      ) {
        video.currentTime = targetTime;
      }

      onProgress?.(renderedProgressRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      initialize();
    } else {
      video.addEventListener("loadedmetadata", initialize, { once: true });
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      video.removeEventListener("loadedmetadata", initialize);
      delete video.dataset.mediaReady;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [onProgress]);

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      muted
      playsInline
      preload="auto"
      poster={HERO_VIDEO.poster}
      tabIndex={-1}
      data-hero-video
      data-media-ready="false"
    >
      <source src={HERO_VIDEO.optimizedSource} type="video/mp4" />
      <source src={HERO_VIDEO.source} type="video/mp4" />
    </video>
  );
});

export function getPointerRatio(
  event: ReactPointerEvent<HTMLElement>,
  element: HTMLElement,
) {
  const bounds = element.getBoundingClientRect();
  return clamp01((event.clientX - bounds.left) / bounds.width);
}
