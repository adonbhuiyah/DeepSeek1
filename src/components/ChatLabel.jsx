import React from 'react';
import img from '../../public/images';
import Image from 'next/image';

const ChatLabel = ({openMenu,setOpenMenu}) => {
  return (
    <div className='group flex cursor-pointer items-center justify-between rounded-lg p-2 text-sm text-white/80 hover:bg-white/10'>
      <p className='truncate group-hover:max-w-5/6'>Chat Name Here</p>
      <div className='group relative flex flex-center size-6 aspect-square hover:bg-black/80 rounded-lg'>
        <Image src={img.three_dots} className={`w-4 ${openMenu.open ? 'block' : 'hidden'} group-hover:block`} alt='' />
        {openMenu.open ?<div className='absolute -right-36 top-6 bg-gray-700 rounded-xl w-max p-2'>
          <div className='flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg'>
            <Image src={img.pencil_icon} className='w-4' alt=''  />
            <p>Rename</p>
          </div>
           <div className='flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg'>
            <Image src={img.delete_icon} className='w-4' alt=''  />
            <p>Delete</p>
          </div>
        </div>: "" }
        
      </div>
    </div>
  );
};

export default ChatLabel;
