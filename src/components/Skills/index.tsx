import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { SkillsCard } from './components/SkillCard';
import styles from './Skills.module.css';
import { cn } from '../../utils/cn';

const SKILLS = [
  {
    icon: 'fa-react',
    title: 'React',
    description:
      'Proficient in React with experience gained by developing interactive and dynamic user interfaces using components, state management, hooks, and context',
  },
  {
    icon: 'fa-square-js',
    title: 'JavaScript',
    description:
      'During my journey of studying JavaScript, I embraced the challenge of solving different algorithmic problems. This experience developed my logical thinking and problem-solving skills.',
  },
  {
    icon: 'fa-html5',
    title: 'HTML',
    description:
      'Experienced in writing HTML that prioritizes semantics, accessibility, and SEO, contributing to improved content quality and enhanced user engagement.',
  },
  {
    icon: 'fa-css3-alt',
    title: 'CSS',
    description:
      'Skilled at using CSS to create visually appealing and user-friendly web interfaces, combining design and functionality seamlessly.',
  },
  {
    icon: 'fa-node-js',
    title: 'Node.js',
    description:
      'Aspiring Node.js enthusiast, embracing server-side development. Actively learning to build dynamic web applications, with a focus on crafting responsive and efficient user experiences.',
  },
  {
    icon: 'fa-mongodb',
    title: 'MongoDB',
    description:
      'Developing familiarity with MongoDB, focusing on effective data storage and retrieval. Aiming to contribute database expertise to support applications&apos backend infrastructure.',
  },
];

export const Skills: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className={cn(styles['skills'], 'fade-in', inView && 'fade-in--active')}
    >
      <h2 className={`${styles['skills__title']} section--title`}>Skills</h2>
      <ul className={styles['skills__list-items']} role="list">
        {SKILLS.map((skill) => (
          <SkillsCard skill={skill} />
        ))}
      </ul>
    </section>
  );
};
