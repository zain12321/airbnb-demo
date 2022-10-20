import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {format} from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({searchResult}) {
    const router = useRouter();
   const {location, startDate, endDate, nuOfGuests} = router.query;
   const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
   const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
   const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${nuOfGuests} guests`}/>
        <main className='flex flex-grow pt-14 px-6'>
            <section>
                <p className='text-xs'>300+  Stays - {range} - for {nuOfGuests} 
               {" "} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex space-x-3
                 mb-5 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancelation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More Filters</p>
                </div>
                <div className='flex flex-col mb-4'>
                {searchResult.map(({img, location, title, description, lat, long, price,
                star, total}) => (
                    <InfoCard key={img} img={img} location={location} title={title} description={description} lat={lat} 
                    star={star} total={total}  long={long} price={price}  />
                ))}
                </div>
               
            </section>
            <section>
           
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search;


export async function getServerSideProps() {
  const searchResult = await fetch('https://www.jsonkeeper.com/b/5NPS').then(res => res.json())
  return {
    props : {
        searchResult
    }
  }
}
