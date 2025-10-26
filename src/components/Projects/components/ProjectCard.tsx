import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '../../../utils/cn';
import styles from '../Projects.module.css';

type Props = {
  project: {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    link: string;
    codeLink: string;
  };
};

export const ProjectCard: FC<Props> = ({ project }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        styles['projects__container'],
        'fade-in',
        inView && 'fade-in--active'
      )}
    >
      <a
        className={`${styles['projects__image-wrapper']} ${styles[`${project.image}-wrapper`]}`}
        href={project.link}
        target="_blank"
      >
        <img
          className={`${styles['projects__image']} ${styles[`${project.image}-wrapper__image`]}`}
          src={`./${project.image}.png`}
          alt={project.image}
          loading="lazy"
        />
      </a>
      <div className={styles['projects__info']}>
        <h3 className={`${styles['projects__project-title']} section--title`}>
          {project.title}
        </h3>
        <p className={styles['projects__description']}>{project.description}</p>
        <div className={styles['projects__technologies']}>
          {project.technologies.map((technology) => (
            <div key={technology} className={styles['projects__technology']}>
              <h4 className={styles['projects__technology-name']}>
                {technology}
              </h4>
            </div>
          ))}
        </div>
        <div className={styles['projects__links']}>
          <a
            className={styles['projects__link']}
            href={project.link}
            target="_blank"
          >
            Live Demo{' '}
            <i
              className={`fa-solid fa-arrow-up-right-from-square ${styles['projects__link-icon__external']}`}
            />
          </a>
          <a
            className={styles['projects__link']}
            href={project.codeLink}
            target="_blank"
          >
            Code{' '}
            <i
              className={`fa-brands fa-github ${styles['projects__link-icon__github']}`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
