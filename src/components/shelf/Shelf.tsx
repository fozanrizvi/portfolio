import { Section } from "../shared/Section.styled";

import write from "../../assets/images/banners/write.png";
import projects from "../../assets/images/banners/projects.png";
import { Banner } from "../shared/Banner.styled";
import { FlexView } from "../shared/FlexView.styled";

const Shelf = () => {
  return (
    <Section id="shelf">
      <h1>Shelf</h1>
      <FlexView style={{ justifyContent: "space-around" }}>
        <a>
          <Banner src={projects} />
          <h1>Projects</h1>
        </a>
        <a
          href="https://medium.com/me/stories/public"
          target="_blank"
          rel="noreferrer"
        >
          <Banner src={write} />
          <h1>Writings</h1>
        </a>
      </FlexView>

      {/* <div>imc3-components</div>
      <div>axon dispatch</div>
      <div>netflix clone</div>
      <div>airbnb clone</div> */}
    </Section>
  );
};

export default Shelf;
