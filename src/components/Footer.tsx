import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  customLogoUrl?: string;
  onNavigate?: (page: 'home' | 'about' | 'services' | 'projects' | 'contact', targetSection?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ customLogoUrl, onNavigate }) => {
  const logoSrc = customLogoUrl || '/ram-logo.png';

  const handleLink = (
    e: React.MouseEvent,
    page: 'home' | 'about' | 'services' | 'projects' | 'contact',
    target?: string
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page, target);
    }
  };

  return (
    <footer
      id="contact-footer"
      className="relative text-slate-300 border-t border-slate-800/80 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(17, 19, 23, 0.92), rgba(17, 19, 23, 0.94)), url("/footer-bg.jpg")',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Bio & Socials */}
          <div className="flex flex-col">
            {/* White rounded card housing our logo */}
            <div className="bg-white px-5 py-3 rounded-lg inline-flex items-center shadow-md mb-5 max-w-[210px]">
              <img
                src={logoSrc}
                alt="Company Logo"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </div>

            {/* Description Text */}
            <p className="text-[13px] sm:text-[13.5px] text-slate-300 leading-[22px] mb-6 font-normal">
              RAM Construction is a top home construction company, known for quality, innovation, and customer satisfaction. They blend modern design with expert craftsmanship to create elegant, durable homes that exceed expectations. Trust RAM Construction to bring your dream home to life.
            </p>

            {/* Social Icons in outline rounded squares */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-white/40 hover:border-brand-accent hover:text-brand-accent text-white flex items-center justify-center rounded transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-white/40 hover:border-brand-accent hover:text-brand-accent text-white flex items-center justify-center rounded transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-white/40 hover:border-brand-accent hover:text-brand-accent text-white flex items-center justify-center rounded transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-white/40 hover:border-brand-accent hover:text-brand-accent text-white flex items-center justify-center rounded transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-brand-accent font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-5">
              OUR SERVICES
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLink(e, 'services', 'residential')}
                  className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block"
                >
                  Residential Construction
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLink(e, 'services', 'commercial')}
                  className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block"
                >
                  Commercial Construction
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLink(e, 'services', 'architecture')}
                  className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block"
                >
                  Architecture &amp; Structural
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLink(e, 'services', 'interior')}
                  className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block"
                >
                  Interior Design Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Link */}
          <div>
            <h3 className="text-brand-accent font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-5">
              SITE LINK
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLink(e, 'home', 'home')}
                  className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLink(e, 'about')}
                  className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLink(e, 'services')}
                  className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLink(e, 'projects', 'all')}
                  className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLink(e, 'contact')}
                  className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-brand-accent font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-5">
              CONTACT US
            </h3>
            <ul className="space-y-4 list-none p-0 m-0 text-[13px] sm:text-[13.5px]">
              <li className="flex items-start gap-3 text-slate-300 leading-[21px]">
                <MapPin size={22} className="text-white shrink-0 mt-0.5" />
                <span>
                  # 72/141 , 4th Floor, Above KFC, LB Nagar - Uppal Rd, Nagole, Uppal Mandal, Hyderabad, Telangana 500068
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone size={18} className="text-white shrink-0" />
                <span>
                  Telephone :{' '}
                  <a href="tel:+919885553600" className="hover:text-brand-accent transition-colors">
                    +91-98855 53600
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="text-white shrink-0" />
                <span>
                  Email :{' '}
                  <a href="mailto:info@ramconstruction.in" className="hover:text-brand-accent transition-colors">
                    info@ramconstruction.in
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Floating Action Button: Big Green WhatsApp Button Only */}
      <a
        href="https://wa.me/919885553600"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Bottom Logo Blue Copyright Strip */}
      <div
        className="py-3.5 text-center text-xs sm:text-[13px] font-medium text-white tracking-wide border-t border-white/10"
        style={{ backgroundColor: '#1f4c75' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="m-0">
            © RAM Construction 2026 Made With <span className="text-red-500">❤️</span> by Sunseaz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
