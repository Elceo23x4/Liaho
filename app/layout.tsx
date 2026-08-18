import type { Metadata, Viewport } from "next";
import {
  Bebas_Neue,
  Days_One,
  DM_Mono,
  Galindo,
  Instrument_Sans,
  Jaini,
  Jockey_One,
  Libre_Caslon_Display,
  Mochiy_Pop_P_One,
  Playfair_Display,
} from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const libreCaslon = Libre_Caslon_Display({ subsets: ["latin"], variable: "--font-libre-caslon", weight: "400", display: "swap" });
const daysOne = Days_One({ subsets: ["latin"], variable: "--font-days-one", weight: "400", display: "swap" });
const mochiy = Mochiy_Pop_P_One({ subsets: ["latin"], variable: "--font-mochiy", weight: "400", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["300", "400", "500"], display: "swap" });
const bebas = Bebas_Neue({ subsets: ["latin"], variable: "--font-condensed", weight: "400", display: "swap" });
const galindo = Galindo({ subsets: ["latin"], variable: "--font-galindo", weight: "400", display: "swap" });
const jockey = Jockey_One({ subsets: ["latin"], variable: "--font-jockey", weight: "400", display: "swap" });
const jaini = Jaini({ subsets: ["latin"], variable: "--font-jaini", weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Liahona Geoservices", template: "%s | Liahona Geoservices" },
  description: "Registered surveyors, mapping consultants, land project advisers and geospatial specialists.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={[
        instrumentSans.variable, playfair.variable, libreCaslon.variable, daysOne.variable,
        mochiy.variable, dmMono.variable, bebas.variable, galindo.variable, jockey.variable, jaini.variable,
      ].join(" ")}
      suppressHydrationWarning
    >
      <body><SmoothScrollProvider>{children}</SmoothScrollProvider></body>
    </html>
  );
}
