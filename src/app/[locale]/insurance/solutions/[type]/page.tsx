import IndividualSolutionClient from './IndividualSolutionClient';

const locales = ['en', 'sw'];
const types = [
  'health-wellness',
  'life-legacy',
  'motor-travel',
  'corporate-health',
  'professional-liability',
  'business-assets'
];

export function generateStaticParams() {
  return locales.flatMap((locale) => types.map((type) => ({ locale, type })));
}

export default async function IndividualSolutionPage({ params }: { params: Promise<{ locale: string, type: string }> }) {
  const { locale, type } = await params;
  return <IndividualSolutionClient locale={locale} type={type} />;
}
