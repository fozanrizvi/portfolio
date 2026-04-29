import {
  HeroSection,
  HeroContent,
  ProfileImage,
  NameTitle,
  RoleSubtitle,
  HeroDescription,
  CTAButtons,
  HeroButton,
  ScrollIndicator,
  TechStack,
  TechBadge,
} from "./Hero.styled";
import Fozan from "../../assets/images/Fozan.png";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <ProfileImage src={Fozan} alt="Fozan Rizvi" />
        <NameTitle>Fozan Rizvi</NameTitle>
        <RoleSubtitle>Full Stack Developer</RoleSubtitle>
        <HeroDescription>
          8+ years building scalable web applications with React & TypeScript. Passionate about 
          full-stack development, AI integration, and shipping production-grade systems that users love.
        </HeroDescription>
        
        <TechStack>
          <TechBadge>React</TechBadge>
          <TechBadge>TypeScript</TechBadge>
          <TechBadge>Next.js</TechBadge>
          <TechBadge>ASP.NET Core</TechBadge>
          <TechBadge>AI/RAG</TechBadge>
          <TechBadge>Azure</TechBadge>
        </TechStack>

        <CTAButtons>
          <HeroButton href="#projects" className="primary">
            View My Work
          </HeroButton>
          <HeroButton href="#contactMe" className="secondary">
            Get In Touch
          </HeroButton>
        </CTAButtons>

        <ScrollIndicator>
          <svg viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </ScrollIndicator>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
