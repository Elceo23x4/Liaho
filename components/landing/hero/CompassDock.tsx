type Props = { onOpen: () => void };

export function CompassDock({ onOpen }: Props) {
  return (
    <div className="dock-shell" aria-hidden="false">
      <svg className="dock-material" viewBox="0 0 68 310" aria-hidden="true">
        <defs>
          <linearGradient id="dockPearl" x1="0" x2="1">
            <stop stopColor="#b2aaa0" />
            <stop offset=".18" stopColor="#eee9e2" />
            <stop offset=".48" stopColor="#a39a90" />
            <stop offset=".7" stopColor="#eee9e2" />
            <stop offset="1" stopColor="#948a80" />
          </linearGradient>
          <filter id="dockShadow" x="-50%" y="-10%" width="200%" height="120%">
            <feDropShadow dx="2" dy="10" stdDeviation="8" floodColor="#33281f" floodOpacity=".25"/>
          </filter>
          <filter id="dockGlow">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <path
          d="M34 1 C52 1 64 15 64 36 V274 C64 294 53 309 34 309 C15 309 4 294 4 274 V36 C4 15 16 1 34 1 Z"
          fill="url(#dockPearl)" stroke="#fffaf3" strokeWidth="1.5" filter="url(#dockShadow)"
        />
        <path d="M34 47 V245" stroke="#fff" strokeOpacity=".35" strokeWidth=".7" strokeDasharray="2 3"/>
        <circle cx="34" cy="58" r="4.5" fill="#fff" filter="url(#dockGlow)"/>
        <circle cx="34" cy="182" r="24" fill="#ded8d0" stroke="#fff9f0" strokeWidth="1.4"/>
        <circle cx="34" cy="182" r="18" fill="#bcb3a8" stroke="#71685e" strokeOpacity=".6"/>
      </svg>
      <button type="button" className="dock-button" onClick={onOpen} aria-label="Open Lagos blueprint map">
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M20 7 L25 18 L33 20 L25 22 L20 33 L16 23 L7 20 L16 17 Z" fill="none" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="20" cy="20" r="2.2" fill="currentColor"/>
        </svg>
      </button>
    </div>
  );
}
