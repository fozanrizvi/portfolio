import styled from "styled-components";

export const Banner = styled.img`
  width: 500px;
  height: 500px;

  &: hover {
    transform: translateY(-7px);
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
`;
