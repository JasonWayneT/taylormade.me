import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navLinks } from '../data/navigation';
import { clsx } from 'clsx'; // I'll add this if needed, but I'll use template literals for now

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="nav-container w-100 px-3 d-flex justify-content-center">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="glass nav-pill d-flex align-items-center gap-1"
      >
        <Link to="/" className="d-flex align-items-center me-3 px-2">
          <div className="d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--color-primary)', color: 'white', fontWeight: '900', fontSize: '18px' }}>
            T
          </div>
        </Link>

        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link px-3 py-2 rounded-pill fw-medium transition-all ${
                isActive ? 'bg-dark text-white shadow-sm' : 'text-secondary hover-bg-light'
              }`}
              style={{ 
                fontSize: '0.9rem',
                backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                color: isActive ? '#FFFFFF' : 'var(--color-text-body)',
                transition: 'all 0.2s ease'
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
