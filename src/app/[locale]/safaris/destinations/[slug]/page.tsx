import DestinationDetailClient from './DestinationDetailClient';

const locales = ['en', 'sw'];
const slugs = ['maasai-mara', 'serengeti', 'amboseli', 'gorilla-trekking', 'diani'];

export function generateStaticParams() {
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  return <DestinationDetailClient locale={locale} slug={slug} />;
}
