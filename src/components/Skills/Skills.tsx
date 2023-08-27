import './Skills.css';

export default function Skills() {
    return (
        <section id="features">
            <div className="wrapper">
                <h2 className="section--title">Skills</h2>
                <h3 className="section--subtitle">Our landing page template works on all devices, so you only have
                    to set.
                </h3>
                <div className="features-links">
                    <a className="feature-link" href="">
                        <i className="fa-brands fa-react icon"></i>
                        <h4 className="feature-title title">React</h4>
                        <p className="feature-paragraph">Proficient in React with experience gained by developing interactive and dynamic
                            user interfaces using components, state management, hooks, and context.</p>
                    </a>
                    <a className="feature-link" href="">
                        <i className="fa-brands fa-square-js icon"></i>
                        <h4 className="feature-title title">JavaScript</h4>
                        <p className="feature-paragraph">During my journey of studying JavaScript, I embraced the challenge of solving different algorithmic problems.
                            This experience developed my logical thinking and problem-solving skills.</p>
                    </a>
                    <a className="feature-link" href="">
                        <i className="fa-brands fa-html5 icon"></i>
                        <h4 className="feature-title title">HTML</h4>
                        <p className="feature-paragraph">Experienced in writing HTML that prioritizes semantics, accessibility, and SEO,
                            contributing to improved content quality and enhanced user engagement.</p>
                    </a>
                    <a className="feature-link" href="">
                        <i className="fa-brands fa-css3-alt icon"></i>
                        <h4 className="feature-title title">CSS</h4>
                        <p className="feature-paragraph">Skilled at using CSS to create visually appealing and user-friendly web interfaces,
                            combining design and functionality seamlessly.</p>
                    </a>
                    <a className="feature-link" href="">
                        <i className="fa-brands fa-node-js icon"></i>
                        <h4 className="feature-title title">NodeJS</h4>
                        <p className="feature-paragraph">A pseudo-Latin text used in web design, layout, and printing in
                            place
                            of things to emphasise
                            layouts for previewing layouts and visual mockups.</p>
                    </a>
                    <a className="feature-link" href="">
                        <img className='skill-mongo-leaf icon' src="./mongo-leaf.svg" alt="MongoDB" />
                        <h4 className="feature-title title">MongoDB</h4>
                        <p className="feature-paragraph">A pseudo-Latin text used in web design, layout, and printing in
                            place
                            of things to emphasise
                            layouts for previewing layouts and visual mockups.</p>
                    </a>
                </div>
            </div>
        </section>
    );
}