import { landingContent } from "@/content/landing";

export function HeroBlogRail() {
  return (
    <div className="blog-assembly">
      <div className="figma-blog-material" aria-hidden="true">
        <img className="figma-blog-pod" src="/images/hero/figma-blog-pod.svg" alt="" />
        <img className="figma-blog-rail" src="/images/hero/figma-blog-rail.svg" alt="" />
        <img className="figma-blog-junction" src="/images/hero/figma-blog-junction.svg" alt="" />
        <img className="figma-blog-highlight" src="/images/hero/figma-blog-highlight.svg" alt="" />
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
            <span className="story-meta">{story.source} &nbsp; • &nbsp; {story.meta}</span>
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
