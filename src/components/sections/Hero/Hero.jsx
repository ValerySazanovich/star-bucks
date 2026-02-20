import styles from './Hero.module.css';
import heroCupSrc from '../../../assets/images/hero-cup@2x.webp';

const STATS = [
  { num: '9k',  label: 'Premium\nUsers' },
  { num: '2k',  label: 'Happy\nCustomer' },
  { num: '28',  label: 'Awards\nWinning' },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>


      <div className={`container ${styles.inner}`}>

        {/* ══ Левый блок ══ */}
        <div className={styles.left}>

          <h1 className={styles.heading}>
            New Cafe<br />
            by <span className={styles.brand}>StarBucks</span>
          </h1>

          <p className={styles.subtitle}>
            Have time to buy the most harmonious drinks in the
            new Starbucks coffee and don't forget about the discount!
          </p>

          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Select a coffee</button>
            <button className={styles.btnSecondary}>More</button>
          </div>

          <div className={styles.stats}>
            {STATS.map(({ num, label }) => (
              <div key={num} className={styles.statItem}>
                <span className={styles.statValue}>
                  {num}<span className={styles.statPlus}>+</span>
                </span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ Правый блок ══ */}
        <div className={styles.right}>

          {/* Обёртка чашки — ::after содержит hero-vector.png */}
          <div className={styles.cupWrapper}>
            <img
              src={heroCupSrc}
              alt="Starbucks Pumpkin Spice Creme"
              className={styles.cup}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
