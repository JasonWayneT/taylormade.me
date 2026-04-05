import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top-subtle mt-20" style={{ backgroundColor: 'var(--color-bg-subtle)', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="row g-12 justify-content-between align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-8">Let's build something <br /><span className="text-gradient">remarkable together.</span></h2>
            <p className="fs-5 text-secondary mb-10 max-readable">
              I'm looking for high-impact opportunities to help stabilize and scale revenue-critical platforms.
            </p>
            <div className="d-flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary px-8 py-3 pill fs-5">Get in touch</Link>
              <a href="mailto:jason.taylor@example.com" className="btn btn-outline-primary px-8 py-3 pill fs-5">Send an email</a>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4 text-lg-end">
               <a href="#" className="h4 fw-bold nav-link-custom pb-2 border-bottom-subtle">LinkedIn ↗</a>
               <a href="#" className="h4 fw-bold nav-link-custom pb-2 border-bottom-subtle">GitHub ↗</a>
               <a href="#" className="h4 fw-bold nav-link-custom pb-2 border-bottom-subtle">Resume ↗</a>
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
