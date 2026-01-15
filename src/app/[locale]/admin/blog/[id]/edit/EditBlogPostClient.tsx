'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import { getBlogPostById, updateBlogPost } from '@/lib/blog-storage';
import { useRouter } from 'next/navigation';

export default function EditBlogPostClient({ locale, id }: { locale: string; id: string }) {
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [imagePreview, setImagePreview] = useState<string>('');
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    date: '',
    image: '',
    category: '',
    tags: '',
    published: true,
  });

  useEffect(() => {
    // Load existing post data
    const loadPost = async () => {
      setInitialLoading(true);
      // Get actual post ID from query parameter if id is placeholder
      let actualId = id;
      if (id === 'placeholder' && typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        actualId = params.get('id') || id;
      }
      
      if (!actualId || actualId === 'placeholder') {
        setInitialLoading(false);
        return;
      }
      
      try {
        const post = await getBlogPostById(actualId);
        if (post) {
          // Handle date - it might be in ISO format or YYYY-MM-DD format
          let dateValue = '';
          if (post.date) {
            try {
              // If it's already in YYYY-MM-DD format, use it directly
              if (post.date.match(/^\d{4}-\d{2}-\d{2}$/)) {
                dateValue = post.date;
              } else {
                // Otherwise, parse it and convert to YYYY-MM-DD
                dateValue = new Date(post.date).toISOString().split('T')[0];
              }
            } catch (error) {
              console.error('Error parsing date:', error);
              dateValue = new Date().toISOString().split('T')[0];
            }
          } else {
            dateValue = new Date().toISOString().split('T')[0];
          }

          setFormData({
            title: post.title || '',
            excerpt: post.excerpt || '',
            content: post.content || '',
            author: post.author || '',
            date: dateValue,
            image: post.image || '',
            category: post.category || '',
            tags: post.tags ? post.tags.join(', ') : '',
            published: post.published !== undefined ? post.published : true,
          });
          if (post.image) {
            setImagePreview(post.image);
          }
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setInitialLoading(false);
      }
    };
    
    loadPost();
  }, [id]);
  
  // Get actual post ID for display/error messages
  const getActualId = () => {
    if (id === 'placeholder' && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('id') || id;
    }
    return id;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB');
        return;
      }

      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData((prev) => ({ ...prev, image: base64String }));
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const tagsArray = formData.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      // Get actual post ID from query parameter if id is placeholder
      let actualId = id;
      if (id === 'placeholder' && typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        actualId = params.get('id') || id;
      }
      
      if (!actualId || actualId === 'placeholder') {
        alert('Invalid post ID');
        return;
      }

      // Keep date in YYYY-MM-DD format (as expected by blog storage)
      const updatedPost = {
        ...formData,
        tags: tagsArray.length > 0 ? tagsArray : undefined,
        date: formData.date, // Already in YYYY-MM-DD format from the form
      };

      const result = await updateBlogPost(actualId, updatedPost);
      
      if (!result) {
        throw new Error('Failed to update post');
      }

      router.push(`/${locale}/admin/blog`);
    } catch (error) {
      console.error('Error updating blog post:', error);
      alert('Failed to update blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="bg-white text-gray-900 min-h-screen">
        <Navigation locale={locale} />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center py-12">
            <p className="text-gray-600">Loading post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation locale={locale} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Edit Blog Post</h1>
          <p className="text-gray-600">Update your blog post details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content * (Markdown supported)
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows={15}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent font-mono text-sm"
            />
          </div>

          {/* Author */}
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
              Author *
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="tag1, tag2, tag3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            />
            {imagePreview && (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-full h-48 object-cover rounded-md"
                />
              </div>
            )}
          </div>

          {/* Published */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="published"
              name="published"
              checked={formData.published}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300 rounded"
            />
            <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
              Published
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Updating...' : 'Update Post'}
            </button>
            <button
              type="button"
              onClick={() => router.push(`/${locale}/admin/blog`)}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
