import "./index.css";

// Components
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import GithubRepos from "./components/github-repos/GithubRepos";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GithubRepos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
