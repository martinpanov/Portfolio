import { useInView } from 'react-intersection-observer';
import './Projects.css';

export default function Projects() {
    const { ref: firstProjectRef, inView: isFirstProjectVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: secondProjectRef, inView: isSecondProjectVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: titlesRef, inView: areTitlesVisible } = useInView({ threshold: 0.4, triggerOnce: true });

    return (
        <section id="projects">
            <div ref={titlesRef} className={`projects__titles ${areTitlesVisible ? 'active' : ''}`}>
                <h2 className="projects__title section--title">Projects</h2>
                <h3 className="projects__subtitle section--subtitle">Showcasing Some Of My Web Development Projects.</h3>
            </div>
            <div ref={firstProjectRef} className={`projects__project-container ${isFirstProjectVisible ? 'active' : ''}`}>
                <div className="projects__image-wrapper first-wrapper">
                    <img className="projects__image" src="./begachka.png" alt="begachka" />
                </div>
                <div className="projects__info">
                    <h3 className="projects__project-title section--title">Car Marketplace & Rental</h3>
                    <p className="projects__description">A web application which allows you to list your car for sale and rent a car.
                        The application features user authentication, with the frontend making use of a variety of HTTP methods,
                        while the backend effectively covers all CRUD operations.</p>
                    <div className="projects__technologies-used">
                        <div className="projects__technology">
                            <h4 className="projects__technology-name">React</h4>
                        </div>
                        <div className="projects__technology">
                            <h4 className="projects__technology-name">Express.js</h4>
                        </div>
                        <div className="projects__technology">
                            <h4 className="projects__technology-name">MongoDB</h4>
                        </div>
                    </div>
                    <div className="projects__links">
                        <a className="projects__link" href="https://begachka.donttouchmydomain.com" target="_blank">
                            Live Demo <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                        <a className="projects__link" href="https://github.com/martinpanov/Cars" target="_blank">
                            Code <i className="fa-brands fa-github" />
                        </a>
                    </div>
                </div>
            </div>
            <div ref={secondProjectRef} className={`projects__project-container ${isSecondProjectVisible ? 'active' : ''}`}>
                <div className="projects__image-wrapper second-wrapper">
                    <img className="projects__image" src="./barbershop.png" alt="barbershop" />
                </div>
                <div className="projects__info">
                    <h3 className="projects__project-title section--title">Barbershop</h3>
                    <p className="projects__description">A website which showcases services, barbers' profiles, gallery,
                        and booking functionality. The website uses server side rendering for initial load speed and SEO,
                        along with client-side rendering for interactive user experiences, enhancing overall performance.
                    </p>
                    <div className="projects__technologies-used">
                        <div className="projects__technology">
                            <h4 className="projects__technology-name">Next.js</h4>
                        </div>
                        <div className="projects__technology">
                            <h4 className="projects__technology-name">Tailwind CSS</h4>
                        </div>
                        <div className="projects__technology">
                            <h4 className="projects__technology-name">MongoDB</h4>
                        </div>
                    </div>
                    <div className="projects__links">
                        <a className="projects__link" href="https://barbershop-bar8.vercel.app" target="_blank">
                            Live Demo <i className="fa-solid fa-arrow-up-right-from-square" />
                        </a>
                        <a className="projects__link" href="https://github.com/martinpanov/barbershop" target="_blank">
                            Code <i className="fa-brands fa-github" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}