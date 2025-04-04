import React from 'react';
import { Strapsdata } from '../constant/main';

const Straps = () => {
  return (
    <>
      <h1 className="flex justify-center mt-10 text-2xl">Watch Strap Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 px-20 mt-20 ">
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
