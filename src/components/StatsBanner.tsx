import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

export const StatsBanner: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 'clients',
      target: 350,
      suffix: '+',
      label: 'Happy Clients',
      icon: (
        <svg className="w-11 h-11 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* 3 stars on top */}
          <polygon points="12 2 13 4.5 15.5 4.8 13.7 6.5 14.2 9 12 7.7 9.8 9 10.3 6.5 8.5 4.8 11 4.5 12 2" />
          <polygon points="5 4 5.8 5.7 7.7 5.9 6.3 7.2 6.7 9.1 5 8.1 3.3 9.1 3.7 7.2 2.3 5.9 4.2 5.7 5 4" />
          <polygon points="19 4 19.8 5.7 21.7 5.9 20.3 7.2 20.7 9.1 19 8.1 17.3 9.1 17.7 7.2 16.3 5.9 18.2 5.7 19 4" />
          {/* People group */}
          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="10" cy="11" r="3" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 8.13a3 3 0 0 1 0 5.74" />
        </svg>
      ),
    },
    {
      id: 'projects',
      target: 120,
      suffix: '+',
      label: 'Completed Projects',
      icon: (
        <svg className="w-11 h-11 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
          <circle cx="12" cy="7" r="1.5" />
          {/* Shield */}
          <path d="M17 14l2.5 1.5v3c0 2-2.5 3.5-2.5 3.5s-2.5-1.5-2.5-3.5v-3L17 14z" />
        </svg>
      ),
    },
    {
      id: 'community',
      target: 500,
      suffix: '+',
      label: 'Community',
      icon: (
        <svg className="w-11 h-11 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="7" r="2.5" />
          <circle cx="19" cy="7" r="2.5" />
          <circle cx="5" cy="17" r="2.5" />
          <circle cx="19" cy="17" r="2.5" />
          <line x1="7.2" y1="8.3" x2="9.8" y2="10.2" />
          <line x1="16.8" y1="8.3" x2="14.2" y2="10.2" />
          <line x1="7.2" y1="15.7" x2="9.8" y2="13.8" />
          <line x1="16.8" y1="15.7" x2="14.2" y2="13.8" />
        </svg>
      ),
    },
    {
      id: 'area',
      target: 85000,
      suffix: '+',
      label: 'Built Up Area',
      icon: (
        <svg className="w-11 h-11 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Dashed outer measurement frame */}
          <rect x="3" y="3" width="18" height="18" rx="1.5" strokeDasharray="3 3" />
          {/* Diagonal double arrows */}
          <path d="M7 17L17 7" />
          <path d="M11 7h6v6" />
          <path d="M13 17H7v-6" />
        </svg>
      ),
    },
    {
      id: 'experience',
      target: 15,
      suffix: '+',
      label: 'Experience',
      icon: (
        <svg className="w-11 h-11 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8.5" r="5.5" />
          <path d="M15.5 13.5L17.5 22l-5.5-3-5.5 3 2-8.5" />
          {/* Stars on top */}
          <polygon points="12 4 12.6 5.3 14 5.5 13 6.4 13.3 7.8 12 7.1 10.7 7.8 11 6.4 10 5.5 11.4 5.3 12 4" />
          <polygon points="7.5 5.5 8 6.5 9 6.6 8.2 7.3 8.4 8.3 7.5 7.8 6.6 8.3 6.8 7.3 6 6.6 7 6.5 7.5 5.5" />
          <polygon points="16.5 5.5 17 6.5 18 6.6 17.2 7.3 17.4 8.3 16.5 7.8 15.6 8.3 15.8 7.3 15 6.6 16 6.5 16.5 5.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-12 bg-slate-950 overflow-hidden text-white">
      {/* City Skyline Night Photo Backdrop matching screenshot */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&auto=format&fit=crop&q=80')`,
        }}
      />
      {/* Dark tint overlay allowing the city lights to shine through */}
      <div className="absolute inset-0 bg-slate-950/65 backdrop-brightness-75" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* 5 Framed Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 justify-items-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="w-full max-w-[190px] bg-transparent border-t-2 border-l-2 border-white border-b-2 border-r-2 border-brand-accent hover:border-brand-blue transition-all duration-300 py-4 px-2 sm:py-5 sm:px-3 flex flex-col items-center justify-between text-center group hover:-translate-y-1"
            >
              {/* White Outline Icon at Top */}
              <div className="flex items-center justify-center mb-2 sm:mb-2.5 group-hover:scale-105 transition-transform">
                {stat.icon}
              </div>

              {/* Animated Counting Value */}
              <div className="font-outfit text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-accent tracking-tight leading-none mb-1.5 sm:mb-2">
                <CountUp end={stat.target} suffix={stat.suffix} duration={2200} />
              </div>

              {/* Label at Bottom */}
              <div className="font-outfit text-[11px] sm:text-xs font-bold text-white tracking-wide uppercase leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
