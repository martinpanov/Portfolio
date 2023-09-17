import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';

export default function Projects() {
    const { ref: titlesRef, inView: areTitlesVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: firstProjectRef, inView: isFirstProjectVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: secondProjectRef, inView: isSecondProjectVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: thirdProjectRef, inView: isThirdProjectVisible } = useInView({ threshold: 0.4, triggerOnce: true });

    const projects = [{
        ref: firstProjectRef,
        inView: isFirstProjectVisible,
        image: 'begachka',
        title: 'Car Marketplace & Rental',
        description: 'A web application which allows you to list your car for sale and rent a car. The application features user authentication, with the frontend making use of a variety of HTTP methods, while the backend effectively covers all CRUD operations.',
        technologies: ['React', 'Express.js', 'MongoDB'],
        link: 'https://begachka.donttouchmydomain.com',
        codeLink: 'https://github.com/martinpanov/Cars'
    },
    {
        ref: secondProjectRef,
        inView: isSecondProjectVisible,
        image: 'barbershop',
        title: 'Barbershop',
        description: 'A website which showcases services, barbers\' profiles, gallery, and booking functionality. The website uses server side rendering for initial load speed and SEO, along with client-side rendering for interactive user experiences, enhancing overall performance.',
        technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
        link: 'https://barbershop-bar8.vercel.app',
        codeLink: 'https://github.com/martinpanov/barbershop'
    },
    {
        ref: thirdProjectRef,
        inView: isThirdProjectVisible,
        image: 'weather-app',
        title: 'Weather App',
        description: 'A web application built with React, it provides a dynamic and responsive user interface, ensuring an interactive experience. Redux handles state management efficiently, while the OpenWeather API supplies real-time data. Users can access current weather conditions, daily forecasts, and today\'s weather details',
        technologies: ['React', 'Redux'],
        link: 'https://donttouchmydomain.com',
        codeLink: 'https://github.com/martinpanov/Weather-App'
    }
    ];
    return (
        <section id={styles["projects"]}>
            <div ref={titlesRef} className={`${styles["projects__titles"]} ${areTitlesVisible ? styles["projects--active"] : ''}`}>
                <h2 className={`${styles["projects__title"]} section--title`}>Projects</h2>
                <h3 className={`${styles["projects__subtitle"]} section--subtitle`}>Showcasing Some Of My Web Development Projects.</h3>
            </div>
            {projects.map((project) => (
                <div key={project.title} ref={project.ref} className={`${styles["projects__project-container"]} ${project.inView ? styles["projects--active"] : ''}`}>
                    <a className={`${styles["projects__image-wrapper"]} ${styles[`${project.image}-wrapper`]}`} href={project.link} target="_blank">
                        <img className={styles["projects__image"]} src={`./${project.image}.png`} alt={project.image} />
                    </a>
                    <div className={styles["projects__info"]}>
                        <h3 className={`${styles["projects__project-title"]} section--title`}>{project.title}</h3>
                        <p className={styles["projects__description"]}>{project.description}</p>
                        <div className={styles["projects__technologies-used"]}>
                            {project.technologies.map(technology => (
                                <div key={technology} className={styles["projects__technology"]}>
                                    <h4 className={styles["projects__technology-name"]}>{technology}</h4>
                                </div>
                            ))
                            }
                        </div>
                        <div className={styles["projects__links"]}>
                            <a className={styles["projects__link"]} href={project.link} target="_blank">
                                Live Demo <i className={`fa-solid fa-arrow-up-right-from-square ${styles["fa-arrow-up-right-from-squre"]}`} />
                            </a>
                            <a className={styles["projects__link"]} href={project.codeLink} target="_blank">
                                Code <i className={`fa-brands fa-github ${styles["projects--fa-github"]}`} />
                            </a>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>
    );
}