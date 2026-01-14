/**
 * Script to sync blog posts from localStorage to content/blog/posts.json
 * 
 * Usage (run in browser console on the blog page):
 * 1. Open browser console
 * 2. Copy and paste the localStorage data
 * 3. Run this script with: node scripts/sync-blog-posts.js <json-data>
 * 
 * Or manually:
 * 1. In browser console: localStorage.getItem('ea-western-blog-posts')
 * 2. Copy the JSON string
 * 3. Update content/blog/posts.json with the data
 */

const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '..', 'content', 'blog', 'posts.json');
const postsJson = process.argv[2];

if (!postsJson) {
  console.log('Usage: node scripts/sync-blog-posts.js <json-data>');
  console.log('');
  console.log('To get the JSON data:');
  console.log('1. Open your browser console on the blog page');
  console.log('2. Run: localStorage.getItem("ea-western-blog-posts")');
  console.log('3. Copy the result and pass it as an argument to this script');
  process.exit(1);
}

try {
  const posts = JSON.parse(postsJson);
  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2), 'utf-8');
  console.log(`✅ Successfully synced ${posts.length} blog post(s) to ${postsPath}`);
} catch (error) {
  console.error('❌ Error syncing blog posts:', error.message);
  process.exit(1);
}
