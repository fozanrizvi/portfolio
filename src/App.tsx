import HomePage from './components/HomePage/HomePage';

import { FlexDiv } from './App.styled';
import AboutMe from './components/aboutMe/AboutMe';
import Shelf from './components/shelf/Shelf';
import Github from './components/github/Github';
import ContactMe from './components/contactMe/ContactMe';
import Hobbies from './components/hobbies/Hobbies';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <FlexDiv>
      <Navbar />
      <div style={{ width: '100%'}}>                
      <HomePage />
      <AboutMe />
      <Shelf />
      <Github />
      <ContactMe />
      <Hobbies />
      </div>
      
    </FlexDiv>
  );
}

export default App;
