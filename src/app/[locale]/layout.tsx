import { ScrollToTop } from '@/components/ScrollToTop';


export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'sw' },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      {children}
      <ScrollToTop />
    </div>
  );
}