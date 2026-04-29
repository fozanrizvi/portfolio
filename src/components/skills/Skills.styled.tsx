import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
`;

interface SkillBarProps {
  percentage?: string;
  delay?: string;
}

export const SkillsSection = styled.section`
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
    background: radial-gradient(circle at 30% 70%, rgba(18, 247, 214, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const SkillsContainer = styled.div`
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

export const SkillsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const SkillsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SkillCategory = styled.div`
  h3 {
    font-size: 1.5rem;
    color: var(--accent-1);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SkillName = styled.span`
  min-width: 100px;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
`;

export const SkillBar = styled.div<SkillBarProps>`
  flex: 1;
  height: 8px;
  background: rgba(0, 212, 255, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(0, 212, 255, 0.2);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, var(--accent-1) 0%, var(--accent-2) 100%);
    border-radius: 10px;
    width: ${props => props.percentage || "0%"};
    animation: ${slideIn} 1s ease-out forwards;
    animation-delay: ${props => props.delay || "0s"};
  }
`;

export const SkillPercentage = styled.span`
  min-width: 40px;
  text-align: right;
  color: var(--accent-1);
  font-weight: 600;
  font-size: 0.9rem;
`;

export const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

export const TechIcon = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: rgba(26, 31, 58, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  span {
    font-size: 0.85rem;
    color: var(--text-secondary);
    text-align: center;
    font-weight: 500;
  }

  &:hover {
    border-color: var(--accent-1);
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.2);
    transform: translateY(-10px);

    img {
      filter: brightness(1.2);
    }

    span {
      color: var(--accent-1);
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    img {
      width: 40px;
      height: 40px;
    }

    span {
      font-size: 0.75rem;
    }
  }
`;

export const SkillsStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(26, 31, 58, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-1);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  }

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .label {
    color: var(--text-secondary);
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  padding: 10px 60px 30px 20px;
`;
