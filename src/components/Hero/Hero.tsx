import { useInView } from 'react-intersection-observer';
import styles from './Hero.module.css';

export default function Hero() {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section id={styles["hero"]} ref={ref} className={`${inView ? styles['active'] : ''}`}>
            <div className={styles["hero__main"]}>
                <div className={styles["hero__info"]}>
                    <h1 className={`${styles["hero__title"]} section--title`}>Web Developer</h1>
                    <h2 className={`${styles["hero__subtitle"]} section--subtitle`}>Hi, my name is Martin Panov - A Dedicated And Passionate Web Developer.</h2>
                    <a className={styles['hero__github-logo']} href="https://github.com/martinpanov/"><i className="fa-brands fa-github" /></a>
                </div>
                <div className={styles['hero__person-img-wrapper']}>
                    <img className={styles["'hero__person-img"]} src="./me.png" alt="hero-image" />
                </div>
            </div>
            <div className={styles["hero__tech-stack"]}>
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