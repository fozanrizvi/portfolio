import { Section } from "../shared/Section.styled";
import Fozan from "../../assets/images/Fozan.png";
import { Img } from "./HomePage.styled";

const HomePage = () => {
  return (
    <Section>
      <Img src={Fozan} />
      <h1>Fozan Rizvi</h1>
      <h3>Frontend Developer</h3>
      <div>
        {`I am passionate about creating accessible, responsive, and 
            user-friendly web applications that deliver value and satisfaction
            to the users.`}
      </div>
    </Section>
  );
};

export default HomePage;
