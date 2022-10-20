import Image from 'next/image'

function SmallCard({img , location, distance}) {
  return (
    <div className='flex mt-5 items-center m-2 cursor-pointer
    hover:scale-105 transition  duration-500 
     space-x-4 hover:bg-gray-100 ease-out rounded-lg'>
    <div className='
    relative h-16 w-16'>

    <Image
      src={img}
      layout='fill'
      className='rounded-lg'
      alt="card"
      />
       </div>
      <div>
        <h1>{location}</h1>
        <p>{distance}</p>
      </div>
    </div>
  )
}

export default SmallCard