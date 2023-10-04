import HomePage from "./components/HomePage/HomePage";
import { FlexDiv } from "./App.styled";

//components
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/aboutMe/AboutMe";
import Shelf from "./components/shelf/Shelf";
import Github from "./components/github/Github";
import Skills from "./components/skills/Skills";
import ContactMe from "./components/contactMe/ContactMe";
import Hobbies from "./components/hobbies/Hobbies";

function App() {
  return (
    <FlexDiv>
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
    </FlexDiv>
  );
}

export default App;
