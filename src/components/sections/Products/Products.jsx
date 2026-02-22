import { useState, useEffect } from 'react';
import styles from './Products.module.css';
import { PRODUCTS } from '../../../data/products.js';

function getPerPage() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768)  return 2;
  return 1;
}

export default function Products() {
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(getPerPage);

  useEffect(() => {
    const handler = () => {
      const next = getPerPage();
      setPerPage(next);
      setCurrent(c => Math.min(c, Math.max(0, PRODUCTS.length - next)));
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const maxIndex = PRODUCTS.length - perPage;

  return (
    <section id="products" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            New Our<br />
            <span className={styles.accent}>Products</span>
          </h2>
          <p className={styles.subtitle}>
            Have time to buy the most harmonious drinks in the new Starbucks
            coffee and don't forget about the discount!
          </p>
        </div>
      </div>

      <div className={styles.carouselOuter}>
        <button
          className={`${styles.navBtn} ${current === 0 ? styles.navHidden : ''}`}
          aria-label="Previous product"
          aria-hidden={current === 0}
          onClick={() => setCurrent(c => c - 1)}
        >
          <span className={`${styles.navArrow} ${styles.navArrowLeft}`} />
        </button>

        <div className={styles.trackClip}>
          <div
            className={styles.track}
            style={{ '--slide': current }}
          >
            {PRODUCTS.map(product => (
              <article key={product.id} className={styles.card}>
                <div className={styles.imageSection}>
                  <div className={styles.circle} />
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImg}
                  />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.name}>{product.name}</p>
                  <p className={styles.desc}>{product.description}</p>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>{product.price.toFixed(2)}$</span>
                    <span className={styles.volume}>{product.volume} ml</span>
                  </div>
                  <button className={styles.buyBtn}>Buy Product</button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className={`${styles.navBtn} ${current >= maxIndex ? styles.navHidden : ''}`}
          aria-label="Next product"
          aria-hidden={current >= maxIndex}
          onClick={() => setCurrent(c => c + 1)}
        >
          <span className={styles.navArrow} />
        </button>
      </div>
    </section>
  );
}
