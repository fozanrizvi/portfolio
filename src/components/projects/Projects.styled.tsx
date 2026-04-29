import styled from "styled-components";

export const ProjectsSection = styled.section`
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
    background: radial-gradient(circle at 80% 20%, rgba(255, 0, 110, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const ProjectsContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  z-index: 2;
  position: relative;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Declare these first before using them in ProjectCard
export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 14, 39, 0.9);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
`;

export const ProjectCard = styled.div`
  background: rgba(26, 31, 58, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  cursor: pointer;
  height: 450px;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    border-color: var(--accent-1);
    box-shadow: 0 0 40px rgba(0, 212, 255, 0.3),
                inset 0 0 30px rgba(0, 212, 255, 0.05);
    transform: translateY(-15px);

    &::before {
      opacity: 1;
    }

    ${ProjectImage} {
      transform: scale(1.1);
      filter: brightness(1.1);
    }

    ${ProjectOverlay} {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--accent-1);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ProjectContent = styled.div`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;

  h3 {
    font-size: 1.1rem;
    color: var(--accent-2);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;

    &:first-of-type {
      margin-top: 0;
    }
  }

  p {
    color: var(--text-secondary);
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }
`;

export const ProjectTech = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const TechTag = styled.span`
  padding: 0.4rem 0.8rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--accent-1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
    border-color: var(--accent-1);
  }
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
  color: var(--primary);
  border: none;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);

  &:hover {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
    transform: translateY(-2px);
  }
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
    animation: slideIn 0.8s ease;
  }

  @keyframes slideIn {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 60%;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionDescription = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 1rem;
`;
