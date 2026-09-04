import React, { useState } from 'react';
import {
  Users,
  HardHat,
  Handshake,
  ShieldCheck,
  BadgeCheck,
  Smartphone,
  Clock,
  Tag,
} from 'lucide-react';

interface ReasonItem {
  id: string;
  title: string;
  desc: string;
  backText: string;
  icon: React.ReactNode;
}

export const WhyChooseUs: React.FC = () => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const reasons: ReasonItem[] = [
    {
      id: 'professional-services',
      title: 'Professional Construction Services',
      desc: 'From concept to completion, we provide expert project management, ensuring flawless execution.',
      backText: 'From concept to completion, we provide expert project management, ensuring flawless execution and timely delivery.',
      icon: <Users size={54} strokeWidth={1.5} className="text-brand-blue" />,
    },
    {
      id: 'no-subcontract',
      title: 'No Work Subcontract',
      desc: 'All work is completed in-house, maintaining strict quality control and seamless coordination.',
      backText: 'All work is completed in-house, maintaining strict quality control and seamless coordination on every project.',
      icon: <HardHat size={54} strokeWidth={1.5} className="text-brand-blue" />,
    },
    {
      id: 'project-coordinator',
      title: 'Dedicated Project Coordinator',
      desc: 'A dedicated professional to simplify communication and keep your project on track.',
      backText: 'A dedicated professional to simplify communication and keep your project on track from start to handover.',
      icon: <Handshake size={54} strokeWidth={1.5} className="text-brand-blue" />,
    },
    {
      id: 'fully-insured',
      title: 'Fully Insured Projects',
      desc: 'Comprehensive insurance coverage for all construction and material activities on site.',
      backText: 'Every project is fully insured, providing you with complete peace of mind.',
      icon: <ShieldCheck size={54} strokeWidth={1.5} className="text-brand-blue" />,
    },
    {
      id: 'transparency',
      title: '100% Transparency',
      desc: 'Open communication and regular updates keep you informed every step of the way.',
      backText: 'Open communication and regular updates keep you informed every step of the way with zero hidden surprises.',
      icon: <BadgeCheck size={54} strokeWidth={1.5} className="text-brand-blue" />,
    },
    {
      id: 'digital-tracking',
      title: 'Digital Tracking',
      desc: "Real-time progress tracking ensures you're always in the loop.",
      backText: "Real-time progress tracking ensures you're always in the loop with live site milestones and documentation.",
      icon: <Smartphone size={54} strokeWidth={1.5} className="text-brand-blue" />,
    },
    {
      id: 'quality-assurance',
      title: 'Quality Assurance',
      desc: 'We adhere to the highest industry standards in every aspect of construction.',
      backText: 'We adhere to the highest industry standards in every aspect of construction with rigorous multi-tier quality checks.',
      icon: <Clock size={54} strokeWidth={1.5} className="text-brand-blue" />,
    },
    {
      id: 'pricing-models',
      title: 'Flexible Pricing Models',
      desc: 'Tailored pricing options designed to suit your unique needs and budget.',
      backText: 'Tailored pricing options designed to suit your unique needs and budget with complete cost clarity.',
      icon: <Tag size={54} strokeWidth={1.5} className="text-brand-blue" />,
    },
  ];

  const handleCardClick = (id: string) => {
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="why-us" className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header with Logo Theme Accent */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="font-outfit text-[30px] font-normal text-brand-navy uppercase tracking-tight mb-2 pb-[5px]"
            style={{ fontSize: '30px', fontWeight: 400, paddingBottom: '5px' }}
          >
            WHY CHOOSE US
          </h2>
          <div className="w-14 h-1 bg-brand-blue mx-auto rounded-full mb-4" />
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At the heart of our services is a commitment to excellence, transparency,
            and customer satisfaction. Here&apos;s why we stand out:
          </p>
        </div>

        {/* 4-column Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const isFlipped = flippedCardId === item.id;
            return (
              <div
                key={item.id}
                className={`group perspective-1000 h-[260px] w-full cursor-pointer ${isFlipped ? 'flipped' : ''}`}
                onClick={() => handleCardClick(item.id)}
              >
                <div className="flip-card-inner rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Front Face */}
                  <div className="flip-card-front bg-white border border-slate-200/80 p-2 flex flex-col items-center justify-center text-center">
                    <div className="mb-2 text-brand-blue flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-outfit text-base sm:text-[17px] font-bold text-brand-navy mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p
                      className="line-clamp-3 text-center transition-transform duration-300 ease-out"
                      style={{
                        fontFamily: '"Roboto", sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#555555',
                        lineHeight: '24px',
                        transition: 'transform 0.3s ease',
                        display: '-webkit-box',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  {/* Back Face (Brand Navy matching logo palette) */}
                  <div className="flip-card-back bg-brand-navy text-white p-2 flex items-center justify-center text-center shadow-lg">
                    <p className="font-medium text-sm sm:text-[15px] text-white leading-relaxed max-w-[220px]">
                      {item.backText}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
