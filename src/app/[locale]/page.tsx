import { Navigation } from '@/components/Navigation';
import { PortalClient } from '@/components/PortalClient';
import { HomeTomatoTheme } from '@/components/HomeTomatoTheme';
import { AboutSection } from '@/components/AboutSection';
import { WhatYouGetSection } from '@/components/WhatYouGetSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { ContactBlockSection } from '@/components/ContactBlockSection';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'sw' },
  ];
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden text-[var(--text-primary)]"
      style={{ background: 'var(--background-gradient)' }}
    >
      <HomeTomatoTheme />
      <Navigation locale={locale} />
      <PortalClient locale={locale} />
      <AboutSection locale={locale} />
      <WhatYouGetSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <ContactBlockSection />
      <StatsSection />
      <Footer />
    </div>
  );
}
