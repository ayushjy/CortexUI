import React from 'react'

const Rating = () => {
  return (
    <div className='flex flex-col mt-28'>
        <div className='text-2xl font-normal text-gray-100 outfit text-center'>Trusted by thousands of users around the world</div>
        <div className='flex justify-between items-center mt-16'>
            <div className='flex gap-3 items-end'>
               <img src="/img/rating1.png"/>
               <div className='flex flex-col gap-5'>
                <img src="/img/ratinga.png"/>
                <div className='text-gray-400 text-sm font-semibold sora'>4.5 Score,9 Reviews</div>
               </div>
            </div>
            <div className='flex gap-3 items-end'>
               <img src="/img/rating2.png"/>
               <div className='flex flex-col gap-5'>
                <img src="/img/ratinga.png"/>
                <div className='text-gray-400 text-sm font-semibold sora'>4.5 Score,9 Reviews</div>
               </div>
            </div>
            <div className='flex gap-3 items-end'>
               <img src="/img/rating3.png"/>
               <div className='flex flex-col gap-5'>
                <img src="/img/ratinga.png"/>
                <div className='text-gray-400 text-sm font-semibold sora'>4.5 Score,9 Reviews</div>
               </div>
            </div>
            
        </div>
    </div>
  )
}

export default Rating