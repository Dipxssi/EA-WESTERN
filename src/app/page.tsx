'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    // Redirect to default locale
    // Works in both development and production (static export)
    // Using window.location for maximum compatibility with static export
    if (typeof window !== 'undefined') {
      window.location.replace('/en');
    }
  }, []);

  // Return null while redirecting
  return null;
}
