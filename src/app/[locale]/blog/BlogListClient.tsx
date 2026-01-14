'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import { getAllBlogPosts, BlogPost } from '@/lib/blog-storage';
import Link from 'next/link';

export default function BlogListClient({ locale }: { locale: string }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
    
    // Listen for updates
    const handleUpdate = () => loadPosts();
    window.addEventListener('blogPostsUpdated', handleUpdate);
    
    return () => {
      window.removeEventListener('blogPostsUpdated', handleUpdate);
    };
  }, []);

  const loadPosts = () => {
    setLoading(true);
    const allPosts = getAllBlogPosts().filter(post => post.published);
    // Sort by date, newest first
    allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setPosts(allPosts);
    setLoading(false);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="pt-0 pb-16">
        {/* Hero Section */}
        <section className="relative min-h-[300px] lg:min-h-[400px] overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight">
                Our Blog
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                Stories, tips, and insights from Kenya
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {loading ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">Loading posts...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} locale={locale} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function BlogPostCard({ post, locale }: { post: BlogPost; locale: string }) {
  // Format date safely
  let formattedDate = '';
  try {
    if (post.date) {
      const dateObj = post.date.match(/^\d{4}-\d{2}-\d{2}$/) 
        ? new Date(post.date + 'T00:00:00') 
        : new Date(post.date);
      if (!isNaN(dateObj.getTime())) {
        formattedDate = dateObj.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      } else {
        formattedDate = post.date;
      }
    }
  } catch (error) {
    console.error('Error formatting date:', error);
    formattedDate = post.date || 'Unknown date';
  }

  return (
    <Link
      href={`/${locale}/blog/placeholder?id=${encodeURIComponent(post.id)}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
    >
      {/* Image */}
      {post.image && (
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {post.category && (
            <div className="absolute top-4 left-4">
              <span className="bg-blue-900 text-white px-3 py-1 text-xs font-medium rounded-full">
                {post.category}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
          {post.title}
        </h2>

        <p className="text-gray-600 text-sm sm:text-base line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center text-blue-900 font-medium text-sm group-hover:underline">
          Read More
          <svg
            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
