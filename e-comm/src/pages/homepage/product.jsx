import React from 'react';
import { PackageOpen, Settings, UserCheck } from 'lucide-react';

const Product = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-20">
      
      {/* Features Banner Container */}
      <div className="relative w-full container mx-auto flex flex-col md:flex-row items-center py-10">
        
        {/* --- Architectural Crosshair Borders --- */}
        {/* Horizontal Lines (extend outwards) */}
        <div className="absolute top-0 left-[-20px] right-[-20px] h-[1px] bg-[#eaddcd]"></div>
        <div className="absolute bottom-0 left-[-20px] right-[-20px] h-[1px] bg-[#eaddcd]"></div>
        
        {/* Vertical Lines (extend outwards) */}
        <div className="absolute top-[-20px] bottom-[-20px] left-0 w-[1px] bg-[#eaddcd]"></div>
        <div className="absolute top-[-20px] bottom-[-20px] left-[33.33%] w-[1px] bg-[#eaddcd] hidden md:block"></div>
        <div className="absolute top-[-20px] bottom-[-20px] left-[66.66%] w-[1px] bg-[#eaddcd] hidden md:block"></div>
        <div className="absolute top-[-20px] bottom-[-20px] right-0 w-[1px] bg-[#eaddcd]"></div>
        
        {/* Mobile vertical borders (since layout stacks on mobile) */}
        <div className="absolute top-[33.33%] left-[-20px] right-[-20px] h-[1px] bg-[#eaddcd] md:hidden"></div>
        <div className="absolute top-[66.66%] left-[-20px] right-[-20px] h-[1px] bg-[#eaddcd] md:hidden"></div>
        {/* --- End Borders --- */}

        {/* Feature 1 */}
        <div className="flex-1 w-full flex items-center justify-center gap-4 py-8 md:py-0">
          <PackageOpen size={36} strokeWidth={1.5} className="text-slate-800" />
          <span className="font-bold text-slate-900 text-[15px]">Worldwide Free Shipping</span>
        </div>

        {/* Feature 2 */}
        <div className="flex-1 w-full flex items-center justify-center gap-4 py-8 md:py-0">
          <Settings size={36} strokeWidth={1.5} className="text-slate-800" />
          <span className="font-bold text-slate-900 text-[15px]">Unique & Custom Design</span>
        </div>

        {/* Feature 3 */}
        <div className="flex-1 w-full flex items-center justify-center gap-4 py-8 md:py-0">
          <UserCheck size={36} strokeWidth={1.5} className="text-slate-800" />
          <span className="font-bold text-slate-900 text-[15px]">No Questions Refund</span>
        </div>

      </div>
    </section>
  );
};

export default Product;
