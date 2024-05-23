import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='max-lg:hidden mt-36 flex justify-between items3center bg-[linear-gradient(90deg,#F87516_0%,#5E11FF_100%)] w-full h-full px-36 py-4'>
        <div className='text-sm text-gray-300 outfit'>© 2023 Copywrite. All rights reserved by QodeMatrix</div>
        <div className='flex gap-6'>
            <p className='text-sm text-gray-300 outfit'>Documentation</p>
            <p className='text-sm text-gray-300 outfit'>Support</p>
        </div>
    </div>
    <div className='lg:hidden mt-36 flex flex-col justify-between items-center gap-4 bg-[linear-gradient(90deg,#F87516_0%,#5E11FF_100%)] w-full h-full px-36 py-4'>
        <div className='flex gap-8'>
            <p className='text-sm text-gray-300 outfit'>Documentation</p>
            <p className='text-sm text-gray-300 outfit'>Support</p>
        </div>
        <div className='text-sm text-gray-300 outfit'>© 2023 Copywrite. All rights reserved by QodeMatrix</div>
    </div>
    </>
  )
}

export default Footer