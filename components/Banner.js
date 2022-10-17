import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px]
     xl:h-[550px] 2xl:h-[700px]'>
        <Image 
        src='https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg'
        alt=''
        layout='fill'
        className='object-cover' />
        <div className='absolute top-1/2 text-center w-full'>
            <p className='text-sm sm:text-lg font-medium'>Not Sure where to go? Perfect.</p>
            <button className='text-purple-500 bg-white py-4
             px-10 shadow-md hover:shadow-2xl 
             active:scale-90 transition duration-150 rounded-full my-3 font-bold '>
                I'm Flexible</button>
        </div>
        
        </div>
  )
}

export default Banner