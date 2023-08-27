import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { ThemeContext } from './context/ThemeContext';

type Theme = 'dark' | 'light';

function App() {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        console.log(theme);
        if (theme === 'light') {
            return document.body.setAttribute('data-theme', 'light');
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
