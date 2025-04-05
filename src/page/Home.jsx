import React, { useState } from 'react';
import { slideitems } from '../constant/main.js';
import { imageData } from '../constant/main';
import Card from "../component/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Mousewheel, Keyboard ,Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState('new-arrival');

  return (
    <div className="w-full ">
      {/* Swiper Slider */}
      <div className="w-full h-[90vh]  p-10">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="w-full h-full !overflow-hidden"
      >
        {slideitems.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <img className="w-full h-full object-cover" src={item.image} alt={`Slide ${index + 1}`} />
            <a href={item.path} className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl text-gray-900">{item.name}</h2>
              <button className="relative overflow-hidden mt-4 px-6 py-2 border border-white uppercase transition-all duration-500 text-white before:absolute before:inset-0 before:bg-black before:w-0 before:h-full before:transition-all before:duration-500 before:left-0 before:top-0 hover:before:w-full">
                <span className="relative z-10">Shop Now</span>
              </button>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>


        {/* Custom Styles for Swiper Controls */}
        <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
            transform: translateY(-50%);
          }
          .swiper-pagination-bullet {
            background: white !important;
          }
        `}</style>
      </div>

      {/* Item Section */}
      <div className="w-full">
        {/* Tabs */}
        <div className="flex justify-center items-center gap-12">
          <h2 
            className={`text-xl md:text-2xl lg:text-4xl font-bold mb-10 cursor-pointer ${selectedTab === 'new-arrival' ? 'text-black' : 'text-gray-400'}`} 
            onClick={() => setSelectedTab('new-arrival')}
          >
            New Arrival
          </h2>
          <h2 className="text-4xl font-bold mb-10">|</h2>
          <h2 
            className={` text-xl md:text-2xl lg:text-4xl font-bold mb-10 cursor-pointer ${selectedTab === 'best-seller' ? 'text-black' : 'text-gray-400'}`} 
            onClick={() => setSelectedTab('best-seller')}
          >
            Best Seller
          </h2>
        </div>

        {/* New Arrival Section */}
        {selectedTab === 'new-arrival' && (
          <div className="w-full flex flex-col items-center mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 w-full justify-items-center">
              {imageData.slice(12, 16).map((data, index) => (
                <Card key={index} imageSrc={data.imageSrc} name={data.name} category={data.category} tag={data.tag} />
              ))}
            </div>
            <a href='/categories' className="mt-8">
              <button className="h-16 w-64 relative overflow-hidden px-6 py-2 border border-black text-black uppercase transition-all duration-500 before:absolute before:inset-0 before:bg-black before:w-0 before:h-full before:transition-all before:duration-500 before:left-0 before:top-0 hover:before:w-full hover:text-white">
                <span className="relative z-10">Shop Now</span>
              </button>
            </a>
          </div>
        )}

        {/* Best Seller Section */}
        {selectedTab === 'best-seller' && (
          <div className="w-full flex flex-col items-center mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 w-full justify-items-center">
              {imageData.slice(4, 8).map((data, index) => (
                <Card key={index} imageSrc={data.imageSrc} name={data.name} category={data.category} tag={data.tag} />
              ))}
            </div>
            <a href='/categories' className="mt-8">
              <button className="h-16 w-64 relative overflow-hidden px-6 py-2 border border-black text-black uppercase transition-all duration-500 before:absolute before:inset-0 before:bg-black before:w-0 before:h-full before:transition-all before:duration-500 before:left-0 before:top-0 hover:before:w-full hover:text-white">
                <span className="relative z-10">Shop Now</span>
              </button>
            </a>
          </div>
        )}
      </div>

      {/* Upcoming Section */}
      <div className="w-full flex flex-col items-center mt-20">
        <h2 className="text-4xl font-bold mb-10">Upcoming Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 w-full justify-items-center">
          {imageData.slice(0, 4).map((data, index) => (
            <Card key={index} imageSrc={data.imageSrc} name={data.name} category={data.category} tag={data.tag} />
          ))}
        </div>
        <a href='/categories' className="mt-8">
          <button className="h-16 w-64 relative overflow-hidden px-6 py-2 border border-black text-black uppercase transition-all duration-500 before:absolute before:inset-0 before:bg-black before:w-0 before:h-full before:transition-all before:duration-500 before:left-0 before:top-0 hover:before:w-full hover:text-white">
            <span className="relative z-10">Shop Now</span>
          </button>
        </a>
      </div>

      {/* Video Section */}
      <div className="w-full px-10 py-20">
        <iframe 
          className="w-full h-1/6 aspect-video pointer-events-none" 
          src="https://www.youtube.com/embed/oL5bUuvfCqo?autoplay=1&controls=0&mute=1&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=oL5bUuvfCqo" 
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
