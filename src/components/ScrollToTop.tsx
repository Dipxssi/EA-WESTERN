"use client";

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] flex h-14 w-14 items-center justify-center rounded-[4px] border border-[#c9a96e] bg-[#1e3a5f] text-[#c9a96e] shadow-xl transition-all duration-300 ease-[ease] hover:bg-[#2c5282]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" strokeWidth={2} />
        </button>
      )}
    </>
  );
}
