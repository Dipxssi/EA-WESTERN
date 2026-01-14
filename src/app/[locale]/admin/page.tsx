'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation locale={locale} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your website content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href={`/${locale}/admin/blog`}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-blue-900 text-3xl mb-4">📝</div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">Blog Management</h2>
            <p className="text-gray-600">Create, edit, and manage blog posts</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
