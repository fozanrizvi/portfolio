import { Section } from "../shared/Section.styled";
import { Image } from "./Skills.styled";

//images
import html5 from "../../assets/images/html5.svg";
import css3 from "../../assets/images/css3.svg";
import js from "../../assets/images/js.svg";
import sass from "../../assets/images/sass.svg";
import react from "../../assets/images/react.svg";
import nodejs from "../../assets/images/nodejs.svg";
import aws from "../../assets/images/aws.svg";
import ts from "../../assets/images/ts.svg";
import figma from "../../assets/images/figma.svg";

const Skills = () => {
  return (
    <Section>
      <div id="skills">
        <h1>Skills</h1>
      </div>
      <div>
        <a
          href="https://www.w3schools.com/html/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={html5} alt="html5" />
        </a>
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={css3} alt="css3" />
        </a>
        <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
          <Image src={sass} alt="sass" />
        </a>

        <br />

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={js} alt="js" />
        </a>

        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <Image src={react} alt="react" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={ts} alt="ts" />
        </a>

        <br />

        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          <Image src={nodejs} alt="nodejs" />
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <Image src={figma} alt="figma" />
        </a>
        <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
          <Image src={aws} alt="" />
        </a>
      </div>
    </Section>
  );
};

export default Skills;
