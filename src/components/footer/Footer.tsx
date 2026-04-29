import { MouseEvent } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              FR
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Full-stack developer crafting innovative digital solutions. Let's build something extraordinary together.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-text-secondary hover:text-accent-1 smooth-transition text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-text-secondary hover:text-accent-1 smooth-transition text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-text-secondary hover:text-accent-1 smooth-transition text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-text-secondary hover:text-accent-1 smooth-transition text-sm">
                  Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/resume.pdf" download className="text-text-secondary hover:text-accent-2 smooth-transition text-sm">
                  Resume
                </a>
              </li>
              <li>
                <a href="https://github.com/fozanrizvi" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-2 smooth-transition text-sm">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-2 smooth-transition text-sm">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#contactMe" className="text-text-secondary hover:text-accent-2 smooth-transition text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:fozanrizvi@gmail.com" className="text-text-secondary hover:text-accent-1 smooth-transition text-sm">
                  Email
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-1 smooth-transition text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-1 smooth-transition text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://github.com/fozanrizvi" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-1 smooth-transition text-sm">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-text-secondary text-sm">
            © {currentYear} Fozan Rizvi. All rights reserved.
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/fozanrizvi"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="w-10 h-10 flex items-center justify-center bg-secondary/50 border border-border rounded-lg hover:border-accent-1 hover:bg-secondary/70 smooth-transition text-lg"
            >
              ⭐
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="w-10 h-10 flex items-center justify-center bg-secondary/50 border border-border rounded-lg hover:border-accent-2 hover:bg-secondary/70 smooth-transition text-lg"
            >
              💼
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
              className="w-10 h-10 flex items-center justify-center bg-secondary/50 border border-border rounded-lg hover:border-accent-1 hover:bg-secondary/70 smooth-transition text-lg"
            >
              ✈️
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="w-10 h-10 flex items-center justify-center bg-secondary/50 border border-border rounded-lg hover:border-accent-2 hover:bg-secondary/70 smooth-transition text-lg"
            >
              📷
            </a>
          </div>

          <a
            href="#"
            onClick={handleBackToTop}
            className="text-accent-1 hover:text-accent-2 smooth-transition font-semibold text-sm"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
