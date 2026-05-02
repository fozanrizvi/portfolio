import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "JD Matcher", href: "#skill-matcher" },
    { label: "Contact", href: "#contactMe" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Fozan_Rizvi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent hover:opacity-80 smooth-transition"
          >
            FR
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-text-primary hover:text-accent-1 smooth-transition text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="px-4 py-2 bg-gradient-to-r from-accent-1 to-accent-2 text-primary rounded-lg font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-accent-1/50 smooth-transition"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-text-primary hover:text-accent-1 smooth-transition text-sm"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleResumeDownload}
              className="w-full px-4 py-2 bg-gradient-to-r from-accent-1 to-accent-2 text-primary rounded-lg font-semibold text-sm hover:opacity-90 hover:shadow-lg hover:shadow-accent-1/50 smooth-transition"
            >
              Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
