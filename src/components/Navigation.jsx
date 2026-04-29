import { Link, useLocation } from 'react-router-dom';
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export default function Navigation() {
  const location = useLocation();

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <Link to="/" className="text-xl font-bold text-gray-900 font-manrope text-decoration-none">
          Jason Taylor
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-manrope text-sm font-medium tracking-tight transition-colors duration-200 text-decoration-none ${
                  isActive 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link to="/contact" className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-manrope text-sm font-semibold active:scale-95 transition-transform hover:bg-accent-hover text-decoration-none">
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
