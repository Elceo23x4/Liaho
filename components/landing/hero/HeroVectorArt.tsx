type InlineVectorProps = {
  className?: string;
};

function InlineVector({ className, svg }: InlineVectorProps & { svg: string }) {
  return (
    <span
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

const navigationBridgeSvg = `<svg width="645" height="125" viewBox="0 0 645 125" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#liahoNavClip)">
<g filter="url(#liahoNavShadow)">
<path d="M0 0H645V3C640.65 5.4 622.95 11.925 614.175 19.875C605.475 27.75 592.125 51.15 583.425 59.025C574.65 66.9 561.375 72.15 552.6 75.225C543.9 78.3 530.55 80.025 521.85 80.85C513.075 81.675 499.725 80.85 491.025 80.85C482.325 80.85 468.975 80.85 460.2 80.85C451.5 80.925 438.15 80.25 429.45 81.15C420.675 81.975 407.325 83.775 398.625 86.925C389.925 90 376.575 98.85 367.875 103.05C359.1 107.25 345.675 114.525 337.05 116.55C328.425 118.65 315.675 119.4 307.125 117.675C298.5 115.95 285 108.45 276.3 104.175C267.6 99.975 254.25 90.9 245.475 87.675C236.775 84.45 223.425 82.35 214.725 81.375C206.025 80.4 192.675 80.925 183.9 80.85C175.2 80.775 161.85 80.85 153.15 80.85C144.375 80.85 131.025 81.45 122.325 80.775C113.625 80.175 100.275 79.725 91.5 76.35C82.8 72.975 69.45 65.4 60.75 57.075C51.975 48.675 38.55 24.975 29.925 17.475C21.3 9.9 4.275 5.775 0 3.9V0Z" fill="url(#liahoNavBody)" stroke="url(#liahoNavMetal)" stroke-width="1.35"/>
</g>
<path opacity=".56" d="M0 0H645V3C640.65 5.4 622.95 11.925 614.175 19.875C605.475 27.75 592.125 51.15 583.425 59.025C574.65 66.9 561.375 72.15 552.6 75.225C543.9 78.3 530.55 80.025 521.85 80.85C513.075 81.675 499.725 80.85 491.025 80.85C482.325 80.85 468.975 80.85 460.2 80.85C451.5 80.925 438.15 80.25 429.45 81.15C420.675 81.975 407.325 83.775 398.625 86.925C389.925 90 376.575 98.85 367.875 103.05C359.1 107.25 345.675 114.525 337.05 116.55C328.425 118.65 315.675 119.4 307.125 117.675C298.5 115.95 285 108.45 276.3 104.175C267.6 99.975 254.25 90.9 245.475 87.675C236.775 84.45 223.425 82.35 214.725 81.375C206.025 80.4 192.675 80.925 183.9 80.85C175.2 80.775 161.85 80.85 153.15 80.85C144.375 80.85 131.025 81.45 122.325 80.775C113.625 80.175 100.275 79.725 91.5 76.35C82.8 72.975 69.45 65.4 60.75 57.075C51.975 48.675 38.55 24.975 29.925 17.475C21.3 9.9 4.275 5.775 0 3.9V0Z" fill="url(#liahoNavGreen)"/>
<g filter="url(#liahoNavGlow)"><path d="M43.5 8.25C152.25 19.5 494.25 19.5 601.5 8.25" stroke="#E6F2EB" stroke-opacity=".58" stroke-width="7.5" stroke-linecap="round"/></g>
<path d="M54 7.5C160.5 13.5 484.5 13.5 591 7.5" stroke="#FFFFFA" stroke-opacity=".3" stroke-width="1.5" stroke-linecap="round"/>
<path d="M83.25 70.5C154.5 83.25 213 76.5 250.5 81C279.75 84.75 297.75 93.75 312 106.5C318.75 113.25 326.25 115.5 333.75 114.75C341.25 113.25 349.5 108 357 101.25C369.75 90.75 386.25 84.75 414.75 81C452.25 76.5 510.75 83.25 565.5 70.5" stroke="#F2EDDB" stroke-opacity=".66" stroke-width="1.575" stroke-linecap="round"/>
<path d="M82.875 72.75C154.875 85.5 212.25 79.5 250.5 84C281.25 87.75 300 97.5 314.25 110.25C321 116.25 328.5 119.25 336 117.75C342.75 116.25 351 111 358.5 104.25C371.25 93.75 387.75 87.75 416.25 84C454.5 79.5 511.5 84 565.5 71.25" stroke="#DB9C40" stroke-opacity=".92" stroke-width=".825" stroke-linecap="round"/>
</g>
<defs>
<filter id="liahoNavShadow" x="-18" y="-9" width="681" height="154" color-interpolation-filters="sRGB"><feDropShadow dy="9" stdDeviation="8.25" flood-color="#090605" flood-opacity=".28"/></filter>
<filter id="liahoNavGlow" x="34" y="-1" width="577" height="27" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="2.625"/></filter>
<linearGradient id="liahoNavBody" x1="0" y1="0" x2="0" y2="119" gradientUnits="userSpaceOnUse"><stop stop-color="#2E3434"/><stop offset=".1" stop-color="#182121"/><stop offset=".34" stop-color="#06120F"/><stop offset=".66" stop-color="#030A09"/><stop offset="1" stop-color="#010405"/></linearGradient>
<linearGradient id="liahoNavMetal" x1="0" y1="0" x2="645" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#78501E"/><stop offset=".2" stop-color="#E6B55D"/><stop offset=".52" stop-color="#9C6825"/><stop offset=".82" stop-color="#EDC36C"/><stop offset="1" stop-color="#79511F"/></linearGradient>
<linearGradient id="liahoNavGreen" x1="0" y1="0" x2="645" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#06231A" stop-opacity="0"/><stop offset=".5" stop-color="#0E5137" stop-opacity=".28"/><stop offset="1" stop-color="#06231A" stop-opacity="0"/></linearGradient>
<clipPath id="liahoNavClip"><rect width="645" height="125" fill="white"/></clipPath>
</defs></svg>`;
const forestDockSvg = `<svg width="99" height="470" viewBox="0 0 99 470" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="liahoDockBody" x1="10.5" y1="1.5" x2="99" y2="1.5" gradientUnits="userSpaceOnUse"><stop stop-color="#010705"/><stop offset=".12" stop-color="#02130D"/><stop offset=".35" stop-color="#053925"/><stop offset=".52" stop-color="#085734"/><stop offset=".7" stop-color="#033321"/><stop offset=".88" stop-color="#01110C"/><stop offset="1" stop-color="#000605"/></linearGradient>
<linearGradient id="liahoDockRim" x1="13.5" y1="4.5" x2="173.369" y2="33.141" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF7C9"/><stop offset=".18" stop-color="#F0C26B"/><stop offset=".43" stop-color="#804F1A"/><stop offset=".68" stop-color="#F2CC7A"/><stop offset="1" stop-color="#FFF5C2"/></linearGradient>
<linearGradient id="liahoDockGlass" x1="21" y1="10.5" x2="61.5" y2="10.5" gradientUnits="userSpaceOnUse"><stop stop-color="#0A3525" stop-opacity=".04"/><stop offset=".3" stop-color="#2AA36C" stop-opacity=".28"/><stop offset=".52" stop-color="#0D5C3D" stop-opacity=".1"/><stop offset=".76" stop-color="#07291F" stop-opacity=".04"/><stop offset="1" stop-color="#00100C" stop-opacity="0"/></linearGradient>
<radialGradient id="liahoDockLamp" cx="0" cy="0" r="1" gradientTransform="translate(37.5 39.75) scale(10.5)"><stop stop-color="#FFF6BD"/><stop offset=".28" stop-color="#F5D977" stop-opacity=".96"/><stop offset="1" stop-color="#E8C45E" stop-opacity="0"/></radialGradient>
<linearGradient id="liahoDockCompassRim" x1="14" y1="212" x2="78" y2="276" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF5C8"/><stop offset=".18" stop-color="#D9AD62"/><stop offset=".44" stop-color="#8B5C22"/><stop offset=".68" stop-color="#E9C676"/><stop offset="1" stop-color="#FFF3BD"/></linearGradient>
<filter id="liahoDockShadow" x="-2" y="-8" width="122" height="500"><feDropShadow dx="4" dy="8" stdDeviation="7" flood-color="#090605" flood-opacity=".3"/></filter>
<filter id="liahoDockGreenGlow"><feGaussianBlur stdDeviation="3"/></filter>
</defs>
<g filter="url(#liahoDockShadow)">
<path d="M32.25 1.5H42.75C58.5 1.5 69 12.75 69 30V163.5C69 185.25 80.25 200.25 90 213C96.75 222 99 231.75 99 243.75C99 256.5 94.5 267 87 277.5C75.75 292.5 69 307.5 69 328.5V438C69 457.5 58.5 468 42.75 468H32.25C17.25 468 10.5 457.5 10.5 439.5V30C10.5 12.75 18.75 1.5 32.25 1.5Z" fill="url(#liahoDockBody)" stroke="#FFF2C2" stroke-width="3"/>
</g>
<path d="M32.25 4.5H42C56.25 4.5 66 14.25 66 30.75V164.25C66 186.75 78 202.5 87 214.5C93.75 223.5 96 232.5 96 243.75C96 255 91.5 264.75 84 275.25C73.5 290.25 66 306 66 327.75V436.5C66 454.5 56.25 465 42 465H33C20.25 465 13.5 455.25 13.5 438.75V30.75C13.5 15 21 4.5 32.25 4.5Z" stroke="url(#liahoDockRim)" stroke-width="1.125"/>
<path opacity=".78" d="M21 10.5H61.5V455.25H21V10.5Z" fill="url(#liahoDockGlass)"/>
<g opacity=".55" filter="url(#liahoDockGreenGlow)"><path d="M22 21C18 80 20 148 25 184" stroke="#56D895" stroke-width="7.5" stroke-linecap="round"/><path d="M23 304C20 351 21 419 25.5 451.5" stroke="#56D895" stroke-width="6.75" stroke-linecap="round"/></g>
<path d="M37.5 49.5V198M37.5 293.25V431.25" stroke="#EFD788" stroke-opacity=".74" stroke-width=".75" stroke-dasharray="1.5 5.25"/>
<circle cx="37.5" cy="39.75" r="10.5" fill="url(#liahoDockLamp)"/><circle cx="37.5" cy="39.75" r="3.45" fill="#FFEBA3"/>
<circle cx="37.5" cy="445.5" r="10.5" fill="url(#liahoDockLamp)"/><circle cx="37.5" cy="445.5" r="3.45" fill="#FFEBA3"/>
<text x="45.75" y="210" fill="#F4EFDF" font-family="Georgia,serif" font-size="11" text-anchor="middle">N</text>
<text x="45.75" y="286" fill="#F4EFDF" font-family="Georgia,serif" font-size="11" text-anchor="middle">S</text>
<circle cx="45.75" cy="243.75" r="31.5" fill="#06140F" stroke="url(#liahoDockCompassRim)" stroke-width="1.4"/>
<circle cx="45.75" cy="243.75" r="26.25" fill="#0A281D" stroke="#D9BB70" stroke-width=".75"/>
<circle cx="45.75" cy="243.75" r="21.75" fill="none" stroke="#F0DFAA" stroke-opacity=".52" stroke-width=".55"/>
<g stroke="#E8D6A1" stroke-opacity=".62"><path d="M45.75 218.25V223"/><path d="M71.25 243.75H66.5"/><path d="M45.75 269.25V264.5"/><path d="M20.25 243.75H25"/><path d="M63.78 225.72L60.5 229"/><path d="M63.78 261.78L60.5 258.5"/><path d="M27.72 261.78L31 258.5"/><path d="M27.72 225.72L31 229"/></g>
<g stroke="#AA7A30" stroke-width=".55" stroke-linejoin="round"><path d="M45.75 220.5L51 237L45.75 243.75L40.5 237Z" fill="#F4EAD0"/><path d="M69 243.75L52.5 249L45.75 243.75L52.5 238.5Z" fill="#D5A64D"/><path d="M45.75 267L40.5 250.5L45.75 243.75L51 250.5Z" fill="#F4EAD0"/><path d="M22.5 243.75L39 238.5L45.75 243.75L39 249Z" fill="#D5A64D"/></g>
<circle cx="45.75" cy="243.75" r="3" fill="#F1D27C"/>
<text x="45.75" y="224" fill="#F0E2B7" font-size="4" text-anchor="middle">N</text><text x="45.75" y="266" fill="#F0E2B7" font-size="4" text-anchor="middle">S</text><text x="24" y="245.5" fill="#F0E2B7" font-size="4" text-anchor="middle">W</text><text x="67" y="245.5" fill="#F0E2B7" font-size="4" text-anchor="middle">E</text>
</svg>`;
const editorialVesselSvg = `<svg width="541" height="278" viewBox="0 0 541 278" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs><filter id="liahoEditorialShadow" x="-20" y="-10" width="582" height="318"><feDropShadow dy="9" stdDeviation="10.5" flood-color="#090605" flood-opacity=".2"/></filter>
<linearGradient id="liahoEditorialFill" x1="0" y1="3" x2="0" y2="278" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFFFD"/><stop offset=".38" stop-color="#FEFDFA"/><stop offset=".72" stop-color="#FCF8F1"/><stop offset="1" stop-color="#F5EDDF"/></linearGradient>
<linearGradient id="liahoEditorialRim" x1="2" y1="3" x2="540" y2="3" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF5D9"/><stop offset=".62" stop-color="#C89B55"/><stop offset="1" stop-color="#795221"/></linearGradient></defs>
<g filter="url(#liahoEditorialShadow)"><path d="M33.6024 3.25H469.906C492.129 3.25 504.722 18.577 504.722 41.1642V91.1788C504.722 110.539 513.611 122.64 527.685 129.093C536.574 133.126 540.278 141.193 540.278 149.26C540.278 158.134 536.574 165.394 526.944 171.847C513.611 179.914 506.203 193.628 502.499 211.375C497.314 237.996 486.944 259.776 472.128 271.876C463.98 276.717 455.091 277.523 443.239 277.523H33.6024C14.3428 277.523 1.75 262.196 1.75 240.416V41.1642C1.75 18.577 14.3428 3.25 33.6024 3.25Z" fill="url(#liahoEditorialFill)" stroke="url(#liahoEditorialRim)" stroke-width="1.275"/></g>
<path d="M38.7871 8.89673H461.757C480.276 8.89673 492.869 19.3836 495.832 35.5174" stroke="white" stroke-opacity=".92" stroke-width="1.05" stroke-linecap="round"/>
<path d="M33.603 273.49H438.054C455.092 273.49 464.722 270.263 472.87 262.196" stroke="#855929" stroke-opacity=".2" stroke-width=".75" stroke-linecap="round"/>
</svg>`;
const brandPodSvg = `<svg width="73" height="279" viewBox="0 0 73 279" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs><filter id="liahoPodShadow" x="-12" y="-6" width="97" height="298"><feDropShadow dx="3" dy="7.5" stdDeviation="6.75" flood-color="#090605" flood-opacity=".28"/></filter>
<linearGradient id="liahoPodBody" x1="0" y1="2" x2="67" y2="2" gradientUnits="userSpaceOnUse"><stop stop-color="#000906"/><stop offset=".18" stop-color="#021F14"/><stop offset=".42" stop-color="#054D2E"/><stop offset=".57" stop-color="#096339"/><stop offset=".74" stop-color="#032E1D"/><stop offset="1" stop-color="#000806"/></linearGradient>
<linearGradient id="liahoPodRim" x1="6" y1="6" x2="121" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF6C2"/><stop offset=".5" stop-color="#915C1A"/><stop offset="1" stop-color="#F5CC75"/></linearGradient></defs>
<g filter="url(#liahoPodShadow)"><path d="M0 31.8915C0 12.774 9.75 1.62207 24 1.62207H35.25C54.75 1.62207 66.75 15.9602 66.75 37.4674V203.949C66.75 227.05 59.25 245.371 45 258.116C36.75 265.285 27 269.267 15.75 269.267H0V31.8915Z" fill="url(#liahoPodBody)" stroke="#F7E8B6" stroke-width="2.25"/></g>
<path d="M6 32.4418C6 16.2209 14.25 5.67725 27 5.67725H37.5C54.75 5.67725 66.75 18.654 66.75 39.7412V206.817C66.75 228.715 60 246.558 45.75 257.913C38.25 264.401 29.25 269.267 18.75 269.267H6V32.4418Z" stroke="url(#liahoPodRim)" stroke-width="1.05"/>
<path opacity=".52" d="M12.75 19.47C9 72.18 9.75 191.41 12.75 238.45C13.5 252.24 18 261.16 25.5 266.02" stroke="#8CF2BA" stroke-opacity=".55" stroke-width=".975" stroke-linecap="round"/>
<path d="M63 46.23C66.75 99.76 66 188.97 63 226.28" stroke="#000B08" stroke-opacity=".75" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;
const editorialArrowSvg = `<svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#liahoArrowClip)">
<g filter="url(#liahoArrowOuter)">
<path d="M29 56C43.9117 56 56 43.9117 56 29C56 14.0883 43.9117 2 29 2C14.0883 2 2 14.0883 2 29C2 43.9117 14.0883 56 29 56Z" fill="#F8F1DF"/>
<path d="M29 56C43.9117 56 56 43.9117 56 29C56 14.0883 43.9117 2 29 2C14.0883 2 2 14.0883 2 29C2 43.9117 14.0883 56 29 56Z" stroke="url(#liahoArrowRim)" stroke-width="1.8"/>
</g>
<g filter="url(#liahoArrowInner)">
<path d="M29 50C40.598 50 50 40.598 50 29C50 17.402 40.598 8 29 8C17.402 8 8 17.402 8 29C8 40.598 17.402 50 29 50Z" fill="url(#liahoArrowFace)"/>
<path d="M29 50C40.598 50 50 40.598 50 29C50 17.402 40.598 8 29 8C17.402 8 8 17.402 8 29C8 40.598 17.402 50 29 50Z" stroke="#0B2C20" stroke-width="1.2"/>
</g>
<path d="M17 29H39M33 22L40 29L33 36" stroke="#F7ECD0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="liahoArrowOuter" x="-8.90039" y="-3.90002" width="75.8008" height="75.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.035 0 0 0 0 0.025 0 0 0 0 0.018 0 0 0 0.22 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_liaho_arrow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_liaho_arrow" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_liaho_arrow"/>
</filter>
<filter id="liahoArrowInner" x="-1.59961" y="-1.59998" width="61.1992" height="61.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="4.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.07 0 0 0 0 0.52 0 0 0 0 0.29 0 0 0 0.18 0"/>
<feBlend mode="screen" in2="BackgroundImageFix" result="effect1_dropShadow_liaho_arrow_inner"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_liaho_arrow_inner" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.14 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_liaho_arrow_inner"/>
</filter>
<linearGradient id="liahoArrowRim" x1="2" y1="2" x2="56" y2="56" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF1B3"/><stop offset="0.5" stop-color="#B67828"/><stop offset="1" stop-color="#F2D37F"/></linearGradient>
<linearGradient id="liahoArrowFace" x1="8" y1="8" x2="50" y2="50" gradientUnits="userSpaceOnUse"><stop stop-color="#0D754A"/><stop offset="0.45" stop-color="#053D25"/><stop offset="1" stop-color="#01120D"/></linearGradient>
<clipPath id="liahoArrowClip"><rect width="58" height="58" fill="white"/></clipPath>
</defs>
</svg>`;
const hireUnderlineSvg = `<svg width="193" height="24" viewBox="0 0 193 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 22C2 22 66.683 2 103.588 2C140.492 2 191 22 191 22" stroke="#FF0000" stroke-width="4" stroke-linecap="round"/></svg>`;

export function NavigationBridgeVector(props: InlineVectorProps) {
  return <InlineVector {...props} svg={navigationBridgeSvg} />;
}

export function ForestDockVector(props: InlineVectorProps) {
  return <InlineVector {...props} svg={forestDockSvg} />;
}

export function EditorialVesselVector(props: InlineVectorProps) {
  return <InlineVector {...props} svg={editorialVesselSvg} />;
}

export function BrandPodVector(props: InlineVectorProps) {
  return <InlineVector {...props} svg={brandPodSvg} />;
}

export function EditorialArrowVector(props: InlineVectorProps) {
  return <InlineVector {...props} svg={editorialArrowSvg} />;
}

export function HireUnderlineVector(props: InlineVectorProps) {
  return <InlineVector {...props} svg={hireUnderlineSvg} />;
}
