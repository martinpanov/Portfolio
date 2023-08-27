import './Hero.css';

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero__main">
                <div className="hero__info">
                    <h1 className="hero__title section--title">Web Developer</h1>
                    <h2 className='hero__subtitle section--subtitle'>Hi, my name is Martin Panov - A Dedicated And Passionate Web Developer.</h2>
                    <a className='hero__github-logo' href="https://github.com/martinpanov/"><i className="fa-brands fa-github" /></a>
                </div>
                <div className='hero__person-img-wrapper'>
                    <img className="'hero__person-img" src="./me.png" alt="hero-image" />
                </div>
            </div>
            <div className="hero__tech-stack">
                <img src="./html5.svg" alt="HTML5" />
                <img src="./css.svg" alt="CSS" />
                <img src="./javascript.svg" alt="JavaScript" />
                <img src="./react.svg" alt="React" />
                <img src="./tailwind.svg" alt="Tailwind" />
                <img src="./nodejs.svg" alt="NodeJS" />
                <img src="./mongodb.svg" alt="MongoDB" />
            </div>
        </section>
    );
}