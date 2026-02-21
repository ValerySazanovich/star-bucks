import styles from './Features.module.css';
import tastyIcon     from '../../../assets/images/10 1.png';
import fastIcon      from '../../../assets/images/21 1.png';
import availableIcon from '../../../assets/images/30 1.png';

const FEATURES = [
  {
    id:   'tasty',
    icon: fastIcon,
    title: 'Tasty',
    desc:  'We have the most delicious coffee',
  },
  {
    id:   'fast',
    icon: availableIcon,
    title: 'Fast',
    desc:  'Our cafe will serve you quickly',
  },
  {
    id:   'available',
    icon: tastyIcon,
    title: 'Available',
    desc:  'Cafe will serve at the most pleasant prices',
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.outer}`}>
        <div className={styles.card}>
          {FEATURES.map(({ id, icon, title, desc }) => (
            <div key={id} className={styles.item}>
              <div className={styles.iconBox}>
                <div className={styles.circle} />
                <img src={icon} alt={title} className={styles.icon} />
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
