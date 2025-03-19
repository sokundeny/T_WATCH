import React,{useState} from 'react'
import logo from './../assets/logo.png'
import { IoSearch,IoPersonCircleOutline,IoCartOutline,IoMenu,IoClose} from "react-icons/io5";
import {navmenu} from '../constant/main.js'

const Navbar = () => {
  const [visible,setVisible]=useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };
  return (
    <div className='w-screen bg-secondary h-10  px-10 sm:px-20 lg:px-32 py-10 flex  items-center justify-between overflow-hidden'>
      <div className='flex-1'>
        <ul className=' gap-x-12 text-lg hidden lg:flex'>
          {navmenu.map((item,index)=>(
            <li key={index}>
              <a href={item.path} className='relative group'>{item.name} <div className="absolute top-12 left-0 w-full bg-black scale-x-0 h-0.5 origin-left group-hover:scale-x-100 duration-300"></div></a>
            </li>
          ))}
        </ul>
        <IoMenu onClick={toggleMenu}className="text-2xl sm:text-3xl cursor-pointer lg:hidden" />
        <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 z-10 ${visible ? "block" : "hidden"}`} onClick={toggleMenu}>
          <div className="absolute top-0 left-0 w-full h-full bg-white p-10" >
            <IoClose onClick={toggleMenu} className="text-3xl absolute top-5 right-5 cursor-pointer" />
            <ul className="flex flex-col gap-y-5">
              {navmenu.map((item, index) => (
                <li key={index}>
                  <a href={item.path} className="text-lg">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=' justify-center h-[128px] w-[128px] shrink-0 '><a href="/">
          <img className='h-full w-full object-contain' src={logo} alt="logo" />
        </a>
      </div>
      <div className='flex items-center justify-end gap-5 sm:gap-10 lg:gap-12 flex-1' >
        <IoSearch className="text-2xl sm:text-3xl cursor-pointer" />
        <IoPersonCircleOutline className="text-2xl sm:text-3xl cursor-pointer" />
        <IoCartOutline className="text-2xl sm:text-3xl cursor-pointer" />
      </div>
    </div>
  )
}

export default Navbar