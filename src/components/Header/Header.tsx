import { useContext } from 'react';
import './Header.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <header>
            <div className="wrapper">
                <img src="./Safia-logo.svg" alt="logo" />
                <div className="header-btns">
                    {theme === 'dark' ?
                        <button onClick={() => setTheme('light')} className="btn"><i className="fa-solid fa-eye"></i> Light Mode</button> :
                        <button onClick={() => setTheme('dark')} className="btn"><i className="fa-solid fa-eye"></i> Dark Mode</button>
                    }
                    <button className="btn light-color-btn">Clone Template</button>
                </div>
                <button className="btn burger-button"><i className="fa-solid fa-bars"></i></button>
            </div>
        </header>

    );
}