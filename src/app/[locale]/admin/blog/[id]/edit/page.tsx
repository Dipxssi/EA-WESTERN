import EditBlogPostClient from './EditBlogPostClient';

// Server component wrapper for static export
export function generateStaticParams() {
  // Return combinations for both locale and id
  // Since admin routes are client-side, we return placeholder values
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
    const { locale, id } = await params;
    return <EditBlogPostClient locale={locale} id={id} />;
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
