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
        stroke="#8f6a35"
        strokeOpacity={long ? ".86" : ".5"}
        strokeWidth={long ? "1.15" : ".6"}
        transform={`rotate(${angle} 109 109)`}
      />
    );
  });

  return (
    <svg viewBox="0 0 218 218" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="medallionRim" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff1b7" />
          <stop offset=".22" stopColor="#d3a24f" />
          <stop offset=".5" stopColor="#8f6329" />
          <stop offset=".76" stopColor="#e7be6c" />
          <stop offset="1" stopColor="#fff0b0" />
        </linearGradient>
        <radialGradient id="medallionFace" cx="38%" cy="30%" r="75%">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset=".58" stopColor="#f3ead6" />
          <stop offset="1" stopColor="#d8c8aa" />
        </radialGradient>
        <filter id="medallionShadow" x="-20%" y="-20%" width="145%" height="155%">
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="9"
            floodColor="#24180f"
            floodOpacity=".34"
          />
        </filter>
        <path id="brandTop" d="M64 50 A56 56 0 0 1 154 50" />
        <path id="brandBottom" d="M57 163 A69 69 0 0 0 161 163" />
      </defs>

      <circle
        cx="109"
        cy="109"
        r="104"
        fill="url(#medallionRim)"
        filter="url(#medallionShadow)"
      />
      <circle cx="109" cy="109" r="96" fill="url(#medallionFace)" stroke="#785326" strokeWidth="1.4" />
      <circle cx="109" cy="109" r="80" fill="none" stroke="#a78755" strokeWidth="1.1" />
      <circle cx="109" cy="109" r="69" fill="none" stroke="#c8ab79" strokeWidth=".75" />
      {ticks}

      <g stroke="#8b622d" strokeWidth="1.05">
        <path d="M109 49L121 96L109 109L97 96Z" fill="#f5eccf" />
        <path d="M169 109L122 121L109 109L122 97Z" fill="#9d6b2d" />
        <path d="M109 169L97 122L109 109L121 122Z" fill="#f5eccf" />
        <path d="M49 109L96 97L109 109L96 121Z" fill="#9d6b2d" />
        <path d="M109 66L114 99L109 109L104 99Z" fill="#b57c2c" stroke="none" />
        <path d="M152 109L119 114L109 109L119 104Z" fill="#eee2c0" stroke="none" />
        <path d="M109 152L104 119L109 109L114 119Z" fill="#b57c2c" stroke="none" />
        <path d="M66 109L99 104L109 109L99 114Z" fill="#eee2c0" stroke="none" />
      </g>

      <circle cx="109" cy="109" r="7" fill="#f1d17d" stroke="#7d5727" strokeWidth="1" />

      <g fill="#2a241d" fontFamily="Georgia, serif" fontSize="10" textAnchor="middle">
        <text x="109" y="34">N</text>
        <text x="109" y="190">S</text>
        <text x="31" y="113">W</text>
        <text x="187" y="113">E</text>
      </g>

      <text fill="#261f14" fontFamily="monospace" fontSize="7.5" fontWeight="700" letterSpacing="2">
        <textPath href="#brandTop" startOffset="50%" textAnchor="middle">LIAHONA</textPath>
      </text>
      <text fill="#261f14" fontFamily="monospace" fontSize="6.7" fontWeight="700" letterSpacing="1.25">
        <textPath href="#brandBottom" startOffset="50%" textAnchor="middle">GEOSERVICES</textPath>
      </text>
    </svg>
  );
}
