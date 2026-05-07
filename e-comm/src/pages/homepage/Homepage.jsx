import React from 'react';
import Navbar from './Navbar';
import Hero from './hero';
import ProSection from './pro';
import Product from './product';
import GridSection from './grid';
import AccordionSection from './accordin';
import CategorySection from './category';
import FaQ from './FaQ';
import Footer from './footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans">
      <Navbar />
      <Hero />
      <ProSection />   
      <Product />
      <GridSection />
      <AccordionSection />
      <CategorySection />
      <FaQ />
      <Footer />
    </div>
  );
};

export default Homepage;
