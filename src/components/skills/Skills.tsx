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
import python from "../../assets/images/icons/python.svg";
import netcore from "../../assets/images/icons/netcore.svg";
import tailwindcss from "../../assets/images/icons/tailwindcss.svg";
import azuresql from "../../assets/images/icons/azuresql.svg";
import cpp from "../../assets/images/icons/c++.svg";
import fastapi from "../../assets/images/icons/fastapi.svg";
import azure from "../../assets/images/icons/azure.svg";
import docker from "../../assets/images/icons/dock.svg";
import kubernetes from "../../assets/images/icons/kub.svg";

const Skills = () => {
  const technicalSkills = [
    { name: "React & TypeScript", percentage: 98 },
    { name: "Next.js", percentage: 90 },
    { name: "ASP.NET Core (.NET)", percentage: 90 },
    { name: "Python & FastAPI", percentage: 85 },
  ];

  const designSkills = [
    { name: "Tailwind CSS", percentage: 95 },
    { name: "SQL Server & Azure SQL", percentage: 90 },
    { name: "Azure & AWS", percentage: 88 },
    { name: "CI/CD & DevOps", percentage: 90 },
  ];

  const techStack = [
    // Frontend Core
    { icon: react, name: "React", link: "https://reactjs.org/" },
    { icon: ts, name: "TypeScript", link: "https://www.typescriptlang.org/" },
    { icon: js, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    
    // Frontend Markup & Styling
    { icon: html5, name: "HTML5", link: "https://www.w3schools.com/html/" },
    { icon: css3, name: "CSS3", link: "https://www.w3schools.com/css/" },
    { icon: tailwindcss, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { icon: sass, name: "Sass", link: "https://sass-lang.com" },
    
    // Backend Runtime & Frameworks
    { icon: nodejs, name: "Node.js", link: "https://nodejs.org" },
    { icon: netcore, name: ".NET Core", link: "https://dotnet.microsoft.com/" },
    { icon: python, name: "Python", link: "https://www.python.org/" },
    { icon: fastapi, name: "FastAPI", link: "https://fastapi.tiangolo.com/" },
    
    // Systems Programming
    { icon: cpp, name: "C++", link: "https://cplusplus.com/" },
    
    // Database
    { icon: azuresql, name: "Azure SQL", link: "https://azure.microsoft.com/en-us/products/azure-sql/" },
    
    // Cloud & DevOps
    { icon: azure, name: "Azure", link: "https://azure.microsoft.com/" },
    { icon: aws, name: "AWS", link: "https://aws.amazon.com" },
    { icon: docker, name: "Docker", link: "https://www.docker.com/" },
    { icon: kubernetes, name: "Kubernetes", link: "https://kubernetes.io/" },
    
    // Design
    { icon: figma, name: "Figma", link: "https://www.figma.com/" },
  ];

  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "18+", label: "Technologies" },
    { number: "3000+", label: "Users Supported" },
  ];

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-2 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Technical Expertise
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-accent-1 mb-8">Core Languages & Frameworks</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-primary font-semibold">{skill.name}</span>
                    <span className="text-accent-2 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-secondary/30 rounded-full overflow-hidden border border-border/50">
                    <div
                      className="h-full bg-gradient-to-r from-accent-1 to-accent-2 rounded-full smooth-transition"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div>
            <h3 className="text-2xl font-bold text-accent-2 mb-8">Databases, Cloud & DevOps</h3>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-primary font-semibold">{skill.name}</span>
                    <span className="text-accent-1 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-3 bg-secondary/30 rounded-full overflow-hidden border border-border/50">
                    <div
                      className="h-full bg-gradient-to-r from-accent-2 to-accent-1 rounded-full smooth-transition"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-text-primary">Technology Stack</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noreferrer"
                title={tech.name}
                className="flex flex-col items-center justify-center p-4 bg-secondary/20 border border-border rounded-lg hover:border-accent-1 hover:bg-secondary/40 smooth-transition group"
              >
                {tech.icon ? (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 mb-2 group-hover:scale-110 smooth-transition"
                  />
                ) : (
                  <div className="w-10 h-10 mb-2 flex items-center justify-center bg-gradient-to-r from-accent-1 to-accent-2 rounded-lg text-white font-bold text-xs group-hover:scale-110 smooth-transition">
                    {tech.name.split(' ')[0].substring(0, 2)}
                  </div>
                )}
                <span className="text-xs text-text-secondary text-center group-hover:text-accent-1 smooth-transition">
                  {tech.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-b from-secondary/40 to-secondary/20 border border-border rounded-lg hover:border-accent-1 hover:from-secondary/60 hover:to-secondary/30 hover:shadow-lg hover:shadow-accent-1/20 smooth-transition group relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-1/0 via-accent-2/5 to-accent-1/0 opacity-0 group-hover:opacity-100 smooth-transition"></div>
              
              <div className="relative z-10">
                {/* Icon/Number with glow */}
                <div className="mb-4 inline-block">
                  <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-accent-1 via-accent-2 to-accent-1 bg-clip-text text-transparent drop-shadow-lg">
                    {stat.number}
                  </div>
                </div>
                
                {/* Label with highlighting */}
                <div className="text-sm sm:text-base font-semibold text-text-primary mb-2">
                  {stat.label}
                </div>
                
                {/* Description/highlight */}
                <div className="text-xs text-accent-1 font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 smooth-transition">
                  {index === 0 && "Industry Experience"}
                  {index === 1 && "Tech Mastery"}
                  {index === 2 && "Impact Made"}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                index === 0 ? "from-accent-1 to-accent-2" 
                : index === 1 ? "from-accent-2 to-accent-1" 
                : "from-accent-1 via-accent-2 to-accent-1"
              } transform scale-x-0 group-hover:scale-x-100 smooth-transition origin-left`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
