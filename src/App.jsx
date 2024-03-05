import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Nav/>    
      <Jumbotron />
      <About />
      <Education />
      <Experience />
      <Skills/>
      <Footer />
    </>
  );
}

export default App;
