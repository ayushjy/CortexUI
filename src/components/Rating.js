import React from 'react'

const Rating = () => {
   const data = [
      {
         image1: "/img/rating1.png",
         image: "/img/ratinga.png",
         rating: "4.5 Score,9 Reviews",
      },
      {
         image1: "/img/rating2.png",
         image: "/img/ratinga.png",
         rating: "4.5 Score,9 Reviews",
      },
      {
         image1: "/img/rating3.png",
         image: "/img/ratinga.png",
         rating: "4.5 Score,9 Reviews",
      }
   ]
   return (
      <div className='flex flex-col mt-28'>
         <div className='text-2xl font-normal text-gray-100 outfit text-center'>Trusted by thousands of users around the world</div>
         <div className='flex justify-between items-center mt-16'>
            {data.map((item, index) => (
               <div key={index} className='flex gap-3 items-end'>
                  <img src={item.image1} />
                  <div className='flex flex-col gap-5'>
                     <img src={item.image}/>
                        <div className='text-gray-400 text-sm font-semibold sora'>{item.rating}</div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Rating