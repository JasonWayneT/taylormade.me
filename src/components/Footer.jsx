import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 mt-20" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
      <div className="container">
        <div className="row g-10 align-items-center mb-10">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Let's build something <span className="text-gradient">remarkable</span> together.</h2>
            <p className="lead text-secondary mb-8" style={{ maxWidth: '450px' }}>
              I'm looking for high-impact opportunities to help stabilize and scale revenue-critical platforms.
            </p>
            <div className="d-flex gap-3">
              <Link to="/contact" className="btn btn-primary px-5 py-3 pill shadow-lg">Get in touch</Link>
              <a href="mailto:jason.taylor@example.com" className="btn btn-outline-primary px-5 py-3 pill">Send an email</a>
            </div>
          </div>
          <div className="col-lg-6 mt-10 mt-lg-0 text-lg-end">
             <div className="d-flex flex-column gap-3">
                <a href="#" className="h4 fw-bold nav-link-custom mb-0">LinkedIn ↗</a>
                <a href="#" className="h4 fw-bold nav-link-custom mb-0">GitHub ↗</a>
                <a href="#" className="h4 fw-bold nav-link-custom mb-0">Resume ↗</a>
             </div>
          </div>
        </div>

        <hr className="my-10" style={{ borderColor: 'var(--color-border-subtle)' }} />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 text-secondary small py-4">
          <p className="mb-0">© {currentYear} Taylor Built. Built with precision for precision systems.</p>
          <p className="mb-0">Product Management • Platform Engineering • AI Integrity</p>
        </div>
      </div>
    </footer>
  );
}
