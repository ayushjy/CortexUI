import React from 'react'

const Features = () => {
    const data=[
        {
            image:"/img/lightweight.png",
            heading:"Light Weight",
            feature:"Motion Art for Elementor is designed to be lightweight."
        },
        {
            image:"/img/like.png",
            heading:"100% Responsive",
            feature:"Create a consistent visual experience across all devices."
        },
        {
            image:"/img/interface.png",
            heading:"User Friendly Interface",
            feature:"Ensure a smooth experience for both applicants and administrators."
        }
    ]
  return (
    <div className='mt-36'>
        <div className='flex flex-col items-center gap-4'>
        <div className='text-4xl font-medium text-gray-100 leading-relaxed sora w-1/2 flex justify-center text-center'>An All-Round Plugin With Powerful Features</div>
        <div className='font-normal text-gray-400 flex justify-center w-1/2 text-center text-lg'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</div>
        </div>
        <div className='mt-24 flex gap-6'>
          
          
        </div>
    </div>
  )
}

export default Features