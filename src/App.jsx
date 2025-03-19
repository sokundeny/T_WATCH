import React from 'react';
import Navbar from './component/Navbar';
import {Route,Routes} from 'react-router-dom'
import Home from './page/Home';
import Categories from './page/Categories';
import Straps from './page/Straps';
import Accessories from './page/Accessories';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/straps' element={<Straps/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
      </Routes>
    </>
  );
}
export default App