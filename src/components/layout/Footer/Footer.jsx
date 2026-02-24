import styles from './Footer.module.css';
import logoSrc from '../../../assets/logo.svg';
import instagramIcon from '../../../assets/icons/Mask group.svg';

const NAV_COLUMNS = [
  {
    title: 'Main',
    href: '#hero',
    links: [
      { label: 'Buy',  href: '#products' },
      { label: 'More', href: '#about' },
    ],
  },
  {
    title: 'We make',
    href: '#about',
    links: [
      { label: 'Process', href: '#about' },
    ],
  },
  {
    title: 'Products',
    href: '#products',
    links: [
      { label: 'Cappuccino', href: '#products' },
      { label: 'Fast',       href: '#products' },
    ],
  },
  {
    title: 'Events',
    href: '#events',
    links: [
      { label: 'Drinks', href: '#events' },
      { label: 'Eat',    href: '#events' },
    ],
  },
  {
    title: 'Contacts',
    href: '#contacts',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Number',    href: '#contacts' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Logo */}
        <a href="#hero" className={styles.logoLink} aria-label="StarBucks+ — перейти наверх">
          <img src={logoSrc} alt="StarBucks+" className={styles.logoImg} />
        </a>

        {/* Navigation */}
        <nav className={styles.nav} aria-label="Навигация футера">
          {NAV_COLUMNS.map((col) => (
            <div key={col.title} className={styles.navCol}>
              <a href={col.href} className={styles.navTitle}>{col.title}</a>
              <ul className={styles.navList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles.navLink}
                      {...(link.href.startsWith('http') && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Scroll-to-top */}
        <button
          type="button"
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Прокрутить наверх"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M10 15V5M5 10L10 5L15 10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Bottom row: phone + instagram */}
        <div className={styles.bottomRow}>
          <a href="tel:+79999999999" className={styles.phone}>
            +7-999-999-99-99
          </a>
          <a
            href="https://instagram.com"
            className={styles.instagramLink}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="" aria-hidden="true" className={styles.instagramIcon} />
          </a>
        </div>

      </div>
    </footer>
  );
}
