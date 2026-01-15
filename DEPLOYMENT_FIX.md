# Fixing Supabase Configuration in Production

## The Problem

Your production site is trying to connect to `placeholder.supabase.co` because the environment variables weren't available during the build process. With Next.js static export (`output: 'export'`), environment variables are embedded into the JavaScript bundle at build time.

## Solution 1: Rebuild with Environment Variables (Recommended)

**You need to rebuild your site with the environment variables set:**

1. Make sure your `.env.local` file has the correct values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://tkytohdcyfkxfvoiqoju.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRreXRvaGRjeWZreGZ2b2lxb2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0OTgzNDUsImV4cCI6MjA4NDA3NDM0NX0.khg2bmvR_DJTrYC4rKWGLZmwfLzYNAs5IckKRpYLZA8
   ```

2. Rebuild your site:
   ```bash
   npm run build
   ```

3. Deploy the new build

## Solution 2: Runtime Configuration (Backup)

I've also added a runtime configuration option. The code now checks for `window.__SUPABASE_CONFIG__` which can be set via a script tag.

1. **Update `public/supabase-config.js`** with your actual credentials (already done)

2. **The script is automatically loaded** in your HTML via the root layout

3. **If you need to update it manually**, you can add this to your HTML:
   ```html
   <script>
     window.__SUPABASE_CONFIG__ = {
       url: 'https://tkytohdcyfkxfvoiqoju.supabase.co',
       key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRreXRvaGRjeWZreGZ2b2lxb2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0OTgzNDUsImV4cCI6MjA4NDA3NDM0NX0.khg2bmvR_DJTrYC4rKWGLZmwfLzYNAs5IckKRpYLZA8'
     };
   </script>
   ```

## For CI/CD Builds

If you're using a CI/CD pipeline (GitHub Actions, etc.), make sure to:

1. **Set environment variables in your CI/CD platform:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. **Or use a `.env.production` file** that gets loaded during build

## Verification

After rebuilding and deploying:

1. Open your browser's developer console
2. Check that there are no errors about `placeholder.supabase.co`
3. Try creating a blog post - it should work now

## Important Notes

- **Never commit** `.env.local` to git (it's already in `.gitignore`)
- **The `supabase-config.js` file** in `public/` is public and will be accessible to anyone. This is okay for the anon key (it's meant to be public), but make sure you're using Row Level Security (RLS) policies in Supabase to protect your data.
- **For production**, prefer Solution 1 (rebuild with env vars) over Solution 2 (runtime config) for better security and performance.
