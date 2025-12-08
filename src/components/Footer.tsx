export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {/* Logo instead of text */}
            <div className="mb-6">
              <img 
                src="/logo/ea-western-logo.png" 
                alt="EA Western" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 font-light leading-relaxed max-w-md">
              Curating exceptional Kenya experiences through premium safaris, 
              comprehensive protection, and luxury transport solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm tracking-[0.2em] text-gray-500 font-light mb-6 uppercase">Contact</h4>
              <div className="space-y-3 text-sm text-gray-600 font-light">
                <div>+254 700 123 456</div>
                <div>info@eawestern.com</div>
                <div>Nairobi, Kenya</div>
              </div>
            </div>
            <div>
              <h4 className="text-sm tracking-[0.2em] text-gray-500 font-light mb-6 uppercase">Follow</h4>
              <div className="space-y-3 text-sm text-gray-600 font-light">
                <div>Instagram</div>
                <div>LinkedIn</div>
                <div>Facebook</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-xs tracking-[0.2em] text-gray-500 font-light uppercase">
              © 2025 EAWESTERN — All Rights Reserved
            </div>
            
            {/* DigiNow Solutions Credit */}
            <div className="text-xs tracking-[0.1em] text-gray-400 font-light">
              Developed and maintained by{' '}
              <a 
                href="https://diginowsolutions.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300 underline hover:no-underline"
              >
                @DigiNow Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
