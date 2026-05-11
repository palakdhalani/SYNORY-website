import React, { useState, useEffect } from 'react';
import heroBg1 from '../../assets/hero_bg.png';
import heroBg2 from '../../assets/hero_slide_2.png';
import heroBg3 from '../../assets/hero_slide_3.png';
import decorSnippet from '../../assets/decor_snippet.png';
import { ArrowRight, ArrowRightLeft } from 'lucide-react';

const slides = [
  {
    bg: heroBg1,
    subtitle: "Crafting Comfort, Shaping Style",
    title: "Your Home , Our\nPassion",
    desc: "From modern minimalist to timeless classics, our collection offers something for every taste, transforming any space into a place you'll love."
  },
  {
    bg: heroBg2,
    subtitle: "Modern Minimalist Design",
    title: "Elevate Your\nLiving Space",
    desc: "Discover sleek lines and functional beauty with our new minimalist collection designed for the modern home."
  },
  {
    bg: heroBg3,
    subtitle: "Cozy & Relaxing Sanctuaries",
    title: "Sleep In\nLuxury",
    desc: "Create the perfect bedroom retreat with our premium wooden frames and soft aesthetic lighting."
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-auto relative mt-8 mb-24 px-4 md:px-8">
      {/* Main Hero Container */}
      <div 
        className="w-full h-[550px] md:h-[800px] bg-cover bg-center bg-no-repeat rounded-[2rem] md:rounded-[3rem] relative flex items-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].bg})` }}
      >
        {/* Dark overlay for text readability if needed */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20 rounded-[2rem] md:rounded-[3rem] transition-opacity duration-1000"></div>

        {/* Hero Content (Left Side) */}
        <div className="relative z-10 p-6 md:p-20 max-w-[700px]" key={currentSlide}>
          <div className="animate-fade-in">
            <span className="text-white font-medium text-sm md:text-lg mb-2 block">{slides[currentSlide].subtitle}</span>
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-4 md:mb-6 whitespace-pre-line">
              {slides[currentSlide].title}
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-[450px]">
              {slides[currentSlide].desc}
            </p>
            <button className="bg-[#d2bba0] text-white font-bold tracking-wide px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-[#c1aa8f] transition-colors shadow-sm">
              Discover Now
              <span className="bg-white text-[#d2bba0] w-6 h-6 rounded-full flex items-center justify-center">
                <ArrowRight size={14} strokeWidth={3} />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Right Cutout Card */}
        <div className="hidden lg:block absolute bottom-[-1px] right-[-1px] z-10 bg-white pt-8 pl-8 rounded-tl-[3rem]">
          {/* Helper to blend left side */}
          <div className="absolute bottom-0 left-[-39px] w-[40px] h-[40px] bg-transparent rounded-br-[40px] shadow-[15px_15px_0_15px_white]"></div>
          {/* Helper to blend top side */}
          <div className="absolute top-[-39px] right-0 w-[40px] h-[40px] bg-transparent rounded-br-[40px] shadow-[15px_15px_0_15px_white]"></div>
          
          <div className="flex flex-col sm:flex-row gap-6 max-w-[550px] bg-white pr-4 pb-4">
            {/* Card Text Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-3 leading-snug">
                60 Home Decor Ideas That Designers Swear By
              </h3>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed">
                Utilize drawers and shelves to store everyday office supplies and files you need access to. Credenzas with deep pull-out drawers can be fitted with file folder...
              </p>
              <button className="bg-[#d2bba0] text-white px-5 py-2 rounded-md flex items-center gap-2 text-sm font-bold tracking-wide hover:bg-[#c1aa8f] transition-colors">
                Exclusive 
                <span className="bg-white text-[#d2bba0] w-4 h-4 rounded-full flex items-center justify-center ml-1">
                  <ArrowRight size={10} strokeWidth={3} />
                </span>
              </button>
            </div>
            
            {/* Card Image */}
            <div className="w-[180px] h-[130px] flex-shrink-0 self-center">
              <img 
                src={decorSnippet} 
                alt="Decor Idea" 
                className="w-full h-full object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls (Bottom Center on Mobile, Bottom Left on Desktop) */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-8 md:left-24 z-20 flex gap-2 md:gap-4 w-max">
        {/* Previous Button (from your design) */}
        <div 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#f1f5f9] cursor-pointer hover:scale-105 transition-transform"
        >
          <ArrowRightLeft className="text-[#d2bba0] w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
        </div>
        
        {/* Slide Dots Indicator */}
        <div className="flex items-center gap-2 md:gap-3 bg-white px-4 md:px-6 rounded-full shadow-xl border-4 border-[#f1f5f9]">
          {slides.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'bg-[#d2bba0] w-8' : 'bg-gray-200 hover:bg-gray-300 w-2.5'}`}
            ></div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
