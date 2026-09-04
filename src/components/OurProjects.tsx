import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';

interface PortfolioItem {
  id: string;
  location: string;
  area: string;
  image: string;
  description: string;
}

export const OurProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'p1',
      location: 'Chaitanyapuri',
      area: '7200sft',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80',
      description: 'Stately multi-storey contemporary residential villa with wood-textured paneling, balcony planters, and secure ground-level covered parking.'
    },
    {
      id: 'p2',
      location: 'Nagole',
      area: '3240sft',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=80',
      description: 'Elegant vertical urban residence with recessed terrace decks, stone cladding facade accents, and bespoke architectural exterior illumination.'
    },
    {
      id: 'p3',
      location: 'Rajendranagar',
      area: '12740sft',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=80',
      description: 'Magnificent multi-level residential tower with warm architectural wooden louvers, glass perimeter balconies, and landscaped entrance approach.'
    },
    {
      id: 'p4',
      location: 'Nagole',
      area: '3700sft',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop&q=80',
      description: 'Modern luxury duplex home with cantilevered balconies, contrasting exterior textures, integrated security gate, and paved vehicular entryway.'
    },
    {
      id: 'p5',
      location: 'Jagtial',
      area: '2650sft',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&auto=format&fit=crop&q=80',
      description: 'Spacious independent contemporary residence featuring ribbed vertical facade slats, decorative parapet roof deck, and landscaped yard.'
    },
    {
      id: 'p6',
      location: 'Jagtial',
      area: '2500sft',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&auto=format&fit=crop&q=80',
      description: 'Distinctive dual-toned architectural home with framed box bay windows, recessed warm accent panels, and designer compound walling.'
    }
  ];

  return (
    <section id="projects" className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2
            className="font-outfit uppercase tracking-tight text-brand-navy"
            style={{ fontSize: '30px', fontWeight: 400, paddingBottom: '5px' }}
          >
            LIVNEXT PORTFOLIO
          </h2>
          {/* Accent bar in brand blue */}
          <div className="w-14 h-1 bg-brand-blue mx-auto rounded-full mt-1 mb-4" />

          {/* Subtitle with standard typography */}
          <p
            className="max-w-3xl mx-auto text-center"
            style={{
              fontFamily: '"Roboto", sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              color: '#555555',
              lineHeight: '24px'
            }}
          >
            At Livnext, we specialize in crafting exceptional homes and delivering top-tier construction solutions.
            <br className="hidden sm:inline" />
            {' '}Recognized as Hyderabad's most renowned quality construction company, we take
            <br className="hidden sm:inline" />
            {' '}pride in turning your vision into reality with unparalleled precision and care.
          </p>
        </div>

        {/* 6 Portfolio Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveProject(item)}
              className="group bg-white rounded-none border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={`${item.location} - ${item.area}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Bottom Strip with Location and SFT Area */}
              <div
                className="flex items-center justify-between px-4 sm:px-5 py-3 border-t border-amber-100/50"
                style={{ backgroundColor: '#fcf4e8' }}
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base tracking-tight">
                  {item.location}
                </span>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800">
                  {/* Home glyph matching reference screenshot */}
                  <svg
                    className="w-4 h-4 text-[#e69500] fill-[#e69500] shrink-0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <span>{item.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Lightbox Preview Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black/60 text-white hover:bg-black p-2 rounded-full cursor-pointer transition-colors"
              onClick={() => setActiveProject(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <img
                src={activeProject.image}
                alt={activeProject.location}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-brand-navy/90 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md">
                <svg
                  className="w-4 h-4 text-[#e69500] fill-[#e69500]"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                {activeProject.area}
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-outfit text-2xl font-bold text-brand-navy mb-1.5">
                {activeProject.location} Project
              </h3>
              <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-4">
                <MapPin size={15} className="text-[#e69500]" /> {activeProject.location}, Telangana
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#555555',
                  lineHeight: '22px'
                }}
              >
                {activeProject.description}
              </p>
              <div>
                <a
                  href="#contact"
                  className="block w-full text-center bg-brand-navy hover:bg-brand-blue text-white py-3.5 rounded-xl text-xs font-bold tracking-wider transition-colors shadow-md uppercase"
                  onClick={() => setActiveProject(null)}
                >
                  Request Consultation For This Design
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProjects;
