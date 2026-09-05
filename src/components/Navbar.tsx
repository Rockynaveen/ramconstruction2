import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  customLogoUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ customLogoUrl }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT US', href: '#about', id: 'about' },
    { label: 'OUR SERVICES', href: '#services', id: 'services' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'CONTACT US', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full bg-white z-50 transition-shadow duration-300 border-b border-slate-200/80 shadow-md ${isScrolled ? 'shadow-lg shadow-slate-900/10' : 'shadow-slate-900/8'}`}>
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 flex items-center justify-between h-16 sm:h-[74px]">
        <a href="#home" className="flex items-center no-underline shrink-0" aria-label="RAM Construction Home">
          <Logo customLogoUrl={customLogoUrl} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center" aria-label="Main Navigation">
          <ul className="flex items-center list-none gap-4 lg:gap-8 m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={item.href}
                  className={`relative text-[13px] lg:text-[13.5px] font-bold tracking-wider py-2 px-1 transition-colors duration-200 flex flex-col items-center ${activeSection === item.id ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-0.5 left-0 w-full h-[2.5px] bg-brand-blue rounded-full" />
                  )}
                </a>
              </li>
            ))}
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
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } md:hidden relative z-50 bg-white border-t border-slate-100 px-5 sm:px-6 py-5 shadow-2xl max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-[74px])] overflow-y-auto`}
      >
        <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`text-[15px] font-bold block py-2 px-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-brand-blue bg-brand-light/60'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-slate-200 text-sm text-slate-500">
          <p className="text-xs text-slate-500 m-0">Direct Inquiries & Call Backs:</p>
          <a href="tel:+919885553600" className="text-lg font-extrabold text-brand-blue block mt-1">
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
