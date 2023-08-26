import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <img src="./Safia-logo.svg" alt="logo" />
                <div className="header-btns">
                    <button className="btn"><i className="fa-solid fa-eye"></i> Light Mode</button>
                    <button className="btn light-color-btn">Clone Template</button>
                </div>
                <button className="btn burger-button"><i className="fa-solid fa-bars"></i></button>
            </div>
        </header>

    );
}