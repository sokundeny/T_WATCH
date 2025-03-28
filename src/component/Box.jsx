import 'react';

const Box = ({ image, name, price }) => {
  return (
    <div className="w-[367px]  rounded-xl shadow-md overflow-hidden ">
      {/* Image */}
      <img src={image} alt={name} className="w-full h-56 object-cover rounded-t-xl" />
      
      <div className="p-4 text-center">
        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        
        {/* Price */}
        <p className="text-md text-gray-600 mt-2">${price}</p>
      </div>
    </div>
  );
};

export default Box;
