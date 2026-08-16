import Image from "next/image";
import Link from "next/link";

import { landingContent } from "@/content/landing";

import { PearlNavigationBridge } from "./PearlNavigationBridge";

export function HeroNav() {
  const center = landingContent.navigation.filter((item) =>
    ["TEAM", "ABOUT", "PORTFOLIO"].includes(item.label),
  );

  return (
    <>
      <Link className="outer-link outer-link-left" href="/core-values">
        <span className="outer-label">CORE VALUES</span>
        <i className="outer-rule" aria-hidden="true" />
      </Link>

      <Link className="outer-link outer-link-right" href="/hire-us">
        <i className="outer-rule" aria-hidden="true" />
        <span className="outer-label hire-label">HIRE US</span>
        <Image
          className="hire-underline"
          src="/images/hero/gate05-hire-underline.svg"
          alt=""
          aria-hidden="true"
          width={145}
          height={18}
          unoptimized
          draggable={false}
        />
      </Link>

      <nav className="center-nav" aria-label="Primary">
        <PearlNavigationBridge />
        <div className="center-nav-links">
          {center.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
