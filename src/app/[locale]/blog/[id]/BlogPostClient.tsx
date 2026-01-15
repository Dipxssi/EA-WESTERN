'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import { getBlogPostById } from '@/lib/blog-storage';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPostClient({ locale, id }: { locale: string; id: string }) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadPost = async (postId: string | null) => {
    if (!postId || postId === 'placeholder') {
      setLoading(false);
      return;
    }
    try {
      const foundPost = await getBlogPostById(postId);
      if (foundPost) {
        if (foundPost.published) {
          setPost(foundPost);
        } else {
          console.warn('Post found but not published:', postId);
        }
      } else {
        console.warn('Post not found:', postId);
      }
    } catch (error) {
      console.error('Error loading post:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Get actual post ID from query parameter if needed
    let actualId = id;
    if (id === 'placeholder' && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      actualId = params.get('id') || id;
    }
    
    loadPost(actualId);
    
    // Listen for updates
    const handleUpdate = () => loadPost(actualId);
    window.addEventListener('blogPostsUpdated', handleUpdate);
    
    return () => {
      window.removeEventListener('blogPostsUpdated', handleUpdate);
    };
  }, [id]);

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Navigation locale={locale} />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-center text-gray-600">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <Navigation locale={locale} />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-light text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-4">
              The blog post with ID &quot;{id}&quot; could not be found.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              This might happen if the post was deleted or the URL is incorrect.
            </p>
            <Link
              href={`/${locale}/blog`}
              className="text-blue-900 hover:underline"
            >
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Format date safely
  let formattedDate = '';
  try {
    if (post.date) {
      // Handle both YYYY-MM-DD and ISO date formats
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
        formattedDate = post.date; // Fallback to raw date string
      }
    }
  } catch (error) {
    console.error('Error formatting date:', error);
    formattedDate = post.date || 'Unknown date';
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="pt-0 pb-16">
        {/* Hero Image */}
        {post.image && (
          <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </section>
        )}

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link href={`/${locale}`} className="hover:text-blue-900">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/${locale}/blog`} className="hover:text-blue-900">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-8">
            {post.category && (
              <span className="inline-block bg-blue-900 text-white px-4 py-1 text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 text-sm sm:text-base mb-6">
              <span>{formattedDate}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none prose-headings:font-light prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-900 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
            {post.content ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            ) : (
              <p className="text-gray-600">No content available.</p>
            )}
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
            >
              <svg
                className="mr-2 w-5 h-5 transform rotate-180"
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
              Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
