import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Events from './components/Events';
import Loader from './components/Loader';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import VideoItem from './components/VideoItem';
import HeroAbout from './components/HeroAbout';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useScrollAnimations(isLoaded);

  return (
    <>
      {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
      <div className={`transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Nav />
        <HeroAbout/>
        <Experience />
        <Work />
        <VideoItem/>
        <Certificates />
        <Events />
        <Skills />
        <Schedule />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
