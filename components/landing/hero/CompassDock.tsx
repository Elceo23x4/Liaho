import { ForestDockVector } from "./HeroVectorArt";

type Props = { onOpen: () => void };

export function CompassDock({ onOpen }: Props) {
  return (
    <div className="dock-shell">
      <ForestDockVector className="dock-material" />
      <button
        type="button"
        className="dock-button"
        onClick={onOpen}
        aria-label="Open Lagos blueprint map"
      />
    </div>
  );
}
