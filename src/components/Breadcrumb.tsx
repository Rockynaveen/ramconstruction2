import React from 'react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export interface BreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
  bgImageUrl?: string;
  className?: string;
}

/**
 * Reusable dynamic Breadcrumb Hero Banner component for all pages.
 * Supports dynamic title, interactive clickable path items, custom backgrounds, and SEO-friendly semantic markup.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  items,
  bgImageUrl = '/contact-hero.jpg',
  className = '',
}) => {
  return (
    <section
      className={`relative bg-slate-900 overflow-hidden min-h-[210px] sm:min-h-[250px] flex items-center ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(16, 20, 28, 0.94) 0%, rgba(20, 26, 38, 0.88) 45%, rgba(25, 32, 48, 0.45) 100%), url('${bgImageUrl}')`,
        backgroundPosition: 'right center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-9 sm:py-12 relative z-10">
        <div className="max-w-3xl">
          {/* Dynamic Page Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-outfit uppercase mb-1.5 sm:mb-2">
            {title}
          </h1>

          {/* Dynamic Breadcrumb Path */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-y-1 list-none p-0 m-0 text-xs sm:text-sm tracking-wider font-bold">
              {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                  <li key={index} className="flex items-center">
                    {item.onClick && !isLast ? (
                      <button
                        type="button"
                        onClick={item.onClick}
                        className="text-brand-accent hover:text-white transition-colors cursor-pointer uppercase font-extrabold"
                      >
                        {item.label}
                      </button>
                    ) : isLast || item.active ? (
                      <span className="text-white uppercase font-bold" aria-current="page">
                        {item.label}
                      </span>
                    ) : (
                      <span className="text-white/80 uppercase font-extrabold">
                        {item.label}
                      </span>
                    )}

                    {!isLast && (
                      <span
                        className="text-white/60 mx-2 font-normal select-none"
                        aria-hidden="true"
                      >
                        /
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
