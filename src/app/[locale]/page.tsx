import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCardsSection } from '@/components/ServiceCardSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServiceSection';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <HeroSection />
      <ServiceCardsSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <Footer />
    </div>
  );
}
