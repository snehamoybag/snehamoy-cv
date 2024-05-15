import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "/src/styles/main.css";

const Main = () => {
  return (
    <main className="main">
      <About />
      <Contact />
      <Education />
      <Experience />
      <Skills />
    </main>
  );
};

export default Main;
