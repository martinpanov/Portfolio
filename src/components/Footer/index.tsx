import { FC } from 'react';

import styles from './Footer.module.css';

export const Footer: FC = () => {
  return (
    <footer id="footer" className={styles['footer']}>
      Martin Panov &copy; {new Date().getFullYear()}
    </footer>
  );
};
