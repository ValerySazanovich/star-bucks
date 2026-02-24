import { EVENTS } from "../../../data/events.js";
import styles from "./Events.module.css";

export default function Events() {
  return (
    <section id="events" className={styles.section}>
      <div className={`container ${styles.header}`}>
        <p className={styles.description}>
          Only in 2021 we have made more than 100,000 orders for you, your loved
          ones, all of you, and in 2022 we are ready to destroy the market
        </p>
        <div className={styles.headerRight}>
          <h2 className={styles.title}>
            Our New
            <br />
            <span className={styles.accent}>Events</span>
          </h2>
        </div>
      </div>

      <div className={`container ${styles.gridWrap}`}>
        <div className={styles.grid}>
          {EVENTS.map((event) => (
            <article
              key={event.id}
              className={`${styles.card} ${event.size === "wide" ? styles.wide : ""}`}
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <button className={styles.btn}>More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
