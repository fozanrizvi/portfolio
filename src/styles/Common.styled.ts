import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 212, 255, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    min-height: auto;
  }
`;

export const SectionContent = styled.div`
  max-width: 1200px;
  width: 100%;
  z-index: 2;
  position: relative;
`;

export const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--accent-1) 20%,
      var(--accent-2) 50%,
      transparent 100%
    );
    animation: slideInRight 0.8s ease;
  }

  @keyframes slideInRight {
    from {
      width: 0;
    }
    to {
      width: 60%;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const GlassCard = styled.div`
  background: rgba(26, 31, 58, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(0, 212, 255, 0.1) 50%,
      transparent 100%
    );
    transform: rotate(45deg);
    animation: shimmer 3s infinite;
  }

  &:hover {
    border-color: var(--accent-1);
    box-shadow:
      0 0 30px rgba(0, 212, 255, 0.3),
      inset 0 0 30px rgba(0, 212, 255, 0.1);
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(
    135deg,
    var(--accent-1) 0%,
    var(--accent-2) 50%,
    var(--accent-3) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
`;

export const Button = styled.button`
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
  color: var(--primary);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover {
    box-shadow:
      0 0 30px rgba(0, 212, 255, 0.6),
      0 0 60px rgba(18, 247, 214, 0.4);
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;
