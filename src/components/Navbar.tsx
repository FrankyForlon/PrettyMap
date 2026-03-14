import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavbarProps {
  onToggleSidebar?: () => void;
  showSidebarToggle?: boolean;
}

export default function Navbar({ onToggleSidebar, showSidebarToggle }: NavbarProps) {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Map' },
    { to: '/about', label: 'About' },
    { to: '/education', label: 'Education' },
    { to: '/gigs', label: 'Gigs' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-bloom-black/80 backdrop-blur-md border-b border-bloom-border/30"
    >
      <div className="flex items-center gap-3">
        {showSidebarToggle && (
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-bloom-panel transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-bloom-teal/20 flex items-center justify-center border border-bloom-teal/30 group-hover:border-bloom-teal transition-colors">
            <div className="w-3 h-3 rounded-full bg-bloom-teal" />
          </div>
          <span className="text-lg font-semibold text-white">
            prettyparasites<span className="text-bloom-teal">.ai</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-1">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'text-bloom-teal bg-bloom-teal/10'
                  : 'text-gray-400 hover:text-white hover:bg-bloom-panel/50'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
