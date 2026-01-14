'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useState, useEffect } from 'react';
import { createBlogPost } from '@/lib/blog-storage';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NewBlogPostPage({ params }: { params: Promise<{ locale: string }> }) {
  const [locale, setLocale] = useState<string>('en');
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
    category: '',
    tags: '',
    published: true,
  });

  useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (name === 'image') {
      setImagePreview(value);
    }

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
        alert('Please select an image file.');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB. Please compress the image and try again.');
        return;
      }

      // For static export, we'll convert to base64 data URL
      // This allows images to work without server upload
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        // Store as base64 data URL
        setFormData((prev) => ({ ...prev, image: base64String }));
        setImagePreview(base64String);
      };
      reader.onerror = () => {
        alert('Error reading image file. Please try again.');
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

      createBlogPost({
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        author: formData.author,
        date: formData.date,
        image: formData.image || undefined,
        category: formData.category || undefined,
        tags: tagsArray.length > 0 ? tagsArray : undefined,
        published: formData.published,
      });

      router.push(`/${locale}/admin/blog`);
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation locale={locale} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-2">
            Create New Blog Post
          </h1>
          <p className="text-gray-600">Fill in the details below to create a new blog post</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 sm:p-8">
          {/* Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter blog post title"
            />
          </div>

          {/* Excerpt */}
          <div className="mb-6">
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              required
              value={formData.excerpt}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Short description that appears in blog listing"
            />
          </div>

          {/* Content */}
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              required
              value={formData.content}
              onChange={handleInputChange}
              rows={15}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
              placeholder="Write your blog post content here (supports markdown)"
            />
          </div>

          {/* Author & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                Author *
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required
                value={formData.author}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Author name"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Image */}
          <div className="mb-6">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Upload an image file or paste an image URL. For best results, use images less than 5MB.
            </p>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
            />
            <div className="text-sm text-gray-600 mb-2">OR</div>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image && !formData.image.startsWith('data:') ? formData.image : ''}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Paste image URL here (e.g., /images/your-image.jpg)"
            />
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-w-xs h-48 object-cover rounded-lg border border-gray-300"
                  onError={(e) => {
                    console.error('Image preview error:', e);
                    alert('Error loading image preview. Please check the image URL or try uploading again.');
                  }}
                />
              </div>
            )}
          </div>

          {/* Category & Tags */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Travel Tips"
              />
            </div>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tag1, Tag2, Tag3"
              />
            </div>
          </div>

          {/* Published */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleInputChange}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Publish immediately</span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Post'}
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
