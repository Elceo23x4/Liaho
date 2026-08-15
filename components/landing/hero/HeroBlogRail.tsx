import Image from "next/image";

import { landingContent } from "@/content/landing";

export function HeroBlogRail() {
  return (
    <div className="blog-assembly">
      <div className="figma-blog-material" aria-hidden="true">
        <Image
          className="figma-blog-pod"
          src="/images/hero/figma-blog-pod.svg"
          alt=""
          width={126}
          height={214}
          unoptimized
          draggable={false}
        />
        <Image
          className="figma-blog-rail"
          src="/images/hero/figma-blog-rail.svg"
          alt=""
          width={895}
          height={207}
          unoptimized
          draggable={false}
        />
        <Image
          className="figma-blog-junction"
          src="/images/hero/figma-blog-junction.svg"
          alt=""
          width={41}
          height={173}
          unoptimized
          draggable={false}
        />
        <Image
          className="figma-blog-highlight"
          src="/images/hero/figma-blog-highlight.svg"
          alt=""
          width={843}
          height={60}
          unoptimized
          draggable={false}
        />
      </div>

      <div className="identity-pod" aria-hidden="true">
        <span>LIAHONA</span>
        <span>GEOSERVICES</span>
      </div>

      <div className="story-grid">
        {landingContent.hero.stories.map((story) => (
          <a key={story.category} href={story.href} target="_blank" rel="noreferrer" className="story">
            <span className="story-category">{story.category}</span>
            <strong>{story.headline}</strong>
            <span className="story-meta">
              {story.source} &nbsp; • &nbsp; {story.meta}
            </span>
          </a>
        ))}
        <a
          className="story-arrow"
          href={landingContent.hero.stories[0].href}
          target="_blank"
          rel="noreferrer"
          aria-label="Open planning and approvals source"
        >
          →
        </a>
      </div>
    </div>
  );
}
