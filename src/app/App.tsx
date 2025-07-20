import AboutMe from "../page/home/AboutMe";
import Experience from "../page/home/Experience";
import Header from "../page/home/Header";
import Projects from "../page/home/Projects";
import Skills from "../page/home/Skills";
import Layout from "../shared/Layout/Layout";

function App() {
  return (
    <Layout>
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
    </Layout>
  );
}

export default App;
