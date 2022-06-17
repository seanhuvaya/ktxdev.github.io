import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <h1 className="px-5 md:px-10 lg:px-44 xl:px-60">
      <Navbar />
      <Intro />
    </h1>
  );
}

export default App;
