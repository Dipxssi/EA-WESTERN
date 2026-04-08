import PhilosophyPageClient from "./PhilosophyPageClient";

export default async function SafariPhilosophyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PhilosophyPageClient locale={locale} />;
}
