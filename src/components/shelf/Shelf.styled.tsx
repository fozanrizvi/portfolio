import styled from "styled-components";

interface Props {
  src: string;
}

export const Img = styled.div<Props>`
  height: 200px;
  width: 400px;
  margin: auto 20px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  transition: all 0.5s;
  background-position: 50%;
  background-repeat: no-repeat;
  /* width: 100%;
  height: "0";
  padding-bottom: 56%; */
  overflow: hidden;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ShelfWrapper = styled.div`
  display: flex;
  width: 900px;
  margin: 20px auto;
  overflow: hidden;

  &.zoomed {
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const ShelfContainer = styled.div`
  &:nth-child(even) .shelf-wrapper {
    flex-direction: row-reverse;
  }
`;
