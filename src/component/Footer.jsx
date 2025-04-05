import React from 'react'
import { FaFacebookF,FaInstagram ,FaTiktok} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='w-screen bg-secondary px-10 sm:px-20 lg:px-32 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-52 justify-center'>
      {/* {left-container} */}
      <div className="text-left flex items-center justify-start flex-col gap-6">
        <div className="w-full text-2xl">
          <h1>About Us</h1>
        </div>
        <div className="text-base">
          <p>We have brought Cambodian youngsters’ interest toward using modern, and luxurious watches. We hold our belief of bringing new styles and fashion to Cambodia by the simplicity of what is worn on our hands.</p>
        </div>
        <div className="w-full flex justify-start space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100079509407906" target="_blank" className="text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://instargram.com/" target="_blank" className="text-2xl">
            <FaInstagram />
          </a>
          <a href="https://youtu.be/UBj9OmRnKh4?list=RDMMUBj9OmRnKh4" target="_blank" className="text-2xl">
            <FiYoutube />
          </a>
          <a href="https://www.tiktok.com/@seguidores.legit/video/7480292362703424790?is_from_webapp=1&sender_device=pc" target="_blank" className="text-2xl">
            <FaTiktok />
          </a>
        </div>
      </div>
        {/* {middle-container} */}
      <div className="w-full text-left flex items-center justify-start flex-col gap-6 ">
          <div className="text-2xl w-full">
            <h1>Footer Menu</h1>
          </div>
          <div className="text-base space-y-4 w-full">
            <p>Watches</p>
            <p>Accessories</p>
            <p>About Us</p>
            <p>Terms & Conditions</p>
            <p>About Us</p>
          </div>
      </div>
        {/* {right-container} */}
      <div className="w-full text-left lg:text-right flex items-center justify-start flex-col gap-6">
        <div className="w-full text-2xl">
          <h1>Address</h1>
        </div>
        <div className="w-full text-base">
          <p>Bridge 2, National Road 6A,<br /> Sangkat Prek Leap, Khan Chroy Changva, Phnom Penh</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
