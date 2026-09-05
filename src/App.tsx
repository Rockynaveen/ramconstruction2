import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { OurServices } from './components/OurServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurProcessFlow } from './components/OurProcessFlow';
import { OurProjects } from './components/OurProjects';
import { StatsBanner } from './components/StatsBanner';
import { ClientsReview } from './components/ClientsReview';
import { Footer } from './components/Footer';
import { ContactPage } from './components/ContactPage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';

function App() {
  // State for user-provided custom logo (null uses the exact vector replica from reference image)
  const [customLogoUrl] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'projects' | 'contact'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<'all' | 'ongoing' | 'completed'>('all');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#contact' || hash === '#contact-us' || hash === '#contact-page') {
        setCurrentPage('contact');
      } else if (hash === '#about' || hash === '#about-us' || hash === '#about-page') {
        setCurrentPage('about');
      } else if (hash.startsWith('#projects') || hash.includes('ongoing') || hash.includes('completed')) {
        setCurrentPage('projects');
        if (hash.includes('ongoing')) setSelectedProjectFilter('ongoing');
        else if (hash.includes('completed')) setSelectedProjectFilter('completed');
        else setSelectedProjectFilter('all');
      } else if (hash.startsWith('#services') || hash === '#our-services') {
        setCurrentPage('services');
        if (hash.includes('residential')) setSelectedServiceId('residential');
        else if (hash.includes('commercial')) setSelectedServiceId('commercial');
        else if (hash.includes('architecture')) setSelectedServiceId('architecture');
        else if (hash.includes('interior')) setSelectedServiceId('interior');
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: 'home' | 'about' | 'services' | 'projects' | 'contact', targetSection?: string) => {
    setCurrentPage(page);
    if (page === 'contact') {
      window.location.hash = '#contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'projects') {
      const filter = (targetSection as 'all' | 'ongoing' | 'completed') || 'all';
      setSelectedProjectFilter(filter);
      window.location.hash = filter === 'all' ? '#projects' : `#projects-${filter}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'services') {
      setSelectedServiceId(targetSection);
      window.location.hash = targetSection ? `#services-${targetSection}` : '#services';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = targetSection || 'home';
      window.location.hash = `#${target}`;
      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 60);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-white text-brand-dark">
      {/* Top Navbar matching reference design */}
      <Navbar
        customLogoUrl={customLogoUrl || undefined}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {currentPage === 'contact' ? (
        <ContactPage onNavigateHome={(target) => handleNavigate('home', target)} />
      ) : currentPage === 'about' ? (
        <AboutPage
          onNavigateHome={(target) => handleNavigate('home', target)}
          onNavigateContact={() => handleNavigate('contact')}
        />
      ) : currentPage === 'projects' ? (
        <ProjectsPage
          initialFilter={selectedProjectFilter}
          onNavigateHome={(target) => handleNavigate('home', target)}
          onNavigateContact={() => handleNavigate('contact')}
        />
      ) : currentPage === 'services' ? (
        <ServicesPage
          initialServiceId={selectedServiceId}
          onNavigateHome={(target) => handleNavigate('home', target)}
          onNavigateContact={() => handleNavigate('contact')}
        />
      ) : (
        <>
          {/* Hero Section with Skyline, Villa, Floating Photos & Callback Form */}
          <Hero />

          {/* About Us Section */}
          <AboutUs />

          {/* Our Services Section (4 Service Cards) */}
          <OurServices onSelectService={(serviceId) => handleNavigate('services', serviceId)} />

          {/* Why Choose Us Section (8 Feature Cards) */}
          <WhyChooseUs />

          {/* Our Process Flow Section (6 Circular Steps) */}
          <OurProcessFlow />

          {/* Our Projects Section (6 Architectural Showcase Cards) */}
          <OurProjects />

          {/* Stats Counter Panoramic Night Skyline Banner */}
          <StatsBanner />

          {/* Clients Review Testimonials Carousel */}
          <ClientsReview />
        </>
      )}

      {/* Footer Section matching reference design */}
      <Footer
        customLogoUrl={customLogoUrl || undefined}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default App;
