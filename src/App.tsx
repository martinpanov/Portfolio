import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Projects />
            </main>
        </>
    );
}

export default App;
