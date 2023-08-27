import './Projects.css';

export default function Projects() {
    return (
        <section id="how-does-it-work">
            <div className="wrapper">
                <div className="how-does-it-work-titles">
                    <h2 className="section--title">Projects</h2>
                    <h3 className="section--subtitle">Showcasing Some Of My Web Development Projects.</h3>
                </div>
                <div className="how-does-it-work-container">
                    <img src="./images/how-does-it-work-first-image.svg" alt="how-does-it-work" />
                    <div className="how-does-it-work-container-info">
                        <h3 className="how-does-it-work-title">Car Marketplace & Rental</h3>
                        <p className="how-does-it-work-paragraph">A web application which allows you to list your car for sale and rent a car.
                            The application features user authentication, with the frontend making use of a variety of HTTP methods,
                            while the backend effectively covers all CRUD operations.</p>
                    </div>
                </div>
                <div className="how-does-it-work-container">
                    <img src="./images/how-does-it-work-second-image.svg" alt="how-does-it-work" />
                    <div className="how-does-it-work-container-info">
                        <h3 className="how-does-it-work-title">Barbershop</h3>
                        <p className="how-does-it-work-paragraph">A website which showcases services, barbers' profiles, gallery,
                            and booking functionality. The website uses server side rendering for initial load speed and SEO,
                            along with client-side rendering for interactive user experiences, enhancing overall performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}