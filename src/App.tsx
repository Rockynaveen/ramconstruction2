import { useState } from 'react';
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

function App() {
  // State for user-provided custom logo (null uses the exact vector replica from reference image)
  const [customLogoUrl] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen relative bg-white text-brand-dark">
      {/* Top Navbar matching reference design */}
      <Navbar customLogoUrl={customLogoUrl || undefined} />

      {/* Hero Section with Skyline, Villa, Floating Photos & Callback Form */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Our Services Section (4 Service Cards) */}
      <OurServices />

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

      {/* Footer Section matching reference design */}
      <Footer customLogoUrl={customLogoUrl || undefined} />
    </div>
  );
}

export default App;
