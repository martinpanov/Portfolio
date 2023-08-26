import './Projects.css';

export default function Projects() {
    return (
        <section id="how-does-it-work">
            <div className="wrapper">
                <div className="how-does-it-work-titles">
                    <span className="subtitle">Saflow</span>
                    <h2 className="section-title title">How does it work?</h2>
                    <h3 className="section-subtitle subtitle">Our landing page template work on all devices, so clone and
                        get
                        building!</h3>
                </div>
                <div className="how-does-it-work-container">
                    <img src="./images/how-does-it-work-first-image.svg" alt="how-does-it-work" />
                    <div className="how-does-it-work-container-info">
                        <h3 className="how-does-it-work-title title">Super easy to customize.</h3>
                        <p className="how-does-it-work-paragraph">Crystal clear class naming and build quality makes this
                            super
                            easy to update and customize for
                            your brand. Oh, we also include figma files!</p>
                    </div>
                </div>
                <div className="how-does-it-work-container">
                    <img src="./images/how-does-it-work-second-image.svg" alt="how-does-it-work" />
                    <div className="how-does-it-work-container-info">
                        <h3 className="how-does-it-work-title title">Totally free and cloneable.</h3>
                        <p className="how-does-it-work-paragraph">Our mission is to support all creators, from all
                            backgrounds.
                            If our free content helps you in anyway, please considering following and sharing to help
                            support us.</p>
                    </div>
                </div>
                <div className="how-does-it-work-container">
                    <img src="./images/how-does-it-work-third-image.svg" alt="how-does-it-work" />
                    <div className="how-does-it-work-container-info">
                        <h3 className="how-does-it-work-title title">High quality build from the flowbase crew.</h3>
                        <p className="how-does-it-work-paragraph">We strive to provide the best free and premium content for
                            all
                            webflow creators. We've used best practises to ensure a high quality production level build.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}