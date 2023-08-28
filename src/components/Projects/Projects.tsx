import './Projects.css';

export default function Projects() {
    return (
        <section id="projects">
            <div className="projects__titles">
                <h2 className="projects__title section--title">Projects</h2>
                <h3 className="projects__subtitle section--subtitle">Showcasing Some Of My Web Development Projects.</h3>
            </div>
            <div className="projects__project-container">
                <div className="projects__image-wrapper first-wrapper">
                    <img className="projects__image" src="./begachka.png" alt="begachka" />
                </div>
                <div className="projects__info">
                    <h3 className="projects__project-title section--title">Car Marketplace & Rental</h3>
                    <p className="projects__description">A web application which allows you to list your car for sale and rent a car.
                        The application features user authentication, with the frontend making use of a variety of HTTP methods,
                        while the backend effectively covers all CRUD operations.</p>
                </div>
            </div>
            <div className="projects__project-container">
                <div className="projects__image-wrapper second-wrapper">
                    <img className="projects__image" src="./barbershop.png" alt="barbershop" />
                </div>
                <div className="projects__info">
                    <h3 className="projects__project-title section--title">Barbershop</h3>
                    <p className="projects__description">A website which showcases services, barbers' profiles, gallery,
                        and booking functionality. The website uses server side rendering for initial load speed and SEO,
                        along with client-side rendering for interactive user experiences, enhancing overall performance.
                    </p>
                </div>
            </div>
        </section>
    );
}