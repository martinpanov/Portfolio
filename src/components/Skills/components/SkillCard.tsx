import { FC } from 'react';

import { RenderIf } from '../../RenderIf';
import styles from '../Skills.module.css';

type Props = {
  skill: {
    title: string;
    icon: string;
    description: string;
  };
};

export const SkillsCard: FC<Props> = ({ skill }) => {
  return (
    <li key={skill.title} className={styles['skills__list-item']}>
      <RenderIf condition={skill.title === 'MongoDB'}>
        <img
          className={`${styles['skill-mongo-leaf']} ${styles['skill--icon']}`}
          src="./mongo-leaf.svg"
          alt="MongoDB"
        />
      </RenderIf>
      <RenderIf condition={skill.title !== 'MongoDB'}>
        <i
          className={`fa-brands ${skill.icon} ${styles[skill.icon]} ${styles['skill--icon']}`}
        />
      </RenderIf>
      <h4 className={`${styles['skills__skill-title']} section--subtitle`}>
        {skill.title}
      </h4>
      <p className={styles['skills__skill-description']}>{skill.description}</p>
    </li>
  );
};
