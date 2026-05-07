import { Menu, X, Search, ShoppingCart, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-8 relative z-50">
      <nav className="flex items-center justify-between py-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer">
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center font-bold text-sm mt-1">N</span>
          </div>
          <span className="text-2xl font-black tracking-widest text-black">SYNORY</span>
        </div>

        {/* Desktop Layout - Middle Sections */}
        <div className="hidden xl:flex flex-1 items-center justify-between px-12">
          
          {/* Account & Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-[13px] font-bold text-black uppercase tracking-widest flex items-center mr-2">
              MY ACCOUNT <sup className="text-[#d2bba0] font-bold ml-1 text-xs">0</sup>
            </a>
            <button className="w-10 h-10 rounded bg-[#d2bba0] flex items-center justify-center text-white hover:bg-[#c1aa8f] transition-colors">
              <Search size={18} />
            </button>
            <button className="w-10 h-10 rounded bg-[#d2bba0] flex items-center justify-center text-white hover:bg-[#c1aa8f] transition-colors relative">
              <ShoppingCart size={18} />
              <span className="absolute top-1 right-1 text-[10px] font-bold bg-white text-[#d2bba0] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-[13px] font-bold text-black uppercase tracking-widest flex items-center gap-1 hover:text-[#d2bba0] transition-colors">
              HOMEPAGES <ChevronDown size={14} />
            </a>
            <a href="#" className="text-[13px] font-bold text-black uppercase tracking-widest flex items-center gap-1 hover:text-[#d2bba0] transition-colors">
              SHOP & PRODUCTS <ChevronDown size={14} />
            </a>
            <a href="#" className="text-[13px] font-bold text-black uppercase tracking-widest hover:text-[#d2bba0] transition-colors">
              BLOG
            </a>
            <a href="#" className="text-[13px] font-bold text-black uppercase tracking-widest flex items-center gap-1 hover:text-[#d2bba0] transition-colors">
              PAGES <ChevronDown size={14} />
            </a>
          </div>

        </div>

        {/* Purchase Button */}
        <div className="hidden xl:block flex-shrink-0">
          <button className="px-6 py-3 bg-[#d2bba0] text-white text-[13px] font-bold uppercase tracking-widest rounded hover:bg-[#c1aa8f] transition-colors">
            PURCHASE NOW
          </button>
        </div>

        {/* Mobile Hamburger & Cart */}
        <div className="xl:hidden flex items-center gap-4">
          <button className="w-10 h-10 rounded bg-[#d2bba0] flex items-center justify-center text-white">
            <ShoppingCart size={18} />
          </button>
          <button 
            className="p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 z-40 border-t border-gray-100">
          <a href="#" className="text-black font-bold uppercase tracking-widest py-3 border-b border-gray-100 flex justify-between items-center">HOMEPAGES <ChevronDown size={18} /></a>
          <a href="#" className="text-black font-bold uppercase tracking-widest py-3 border-b border-gray-100 flex justify-between items-center">SHOP & PRODUCTS <ChevronDown size={18} /></a>
          <a href="#" className="text-black font-bold uppercase tracking-widest py-3 border-b border-gray-100">BLOG</a>
          <a href="#" className="text-black font-bold uppercase tracking-widest py-3 border-b border-gray-100 flex justify-between items-center">PAGES <ChevronDown size={18} /></a>
          <a href="#" className="text-black font-bold uppercase tracking-widest py-3 border-b border-gray-100 flex justify-between items-center">
            MY ACCOUNT <span className="text-[#d2bba0]">0</span>
          </a>
          <button className="mt-4 px-6 py-4 bg-[#d2bba0] text-white font-bold tracking-widest uppercase rounded w-full">
            PURCHASE NOW
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
