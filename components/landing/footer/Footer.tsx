import { footerContent } from "@/content/footer";

import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root} data-section="footer" data-gate="8">
      <nav aria-label="Footer navigation">
        <ul>
          {footerContent.navigation.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <p>
        {footerContent.copyright} — {footerContent.credit}
      </p>
    </footer>
  );
}
