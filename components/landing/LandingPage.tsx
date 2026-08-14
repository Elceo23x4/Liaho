import { Body } from "@/components/landing/body/Body";
import { Footer } from "@/components/landing/footer/Footer";
import { Hero } from "@/components/landing/hero/Hero";

export function LandingPage() {
  return (
    <main id="main-content">
      <Hero />
      <Body />
      <Footer />
    </main>
  );
}
