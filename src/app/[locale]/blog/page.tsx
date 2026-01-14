import BlogListClient from './BlogListClient';

// Server component wrapper for static export
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'sw' },
  ];
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <BlogListClient locale={locale} />;
}
