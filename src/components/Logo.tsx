import React from 'react';

interface LogoProps {
  variant?: 'light' | 'white';
  customLogoUrl?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', customLogoUrl, className = '' }) => {
  const logoSrc = customLogoUrl || '/ram-logo.png';
  const isWhite = variant === 'white';

  if (isWhite) {
    return (
      <div className={`inline-flex items-center bg-white px-3.5 py-2 rounded-xl shadow-sm ${className}`}>
        <img
          src={logoSrc}
          alt="RAM Construction"
          className="h-10 sm:h-11 w-auto object-contain select-none"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="RAM Construction"
        className="h-11 sm:h-12 w-auto object-contain select-none"
      />
    </div>
  );
};

export default Logo;
