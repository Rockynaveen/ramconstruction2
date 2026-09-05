import React from 'react';
import { Breadcrumb } from './Breadcrumb';

interface AboutPageProps {
  onNavigateHome: (targetSection?: string) => void;
  onNavigateContact?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Top Hero Banner with Dynamic Breadcrumb */}
      <Breadcrumb
        title="ABOUT US"
        items={[
          { label: 'HOME', onClick: () => onNavigateHome('home') },
          { label: 'ABOUT US', active: true },
        ]}
      />

      {/* 1. About Us Section (Matching the Home Page AboutUs Section as requested) */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 xl:gap-24 items-center">
          {/* Left Visual Composition - Overlapping Blue-Bordered Photos */}
          <div className="relative w-fit max-w-full mx-auto lg:mx-0 pt-1 shrink-0">
            {/* Top-Left Photo */}
            <div className="w-36 xs:w-48 sm:w-56 h-48 xs:h-60 sm:h-68 rounded-2xl border-[3.5px] border-brand-navy overflow-hidden shadow-md bg-white relative z-0">
              <img
                src="/about-couple.jpg"
                alt="Engineers and homeowners reviewing architectural plans"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Bottom-Right Photo: Touching the bottom-right corner of top photo */}
            <div className="w-32 xs:w-44 sm:w-52 h-44 xs:h-56 sm:h-64 rounded-2xl border-[3.5px] border-brand-navy overflow-hidden shadow-xl bg-white -mt-6 sm:-mt-8 ml-14 xs:ml-24 sm:ml-32 relative z-10">
              <img
                src="/about-keys.jpg"
                alt="Hands holding keys and miniature house model"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start lg:pl-4">
            <h2 className="text-[26px] sm:text-[30px] font-bold text-slate-900 uppercase mb-3 tracking-tight font-outfit">
              ABOUT US
            </h2>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-2.5">
              RAM Construction, formerly known as SR Housing and Constructions. With over a decade of expertise in delivering exceptional home construction projects, we are proud to be recognized as a trusted name in the industry.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-2.5">
              At RAM Construction, we specialize in turning visions into reality, offering end-to-end solutions for building homes that are not just structures but meaningful spaces that reflect your personality, dreams, and aspirations.
            </p>

            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              Our journey, rooted in years of commitment and excellence, has enabled us to craft homes that stand as landmarks of quality and innovation. From conceptualizing the design to laying the foundation and adding the finishing touches, we take pride in delivering projects that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission, Vision, Value Section (Alternating Zigzag Layout) */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
          {/* Row 1: OUR MISSION (Image Left, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="w-full max-w-md h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-50">
                <img
                  src="/mission-img.jpg"
                  alt="Our Mission Target Concept"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight mb-1.5 font-outfit">
                OUR MISSION
              </h3>
              <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                At RAM Construction, we don't just build—we create lasting foundations for lifelong happiness. Our mission is to craft spaces where life's most cherished moments unfold. By focusing on innovation, quality, and heartfelt service, we transform dreams into reality. We are committed to building not just structures, but sanctuaries of comfort and love. With a dedication to transparency, reliability, and cutting-edge technology, we ensure every journey is one filled with trust and joy.
              </p>
            </div>
          </div>

          {/* Row 2: OUR VISION (Text Left, Image Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
            <div className="md:col-span-7 order-2 md:order-1 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight mb-1.5 font-outfit">
                OUR VISION
              </h3>
              <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                Our vision is to be the leading creator of spaces that inspire joy, comfort, and lasting memories. We envision a future where every RAM Construction project serves as a sanctuary—a place where people feel truly at home, surrounded by innovation and love. Through constant evolution, we aim to set new benchmarks for excellence, transparency, and trust in the industry, ensuring every client's dream becomes a reality.
              </p>
            </div>
            <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
              <div className="w-full max-w-md h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-50">
                <img
                  src="/vision-img.jpg"
                  alt="Our Vision Lens Perspective"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Row 3: OUR VALUE (Image Left, Text Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="w-full max-w-md h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-50">
                <img
                  src="/value-img.jpg"
                  alt="Our Value Core Principles"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 uppercase tracking-tight mb-1.5 font-outfit">
                OUR VALUE
              </h3>
              <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                At RAM Construction, our core values guide us in crafting spaces that embody quality, trust, and purpose. We uphold excellence with superior craftsmanship, transparency, and ethical practices, tailoring every project to reflect your dreams. By blending innovation with thoughtful design, we deliver impactful, future-ready results. Committed to sustainability and reliability, we create eco-friendly spaces with care and empathy, ensuring on-time delivery without compromise. At RAM Construction, we go beyond building homes—we create environments where life, memories, and dreams thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Team Section */}
      <section className="py-9 sm:py-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Heading with Brand Blue Accent Bar */}
          <div className="text-center mb-7 sm:mb-9">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase tracking-tight font-outfit">
              LEADERSHIP TEAM
            </h2>
            <div className="w-16 h-1 bg-brand-blue mx-auto mt-2 rounded-full" />
          </div>

          {/* Leaders List */}
          <div className="space-y-6 sm:space-y-7">
            {/* Leader 1: Mallareddy D */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/70">
              <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center">
                <div className="w-48 sm:w-56 overflow-hidden rounded-xl shadow-md border border-slate-200/90 bg-white">
                  <div className="h-52 sm:h-56 overflow-hidden bg-slate-100">
                    <img
                      src="/leader-mallareddy.jpg"
                      alt="Mallareddy D - Managing Director"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-brand-blue text-white py-2.5 px-3 text-center">
                    <h3 className="font-bold text-[15px] leading-snug tracking-wide">
                      Mallareddy D
                    </h3>
                    <p className="text-xs font-normal text-white/90 mt-0.5">
                      Managing Director
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center space-y-2">
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                  Mallareddy is a seasoned professional with over 16 years of experience in engineering and construction management, specializing in turning client dreams into reality. Starting with hands-on roles, he gained deep practical insights, building a solid foundation in construction processes. Transitioning to leadership, he has excelled in managing diverse teams, budgets, and regulatory requirements, ensuring seamless project execution. What sets him apart is his dedication to creating homes that reflect his clients' aspirations. With precision, integrity, and heart, Mallareddy continues to deliver exceptional results in every project.
                </p>
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                  With a passion for excellence, Mallareddy combines technical expertise with a strong commitment to customer satisfaction. He consistently demonstrates a keen ability to navigate complex challenges, delivering projects on time and within budget. His hands-on approach, coupled with his leadership skills, ensures that every aspect of the construction process aligns with the client's vision. Known for his meticulous attention to detail and unwavering integrity, Mallareddy builds not just structures, but lasting relationships with clients, grounded in trust and mutual respect. His goal is always to create spaces that inspire pride and joy for those who call them home.
                </p>
              </div>
            </div>

            {/* Leader 2: Shashidharreddy G */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/70">
              <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center">
                <div className="w-48 sm:w-56 overflow-hidden rounded-xl shadow-md border border-slate-200/90 bg-white">
                  <div className="h-52 sm:h-56 overflow-hidden bg-slate-100">
                    <img
                      src="/leader-shashidhar.jpg"
                      alt="Shashidharreddy G - Director"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-brand-blue text-white py-2.5 px-3 text-center">
                    <h3 className="font-bold text-[15px] leading-snug tracking-wide">
                      Shashidharreddy G
                    </h3>
                    <p className="text-xs font-normal text-white/90 mt-0.5">
                      Director
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center space-y-2">
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                  Shashidhar Reddy, with over 6 years of experience in construction management, is known for delivering exceptional projects with precision and quality. Skilled in project planning, scheduling, and budget management, he ensures timely and cost-effective execution. His leadership fosters teamwork and innovation, driving outstanding results. Committed to client satisfaction, Shashidhar's meticulous approach and streamlined workflows consistently elevate project outcomes.
                </p>
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                  Shashidhar Reddy's dedication to excellence is reflected in his ability to manage complex projects from conception to completion. His proactive problem-solving skills and attention to detail ensure that each project meets the highest standards of quality and efficiency. By leveraging the latest technologies and best practices in construction, Shashidhar ensures that every aspect of a project is optimized for success. His clear communication and collaborative leadership style create a positive and productive work environment, allowing teams to consistently deliver exceptional results. With a focus on building lasting relationships with clients, Shashidhar continues to make a significant impact in the construction industry.
                </p>
              </div>
            </div>

            {/* Leader 3: Sandeep Kumar A */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/70">
              <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center">
                <div className="w-48 sm:w-56 overflow-hidden rounded-xl shadow-md border border-slate-200/90 bg-white">
                  <div className="h-52 sm:h-56 overflow-hidden bg-slate-100">
                    <img
                      src="/leader-sandeep.jpg"
                      alt="Sandeep Kumar A - Head- Finance & Operations"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-brand-blue text-white py-2.5 px-3 text-center">
                    <h3 className="font-bold text-[15px] leading-snug tracking-wide">
                      Sandeep Kumar A
                    </h3>
                    <p className="text-xs font-normal text-white/90 mt-0.5">
                      Head- Finance & Operations
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center space-y-2">
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                  Sandeep Alvi is a seasoned professional with 18 years of expertise in finance and operations across the construction and IT industries. His proficiency spans financial planning, budgeting, and operational management, ensuring streamlined processes and optimized resource utilization. Sandeep has a proven track record of driving efficiency, maintaining fiscal discipline, and aligning operational strategies with organizational goals. Known for his analytical acumen and leadership, he excels in navigating complex financial landscapes while fostering collaboration across teams. With his extensive experience, Sandeep plays a pivotal role in delivering sustainable growth and operational excellence.
                </p>
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                  Throughout his career, Sandeep Alvi has consistently demonstrated a strong ability to lead cross-functional teams, ensuring seamless collaboration between finance, operations, and management. His strategic insights and meticulous approach have enabled organizations to achieve cost savings, improve operational efficiency, and enhance overall financial performance. Sandeep's ability to adapt to evolving market conditions and his commitment to continuous improvement have positioned him as a key driver of success within both the construction and IT sectors. His dedication to fostering a culture of innovation, accountability, and excellence makes him an invaluable asset to any organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
