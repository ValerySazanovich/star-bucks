import styles from './Contacts.module.css';
import storefrontImg from '../../../assets/images/photo-1568036193587-84226a9c5a1b 4.png';
import weHaveImg     from '../../../assets/images/wehave.png';
import instagramIcon from '../../../assets/icons/Group 88.svg';
import phoneIcon     from '../../../assets/icons/Mask group.svg';
import contactVector from '../../../assets/images/about-vector.png';

export default function Contacts() {
  return (
    <section id="contacts" className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* Текст — первый в DOM → слева на десктопе */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Our{' '}
            <span className={styles.accent}>Contacts</span>
          </h2>
          <p className={styles.desc}>
            Have time to buy the most harmonious drinks in the new Starbucks
            coffee and don't forget about the discount!
          </p>
          <div className={styles.contacts}>
            <a href="#" className={styles.contactItem}>
              <img src={instagramIcon} alt="Instagram" className={styles.contactIcon} />
              <span>@supercoffee</span>
            </a>
            <a href="tel:+79999999999" className={styles.contactItem}>
              <img src={phoneIcon} alt="Phone" className={styles.contactIcon} />
              <span>+7-999-999-99-99</span>
            </a>
          </div>
        </div>

        {/* Фото — второй в DOM → сверху (mobile) / справа (desktop) */}
        <div
          className={styles.photoBlock}
          style={{ '--waveUrl': `url(${contactVector})` }}
        >
          {/* photoWrapper: ::before = зелёный прямоугольник за фото */}
          <div className={styles.photoWrapper}>
            <img
              src={storefrontImg}
              alt="StarBucks+ storefront"
              className={styles.photo}
            />
          </div>
          <img src={weHaveImg} alt="We Have" className={styles.badge} />
        </div>

      </div>
    </section>
  );
}
