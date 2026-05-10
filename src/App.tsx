
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import {
  Main,
  Education,
  Experience,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import ProjectPage from './pages/ProjectPage';

const Home = () => (
  <>
    <Main />
    <Experience />
    <Education />
    <Project />
    <Contact />
  </>
);

function App() {
    const [mode, setMode] = useState<string>('light');

    const handleModeChange = () => {
        if (mode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Routes>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;
