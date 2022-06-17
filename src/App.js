import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <h1>
      <Navbar />
      <Intro />
      <Experience />
      <Contact />
    </h1>
  );
}

export default App;
