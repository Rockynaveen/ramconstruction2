import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const ClientsReview: React.FC = () => {
  const reviews: Review[] = [
    {
      id: '1',
      quote:
        'During the course of our Dream Home, They maintained the highest standards of quality, value, professionalism, safety, and cleanliness. Our project was completed on schedule and under budget. you are hiring your dreams and goals.',
      author: 'Anjani Mudgal',
      role: 'Business',
    },
    {
      id: '2',
      quote:
        'We believe that SR Housing & Constructions offered the best value for my Dream Home by offering latest technology, best quality materials and truly professional work. We highly recommend SRHousing andConstructions.',
      author: 'THATIPARTHI ANITHA',
      role: 'Business',
    },
    {
      id: '3',
      quote:
        'Flawless execution from planning to key handover. The structural engineering team accommodated all our requirements without any compromise on modern design and architectural integrity.',
      author: 'Suresh Reddy',
      role: 'Homeowner',
    },
    {
      id: '4',
      quote:
        'Their commercial construction speed and MEP integration was world-class. Handed over ahead of our targeted launch date with zero cost escalations.',
      author: 'Vikram Singh',
      role: 'Real Estate Developer',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= reviews.length - 2 ? 0 : prev + 1));
  };

  // Show 2 cards at a time on desktop
  const visibleReviews = [
    reviews[currentIndex % reviews.length],
    reviews[(currentIndex + 1) % reviews.length],
  ];

  return (
    <section id="reviews" className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_2fr] gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Description */}
          <div className="flex flex-col items-start pr-0 lg:pr-6">
            <h2
              className="font-outfit text-[30px] font-normal text-brand-navy tracking-tight mb-5 pb-[5px]"
              style={{ fontSize: '30px', fontWeight: 400, paddingBottom: '5px' }}
            >
              Clients Review
            </h2>
            <p
              className="text-sm sm:text-[16px] text-[#555555] leading-[24px] font-normal"
              style={{
                fontFamily: '"Roboto", sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                color: '#555555',
                lineHeight: '24px',
              }}
            >
              At Livnext Home Construction, we specialize in creating exceptional homes
              that blend modern design with functional spaces. Our team of expert architects
              and builders is committed to delivering high-quality construction services that
              exceed expectations. From the initial design phase to the final touches, we
              ensure every detail is meticulously planned and executed.
            </p>
          </div>

          {/* Right Column: Review Cards & Carousel Controls */}
          <div className="flex flex-col">
            {/* 2 Review Cards Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {visibleReviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white border border-brand-blue/70 hover:border-brand-blue p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 min-h-[260px]"
                >
                  {/* Review Quote */}
                  <p
                    className="text-sm sm:text-[16px] text-[#555555] leading-[24px] mb-6 font-normal"
                    style={{
                      fontFamily: '"Roboto", sans-serif',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#555555',
                      lineHeight: '24px',
                    }}
                  >
                    {review.quote}
                  </p>

                  {/* Author & Role (Right-aligned as in screenshot) */}
                  <div className="text-right mt-auto">
                    <h4 className="font-outfit text-sm sm:text-base font-bold text-brand-blue tracking-wide m-0">
                      {review.author}
                    </h4>
                    <p className="text-xs font-semibold text-slate-800 m-0 mt-0.5">
                      {review.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Carousel Arrows (Square buttons matching screenshot) */}
            <div className="flex items-center gap-1.5 mt-2">
              <button
                type="button"
                className="w-8 h-8 rounded-none border border-slate-900 bg-brand-blue hover:bg-brand-navy text-white flex items-center justify-center cursor-pointer transition-colors shadow-xs"
                onClick={handlePrev}
                aria-label="Previous Reviews"
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-none border border-slate-900 bg-brand-blue hover:bg-brand-navy text-white flex items-center justify-center cursor-pointer transition-colors shadow-xs"
                onClick={handleNext}
                aria-label="Next Reviews"
              >
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsReview;
