import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';
import useThreshold from '../../hooks/useThreshold';

const SKILLS = [
    {
        icon: 'fa-react',
        title: 'React',
        description: 'Proficient in React with experience gained by developing interactive and dynamic user interfaces using components, state management, hooks, and context'
    },
    {
        icon: 'fa-square-js',
        title: 'JavaScript',
        description: 'During my journey of studying JavaScript, I embraced the challenge of solving different algorithmic problems. This experience developed my logical thinking and problem-solving skills.'
    },
    {
        icon: 'fa-html5',
        title: 'HTML',
        description: 'Experienced in writing HTML that prioritizes semantics, accessibility, and SEO, contributing to improved content quality and enhanced user engagement.'
    },
    {
        icon: 'fa-css3-alt',
        title: 'CSS',
        description: 'Skilled at using CSS to create visually appealing and user-friendly web interfaces, combining design and functionality seamlessly.'
    },
    {
        icon: 'fa-node-js',
        title: 'Node.js',
        description: 'Aspiring Node.js enthusiast, embracing server-side development. Actively learning to build dynamic web applications, with a focus on crafting responsive and efficient user experiences.'
    },
];

export default function Skills() {
    const threshold = useThreshold(0.4, 0.1);
    const { ref: titleRefs, inView: areTitlesVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: skillsRef, inView: areSkillsVisible } = useInView({ threshold: threshold, triggerOnce: true });

    return (
        <section id={styles["skills"]}>
            <div ref={titleRefs} className={`${styles["skills__titles"]} ${areTitlesVisible ? styles['skills--active'] : ''}`}>
                <h2 className={`${styles["skills__title"]} section--title`}>Skills</h2>
            </div>
            <ul ref={skillsRef} className={`${styles["skills__list-items"]} ${areSkillsVisible ? styles['skills--active'] : ''}`} role='list'>
                {SKILLS.map((skill, index) => (
                    <li key={index} className={styles["skills__list-item"]}>
                        <i className={`fa-brands ${skill.icon} ${styles[skill.icon]} ${styles["skill--icon"]}`}></i>
                        <h4 className={`${styles["skills__skill-title"]} section--subtitle`}>{skill.title}</h4>
                        <p className={styles["skills__skill-description"]}>{skill.description}</p>
                    </li>
                ))}
                <li className={styles["skills__list-item"]}>
                    <img className={`${styles["skill-mongo-leaf"]} ${styles["skill--icon"]}`} src="./mongo-leaf.svg" alt="MongoDB" />
                    <h4 className={`${styles["skills__skill-title"]} section--subtitle`}> MongoDB</h4>
                    <p className={styles["skills__skill-description"]} > Developing familiarity with MongoDB, focusing on effective data storage and retrieval.
                        Aiming to contribute database expertise to support applications' backend infrastructure.</p>
                </li>
            </ul>
        </section>
    );
}