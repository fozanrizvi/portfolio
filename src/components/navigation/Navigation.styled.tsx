import styled from "styled-components";

interface NavMenuProps {
  isOpen?: boolean;
}

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 14, 39, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  padding: 1rem 2rem;
`;

export const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 2px;

  &:hover {
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  }
`;

export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  list-style: none;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? "flex" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(10, 14, 39, 0.95);
    backdrop-filter: blur(10px);
    padding: 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  }
`;

export const NavItem = styled.li`
  transition: all 0.3s ease;

  a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    position: relative;
    padding-bottom: 0.5rem;
    transition: all 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--accent-1);

      &::after {
        width: 100%;
      }
    }
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--accent-1);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-2);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ThemeToggle = styled.button`
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: var(--accent-1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: rgba(0, 212, 255, 0.2);
    border-color: var(--accent-1);
    box-shadow: 0 0 15px rgba(0, 212, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;
