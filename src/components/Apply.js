import React from 'react'

const Apply = () => {
  return (
    <div className='mt-32'>
        <div className='w-full flex justify-center'>
        <div className='text-4xl font-medium text-gray-100 leading-relaxed sora w-1/2 text-center'>Apply On Any Section Or Enable For Whole Page</div>
        </div>
        <div className='flex gap-6 mt-20'>
          <div className='h-full flex flex-col gap-6 px-5 py-8 w-1/2 bg-[linear-gradient(90deg,#F87516_0%,#5E11FF_100%)] rounded-3xl'>
            <div className='text-2xl font-medium text-gray-100 sora'>Apply On Section</div>
            <div className='font-normal text-gray-400 text-lg'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </div>
            <div><img src="/img/section.png" alt="section-png"/></div>
          </div>
          <div className='flex pt-16 w-1/2 h-full'>
          <div className='flex flex-col gap-6 px-5 py-8 bg-[linear-gradient(90deg,#F87516_0%,#5E11FF_100%)] rounded-3xl'>
            <div className='text-2xl font-medium text-gray-100 sora'>Apply On Section</div>
            <div className='font-normal text-gray-400 text-lg'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </div>
            <div><img src="/img/section.png" alt="section-png"/></div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Apply