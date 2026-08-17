import { landingContent } from "@/content/landing";

import {
  BrandPodVector,
  EditorialArrowVector,
  EditorialVesselVector,
} from "./HeroVectorArt";

const editorialHeadline = [
  "Survey plan required",
  "at e-Planning screening",
] as const;

const editorialDeck = [
  "Lagos screening guidance includes a survey plan",
  "among the core documents used to assess a",
  "development application.",
];

export function HeroBlogRail() {
  const story = landingContent.hero.stories[0];

  return (
    <article className="editorial-assembly">
      <EditorialVesselVector className="editorial-vessel" />

      <div className="brand-pod">
        <BrandPodVector className="brand-pod-vector" />
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
          aria-label="Survey plan required at e-Planning screening"
        >
          {editorialHeadline.map((line) => (
            <span key={line}>{line}</span>
          ))}
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
        <EditorialArrowVector className="editorial-arrow-art" />
      </a>
    </article>
  );
}
