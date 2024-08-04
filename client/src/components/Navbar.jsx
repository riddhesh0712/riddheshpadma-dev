import React from 'react'
import { FaResearchgate } from "react-icons/fa";


export const Navbar = () => {
  return (
    <div className='text-white z-20'>
        <nav className='fixed top-0 right-0 left-0'>
            <div className='flex justify-between items-center p-4'>
                <div className='flex justify-between items-center p-2'>
                    <div className='flex justify-center items-center space-x-2 p-3 rounded-lg backdrop-blur-sm'>
                        <FaResearchgate size={30}/>
                        <span className='text-xl font-bold '>RIDDHESH</span>
                    </div>
                    <div className='relative ml-28 backdrop-blur-lg  rounded-md  '>
                        <div className=''>
                            <ul className='hidden lg:flex justify-around items-center'>
                                <a href="#home">
                                    <li className='py-3 px-6 text-sm hover:text-amber-400 transform ease-in-out duration-500 '>Home</li>
                                </a>
                                <a href="#portfolio">
                                <li className='py-3 px-6 text-sm hover:text-amber-400 transform ease-in-out duration-500'>Portfolio</li>
                                </a>
                                <a href="#aboutme">
                                <li className='py-3 px-6 text-sm hover:text-amber-400 transform ease-in-out duration-500'>About Me</li>
                                </a>
                                <a href="#skills">
                                <li className='py-3 px-6 text-sm hover:text-amber-400 transform ease-in-out duration-500'>Skills</li>
                                </a>
                                <a href="#services">
                                <li className='py-3 px-6 text-sm hover:text-amber-400 transform ease-in-out duration-500'>Blogs</li>
                                </a>
                                <a href="#contact">
                                <li className='py-3 px-6 text-sm hover:text-amber-400 transform ease-in-out duration-500'>Contact</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center p-2  rounded-md backdrop-blur-sm'>
                    <div className='w-5 h-5 rounded-full bg-white'></div>
                </div>
            </div>
        </nav>
    </div>
  )
}
