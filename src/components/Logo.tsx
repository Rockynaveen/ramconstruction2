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
      <div className={`inline-flex items-center bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-sm ${className}`}>
        <img
          src={logoSrc}
          alt="RAM Construction"
          className="h-8 xs:h-9 sm:h-10 md:h-11 w-auto max-w-[140px] xs:max-w-[170px] sm:max-w-none object-contain select-none"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="RAM Construction"
        className="h-8 xs:h-9 sm:h-10 md:h-12 w-auto max-w-[150px] xs:max-w-[180px] sm:max-w-none object-contain select-none"
      />
    </div>
  );
};

export default Logo;
