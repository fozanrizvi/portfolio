import React from "react";
import { Section } from "../shared/Section.styled";

import { About } from "./AboutMe.styled";
import { Text } from "../shared/Text.styled";

const AboutMe = () => {
  const text: any = (
    <p>
      I possess strong web development skills, designed and developed dynamic
      web applications using React, <br />
      utilizing Typescript. Built extremely competent cross-platform single page
      applications using
      <br /> component-based architecture made up of several re-usable
      components, with each <br />
      of them having its particular logic, <br />
      written in JavaScript. <br />
      <br />
      Also created responsive web page designs and layouts using media queries,
      <br />
      cascading style sheets grid layout and styled-components. <br />
      <br />
      Strong working knowledge of ES6 using classes, arrow functions, <br />
      de-structuring assignments, promises, async/await, <br />
      object-oriented and functional programming.
    </p>
  );
  return (
    <Section id="aboutMe">
      <h1>About me</h1>
      <Text>{text}</Text>
    </Section>
  );
};

export default AboutMe;
