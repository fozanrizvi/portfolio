import {
  ProjectsSection,
  ProjectsContainer,
  SectionTitle,
  SectionDescription,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectOverlay,
  ProjectTitle,
  ProjectContent,
  ProjectLink,
} from "./Projects.styled";

// Import project images
import experian from "../../assets/images/projects/experian.png";
import axon from "../../assets/images/projects/axon.png";
import netflix from "../../assets/images/projects/netflix.png";
import airbnb from "../../assets/images/projects/airbnb.png";
import wellsfargo from "../../assets/images/projects/wellsfargo.png";

const Projects = () => {
  const projects = [
    {
      title: "Vantage Platform",
      image: experian,
      link: "https://github.com/fozanrizvi",
      content: (
        <div>
          <h3>Challenge</h3>
          <p>
            Build and maintain a Camunda-based business orchestration platform serving 3000+ internal users
          </p>
          <h3>Solution</h3>
          <p>
            Architected frontend in Next.js/React, coordinated offshore teams, owned monthly production 
            releases and full CI/CD pipeline
          </p>
        </div>
      ),
    },
    {
      title: "RAG System & Internal Copilot",
      image: axon,
      link: "https://github.com/fozanrizvi",
      content: (
        <div>
          <h3>Challenge</h3>
          <p>
            Build reliable document search and Q&A system using Azure AI Search and OpenAI for 500+ users
          </p>
          <h3>Solution</h3>
          <p>
            Built production-ready RAG system with caching, context limits, citation tracking. 
            Made AI reliable under real usage
          </p>
        </div>
      ),
    },
    {
      title: "High-Traffic SPA",
      image: netflix,
      link: "https://github.com/fozanrizvi",
      content: (
        <div>
          <h3>Challenge</h3>
          <p>
            Frontend for app serving millions of clients with strict reliability and performance requirements
          </p>
          <h3>Solution</h3>
          <p>
            React/TypeScript SPA with micro-frontend architecture, component library with 50+ components, 
            Redux state management
          </p>
        </div>
      ),
    },
    {
      title: "GC Help Portal",
      image: airbnb,
      link: "https://github.com/fozanrizvi",
      content: (
        <div>
          <h3>Challenge</h3>
          <p>
            Cross-platform troubleshooting tool for enterprise users, both web and mobile
          </p>
          <h3>Solution</h3>
          <p>
            Built web application on Azure App Services and mobile apps, owned both product and 
            engineering side in close collaboration with leadership
          </p>
        </div>
      ),
    },
    {
      title: "Angular to React Migration",
      image: wellsfargo,
      link: "https://github.com/fozanrizvi",
      content: (
        <div>
          <h3>Challenge</h3>
          <p>
            Migrate legacy Angular codebase to modern React stack while maintaining feature parity
          </p>
          <h3>Solution</h3>
          <p>
            Led migration strategy, refactored to React Hooks, added comprehensive Jest and RTL tests, 
            improved performance and maintainability
          </p>
        </div>
      ),
    },
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>Featured Work</SectionTitle>
        <SectionDescription>
          Production systems spanning frontend, backend, and cloud infrastructure at scale
        </SectionDescription>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectOverlay>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectContent>{project.content}</ProjectContent>
                <ProjectLink href={project.link} target="_blank" rel="noreferrer">
                  View on GitHub
                </ProjectLink>
              </ProjectOverlay>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
