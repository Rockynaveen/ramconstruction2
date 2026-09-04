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
    <header className={`sticky top-0 left-0 w-full bg-white z-50 transition-all duration-300 border-b border-slate-100 ${isScrolled ? 'shadow-md shadow-brand-navy/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[74px]">
        <a href="#home" className="flex items-center no-underline" aria-label="RAM Construction Home">
          <Logo customLogoUrl={customLogoUrl} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center" aria-label="Main Navigation">
          <ul className="flex items-center list-none gap-8 m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={item.href}
                  className={`relative text-[13.5px] font-bold tracking-wider py-2 transition-colors duration-200 flex flex-col items-center ${activeSection === item.id ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'}`}
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
        <div className="flex md:hidden items-center gap-3">
          <a href="tel:+919885553600" className="bg-brand-light text-brand-blue p-2 rounded-lg transition-colors" title="Call Us">
            <PhoneCall size={18} />
          </a>
          <button
            className="text-brand-navy p-1 focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-slate-100 px-6 py-5 shadow-xl`}>
        <ul className="flex flex-col gap-4 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`text-[15px] font-bold block py-1.5 transition-colors ${activeSection === item.id ? 'text-brand-blue' : 'text-slate-800'}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-slate-200 text-sm text-slate-500">
          <p>Direct Inquiries & Call Backs:</p>
          <a href="tel:+919885553600" className="text-lg font-extrabold text-brand-blue block mt-1">
            +91 98855 53600
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
