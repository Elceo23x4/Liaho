"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function LagosMapOverlay({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="map-overlay" role="dialog" aria-modal="true" aria-labelledby="lagos-map-title">
      <button className="map-backdrop" aria-label="Close map" onClick={onClose} />
      <section className="map-panel">
        <header>
          <div>
            <span>LIAHONA / LAND INTELLIGENCE</span>
            <h2 id="lagos-map-title">LAGOS BLUEPRINT</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close Lagos blueprint map">
            ×
          </button>
        </header>
        <div className="map-stage">
          <div className="map-grid" aria-hidden="true" />
          <div className="map-placeholder">
            <span>MAPLIBRE OVERLAY READY</span>
            <p>
              The production map loader is isolated from the initial HERO bundle. A configured
              map style/data source activates here without changing the landing composition.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
