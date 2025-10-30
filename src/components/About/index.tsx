import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './About.module.css';
import { cn } from '../../utils/cn';

export const About: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={ref}
      className={cn(styles['about'], 'fade-in', inView && 'fade-in--active')}
    >
      <h2 className={`${styles['about__title']} section--title`}>About Me</h2>
      <div className={styles['about__info']}>
        <img
          className={styles['about__me-image']}
          src="./about-me.png"
          alt="about-me"
          loading="lazy"
        />
        <div>
          <p className={styles['about__description']}>
            Hi, my name is Martin Panov.{' '}
            <img
              className={styles['about__wave-image']}
              src="./wave.png"
              alt="wave"
            />{' '}
            Rougly 3 years ago, I started my journey of learning web development
            and more specifically specializing in JavaScript. I got into the IT
            industry back in 2019 as a Customer Service Representative in a
            hosting company called SiteGround.
          </p>
          <p className={styles['about__description']}>
            Ever since I was young, I've been drawn into computers and
            technology in general. Just like any youngster, curiosity drove me
            to experiment with all sorts of things to discover how they worked.
            For me it was all about computers, I liked swapping parts out from
            my computer with new ones and I also liked messing around with
            different software and games.
          </p>
          <p className={styles['about__description']}>
            Working in a hosting company has taught me more about how the
            internet works and that made me decide to take it a step further and
            apply for a Programming Basics course at SoftUni. I went through the
            entire JavaScript Web Developer track in SoftUni. There, I acquired
            knowledge spanning from fundamental concepts like conditional
            statements, variable declarations, data types, and loops to more
            advanced topics like DOM manipulation, unit testing, error handling,
            HTML, CSS, setting up servers using NodeJS/Express.js, creating REST
            APIs, fetching data, frameworks such as React and more.
          </p>
        </div>
      </div>
    </section>
  );
};
