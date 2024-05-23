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
        <div className='text-4xl font-medium text-gray-100 leading-relaxed sora w-1/2 flex justify-center text-center max-lg:text-3xl max-lg:leading-relaxed'>An All-Round Plugin With Powerful Features</div>
        <div className='font-normal text-gray-400 flex justify-center w-1/2 text-center text-lg max-lg:w-2/3'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</div>
        </div>
        <div className='mt-24 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:col-span-2'>
            {data.map((item,index)=>(
                    <div key={index} className='w-full h-full px-6 py-10 bg-[linear-gradient(90deg,#130c24_50%,#1f1830_100%)] rounded-3xl'>
                    <div className='-mx-8 -mt-8 mb-6'><img src={item.image}/></div>
                    <div className='flex flex-col gap-4 items-start'>
                        <div className='text-2xl font-medium text-gray-100 sora'>{item.heading}</div>
                        <div className='font-normal text-gray-400 text-lg sora'>{item.feature}</div>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Features