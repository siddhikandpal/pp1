import {useState} from 'react';
import './App.css';
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import Projects from './components/projects/projects';
import Sidebar from './components/sidebar/sidebar';
import Skills from './components/skills/skills';

function App() {
  const [navBtn, setNavBtn] = useState(true);

  return (
    <>
    <Sidebar navBtn={navBtn} setNavBtn={setNavBtn} />
    <main className={`main ${navBtn ? 'main-with-sidebar' : 'main-full-width'}`}>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    </>
  );
}

export default App;
