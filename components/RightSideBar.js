import React from 'react'
import { BiVideoPlus ,BiSearch,BiDotsHorizontalRounded} from "react-icons/bi";
import Contacts from './Contacts';

const RightSideBar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500 '>
            <p className='flex text-lg font-semibold flex-grow'>
                Contacts
            </p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                    <BiVideoPlus />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                    <BiSearch />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-100 cursor-pointer'>
                    <BiDotsHorizontalRounded />
                </div>
            </div>
            
        </div>
        <Contacts status= "Online"  src="https://thumbs.dreamstime.com/z/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" name="Mojtaba Pourasghar" />
        <Contacts status= "Online"  src="https://thumbs.dreamstime.com/z/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg" name="Arsam Pourasghar" />
        <Contacts status= "Offline"  src="https://thumbs.dreamstime.com/z/handsome-woman-index-finger-shows-blank-phone-screen-where-you-can-place-your-ad-positive-young-girl-smiles-snow-white-smile-140272662.jpg" name="Elina Ahmadi" />
        <Contacts status= "Online"  src="https://thumbs.dreamstime.com/z/handsome-woman-red-sweater-isolated-yellow-studio-handsome-woman-red-sweater-isolated-yellow-studio-191722684.jpg" name="Kimia Sajjadi" />
    </div>
  )
}

export default RightSideBar;