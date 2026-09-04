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
    <section id="home" className="relative bg-white overflow-hidden border-b border-slate-200 min-h-[calc(100vh-74px)] lg:h-[calc(100vh-74px)] flex items-center">
      {/* Complete Hero Section Backdrop using hero image 2.jpeg */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero%20image%202.jpeg')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1.35fr_1fr] items-center gap-8">
        {/* Left Content */}
        <div className="flex flex-col items-start">
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-[46px] font-extrabold leading-[1.12] text-brand-navy mb-3 tracking-tight">
            THE QUALITY <span className="text-brand-blue">YOU</span> CAN TRUST
          </h1>

          <p className="text-sm sm:text-base font-bold text-slate-700 tracking-wide mb-5">
            "We Build Your Dream Home"
          </p>

          <a
            href="https://livnext.in/#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-brand-pill hover:bg-brand-blue text-white px-5 py-2.5 rounded-md text-xs sm:text-sm font-extrabold tracking-wider w-fit shadow-md shadow-brand-pill/25 transition-all hover:shadow-lg cursor-pointer"
          >
            <span>Starts from INR 1785/- SFT</span>
          </a>
        </div>

        {/* Center Focal Showcase Area - Hero Couple shines through from backdrop on desktop, displayed inline on mobile */}
        <div className="flex justify-center items-center relative z-10 lg:min-h-[380px]">
          <div className="block md:hidden w-full my-4">
            <img
              src="/hero%20image%202.jpeg"
              alt="RAM Construction - We Build Your Dream Home"
              className="w-full h-auto max-h-80 object-contain mx-auto mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right Floating Callback Card matching reference design */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden w-full max-w-[340px]">
            <div className="bg-brand-blue text-white py-3.5 px-5 text-center border-b-2 border-brand-navy">
              <h3 className="text-base font-bold text-white tracking-wide m-0">Request A Call Back</h3>
            </div>

            {submitted ? (
              <div className="p-6 text-center flex flex-col items-center gap-3 text-slate-700">
                <CheckCircle size={48} className="text-emerald-500" />
                <h4 className="text-lg font-bold text-brand-navy">Request Received!</h4>
                <p className="text-xs text-slate-600">
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
              <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-3">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full h-10 px-3.5 border border-slate-300 rounded-md text-sm text-slate-800 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3.5 border border-slate-300 rounded-md text-sm text-slate-800 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-10 px-3.5 border border-slate-300 rounded-md text-sm text-slate-800 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors"
                  />
                </div>

                <div>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-10 px-3.5 border border-slate-300 rounded-md text-sm text-slate-800 bg-white focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors"
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Architecture & Structural">Architecture & Structural</option>
                    <option value="Interior Design Services">Interior Design Services</option>
                    <option value="Villa Turnkey Project">Villa Turnkey Project</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full h-10 px-3.5 border border-slate-300 rounded-md text-sm text-slate-800 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-brand-navy hover:bg-brand-blue text-white rounded-md text-xs font-extrabold tracking-wider transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer mt-1"
                >
                  {isSubmitting ? 'PROCESSING...' : 'REQUEST A CALL BACK'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
