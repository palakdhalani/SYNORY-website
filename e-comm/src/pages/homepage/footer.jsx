import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mx-auto px-4 md:px-8 pb-12">
      <div className="bg-[#f5f5f5] rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-16 flex flex-col gap-16 shadow-[0_4px_20px_rgb(0,0,0,0.01)]">
        
        {/* Top Row: Brand Logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
          <div className="bg-white rounded-2xl w-28 md:w-[11%] aspect-video flex items-center justify-center shadow-sm">
            <span className="text-gray-300 font-bold text-[10px] text-center leading-tight tracking-wider">ASKO<br/>FURNITURE LTD.<br/>FINLAND</span>
          </div>
          <div className="bg-white rounded-2xl w-28 md:w-[11%] aspect-video flex items-center justify-center shadow-sm">
            <span className="text-gray-300 font-serif italic text-xl">yf <span className="text-xs not-italic">Furniture</span></span>
          </div>
          <div className="bg-white rounded-2xl w-28 md:w-[11%] aspect-video flex items-center justify-center shadow-sm">
            <span className="text-gray-300 font-bold text-xl tracking-tighter">globe</span>
          </div>
          <div className="bg-white rounded-2xl w-28 md:w-[11%] aspect-video flex items-center justify-center shadow-sm">
            <span className="text-gray-300 font-bold text-sm tracking-widest uppercase">Kronheims</span>
          </div>
          <div className="bg-white rounded-2xl w-28 md:w-[11%] aspect-video flex items-center justify-center shadow-sm">
            <span className="text-gray-300 font-semibold text-lg tracking-tight">logitech</span>
          </div>
          <div className="bg-white rounded-2xl w-28 md:w-[11%] aspect-video flex items-center justify-center shadow-sm">
            <span className="text-gray-300 font-light text-[10px] text-center leading-tight">Albert<br/><span className="font-bold">Dohnal Design</span></span>
          </div>
          <div className="bg-white rounded-2xl w-28 md:w-[11%] aspect-video flex items-center justify-center shadow-sm">
            {/* Geometric Logo Placeholder */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2">
               <rect x="3" y="3" width="18" height="18" rx="2" />
               <path d="M3 12h18M12 3v18" />
            </svg>
          </div>
          <div className="bg-white rounded-2xl w-28 md:w-[11%] aspect-video flex items-center justify-center shadow-sm">
            <span className="text-gray-300 font-serif italic text-lg text-center leading-tight">Tylertone<br/><span className="not-italic font-sans text-[8px] tracking-widest uppercase">Supply</span></span>
          </div>
        </div>

        {/* Middle Row: Links and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mt-4">
          
          {/* Links Group */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 lg:w-1/3">
             <div className="flex flex-col gap-6">
                <a href="#" className="text-xs font-bold text-slate-800 tracking-wider hover:text-white transition-colors">CUSTOMER SERVICE</a>
                <a href="#" className="text-xs font-bold text-slate-800 tracking-wider hover:text-white transition-colors">FIND STORE</a>
                <a href="#" className="text-xs font-bold text-slate-800 tracking-wider hover:text-white transition-colors">ABOUT SYNORY</a>
                <a href="#" className="text-xs font-bold text-slate-800 tracking-wider hover:text-white transition-colors">PRESS LOUNGE</a>
             </div>
             <div className="flex flex-col gap-6">
                <a href="#" className="text-xs font-bold text-slate-800 tracking-wider hover:text-white transition-colors">FEATURES</a>
                <a href="#" className="text-xs font-bold text-slate-800 tracking-wider hover:text-white transition-colors">SERVICES WE PROVIDE</a>
                <a href="#" className="text-xs font-bold text-slate-800 tracking-wider hover:text-white transition-colors">ON SALES</a>
                <a href="#" className="text-xs font-bold text-slate-800 tracking-wider hover:text-white transition-colors">NEW COLLECTIONS</a>
             </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col lg:w-1/3">
            <h4 className="font-bold text-slate-900 mb-4 text-[15px]">Subscribe to Our Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6 max-w-sm">Subscribe to our newsletter for new products, trends and offers.</p>
            <div className="relative border-b border-gray-300 pb-3 max-w-md group">
              <input 
                type="email" 
                placeholder="Enter email address.." 
                className="w-full bg-transparent outline-none text-sm text-slate-800 placeholder-slate-400 focus:placeholder-slate-300 transition-colors"
              />
              <button className="absolute right-0 bottom-3 text-xs font-bold text-[#d2bba0] hover:text-[#bda488] transition-colors tracking-wide">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Community */}
          <div className="flex flex-col items-start lg:items-end">
            <h4 className="font-bold text-slate-900 mb-6 text-[15px]">Join our Community</h4>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-2xl bg-[#d2bba0] flex items-center justify-center text-white hover:bg-[#c1aa8f] transition-all hover:-translate-y-1 shadow-md">
                {/* Facebook SVG */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl bg-[#d2bba0] flex items-center justify-center text-white hover:bg-[#c1aa8f] transition-all hover:-translate-y-1 shadow-md">
                {/* Custom X (Twitter) Logo */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.059z"></path></svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl bg-[#d2bba0] flex items-center justify-center text-white hover:bg-[#c1aa8f] transition-all hover:-translate-y-1 shadow-md">
                {/* Instagram SVG */}
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-2xl bg-[#d2bba0] flex items-center justify-center text-white hover:bg-[#c1aa8f] transition-all hover:-translate-y-1 shadow-md">
                {/* Youtube SVG */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-4 mt-8">
          <p className="text-slate-600 text-[13px] font-medium">2026 © Synory Theme. All Rights Reseverd.</p>
          <div className="flex items-center gap-3 text-slate-800 text-[13px] font-medium">
            <a href="#" className="hover:text-[#d2bba0] transition-colors">Cookies</a>
            <span className="text-slate-300">•</span>
            <a href="#" className="hover:text-[#d2bba0] transition-colors">Terms & conditions</a>
            <span className="text-slate-300">•</span>
            <a href="#" className="hover:text-[#d2bba0] transition-colors">Privacy policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
