import { Section } from "../shared/Section.styled";

import { FlexView } from "../shared/FlexView.styled";
import { Img } from "./Shelf.styled";

import experian from "../../assets/images/projects/experian.png";
import axon from "../../assets/images/projects/axon.png";
import netflix from "../../assets/images/projects/netflix.png";
import airbnb from "../../assets/images/projects/airbnb.png";
import wellsfargo from "../../assets/images/projects/wellsfargo.png";

const Shelf = () => {
  return (
    <Section id="shelf">
      <h1>Shelf</h1>
      <FlexView style={{ justifyContent: "space-around" }}>
        <div>
          <h1>imc3-components</h1>
          <Img src={experian} />
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>

        <div>
          <h2>axon-dispatch</h2>
          <Img src={axon} />
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>

        <div>
          <h1>netflix-clone</h1>
          <Img src={netflix} />
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>

        <div>
          <h1>airbnb-clone</h1>
          <Img src={airbnb} />
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>

        <div>
          <h1>wells-fargo</h1>
          <Img src={wellsfargo} />
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>
        {/* <a
          href="https://medium.com/me/stories/public"
          target="_blank"
          rel="noreferrer"
        ></a> */}
      </FlexView>

      {/* <div>imc3-components</div>
      <div>axon dispatch</div>
      <div>netflix clone</div>
      <div>airbnb clone</div> */}
    </Section>
  );
};

export default Shelf;
