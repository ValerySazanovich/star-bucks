import styles from './About.module.css';
import cafeImg     from '../../../assets/images/1.jpg';
import cookingImg  from '../../../assets/images/2.webp';
import weHaveImg   from '../../../assets/images/wehave.png';
import aboutVector from '../../../assets/images/about-vector.png';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* Левая колонка: фото кафе с зелёной тенью и бейджем */}
        <div className={styles.photoBlock}>
          <div className={styles.cafeShadow} />
          <img src={cafeImg} alt="StarBucks+ interior" className={styles.cafeImg} />
          <img src={weHaveImg} alt="We Have" className={styles.badge} />
        </div>

        {/* Декоративные волны (только десктоп) */}
        <img src={aboutVector} alt="" className={styles.vector} aria-hidden="true" />

        {/* Правая колонка: текст + Cooking Process */}
        <div className={styles.rightCol}>
          <div className={styles.textBlock}>
            <h2 className={styles.heading}>
              We make{' '}
              <span className={styles.accent}>delicious</span>
            </h2>
            <p className={styles.desc}>
              Only in 2021 we have made more than 100,000 orders for you,
              your loved ones, all of you, and in 2022 we are ready to
              destroy the market
            </p>
          </div>

          <div className={styles.cookingBlock}>
            <img src={cookingImg} alt="Cooking process" className={styles.cookingImg} />
            <button className={styles.cookingBtn}>
              <span className={styles.playIcon} aria-hidden="true" />
              Cooking Process
            </button>
          </div>
        </div>        

      </div>
    </section>
  );
}
