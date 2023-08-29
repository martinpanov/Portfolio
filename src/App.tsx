import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { ThemeContext } from './context/ThemeContext';

type Theme = 'light' | 'dark';

function App() {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        if (theme === 'dark') {
            return document.body.setAttribute('data-theme', 'dark');
        }

        document.body.removeAttribute('data-theme');
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Header />
            <main>
                <Hero />
                <Projects />
                <Skills />
            </main>
            <Footer />
        </ThemeContext.Provider>
    );
}

export default App;
