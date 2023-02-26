import React from 'react'

const RightSideBar = () => {
  return (
    <div className='hidden md:inline-flex flex-col'>
        <div className='flex items-center text-gray-500 '>
            <p className='flex text-lg font-semibold flex-grow'>
                Contacts
            </p>
            <div className='flex space-x-1 px-2'>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default RightSideBar;