import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    location: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant response & confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      location: '',
    });
  };

  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden border-b border-slate-200 min-h-[calc(100dvh-64px)] sm:min-h-[calc(100vh-74px)] lg:min-h-[calc(100vh-74px)] flex items-center py-6 xs:py-8 sm:py-12 lg:py-8"
    >
      {/* Complete Hero Section Backdrop using hero image 2.jpeg on desktop/large tablet */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero%20image%202.jpeg')] bg-cover bg-center bg-no-repeat opacity-20 sm:opacity-40 lg:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/95 lg:from-white/75 lg:via-transparent lg:to-white/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.05fr_1.35fr_1fr] items-center gap-6 sm:gap-8 lg:gap-6">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
          <h1 className="font-outfit text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold leading-[1.18] sm:leading-[1.12] text-black mb-2.5 sm:mb-3 tracking-tight animate-flow-right-to-left animation-delay-150">
            THE QUALITY <span className="text-brand-blue">YOU</span> CAN TRUST
          </h1>

          <p className="text-xs xs:text-sm sm:text-base font-bold text-slate-700 tracking-wide mb-3.5 sm:mb-5 animate-flow-right-to-left animation-delay-300">
            "We Build Your Dream Home"
          </p>

          <div className="inline-flex items-center bg-brand-pill text-white px-4 xs:px-5 py-2 xs:py-2.5 rounded-md text-xs sm:text-sm font-extrabold tracking-wider shadow-md shadow-brand-pill/25 animate-flow-right-to-left animation-delay-450 select-none">
            <span>Starts from INR 1785/- SFT</span>
          </div>
        </div>

        {/* Center Focal Showcase Area - couple illustration shown on mobile, hidden on tablet 2-col to avoid squishing, shines through from backdrop on desktop */}
        <div className="flex md:hidden lg:flex justify-center items-center relative z-10 lg:min-h-[380px] w-full">
          <div className="w-full max-w-[240px] xs:max-w-[280px] sm:max-w-sm lg:hidden my-1 xs:my-2">
            <img
              src="/hero%20image%202.jpeg"
              alt="RAM Construction - We Build Your Dream Home"
              className="w-full h-auto max-h-52 xs:max-h-64 sm:max-h-80 object-contain mx-auto mix-blend-multiply rounded-xl"
              loading="eager"
            />
          </div>
        </div>

        {/* Right Floating Callback Card matching user's exact design reference */}
        <div className="flex justify-center md:justify-end w-full pb-1 sm:pb-2">
          <div className="relative w-full max-w-[275px] xs:max-w-[290px] sm:max-w-[305px] animate-flow-top-to-bottom animation-delay-300">
            {/* Top Blue Ribbon Banner */}
            <div className="relative -mx-1.5 xs:-mx-2 z-10">
              <div className="bg-brand-blue text-white py-2 xs:py-2.5 sm:py-3 px-3 text-center shadow-md">
                <h3 className="text-xs xs:text-sm sm:text-[15px] font-bold text-white tracking-wide m-0 font-outfit">
                  Request A Call Back
                </h3>
              </div>
              {/* Left ribbon fold triangle */}
              <div className="absolute left-0 -bottom-1.5 xs:-bottom-2 w-0 h-0 border-t-[6px] xs:border-t-[8px] border-t-brand-dark border-l-[6px] xs:border-l-[8px] border-l-transparent" />
              {/* Right ribbon fold triangle */}
              <div className="absolute right-0 -bottom-1.5 xs:-bottom-2 w-0 h-0 border-t-[6px] xs:border-t-[8px] border-t-brand-dark border-r-[6px] xs:border-r-[8px] border-r-transparent" />
            </div>

            {/* White Card Body */}
            <div className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100/90 px-3.5 xs:px-4 sm:px-5 pt-4 xs:pt-5 pb-5 xs:pb-6 relative z-0">
              {submitted ? (
                <div className="py-5 sm:py-6 text-center flex flex-col items-center gap-2.5 sm:gap-3 text-slate-700">
                  <CheckCircle size={40} className="text-emerald-500 sm:w-11 sm:h-11" />
                  <h4 className="text-sm sm:text-base font-bold text-black">Message Sent!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong>{formData.fullName || 'Valued Client'}</strong>. Our senior construction advisor will call you shortly at {formData.phone || 'your number'}.
                  </p>
                  <button
                    type="button"
                    className="mt-2 text-xs font-bold text-brand-blue hover:underline cursor-pointer"
                    onClick={handleReset}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 xs:gap-3 sm:gap-3.5">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full h-9 xs:h-10 px-3 xs:px-3.5 bg-white border border-slate-200/90 border-l-[4px] xs:border-l-[4.5px] border-l-black rounded-none text-xs sm:text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-slate-400 focus:border-l-black shadow-xs transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-9 xs:h-10 px-3 xs:px-3.5 bg-white border border-slate-200/90 border-l-[4px] xs:border-l-[4.5px] border-l-black rounded-none text-xs sm:text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-slate-400 focus:border-l-black shadow-xs transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-9 xs:h-10 px-3 xs:px-3.5 bg-white border border-slate-200/90 border-l-[4px] xs:border-l-[4.5px] border-l-black rounded-none text-xs sm:text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-slate-400 focus:border-l-black shadow-xs transition-colors"
                    />
                  </div>

                  {/* Select Service Dropdown */}
                  <div className="relative">
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-9 xs:h-10 px-3 xs:px-3.5 bg-white border border-slate-200/90 border-l-[4px] xs:border-l-[4.5px] border-l-black rounded-none text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-slate-400 focus:border-l-black shadow-xs transition-colors appearance-none cursor-pointer pr-8 xs:pr-9"
                    >
                      <option value="" disabled>Select Service</option>
                      <option value="Residential Construction">Residential Construction</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Architecture & Structural">Architecture & Structural</option>
                      <option value="Interior Design Services">Interior Design Services</option>
                      <option value="Villa Turnkey Project">Villa Turnkey Project</option>
                    </select>
                    <div className="absolute right-2.5 xs:right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-800">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full h-9 xs:h-10 px-3 xs:px-3.5 bg-white border border-slate-200/90 border-l-[4px] xs:border-l-[4.5px] border-l-black rounded-none text-xs sm:text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-slate-400 focus:border-l-black shadow-xs transition-colors"
                    />
                  </div>

                  {/* SEND MESSAGE Button in Brand Blue */}
                  <div className="flex justify-center mt-1.5 xs:mt-2 pt-0.5 xs:pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-blue hover:bg-brand-navy active:scale-95 text-white font-bold text-xs sm:text-[13px] tracking-wider uppercase px-6 xs:px-7 py-2 xs:py-2.5 rounded-none shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
