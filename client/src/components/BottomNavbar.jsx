import React from 'react'
import { TbSmartHome } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { FaServicestack } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

export const BottomNavbar = () => {
  return (
    <div className='fixed lg:hidden md:w-fit bottom-0 left-0 right-0 sm:-right-0 p-4 text-white z-20'>
        <div className='flex justify-center items-center backdrop-blur-lg rounded-xl   '>
            <ul className='flex justify-center items-center'>
                <li className='py-4 px-4 rounded-xl hover:text-black hover:bg-white'><TbSmartHome size={24}/></li>
                <li className='py-4 px-4 rounded-xl hover:text-black hover:bg-white'><BiCategory size={24}/></li>
                <li className='py-4 px-4 rounded-xl hover:text-black hover:bg-white'><GoPerson size={28}/></li>
                <li className='py-4 px-4 rounded-xl hover:text-black hover:bg-white'><FaServicestack size={24}/></li>
                <li className='py-4 px-4 rounded-xl hover:text-black hover:bg-white'><MdContactPage size={28}/></li>
                <li className='py-4 px-4 rounded-xl hover:text-black hover:bg-white'><TfiEmail size={24}/></li>
            </ul>
        </div>
    </div>
  )
}
