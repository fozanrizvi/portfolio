import { Section } from "../shared/Section.styled";

import { Img, ShelfWrapper, ShelfContainer } from "./Shelf.styled";

import experian from "../../assets/images/projects/experian.png";
import axon from "../../assets/images/projects/axon.png";
import netflix from "../../assets/images/projects/netflix.png";
import airbnb from "../../assets/images/projects/airbnb.png";
import wellsfargo from "../../assets/images/projects/wellsfargo.png";
import ZoomImage from "../shared/ZoomImage";
import { DisappearOnZoom } from "../shared/ZoomImage/styled";
import { ReactNode, useState } from "react";
import { FlexView } from "../shared/FlexView.styled";

interface Data {
  title: string;
  imgSrc: any;
  content: ReactNode;
  open?: boolean;
}

const Shelf = () => {
  const [data, setData] = useState<Data[]>([
    {
      title: "imc3-components",
      imgSrc: experian,
      content: (
        <div>
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>
      ),
    },
    {
      title: "axon-dispatch",
      imgSrc: axon,
      content: (
        <div>
          <h2>axon-dispatch</h2>
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>
      ),
    },
    {
      title: "netflix-clone",
      imgSrc: netflix,
      content: (
        <div>
          <h1>netflix-clone</h1>
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>
      ),
    },
    {
      title: "airbnb-clone",
      imgSrc: airbnb,
      content: (
        <div>
          <h1>airbnb-clone</h1>
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>
      ),
    },
    {
      title: "wells-fargo",
      imgSrc: wellsfargo,
      content: (
        <div>
          <h1>wells-fargo</h1>
          <h3>Challange</h3>
          <h3>My role</h3>
          <h3>Solution</h3>
        </div>
      ),
    },
  ]);
  const zoomIn = (idx: number) => {
    const dataClone = [...data];
    dataClone[idx].open = true;
    setData(dataClone);
  };

  const zoomOut = (idx: number) => {
    const dataClone = [...data];
    dataClone[idx].open = false;
    setData(dataClone);
  };

  return (
    <Section id="shelf">
      <h1>Shelf</h1>
      <div>
        {data.map(({ title, imgSrc, content, open }, idx) => {
          const fadeClass = open ? "fadeOut" : "fadeIn";
          return (
            <ShelfContainer key={title}>
              <ZoomImage isOpen={open} onClose={() => zoomOut(idx)}>
                <ShelfWrapper className="zoomed">
                  <div>
                    <button onClick={() => zoomOut(idx)}>Back</button>
                    <h1>{title}</h1>
                    {content}
                  </div>
                  <img src={imgSrc} width={900} />
                </ShelfWrapper>
              </ZoomImage>

              <DisappearOnZoom className={fadeClass}>
                <ShelfWrapper className="shelf-wrapper">
                  <Img onClick={() => zoomIn(idx)} role="img" src={imgSrc} />
                  <h1>{title}</h1>
                </ShelfWrapper>
              </DisappearOnZoom>
            </ShelfContainer>
          );
        })}
      </div>

      {/* <div>imc3-components</div>
      <div>axon dispatch</div>
      <div>netflix clone</div>
      <div>airbnb clone</div> */}
    </Section>
  );
};

export default Shelf;
