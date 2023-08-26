import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Projects />
                <Skills />
            </main>
        </>
    );
}

export default App;
