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
        CORE VALUES <span aria-hidden="true" />
      </Link>
      <Link className="outer-link outer-link-right" href="/hire-us">
        <span aria-hidden="true" /> HIRE US
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
