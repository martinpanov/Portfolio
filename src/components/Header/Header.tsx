import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header id="header">
            <div className={styles["header__wrapper"]}>
                <img className={styles["header__logo"]} src="./logo.png" alt="logo" />
                <nav className={styles["header__navigation"]}>
                    <ul className={styles["header__list-items"]} role="list">
                        <li className={styles["header__list-item"]}><a href="#hero">Home</a></li>
                        <li className={styles["header__list-item"]}><a href="#projects">Projects</a></li>
                        <li className={styles["header__list-item"]}><a href="#skills">Skills</a></li>
                        {theme === 'dark' ?
                            <li>
                                <button onClick={() => setTheme('light')} className={`${styles["header__theme-button"]} btn`}><i className="fa-solid fa-eye"></i> Light Mode</button>
                            </li>
                            :
                            <li>
                                <button onClick={() => setTheme('dark')} className={`${styles["header__theme-button"]} btn`}><i className="fa-solid fa-eye"></i> Dark Mode</button>
                            </li>
                        }
                    </ul>
                </nav>
                <button className={`${styles[`header__burger-button`]} btn`}><i className="fa-solid fa-bars"></i></button>
            </div>
        </header>

    );
}