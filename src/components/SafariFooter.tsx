import Link from 'next/link';

export function SafariFooter() {
  return (
    <footer className="bg-[var(--color-bark)] w-full py-[18px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center w-full">
        {/* Logo */}
        <div className="font-playfair text-[15px] text-[var(--color-sand)] font-bold mb-4 md:mb-0 w-full text-center md:text-left md:w-auto">
          EA <span className="text-[var(--color-gold)] italic font-light">Western</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-[24px]">
          <Link 
            href="/en/contact" 
            className="font-sans text-[12px] text-[rgba(245,237,216,0.55)] tracking-[0.06em] uppercase hover:text-[var(--color-sand)] transition-colors"
          >
            Contact
          </Link>
          <a 
            href="#" 
            className="font-sans text-[12px] text-[rgba(245,237,216,0.55)] tracking-[0.06em] uppercase hover:text-[var(--color-sand)] transition-colors"
          >
            Instagram
          </a>
          <a 
            href="#" 
            className="font-sans text-[12px] text-[rgba(245,237,216,0.55)] tracking-[0.06em] uppercase hover:text-[var(--color-sand)] transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="#" 
            className="font-sans text-[12px] text-[rgba(245,237,216,0.55)] tracking-[0.06em] uppercase hover:text-[var(--color-sand)] transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
