import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar navbar-expand-lg py-3 mb-4" style={{ backgroundColor: 'var(--color-bg-main)', borderBottom: '1px solid var(--color-border-subtle)' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" style={{ color: 'var(--color-text-header)' }} to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX color="var(--color-action-primary)" size={24} /> : <FiMenu color="var(--color-action-primary)" size={24} />}
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <Link
                  to={link.path}
                  className="nav-link-custom px-3 py-2"
                  style={{
                    fontWeight: location.pathname === link.path ? 600 : 400,
                    color: location.pathname === link.path ? 'var(--color-text-header)' : 'var(--color-text-body)'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link to="/contact" className="btn btn-primary px-4 py-2" onClick={() => setIsOpen(false)}>
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
