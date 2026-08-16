import Image from "next/image";

type Props = { onOpen: () => void };

export function CompassDock({ onOpen }: Props) {
  return (
    <div className="dock-shell">
      <Image
        className="dock-material"
        src="/images/hero/gate05-forest-dock.svg"
        alt=""
        aria-hidden="true"
        width={99}
        height={470}
        unoptimized
        draggable={false}
        priority
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
