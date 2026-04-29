import { MouseEvent } from "react";
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  FooterBrand,
  DividerLine,
  FooterBottom,
  Copyright,
  SocialLinks,
  SocialLink,
  BackToTop,
} from "./Footer.styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterBrand>
            <h3>FR</h3>
            <p>
              Full-stack developer crafting innovative digital solutions. Let's build something extraordinary together.
            </p>
          </FooterBrand>

          <FooterSection>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Resources</h4>
            <ul>
              <li><a href="#" target="_blank" rel="noreferrer">Resume</a></li>
              <li><a href="https://github.com/fozanrizvi" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="#contactMe">Contact</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:fozanrizvi@gmail.com">Email</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://github.com/fozanrizvi" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </FooterSection>
        </FooterGrid>

        <DividerLine />

        <FooterBottom>
          <Copyright>
            © {currentYear} Fozan Rizvi. All rights reserved.
          </Copyright>

          <SocialLinks>
            <SocialLink href="https://github.com/fozanrizvi" target="_blank" rel="noreferrer" title="GitHub">
              ⭐
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn">
              💼
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter">
              ✈️
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">
              📷
            </SocialLink>
          </SocialLinks>

          <BackToTop href="#" onClick={handleBackToTop}>
            ↑ Back to Top
          </BackToTop>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
