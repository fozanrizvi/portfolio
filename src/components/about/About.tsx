import {
  AboutSection,
  AboutContainer,
  SectionTitle,
  AboutContent,
  AboutText,
  ExperienceGrid,
  ExperienceCard,
  ValueProposition,
  ValueCard,
} from "./About.styled";

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>

        <AboutContent>
          <AboutText>
            <p>
              I'm a full stack engineer with 8+ years of experience building production-grade 
              web applications for startups and enterprises. I specialize in JavaScript/TypeScript, Python, 
              and have deep expertise in AI integration, RAG systems, and working with LLMs at scale.
            </p>
            <p>
              I'm comfortable across the entire stack: Next.js and React on the frontend, ASP.NET Core, 
              Node.js, and Python/FastAPI on the backend, SQL databases, and cloud platforms like Azure and AWS. 
              I've built RAG systems, prompt engineering solutions, and integrated LLMs into production applications 
              with proper error handling and observability.
            </p>
            <p>
              What drives me is taking ownership of projects end-to-end—from requirements through 
              deployment. I enjoy solving complex technical challenges, mentoring engineers, and building 
              systems that scale reliably.
            </p>
          </AboutText>

          <div>
            <ExperienceGrid>
              <ExperienceCard>
                <h4>Senior Full Stack Engineer</h4>
                <div className="role">Golub Capital • Nov 2023 - Present</div>
                <p className="description">
                  Own Vantage platform serving 3000+ users, built RAG system for internal Copilot, 
                  manage full CI/CD pipeline and production observability
                </p>
              </ExperienceCard>
              <ExperienceCard>
                <h4>Frontend Developer</h4>
                <div className="role">Experian • Mar 2021 - Sep 2023</div>
                <p className="description">
                  High-traffic SPA serving millions of clients, micro-frontend architecture, 
                  component library leadership, React Native mobile apps
                </p>
              </ExperienceCard>
              <ExperienceCard>
                <h4>Frontend Developer</h4>
                <div className="role">Multiple Companies • 2018 - 2021</div>
                <p className="description">
                  Mission-critical applications at Axon, Angular-to-React migration at Wells Fargo, 
                  responsive web development at Agilon Health
                </p>
              </ExperienceCard>
            </ExperienceGrid>
          </div>
        </AboutContent>

        <ValueProposition>
          <ValueCard>
            <div className="icon">⚡</div>
            <h4>Production Focus</h4>
            <p>
              I don't just build features—I ensure they work reliably at scale with proper observability 
              and monitoring in place
            </p>
          </ValueCard>
          <ValueCard>
            <div className="icon">🎯</div>
            <h4>Full Stack Ownership</h4>
            <p>
              From frontend UI to backend APIs to cloud infrastructure, I understand the entire system 
              and optimize across all layers
            </p>
          </ValueCard>
          <ValueCard>
            <div className="icon">🚀</div>
            <h4>AI Integration</h4>
            <p>
              Experience building RAG systems, prompt engineering, and integrating LLMs into production 
              applications with proper error handling
            </p>
          </ValueCard>
        </ValueProposition>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
