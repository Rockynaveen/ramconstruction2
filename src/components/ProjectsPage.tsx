import React, { useState } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { MapPin, X, CheckCircle2, Hammer, ChevronRight } from 'lucide-react';

export type ProjectStatus = 'ongoing' | 'completed';

export interface ProjectItem {
  id: string;
  title: string;
  status: ProjectStatus;
  statusLabel: string;
  progressPercent?: number;
  location: string;
  area: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
}

interface ProjectsPageProps {
  initialFilter?: 'all' | 'ongoing' | 'completed';
  onNavigateHome: (targetSection?: string) => void;
  onNavigateContact: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  initialFilter = 'all',
  onNavigateHome,
  onNavigateContact,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ongoing' | 'completed'>(initialFilter);
  const [prevInitialFilter, setPrevInitialFilter] = useState(initialFilter);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  if (initialFilter !== prevInitialFilter) {
    setPrevInitialFilter(initialFilter);
    setActiveFilter(initialFilter);
  }

  const projects: ProjectItem[] = [
    {
      id: 'proj-ong-1',
      title: 'Emerald Bay Luxury Villa',
      status: 'ongoing',
      statusLabel: 'Structural RCC & Framing Stage',
      progressPercent: 65,
      location: 'Jubilee Hills, Hyderabad',
      area: '12,500 Sft (G+3 Luxury Villa)',
      category: 'Residential Construction',
      image: '/ongoing-structural.jpg',
      description:
        'Turnkey structural execution of an ultra-luxury multi-level contemporary hillside villa featuring cantilevered concrete decks, panoramic terrace views, and reinforced structural engineering.',
      highlights: [
        'High-grade Fe 550D TMT rebar with earthquake-resistant RCC design',
        'Multi-level stepped cantilever architectural structure',
        'Safety engineered perimeter scaffolding with active on-site supervision',
        'Waterproofing and exterior concrete formwork in progress',
      ],
    },
    {
      id: 'proj-ong-2',
      title: 'The Skyview Penthouse & Suites',
      status: 'ongoing',
      statusLabel: 'Interior Fit-out & Cabinetry Stage',
      progressPercent: 85,
      location: 'Hitec City, Hyderabad',
      area: '6,800 Sft (Duplex Penthouse)',
      category: 'Interior Design & Fit-out',
      image: '/ongoing-interior.jpg',
      description:
        'High-end bespoke interior architecture featuring custom American walnut paneling, Italian Statuario marble accent claddings, and concealed smart HVAC and acoustic ceiling integrations.',
      highlights: [
        'Custom modular floor-to-ceiling walnut library and entertainment wall',
        'Book-matched Statuario marble wall panelling installation',
        'Concealed conduit electrical, HVAC ducting, and smart automation lines',
        'Acoustic sound-dampened false ceiling with architectural cove lighting',
      ],
    },
    {
      id: 'proj-ong-3',
      title: 'Gachibowli Corporate Commercial Hub',
      status: 'ongoing',
      statusLabel: 'Facade Cladding & MEP Works',
      progressPercent: 75,
      location: 'Financial District, Gachibowli',
      area: '18,400 Sft (Commercial Complex)',
      category: 'Commercial Construction',
      image: '/home%204.jfif',
      description:
        'State-of-the-art corporate office infrastructure featuring exposed brick elements, structural curtain wall glazing, and energy-efficient building engineering.',
      highlights: [
        'Modern double-glazed energy-efficient external facade',
        'Heavy-duty floor loading capacity for corporate & retail spaces',
        'Fire-safety compliant dual stairwell and central elevator shafts',
        'Underground dual-level parking with waterproof retaining walls',
      ],
    },
    {
      id: 'proj-comp-1',
      title: 'Chaitanyapuri Heritage Villa',
      status: 'completed',
      statusLabel: 'Completed & Handed Over',
      progressPercent: 100,
      location: 'Chaitanyapuri, Hyderabad',
      area: '7,200 Sft',
      category: 'Residential Construction',
      image: '/home%201.jfif',
      description:
        'Custom heritage villa featuring handcrafted timber veranda columns, traditional Mangalore terracotta roof tiling, arched windows, and lush exterior landscaping.',
      highlights: [
        'Traditional South Indian classical architectural elevation',
        'Handcrafted teak wood columns and ornamental facade brackets',
        'Vastu-compliant spatial planning with central light courtyard',
        'Premium natural stone exterior paving and boundary wall design',
      ],
    },
    {
      id: 'proj-comp-2',
      title: 'Nagole Resort-Style Villa',
      status: 'completed',
      statusLabel: 'Completed & Handed Over',
      progressPercent: 100,
      location: 'Nagole, Hyderabad',
      area: '8,450 Sft',
      category: 'Luxury Residential Villa',
      image: '/home%202.jfif',
      description:
        'Ultra-luxury contemporary resort-style villa featuring an infinity swimming pool, expansive travertine sundeck, natural stone masonry, and landscaped green terrace roofs.',
      highlights: [
        'Custom infinity-edge swimming pool with filtration plant',
        'Full natural stone cladding and thermally insulated glass walls',
        'Expansive terrace garden with automated drip irrigation',
        'Seamless indoor-outdoor entertaining verandas',
      ],
    },
    {
      id: 'proj-comp-3',
      title: 'Rajendranagar Contemporary Residence',
      status: 'completed',
      statusLabel: 'Completed & Handed Over',
      progressPercent: 100,
      location: 'Rajendranagar, Hyderabad',
      area: '1,850 Sft',
      category: 'Residential Architecture',
      image: '/home%203.jfif',
      description:
        'Contemporary luxury residence with open-concept designer living, premium island kitchen, floor-to-ceiling balcony glazing, and customized architectural floor plan.',
      highlights: [
        'Compact luxury optimization with maximized natural daylighting',
        'Designer European modular kitchen with quartz waterfall counter',
        'Sound-insulating UPVC balcony sliding systems',
        'Integrated solar water heating and rooftop utility deck',
      ],
    },
    {
      id: 'proj-comp-4',
      title: 'Jagtial Modern Independent House',
      status: 'completed',
      statusLabel: 'Completed & Handed Over',
      progressPercent: 100,
      location: 'Jagtial, Telangana',
      area: '2,650 Sft',
      category: 'Residential Construction',
      image: '/home%205.jpg',
      description:
        'Independent two-storey residential house featuring sheltered ground-floor car portico, ornamental first-floor sit-out balcony, external open staircase, and rooftop garden deck.',
      highlights: [
        'Two-storey modern family home with independent upper level access',
        'Covered parking portico with weather-resistant anti-skid tiles',
        'Full 10-year structural warranty & complete municipal approvals',
        'Custom safety grillwork and designer exterior elevation paints',
      ],
    },
  ];

  const ongoingCount = projects.filter((p) => p.status === 'ongoing').length;
  const completedCount = projects.filter((p) => p.status === 'completed').length;

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.status === activeFilter);

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Top Hero Banner with Breadcrumb */}
      <Breadcrumb
        title={
          activeFilter === 'ongoing'
            ? 'ONGOING PROJECTS'
            : activeFilter === 'completed'
            ? 'COMPLETED PROJECTS'
            : 'OUR PROJECTS'
        }
        items={[
          { label: 'HOME', onClick: () => onNavigateHome('home') },
          {
            label: 'PROJECTS',
            onClick: activeFilter !== 'all' ? () => setActiveFilter('all') : undefined,
            active: activeFilter === 'all',
          },
          ...(activeFilter !== 'all'
            ? [
                {
                  label: activeFilter === 'ongoing' ? 'ONGOING' : 'COMPLETED',
                  active: true,
                },
              ]
            : []),
        ]}
      />

      {/* Main Content Section */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200/80">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue mb-1.5 block">
                Portfolio Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit uppercase tracking-tight">
                {activeFilter === 'ongoing'
                  ? 'Active Construction Sites'
                  : activeFilter === 'completed'
                  ? 'Delivered Architectural Landmarks'
                  : 'Featured Construction Works'}
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
                Explore our ongoing works under active engineering execution as well as turnkey
                completed and handed over luxury residential villas and commercial hubs.
              </p>
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 xs:gap-2 bg-slate-100 p-1.5 rounded-lg shrink-0 self-start md:self-auto max-w-full">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3 xs:px-4 py-2 rounded-md text-xs sm:text-[13px] font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === 'all'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-slate-700 hover:text-brand-blue'
                }`}
              >
                All Projects
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === 'all'
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {projects.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('ongoing')}
                className={`px-3 xs:px-4 py-2 rounded-md text-xs sm:text-[13px] font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === 'ongoing'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-slate-700 hover:text-brand-blue'
                }`}
              >
                <Hammer size={14} className="shrink-0" />
                Ongoing
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === 'ongoing'
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {ongoingCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter('completed')}
                className={`px-3 xs:px-4 py-2 rounded-md text-xs sm:text-[13px] font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFilter === 'completed'
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-slate-700 hover:text-brand-blue'
                }`}
              >
                <CheckCircle2 size={14} className="shrink-0" />
                Completed
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === 'completed'
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {completedCount}
                </span>
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-brand-blue shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Badge */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
                    {project.status === 'ongoing' ? (
                      <span className="bg-amber-500 text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded shadow-xs tracking-wider flex items-center gap-1.5">
                        <Hammer size={12} />
                        Ongoing
                      </span>
                    ) : (
                      <span className="bg-emerald-600 text-white text-[11px] font-extrabold uppercase px-2.5 py-1 rounded shadow-xs tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 size={12} />
                        Completed
                      </span>
                    )}
                  </div>

                  {/* Area Badge */}
                  <div className="absolute bottom-3 right-3 z-10 bg-black/60 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {project.area}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Location */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
                      <span className="uppercase tracking-wider font-bold text-brand-blue">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-500">
                        <MapPin size={13} className="text-slate-400" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Bar: Status Label & Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                      {project.statusLabel}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-brand-blue hover:text-brand-navy flex items-center gap-1 group/btn cursor-pointer py-1"
                    >
                      <span>View Details</span>
                      <ChevronRight
                        size={14}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote / Stats Strip */}
      <section className="bg-brand-navy py-10 sm:py-12 px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            Committed to Quality, Precision, and Timely Delivery
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed mb-6">
            With hundreds of structural columns cast, thousands of square feet crafted, and countless
            milestones delivered on schedule, Ram Construction stands as a benchmark of reliability in Hyderabad.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={onNavigateContact}
              className="bg-brand-blue hover:bg-brand-accent text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow transition-all cursor-pointer"
            >
              Get Free Consultation
            </button>
            <button
              type="button"
              onClick={onNavigateContact}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow transition-all cursor-pointer"
            >
              Schedule Site Visit
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Project Details Modal Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-5"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden max-h-[92vh] flex flex-col relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-48 xs:h-60 sm:h-80 w-full bg-black shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 xs:p-5 sm:p-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    {selectedProject.status === 'ongoing' ? (
                      <span className="bg-amber-500 text-white text-[11px] font-extrabold uppercase px-2 py-0.5 rounded">
                        Ongoing Project
                      </span>
                    ) : (
                      <span className="bg-emerald-600 text-white text-[11px] font-extrabold uppercase px-2 py-0.5 rounded">
                        Completed Landmark
                      </span>
                    )}
                    <span className="text-white/90 text-xs font-semibold bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded">
                      {selectedProject.area}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-outfit">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-200 mt-1">
                    <MapPin size={13} className="text-brand-accent" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 overflow-y-auto flex-1">
              <div className="mb-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                  Project Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Project Status Info */}
              <div className="mb-5 bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  Current Milestone:
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded ${
                  selectedProject.status === 'ongoing'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {selectedProject.statusLabel}
                </span>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Technical Specifications &amp; Highlights:
                </h4>
                <ul className="space-y-2.5 list-none p-0 m-0">
                  {selectedProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Want to learn more about our engineering standards?
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    onNavigateContact();
                  }}
                  className="w-full sm:w-auto bg-brand-blue hover:bg-brand-navy text-white text-xs font-bold px-6 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Inquire About This Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
