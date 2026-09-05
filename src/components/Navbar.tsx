import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, PhoneCall, ChevronDown } from 'lucide-react';

interface NavbarProps {
  customLogoUrl?: string;
  currentPage?: 'home' | 'about' | 'services' | 'projects' | 'contact';
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'contact', targetSection?: string) => void;
}

const navigateToHash = (hash: string) => {
  window.location.hash = hash;
};

export const Navbar: React.FC<NavbarProps> = ({
  customLogoUrl,
  currentPage = 'home',
  onNavigate,
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT US', href: '#about', id: 'about' },
    { label: 'OUR SERVICES', href: '#services', id: 'services' },
    { label: 'PROJECTS', href: '#projects', id: 'projects', hasDropdown: true },
    { label: 'CONTACT US', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (currentPage !== 'home') return;

      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        const rect = projectsEl.getBoundingClientRect();
        if (rect.top <= 250 && rect.bottom >= 150) {
          setActiveSection('projects');
          return;
        }
      }

      if (window.scrollY < 450) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const isItemActive = (id: string) => {
    if (currentPage === 'about') return id === 'about';
    if (currentPage === 'services') return id === 'services';
    if (currentPage === 'projects') return id === 'projects';
    if (currentPage === 'contact') return id === 'contact';
    if (currentPage === 'home') {
      return activeSection === id;
    }
    return false;
  };

  const handleSubProjectClick = (filter: 'all' | 'ongoing' | 'completed') => {
    setMobileMenuOpen(false);
    setActiveSection('projects');
    if (onNavigate) {
      onNavigate('projects', filter);
    } else {
      navigateToHash(filter === 'all' ? '#projects' : `#projects-${filter}`);
    }
  };

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'contact') {
      setActiveSection('contact');
      if (onNavigate) {
        onNavigate('contact');
      } else {
        navigateToHash('#contact');
      }
      return;
    }

    if (id === 'about') {
      setActiveSection('about');
      if (onNavigate) {
        onNavigate('about');
      } else {
        navigateToHash('#about');
      }
      return;
    }

    if (id === 'services') {
      setActiveSection('services');
      if (onNavigate) {
        onNavigate('services');
      } else {
        navigateToHash('#services');
      }
      return;
    }

    if (id === 'projects') {
      setActiveSection('projects');
      if (onNavigate) {
        onNavigate('projects', 'all');
      } else {
        navigateToHash('#projects');
      }
      return;
    }

    // Default: 'home'
    setActiveSection('home');
    if (onNavigate) {
      onNavigate('home', 'home');
    } else {
      navigateToHash('#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{ fontFamily: '"Roboto", sans-serif' }}
        className={`fixed top-0 left-0 right-0 w-full bg-white z-50 transition-shadow duration-300 border-b border-slate-200/80 shadow-md ${isScrolled ? 'shadow-lg shadow-slate-900/10' : 'shadow-slate-900/8'}`}
      >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 flex items-center justify-between h-16 sm:h-[74px]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home', 'home');
            else window.location.hash = '#home';
          }}
          className="flex items-center no-underline shrink-0 cursor-pointer"
          aria-label="RAM Construction Home"
        >
          <Logo customLogoUrl={customLogoUrl} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center" aria-label="Main Navigation" style={{ fontFamily: '"Roboto", sans-serif' }}>
          <ul className="flex items-center list-none gap-2 lg:gap-3.5 xl:gap-5 m-0 p-0">
            {navItems.map((item) => {
              const active = isItemActive(item.id);

              if (item.id === 'projects') {
                return (
                  <li key={item.id} className="relative group flex items-center">
                    <button
                      type="button"
                      style={{ fontFamily: '"Roboto", sans-serif' }}
                      onClick={(e) => handleNavClick(item.id, e)}
                      className={`flex items-center gap-1 cursor-pointer transition-all duration-200 ${
                        active
                          ? 'bg-brand-blue hover:bg-brand-navy text-white text-xs lg:text-[13px] font-bold tracking-wider py-2 px-3.5 rounded-[4px] shadow-sm'
                          : 'text-slate-700 hover:text-brand-blue text-xs lg:text-[13.5px] font-bold tracking-wider py-2 px-2.5'
                      }`}
                    >
                      <span style={{ fontFamily: '"Roboto", sans-serif' }}>{item.label}</span>
                      <ChevronDown
                        size={13}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </button>

                    {/* Floating Dropdown Card */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50">
                      <div
                        style={{ fontFamily: '"Roboto", sans-serif' }}
                        className="bg-white rounded-xl shadow-2xl border border-slate-200/90 py-2 overflow-hidden"
                      >
                        <button
                          type="button"
                          style={{ fontFamily: '"Roboto", sans-serif' }}
                          onClick={() => handleSubProjectClick('ongoing')}
                          className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-800 hover:text-white hover:bg-brand-blue transition-colors flex items-center justify-between group/sub cursor-pointer"
                        >
                          <div>
                            <span className="block text-xs font-bold" style={{ fontFamily: '"Roboto", sans-serif' }}>Ongoing Projects</span>
                            <span className="block text-[10.5px] font-normal text-slate-400 group-hover/sub:text-white/80" style={{ fontFamily: '"Roboto", sans-serif' }}>
                              Active sites under construction
                            </span>
                          </div>
                          <span className="text-[10px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 group-hover/sub:bg-white/20 group-hover/sub:text-white shrink-0 ml-2" style={{ fontFamily: '"Roboto", sans-serif' }}>
                            Active
                          </span>
                        </button>

                        <button
                          type="button"
                          style={{ fontFamily: '"Roboto", sans-serif' }}
                          onClick={() => handleSubProjectClick('completed')}
                          className="w-full text-left px-4 py-2.5 text-xs font-bold text-slate-800 hover:text-white hover:bg-brand-blue transition-colors flex items-center justify-between group/sub cursor-pointer"
                        >
                          <div>
                            <span className="block text-xs font-bold" style={{ fontFamily: '"Roboto", sans-serif' }}>Completed Projects</span>
                            <span className="block text-[10.5px] font-normal text-slate-400 group-hover/sub:text-white/80" style={{ fontFamily: '"Roboto", sans-serif' }}>
                              Handed over luxury villas &amp; hubs
                            </span>
                          </div>
                          <span className="text-[10px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 group-hover/sub:bg-white/20 group-hover/sub:text-white shrink-0 ml-2" style={{ fontFamily: '"Roboto", sans-serif' }}>
                            Done
                          </span>
                        </button>

                        <div className="border-t border-slate-100 my-1" />

                        <button
                          type="button"
                          style={{ fontFamily: '"Roboto", sans-serif' }}
                          onClick={() => handleSubProjectClick('all')}
                          className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-600 hover:text-brand-blue hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          View All Projects Showcase →
                        </button>
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.id} className="relative flex items-center">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={
                      active
                        ? 'bg-brand-blue hover:bg-brand-navy text-white text-xs lg:text-[13px] font-bold tracking-wider py-2 px-4 rounded-[4px] shadow-sm transition-all duration-200 cursor-pointer'
                        : 'text-slate-700 hover:text-brand-blue text-xs lg:text-[13.5px] font-bold tracking-wider py-2 px-2.5 transition-colors duration-200 cursor-pointer'
                    }
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <a
            href="tel:+919885553600"
            className="w-10 h-10 bg-brand-light text-brand-blue rounded-lg transition-colors flex items-center justify-center cursor-pointer"
            title="Call Us"
            aria-label="Call +91 98855 53600"
          >
            <PhoneCall size={18} />
          </a>
          <button
            type="button"
            className="w-10 h-10 text-brand-navy rounded-lg focus:outline-none flex items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-[74px] bg-black/40 z-40 md:hidden animate-fade-in backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        style={{ fontFamily: '"Roboto", sans-serif' }}
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } md:hidden relative z-50 bg-white border-t border-slate-100 px-5 sm:px-6 py-5 shadow-2xl max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-[74px])] overflow-y-auto`}
      >
        <ul className="flex flex-col gap-2.5 list-none m-0 p-0" style={{ fontFamily: '"Roboto", sans-serif' }}>
          {navItems.map((item) => {
            const active = isItemActive(item.id);

            if (item.id === 'projects') {
              return (
                <li key={item.id} className="flex flex-col" style={{ fontFamily: '"Roboto", sans-serif' }}>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      style={{ fontFamily: '"Roboto", sans-serif' }}
                      className={`flex-1 text-[15px] font-bold py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                        active
                          ? 'bg-brand-blue text-white shadow-sm'
                          : 'text-slate-800 hover:bg-slate-50'
                      }`}
                      onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                    >
                      <span style={{ fontFamily: '"Roboto", sans-serif' }}>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileProjectsOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {mobileProjectsOpen && (
                    <div className="pl-3 pr-1 py-2 space-y-1 border-l-2 border-brand-blue/40 ml-3 my-1" style={{ fontFamily: '"Roboto", sans-serif' }}>
                      <button
                        type="button"
                        style={{ fontFamily: '"Roboto", sans-serif' }}
                        onClick={() => handleSubProjectClick('ongoing')}
                        className="w-full text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded flex items-center justify-between cursor-pointer"
                      >
                        <span style={{ fontFamily: '"Roboto", sans-serif' }}>Ongoing Projects</span>
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-700" style={{ fontFamily: '"Roboto", sans-serif' }}>
                          Active
                        </span>
                      </button>
                      <button
                        type="button"
                        style={{ fontFamily: '"Roboto", sans-serif' }}
                        onClick={() => handleSubProjectClick('completed')}
                        className="w-full text-left py-2 px-3 text-sm font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded flex items-center justify-between cursor-pointer"
                      >
                        <span style={{ fontFamily: '"Roboto", sans-serif' }}>Completed Projects</span>
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700" style={{ fontFamily: '"Roboto", sans-serif' }}>
                          Done
                        </span>
                      </button>
                      <button
                        type="button"
                        style={{ fontFamily: '"Roboto", sans-serif' }}
                        onClick={() => handleSubProjectClick('all')}
                        className="w-full text-left py-1.5 px-3 text-xs font-semibold text-brand-blue hover:underline cursor-pointer"
                      >
                        View All Projects →
                      </button>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.id} style={{ fontFamily: '"Roboto", sans-serif' }}>
                <a
                  href={item.href}
                  style={{ fontFamily: '"Roboto", sans-serif' }}
                  className={
                    active
                      ? 'bg-brand-blue hover:bg-brand-navy text-white text-[15px] font-bold block py-2.5 px-4 rounded transition-colors text-center shadow-sm'
                      : 'text-[15px] font-bold block py-2 px-3 rounded-lg text-slate-800 hover:bg-slate-50 transition-colors'
                  }
                  onClick={(e) => handleNavClick(item.id, e)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mt-5 pt-4 border-t border-slate-200 text-sm text-slate-500" style={{ fontFamily: '"Roboto", sans-serif' }}>
          <p className="text-xs text-slate-500 m-0" style={{ fontFamily: '"Roboto", sans-serif' }}>Direct Inquiries & Call Backs:</p>
          <a href="tel:+919885553600" className="text-lg font-extrabold text-brand-blue block mt-1" style={{ fontFamily: '"Roboto", sans-serif' }}>
            +91 98855 53600
          </a>
        </div>
      </div>
    </header>
    {/* Spacer to prevent layout overlap when header is fixed */}
    <div className="h-16 sm:h-[74px] w-full shrink-0" aria-hidden="true" />
  </>
  );
};

export default Navbar;
