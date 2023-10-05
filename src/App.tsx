import HomePage from "./components/HomePage/HomePage";

//components
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import Shelf from "./components/shelf/Shelf";
import Github from "./components/github/Github";
import Skills from "./components/skills/Skills";
import ContactMe from "./components/contactMe/ContactMe";
import Hobbies from "./components/hobbies/Hobbies";
import { FlexView } from "./components/shared/FlexView.styled";

function App() {
  return (
    <FlexView>
      <Navbar />
      <div style={{ width: "100%" }}>
        <HomePage />
        <AboutMe />
        <Shelf />
        <Github />
        <Skills />
        <ContactMe />
        <Hobbies />
      </div>
    </FlexView>
  );
}

export default App;
