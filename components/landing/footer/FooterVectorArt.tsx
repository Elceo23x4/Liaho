import { useId } from "react";

type Props = { className?: string };

export function BrandPlaqueArt({ className }: Props) {
  const id = useId().replaceAll(":", "");
  return (
    <svg className={className} viewBox="0 0 429 217" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="170" y2="340">
          <stop stopColor="#1B1B1D" stopOpacity=".92" />
          <stop offset=".55" stopColor="#2E211B" stopOpacity=".82" />
          <stop offset="1" stopColor="#0B0B0C" stopOpacity=".94" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="217">
          <stop stopColor="#F7E8CE" />
          <stop offset=".26" stopColor="#8E7761" />
          <stop offset=".52" stopColor="#FFF5E3" />
          <stop offset="1" stopColor="#3C2D24" />
        </linearGradient>
      </defs>
      <path
        d="M17.5 1.5L395.5 1.5C412.833 1.5 422.167 10.1667 423.5 27.5L427.5 191.5C426.167 206.167 416.833 214.167 399.5 215.5H27.5C12.8333 214.167 4.83333 206.167 3.5 191.5L1.5 27.5C2.83333 12.8333 8.16667 4.16667 17.5 1.5Z"
        fill={`url(#${id}-fill)`}
        stroke={`url(#${id}-rim)`}
        strokeWidth="3"
      />
      <path d="M24.2 12.5H388.2" stroke="#F4C98B" strokeOpacity=".34" />
      <path d="M32.8 186.8L394.9 185.9" stroke="#FF8B3D" strokeOpacity=".24" />
      {[[20,19],[402,19],[22,193],[400,193]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="#2B211B" stroke="#D9C1A2" strokeWidth="2" />
      ))}
    </svg>
  );
}

export function OfficePlaqueArt({ className }: Props) {
  const id = useId().replaceAll(":", "");
  return (
    <svg className={className} viewBox="0 0 307 123" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-fill`} x1="6" y1="3" x2="61" y2="187">
          <stop stopColor="#17181A" stopOpacity=".92" />
          <stop offset=".5" stopColor="#4A2B20" stopOpacity=".78" />
          <stop offset="1" stopColor="#101113" stopOpacity=".96" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="6" y1="3" x2="3" y2="104">
          <stop stopColor="#FFE7C2" />
          <stop offset=".28" stopColor="#78604E" />
          <stop offset=".54" stopColor="#F2E4CF" />
          <stop offset="1" stopColor="#3D2A22" />
        </linearGradient>
      </defs>
      <path
        d="M17.572 3.875L274.845 13.758C291.251 14.389 299.812 24.817 300.528 45.044L300.958 92.192C298.118 107.793 289.614 115.321 275.445 114.777L22.647 105.066C11.547 102.395 5.926 93.202 5.783 77.486L5.353 30.338C7.448 14.708 11.521 5.887 17.572 3.875Z"
        fill={`url(#${id}-fill)`}
        stroke={`url(#${id}-rim)`}
        strokeWidth="2.5"
      />
      <path d="M21.4 20.9L267.5 30.3" stroke="#FF9A56" strokeOpacity=".3" />
    </svg>
  );
}

export function SignPlaqueArt({
  className,
  variant,
}: Props & { variant: "team" | "contact" | "site" | "services" }) {
  const id = useId().replaceAll(":", "");
  const slanted = variant === "contact" || variant === "services";
  const viewBox = slanted ? "0 0 238 70" : "0 0 223 59";
  const d = slanted
    ? "M13.513 2.291L209.454 7.08C224.116 7.438 231.967 13.632 233.007 25.661L234.371 51.702C232.144 60.984 224.699 65.47 212.036 65.16L20.093 60.469C10.129 58.892 4.927 53.43 4.489 44.083L3.125 18.042C4.686 8.744 8.148 3.494 13.513 2.291Z"
    : "M11.258 1.25H195.258C209.924 1.25 217.924 7.25 219.258 19.25L221.258 43.25C219.258 52.583 211.924 57.25 199.258 57.25H19.258C9.258 55.917 3.924 50.583 3.258 41.25L1.258 17.25C2.591 7.917 5.924 2.583 11.258 1.25Z";
  return (
    <svg className={className} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="30" y2="110">
          <stop stopColor="#17181A" stopOpacity=".92" />
          <stop offset=".5" stopColor="#4A2B20" stopOpacity=".78" />
          <stop offset="1" stopColor="#101113" stopOpacity=".96" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="0" y2="70">
          <stop stopColor="#FFE7C2" />
          <stop offset=".28" stopColor="#78604E" />
          <stop offset=".54" stopColor="#F2E4CF" />
          <stop offset="1" stopColor="#3D2A22" />
        </linearGradient>
      </defs>
      <path d={d} fill={`url(#${id}-fill)`} stroke={`url(#${id}-rim)`} strokeWidth="2.5" />
      <path
        d={slanted ? "M17.3 12.4L203.2 16.9" : "M15.3 11.25H189.3"}
        stroke="#FF9A56"
        strokeOpacity=".3"
      />
    </svg>
  );
}
