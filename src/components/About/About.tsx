import { useInView } from 'react-intersection-observer';
import './About.css';

export default function About() {
    const { ref: titleRef, inView: isTitleVisible } = useInView({ threshold: 0.4, triggerOnce: true });
    const { ref: infoRef, inView: isInfoVisible } = useInView({ threshold: 0.4, triggerOnce: true });


    return (
        <section id="about">
            <h2 ref={titleRef} className={`about__title section--title ${isTitleVisible ? 'active' : ''}`}>About Me</h2>
            <div ref={infoRef} className={`about__info ${isInfoVisible ? 'active' : ''}`}>
                <img src="./about-me.png" alt="about-me" className="about__me-image" />
                <p className="about__description">
                    Hi, my name is Martin Panov. <img className="about__wave-image" src="./wave.png" alt="wave" /> Rougly 2 years ago, I started my journey of learning web development and more specifically specializing in JavaScript.
                    I got into the IT industry back in 2019 as a Customer Service Representative in a hosting company called SiteGround.
                    Ever since I was young, I've been drawn into computers and technology in general. Just like any youngster, curiosity drove me to experiment with all sorts of things to discover how they worked.
                    For me it was all about computers, I liked swapping parts out from my computer with new ones and I also liked messing around with different software and games.
                    Working in a hosting company has taught me more about how the internet works and that made me decide to take it a step further and apply for a Programming Basics course at SoftUni.
                    I went through the entire JavaScript Web Developer track in SoftUni. There, I acquired knowledge spanning from fundamental concepts like conditional statements, variable declarations,
                    data types, and loops to more advanced topics like DOM manipulation, unit testing, error handling, HTML, CSS, setting up servers using NodeJS/Express.js, creating REST APIs, fetching data, frameworks such as React and more.
                </p>
            </div>
        </section>
    );
}