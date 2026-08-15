import Image from "next/image";

type Props = { onOpen: () => void };

export function CompassDock({ onOpen }: Props) {
  return (
    <div className="dock-shell">
      <Image
        className="dock-material"
        src="/images/hero/figma-compass-dock.svg"
        alt=""
        aria-hidden="true"
        width={107}
        height={350}
        unoptimized
        draggable={false}
      />
      <button
        type="button"
        className="dock-button"
        onClick={onOpen}
        aria-label="Open Lagos blueprint map"
      />
    </div>
  );
}
