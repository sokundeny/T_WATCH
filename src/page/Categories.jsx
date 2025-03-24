import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Card from "../component/Card";
import { imageData } from '../constant/main';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterWatches = (category) => {
    if (category === 'All') {
      return imageData; 
    }
    return imageData.filter(watch => watch.category === category); 
  };

  return (
    <>
      <Navbar />
      
    
      <div className="flex justify-start ml-32 space-4 mt-16 flex-wrap sm:space-x-8">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`h-10 w-36 text-xl  ${selectedCategory === 'All' ? 'bg-black text-white' : 'border-2 border-black'}`}
        >
          Filter
        </button>
        <button
          onClick={() => setSelectedCategory('Men')}
          className={`h-10 w-36 text-xl ${selectedCategory === 'Men' ? 'bg-black text-white ' : ' border-2 border-black'}`}
        >
          Men
        </button>
        <button
          onClick={() => setSelectedCategory('Women')}
          className={`h-10 w-36 text-xl  ${selectedCategory === 'Women' ? 'bg-black text-white' : ' border-2 border-black'}`}
        >
          Women
        </button>
        <button
          onClick={() => setSelectedCategory('Limited')}
          className={`h-10 w-36 text-xl  ${selectedCategory === 'Limited' ? 'bg-black text-white' : ' border-2 border-black'}`}
        >
          Limited
        </button>
      </div>

      {/* Watch Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mt-16">
        {filterWatches(selectedCategory).map((data, index) => (
           <Card key={index} imageSrc={data.imageSrc} name={data.name} category={data.category} tag={data.tag} />
        ))}
      </div>
    </>
  );
};

export default Categories;
