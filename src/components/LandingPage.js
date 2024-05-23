import React from 'react'

const LandingPage = () => {
  return (
    <div className='grid grid-cols-4 mt-24'>
      <div className='flex flex-col w-1/2 max-lg:w-3/4 gap-4'>
        <div className='gradient-text text-xl outfit'>Transform Your Website</div>
        <div className='text-white text-xl outfit font-light'>With Motion Art Effect</div>
      </div>
      <div className='flex flex-col gap-10 col-span-2 '>
        <div className='text-6xl text-white font-medium leading-tight tracking-wide sora max-lg:text-4xl max-lg:leading-relaxed'>Attract Your Visitors Attention With Colorful <span className='gradient-text'>Motion Art Effect</span></div>
        <div className='font-normal text-gray-400 text-lg w-11/12'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website</div>
      </div>
      <div></div>
    </div>
  )
}

export default LandingPage