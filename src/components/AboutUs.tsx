import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-24 xl:gap-32 items-start">
        {/* Left Visual Composition - Overlapping Golden-Bordered Photos flowing from left to right */}
        <div
          className={`relative w-fit mx-auto lg:mx-0 pt-1 shrink-0 ${
            isVisible ? 'animate-flow-left-to-right' : 'opacity-0'
          }`}
        >
          {/* Top-Left Photo: Couple looking at blueprint */}
          <div className="w-40 xs:w-48 sm:w-56 h-52 xs:h-60 sm:h-68 rounded-2xl border-[3.5px] border-brand-navy overflow-hidden shadow-md bg-white relative z-0">
            <img
              src="/about-couple.jpg"
              alt="Engineers and homeowners reviewing architectural plans"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Bottom-Right Photo: Touching the bottom-right corner of top photo */}
          <div className="w-36 xs:w-44 sm:w-52 h-48 xs:h-56 sm:h-64 rounded-2xl border-[3.5px] border-brand-navy overflow-hidden shadow-xl bg-white -mt-6 sm:-mt-8 ml-20 xs:ml-28 sm:ml-36 relative z-10">
            <img
              src="/about-keys.jpg"
              alt="Hands holding keys and miniature house model"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Content flowing from right to left */}
        <div
          className={`flex flex-col items-start lg:pl-4 xl:pl-8 ${
            isVisible ? 'animate-flow-right-to-left' : 'opacity-0'
          }`}
        >
          <h2
            className="text-[30px] font-normal text-black uppercase mb-6 tracking-tight pb-[5px]"
            style={{ fontSize: '30px', fontWeight: 400, paddingBottom: '5px' }}
          >
            ABOUT US
          </h2>

          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
            RAM Construction, formerly known as SR Housing and Constructions. With over a decade of expertise in delivering exceptional home construction projects, we are proud to be recognized as a trusted name in the industry.
          </p>

          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-4">
            At RAM Construction, we specialize in turning visions into reality, offering end-to-end solutions for building homes that are not just structures but meaningful spaces that reflect your personality, dreams, and aspirations.
          </p>

          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
            Our journey, rooted in years of commitment and excellence, has enabled us to craft homes that stand as landmarks of quality and innovation. From conceptualizing the design to laying the foundation and adding the finishing touches, we take pride in delivering projects that exceed expectations.
          </p>

          <button
            type="button"
            className="bg-brand-navy hover:bg-brand-blue text-white font-bold text-xs tracking-wider uppercase px-7 py-3 rounded-[3px] shadow-sm transition-colors cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            READ MORE
          </button>
        </div>
      </div>

      {/* About Details Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-5 sm:p-8 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 sm:top-5 right-4 sm:right-5 text-slate-400 hover:text-slate-700 cursor-pointer p-1" onClick={() => setModalOpen(false)}>
              <X size={22} />
            </button>
            <div className="mb-5">
              <h3 className="text-2xl font-extrabold text-black mb-1 font-sans">About RAM Construction</h3>
              <p className="text-xs font-semibold text-brand-blue">Excellence in Engineering, Integrity in Every Brick</p>
            </div>
            <div className="text-slate-700 text-sm leading-relaxed">
              <p className="mb-4">
                Formerly known as SR Housing and Constructions, RAM Construction has pioneered progressive structural designs and premium residential builds across Hyderabad, Telangana, and Andhra Pradesh.
              </p>
              <h4 className="font-bold text-black text-base mb-3">Our Core Commitments:</h4>
              <ul className="space-y-3 my-4 list-none p-0">
                <li className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Zero Hidden Costs:</strong> Fully transparent BOQ (Bill of Quantities) and itemized quotes.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Quality Tested Materials:</strong> Only top-tier cement, steel (Fe 550D), and branded fittings used.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>Milestone-Based Payments:</strong> Pay strictly in tandem with verified site progress.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                  <span><strong>10-Year Structural Warranty:</strong> Peace of mind with guaranteed structural durability.</span>
                </li>
              </ul>
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl">
                <span className="text-xs font-semibold text-slate-600">Want to visit an ongoing project site?</span>
                <button
                  type="button"
                  className="bg-brand-navy hover:bg-brand-blue text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer"
                  onClick={() => setModalOpen(false)}
                >
                  Schedule Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
