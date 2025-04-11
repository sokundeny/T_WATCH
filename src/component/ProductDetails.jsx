import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Card from './Card';
import { imageData, Strapsdata, Boxdata } from '../constant/main';

const ProductDetail = ({ updateCart }) => {
  const location = useLocation();
  const { product } = location.state || {};


  // const { productName } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    updateCart(product, quantity);
  }

  // // Find the product from imageData based on the URL parameter
  // const products = [...Boxdata,...Strapsdata,...imageData];
  // const product = products.find(item =>
  //   item.name.replace(/\s+/g, '-').toLowerCase() === productName
  // );

  // if (!product) {
  //   return <div className="text-center mt-20 text-2xl">Product not found</div>;
  // }

  // // Sample data for "You May Also Like" and "Recently Viewed"
  const recommendedProducts = imageData.slice(0, 4); // First 4 products for "You May Also Like"
  const recentlyViewed = [
    ...imageData.slice(0, 1), // One watch
    ...Strapsdata.slice(0, 1), // One strap
    ...Boxdata.slice(0, 1), // One box
    ...imageData.slice(1, 2), // Another watch
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Main Product Section */}
      <div className="flex-grow max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-3/4 md:w-full h-auto object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold uppercase">{product.name}</h1>
            <p className="text-gray-500 mt-2 uppercase">{product.tag}</p>
          <p className="text-2xl font-semibold mt-4">${product.price}</p> {/*Add price to imageData if needed*/}

            {/* Quantity Selector */}
            <div className="flex items-center mt-4">
              <button
                className="px-3 py-1 bg-gray-200 rounded-md"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="mx-4">{quantity}</span>
              <button
                className="px-3 py-1 bg-gray-200 rounded-md"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-6 w-48 py-2 bg-black text-white uppercase rounded-md hover:bg-gray-800 transition-colors"
                    onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            {/* Product Description */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              Celebrating 2024 Chinese New Year with an exclusive masterpiece that honors the powerful Dragon, the only mythical creature in the Chinese zodiac representing strength, courage, and nobility. Encased in the 44mm Rose Gold plated stainless steel case with coral red dial, this edition is limited to 100 pieces only. The craftsmanship features the unique 1-second spin turbine that is symbolic to the Zinvo Blade series.
            </p>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center uppercase">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
            {recommendedProducts.map((data, index) => (
              <Card
                key={index}
                imageSrc={data.imageSrc}
                name={data.name}
                category={data.category}
                tag={data.tag}
              />
            ))}
          </div>
        </div>

        {/* Recently Viewed Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center uppercase">Recently Viewed</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
            {recentlyViewed.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.imageSrc || item.image}
                  alt={item.name}
                  className="w-48 h-64 object-cover rounded-lg"
                />
                <p className="mt-4 text-center uppercase">{item.name}</p>
                <p className="mt-4 text-center uppercase">{item.price}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;