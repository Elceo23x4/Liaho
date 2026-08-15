export function PearlNavigationBridge() {
  return (
    <svg viewBox="0 0 570 66" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="navPearl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf9" />
          <stop offset=".26" stopColor="#e8e2d9" />
          <stop offset=".56" stopColor="#c7bfb4" />
          <stop offset=".8" stopColor="#eee8df" />
          <stop offset="1" stopColor="#aaa096" />
        </linearGradient>
        <linearGradient id="navEdge" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#fff" stopOpacity=".45" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".95" />
          <stop offset="1" stopColor="#fff" stopOpacity=".35" />
        </linearGradient>
        <filter id="navShadow" x="-10%" y="-35%" width="120%" height="190%">
          <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#352b22" floodOpacity=".23" />
        </filter>
      </defs>
      <path
        d="M0 11 C51 11 76 10 107 1 C122 -3 137 0 151 0 H419 C433 0 448 -3 463 1 C494 10 519 11 570 11 C544 14 532 27 512 41 C490 56 465 62 421 62 H149 C105 62 80 56 58 41 C38 27 26 14 0 11 Z"
        fill="url(#navPearl)"
        filter="url(#navShadow)"
      />
      <path
        d="M8 10 C64 10 84 8 112 2 H458 C486 8 506 10 562 10"
        fill="none"
        stroke="url(#navEdge)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M63 44 C87 58 112 60 151 60 H419 C458 60 483 58 507 44"
        fill="none"
        stroke="#fff"
        strokeOpacity=".48"
        strokeWidth="1.2"
      />
    </svg>
  );
}
