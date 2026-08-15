export function CompassMedallion() {
  const ticks = Array.from({ length: 32 }, (_, index) => {
    const angle = index * 11.25;
    const long = index % 4 === 0;
    return (
      <line
        key={angle}
        x1="109"
        y1={long ? "18" : "22"}
        x2="109"
        y2="28"
        stroke="#6f675f"
        strokeWidth={long ? "1.2" : ".65"}
        transform={`rotate(${angle} 109 109)`}
      />
    );
  });

  return (
    <svg viewBox="0 0 218 218" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="coinFace" cx="38%" cy="30%" r="75%">
          <stop offset="0" stopColor="#fffdf8" />
          <stop offset=".42" stopColor="#ded7cd" />
          <stop offset=".73" stopColor="#f4eee6" />
          <stop offset="1" stopColor="#8f877f" />
        </radialGradient>
        <linearGradient id="facetA" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff" />
          <stop offset=".45" stopColor="#beb6ad" />
          <stop offset="1" stopColor="#675e56" />
        </linearGradient>
        <linearGradient id="facetB" x1="1" y1="0" x2="0" y2="1">
          <stop stopColor="#766d64" />
          <stop offset=".5" stopColor="#f4eee6" />
          <stop offset="1" stopColor="#aaa198" />
        </linearGradient>
        <filter id="coinShadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="11" stdDeviation="8" floodColor="#30261e" floodOpacity=".42" />
        </filter>
      </defs>
      <circle cx="109" cy="109" r="104" fill="url(#coinFace)" stroke="#fffaf1" strokeWidth="2.2" filter="url(#coinShadow)" />
      <circle cx="109" cy="109" r="92" fill="none" stroke="#6f675f" strokeOpacity=".58" strokeWidth="1"/>
      <circle cx="109" cy="109" r="79" fill="none" stroke="#8b8279" strokeWidth=".7"/>
      {ticks}
      <g stroke="#554d46" strokeWidth=".8">
        <path d="M109 44 L129 96 L109 109 L89 96 Z" fill="url(#facetA)"/>
        <path d="M174 109 L122 129 L109 109 L122 89 Z" fill="url(#facetB)"/>
        <path d="M109 174 L89 122 L109 109 L129 122 Z" fill="url(#facetB)"/>
        <path d="M44 109 L96 89 L109 109 L96 129 Z" fill="url(#facetA)"/>
      </g>
      <circle cx="109" cy="109" r="20" fill="url(#coinFace)" stroke="#6d655d" strokeWidth="1"/>
      <circle cx="109" cy="109" r="6" fill="#7b726a"/>
      <g fill="#3f3934" fontFamily="Georgia, serif" fontSize="15" textAnchor="middle">
        <text x="109" y="15">N</text><text x="109" y="211">S</text>
        <text x="11" y="114">W</text><text x="207" y="114">E</text>
      </g>
      <path id="coinArc" d="M54 158 A78 78 0 0 0 164 158" fill="none"/>
      <text fill="#514943" fontSize="7.2" fontFamily="monospace" letterSpacing="2">
        <textPath href="#coinArc" startOffset="50%" textAnchor="middle">LIAHONA GEOSERVICES</textPath>
      </text>
    </svg>
  );
}
