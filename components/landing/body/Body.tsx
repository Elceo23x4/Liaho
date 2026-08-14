import { serviceFamilies } from "@/content/services";

import styles from "./body.module.css";

export function Body() {
  return (
    <section
      id="services"
      className={styles.root}
      data-section="body"
      data-gate="8"
      aria-labelledby="services-heading"
    >
      <div className={styles.stickyStage}>
        <h2 id="services-heading" className="sr-only">
          Liahona Geoservices capabilities
        </h2>

        <div className={styles.semanticContent}>
          {serviceFamilies.map((family) => (
            <article key={family.id} data-service-family={family.id}>
              <h3>{family.title}</h3>
              <p>{family.intro}</p>
              <ul>
                {family.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.instrumentStage} aria-hidden="true" />
      </div>
    </section>
  );
}
