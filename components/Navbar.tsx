'use client';
import { useState, useCallback, useMemo, memo } from 'react';
import { Menu, X, Home, Target, Briefcase, HelpCircle, Mail } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = useMemo(() => [
    { name: 'Home', href: '#home', icon: <Home className="nav-link-icon" /> },
    { name: 'Mission', href: '#mission', icon: <Target className="nav-link-icon" /> },
    { name: 'Services', href: '#services', icon: <Briefcase className="nav-link-icon" /> },
    { name: 'FAQ', href: '#faq', icon: <HelpCircle className="nav-link-icon" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="nav-link-icon" /> },
  ], []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Smooth scroll to section with offset for fixed nav
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      
      if (el) {
        // Close mobile menu first
        setIsOpen(false);
        
        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-48" aria-hidden>
              <img
                src="/logo-pdf-1.png"
                alt="Unveiled Echo logo"
              />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-slate-600 font-medium"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              <div className="nav-icon">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mobile-nav-link text-slate-600"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default memo(Navbar);