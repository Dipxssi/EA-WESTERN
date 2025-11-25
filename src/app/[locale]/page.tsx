import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCardsSection } from '@/components/ServiceCardSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServiceSection';
import { WhatYouGetSection } from '@/components/WhatYouGetSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { ContactBlockSection } from '@/components/ContactBlockSection';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';

export default function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation locale={locale} />
      <HeroSection />
      <ServiceCardsSection />
      <AboutSection />
      <ServicesSection />
      <WhatYouGetSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <ContactBlockSection />
      <StatsSection />
      <Footer />
    </div>
  );
}
