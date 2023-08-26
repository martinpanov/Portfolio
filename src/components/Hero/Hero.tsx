export default function Hero() {
    return (
        <section id="hero">
            <div className="wrapper">
                <div className="hero-info">
                    <h1 className="section-title title">Landing Template for Startups</h1>
                    <div className="hero-info-and-button">
                        <h2 className="section-subtitle subtitle">Our landing page template is free to clone and perfect for
                            all
                            sorts of
                            technology businesses.
                            Built
                            by
                            the flowbase crew.</h2>
                        <button className="btn hero-btn">Pricing and Plans</button>
                    </div>
                </div>
                <img className="hero-img" src="./images/hero-image.png" alt="hero-image" />
                <div className="hero-images">
                    <img src="./images/google.svg" alt="google" />
                    <img src="./images/slack.svg" alt="slack" />
                    <img src="./images/amazon.svg" alt="amazon" />
                    <img src="./images/zoom.svg" alt="zooom" />
                    <img src="./images/netflix.svg" alt="netflix" />
                </div>
            </div>
        </section>
    );
}