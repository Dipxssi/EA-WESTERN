import BlogPostClient from './BlogPostClient';

// Server component wrapper for static export
// For client-side blog posts, we use a dynamic route that works with any ID
// With static export, we can only generate a placeholder route
// The actual blog post will be loaded client-side from localStorage
export function generateStaticParams() {
  const locales = ['en', 'sw'];
  
  // Return a placeholder for each locale
  // This creates /en/blog/placeholder and /sw/blog/placeholder
  // The client component will handle loading the actual post from localStorage
  // based on the ID in the URL
  return locales.map(locale => ({
    locale,
    id: 'placeholder', // Placeholder - actual posts loaded client-side
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  try {
    const { locale, id } = await params;
    // Pass the ID to the client component - it will load from localStorage
    return <BlogPostClient locale={locale} id={id} />;
  } catch (error) {
    console.error('Error in BlogPostPage:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Error Loading Page</h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }
}
