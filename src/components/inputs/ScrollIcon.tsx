import Image from 'next/image';
import React, { FC } from 'react';

interface ScrollIconProps {
    icon: any; // Use string type for the icon source
    text: string;
}

const ScrollIcon: FC<ScrollIconProps> = ({ icon, text }) => {
    return (
        <div className='flex flex-col  gap-2 min-h-[75x] py-[10px] cursor-pointer min-w-fit  items-center text-gray-800'>
            <div className='h-[30px] '>
                <Image src={icon} alt={text}  className='object-contain h-[30px]' />
            </div>
            <span className='text-center text-[13px] font-medium '>{text}</span>
        </div>
    );
};

export default ScrollIcon;
