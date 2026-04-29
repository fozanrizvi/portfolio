const About = () => {
  const experiences = [
    {
      title: "Senior Full Stack Engineer",
      company: "Golub Capital • Nov 2023 - Present",
      description:
        "Own Vantage platform serving 3000+ users, built RAG system for internal Copilot, manage full CI/CD pipeline and production observability",
    },
    {
      title: "Frontend Developer",
      company: "Experian • Mar 2021 - Sep 2023",
      description:
        "High-traffic SPA serving millions of clients, micro-frontend architecture, component library leadership, React Native mobile apps",
    },
    {
      title: "Frontend Developer",
      company: "Multiple Companies • 2018 - 2021",
      description:
        "Mission-critical applications at Axon, Angular-to-React migration at Wells Fargo, responsive web development at Agilon Health",
    },
  ];

  const values = [
    {
      icon: "⚡",
      title: "Production Focus",
      description:
        "I don't just build features—I ensure they work reliably at scale with proper observability and monitoring in place",
    },
    {
      icon: "🎯",
      title: "Full Stack Ownership",
      description:
        "From frontend UI to backend APIs to cloud infrastructure, I understand the entire system and optimize across all layers",
    },
    {
      icon: "🚀",
      title: "AI Integration",
      description:
        "Experience building RAG systems, prompt engineering, and integrating LLMs into production applications with proper error handling",
    },
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-1 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            About Me
          </h2>
          <div className="section-divider"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Text */}
          <div className="lg:col-span-2 space-y-6 text-text-secondary leading-relaxed">
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
          </div>

          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-4 bg-secondary/30 border border-border backdrop-blur-xl rounded-lg hover:border-accent-1 hover:bg-secondary/50 smooth-transition"
              >
                <h4 className="text-accent-1 font-semibold mb-1">{exp.title}</h4>
                <div className="text-text-secondary text-sm mb-2">{exp.company}</div>
                <p className="text-text-secondary text-xs leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="p-8 bg-secondary/20 border border-border backdrop-blur-xl rounded-lg hover:border-accent-2 hover:bg-secondary/40 smooth-transition text-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-accent-2 font-semibold mb-3 text-lg">{value.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
