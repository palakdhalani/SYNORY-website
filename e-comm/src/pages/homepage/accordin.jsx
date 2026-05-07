import React, { useState } from 'react';
import decorImg from '../../assets/acc_decor.png';
import bedroomImg from '../../assets/acc_bedroom.png';
import chairsImg from '../../assets/acc_chairs.png';
import tablesImg from '../../assets/acc_tables.png';

const panels = [
  { id: 1, title: 'Home Decor', img: decorImg },
  { id: 2, title: 'Bedroom', img: bedroomImg },
  { id: 3, title: 'Chairs', img: chairsImg },
  { id: 4, title: 'Tables', img: tablesImg },
];

const AccordionSection = () => {
  const [active, setActive] = useState(2); // Bedroom is active by default

  return (
    <section className="container mx-auto px-4 md:px-8 py-20 bg-[#f1f5f9]">
      <div className="max-w-[1200px] mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Shop By Category</h2>
        <p className="text-slate-500">Explore our curated collections designed for every corner of your home.</p>
      </div>

      <div className="flex w-full h-[400px] md:h-[500px] container mx-auto gap-4 md:gap-6">
        {panels.map((panel) => (
          <div
            key={panel.id}
            onMouseEnter={() => setActive(panel.id)}
            onClick={() => setActive(panel.id)}
            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              active === panel.id ? 'flex-[3] md:flex-[4]' : 'flex-1'
            } group`}
          >
            {/* Background Image */}
            <img 
              src={panel.img} 
              alt={panel.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 transition-opacity duration-700 bg-gradient-to-t from-black/60 via-black/10 to-transparent ${
              active === panel.id ? 'opacity-80' : 'opacity-60'
            }`}></div>
            
            {/* Text Title */}
            <h3 className={`absolute bottom-6 md:bottom-8 left-4 md:left-8 text-white font-bold tracking-wide drop-shadow-md whitespace-nowrap transition-all duration-500 ${
                active === panel.id ? 'text-2xl md:text-4xl translate-y-0 opacity-100' : 'text-lg md:text-xl translate-y-0 opacity-80'
            }`}>
              {panel.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccordionSection;
