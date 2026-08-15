import Image from "next/image";

export function PearlNavigationBridge() {
  return (
    <Image
      className="figma-nav-bridge"
      src="/images/hero/figma-nav-bridge.svg"
      alt=""
      aria-hidden="true"
      width={606}
      height={99}
      unoptimized
      draggable={false}
    />
  );
}
