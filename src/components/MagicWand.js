import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const MagicWand = () => {
  return (
    <div className='flex justify-between mt-36 max-lg:-mx-3'>
        <div className='flex flex-col'>
            <div className='text-4xl font-medium text-gray-100 leading-relaxed sora w-2/3 max-lg:text-3xl max-lg:w-4/5'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</div>
            <div className='font-normal text-gray-400 text-lg w-3/4 max-lg:w-4/5 mt-5'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</div>
            <button className='flex items-center justify-center gap-6 py-4 mt-8 text-xl text-white  rounded-2xl font-light w-1/3 max-lg:w-1/2 bg-gradient-to-r from-orange-500 via-orange-purple to-purple-600 sora'>Purchase From Envato <span><FaArrowRightLong size={20} /></span></button>
        </div>
        <div className='w-1/4 max-lg:w-1/2'>
            <img src="/img/magicbrush.png" alt="magicbrush" className=''/>
        </div>
    </div>
  )
}

export default MagicWand