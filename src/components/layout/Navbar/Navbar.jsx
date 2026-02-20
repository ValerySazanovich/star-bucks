import { useState } from 'react';
import styles from './Navbar.module.css';
import { useScrollLock } from '../../../hooks/useScrollLock';
import logoSrc from '../../../assets/logo.svg';

const NAV_LINKS = [
  { label: 'Home',   href: '#hero' },
  { label: 'Select', href: '#products' },
  { label: 'Shop',   href: '#events' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useScrollLock(isOpen);

  const close = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>

        {/* Логотип */}
        <a href="#hero" className={styles.logo} onClick={close}>
          <img src={logoSrc} alt="StarBucks+" className={styles.logoImg} />
        </a>

        {/* Десктопная навигация */}
        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.navLink}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Кнопка-гамбургер (только мобильный) */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(prev => !prev)}
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!isOpen}
      >
        <ul className={styles.mobileList}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className={styles.mobileLink} onClick={close}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
