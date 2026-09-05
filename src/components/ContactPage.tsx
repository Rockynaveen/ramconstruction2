import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

import { Breadcrumb } from './Breadcrumb';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[0-9+\s()-]+$/, 'Please enter a valid phone number'),
  subject: z.string().trim().optional(),
  message: z.string().trim().min(5, 'Message must be at least 5 characters'),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

interface ContactPageProps {
  onNavigateHome: (targetSection?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [submittedData, setSubmittedData] = useState<ContactFormInputs | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const onSubmit = async (data: ContactFormInputs) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmittedData(data);
  };

  const handleReset = () => {
    setSubmittedData(null);
    reset();
  };

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Top Banner with Reusable Breadcrumb Component */}
      <Breadcrumb
        title="CONTACT US"
        items={[
          { label: 'HOME', onClick: () => onNavigateHome('home') },
          { label: 'CONTACT US', active: true },
        ]}
      />

      {/* Main Form & Corporate Office Section matching exact reference format */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Form (approx 65% width = 8 cols) */}
          <div className="lg:col-span-8">
            {submittedData ? (
              <div className="bg-slate-50 border border-slate-200 rounded p-8 sm:p-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3.5">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black font-outfit mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong>{submittedData.name}</strong>. Your inquiry has been received by RAM Construction. Our team will contact you at <strong>{submittedData.phone || submittedData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-brand-blue hover:bg-brand-navy text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded transition-colors cursor-pointer uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      {...register('name')}
                      className={`w-full h-11 px-3.5 text-xs sm:text-sm bg-white border rounded-[3px] text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500 focus:border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-slate-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register('email')}
                      className={`w-full h-11 px-3.5 text-xs sm:text-sm bg-white border rounded-[3px] text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-slate-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone number and Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="phone number"
                      {...register('phone')}
                      className={`w-full h-11 px-3.5 text-xs sm:text-sm bg-white border rounded-[3px] text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-slate-500'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      {...register('subject')}
                      className={`w-full h-11 px-3.5 text-xs sm:text-sm bg-white border rounded-[3px] text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500 focus:border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-slate-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div>
                  <textarea
                    rows={6}
                    placeholder="Message"
                    {...register('message')}
                    className={`w-full p-3.5 text-xs sm:text-sm bg-white border rounded-[3px] text-slate-800 placeholder:text-slate-400 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500 focus:border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-slate-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.message.message}</p>
                  )}
                </div>

                {/* Row 4: Full-Width Brand Blue SEND MESSAGE Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue hover:bg-brand-navy text-white font-extrabold text-xs sm:text-sm tracking-wider py-3 rounded-[3px] transition-colors uppercase cursor-pointer disabled:opacity-75 shadow-sm"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: CORPORATE OFFICE : (approx 35% width = 4 cols) */}
          <div className="lg:col-span-4 pl-0 lg:pl-4">
            <h2 className="text-sm sm:text-[15px] font-extrabold text-black uppercase tracking-wider mb-6 font-outfit">
              CORPORATE OFFICE :
            </h2>

            <div className="space-y-5 text-xs sm:text-[13.5px] text-slate-700 leading-relaxed font-normal">
              {/* Address with MapPin */}
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-slate-800 shrink-0 mt-0.5" />
                <p className="m-0 leading-[21px] text-slate-800 font-medium">
                  72/141 , 4th Floor, Above KFC, LB Nagar - Uppal Rd, Nagole, Uppal Mandal, Hyderabad, Telangana 500068
                </p>
              </div>

              {/* Telephone with Phone */}
              <div className="flex items-center gap-3">
                <Phone size={19} className="text-slate-800 shrink-0" />
                <p className="m-0 text-slate-800 font-medium">
                  Telephone :{' '}
                  <a
                    href="tel:+919885553600"
                    className="text-slate-800 hover:text-brand-blue transition-colors"
                  >
                    +91-9885553600
                  </a>
                </p>
              </div>

              {/* Email with Mail */}
              <div className="flex items-center gap-3">
                <Mail size={19} className="text-slate-800 shrink-0" />
                <p className="m-0 text-slate-800 font-medium">
                  Email :{' '}
                  <a
                    href="mailto:ramconstructionshyd@gmail.com"
                    className="text-slate-800 hover:text-brand-blue transition-colors"
                  >
                    info@ramconstructions.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
