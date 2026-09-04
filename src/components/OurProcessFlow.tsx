import React from 'react';
import {
  MessagesSquare,
  PencilRuler,
  Calculator,
  CalendarClock,
  Workflow,
  KeyRound,
} from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  desc?: string;
  icon: React.ReactNode;
}

export const OurProcessFlow: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      step: '01',
      title: 'Initial Consultation',
      icon: <MessagesSquare size={42} strokeWidth={1.6} className="text-brand-navy group-hover:text-brand-blue transition-colors" />,
    },
    {
      step: '02',
      title: 'Design & Planning',
      icon: <PencilRuler size={42} strokeWidth={1.6} className="text-brand-navy group-hover:text-brand-blue transition-colors" />,
    },
    {
      step: '03',
      title: 'Cost Estimation',
      icon: <Calculator size={42} strokeWidth={1.6} className="text-brand-navy group-hover:text-brand-blue transition-colors" />,
    },
    {
      step: '04',
      title: 'Schedule & Timeline',
      icon: <CalendarClock size={42} strokeWidth={1.6} className="text-brand-navy group-hover:text-brand-blue transition-colors" />,
    },
    {
      step: '05',
      title: 'Work Execution',
      icon: <Workflow size={42} strokeWidth={1.6} className="text-brand-navy group-hover:text-brand-blue transition-colors" />,
    },
    {
      step: '06',
      title: 'Handover',
      icon: <KeyRound size={42} strokeWidth={1.6} className="text-brand-navy group-hover:text-brand-blue transition-colors" />,
    },
  ];

  return (
    <section id="process" className="py-12 bg-[#fbfdfd] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header matching reference screenshot */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="font-outfit text-[30px] font-normal text-brand-navy uppercase tracking-tight mb-2 pb-[5px]"
            style={{ fontSize: '30px', fontWeight: 400, paddingBottom: '5px' }}
          >
            OUR PROCESS FLOW
          </h2>
          <div className="w-14 h-1 bg-brand-blue mx-auto rounded-full mb-4" />
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            RAM Construction: Build Your &apos;Dream Home&apos; India&apos;s No.1 tech powered construction company.
          </p>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            One-stop Tech-Based Construction and Design Services
          </p>
        </div>

        {/* 6 Steps Horizontal Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center text-center group cursor-pointer w-full max-w-[170px]"
            >
              {/* Circular Icon Container with Number Badge */}
              <div className="relative mb-4">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-brand-light/80 border-2 border-white shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Number Badge at Top-Right (matching logo theme) */}
                <span className="absolute -top-1 -right-1 sm:top-0 sm:right-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-blue group-hover:bg-brand-navy text-white text-xs sm:text-sm font-extrabold flex items-center justify-center shadow-md transition-colors duration-300">
                  {item.step}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-outfit font-bold text-sm sm:text-base text-brand-navy group-hover:text-brand-blue transition-colors leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcessFlow;
