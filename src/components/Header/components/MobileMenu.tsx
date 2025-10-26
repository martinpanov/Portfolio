import { FC, Fragment, useContext, useState } from 'react';

import { ThemeContext } from '../../../context/ThemeContext';
import { RenderIf } from '../../RenderIf';
import styles from '../Header.module.css';

type Props = {
  links: Array<{ text: string; href?: string; }>;
};

export const MobileMenu: FC<Props> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      <RenderIf condition={isOpen}>
        <div className={styles['header__list-items-wrapper']}>
          <div className={styles['header__close-button-wrapper']}>
            <button
              onClick={() => setIsOpen(false)}
              className={`${styles['header__close-button']} btn`}
            >
              <i className="fa-solid fa-x" />
            </button>
          </div>

          <ul className={styles['header__list-items']} role="list">
            {links.map((link) => (
              <li
                key={link.text}
                className={styles['header__list-item']}
                onClick={() => {
                  if (link.text === 'Light mode' || link.text === 'Dark mode') {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                  }

                  setIsOpen(false);
                }}
              >
                <RenderIf condition={link.href}>
                  <a href={link.href}>{link.text}</a>
                </RenderIf>
                <RenderIf condition={!link.href}>
                  <i className="fa-solid fa-eye" /> {link.text}
                </RenderIf>
              </li>
            ))}
          </ul>
        </div>
      </RenderIf>
      <RenderIf condition={!isOpen}>
        <button
          onClick={() => setIsOpen(true)}
          className={`${styles['header__burger-button']} btn`}
        >
          <i className="fa-solid fa-bars" />
        </button>
      </RenderIf>
    </Fragment>
  );
};
