import React from 'react'

const Footer = () => {
  return (
    <div className='mt-36 flex justify-between items3center bg-[linear-gradient(90deg,#F87516_0%,#5E11FF_100%)] w-full h-full px-36 py-4'>
        <div className='text-sm text-gray-300 outfit'>© 2023 Copywrite. All rights reserved by QodeMatrix</div>
        <div className='flex gap-6'>
            <p className='text-sm text-gray-300 outfit'>Documentation</p>
            <p className='text-sm text-gray-300 outfit'>Support</p>
        </div>
    </div>
  )
}

export default Footer