import { ReactNode, useState } from "react";
import { Section } from "../shared/Section.styled";
import { Hobby } from "./Hobbies.styled";

import skydive from "../../assets/images/hobbies/skydive.png";
import read from "../../assets/images/hobbies/read.png";
import write from "../../assets/images/hobbies/write.png";
import { Text } from "../shared/Text.styled";

interface Data {
  title: string;
  imgSrc: any;
  content: ReactNode;
}

const Hobbies = () => {
  const [hobby, setHobby] = useState<Data[]>([
    {
      title: "Skydiving",
      imgSrc: skydive,
      content:
        "I am an A-licensed skydiver and love to explore the sky and doing maneuvers in it.",
    },
    {
      title: "Reading",
      imgSrc: read,
      content: "I enjoy reading about business, psychology and history.",
    },
    {
      title: "Writing",
      imgSrc: write,
      content: "I like to write about stuff related to tech and development.",
    },
  ]);

  return (
    <Section id="hobbies">
      <h1>Hobbies</h1>
      <Hobby>
        {hobby.map(({ title, imgSrc, content }) => {
          return (
            <div>
              <h2>{title}</h2>
              <img src={imgSrc} width={500} />
              <Text>{content}</Text>
            </div>
          );
        })}
      </Hobby>
    </Section>
  );
};

export default Hobbies;
