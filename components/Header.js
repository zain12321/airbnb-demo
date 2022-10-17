import Image from 'next/image'
import React from 'react'
import {BiSearch, BiMenu} from 'react-icons/bi'
import {RiGlobalLine} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import {} from 'react-icons/'

function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white
     shadow-md grid grid-cols-3 md:px-7 '>
        <div className='relative h-[60px] sm:h-[70px] 
        flex items-center cursor-pointer
         my-auto'>
            <Image 
            src='https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg'
            alt=''
            className=''
            layout='fill'
            objectFit='contain'
            objectPosition='left'
     
          />
        </div>
        <div className='rounded-full md:border-2 py-2 flex items-center
         my-2 md:shadow-sm text-sm text-gray-600 placeholder:text-gray-400
         '>
            <input type='text' placeholder="Search your search" className='
            outline-none bg-transparent flex-grow ml-1 w-[130px] sm:w-0  sm:ml-5 pr-1' />
            <BiSearch className='hidden md:inline-flex w-8 p-[7px] h-8
             bg-red-500 rounded-full
             text-white md:mx-2'/>
        </div>
        <div className='flex items-center justify-end
         space-x-4 text-gray-500'>
          <p className='hidden cursor-pointer md:inline'>Become a Host</p>
          <RiGlobalLine className='h-5 w-5 hidden cursor-pointer md:inline'/>
          <div className='flex items-center space-x-2 border-2 p-2 rounded-full ml-1'>
            <BiMenu className='h-6 w-6 cursor-pointer'/>
            <FaUserCircle className='h-6 w-6 cursor-pointer
            '/>
          </div>
        </div>
    </header>
  )
}

export default Header