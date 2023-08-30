import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Header.css';

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header id="header">
            <div className="header__wrapper">
                <img className="header__logo" src="./logo.png" alt="logo" />
                <nav className="header__navigation">
                    <ul className="header__list-items" role="list">
                        <li className="header__list-item"><a href="#hero">Home</a></li>
                        <li className="header__list-item"><a href="#projects">Projects</a></li>
                        <li className="header__list-item"><a href="#skills">Skills</a></li>
                        {theme === 'dark' ?
                            <li>
                                <button onClick={() => setTheme('light')} className="header__theme-button btn"><i className="fa-solid fa-eye"></i> Light Mode</button>
                            </li>
                            :
                            <li>
                                <button onClick={() => setTheme('dark')} className="header__theme-button btn"><i className="fa-solid fa-eye"></i> Dark Mode</button>
                            </li>
                        }
                    </ul>
                </nav>
                <button className="header__burger-button btn"><i className="fa-solid fa-bars"></i></button>
            </div>
        </header>

    );
}