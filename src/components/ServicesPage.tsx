import React, { useState, useEffect } from 'react';
import {
  Home,
  Building2,
  Compass,
  Palette,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';

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

interface ServicesPageProps {
  onNavigateHome: (targetSection?: string) => void;
  onNavigateContact: () => void;
  initialServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  initialServiceId,
}) => {
  const services: ServiceItem[] = [
    {
      id: 'residential',
      title: 'Residential Construction',
      desc: 'Expertise in custom villas, modern apartments, and dream homes built with premium materials and quality craftsmanship.',
      icon: <Home size={42} strokeWidth={1.8} className="text-white" />,
      details: {
        overview:
          'Complete turnkey home building solutions from foundation excavation to final painting and fittings.',
        deliverables: [
          'Vastu-compliant architectural floor plans & 3D elevations',
          'Earthquake-resistant RCC framed structures',
          'Premium vitrified flooring, electrical & sanitary installations',
          '100% waterproofed roofs & plumbing pressure tested',
        ],
        priceHint:
          'Starting from ₹1,200 / Sft (Standard) to ₹2,400 / Sft (Luxury Package)',
      },
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      desc: 'Expertise in commercial spaces for offices, retail, and industrial buildings with modern design and quality craftsmanship.',
      icon: <Building2 size={42} strokeWidth={1.8} className="text-white" />,
      details: {
        overview:
          'Heavy-duty, functional, and aesthetically commanding spaces designed for optimal business operations and maximum floor efficiency.',
        deliverables: [
          'Pre-engineered buildings (PEB) & concrete structures',
          'HVAC, fire safety, and advanced MEP engineering',
          'Acoustic insulation & high-load floor slabs',
          'Strict adherence to municipal bylaws & safety norms',
        ],
        priceHint:
          'Customized B2B competitive proposals based on site survey',
      },
    },
    {
      id: 'architecture',
      title: 'Architecture & Structural',
      desc: 'Expertise in Vastu-compliant architectural planning, 3D elevations, and certified structural engineering for long-lasting stability.',
      icon: <Compass size={42} strokeWidth={1.8} className="text-white" />,
      details: {
        overview:
          'Creative blueprint drafting and precision structural analysis designed to maximize natural light, ventilation, and space utilization.',
        deliverables: [
          'Detailed 2D working drawings & 3D photorealistic walkthroughs',
          'STAAD.pro certified structural stability calculations',
          'Soil testing coordination & foundation recommendation',
          'Municipal approval assistance & sanction drawings',
        ],
        priceHint:
          'Transparent architectural consultancy packages available',
      },
    },
    {
      id: 'interior',
      title: 'Interior Design Services',
      desc: 'Expertise in bespoke luxury interiors, custom modular kitchens, and smart lighting solutions tailored to your unique lifestyle.',
      icon: <Palette size={42} strokeWidth={1.8} className="text-white" />,
      details: {
        overview:
          'Bespoke modular kitchens, false ceilings, luxury wardrobes, and mood lighting designed for contemporary living.',
        deliverables: [
          'Custom modular kitchen with BLUM / Hettich hardware',
          'Designer gypsum false ceiling with ambient LED cove lights',
          'Italian marble / designer tiles flooring accents',
          'Full-room space optimization & custom cabinetry',
        ],
        priceHint:
          'Custom packages from premium veneers to Italian finishes',
      },
    },
  ];

  // Active service for request flow
  const [activeRequestService, setActiveRequestService] = useState<ServiceItem | null>(() => {
    if (initialServiceId) {
      return services.find((s) => s.id === initialServiceId) || null;
    }
    return null;
  });

  // Step state: 1, 2, 3, 4
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Exact step form state matching reference screenshots
  const [formData, setFormData] = useState({
    // Step 1: When Do you Plan to Start
    startDate: '2026-09-05',

    // Step 2: Please Choose Current Stage
    currentStage: 'Govt. Approvals',

    // Step 3: Land Details
    landSizeUnit: 'select Land Size',
    landSize: '',
    landDescription: '',

    // Step 4: Personal Details
    name: '',
    phone: '',
    email: '',
    location: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stepError, setStepError] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeRequestService, currentStep]);

  const handleSelectService = (service: ServiceItem) => {
    setActiveRequestService(service);
    setCurrentStep(1);
    setIsSubmitted(false);
    setStepError('');
  };

  const handleNext = () => {
    setStepError('');

    // Validations per step
    if (currentStep === 1) {
      if (!formData.startDate) {
        setStepError('Please select a tentative start date.');
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.currentStage) {
        setStepError('Please select your current project stage.');
        return;
      }
    } else if (currentStep === 3) {
      // Step 3 can proceed directly or with inputs
    } else if (currentStep === 4) {
      if (!formData.name.trim()) {
        setStepError('Please enter your name.');
        return;
      }
      if (!formData.phone.trim()) {
        setStepError('Please enter your phone number.');
        return;
      }
      setIsSubmitted(true);
      return;
    }

    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setStepError('');
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      // Return to the 4 services cards
      setActiveRequestService(null);
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Top Hero Banner with Reusable Dynamic Breadcrumb Component */}
      <Breadcrumb
        title={activeRequestService ? activeRequestService.title : 'OUR SERVICES'}
        items={
          activeRequestService
            ? [
                { label: 'HOME', onClick: () => onNavigateHome('home') },
                { label: 'OUR SERVICES', onClick: () => setActiveRequestService(null) },
                { label: activeRequestService.title, active: true },
              ]
            : [
                { label: 'HOME', onClick: () => onNavigateHome('home') },
                { label: 'OUR SERVICES', active: true },
              ]
        }
      />

      {/* Main Content View */}
      {!activeRequestService ? (
        /* View 1: 4-Column Services Grid matching Home Page */
        <section className="py-10 sm:py-16 bg-white border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-transparent hover:bg-white p-5 sm:p-6 rounded-2xl border border-transparent hover:border-slate-200 shadow-none hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
                  onClick={() => handleSelectService(service)}
                >
                  {/* Circular Blue Badge with Icon */}
                  <div className="w-20 h-20 rounded-full group-hover:rounded-xl bg-brand-blue text-white flex items-center justify-center mb-5 shadow-md shadow-brand-blue/20 group-hover:bg-brand-navy group-hover:scale-[1.04] transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-outfit text-lg font-bold text-black mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
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

                  {/* KNOW MORE Button */}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-none bg-brand-blue hover:bg-brand-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectService(service);
                    }}
                  >
                    KNOW MORE
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* View 2: Multi-step Request Flow matching the user's screenshots */
        <section className="relative py-8 sm:py-14 px-4 sm:px-6 flex items-center justify-center bg-white border-b border-slate-100">
          <div
            className="w-full max-w-3xl rounded-[3px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2),0_10px_25px_-5px_rgba(0,0,0,0.12)] border border-slate-200/90 p-5 sm:p-7 relative overflow-hidden bg-white"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.92)), url('/request-form-bg.jpg')`,
              backgroundPosition: 'center 30%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Title: SUBMIT YOUR REQUEST (reduced boldness matching screenshot) */}
            <div className="text-center mb-4 sm:mb-5 relative z-10">
              <h2 className="text-xl sm:text-2xl font-normal text-slate-900 font-outfit uppercase tracking-wide m-0">
                SUBMIT YOUR REQUEST
              </h2>
              {/* Brand Blue underline bar (blue instead of yellow) */}
              <div className="w-12 h-[3px] bg-brand-blue mx-auto mt-2 rounded-full" />
            </div>

            {/* Stepper Progress Bar (Step 1, Step 2, Step 3, Step 4) with perfectly straight connecting line */}
            <div className="max-w-xl mx-auto mb-5 sm:mb-6 px-2 sm:px-6 relative z-10">
              <div className="grid grid-cols-4">
                {[1, 2, 3, 4].map((stepNum) => {
                  const isFilled = stepNum <= currentStep;

                  return (
                    <div
                      key={stepNum}
                      className="flex flex-col items-center cursor-pointer select-none"
                      onClick={() => !isSubmitted && setCurrentStep(stepNum)}
                    >
                      {/* Step label */}
                      <span
                        className={`text-xs sm:text-[13px] font-medium mb-1.5 leading-none text-center ${
                          isFilled
                            ? 'text-brand-blue font-semibold'
                            : 'text-slate-500'
                        }`}
                      >
                        Step {stepNum}
                      </span>

                      {/* Circle with perfectly straight connecting line */}
                      <div className="relative w-full flex items-center justify-center">
                        {/* Connecting line left segment */}
                        {stepNum > 1 && (
                          <div className="absolute right-1/2 left-0 h-[1.5px] bg-[#d5d9df] -z-0" />
                        )}
                        {/* Connecting line right segment */}
                        {stepNum < 4 && (
                          <div className="absolute left-1/2 right-0 h-[1.5px] bg-[#d5d9df] -z-0" />
                        )}

                        {/* Numbered circle */}
                        <div
                          className={`relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-200 ${
                            isFilled
                              ? 'bg-brand-blue text-white shadow-xs'
                              : 'bg-white border-[1.5px] border-slate-300 text-slate-500'
                          }`}
                        >
                          {stepNum}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step Body Content */}
            {!isSubmitted ? (
              <div className="relative z-10">
                {/* STEP 1: When Do you Plan to Start */}
                {currentStep === 1 && (
                  <div className="text-center py-1 sm:py-2 animate-fade-in">
                    <h3 className="text-lg sm:text-xl font-bold text-black font-outfit mb-4">
                      When Do you Plan to Start
                    </h3>

                    {/* Centered Date Input with Calendar Icon */}
                    <div className="max-w-md mx-auto relative">
                      <div className="relative flex items-center">
                        <input
                          type="date"
                          value={formData.startDate}
                          onChange={(e) =>
                            setFormData({ ...formData, startDate: e.target.value })
                          }
                          className="w-full bg-white border border-slate-300 rounded-[2px] px-4 py-2.5 sm:py-3 text-center text-slate-800 text-base font-medium shadow-2xs focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors cursor-pointer"
                        />
                        <div className="absolute right-3.5 pointer-events-none text-slate-500">
                          <Calendar size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Please Choose Current Stage */}
                {currentStep === 2 && (
                  <div className="text-center py-1 sm:py-2 animate-fade-in">
                    <h3 className="text-lg sm:text-xl font-bold text-black font-outfit mb-5">
                      Please Choose Current Stage
                    </h3>

                    {/* 2-Column x 2-Row Radio Options matching Screenshot */}
                    <div className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left px-4">
                      {[
                        'Govt. Approvals',
                        'Designing',
                        'Execution',
                        'Not Specified Here',
                      ].map((stageOption) => {
                        const isSelected = formData.currentStage === stageOption;
                        return (
                          <label
                            key={stageOption}
                            className="flex items-center gap-3 cursor-pointer group select-none"
                            onClick={() =>
                              setFormData({ ...formData, currentStage: stageOption })
                            }
                          >
                            {/* Custom Circular Radio */}
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'border-brand-blue'
                                  : 'border-slate-400 group-hover:border-slate-600'
                              }`}
                            >
                              {isSelected && (
                                <div className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                              )}
                            </div>
                            <span
                              className={`text-sm sm:text-[15px] font-medium transition-colors ${
                                isSelected
                                  ? 'text-black font-semibold'
                                  : 'text-slate-700 group-hover:text-black'
                              }`}
                            >
                              {stageOption}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: Land Details */}
                {currentStep === 3 && (
                  <div className="py-1 sm:py-2 animate-fade-in">
                    <h3 className="text-lg sm:text-xl font-bold text-black font-outfit mb-4 text-center">
                      Land Details
                    </h3>

                    <div className="max-w-xl mx-auto space-y-3.5">
                      {/* Row 1: select Land Size & input Land Size */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <select
                            value={formData.landSizeUnit}
                            onChange={(e) =>
                              setFormData({ ...formData, landSizeUnit: e.target.value })
                            }
                            className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-slate-700 text-sm focus:border-brand-blue outline-none cursor-pointer shadow-xs"
                          >
                            <option value="select Land Size">select Land Size</option>
                            <option value="Square Yards">Square Yards (Sq. Yds)</option>
                            <option value="Square Feet">Square Feet (Sq. Ft)</option>
                            <option value="Gunthas">Gunthas</option>
                            <option value="Acres">Acres</option>
                            <option value="Cents">Cents</option>
                          </select>
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Land Size"
                            value={formData.landSize}
                            onChange={(e) =>
                              setFormData({ ...formData, landSize: e.target.value })
                            }
                            className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-slate-800 text-sm focus:border-brand-blue outline-none placeholder:text-slate-400 shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Row 2: Land Description textarea */}
                      <div>
                        <textarea
                          placeholder="Land Description"
                          rows={3}
                          value={formData.landDescription}
                          onChange={(e) =>
                            setFormData({ ...formData, landDescription: e.target.value })
                          }
                          className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-slate-800 text-sm focus:border-brand-blue outline-none resize-none placeholder:text-slate-400 shadow-xs"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Personal Details */}
                {currentStep === 4 && (
                  <div className="py-1 sm:py-2 animate-fade-in">
                    <h3 className="text-lg sm:text-xl font-bold text-black font-outfit mb-4 text-center">
                      Personal Details
                    </h3>

                    <div className="max-w-xl mx-auto space-y-3.5">
                      {/* Row 1: Name & Phone Number */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <input
                            type="text"
                            placeholder="Name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-slate-800 text-sm focus:border-brand-blue outline-none placeholder:text-slate-400 shadow-xs"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-slate-800 text-sm focus:border-brand-blue outline-none placeholder:text-slate-400 shadow-xs"
                          />
                        </div>
                      </div>

                      {/* Row 2: Email & location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-slate-800 text-sm focus:border-brand-blue outline-none placeholder:text-slate-400 shadow-xs"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="location"
                            value={formData.location}
                            onChange={(e) =>
                              setFormData({ ...formData, location: e.target.value })
                            }
                            className="w-full bg-white border border-slate-300 rounded-[2px] px-3.5 py-2.5 text-slate-800 text-sm focus:border-brand-blue outline-none placeholder:text-slate-400 shadow-xs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Validation message if needed */}
                {stepError && (
                  <div className="max-w-md mx-auto mt-2.5 text-center text-xs font-semibold text-red-600 bg-red-50 py-1.5 px-3 rounded border border-red-200">
                    {stepError}
                  </div>
                )}

                {/* Bottom Navigation Buttons matching exact screenshot styling */}
                <div className="mt-6 sm:mt-7 pt-4 flex items-center justify-between">
                  {/* PREVIOUS Button (solid black) */}
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="bg-black hover:bg-slate-800 active:scale-95 text-white font-bold py-2.5 px-8 sm:px-10 rounded-[2px] text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    PREVIOUS
                  </button>

                  {/* NEXT / SUBMIT Button (Brand Blue per instructions) */}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-brand-blue hover:bg-brand-navy active:scale-95 text-white font-bold py-2.5 px-8 sm:px-10 rounded-[2px] text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    {currentStep === 4 ? 'SUBMIT' : 'NEXT'}
                  </button>
                </div>
              </div>
            ) : (
              /* Success Confirmation View after SUBMIT */
              <div className="text-center py-10 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-black font-outfit mb-2">
                  Request Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name || 'valued customer'}</strong>. Your request for{' '}
                  <strong>{activeRequestService.title}</strong> has been logged. Our engineering and estimation team will contact you at{' '}
                  <strong>{formData.phone}</strong> shortly.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded p-4 max-w-md mx-auto text-left text-xs text-slate-700 mb-6 space-y-1">
                  <div><strong>Service:</strong> {activeRequestService.title}</div>
                  <div><strong>Start Date:</strong> {formData.startDate}</div>
                  <div><strong>Stage:</strong> {formData.currentStage}</div>
                  {formData.landSize && (
                    <div><strong>Land Size:</strong> {formData.landSize} ({formData.landSizeUnit})</div>
                  )}
                  {formData.location && (
                    <div><strong>Location:</strong> {formData.location}</div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    type="button"
                    onClick={() => setActiveRequestService(null)}
                    className="bg-brand-blue hover:bg-brand-navy text-white text-xs font-bold py-2.5 px-6 rounded-[2px] transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    View All Services
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateContact()}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-2.5 px-6 rounded-[2px] transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    Contact Us Directly
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicesPage;
