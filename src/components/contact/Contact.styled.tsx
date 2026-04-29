import styled from "styled-components";

export const ContactSection = styled.section`
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
    background: radial-gradient(circle at 70% 30%, rgba(255, 0, 110, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const ContactContainer = styled.div`
  max-width: 1000px;
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

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InfoCard = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(26, 31, 58, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-1);
    transform: translateX(10px);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.15);
  }

  .icon {
    font-size: 1.8rem;
    min-width: 40px;
    display: flex;
    align-items: flex-start;
    color: var(--accent-1);
  }

  .content h4 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .content p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin: 0;

    a {
      color: var(--accent-1);
      transition: all 0.3s ease;

      &:hover {
        color: var(--accent-2);
      }
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.1);
  border: 2px solid rgba(0, 212, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-1);
  font-size: 1.3rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%);
    color: var(--primary);
    border-color: transparent;
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
`;

export const Input = styled.input`
  padding: 0.875rem 1rem;
  background: rgba(26, 31, 58, 0.5);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-1);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.875rem 1rem;
  background: rgba(26, 31, 58, 0.5);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-1);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.2);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem 2rem;
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

  &:hover:not(:disabled) {
    box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
`;
