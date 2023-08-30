import { useInView } from 'react-intersection-observer';
import './Skills.css';

export default function Skills() {
    const { ref: titleRefs, inView: areTitlesVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: skillsRef, inView: areSkillsVisible } = useInView({ threshold: 0.4, triggerOnce: true });

    return (
        <section id="skills">
            <div ref={titleRefs} className={`skills__titles ${areTitlesVisible ? 'active' : ''}`}>
                <h2 className="skills__title section--title">Skills</h2>
                <h3 className="skills__subtitle section--subtitle">Our landing page template works on all devices, so you only have
                    to set.
                </h3>
            </div>
            <ul ref={skillsRef} className={`skills__list-items ${areSkillsVisible ? 'active' : ''}`} role='list'>
                <li className="skills__list-item">
                    <i className="fa-brands fa-react skill--icon"></i>
                    <h4 className="skills__skill-title section--subtitle">React</h4>
                    <p className="skills__skill-description">Proficient in React with experience gained by developing interactive and dynamic
                        user interfaces using components, state management, hooks, and context.</p>
                </li>
                <li className="skills__list-item">
                    <i className="fa-brands fa-square-js skill--icon"></i>
                    <h4 className="skills__skill-title section--subtitle">JavaScript</h4>
                    <p className="skills__skill-description">During my journey of studying JavaScript, I embraced the challenge of solving different algorithmic problems.
                        This experience developed my logical thinking and problem-solving skills.</p>
                </li>
                <li className="skills__list-item">
                    <i className="fa-brands fa-html5 skill--icon"></i>
                    <h4 className="skills__skill-title section--subtitle">HTML</h4>
                    <p className="skills__skill-description">Experienced in writing HTML that prioritizes semantics, accessibility, and SEO,
                        contributing to improved content quality and enhanced user engagement.</p>
                </li>
                <li className="skills__list-item">
                    <i className="fa-brands fa-css3-alt skill--icon"></i>
                    <h4 className="skills__skill-title section--subtitle">CSS</h4>
                    <p className="skills__skill-description">Skilled at using CSS to create visually appealing and user-friendly web interfaces,
                        combining design and functionality seamlessly.</p>
                </li>
                <li className="skills__list-item">
                    <i className="fa-brands fa-node-js skill--icon"></i>
                    <h4 className="skills__skill-title section--subtitle">NodeJS</h4>
                    <p className="skills__skill-description">Aspiring Node.js enthusiast, embracing server-side development. Actively learning to build dynamic web applications,
                        with a focus on crafting responsive and efficient user experiences.
                    </p>
                </li>
                <li className="skills__list-item">
                    <img className="skill-mongo-leaf skill--icon" src="./mongo-leaf.svg" alt="MongoDB" />
                    <h4 className="skills__skill-title section--subtitle">MongoDB</h4>
                    <p className="skills__skill-description">Developing familiarity with MongoDB, focusing on effective data storage and retrieval.
                        Aiming to contribute database expertise to support applications' backend infrastructure.</p>
                </li>
            </ul>
        </section>
    );
}