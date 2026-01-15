import EditBlogPostClient from './EditBlogPostClient';

// Server component wrapper for static export
export function generateStaticParams() {
  // Return combinations for both locale and id
  // Since admin routes are client-side, we return placeholder values
  // The actual post ID will come from query parameters
  return [
    { locale: 'en', id: 'placeholder' },
    { locale: 'sw', id: 'placeholder' },
  ];
}

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  try {
    const { locale } = await params;
    // The actual post ID will be read from query params in the client component
    // We pass 'placeholder' as the id, and the client will get the real ID from URL
    return <EditBlogPostClient locale={locale} id="placeholder" />;
  } catch (error) {
    console.error('Error in EditBlogPostPage:', error);
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
