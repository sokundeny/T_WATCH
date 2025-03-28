
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
// import { Strapsdata } from '../constant/main';
import { Strapsdata } from '../constant/main';

const Straps = () => {
  return (
    <>
      <h1 className="flex justify-center mt-10 text-2xl">Watch Box Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-16 px-20 mt-20 ">
        {Strapsdata.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name}  />
            <p className='flex justify-center  ' >{item.name}</p>
            <p className='flex justify-center text-gray-500 mt-2'>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Straps
