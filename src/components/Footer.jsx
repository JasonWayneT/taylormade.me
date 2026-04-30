export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 py-12 border-t border-border-subtle bg-background">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-text-secondary font-inter">
          © {currentYear} Jason Taylor. Currently exploring product, platform, and applied AI systems.
        </div>
        <div className="flex items-center gap-6 text-sm font-medium font-inter">
          <a className="text-text-secondary hover:text-text-primary transition-colors text-decoration-none" href="https://www.linkedin.com/in/jasonwaynetaylor/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-text-secondary hover:text-text-primary transition-colors text-decoration-none" href="https://github.com/JasonWayneT" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-text-secondary hover:text-text-primary transition-colors text-decoration-none" href="/work-history">Work History</a>
          <a className="text-text-secondary hover:text-text-primary transition-colors text-decoration-none" href="/resume">Resume</a>
          <a className="text-text-secondary hover:text-text-primary transition-colors text-decoration-none" href="mailto:Jason.Wayne.T@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
