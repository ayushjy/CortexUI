import React from 'react'

const Features = () => {
  return (
    <div className='mt-36'>
        <div className='flex flex-col items-center gap-4'>
        <div className='text-4xl font-medium text-gray-100 leading-relaxed sora w-1/2 flex justify-center text-center'>An All-Round Plugin With Powerful Features</div>
        <div className='font-normal text-gray-400 flex justify-center w-1/2 text-center text-lg'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</div>
        </div>
        <div className='mt-24 flex gap-6'>
            <div className='w-1/3 h-full px-6 py-10 bg-[linear-gradient(0deg,#130c24_50%,#1f1830_100%)] rounded-3xl'>
                <div className='-mx-8 -mt-8 mb-6'><img src="/img/lightweight.png" alt="lightweight"/></div>
                <div className='flex flex-col gap-4 items-start'>
                    <div className='text-2xl font-medium text-gray-100 sora'>Light Weight</div>
                    <div className='font-normal text-gray-400 text-lg sora'>Motion Art for Elementor is designed to be lightweight.</div>
                </div>
            </div>
            <div className='w-1/3 h-full px-6 py-10 bg-[linear-gradient(90deg,#130c24_50%,#1f1830_100%)] rounded-3xl'>
                <div className='-mx-8 -mt-8 mb-6'><img src="/img/like.png" alt="like"/></div>
                <div className='flex flex-col gap-4 items-start'>
                    <div className='text-2xl font-medium text-gray-100 sora'>100% Responsive</div>
                    <div className='font-normal text-gray-400 text-lg  sora'>Create a consistent visual experience across all devices..</div>
                </div>
            </div>
            <div className='w-1/3 h-full px-6 py-10 bg-[linear-gradient(90deg,#130c24_50%,#1f1830_100%)] rounded-3xl'>
                <div className='-mx-8 -mt-8 mb-6'><img src="/img/interface.png" alt="interface"/></div>
                <div className='flex flex-col gap-4 items-start'>
                    <div className='text-2xl font-medium text-gray-100 sora'>User Friendly Interface</div>
                    <div className='font-normal text-gray-400 text-lg  sora'>Ensure a smooth experience for both applicants and administrators.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features