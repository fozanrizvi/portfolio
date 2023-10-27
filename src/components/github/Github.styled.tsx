import styled from "styled-components";
import back from "../../assets/images/banners/back.png";

export const Gitpro = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 30px;
`;

export const Repos = styled.div`
  background-image: url(${back});
  background-size: contain;
  border: 1px solid #eaf6f6;
  width: 32%;
  text-align: left;
  padding: 20px;
  font-size: 25px;
  height: 500px;
  overflow: scroll;
  margin: 30px;
`;
