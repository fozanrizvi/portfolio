const GithubRepos = () => {
  const repositories = [
    {
      name: "RAG System",
      description: "AI-powered Retrieval-Augmented Generation system for semantic search and intelligent question answering on custom knowledge bases with vector embeddings",
      language: "Python",
      link: "https://github.com/fozanrizvi/rag-system",
      stars: 12,
      topics: ["AI", "RAG", "Python", "LLM"],
    },
    {
      name: "Portfolio",
      description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing projects and technical expertise with smooth animations",
      language: "TypeScript",
      link: "https://github.com/fozanrizvi/portfolio",
      stars: 8,
      topics: ["React", "TypeScript", "Tailwind"],
    },
    {
      name: "Employee API",
      description: "RESTful API backend built with ASP.NET Core and C# demonstrating full CRUD operations, database integration, and API best practices",
      language: "C#",
      link: "https://github.com/fozanrizvi/employee-api",
      stars: 6,
      topics: [".NET", "C#", "API"],
    },
    {
      name: "LinkedIn Clone",
      description: "Full-stack social networking application clone built with JavaScript, featuring user profiles, feed, messaging, and real-time interactions",
      language: "JavaScript",
      link: "https://github.com/fozanrizvi/linkedin-clone",
      stars: 24,
      topics: ["React", "Firebase", "Full-Stack"],
    },
    {
      name: "React Pizza Builder",
      description: "Interactive React application for building custom pizzas with dynamic pricing, ingredient selection, and order management with state handling",
      language: "JavaScript",
      link: "https://github.com/fozanrizvi/react-pizza-builder",
      stars: 9,
      topics: ["React", "JavaScript", "UI"],
    },
    {
      name: "Good Reads",
      description: "Book search and discovery application built with TypeScript and React, integrating with book APIs to provide comprehensive search and filtering capabilities",
      language: "TypeScript",
      link: "https://github.com/fozanrizvi/good-reads",
      stars: 11,
      topics: ["React", "TypeScript", "API"],
    },
  ];

  const languageColors: { [key: string]: string } = {
    "TypeScript": "from-blue-500 to-cyan-500",
    "Python": "from-yellow-500 to-orange-500",
    "JavaScript": "from-yellow-400 to-amber-500",
    "C#": "from-purple-500 to-pink-500",
  };

  return (
    <section id="github" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-1 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-2 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Code Portfolio
          </h2>
          <p className="section-description">
            Explore my GitHub repositories and see the code behind my projects. Technical recruiters, dive into the implementation details and architecture decisions.
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <a
              key={index}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="group relative h-full"
            >
              <div className="h-full p-6 bg-secondary/30 border border-border rounded-lg hover:border-accent-1 hover:bg-secondary/50 smooth-transition overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-1/0 to-accent-2/0 group-hover:from-accent-1/10 group-hover:to-accent-2/10 smooth-transition"></div>

                <div className="relative z-10">
                  {/* Header with title and stars */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-1 smooth-transition flex-1">
                      {repo.name}
                    </h3>
                    <div className="flex items-center gap-1 px-3 py-1 bg-accent-2/20 rounded-full ml-2 flex-shrink-0">
                      <span className="text-accent-2">⭐</span>
                      <span className="text-sm font-semibold text-accent-2">{repo.stars}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-3">
                    {repo.description}
                  </p>

                  {/* Language badge */}
                  <div className="mb-4">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${languageColors[repo.language] || "from-accent-1 to-accent-2"} rounded-full`}>
                      <span className="text-xs font-bold text-white">{repo.language}</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.map((topic, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-border rounded text-text-secondary group-hover:text-accent-1 smooth-transition">
                        #{topic}
                      </span>
                    ))}
                  </div>

                  {/* Link indicator */}
                  <div className="flex items-center gap-2 text-accent-1 font-semibold text-sm group-hover:gap-3 smooth-transition">
                    <span>View Repository</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 smooth-transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-1/0 via-accent-2/0 to-accent-1/0 opacity-0 group-hover:opacity-20 smooth-transition blur"></div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/fozanrizvi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-1 to-accent-2 hover:from-accent-1/80 hover:to-accent-2/80 text-white font-bold rounded-lg shadow-lg shadow-accent-1/50 hover:shadow-xl hover:shadow-accent-1/60 smooth-transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            View All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubRepos;
