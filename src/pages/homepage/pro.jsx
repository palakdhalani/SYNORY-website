import React from 'react';
import proRoomImg from '../../assets/pro_section_room.png';
import { ArrowUpRight } from 'lucide-react';

const ProSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-20 md:py-32 relative">
      
      {/* Subtle Background Lines */}
      <div className="absolute top-0 left-1/3 w-full max-w-[800px] h-[400px] opacity-40 pointer-events-none -z-10 overflow-hidden">
        <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M -100 50 C 150 250, 300 -50, 600 150 S 900 100, 1000 200" stroke="#d2bba0" strokeWidth="1" />
          <path d="M -100 80 C 150 280, 300 -20, 600 180 S 900 130, 1000 230" stroke="#d2bba0" strokeWidth="1" />
          <path d="M -100 110 C 150 310, 300 10, 600 210 S 900 160, 1000 260" stroke="#d2bba0" strokeWidth="1" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column - Content */}
        <div className="flex flex-col items-start relative z-10">
          
          {/* Tag/Badge */}
          <div className="mb-8 font-medium flex flex-col items-start">
            <div className="bg-[#517b82] text-white px-4 py-2 text-[13px] md:text-[15px] rounded-md shadow-sm">
              With a focus on style, comfort, and craftsmanship, our pieces
            </div>
            <div className="bg-[#517b82] text-white px-4 py-2 text-[13px] md:text-[15px] rounded-md shadow-sm -mt-1 relative z-10">
              are designed to inspire and elevate every room.
            </div>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.2] tracking-tight mb-10 max-w-[500px]">
            We help turn your design dreams into reality with curated, stylish pieces for every space.
          </h2>
          
          {/* Link / Button */}
          <a href="#" className="group flex items-center gap-3 text-[#d2bba0] font-bold tracking-wide text-lg hover:text-[#c1aa8f] transition-colors">
            View All Projects
            <span className="w-8 h-8 rounded-full bg-[#d2bba0] flex items-center justify-center text-white group-hover:bg-[#c1aa8f] transition-colors shadow-md group-hover:scale-105">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </span>
          </a>
          
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full aspect-[4/3] lg:aspect-[16/11] z-10">
          <img 
            src={proRoomImg} 
            alt="Interior Design Project" 
            className="w-full h-full object-cover rounded-[2rem] shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default ProSection;
