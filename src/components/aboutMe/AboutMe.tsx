import React from "react";
import { Section } from "../shared/Section.styled";

const AboutMe = () => {
  return (
    <Section id="aboutMe">
      <h1>About me</h1>
      <div>{`I possess strong web development skills, designed and developed 
      dynamic web applications using React, utilizing Typescript. 
      Built extremely competent cross-platform single page applications
      using component-based architecture made up of several re-usable
      components, with each of them having its particular logic, written
      in JavaScript. Also created responsive web page designs and layouts
      using media queries, cascading style sheets grid layout and 
      styled-components. Strong working knowledge of ES6 using classes, 
      arrow functions, de-structuring assignments, promises, async/await, 
      object-oriented and functional programming.`}</div>
    </Section>
  );
};

export default AboutMe;
