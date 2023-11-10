import styled, { keyframes } from "styled-components";

const slideRightOut = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(50%);
    }
`;

const slideLeftIn = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0); /* Move from right to left */
        opacity: 1;
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1; /* Fade in */
    }   
`;

export const Zoom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  transform: translateX(-100%) scale(0.5);
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  background: rgba(0, 0, 0, 0.5);
  &.open {
    opacity: 1;
    transform: translateX(0) scale(1);
    visibility: visible;
  }
  & .zoom-content {
    width: 100%;
  }
`;

export const DisappearOnZoom = styled.div`
  &.fadeOut {
    opacity: 0;
    animation: ${slideRightOut} 0.3s ease-in-out, ${fadeIn} 0.3s ease-in-out;
  }
  &.fadeIn {
    opacity: 1;
    animation: ${slideLeftIn} 0.3s ease-in-out;
  }
`;
