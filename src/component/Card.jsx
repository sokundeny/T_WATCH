
import 'react';

const Card = ({ imageSrc, name,tag }) => {
  const tagStyles = () => {
    switch (tag) {
      case 'NEW RELEASE':
        return 'text-orange-500 border border-orange-500  px-2 '; 
      case 'BEST SELLER':
        return ' text-red-600 border border-red-600 px-2'; 
      case 'LIMITED EDITION':
        return ' text-green-600 border border-green-600 px-2';  
      default:
        // return 'bg-gray-800 text-white'; 
    }
  };

  return (
    <div className="max-w-sm rounded  ">
        <div className='relative w-78 h-72 overflow-hidden'>
        <img className="w-48 h-64 object-cover ml-20 relative z-0 rounded-lg transition-all duration-700  hover:scale-150  " src={imageSrc}  />
        {tag && (
          <div className={`absolute top-1 right-8 text-[8px] font-semibold rounded-full w-12 h-12 flex items-center justify-center z-10 text-center ${tagStyles()}`}>
            {tag}
          </div>
        )}
        </div>
      <div className="py-4 px-8 ml-28">
        <div className="font-popins font-thin text-xl mb-4  text-start">{name}</div>
      </div>
    </div>
  );
};

export default Card;
