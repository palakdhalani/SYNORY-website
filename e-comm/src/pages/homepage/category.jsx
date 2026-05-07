import React from 'react';
import { Heart, ShoppingBag, ArrowUpRight } from 'lucide-react';

// Import our generated product images
import prodStool1 from '../../assets/prod_stool_1.png';
import prodStool2 from '../../assets/prod_stool_2.png';
import prodLamp1 from '../../assets/prod_lamp_1.png';
import prodLamp2 from '../../assets/prod_lamp_2.png';
import prodChair1 from '../../assets/prod_chair_1.png';
import prodChair2 from '../../assets/prod_chair_2.png';
import prodTable1 from '../../assets/prod_table_1.png';
import prodTable2 from '../../assets/prod_table_2.png';

const products = [
  {
    id: 1,
    name: 'Raffia Bar Stool',
    price: '$88.50',
    img1: prodStool1,
    img2: prodStool2,
  },
  {
    id: 2,
    name: 'Table Lamp Black',
    price: '$67.00',
    img1: prodLamp1,
    img2: prodLamp2,
  },
  {
    id: 3,
    name: 'Bat Lounge Low Back',
    price: '$450.00',
    img1: prodChair1,
    img2: prodChair2,
  },
  {
    id: 4,
    name: 'Fusuma Coffee Table',
    price: '$749.00',
    img1: prodTable1,
    img2: prodTable2,
  },
  // Duplicating for a full grid effect
  {
    id: 5,
    name: 'Classic Raffia Stool',
    price: '$88.50',
    img1: prodStool1,
    img2: prodStool2,
  },
  {
    id: 6,
    name: 'Modern Black Lamp',
    price: '$67.00',
    img1: prodLamp1,
    img2: prodLamp2,
  },
  {
    id: 7,
    name: 'Grey Lounge Chair',
    price: '$450.00',
    img1: prodChair1,
    img2: prodChair2,
  },
  {
    id: 8,
    name: 'Round Coffee Table',
    price: '$749.00',
    img1: prodTable1,
    img2: prodTable2,
  },
];

const CategorySection = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-20 ">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Products</h2>
          <a href="#" className="flex items-center gap-2 text-sm font-bold text-[#d2bba0] hover:text-[#bda488] transition-colors">
            View All Products
            <div className="w-5 h-5 rounded-full bg-[#d2bba0] flex items-center justify-center text-white">
              <ArrowUpRight size={12} strokeWidth={3} />
            </div>
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col items-center">
              
              {/* Image Container with Hover Effect */}
              <div className="w-full aspect-[4/5] relative bg-white overflow-hidden mb-4 rounded-xl cursor-pointer">
                {/* Heart Icon (Top Right) */}
                <button className="absolute top-4 right-4 z-20 text-gray-300 hover:text-red-500 transition-colors">
                  <Heart size={20} strokeWidth={1.5} />
                </button>

                {/* Default Image */}
                <img 
                  src={product.img1} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-500 ease-in-out group-hover:opacity-0" 
                />
                
                {/* Hover Image */}
                <img 
                  src={product.img2} 
                  alt={`${product.name} alternate view`} 
                  className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105" 
                />

                {/* Add to Cart Button (Slides up on hover) */}
                <div className="absolute left-0 right-0 bottom-[-60px] flex justify-center pb-4 transition-all duration-500 ease-out group-hover:bottom-0 z-20">
                  <button className="bg-slate-900 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 hover:bg-slate-800 hover:-translate-y-1 transition-all">
                    <ShoppingBag size={16} /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="text-center w-full">
                <h3 className="text-sm font-medium text-slate-800 mb-1 hover:text-[#d2bba0] cursor-pointer transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm font-bold text-red-500">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
