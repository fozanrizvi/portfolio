import { useState } from "react";

// Remove image imports as they're no longer needed
const Projects = () => {
  const [activeTab, setActiveTab] = useState<{ [key: number]: string }>({
    0: "challenge",
    1: "challenge",
    2: "challenge",
    3: "challenge",
    4: "challenge",
    5: "challenge",
  });

  const projects = [
    {
      title: "Workflow Orchestration Engine",
      tabs: {
        challenge: "Build a production-grade workflow orchestration platform with visual pipeline builder, real-time monitoring, and scalable execution",
        solution: "React/TypeScript frontend with drag-and-drop canvas, ASP.NET Core backend with job queuing, distributed execution engine, real-time WebSocket updates",
        techStack: ["React", "TypeScript", "ASP.NET Core", "SQL Server", "WebSockets", "Redis"],
      },
      architecture: `
┌─────────────────────────────────────────┐
│    React UI (Canvas Editor)              │
│    - Drag & Drop Pipeline Builder        │
│    - Real-time Status Updates            │
└──────────────┬──────────────────────────┘
               │ WebSocket
┌──────────────▼──────────────────────────┐
│    ASP.NET Core API Gateway              │
│    - Pipeline Validation                 │
│    - Job Coordination                    │
└──────────────┬──────────────────────────┘
               │
    ┌──────────┼──────────┐
    │          │          │
┌───▼──┐ ┌────▼────┐ ┌──▼────┐
│Queue │ │Executor │ │Cache  │
│(RMQ) │ │Engine   │ │(Redis)│
└──────┘ └─────────┘ └───────┘
      `
    },
    {
      title: "AI Document Search (RAG)",
      tabs: {
        challenge: "Build semantic search over documents using AI embeddings with reliable question-answering and citation tracking",
        solution: "Python FastAPI backend with LangChain, OpenAI embeddings, vector database integration, React frontend with search UI and conversation history",
        techStack: ["Python", "FastAPI", "LangChain", "OpenAI", "Vector DB", "React"],
      },
      architecture: `
┌──────────────────────────────┐
│    React UI                  │
│    - Search Interface        │
│    - Chat History            │
└──────────────┬───────────────┘
               │ REST API
┌──────────────▼───────────────┐
│    FastAPI Backend           │
│    - LangChain Orchestration │
│    - Context Management      │
└──────────────┬───────────────┘
               │
    ┌──────────┼──────────┐
    │          │          │
┌───▼──────┐ ┌▼──────┐ ┌─▼─────┐
│OpenAI    │ │Vector │ │Doc    │
│Embeddings│ │Store  │ │Index  │
└──────────┘ └───────┘ └───────┘
      `
    },
    {
      title: "Micro-Frontend Dashboard",
      tabs: {
        challenge: "Build scalable dashboard with independent micro-frontends that can be deployed separately with module federation",
        solution: "Webpack module federation, independent React app shells, shared component library, Redux for cross-app state, isolated deployment pipelines",
        techStack: ["React", "Webpack 5", "Module Federation", "Redux", "TypeScript"],
      },
      architecture: `
┌────────────────────────────────────┐
│    Host Application (Dashboard)    │
│    - Shell / Container             │
│    - Shared State (Redux)          │
└────────────────────────────────────┘
  │          │          │          │
  ▼          ▼          ▼          ▼
┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
│Analytics│ │Users │ │Reports│ │Config│
│MFE   │  │MFE   │  │MFE   │  │MFE   │
│(Indep)  │ │(Indep)  │ │(Indep)  │ │(Indep) │
└──────┘  └──────┘  └──────┘  └──────┘
      `
    },
    {
      title: "Design System & Component Library",
      tabs: {
        challenge: "Build and maintain reusable component library with 50+ components, TypeScript support, and documentation using Storybook",
        solution: "React components with strict TypeScript, Storybook documentation, Jest unit tests, automated visual regression testing, npm package distribution",
        techStack: ["React", "TypeScript", "Storybook", "Testing Library", "npm"],
      },
      architecture: `
┌──────────────────────────┐
│   Storybook Docs         │
│   - Component Showcase   │
│   - Props Documentation  │
└──────────────┬───────────┘
               │
┌──────────────▼───────────┐
│   Component Library      │
│   - UI Components (50+)  │
│   - Utility Hooks        │
└──────────────┬───────────┘
               │
┌──────────────▼───────────┐
│   Testing Suite          │
│   - Jest Tests           │
│   - Chromatic Tests      │
└──────────────────────────┘
      `
    },
    {
      title: "Real-Time Marketplace (Event-Driven)",
      tabs: {
        challenge: "Build event-driven marketplace with real-time availability updates, messaging, and payment processing at scale",
        solution: "React frontend with WebSockets/SignalR, ASP.NET Core event bus, message queues, payment gateway integration, Redis caching for performance",
        techStack: ["React", "ASP.NET Core", "SignalR", "Message Queue", "Redis", "Stripe"],
      },
      architecture: `
┌──────────────────────────────┐
│    React Marketplace UI      │
│    - Real-time Updates       │
│    - Live Notifications      │
└──────────────┬───────────────┘
               │ SignalR
┌──────────────▼───────────────┐
│    ASP.NET Core Event Bus    │
│    - Event Processing        │
└──────────────┬───────────────┘
       ┌───────┼───────┐
       │       │       │
    ┌──▼──┐ ┌─▼──┐ ┌──▼───┐
    │MQ   │ │Cache│ │Payment│
    │(RMQ)│ │(Redis)│ │(Stripe)│
    └─────┘ └────┘ └──────┘
      `
    },
    {
      title: "Production API Gateway & Auth",
      tabs: {
        challenge: "Build API gateway with authentication, rate limiting, request routing, and observability for multiple backend services",
        solution: "ASP.NET Core gateway with JWT auth, policy-based routing, rate limiting middleware, distributed tracing, centralized logging and monitoring",
        techStack: ["ASP.NET Core", "JWT", "Ocelot", "Serilog", "Application Insights"],
      },
      architecture: `
┌────────────────────────────────┐
│    Client Requests              │
└────────────────┬────────────────┘
                 │
┌────────────────▼────────────────┐
│    API Gateway (Ocelot)         │
│    - Authentication (JWT)       │
│    - Rate Limiting              │
│    - Request Routing            │
└────────────────┬────────────────┘
    ┌────────────┼────────────┐
    │            │            │
┌───▼────┐  ┌───▼────┐  ┌───▼────┐
│Service │  │Service │  │Service │
│A       │  │B       │  │C       │
└────────┘  └────────┘  └────────┘
      `
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-3 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured Work
          </h2>
          <p className="section-description">
            Production systems spanning frontend, backend, and cloud infrastructure at scale
          </p>
          <div className="section-divider"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-secondary/30 border border-border rounded-xl overflow-hidden hover:border-accent-1 hover:bg-secondary/40 smooth-transition"
            >
              {/* Project Header */}
              <div className="p-6 bg-gradient-to-r from-accent-1/10 to-accent-2/10">
                <h3 className="text-2xl font-bold text-accent-1">{project.title}</h3>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-border">
                {["challenge", "solution", "techStack", "architecture"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab({ ...activeTab, [index]: tab })}
                    className={`flex-1 px-4 py-3 font-semibold text-sm smooth-transition capitalize ${
                      activeTab[index] === tab
                        ? "text-accent-1 border-b-2 border-accent-1 -mb-1"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {tab === "techStack" ? "Tech Stack" : tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 space-y-4">
                {activeTab[index] === "challenge" && (
                  <div>
                    <h4 className="text-lg font-bold text-accent-1 mb-3">Challenge</h4>
                    <p className="text-text-secondary leading-relaxed">{project.tabs.challenge}</p>
                  </div>
                )}

                {activeTab[index] === "solution" && (
                  <div>
                    <h4 className="text-lg font-bold text-accent-2 mb-3">Solution</h4>
                    <p className="text-text-secondary leading-relaxed">{project.tabs.solution}</p>
                  </div>
                )}

                {activeTab[index] === "techStack" && (
                  <div>
                    <h4 className="text-lg font-bold text-accent-1 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tabs.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gradient-to-r from-accent-1 to-accent-2 text-white text-sm font-semibold rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab[index] === "architecture" && (
                  <div>
                    <h4 className="text-lg font-bold text-accent-2 mb-3">Architecture</h4>
                    <pre className="bg-primary/50 p-4 rounded-lg overflow-x-auto border border-border text-text-secondary text-xs font-mono leading-relaxed">
                      {project.architecture}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
