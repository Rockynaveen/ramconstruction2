import React, { useState, useEffect, useRef } from 'react';
import { Home, Building2, Compass, Palette, X, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  details: {
    overview: string;
    deliverables: string[];
    priceHint: string;
  };
}

export const OurServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Allows reveal animation to play again when scrolling into view
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const staggerDelays = [
    'service-delay-0',
    'service-delay-100',
    'service-delay-200',
    'service-delay-300',
  ];

  const services: ServiceItem[] = [
    {
      id: 'residential',
      title: 'Residential Construction',
      desc: 'Expertise in custom villas, modern apartments, and dream homes built with premium materials and quality craftsmanship.',
      icon: <Home size={42} strokeWidth={1.8} className="text-white" />,
      details: {
        overview: 'Complete turnkey home building solutions from foundation excavation to final painting and fittings.',
        deliverables: [
          'Vastu-compliant architectural floor plans & 3D elevations',
          'Earthquake-resistant RCC framed structures',
          'Premium vitrified flooring, electrical & sanitary installations',
          '100% waterproofed roofs & plumbing pressure tested'
        ],
        priceHint: 'Starting from ₹1,200 / Sft (Standard) to ₹2,400 / Sft (Luxury Package)'
      }
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      desc: 'Expertise in commercial spaces for offices, retail, and industrial buildings with modern design and quality craftsmanship.',
      icon: <Building2 size={42} strokeWidth={1.8} className="text-white" />,
      details: {
        overview: 'Heavy-duty, functional, and aesthetically commanding spaces designed for optimal business operations and maximum floor efficiency.',
        deliverables: [
          'Pre-engineered buildings (PEB) & concrete structures',
          'HVAC, fire safety, and advanced MEP engineering',
          'Acoustic insulation & high-load floor slabs',
          'Strict adherence to municipal bylaws & safety norms'
        ],
        priceHint: 'Customized B2B competitive proposals based on site survey'
      }
    },
    {
      id: 'architecture',
      title: 'Architecture & Structural',
      desc: 'Expertise in Vastu-compliant architectural planning, 3D elevations, and certified structural engineering for long-lasting stability.',
      icon: <Compass size={42} strokeWidth={1.8} className="text-white" />,
      details: {
        overview: 'Creative blueprint drafting and precision structural analysis designed to maximize natural light, ventilation, and space utilization.',
        deliverables: [
          'Detailed 2D working drawings & 3D photorealistic walkthroughs',
          'STAAD.pro certified structural stability calculations',
          'Soil testing coordination & foundation recommendation',
          'Municipal approval assistance & sanction drawings'
        ],
        priceHint: 'Transparent architectural consultancy packages available'
      }
    },
    {
      id: 'interior',
      title: 'Interior Design Services',
      desc: 'Expertise in bespoke luxury interiors, custom modular kitchens, and smart lighting solutions tailored to your unique lifestyle.',
      icon: <Palette size={42} strokeWidth={1.8} className="text-white" />,
      details: {
        overview: 'Bespoke modular kitchens, false ceilings, luxury wardrobes, and mood lighting designed for contemporary living.',
        deliverables: [
          'Custom modular kitchen with BLUM / Hettich hardware',
          'Designer gypsum false ceiling with ambient LED cove lights',
          'Italian marble / designer tiles flooring accents',
          'Full-room space optimization & custom cabinetry'
        ],
        priceHint: 'Custom packages from premium veneers to Italian finishes'
      }
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-12 bg-slate-50/50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2
            className="font-outfit text-[30px] font-normal text-black uppercase mb-2 pb-[5px]"
            style={{ fontSize: '30px', fontWeight: 400, paddingBottom: '5px' }}
          >
            OUR SERVICES
          </h2>
          <div className="w-14 h-1 bg-brand-blue mx-auto rounded-full mb-4" />
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
            We provide end-to-end construction and design solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-transparent hover:bg-white p-5 sm:p-6 rounded-2xl border border-transparent hover:border-slate-200 shadow-none hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer ${
                isVisible ? `animate-service-fade-up ${staggerDelays[idx % staggerDelays.length]}` : 'opacity-0'
              }`}
              onClick={() => setSelectedService(service)}
            >
              <div className="w-20 h-20 rounded-full group-hover:rounded-xl bg-brand-blue text-white flex items-center justify-center mb-5 shadow-md shadow-brand-blue/20 group-hover:bg-brand-navy group-hover:scale-[1.04] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-outfit text-lg font-bold text-black mb-3 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p
                className="text-center text-[16px] font-normal text-[#555555] leading-[24px] mb-6 flex-1"
                style={{
                  textAlign: 'center',
                  fontFamily: '"Roboto", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#555555',
                  lineHeight: '24px',
                }}
              >
                {service.desc}
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-none bg-brand-blue hover:bg-brand-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                KNOW MORE
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer" onClick={() => setSelectedService(null)}>
              <X size={24} />
            </button>
            <div className="mb-5 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-3 shadow-md shadow-brand-blue/20">
                {selectedService.icon}
              </div>
              <h3 className="font-outfit text-2xl font-extrabold text-black mb-1">{selectedService.title}</h3>
              <p className="text-xs text-slate-500">{selectedService.desc}</p>
            </div>
            <div className="text-slate-700 text-sm leading-relaxed">
              <p className="mb-4 bg-slate-50 p-3.5 rounded-xl text-slate-600 text-xs leading-relaxed">{selectedService.details.overview}</p>
              <h4 className="font-bold text-black text-sm mb-3">What We Deliver:</h4>
              <ul className="space-y-2.5 my-3 list-none p-0">
                {selectedService.details.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <ArrowRight size={14} className="text-brand-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="my-4 p-3 bg-brand-light text-brand-blue text-xs rounded-lg font-medium">
                <strong>Budget Estimate:</strong> {selectedService.details.priceHint}
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  className="block w-full text-center bg-brand-blue hover:bg-brand-navy text-white py-3 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  onClick={() => setSelectedService(null)}
                >
                  Inquire For This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurServices;
