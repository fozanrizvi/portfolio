import styled from "styled-components";

export const SocialMedia = styled.div`
  display: flex;
  height: 100px;
  width: 700px;
  margin: auto;
  justify-content: space-around;
`;

export const SocialIcon = styled.img`
  height: 70px;
  width: 100px;
  padding: 50px;

  &: hover {
    transform: translateY(-7px);
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
  }
`;
