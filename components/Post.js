import Image from "next/image";
import React from "react";
import {AiOutlineLike , AiOutlineComment,AiOutlineShareAlt} from "react-icons/ai";

const Post = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-white mt-6 rounded-md p-4 shadow-sm">
        <div className="flex items-center">
          <p className="py-4">Lorem Ep</p>
        </div>
        <div className="relative h-60 md:h-96 bg-white ">
          <Image
            src="https://images.freeimages.com/365/images/previews/19c/logo-mockups-paper-edition-56391.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/*  Post Footer */}
        <div className='flex items-center justify-center bg-white p-2'>
            <div className='flex items-center space-x-1 hover:bg-gray-100 cursor-pointer flex-ite justify-center p-2 rounded-xl'>
                <AiOutlineLike className='h-4' />
                <p className='text-xs sm:text-base'>Like</p>
            </div>
            <div className='flex items-center space-x-1 hover:bg-gray-100 cursor-pointer flex-grow justify-center p-2 rounded-xl'>
                <AiOutlineComment className='h-4' />
                <p className='text-xs sm:text-base'>Comments</p>
            </div>
            <div className='flex items-center space-x-1 hover:bg-gray-100 cursor-pointer flex-grow justify-center p-2 rounded-xl'>
                <AiOutlineShareAlt className='h-4' />
                <p className='text-xs sm:text-base'>Share</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
