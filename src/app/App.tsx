import AboutMe from "../page/home/AboutMe";
import Contact from "../page/home/Contact";
import Education from "../page/home/Education";
import Experience from "../page/home/Experience";
import Header from "../page/home/Header";
import Projects from "../page/home/Projects";
import Skills from "../page/home/Skills";
import Layout from "../shared/ui/Layout/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
