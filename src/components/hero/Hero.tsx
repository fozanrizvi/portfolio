import Fozan from "../../assets/images/Fozan.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent-3 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-1 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <img
            src={Fozan}
            alt="Fozan Rizvi"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto border-2 border-accent-1 shadow-2xl shadow-accent-1/50 hover:shadow-accent-1/100 smooth-transition"
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 glow-text">
          Fozan Rizvi
        </h1>

        {/* Role */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-accent-2 mb-6">
          Full Stack Developer
        </h2>

        {/* Description */}
        <p className="text-text-secondary text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          8+ years building scalable web applications with React & TypeScript. Passionate about
          full-stack development, AI integration, and shipping production-grade systems that users love.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["React", "TypeScript", "Next.js", "ASP.NET Core", "AI/RAG", "Azure"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-accent-1/10 border border-accent-1/30 text-accent-1 rounded-full text-sm font-medium hover:bg-accent-1/20 smooth-transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-accent-1 to-accent-2 text-primary rounded-lg font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-accent-1/50 smooth-transition"
          >
            View My Work
          </a>
          <a
            href="#contactMe"
            className="px-8 py-3 border-2 border-accent-1 text-accent-1 rounded-lg font-semibold hover:bg-accent-1/10 hover:shadow-lg hover:shadow-accent-1/30 smooth-transition"
          >
            Get In Touch
          </a>
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Fozan_Rizvi_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="px-8 py-3 border-2 border-accent-2 text-accent-2 rounded-lg font-semibold hover:bg-accent-2/10 hover:shadow-lg hover:shadow-accent-2/30 smooth-transition"
          >
            ↓ Download Resume
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce pt-8">
          <svg
            className="w-6 h-6 mx-auto text-accent-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14M5 12l7 7 7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
