import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { ProjectCard } from './components/ProjectCard';
import styles from './Projects.module.css';
import { cn } from '../../utils/cn';

const PROJECTS = [
  {
    image: 'begachka',
    title: 'Car Marketplace & Rental',
    description:
      'A web application which allows you to list your car for sale and rent a car. The application features user authentication, with the frontend making use of a variety of HTTP methods, while the backend effectively covers all CRUD operations.',
    technologies: ['React', 'Express.js', 'MongoDB'],
    link: 'https://cars.yoannabest.com',
    codeLink: 'https://github.com/martinpanov/Cars',
  },
  {
    image: 'barbershop',
    title: 'Barbershop',
    description:
      "A website which showcases services, barbers' profiles, gallery, and booking functionality. The website uses server side rendering for initial load speed and SEO, along with client-side rendering for interactive user experiences, enhancing overall performance.",
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    link: 'https://barbershop.yoannabest.com',
    codeLink: 'https://github.com/martinpanov/barbershop',
  },
  {
    image: 'weather-app',
    title: 'Weather App',
    description:
      "A web application built with React, it provides a dynamic and responsive user interface, ensuring an interactive experience. Redux handles state management efficiently, while the OpenWeather API supplies real-time data. Users can access current weather conditions, daily forecasts, and today's weather details",
    technologies: ['React', 'Redux'],
    link: 'https://weather.yoannabest.com',
    codeLink: 'https://github.com/martinpanov/Weather-App',
  },
];

export const Projects: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section id="projects" className={styles['projects']}>
      <div
        ref={ref}
        className={cn(
          styles['projects__titles'],
          'fade-in',
          inView && 'fade-in--active'
        )}
      >
        <h2 className={`${styles['projects__title']} section--title`}>
          Projects
        </h2>
        <h3 className={`${styles['projects__subtitle']} section--subtitle`}>
          Showcasing Some Of My Web Development Projects.
        </h3>
      </div>

      {PROJECTS.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
};
