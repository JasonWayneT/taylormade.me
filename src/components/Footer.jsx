import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="mt-5 py-5" style={{ borderTop: '1px solid var(--color-border-subtle)', backgroundColor: 'var(--color-bg-subtle)' }}>
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between text-muted">
        <p className="mb-md-0">© {new Date().getFullYear()} AI Product Portfolio</p>
        <div className="d-flex gap-4">
          <a href="#" className="nav-link-custom"><FiGithub size={20} /></a>
          <a href="#" className="nav-link-custom"><FiLinkedin size={20} /></a>
          <a href="mailto:contact@example.com" className="nav-link-custom"><FiMail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
