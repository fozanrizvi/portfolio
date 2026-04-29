import styled from "styled-components";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 50%,
      rgba(0, 212, 255, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 0, 110, 0.1) 0%,
      transparent 50%
    );
    animation: backgroundShift 8s ease-in-out infinite;
  }

  @keyframes backgroundShift {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  z-index: 2;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent-1);
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.4),
              inset 0 0 30px rgba(0, 212, 255, 0.2);
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const NameTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 2px;
  animation: slideInDown 0.8s ease;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const RoleSubtitle = styled.div`
  font-size: 1.8rem;
  color: var(--accent-1);
  font-weight: 500;
  letter-spacing: 1px;
  animation: slideInUp 0.8s ease 0.2s both;
  position: relative;
  display: inline-block;

  &::before {
    content: "< ";
    margin-right: 10px;
    animation: blink 1s infinite;
  }

  &::after {
    content: " />";
    margin-left: 10px;
    animation: blink 1s infinite 0.5s;
  }

  @keyframes blink {
    0%, 49%, 100% {
      opacity: 1;
    }
    50%, 99% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  max-width: 700px;
  color: var(--text-secondary);
  animation: slideInUp 0.8s ease 0.4s both;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: slideInUp 0.8s ease 0.6s both;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const HeroButton = styled.a`
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid;
  text-decoration: none;
  display: inline-block;

  &.primary {
    background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
    color: var(--primary);
    border-color: transparent;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);

    &:hover {
      box-shadow: 0 0 40px rgba(0, 212, 255, 0.6);
      transform: translateY(-3px);
    }
  }

  &.secondary {
    background: transparent;
    color: var(--accent-1);
    border-color: var(--accent-1);

    &:hover {
      background: rgba(0, 212, 255, 0.1);
      box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
      transform: translateY(-3px);
    }
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  z-index: 3;

  @keyframes bounce {
    0%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(-10px);
    }
  }

  svg {
    width: 30px;
    height: 30px;
    stroke: var(--accent-1);
    fill: none;
    stroke-width: 2;
  }
`;

export const TechStack = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  animation: slideInUp 0.8s ease 0.8s both;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const TechBadge = styled.div`
  padding: 0.75rem 1.5rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 25px;
  font-size: 0.9rem;
  color: var(--accent-1);
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
    border-color: var(--accent-1);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`;
