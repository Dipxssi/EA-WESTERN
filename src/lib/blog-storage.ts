// Blog storage utilities using Supabase
import { supabase } from './supabase';
import type { BlogPost } from '@/types/blog';

// Database schema uses snake_case, but we convert to camelCase for TypeScript
interface SupabaseBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // DATE type in Supabase
  image?: string | null;
  category?: string | null;
  tags?: string[] | null;
  published: boolean;
  created_at: string; // TIMESTAMPTZ
  updated_at: string; // TIMESTAMPTZ
}

// Convert Supabase format to our TypeScript format
function fromSupabase(post: SupabaseBlogPost): BlogPost {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    author: post.author,
    date: post.date,
    image: post.image || undefined,
    category: post.category || undefined,
    tags: post.tags || undefined,
    published: post.published,
    createdAt: post.created_at,
    updatedAt: post.updated_at,
  };
}

// Convert our TypeScript format to Supabase format
function toSupabase(post: Partial<BlogPost>): Partial<SupabaseBlogPost> {
  const supabasePost: Partial<SupabaseBlogPost> = {};
  
  if (post.title !== undefined) supabasePost.title = post.title;
  if (post.excerpt !== undefined) supabasePost.excerpt = post.excerpt;
  if (post.content !== undefined) supabasePost.content = post.content;
  if (post.author !== undefined) supabasePost.author = post.author;
  if (post.date !== undefined) supabasePost.date = post.date;
  if (post.image !== undefined) supabasePost.image = post.image || null;
  if (post.category !== undefined) supabasePost.category = post.category || null;
  if (post.tags !== undefined) supabasePost.tags = post.tags || null;
  if (post.published !== undefined) supabasePost.published = post.published;
  
  return supabasePost;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return (data || []).map(fromSupabase);
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }

    return data ? fromSupabase(data) : null;
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
}

export async function createBlogPost(
  post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>
): Promise<BlogPost> {
  try {
    const supabasePost = toSupabase(post);
    
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(supabasePost)
      .select()
      .single();

    if (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }

    // Trigger update event for components listening
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('blogPostsUpdated'));
    }

    return fromSupabase(data);
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
}

export async function updateBlogPost(
  id: string,
  updates: Partial<BlogPost>
): Promise<BlogPost | null> {
  try {
    const supabaseUpdates = toSupabase(updates);
    
    const { data, error } = await supabase
      .from('blog_posts')
      .update(supabaseUpdates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating blog post:', error);
      return null;
    }

    // Trigger update event for components listening
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('blogPostsUpdated'));
    }

    return data ? fromSupabase(data) : null;
  } catch (error) {
    console.error('Error updating blog post:', error);
    return null;
  }
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog post:', error);
      return false;
    }

    // Trigger update event for components listening
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('blogPostsUpdated'));
    }

    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }
}

// Export function to get all posts as JSON string (for syncing to file)
export async function exportBlogPostsAsJSON(): Promise<string> {
  const posts = await getAllBlogPosts();
  return JSON.stringify(posts, null, 2);
}
