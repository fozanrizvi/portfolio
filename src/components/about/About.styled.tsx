import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(18, 247, 214, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 2;
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, transparent 0%, var(--accent-1) 20%, var(--accent-2) 50%, transparent 100%);
    margin: 1.5rem auto 0;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const AboutText = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.9;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const HighlightBox = styled.div`
  background: rgba(26, 31, 58, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-1);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  }

  h3 {
    color: var(--accent-1);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.1rem;
  }

  p {
    margin: 0 !important;
  }
`;

export const ExperienceGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const ExperienceCard = styled.div`
  background: rgba(26, 31, 58, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--accent-1) 0%, var(--accent-2) 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    border-color: var(--accent-1);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
    transform: translateX(10px);

    &::before {
      width: 6px;
    }
  }

  h4 {
    color: var(--accent-1);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .role {
    color: var(--accent-2);
    font-weight: 600;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
  }

  .description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

export const ValueProposition = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ValueCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(26, 31, 58, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-1);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.15);
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h4 {
    color: var(--accent-1);
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }

  p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;
