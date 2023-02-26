import Image from 'next/image';
import React from 'react';
import {  BiHome, BiSearchAlt2 } from "react-icons/bi";
import { RiFlag2Line } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { CgArrowDown, CgArrowDownO, CgBell, CgComment, CgDrop, CgDropInvert, CgExpand, CgMenuGridO } from "react-icons/cg";
import { signOut } from 'next-auth/react';

const Header = () => {
  return (
    <div className='bg-white flex items-center p-2  shadow-md top-0 sticky z-50 h-16'>
        {/** Left */}
            <div className='flex'>
                <Image src="/images/facebook_icon.svg" width={40} height ={40} />
                <div className='flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500'>
                    <BiSearchAlt2 size={20} />
                    <input type="text" placeholder='Search' className='hidden lg:inline-flex bg-transparent focus:outline-none ' />
                </div>
            </div>
        {/** Center */}
            <div className='flex flex-grow justify-center mx-2 '>
                <div className='flex items-center '>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <BiHome className='mx-auto' size={25} />
                    </div>
                </div>
                <div className='flex items-center '>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <RiFlag2Line className='mx-auto' size={25} />
                    </div>
                </div>
                <div className='flex items-center '>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <MdOutlineOndemandVideo className='mx-auto' size={25} />
                    </div>
                </div>
                <div className='flex items-center '>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <AiOutlineShop className='mx-auto' size={25} />
                    </div>
                </div>
                <div className='flex items-center '>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                    <IoGameControllerOutline className='mx-auto' size={25} />
                    </div>
                </div>
            </div>
        {/** Right */}
        <div className='flex items-center justify-end min-w-fit space-x-2'>
            <Image src="/images/facebook_icon.svg" width={40} height ={40} className='cursor-pointer' onClick={signOut} />
            <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs'>Mojtaba</p>
            <CgMenuGridO size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 
            cursor-pointer hover:bg-gray-300'  />
            <CgBell size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 
            cursor-pointer hover:bg-gray-300'  />
            <CgComment size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 
            cursor-pointer hover:bg-gray-300'  />
            <CgExpand size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 
            cursor-pointer hover:bg-gray-300'  />
        </div>
    </div>
  );
};

export default Header;