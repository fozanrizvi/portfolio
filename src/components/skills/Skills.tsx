import {
  SkillsSection,
  SkillsContainer,
  SectionTitle,
  SkillsContent,
  SkillsColumn,
  SkillCategory,
  SkillItem,
  SkillName,
  SkillBar,
  SkillPercentage,
  TechStackGrid,
  TechIcon,
  SkillsStats,
  StatCard,
} from "./Skills.styled";

// Import tech stack icons
import html5 from "../../assets/images/icons/html5.svg";
import css3 from "../../assets/images/icons/css3.svg";
import js from "../../assets/images/icons/js.svg";
import sass from "../../assets/images/icons/sass.svg";
import react from "../../assets/images/icons/react.svg";
import nodejs from "../../assets/images/icons/nodejs.svg";
import aws from "../../assets/images/icons/aws.svg";
import ts from "../../assets/images/icons/ts.svg";
import figma from "../../assets/images/icons/figma.svg";

const Skills = () => {
  const technicalSkills = [
    { name: "React & TypeScript", percentage: "98%", delay: "0.1s" },
    { name: "Next.js", percentage: "90%", delay: "0.2s" },
    { name: "ASP.NET Core (.NET)", percentage: "90%", delay: "0.3s" },
    { name: "Python & FastAPI", percentage: "85%", delay: "0.4s" },
  ];

  const designSkills = [
    { name: "Tailwind CSS", percentage: "95%", delay: "0.1s" },
    { name: "SQL Server & Azure SQL", percentage: "90%", delay: "0.2s" },
    { name: "Azure & AWS", percentage: "88%", delay: "0.3s" },
    { name: "CI/CD & DevOps", percentage: "90%", delay: "0.4s" },
  ];

  const techStack = [
    { icon: react, name: "React", link: "https://reactjs.org/" },
    { icon: ts, name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { icon: js, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: nodejs, name: "Node.js", link: "https://nodejs.org" },
    { icon: html5, name: "HTML5", link: "https://www.w3schools.com/html/" },
    { icon: css3, name: "CSS3", link: "https://www.w3schools.com/css/" },
    { icon: sass, name: "Sass", link: "https://sass-lang.com" },
    { icon: figma, name: "Figma", link: "https://www.figma.com/" },
    { icon: aws, name: "AWS", link: "https://aws.amazon.com" },
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>Technical Expertise</SectionTitle>

        <SkillsContent>
          <SkillsColumn>
            <SkillCategory>
              <h3>Core Languages & Frameworks</h3>
              {technicalSkills.map((skill, index) => (
                <SkillItem key={index}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillBar percentage={skill.percentage} delay={skill.delay} />
                  <SkillPercentage>{skill.percentage}</SkillPercentage>
                </SkillItem>
              ))}
            </SkillCategory>
          </SkillsColumn>

          <SkillsColumn>
            <SkillCategory>
              <h3>Databases, Cloud & DevOps</h3>
              {designSkills.map((skill, index) => (
                <SkillItem key={index}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillBar percentage={skill.percentage} delay={skill.delay} />
                  <SkillPercentage>{skill.percentage}</SkillPercentage>
                </SkillItem>
              ))}
            </SkillCategory>
          </SkillsColumn>
        </SkillsContent>

        <TechStackGrid>
          {techStack.map((tech, index) => (
            <TechIcon
              key={index}
              href={tech.link}
              target="_blank"
              rel="noreferrer"
              title={tech.name}
            >
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </TechIcon>
          ))}
        </TechStackGrid>

        <SkillsStats>
          <StatCard>
            <div className="number">8+</div>
            <div className="label">Years Experience</div>
          </StatCard>
          <StatCard>
            <div className="number">15+</div>
            <div className="label">Technologies</div>
          </StatCard>
          <StatCard>
            <div className="number">3000+</div>
            <div className="label">Users Supported</div>
          </StatCard>
        </SkillsStats>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
