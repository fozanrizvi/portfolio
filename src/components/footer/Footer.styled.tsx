import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: rgba(10, 14, 39, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 212, 255, 0.1);
  padding: 3rem 2rem;
  position: relative;
  z-index: 100;
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterSection = styled.div`
  h4 {
    color: var(--accent-1);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 0.95rem;

      &:hover {
        color: var(--accent-1);
        padding-left: 5px;
      }
    }
  }
`;

export const FooterBrand = styled.div`
  h3 {
    font-size: 1.8rem;
    background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

export const DividerLine = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(0, 212, 255, 0.3) 50%, transparent 100%);
  margin-bottom: 2rem;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-1);
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
    color: var(--primary);
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
  }
`;

export const BackToTop = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 6px;
  color: var(--accent-1);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
    color: var(--primary);
    border-color: transparent;
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;
