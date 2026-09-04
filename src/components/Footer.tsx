import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  customLogoUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({ customLogoUrl }) => {
  const logoSrc = customLogoUrl || '/ram-logo.png';

  return (
    <footer
      id="contact"
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
                className="w-8 h-8 border border-white/40 hover:border-[#e69500] hover:text-[#e69500] text-white flex items-center justify-center rounded transition-colors"
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
                className="w-8 h-8 border border-white/40 hover:border-[#e69500] hover:text-[#e69500] text-white flex items-center justify-center rounded transition-colors"
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
                className="w-8 h-8 border border-white/40 hover:border-[#e69500] hover:text-[#e69500] text-white flex items-center justify-center rounded transition-colors"
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
                className="w-8 h-8 border border-white/40 hover:border-[#e69500] hover:text-[#e69500] text-white flex items-center justify-center rounded transition-colors"
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
            <h3 className="text-[#e69500] font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-5">
              OUR SERVICES
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <a href="#services" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
                  Residential Construction
                </a>
              </li>
              <li>
                <a href="#services" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
                  Commercial Construction
                </a>
              </li>
              <li>
                <a href="#services" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
                  Architecture &amp; Structural
                </a>
              </li>
              <li>
                <a href="#services" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
                  Interior Design Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Site Link */}
          <div>
            <h3 className="text-[#e69500] font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-5">
              SITE LINK
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <a href="#home" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[13px] sm:text-[13.5px] text-slate-300 hover:text-white transition-colors block">
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
            <h3 className="text-[#e69500] font-bold text-sm sm:text-[15px] uppercase tracking-wider mb-5">
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
                  <a href="tel:+919885553600" className="hover:text-[#e69500] transition-colors">
                    +91-98855 53600
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Mail size={18} className="text-white shrink-0" />
                <span>
                  Email :{' '}
                  <a href="mailto:info@ramconstruction.in" className="hover:text-[#e69500] transition-colors">
                    info@ramconstruction.in
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      {/* 1. Floating Phone Dial button (Left) */}
      <a
        href="tel:+919885553600"
        className="fixed bottom-6 left-6 z-40 bg-[#009fe3] hover:bg-[#008bc7] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center cursor-pointer"
        title="Call Now"
        aria-label="Call Now"
      >
        <Phone size={22} className="fill-white" />
      </a>

      {/* 2. Floating WhatsApp button (Right) */}
      <a
        href="https://wa.me/919885553600"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center cursor-pointer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
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
