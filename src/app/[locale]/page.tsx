import { Navigation } from '@/components/Navigation';
import { PortalClient } from '@/components/PortalClient';
import { HomeTomatoTheme } from '@/components/HomeTomatoTheme';
import { StatsSection } from '@/components/StatsSection';
import { Footer } from '@/components/Footer';
import { CredentialsSection } from '@/components/CredentialsSection';
import { HomeYearsIntroSection } from '@/components/home/HomeYearsIntroSection';
import { HomeFamilyBusinessSection } from '@/components/home/HomeFamilyBusinessSection';
import { HomeLatestNewsSection } from '@/components/home/HomeLatestNewsSection';
import { HomeQuoteBand } from '@/components/home/HomeQuoteBand';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'sw' },
  ];
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="home-broker-page min-h-screen w-full overflow-x-hidden bg-[#f7f5f0] text-[#4a5568]">
      <HomeTomatoTheme />
      <Navigation locale={locale} />
      <PortalClient locale={locale} />
      <CredentialsSection />
      <HomeYearsIntroSection locale={locale} />
      <HomeFamilyBusinessSection locale={locale} />
      <StatsSection />
      <HomeLatestNewsSection locale={locale} />
      <HomeQuoteBand locale={locale} />
      <Footer />
    </div>
  );
}
