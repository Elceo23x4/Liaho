"use client";
import styles from "./footer.module.css";

export function ScrollToTop() {
  return (
    <button
      type="button"
      className={styles.scrollTop}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <span><i aria-hidden="true">↑</i></span>
    </button>
  );
}
