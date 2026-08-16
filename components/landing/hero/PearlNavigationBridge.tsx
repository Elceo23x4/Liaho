import Image from "next/image";

export function PearlNavigationBridge() {
  return (
    <Image
      className="gate05-nav-bridge"
      src="/images/hero/gate05-nav-bridge.svg"
      alt=""
      aria-hidden="true"
      width={645}
      height={125}
      unoptimized
      draggable={false}
      priority
    />
  );
}
