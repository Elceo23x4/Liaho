import { ForestDockVector } from "./HeroVectorArt";

type Props = { onOpen: () => void };

export function CompassDock({ onOpen }: Props) {
  return (
    <div className="dock-shell">
      <ForestDockVector className="dock-material" />

      <span className="dock-bearing-labels" aria-hidden="true">
        <i className="dock-bearing dock-bearing-n">N</i>
        <i className="dock-bearing dock-bearing-s">S</i>
      </span>

      <button
        type="button"
        className="dock-button"
        onClick={onOpen}
        aria-label="Open Lagos blueprint map"
      />
    </div>
  );
}
