import React from 'react';
import Navbar from './component/Navbar';
import {Route,Routes, useLoaderData, useLocation} from 'react-router-dom'
import Home from './page/Home';
import Categories from './page/Categories';
import Straps from './page/Straps';
import Accessories from './page/Accessories';
import CheckOut from './page/CheckOut'
import Footer from './component/Footer';
import ProductDetail from './component/ProductDetails';


import { ModalProvider} from './ModalContext';
import CartModal from './component/CartModal';

const ORDERS = [

];

function App() {
  const [orders, setOrders] = React.useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : ORDERS;
  });

  React.useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem('orders', JSON.stringify(orders));
    }
  }, [orders]);

  const location = useLocation();
  const noNavPage = ['/checkout']

  const updateCart = (product, quantity) => {
    setOrders((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProductIndex = updatedCart.findIndex(
        (item) => item.name === product.name
      );

      const newProduct = {
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image,
        index: prevCart.length > 0 ? prevCart[prevCart.length - 1].index + 1 : 1, 
      };
  
      if (existingProductIndex !== -1)
        updatedCart[existingProductIndex].quantity += quantity;
      
      else 
        updatedCart.push(newProduct);      

      return updatedCart
    })
  }

  const handleDelete = (index) => {
    setOrders((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.index !== index);
      return updatedCart;
    });
  }

  return (
    <ModalProvider>
      {/* Ah nis display navbar krob page krav pi checkout */}
      {!noNavPage.includes(location.pathname) && <Navbar />} 
      
      <CartModal orders={orders} onDelete={handleDelete}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/straps' element={<Straps/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path="/product/:productName" element={<ProductDetail updateCart={updateCart}/>} />
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
      {!noNavPage.includes(location.pathname) && <Footer />}
    </ModalProvider>
  );
}
export default App