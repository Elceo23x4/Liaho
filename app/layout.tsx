import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Mono, Instrument_Sans, Playfair_Display } from "next/font/google";

import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-condensed",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Liahona Geoservices",
    template: "%s | Liahona Geoservices",
  },
  description:
    "Registered surveyors, mapping consultants, land project advisers and geospatial specialists.",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
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
      className={`${instrumentSans.variable} ${playfair.variable} ${dmMono.variable} ${bebas.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
