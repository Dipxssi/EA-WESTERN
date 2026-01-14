// Client-side blog storage utilities
// For static export, we'll store blog posts in localStorage
// Initial data can be loaded from content/blog/posts.json file
// When users create/edit posts, they're stored in localStorage
// To persist across sessions, export localStorage data and update the JSON file

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  category?: string;
  tags?: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = 'ea-western-blog-posts';

export function getAllBlogPosts(): BlogPost[] {
  if (typeof window === 'undefined') {
    return [];
  }
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Initialize with sample posts from JSON file structure
      const samplePosts = getSamplePosts();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(samplePosts));
      return samplePosts;
    }
    return JSON.parse(stored);
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export function getBlogPostById(id: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find(post => post.id === id) || null;
}

export function createBlogPost(post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): BlogPost {
  const posts = getAllBlogPosts();
  const newPost: BlogPost = {
    ...post,
    id: generateId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  posts.unshift(newPost); // Add to beginning
  saveBlogPosts(posts);
  return newPost;
}

export function updateBlogPost(id: string, updates: Partial<BlogPost>): BlogPost | null {
  const posts = getAllBlogPosts();
  const index = posts.findIndex(post => post.id === id);
  
  if (index === -1) {
    return null;
  }
  
  posts[index] = {
    ...posts[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  
  saveBlogPosts(posts);
  return posts[index];
}

export function deleteBlogPost(id: string): boolean {
  const posts = getAllBlogPosts();
  const filtered = posts.filter(post => post.id !== id);
  
  if (filtered.length === posts.length) {
    return false; // Post not found
  }
  
  saveBlogPosts(filtered);
  return true;
}

function saveBlogPosts(posts: BlogPost[]): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    // Also trigger a custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('blogPostsUpdated'));
  } catch (error) {
    console.error('Error saving blog posts:', error);
  }
}

function generateId(): string {
  return `post-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function getSamplePosts(): BlogPost[] {
  // Sample posts - this matches the structure in content/blog/posts.json
  return [
    {
      id: 'sample-1',
      title: 'Welcome to EA Western - Your Complete Kenya Experience',
      excerpt: 'Discover everything EA Western has to offer - from thrilling safari tours to comprehensive insurance solutions and reliable car hire services.',
      content: `# Welcome to EA Western

We're thrilled to welcome you to **EA Western**, your trusted partner for an unforgettable Kenya experience. Whether you're planning a safari adventure, need comprehensive insurance coverage, or require reliable transportation, we've got you covered.

## Our Mission

At EA Western, we're committed to providing exceptional service across three core areas:

### 🦁 Safari Tours & Adventures
Experience the magic of Kenya's wildlife with our expertly curated safari tours.

### 🛡️ Insurance Solutions
Protect what matters most with our comprehensive insurance coverage.

### 🚗 Car Hire Services
Explore Kenya at your own pace with our reliable car hire service.`,
      author: 'EA Western Team',
      date: '2024-01-15',
      image: '/images/hero-kenya-bg.png',
      category: 'Company News',
      tags: ['Welcome', 'Kenya', 'Safari'],
      published: true,
      createdAt: '2024-01-15T00:00:00.000Z',
      updatedAt: '2024-01-15T00:00:00.000Z',
    },
  ];
}

// Export function to get all posts as JSON string (for syncing to file)
export function exportBlogPostsAsJSON(): string {
  const posts = getAllBlogPosts();
  return JSON.stringify(posts, null, 2);
}
