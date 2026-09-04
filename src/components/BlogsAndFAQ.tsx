import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

interface Blog {
  id: string;
  day: string;
  month: string;
  title: string;
  image: string;
  summary: string;
}

export const BlogsAndFAQ: React.FC = () => {
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null);

  const blogs: Blog[] = [
    {
      id: 'b1',
      day: '05',
      month: 'Jan',
      title: "A Beginner's Guide To Home Construction",
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80',
      summary: 'Essential foundational insights on plot soil checks, municipal sanction approvals, selecting structural engineers, and choosing the right grade of cement and steel.'
    },
    {
      id: 'b2',
      day: '09',
      month: 'Feb',
      title: 'A Step-by-Step Guide To Building Construction',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
      summary: 'From deep excavation and footing to RCC slab casting, brickwork, electrical conduit mapping, plastering, curing, and final interior handover.'
    },
    {
      id: 'b3',
      day: '01',
      month: 'Mar',
      title: 'Building On A Budget: How To Prioritize Your Spend',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
      summary: 'Learn where to invest heavily (structural safety, waterproofing, foundation) and where to optimize smartly without sacrificing quality or aesthetics.'
    }
  ];

  return (
    <section id="blogs" className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-brand-navy uppercase tracking-tight mb-2">
            LATEST BLOGS
          </h2>
          <div className="w-14 h-1 bg-brand-blue mx-auto rounded-full mb-4" />
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Stay informed with expert insights, building guides, and industry trends from our construction team.
          </p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5 cursor-pointer"
              onClick={() => setActiveBlog(blog)}
            >
              <div className="relative w-full h-52 overflow-hidden shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-brand-navy/90 text-white rounded-lg px-2.5 py-1 text-center backdrop-blur-sm shadow-md flex flex-col leading-none">
                  <span className="font-outfit text-base font-extrabold">{blog.day}</span>
                  <span className="text-[10px] uppercase font-bold text-sky-300">{blog.month}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-outfit text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-3 line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {blog.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue group-hover:text-brand-navy transition-colors">
                    Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {activeBlog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActiveBlog(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="absolute top-4 right-4 z-10 bg-black/60 text-white hover:bg-black p-2 rounded-full cursor-pointer transition-colors"
              onClick={() => setActiveBlog(null)}
              aria-label="Close article modal"
            >
              <X size={20} />
            </button>
            <div className="relative h-60 w-full">
              <img src={activeBlog.image} alt={activeBlog.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-brand-navy/90 text-white rounded-lg px-3 py-1.5 text-center backdrop-blur-sm shadow-md flex flex-col leading-none">
                <span className="font-outfit text-lg font-extrabold">{activeBlog.day}</span>
                <span className="text-[10px] uppercase font-bold text-sky-300">{activeBlog.month}</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-outfit text-2xl font-extrabold text-brand-navy mb-4">{activeBlog.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{activeBlog.summary}</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                When embarking on any construction endeavor, having an experienced partner who prioritizes structural integrity, code compliance, and budgetary discipline is paramount. RAM Construction is committed to keeping every homeowner and commercial developer informed and confident at every phase.
              </p>
              <div>
                <a
                  href="#contact"
                  className="block w-full text-center bg-brand-navy hover:bg-brand-blue text-white py-3.5 rounded-xl text-xs font-bold tracking-wider transition-colors shadow-md"
                  onClick={() => setActiveBlog(null)}
                >
                  Consult Our Experts
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogsAndFAQ;
