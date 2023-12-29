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
          <p>
            needed to built the UI for consistent charts and graphs for the
            credit reports
          </p>
          <h3>My role</h3>
          <p>frontend developer</p>
          <h3>Solution</h3>
          <p>
            build a huge library of reusable componets which is been used across
            the application.
          </p>
        </div>
      ),
    },
    {
      title: "axon-dispatch",
      imgSrc: axon,
      content: (
        <div>
          <h3>Challange</h3>
          <p>
            integration of api's using videos and audio recording and display
            them on the UI
          </p>
          <h3>My role</h3>
          <p>frontend developer</p>
          <h3>Solution</h3>
          <p>
            used a lot of APIs and made sure thier integration was smooth and
            effective
          </p>
        </div>
      ),
    },
    {
      title: "netflix-clone",
      imgSrc: netflix,
      content: (
        <div>
          <h3>Challange</h3>
          <p>personal project</p>
          <h3>My role</h3>
          <p>web developer</p>
          <h3>Solution</h3>
          <p>used modern technologies to built it</p>
        </div>
      ),
    },
    {
      title: "airbnb-clone",
      imgSrc: airbnb,
      content: (
        <div>
          <h3>Challange</h3>
          <p>personal project</p>
          <h3>My role</h3>
          <p>web developer</p>
          <h3>Solution</h3>
          <p>used modern technologies to built it</p>
        </div>
      ),
    },
    {
      title: "wells-fargo",
      imgSrc: wellsfargo,
      content: (
        <div>
          <h3>Challange</h3>
          <p>
            internal facing app managing data integration and consitent design
          </p>
          <h3>My role</h3>
          <p>UI developer</p>
          <h3>Solution</h3>
          <p>built and learn modern tech like react in this project</p>
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
      <h1>Projects</h1>
      <div>
        {data.map(({ title, imgSrc, content, open }, idx) => {
          const fadeClass = open ? "fadeOut" : "fadeIn";
          return (
            <ShelfContainer key={title}>
              <ZoomImage isOpen={open} onClose={() => zoomOut(idx)}>
                <ShelfWrapper className="zoomed">
                  <div>
                    <button onClick={() => zoomOut(idx)}>Back</button>
                    <h2>{title}</h2>
                    {content}
                  </div>
                  <img src={imgSrc} width={900} />
                </ShelfWrapper>
              </ZoomImage>

              <DisappearOnZoom className={fadeClass}>
                <ShelfWrapper className="shelf-wrapper">
                  <Img onClick={() => zoomIn(idx)} role="img" src={imgSrc} />
                  <h2>{title}</h2>
                </ShelfWrapper>
              </DisappearOnZoom>
            </ShelfContainer>
          );
        })}
      </div>
    </Section>
  );
};

export default Shelf;
