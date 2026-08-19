"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BodyExperienceController } from "@/components/landing/body/BodyExperienceController";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProviderProps = {
  children: ReactNode;
};

function bodyIsPinned() {
  const body = document.querySelector<HTMLElement>("section[data-scroll-vh]");
  if (!body) return false;

  const rect = body.getBoundingClientRect();
  return rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      document.documentElement.dataset.motion = "reduced";
      return;
    }

    document.documentElement.dataset.motion = "full";

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,

      /*
       * BODY-only mouse-wheel moderation.
       *
       * Lenis exposes virtualScroll specifically for adjusting wheel deltas
       * before they are consumed. Large wheel deltas are characteristic of a
       * physical mouse wheel; small trackpad deltas are left untouched.
       *
       * Keyboard scrolling never enters this callback and touch scrolling uses
       * Lenis' touch path, so their current feel is preserved.
       */
      virtualScroll: (data) => {
        /*
         * Lenis 1.3.25 types this callback as boolean-returning.
         * Returning true lets Lenis continue consuming/smoothing the event;
         * returning false would bypass smoothing for that event.
         */
        if (!data.event.type.includes("wheel")) return true;
        if (!bodyIsPinned()) return true;

        const magnitude = Math.abs(data.deltaY);

        if (magnitude >= 72) {
          data.deltaY *= 0.32;
        } else if (magnitude >= 40) {
          data.deltaY *= 0.44;
        }

        return true;
      },
    });

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      delete document.documentElement.dataset.motion;
    };
  }, []);

  return (
    <>
      {children}
      <BodyExperienceController />
    </>
  );
}
