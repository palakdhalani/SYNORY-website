import React from 'react';
import gridSofa from '../../assets/grid_sofa.png';
import gridBedroom from '../../assets/grid_bedroom.png';
import gridKitchen from '../../assets/grid_kitchen.png';
import gridLiving from '../../assets/grid_living.png';
import { Flame, ArrowUpRight } from 'lucide-react';

const GridSection = () => {
    return (
        <section className="container mx-auto px-4 md:px-8 py-20 ">
            <div className="flex flex-col lg:flex-row gap-8 container mx-auto relative">

                {/* Left Side (Sofa + Bottom Row) */}
                <div className="w-full lg:w-[66.666%] flex flex-col gap-8">

                    {/* Sofa Image */}
                    <div className="w-full h-[350px] md:h-[450px] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden">
                        <img src={gridSofa} alt="Modern Sofa" className="w-full h-full object-cover" />

                        {/* 2026 Collection Pill */}
                        <div className="absolute bottom-6 left-6 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md text-sm font-bold text-red-400 z-20">
                            <Flame size={16} fill="currentColor" /> 2026 New Collection
                        </div>

                        {/* The White Cutout Shape (Bottom Right) */}
                        <div className="hidden lg:block absolute bottom-[-1px] right-[-1px] w-[140px] h-[140px] bg-[#f1f5f9] rounded-tl-[3.5rem] z-10">
                            {/* Corner Smoothing Helpers */}
                            <div className="absolute bottom-0 left-[-39px] w-[40px] h-[40px] bg-transparent rounded-br-[40px] shadow-[15px_15px_0_15px_#f1f5f9]"></div>
                            <div className="absolute top-[-39px] right-0 w-[40px] h-[40px] bg-transparent rounded-br-[40px] shadow-[15px_15px_0_15px_#f1f5f9]"></div>
                        </div>
                    </div>

                    {/* Bottom Row: Text & Kitchen */}
                    <div className="flex flex-col md:flex-row gap-8 mt-4 md:mt-12">
                        <div className="flex-1 flex flex-col justify-center py-4 md:pr-4">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                                Synory's New Collection Has Everything for a Chic and Cozy Upgrade
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Give your space a chic and cozy upgrade! From soft linens to stylish decor, find everything you need for that perfect blend of comfort and elegance.
                            </p>
                        </div>

                        {/* Kitchen */}
                        <div className="flex-1 h-[200px] md:h-[240px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative group">
                            <img src={gridKitchen} alt="Kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20"></div>
                            <span className="absolute bottom-6 right-6 text-white text-2xl font-bold tracking-wide uppercase drop-shadow-md">Kitchen</span>
                        </div>
                    </div>

                </div>

                {/* Right Side (Title + Bedroom + Living Room) */}
                <div className="w-full lg:w-[33.333%] flex flex-col gap-8">

                    {/* Title */}
                    <div className="flex items-start justify-between pt-2">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-[240px] text-slate-900 tracking-tight">
                            Customize the New Boho Collection
                        </h2>
                        <div className="w-8 h-8 rounded-full bg-[#d2bba0] flex items-center justify-center text-white cursor-pointer hover:bg-[#c1aa8f] flex-shrink-0 mt-2">
                            <ArrowUpRight size={16} strokeWidth={3} />
                        </div>
                    </div>

                    {/* Bedroom */}
                    <div className="w-full h-[200px] md:h-[220px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative group">
                        <img src={gridBedroom} alt="Bedroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30"></div>
                        <span className="absolute top-1/2 -translate-y-1/2 left-6 text-white text-2xl font-bold tracking-wide uppercase">Bedroom</span>
                    </div>

                    {/* Living Room */}
                    <div className="w-full h-[300px] md:h-[350px] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group mt-4 md:mt-12">
                        <img src={gridLiving} alt="Living Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20"></div>
                        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max text-white text-2xl font-bold tracking-wide uppercase drop-shadow-md">Living Room</span>
                    </div>

                </div>

                {/* The Center Circular Badge */}
                {/* Placed absolutely exactly at the gap between the two main columns, at the bottom of the sofa image */}
                <div
                    className="hidden lg:flex absolute z-20 items-center justify-center"
                    style={{
                        top: '450px',
                        left: 'calc(66.666% - 16px)',
                        transform: 'translate(-80%, -70%)',
                        width: '140px',
                        height: '140px'
                    }}
                >
                    {/* Circle Text SVG */}
                    <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_12s_linear_infinite]">
                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                        <text className="text-[10px] font-bold tracking-[0.25em] fill-slate-800 uppercase">
                            <textPath href="#circlePath" startOffset="0%">MADE IN GERMANY • SINCE 2001 • </textPath>
                        </text>
                    </svg>
                    {/* Inner Button */}
                    <div className="w-14 h-14 bg-[#d2bba0] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-[#c1aa8f] transition-colors relative z-10">
                        <ArrowUpRight size={22} strokeWidth={2.5} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GridSection;
