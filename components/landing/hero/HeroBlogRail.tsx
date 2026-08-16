import Image from "next/image";

import { landingContent } from "@/content/landing";

const editorialHeadline = "Survey plan required at e-Planning screening";
const editorialDeck = [
  "Lagos screening guidance includes a survey plan",
  "among the core documents used to assess a",
  "development application.",
];

export function HeroBlogRail() {
  const story = landingContent.hero.stories[0];

  return (
    <article className="editorial-assembly">
      <Image
        className="editorial-vessel"
        src="/images/hero/gate05-editorial-vessel.svg"
        alt=""
        aria-hidden="true"
        width={541}
        height={278}
        unoptimized
        draggable={false}
      />

      <div className="brand-pod">
        <Image
          src="/images/hero/gate05-brand-pod.svg"
          alt=""
          aria-hidden="true"
          width={73}
          height={279}
          unoptimized
          draggable={false}
        />
        <span className="brand-pod-liahona">LIAHONA</span>
        <span className="brand-pod-services">GEOSERVICES</span>
      </div>

      <div className="editorial-copy">
        <span className="editorial-category">{story.category}</span>
        <a
          className="editorial-title"
          href={story.href}
          target="_blank"
          rel="noreferrer"
        >
          {editorialHeadline}
        </a>
        <p className="editorial-deck">
          {editorialDeck.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <span className="editorial-meta">
          {story.source} <i aria-hidden="true">•</i> {story.meta}
        </span>
      </div>

      <a
        className="editorial-arrow"
        href={story.href}
        target="_blank"
        rel="noreferrer"
        aria-label="Open planning and approvals source"
      >
        <Image
          src="/images/hero/gate05-story-arrow.svg"
          alt=""
          width={44}
          height={44}
          unoptimized
          draggable={false}
        />
      </a>
    </article>
  );
}
