import { landingContent } from "@/content/landing";

import styles from "./hero.module.css";

export function Hero() {
  return (
    <section
      id="hero"
      className={styles.root}
      data-section="hero"
      data-gate="8"
      aria-labelledby="hero-heading"
    >
      <div className={styles.semanticCopy}>
        <p>{landingContent.hero.eyebrow}</p>
        <h1 id="hero-heading">
          <span>{landingContent.hero.headline[0]}</span>{" "}
          <span>{landingContent.hero.headline[1]}</span>
        </h1>
      </div>
    </section>
  );
}
