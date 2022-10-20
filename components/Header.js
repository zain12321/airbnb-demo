import Image from 'next/image'
import React, { useState } from 'react'
import {BiSearch, BiMenu} from 'react-icons/bi'
import {RiGlobalLine} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState([new Date()]);
  const [endDate, setEndDate] = useState([new Date()]);
  const [nuOfGuests, setNuOfGuests] = useState(1);
   const router = useRouter();
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
        pathname: '/search',
        query : {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          nuOfGuests,
        }
    })
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className='sticky top-0 z-50 bg-white
     shadow-md grid grid-cols-3 md:px-7 '>
        <div onClick={() => router.push('/')} className='relative h-[60px] sm:h-[70px] 
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
            <input  value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
             type='text' placeholder={placeholder || "Search your search"} className='
            outline-none bg-transparent flex-grow ml-1 w-[130px] sm:w-0  sm:ml-5 pr-1' />
            <BiSearch onClick={search} className='hidden cursor-pointer md:inline-flex w-8 p-[7px] h-8
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
        </div >
        {searchInput && 
        <div className='flex flex-col mx-auto col-span-3'>
          <DateRangePicker 
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={['#FD5B61']}
          onChange={handleSelect}
          className=''
          />
             <div className='flex items-center border-b mb-4 '>
            <h2 className='font-semibold text-2xl flex-grow '>Number of Guests</h2>
            <HiUsers className='h-5 w-5'/>
            <input type='number'
            onChange={e => setNuOfGuests(e.target.value)}
            min={1}
            value={nuOfGuests} className="w-12 text-lg pl-2 outline-none text-red-400"/>
            </div>
            <div className='flex items-center mb-2'>
              <button onClick={resetInput} className='font-semibold flex-grow text-gray-400'>Cancel</button>
              <button  className='font-semibold flex-grow text-red-400' onClick={search}>Search</button>
              </div>
          </div>
       
          }
    </header>
  )
}

export default Header