import Image from 'next/image';

import SidebarItem from './SidebarItem';
import { ImMakeGroup, ImSoundcloud2, ImUsers } from "react-icons/im";
import { MdFreeCancellation, MdKeyboardArrowDown, MdOutlineOndemandVideo } from 'react-icons/md';

const SideBar = () => {;
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl'>
       <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer '>
            <Image src="/images/facebook_icon.svg" width={40} height ={40} className='rounded-full cursor-pointer' />
            <p className='hidden sm:inline-flex font-medium'>Mojtaba Pourasghar</p>
            
       </div>    
       <SidebarItem Icon={ImUsers} value="Users" />
       <SidebarItem Icon={ImMakeGroup} value="Groups" />
       <SidebarItem Icon={ImSoundcloud2} value="Clouds" />
       <SidebarItem Icon={MdFreeCancellation} value="Calenders" />
       
       <SidebarItem Icon={MdOutlineOndemandVideo} value="Watch" />
       <SidebarItem Icon={MdKeyboardArrowDown} value="See More" />
    </div>
  );
}

export default SideBar;