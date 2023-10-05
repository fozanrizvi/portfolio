import styled from "styled-components";

export const SubmitButton = styled.button`
  background-color: #00bbf0;
  padding: 8px 15px;
  border-radius: 2px;
  border: none;
  color: white;

  &: hover {
    background-color: #1ca2bb;
  }

  &: active {
    background-color: #1ca2bb;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
    transform: translateY(2px);
  }
`;
