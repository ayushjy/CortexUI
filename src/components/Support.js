import React from 'react'

const Support = () => {
  return (
    <div className='flex flex-col items-center gap-6 rounded-3xl bg-[linear-gradient(90deg,#130c24_50%,#1f1830_100%)] mt-36 py-12 h-full w-full'>
        <div className='text-2xl font-medium text-gray-100 sora'>Supported by All Popular Browsers</div>
        {/* <div className='w-full'> */}
        <div className='font-normal text-gray-400 text-lg w-2/5 text-center flex justify-center'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</div>
        {/* </div> */}
        <div><img src="/img/browsers.png" alt="browsers" /></div>
    </div>
  )
}

export default Support