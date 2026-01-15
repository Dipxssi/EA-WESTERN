import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Get Supabase config - check multiple sources for static export compatibility
function getSupabaseConfig() {
  // 1. Check runtime window config first (for static exports, can be set via script tag)
  // This takes priority because it allows runtime configuration
  if (typeof window !== 'undefined') {
    const windowConfig = (window as any).__SUPABASE_CONFIG__;
    if (windowConfig?.url && windowConfig?.key) {
      return {
        url: windowConfig.url,
        key: windowConfig.key,
      };
    }
  }

  // 2. Check build-time env vars (for static export, these are embedded at build time)
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // 3. Reject placeholder values and missing values
  if (!url || url === 'https://placeholder.supabase.co') {
    throw new Error(
      'Supabase URL is missing. Please set NEXT_PUBLIC_SUPABASE_URL environment variable during build, or set window.__SUPABASE_CONFIG__.url at runtime.'
    );
  }

  if (!key || key === 'placeholder-key') {
    throw new Error(
      'Supabase API key is missing. Please set NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable during build, or set window.__SUPABASE_CONFIG__.key at runtime.'
    );
  }

  return { url, key };
}

// Lazy initialization - only create client when actually needed (client-side)
let supabaseClient: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient {
  if (supabaseClient) {
    return supabaseClient;
  }

  // Only initialize on client side
  if (typeof window === 'undefined') {
    throw new Error('Supabase client can only be initialized on the client side.');
  }

  const { url, key } = getSupabaseConfig();
  
  supabaseClient = createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return supabaseClient;
}

// Export a proxy that lazily initializes the client
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getSupabaseClient();
    const value = client[prop as keyof SupabaseClient];
    // If it's a function, bind it to the client
    if (typeof value === 'function') {
      return value.bind(client);
    }
    return value;
  },
});
