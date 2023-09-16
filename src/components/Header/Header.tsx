import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './Header.module.css';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header id="header">
            <div className={styles["header__wrapper"]}>
                <img className={styles["header__logo"]} src="./logo.png" alt="logo" />
                <nav className={styles["header__navigation"]}>
                    {isMobileMenuOpen ?
                        <div className={styles["header__list-items-wrapper"]}>
                            <div className={styles["header__close-button-wrapper"]}>
                                <button onClick={() => setIsMobileMenuOpen(false)} className={`${styles["header__close-button"]} btn`}>
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                            <ul className={styles["header__list-items-mobile"]} role="list">
                                <li className={styles["header__list-item-mobile"]} onClick={() => setIsMobileMenuOpen(false)}><a href="#_hero_12q1e_19">Home</a></li>
                                <li className={styles["header__list-item-mobile"]} onClick={() => setIsMobileMenuOpen(false)}><a href="#_projects_sa1mt_15">Projects</a></li>
                                <li className={styles["header__list-item-mobile"]} onClick={() => setIsMobileMenuOpen(false)}><a href="#_skills_1b291_9">Skills</a></li>
                                <li className={styles["header__list-item"]} onClick={() => setIsMobileMenuOpen(false)}><a href="#_about_1hdqg_9">About me</a></li>
                                {theme === 'dark' ?
                                    <li className={styles["header__list-item-mobile"]} onClick={() => { setTheme('light'); setIsMobileMenuOpen(false); }}>
                                        <i className="fa-solid fa-eye"></i> Light Mode
                                    </li>
                                    :
                                    <li className={styles["header__list-item-mobile"]} onClick={() => { setTheme('dark'); setIsMobileMenuOpen(false); }}>
                                        <i className="fa-solid fa-eye"></i> Dark Mode
                                    </li>
                                }
                            </ul>
                        </div>
                        :
                        <button onClick={() => setIsMobileMenuOpen(true)} className={`${styles[`header__burger-button`]} btn`}><i className="fa-solid fa-bars"></i></button>
                    }
                    <ul className={styles["header__list-items"]} role="list">
                        <li className={styles["header__list-item"]}><a href="#_hero_12q1e_19">Home</a></li>
                        <li className={styles["header__list-item"]}><a href="#_projects_sa1mt_15">Projects</a></li>
                        <li className={styles["header__list-item"]}><a href="#_skills_1b291_9">Skills</a></li>
                        <li className={styles["header__list-item"]}><a href="#_about_1hdqg_9">About me</a></li>
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

            </div>
        </header>

    );
}