import { useRef, useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {

  const [activeId, setActiveId] = useState('summary');

  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavItemClick = (e) => {

    const newActiveId = e.target.id;
    switch (e.target.id) {
      case 'summary':
        scrollIntoView(introRef, newActiveId);
        break;
      case 'projects':
        scrollIntoView(projectsRef, newActiveId);
        break
      case 'experience':
        scrollIntoView(experienceRef, newActiveId);
        break
      case 'contact':
        scrollIntoView(contactRef, newActiveId);
        break
      default:
        return
    }
  }

  const scrollIntoView = (ref, id) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    setActiveId(id)
  }

  return (
    <>
      <Navbar activeId={activeId} onNavItemClick={handleNavItemClick} />
      <Intro ref={introRef} />
      <Projects ref={projectsRef} />
      <Experience ref={experienceRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;
