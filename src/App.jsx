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
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

function App() {
  const [orders, setOrders] = React.useState(ORDERS);
  const location = useLocation();

  const noNavPage = ['/checkout']

  return (
    <ModalProvider>
      {/* Ah nis display navbar krob page krav pi checkout */}
      {!noNavPage.includes(location.pathname) && <Navbar />} 
      
      <CartModal orders={orders} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/straps' element={<Straps/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        <Route path="/product/:productName" element={<ProductDetail />} />
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
      {!noNavPage.includes(location.pathname) && <Footer />}
    </ModalProvider>
  );
}
export default App