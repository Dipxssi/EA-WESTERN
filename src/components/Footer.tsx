export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-2xl font-light tracking-wider mb-6">
              <span style={{ color: "#dc2626" }} className="font-bold">EA</span>
              <span style={{ color: "#2563eb" }} className="font-thin">WESTERN</span>
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
        
        <div className="border-t border-gray-200 mt-16 pt-8 text-center">
          <div className="text-xs tracking-[0.2em] text-gray-500 font-light uppercase">
            © 2025 EA Western — All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
