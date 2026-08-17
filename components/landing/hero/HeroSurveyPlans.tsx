import styles from "./HeroSurveyPlans.module.css";

function SurveyNorthWest() {
  return (
    <svg className={`${styles.fragment} ${styles.northWest}`} viewBox="0 0 520 260">
      <g className={styles.planLinework}>
        <polygon points="42,54 242,33 306,157 112,207" />
        <line x1="72" y1="119" x2="273" y2="94" className={styles.construction} />
        <line x1="42" y1="38" x2="242" y2="17" className={styles.dimension} />
        <line x1="42" y1="31" x2="42" y2="46" />
        <line x1="242" y1="10" x2="242" y2="25" />
        <line x1="319" y1="154" x2="329" y2="178" />
        <line x1="306" y1="157" x2="319" y2="154" />
        <circle cx="42" cy="54" r="3.5" />
        <circle cx="242" cy="33" r="3.5" />
        <circle cx="306" cy="157" r="3.5" />
        <circle cx="112" cy="207" r="3.5" />
      </g>
      <g className={styles.planText}>
        <text x="118" y="23">21.18 m</text>
        <text x="260" y="85" transform="rotate(63 260 85)">12.60 m</text>
        <text x="157" y="198" transform="rotate(-14 157 198)">18.42 m</text>
        <text x="105" y="102">PLOT A-17</text>
        <text x="105" y="120">AREA 287.4 m²</text>
        <text x="45" y="232">N 34°12&apos;18&quot; E</text>
        <text x="332" y="181">IP 04</text>
      </g>
    </svg>
  );
}

function SurveyNorthEast() {
  return (
    <svg className={`${styles.fragment} ${styles.northEast}`} viewBox="0 0 520 260">
      <g className={styles.planLinework}>
        <polyline points="72,56 298,42 384,127 134,176 72,56" />
        <polyline
          points="44,91 278,78 421,156"
          className={styles.centerline}
        />
        <line x1="61" y1="74" x2="314" y2="59" className={styles.dimension} />
        <line x1="61" y1="66" x2="61" y2="82" />
        <line x1="314" y1="51" x2="314" y2="67" />
        <line x1="362" y1="112" x2="401" y2="86" className={styles.construction} />
        <circle cx="72" cy="56" r="3.5" />
        <circle cx="298" cy="42" r="3.5" />
        <circle cx="384" cy="127" r="3.5" />
        <circle cx="134" cy="176" r="3.5" />
      </g>
      <g className={styles.planText}>
        <text x="144" y="55">25.70 m</text>
        <text x="151" y="102">ROAD R/W 15.00 m</text>
        <text x="177" y="122">CL — CH 0+125.00</text>
        <text x="300" y="91" transform="rotate(44 300 91)">17.85 m</text>
        <text x="114" y="201">BEARING N 72°08&apos; E</text>
        <text x="366" y="80">TP-12</text>
      </g>
    </svg>
  );
}

function SurveyWestMid() {
  return (
    <svg className={`${styles.fragment} ${styles.westMid}`} viewBox="0 0 260 420">
      <g className={styles.planLinework}>
        <polygon points="42,62 181,35 219,179 165,332 61,288" />
        <line x1="46" y1="88" x2="202" y2="57" className={styles.dimension} />
        <line x1="80" y1="208" x2="191" y2="185" className={styles.construction} />
        <line x1="70" y1="240" x2="178" y2="310" className={styles.construction} />
        <circle cx="61" cy="288" r="7" className={styles.benchmark} />
        <circle cx="61" cy="288" r="2" />
      </g>
      <g className={styles.planText}>
        <text x="86" y="76">14.25 m</text>
        <text x="109" y="155">LOT 06</text>
        <text x="108" y="174">486.2 m²</text>
        <text x="74" y="318">BM 102.440</text>
        <text x="85" y="344">DATUM: LAGOS</text>
      </g>
    </svg>
  );
}

function SurveyEastMid() {
  return (
    <svg className={`${styles.fragment} ${styles.eastMid}`} viewBox="0 0 280 430">
      <g className={styles.planLinework}>
        <polyline points="54,49 199,72 221,183 191,330 72,371" />
        <line x1="54" y1="49" x2="72" y2="371" className={styles.centerline} />
        <line x1="199" y1="72" x2="191" y2="330" className={styles.dimension} />
        <line x1="136" y1="122" x2="229" y2="142" className={styles.construction} />
        <line x1="117" y1="274" x2="214" y2="251" className={styles.construction} />
        <circle cx="199" cy="72" r="3.5" />
        <circle cx="221" cy="183" r="3.5" />
        <circle cx="191" cy="330" r="3.5" />
      </g>
      <g className={styles.planText}>
        <text x="212" y="184" transform="rotate(93 212 184)">32.15 m</text>
        <text x="84" y="110">OFFSET 3.50 m</text>
        <text x="94" y="222">SET-OUT AXIS</text>
        <text x="93" y="243">E 543218.44</text>
        <text x="93" y="261">N 712904.10</text>
        <text x="84" y="397">CP-08 / RL 18.620</text>
      </g>
    </svg>
  );
}

function SurveySouthWest() {
  return (
    <svg className={`${styles.fragment} ${styles.southWest}`} viewBox="0 0 560 280">
      <g className={styles.planLinework}>
        <polygon points="58,192 144,64 330,82 411,201 222,237" />
        <line x1="144" y1="48" x2="330" y2="66" className={styles.dimension} />
        <line x1="144" y1="41" x2="144" y2="55" />
        <line x1="330" y1="59" x2="330" y2="73" />
        <line x1="101" y1="145" x2="365" y2="164" className={styles.construction} />
        <circle cx="144" cy="64" r="3.5" />
        <circle cx="330" cy="82" r="3.5" />
        <circle cx="411" cy="201" r="3.5" />
        <circle cx="222" cy="237" r="3.5" />
      </g>
      <g className={styles.planText}>
        <text x="197" y="50">19.80 m</text>
        <text x="175" y="126">PLOT C-04</text>
        <text x="175" y="146">AREA 362.8 m²</text>
        <text x="343" y="135" transform="rotate(55 343 135)">16.75 m</text>
        <text x="77" y="226">S 18°44&apos; W</text>
      </g>
    </svg>
  );
}

function SurveySouthEast() {
  return (
    <svg className={`${styles.fragment} ${styles.southEast}`} viewBox="0 0 580 300">
      <g className={styles.planLinework}>
        <polygon points="94,70 315,49 465,148 390,245 149,235" />
        <polyline
          points="64,118 286,102 491,188"
          className={styles.centerline}
        />
        <line x1="94" y1="55" x2="315" y2="34" className={styles.dimension} />
        <line x1="388" y1="247" x2="418" y2="271" className={styles.construction} />
        <circle cx="94" cy="70" r="3.5" />
        <circle cx="315" cy="49" r="3.5" />
        <circle cx="465" cy="148" r="3.5" />
        <circle cx="390" cy="245" r="3.5" />
        <circle cx="149" cy="235" r="3.5" />
      </g>
      <g className={styles.planText}>
        <text x="164" y="41">24.36 m</text>
        <text x="179" y="129">PROPOSED LOT 21</text>
        <text x="179" y="149">AREA 462.8 m²</text>
        <text x="348" y="98" transform="rotate(34 348 98)">18.15 m</text>
        <text x="111" y="266">GRID: UTM 31N</text>
        <text x="424" y="282">IP 21</text>
      </g>
    </svg>
  );
}

export function HeroSurveyPlans() {
  return (
    <div className={styles.root} aria-hidden="true">
      <SurveyNorthWest />
      <SurveyNorthEast />
      <SurveyWestMid />
      <SurveyEastMid />
      <SurveySouthWest />
      <SurveySouthEast />
    </div>
  );
}
