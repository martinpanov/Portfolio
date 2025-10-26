import { FC, useContext } from 'react';

import styles from './Header.module.css';
import { ThemeContext } from '../../context/ThemeContext';
import { RenderIf } from '../RenderIf';
import { MobileMenu } from './components/MobileMenu';

const NAV_LINKS: Array<{ text: string; href?: string }> = [
  { text: 'Home', href: '#hero' },
  { text: 'Projects', href: '#projects' },
  { text: 'Skills', href: '#skills' },
  { text: 'About me', href: '#about' },
];

export const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const links: Array<{ text: string; href?: string }> = [
    ...NAV_LINKS,
    { text: theme === 'dark' ? 'Light mode' : 'Dark mode' },
  ];

  return (
    <header id="header">
      <div className={styles['header__wrapper']}>
        <img className={styles['header__logo']} src="./logo.png" alt="logo" />
        <nav className={styles['header__navigation']}>
          <MobileMenu links={links} />
          <ul className={styles['header__list-items']} role="list">
            {links.map((link) => (
              <li key={link.text} className={styles['header__list-item']}>
                <RenderIf condition={link.href}>
                  <a href={link.href}>{link.text}</a>
                </RenderIf>
                <RenderIf condition={!link.href}>
                  <button
                    onClick={() =>
                      setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                    className={`${styles['header__theme-button']} btn`}
                  >
                    <i className="fa-solid fa-eye" />
                    {link.text}
                  </button>
                </RenderIf>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
