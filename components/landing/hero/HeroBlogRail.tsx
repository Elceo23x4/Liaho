import { landingContent } from "@/content/landing";

export function HeroBlogRail() {
  return (
    <div className="blog-assembly">
      <svg className="blog-material" viewBox="0 0 1000 220" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <linearGradient id="podMetal" x1="0" x2="1">
            <stop stopColor="#b9b0a5"/>
            <stop offset=".28" stopColor="#e5dfd7"/>
            <stop offset=".55" stopColor="#8f867d"/>
            <stop offset=".82" stopColor="#d8d1c8"/>
            <stop offset="1" stopColor="#847a70"/>
          </linearGradient>
          <linearGradient id="glassRail" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#a3988d" stopOpacity=".74"/>
            <stop offset=".16" stopColor="#665d55" stopOpacity=".72"/>
            <stop offset=".58" stopColor="#3e3934" stopOpacity=".86"/>
            <stop offset="1" stopColor="#6f655c" stopOpacity=".78"/>
          </linearGradient>
          <filter id="railShadow" x="-4%" y="-20%" width="110%" height="150%">
            <feDropShadow dx="0" dy="11" stdDeviation="9" floodColor="#2c2119" floodOpacity=".38"/>
          </filter>
        </defs>
        <path
          d="M38 3 C17 3 7 17 7 37 V180 C7 201 20 215 42 215 H91 C109 215 121 208 130 195 C142 210 159 217 183 217 H877 C937 217 980 180 980 114 C980 51 941 13 879 13 H185 C156 13 139 23 126 40 C117 18 101 3 78 3 Z"
          fill="url(#glassRail)" stroke="#fff8ef" strokeOpacity=".9" strokeWidth="1.8" filter="url(#railShadow)"
        />
        <path d="M94 14 C111 21 120 35 126 52 V174 C121 190 111 201 94 208" fill="none" stroke="url(#podMetal)" strokeWidth="13" opacity=".95"/>
        <path d="M122 27 C139 21 156 20 180 20 H870 C927 20 960 52 968 92" fill="none" stroke="#fff" strokeOpacity=".2" strokeWidth="1.2"/>
        <path d="M122 195 C146 207 161 210 190 210 H874" fill="none" stroke="#fff" strokeOpacity=".13" strokeWidth="1"/>
      </svg>

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
