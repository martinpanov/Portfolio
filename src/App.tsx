import { useEffect, useState } from 'react';

import './App.css';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
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
        <About />
      </main>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
