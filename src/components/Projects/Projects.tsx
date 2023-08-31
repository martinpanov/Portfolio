import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';

export default function Projects() {
    const { ref: firstProjectRef, inView: isFirstProjectVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: secondProjectRef, inView: isSecondProjectVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: titlesRef, inView: areTitlesVisible } = useInView({ threshold: 0.4, triggerOnce: true });

    return (
        <section id={styles["projects"]}>
            <div ref={titlesRef} className={`${styles["projects__titles"]} ${areTitlesVisible ? styles["active"] : ''}`}>
                <h2 className={`${styles["projects__title"]} section--title`}>Projects</h2>
                <h3 className={`${styles["projects__subtitle"]} section--subtitle`}>Showcasing Some Of My Web Development Projects.</h3>
            </div>
            <div ref={firstProjectRef} className={`${styles["projects__project-container"]} ${isFirstProjectVisible ? styles["active"] : ''}`}>
                <div className={`${styles["projects__image-wrapper"]} ${styles["first-wrapper"]}`}>
                    <img className={styles["projects__image"]} src="./begachka.png" alt="begachka" />
                </div>
                <div className={styles["projects__info"]}>
                    <h3 className={`${styles["projects__project-title"]} section--title`}>Car Marketplace & Rental</h3>
                    <p className={styles["projects__description"]}>A web application which allows you to list your car for sale and rent a car.
                        The application features user authentication, with the frontend making use of a variety of HTTP methods,
                        while the backend effectively covers all CRUD operations.</p>
                    <div className={styles["projects__technologies-used"]}>
                        <div className={styles["projects__technology"]}>
                            <h4 className={styles["projects__technology-name"]}>React</h4>
                        </div>
                        <div className={styles["projects__technology"]}>
                            <h4 className={styles["projects__technology-name"]}>Express.js</h4>
                        </div>
                        <div className={styles["projects__technology"]}>
                            <h4 className={styles["projects__technology-name"]}>MongoDB</h4>
                        </div>
                    </div>
                    <div className={styles["projects__links"]}>
                        <a className={styles["projects__link"]} href="https://begachka.donttouchmydomain.com" target="_blank">
                            Live Demo <i className={`fa-solid fa-arrow-up-right-from-square ${styles["fa-arrow-up-right-from-squre"]}`} />
                        </a>
                        <a className={styles["projects__link"]} href="https://github.com/martinpanov/Cars" target="_blank">
                            Code <i className={`fa-brands fa-github ${styles["fa-github"]}`} />
                        </a>
                    </div>
                </div>
            </div>
            <div ref={secondProjectRef} className={`${styles["projects__project-container"]} ${isSecondProjectVisible ? styles["active"] : ''}`}>
                <div className={`${styles["projects__image-wrapper"]} ${styles["second-wrapper"]}`}>
                    <img className={styles["projects__image"]} src="./barbershop.png" alt="barbershop" />
                </div>
                <div className={styles["projects__info"]}>
                    <h3 className={`${styles["projects__project-title"]} section--title`}>Barbershop</h3>
                    <p className={styles["projects__description"]}>A website which showcases services, barbers' profiles, gallery,
                        and booking functionality. The website uses server side rendering for initial load speed and SEO,
                        along with client-side rendering for interactive user experiences, enhancing overall performance.
                    </p>
                    <div className={styles["projects__technologies-used"]}>
                        <div className={styles["projects__technology"]}>
                            <h4 className={styles["projects__technology-name"]}>Next.js</h4>
                        </div>
                        <div className={styles["projects__technology"]}>
                            <h4 className={styles["projects__technology-name"]}>Tailwind CSS</h4>
                        </div>
                        <div className={styles["projects__technology"]}>
                            <h4 className={styles["projects__technology-name"]}>MongoDB</h4>
                        </div>
                    </div>
                    <div className={styles["projects__links"]}>
                        <a className={styles["projects__link"]} href="https://barbershop-bar8.vercel.app" target="_blank">
                            Live Demo <i className={`fa-solid fa-arrow-up-right-from-square ${styles["fa-arrow-up-right-from-squre"]}`} />
                        </a>
                        <a className={styles["projects__link"]} href="https://github.com/martinpanov/barbershop" target="_blank">
                            Code <i className={`fa-brands fa-github ${styles["fa-github"]}`} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}